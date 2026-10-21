---
layout: base.njk
permalink: "regulatory-compliance.html"
eyebrow: Category
title: Regulatory Compliance
description: Licensing, spectrum, legal structures, data protection, tax, and advocacy — staying legal and building a constructive relationship with the regulator.
intro: Operating legally is the price of admission — and a constructive regulator relationship is a competitive advantage.
---

> "To operate legally, a community network will require permission from the national regulator of the country in which they intend to operate... A community network may need more than one kind of license to operate different elements of their network." — [Community Network Readiness Assessment Handbook](https://www.internetsociety.org/resources/doc/2022/community-network-readiness-assessment-handbook/)

Compliance is not just a legal obligation — it is strategy. Non-compliance risks fines, shutdown, and confiscated equipment, and disqualifies you from grants and investment. Compliance, by contrast, opens doors: spectrum access, universal service funds, partnerships, and a seat at the policy table. The challenge is that rules are usually written for large commercial ISPs, so CCCIs must navigate licensing fees, spectrum scarcity, and data protection regimes with small budgets and no legal team ([Community-centred connectivity: a new paradigm](https://www.apc.org/en/blog/community-centred-connectivity-new-paradigm)).

![Meeting the regulator as partners, not adversaries](https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=1200&q=70)

## Licensing and spectrum

| Route | What it is | Typical cost | Notes |
|-------|------------|--------------|-------|
| License-exempt spectrum (Wi-Fi 2.4/5/6 GHz) | No licence needed for low-power use | Free | The default starting point — most community networks run on license-exempt bands |
| ISP / service provider licence | Permits selling connectivity to the public | $100–5,000+ | Required once you charge for service; varies by country |
| Spectrum licence | Use of specific licensed radio bands | $50–2,000 | Only needed when license-exempt bands cannot do the job |
| Simplified / community licences | Free or reduced-cost regimes for community or indigenous networks | Free–low | Mexico offers free social-purpose spectrum licences; Argentina has simplified registration; Kenya has a simplified community licence framework |
| Experimental / pilot licences | Temporary permission to test technology or a model | Varies | Useful for proof-of-concept phases |
| Infrastructure permits | Towers, masts, trenching, wayleaves | Varies | Often municipal — plan for it before building |

![A communication tower against a dramatic sky](https://images.unsplash.com/photo-1781085587586-f8e3dbf6bc7d?auto=format&fit=crop&w=1200&q=70)

**Practices:**

- **Start on license-exempt spectrum** and stay there as long as it serves you — every service you add under licence multiplies your fee and reporting burden.
- Find your national regulator's rules early ([ITU directory of NRAs](https://www.itu.int/en/ITU-D/Regulatory-Market/Pages/National-Regulatory-Authorities.aspx)) and ask neighbouring CCCIs what actually worked.
- Some countries waive or reduce fees for non-profits or community networks — ask explicitly, and check whether small-operator registration is free (as in France, Spain, Germany — one reason their community network movements are strong, while Belgium's €676 first-year fee suppresses them) ([Telecommunications Reclaimed](https://netcommons.eu/telecommunications-reclaimed)).
- Partner with a licensed ISP where a full licence is out of reach — you can operate under their umbrella while you grow.

## Legal structure

Your legal form determines what licences you can hold, what funding you can receive, and who is liable.

![Signing the paperwork that formalises the network](https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=70)

| Structure | Best for | Watch out for |
|-----------|----------|---------------|
| Non-profit / NGO | Grant-funded, community-governed networks | Restricted revenue generation; reporting overhead |
| Cooperative | Democratic member ownership | Governance complexity; cooperative law varies by country |
| Social enterprise / hybrid | Mission-driven networks that must trade | Dual compliance obligations |
| Small business / Ltd | Revenue-first networks seeking investment | Tax burden; possible tension with community values |
| Informal group | Pilots and early experiments | No legal protection, bank accounts, or licences — graduate out of it before you charge |

Zenzeleni and Rhizomatica operate as non-profits; guifi.net and Altermundi are organised as cooperatives; TandaNET uses a social-enterprise model; PamojaNet operates as a company. Choose deliberately — it is easier to pick correctly than to convert later.

## Data protection and privacy

Data protection regimes (GDPR-style laws, POPIA in South Africa, LGPD in Brazil, and emerging frameworks elsewhere) increasingly apply to CCCIs as service providers. The open-source stack makes compliance easier because you can self-host everything.

| Requirement | How to meet it with FOSS |
|-------------|--------------------------|
| Data minimisation | Collect only what billing and support need; avoid logging browsing histories |
| Consent and transparency | Plain-language, local-language privacy policy; consent at sign-up |
| Encryption in transit and at rest | WireGuard/OpenVPN tunnels; Let's Encrypt HTTPS everywhere; encrypted backups |
| User access and deletion rights | Self-hosted CRM (SuiteCRM, CiviCRM) with simple request handling |
| Breach response | A written, rehearsed incident plan; notification contacts for the local authority |

Surveillance risk is real in some jurisdictions — self-hosting user records inside the community is both a compliance measure and a protective one ([Telecommunications Reclaimed](https://netcommons.eu/telecommunications-reclaimed)).

## Tax and financial compliance

- Register the entity, obtain tax identification, and understand VAT/GST thresholds — many small CCCIs fall below them.
- Keep the books clean from day one (see [Managing Money](managing-money.html)); regulators and funders ask for the same reports.
- Track filing deadlines in a shared calendar; late filings cost more than the accountant.
- Where non-profits enjoy exemptions, apply for them formally — they are usually not automatic.
- When hiring staff or contractors, comply with local labour and payroll rules (statutory deductions, contracts).

## Universal Service Funds and public money

Most countries levy operators into a Universal Service Fund meant to connect the unserved — money that CCCIs are natural candidates for, yet rarely access. Argentina allocated part of its USF to rural and peri-urban networks; Kenya is evaluating a community-network allocation alongside its simplified licence framework ([Community-centred connectivity: a new paradigm](https://www.apc.org/en/blog/community-centred-connectivity-new-paradigm)).

- Check whether your country has a USF ([ITU USF resources](https://www.itu.int/en/ITU-D/Finance/Pages/USF.aspx)) and whether community initiatives are eligible.
- If eligibility is unclear, apply anyway or partner with a licensed entity — and say publicly that you tried. Documented demand is itself advocacy evidence.
- Pair USF applications with other public funding: rural broadband programmes, municipal partnerships, digital inclusion grants.

## Advocacy: shaping the rules you operate under

> "Community networks have both the expertise and the legitimacy to take an integral part in technical and legal debates over broadband policy, in which traditional, commercial ISPs are over-represented." — [Telecommunications Reclaimed](https://netcommons.eu/telecommunications-reclaimed)

| Approach | What it looks like |
|----------|-------------------|
| Join advocacy networks | APC, Rhizomatica, ISOC, and DC3 all carry community network perspectives into national and global policy |
| Respond to consultations | Regulators publish draft rules for comment — a short, evidence-based CCCI submission counts more than you think |
| Publish your evidence | Document coverage, pricing, and social outcomes; success stories are the strongest argument for reform |
| Meet the regulator | Invite regulators to visit the network; familiarity beats abstraction |
| Coordinate with peers | Joint positions from several CCCIs are harder to ignore than lone voices |

## Suggested roadmap

| Stage | Focus |
|-------|-------|
| **Start (0–3 months)** | Confirm what your services require legally; begin on license-exempt spectrum; draft a privacy policy and get user consent; research tax and registration requirements |
| **Grow (3–12 months)** | Register the entity and open a bank account; obtain required licences; implement encryption and basic data-protection practices; engage a local accountant; join one advocacy network |
| **Professionalise (12+ months)** | Apply for USF or public funding; review contracts with a lawyer; publish transparency and user-rights guides; respond to consultations; host a regulator or policymaker visit |

## Further reading

- [Community Network Readiness Assessment Handbook](https://www.internetsociety.org/resources/doc/2022/community-network-readiness-assessment-handbook/) — regulatory module for starting networks
- [Telecommunications Reclaimed](https://netcommons.eu/telecommunications-reclaimed) — policy chapters on licensing, spectrum, and the regulatory treatment of community networks
- [Community-centred connectivity: A new paradigm (APC/Intermedia)](https://www.apc.org/en/blog/community-centred-connectivity-new-paradigm) — policy reforms that let community models thrive
- [Dynamic Coalition on Community Connectivity](https://comconnectivity.org/) — annual outcome documents on community connectivity policy and financing
- [ITU directory of national regulatory authorities](https://www.itu.int/en/ITU-D/Regulatory-Market/Pages/National-Regulatory-Authorities.aspx)
