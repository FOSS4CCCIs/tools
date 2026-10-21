#!/usr/bin/env node
/**
 * Rebuilds src/data/tools.json from the FOSS4CCCIs Grist document.
 *
 * Grist is the source of truth for tool records and their descriptive
 * fields, including the `category` Choice List and the static
 * `Github_Stars` column. GitHub stars and last-update dates are refreshed
 * live from the GitHub API when a GITHUB_TOKEN is available (as in GitHub
 * Actions); without a token, the values already in Grist/tools.json are kept.
 *
 * Configuration (all optional — the FOSS4CCCIs doc is public):
 *   GRIST_DOC_ID     Grist document id
 *   GRIST_TABLE_ID   Grist table id
 *   GRIST_API_KEY    Bearer token, only needed if the doc becomes private
 *   GITHUB_TOKEN     Enables live GitHub stars / last-update refresh
 */
import { readFile, writeFile } from "node:fs/promises";

const GRIST_BASE = (process.env.GRIST_BASE_URL || "https://docs.getgrist.com").replace(/\/+$/, "");
const DOC_ID = process.env.GRIST_DOC_ID || "8DBPFSG3ugAQm7xi7Crjzu";
const TABLE_ID = process.env.GRIST_TABLE_ID ||
  "FOSS4CCCIs_All_Tools_and_Platforms_v15_final_merged_tools_platforms_csv_2026_06_10_17_15";
const GRIST_API_KEY = process.env.GRIST_API_KEY || "";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

// ---------------------------------------------------------------------------
// Grist fetch
// ---------------------------------------------------------------------------

async function grist(path) {
  const headers = { Accept: "application/json" };
  if (GRIST_API_KEY) headers.Authorization = `Bearer ${GRIST_API_KEY}`;
  const res = await fetch(`${GRIST_BASE}/api/docs/${DOC_ID}/tables/${TABLE_ID}${path}`, { headers });
  if (!res.ok) throw new Error(`Grist API ${res.status} on ${path}: ${await res.text()}`);
  return res.json();
}

async function fetchAllRecords() {
  // This deployment ignores `offset`, but honours large limits (verified up
  // to 1000 records in one response). Guard against silent truncation.
  const data = await grist("/records?limit=1000");
  const rows = data.records ?? [];
  if (rows.length === 0) throw new Error("Grist returned 0 records — refusing to overwrite the catalogue.");
  if (rows.length >= 1000) console.warn("WARNING: got 1000 records — the table may exceed a single page; check pagination.");
  return rows.map((r) => ({ gristId: r.id, ...r.fields }));
}

// ---------------------------------------------------------------------------
// Field mapping
// ---------------------------------------------------------------------------

// "GPLv2" -> GPL / 2.0, "Apache 2.0" -> Apache / 2.0.
// Version-less licences (MIT, Proprietary, BSD-2-Clause, ...) are kept whole
// with version "0.0", matching the existing site data convention.
function splitLicense(raw) {
  const v = String(raw ?? "").trim();
  const m = v.match(/^(GPL|AGPL|LGPL|Apache|MPL|BSL|EUPL|CC BY-SA)[- ]?v?(\d+(?:\.\d+)?)/i);
  if (m) {
    const version = m[2].includes(".") ? m[2] : `${m[2]}.0`;
    const family = m[1].toUpperCase();
    const canonical = { APACHE: "Apache", "CC BY-SA": "CC BY-SA" }[family] ?? family;
    return { license: canonical, license_version: version };
  }
  return { license: v, license_version: "0.0" };
}

// Grist "types" is a Choice List that carries a stray "L" entry; the site
// expects a comma-separated string.
function mapTypes(types) {
  if (!Array.isArray(types)) return String(types ?? "");
  return types.filter((t) => t !== "L" && String(t).trim() !== "").join(", ");
}

// ---------------------------------------------------------------------------
// GitHub stats (only when a token is available — 5000 req/h in Actions)
// ---------------------------------------------------------------------------

async function refreshGithubStats(tools) {
  if (!GITHUB_TOKEN) {
    console.log("No GITHUB_TOKEN — keeping existing GitHub stars/last-update values.");
    return;
  }
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "foss4cccis-tools-sync",
  };
  let refreshed = 0;
  for (const tool of tools) {
    const m = String(tool.code || "").match(/^https?:\/\/github\.com\/([^/\s]+)\/([^/\s#?]+)/i);
    if (!m) continue;
    try {
      const res = await fetch(`https://api.github.com/repos/${m[1]}/${m[2]}`, { headers });
      if (!res.ok) continue;
      const repo = await res.json();
      tool.github_stars = repo.stargazers_count ?? tool.github_stars ?? "";
      tool.github_last_update = (repo.pushed_at ?? "").slice(0, 10) || tool.github_last_update || "";
      refreshed++;
    } catch {
      // network/rate-limit hiccup: keep the previous value
    }
  }
  console.log(`Refreshed GitHub stats for ${refreshed} tools.`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const SITE_FIELDS = [
  "name", "category", "description", "license", "license_version",
  "owner_project", "ease_of_use", "website", "docs", "code",
  "github_stars", "github_last_update", "alternatives", "notes", "types",
];

const oldPath = new URL("../src/data/tools.json", import.meta.url);
let oldTools = [];
try {
  oldTools = JSON.parse(await readFile(oldPath, "utf8"));
  console.log(`Loaded ${oldTools.length} existing tools for enrichment.`);
} catch {
  console.log("No existing tools.json found — building from Grist only.");
}
const oldByName = new Map(oldTools.map((t) => [String(t.name ?? "").toLowerCase(), t]));

const gristRows = await fetchAllRecords();
console.log(`Fetched ${gristRows.length} tools from Grist.`);

const tools = [];
const added = [];
for (const row of gristRows) {
  const name = String(row.name ?? "").trim();
  const prev = oldByName.get(name.toLowerCase());
  if (!prev) added.push(name);

  const { license, license_version } = splitLicense(row.license);
  tools.push({
    name,
    category: Array.isArray(row.category)
      ? row.category.filter((c) => c !== "L" && String(c).trim() !== "")
      : prev?.category ?? [],
    description: String(row.description ?? ""),
    license,
    license_version,
    owner_project: String(row.owner_project ?? ""),
    ease_of_use: String(row.ease_of_use ?? ""),
    website: String(row.website ?? ""),
    docs: String(row.docs ?? ""),
    code: String(row.code ?? ""),
    github_stars: row.Github_Stars ?? prev?.github_stars ?? "",
    github_last_update: prev?.github_last_update ?? "",
    alternatives: String(row.alternatives ?? ""),
    notes: String(row.notes ?? ""),
    types: mapTypes(row.types),
  });
}

// Tools that exist on the site but not (any more) in Grist are kept rather
// than silently deleted; they are logged so the difference is visible.
const newNames = new Set(tools.map((t) => t.name.toLowerCase()));
const orphans = oldTools.filter((t) => !newNames.has(String(t.name ?? "").toLowerCase()));
for (const orphan of orphans) {
  const record = {};
  for (const field of SITE_FIELDS) record[field] = orphan[field] ?? (field === "category" ? [] : "");
  tools.push(record);
}

await refreshGithubStats(tools);

tools.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

await writeFile(oldPath, JSON.stringify(tools, null, 2) + "\n");

console.log(`\nSummary: ${tools.length} tools written to src/data/tools.json`);
if (added.length) console.log(`New from Grist (${added.length}): ${added.join(", ")}`);
if (orphans.length) console.log(`Not in Grist, kept from site (${orphans.length}): ${orphans.map((t) => t.name).join(", ")}`);
