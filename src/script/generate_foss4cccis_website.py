import os
import json
import shutil
import pandas as pd
from pathlib import Path

def generate_website(csv_path, output_dir="foss4cccis-website"):
    """
    Generate a static website for the FOSS4CCCIs Portfolio from a CSV file.

    Args:
        csv_path (str): Path to the CSV file containing the tools data.
        output_dir (str): Directory to save the generated website files.
    """
    # Create directory structure
    output_dir = Path(output_dir)
    res_dir = output_dir / "res" / "var" / "data"
    script_dir = output_dir / "src" / "script"
    os.makedirs(res_dir, exist_ok=True)
    os.makedirs(script_dir, exist_ok=True)

    # Step 1: Convert CSV to JSON
    df = pd.read_csv(csv_path)

    tools_list = []
    for _, row in df.iterrows():
        categories = [cat.strip() for cat in row['types'].split(',')] if pd.notna(row['types']) else []

        tool = {
            "name": row['name'],
            "category": categories,
            "description": row['description'],
            "license": row['license'],
            "license_version": str(row['license_version']) if pd.notna(row['license_version']) else "",
            "owner_project": row['owner_project'],
            "ease_of_use": row['ease_of_use'],
            "website": row['website'],
            "docs": row['docs'] if pd.notna(row['docs']) else "",
            "code": row['code'] if pd.notna(row['code']) else "",
            "github_stars": int(row['Github Stars']) if pd.notna(row['Github Stars']) else 0,
            "github_last_update": row['Github Last Update'] if pd.notna(row['Github Last Update']) else "",
            "alternatives": row['alternatives'] if pd.notna(row['alternatives']) else "",
            "notes": row['notes'] if pd.notna(row['notes']) else ""
        }
        tools_list.append(tool)

    # Save JSON
    with open(res_dir / "tools.json", "w", encoding="utf-8") as f:
        json.dump(tools_list, f, indent=2)

    # Step 2: Generate HTML
    html_content = """<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="An open-source tools and platforms portfolio for community networks and digital infrastructure.">
    <meta name="theme-color" content="#ffffff">
    <title>FOSS4CCCIs Portfolio</title>
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 4 L90 27 L90 73 L50 96 L10 73 L10 27 Z' fill='none' stroke='%233498db' stroke-width='12'/%3E%3C/svg%3E">
    <link rel="stylesheet" href="styles.css">
    <script src="src/script/main.js" defer></script>
  </head>
  <body data-page="landing">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header class="site-header">
      <div class="shell masthead">
        <a class="wordmark" href="index.html">
          <svg class="hex hex-mark" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <path class="hex__ring" d="M50 4 L90 27 L90 73 L50 96 L10 73 L10 27 Z"/>
          </svg>
          <span class="wordmark__text">FOSS4CCCIs Portfolio</span>
        </a>
        <nav class="primary-nav" aria-label="Primary navigation">
          <ul>
            <li><a href="#categories">Browse by Category</a></li>
            <li><a href="#tools">Tools</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main-content">
      <section class="hero">
        <div class="shell">
          <p class="eyebrow">Open-source tools and platforms</p>
          <h1><span class="mark">Tools for Community Networks and Digital Infrastructure</span></h1>
          <p class="hero__intro">
            Explore documented open-source tools and platforms for community networks,
            organized for comparison, research, and practical discovery.
          </p>
        </div>
      </section>

      <section id="categories" class="section">
        <div class="shell">
          <h2>Browse by Category</h2>
          <div id="category-filters" class="category-filters"></div>
        </div>
      </section>

      <section id="tools" class="section">
        <div class="shell">
          <h2>Tools</h2>
          <div id="tools-list" class="tools-list"></div>
        </div>
      </section>

      <section class="section data-section">
        <div class="shell">
          <h2>A Durable Public Record</h2>
          <p class="measure">
            This portfolio is built from an open dataset of tools and platforms,
            ensuring transparency and accessibility.
          </p>
          <ul class="features">
            <li><strong>Open Formats</strong><span>Data is available in JSON format for easy reuse.</span></li>
            <li><strong>Traceable Sources</strong><span>Every tool entry includes source information and metadata.</span></li>
            <li><strong>Simple Delivery</strong><span>Plain HTML, CSS, and JavaScript work on any static host.</span></li>
          </ul>
          <p class="measure measure--spaced">
            <a href="res/var/data/tools.json" download>Download the Tools JSON</a>
          </p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="shell footer-layout">
        <div>
          <p><strong>FOSS4CCCIs Portfolio</strong></p>
          <p class="footer-note">
            Data sourced from the <a href="https://data.communitynetworks.group/trjYNKuki62E/FOSS4CCCIs-All-Tools-and-Platforms-v15">FOSS4CCCIs Database</a>.
          </p>
        </div>
      </div>
    </footer>
  </body>
</html>
"""

    with open(output_dir / "index.html", "w", encoding="utf-8") as f:
        f.write(html_content)

    # Step 3: Generate CSS
    css_content = """/* styles.css for FOSS4CCCIs Portfolio */
:root {
  --background: #ffffff;
  --surface: #ffffff;
  --band: #f4f4f4;
  --band-strong: #eaeaea;
  --text: #000000;
  --muted: #5a5a5a;
  --line: #e2e2e2;
  --accent: #3498db;
  --accent-deep: #2980b9;
  --radius: 0.25rem;
  --bar: 0.34em;
  color-scheme: light;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 100%;
}

* { box-sizing: border-box; }

html { background: var(--background); scroll-behavior: smooth; }

body {
  min-width: 20rem;
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-size: 1.125rem;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}

a {
  color: var(--text);
  text-decoration-color: var(--accent);
  text-decoration-thickness: 0.16em;
  text-underline-offset: 0.22em;
}

a:hover { background: var(--accent); text-decoration-thickness: 0.22em; }

button, input, select { color: inherit; font: inherit; }

:focus-visible { outline: 0.2rem solid var(--text); outline-offset: 0.2rem; }

.skip-link {
  position: absolute;
  z-index: 10;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.65rem 0.9rem;
  border-radius: var(--radius);
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transform: translateY(-150%);
}

.skip-link:focus { transform: translateY(0); }

.shell { width: min(100% - 3rem, 70rem); margin-inline: auto; }

.measure { max-width: 68ch; }

.mark {
  padding-inline: 0.06em;
  background-image: linear-gradient(to top, var(--accent) var(--bar), transparent var(--bar));
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.hex { display: block; width: 100%; height: 100%; }

.hex__ring {
  fill: none;
  stroke: var(--accent);
  stroke-width: 7;
  stroke-linejoin: round;
}

.hex-mark { width: 1.75rem; height: 1.75rem; flex: none; }

.site-header {
  background: var(--surface);
  box-shadow: 0 1px 0 var(--line);
}

.masthead {
  display: flex;
  min-height: 5.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.wordmark {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  gap: 0.65rem;
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-decoration: none;
}

.wordmark:hover .wordmark__text { background: var(--accent); }

.primary-nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.primary-nav a {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  color: var(--text);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
}

.primary-nav a:hover {
  background: transparent;
  box-shadow: inset 0 -0.55rem 0 var(--accent);
}

.hero {
  padding-block: clamp(4rem, 9vw, 7.5rem);
}

.eyebrow {
  margin: 0 0 1rem;
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1, h2, h3, h4, p { margin-top: 0; }

h1, h2, h3, h4 {
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.18;
  text-wrap: balance;
}

h1 {
  max-width: 20ch;
  margin-bottom: 1.75rem;
  font-size: clamp(2.4rem, 5.4vw, 4.2rem);
  line-height: 1.34;
}

h2 { margin-bottom: 1rem; font-size: clamp(1.7rem, 3vw, 2.4rem); line-height: 1.3; }

.hero__intro {
  max-width: 62ch;
  margin-bottom: 0;
  color: var(--muted);
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
}

.section { padding-block: clamp(3.5rem, 7vw, 6rem); }

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.category-filter {
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 0.9rem;
}

.category-filter:hover { background: var(--accent-deep); }

.tools-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tool-card {
  border: 1px solid var(--line);
  padding: 1.2rem;
  border-radius: var(--radius);
  background: var(--surface);
}

.tool-card h3 { margin: 0 0 0.8rem; color: var(--text); font-size: 1.2rem; }

.tool-card p { margin: 0.5rem 0; color: var(--muted); }

.tool-card strong { color: var(--text); }

.tool-card a { color: var(--accent); text-decoration: none; }

.tool-card a:hover { text-decoration: underline; }

.data-section { background: var(--band); }

.features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
  margin: 3rem 0 0;
  padding: 0;
  list-style: none;
}

.features li { padding-top: 1.25rem; border-top: 0.3rem solid var(--accent); }

.features strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.features span { color: var(--muted); }

.measure--spaced { margin-top: 1.5rem; }

.site-footer {
  background: var(--band);
  box-shadow: inset 0 0.3rem 0 var(--accent);
}

.footer-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(15rem, 1fr);
  gap: 3rem;
  padding-block: 3.5rem;
  font-size: 0.95rem;
}

.footer-layout p { max-width: 68ch; margin-bottom: 0.65rem; }

.footer-layout p:last-child { margin-bottom: 0; }

.footer-note { color: var(--muted); }

.footer-note a { color: var(--accent); text-decoration: none; }

.footer-note a:hover { text-decoration: underline; }

@media (max-width: 768px) {
  .masthead { flex-direction: column; gap: 1rem; }
  .primary-nav ul { flex-direction: column; gap: 0.5rem; }
  .hero h1 { font-size: 2rem; }
  .features { grid-template-columns: 1fr; }
  .footer-layout { grid-template-columns: 1fr; }
}
"""

    with open(output_dir / "styles.css", "w", encoding="utf-8") as f:
        f.write(css_content)

    # Step 4: Generate JavaScript
    js_content = """// src/script/main.js
let allTools = [];

async function loadTools() {
  try {
    const response = await fetch('res/var/data/tools.json');
    if (!response.ok) {
      throw new Error('Failed to load tools data');
    }
    allTools = await response.json();

    // Extract unique categories
    const categories = [...new Set(allTools.flatMap(tool => tool.category))];

    // Populate category filters
    const categoryFilters = document.getElementById('category-filters');

    // Add an "All" button
    const allButton = document.createElement('button');
    allButton.className = 'category-filter';
    allButton.textContent = 'All';
    allButton.onclick = () => displayTools(allTools);
    categoryFilters.appendChild(allButton);

    // Add category buttons
    categories.forEach(category => {
      const button = document.createElement('button');
      button.className = 'category-filter';
      button.textContent = category;
      button.onclick = () => filterToolsByCategory(category);
      categoryFilters.appendChild(button);
    });

    // Display all tools initially
    displayTools(allTools);
  } catch (error) {
    console.error('Error loading tools:', error);
    document.getElementById('tools-list').innerHTML = '<p>Error loading tools data. Please try again later.</p>';
  }
}

function filterToolsByCategory(category) {
  const filteredTools = allTools.filter(tool => tool.category.includes(category));
  displayTools(filteredTools);
}

function displayTools(tools) {
  const toolsList = document.getElementById('tools-list');
  toolsList.innerHTML = '';

  if (tools.length === 0) {
    toolsList.innerHTML = '<p>No tools found for this category.</p>';
    return;
  }

  tools.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.className = 'tool-card';

    let linksHtml = '';
    if (tool.website) {
      linksHtml += `<a href="${tool.website}" target="_blank">Website</a>`;
    }
    if (tool.docs) {
      linksHtml += ` | <a href="${tool.docs}" target="_blank">Docs</a>`;
    }
    if (tool.code) {
      linksHtml += ` | <a href="${tool.code}" target="_blank">Code</a>`;
    }

    const alternativesHtml = tool.alternatives ? `<p><strong>Alternatives:</strong> ${tool.alternatives}</p>` : '';
    const notesHtml = tool.notes ? `<p><strong>Notes:</strong> ${tool.notes}</p>` : '';

    toolCard.innerHTML = `
      <h3>${tool.name}</h3>
      <p><strong>Categories:</strong> ${tool.category.join(', ')}</p>
      <p><strong>Description:</strong> ${tool.description}</p>
      <p><strong>License:</strong> ${tool.license} ${tool.license_version}</p>
      <p><strong>Ease of Use:</strong> ${tool.ease_of_use}</p>
      <p><strong>Owner:</strong> ${tool.owner_project}</p>
      ${tool.github_stars ? `<p><strong>GitHub Stars:</strong> ${tool.github_stars}</p>` : ''}
      ${tool.github_last_update ? `<p><strong>Last Update:</strong> ${tool.github_last_update}</p>` : ''}
      <p>${linksHtml}</p>
      ${alternativesHtml}
      ${notesHtml}
    `;
    toolsList.appendChild(toolCard);
  });
}

window.onload = loadTools;
"""

    with open(script_dir / "main.js", "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Website generated in: {output_dir.resolve()}")

# Example usage
if __name__ == "__main__":
    csv_file_path = "FOSS4CCCIs - All Tools and Platforms v15-FOSS4CCCIs_All_Tools_and_Platforms_v15_final_merged_tools_platforms_csv_2026_06_10_17_15.csv"
    generate_website(csv_file_path)