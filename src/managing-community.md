---
layout: base.njk
permalink: "managing-community.html"
eyebrow: Category
title: Managing Community
description: Tools and practices for customer service, user tracking, feedback, transparency, and fair governance in community networks.
intro: Users are not just customers — they are the owners, the workforce, and the reason the network exists.
---

In community networks, users are not just customers — they are stakeholders. Word-of-mouth in a tight-knit community is your best marketing and your harshest critic: unresolved issues drive churn, damage reputation, and destabilise revenue. This category is about the service and governance work that keeps a network *wanted*: responding promptly when people raise issues, resolving them fairly, tracking who your users are, and giving the community a real voice in decisions ([Johnson et al., Network Capacity as Common Pool Resource](https://dl.acm.org/doi/10.1145/3449135)).

> "Ensuring community participation is one of the most important strategies for the long term success of a community network." — [Community Network Readiness Assessment Handbook](https://www.internetsociety.org/resources/doc/2022/community-network-readiness-assessment-handbook/)

![A community workshop where everyone has a role](https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=70)

## Customer service that builds trust

| Tool | Role | Notes |
|------|------|-------|
| WhatsApp Business / Telegram | First-line support and announcements | Free, works on basic phones, supports local languages — start here |
| osTicket | Self-hosted ticketing system | Structured queues once volume outgrows chat groups |
| Znuny (OTRS fork) | Ticketing with workflow automation and multilingual support | For larger, multilingual support teams |
| Request Tracker (RT) | Highly customisable ticketing | Technical teams with specific workflows |
| FreeScout / Zammad | Lightweight open-source helpdesks | Friendly modern alternatives in the same space |
| Discourse | Self-hosted forum | Peer-to-peer support and announcements — guifi.net runs one |
| Nextcloud Talk / Jitsi | Self-hosted calls and meetings | Virtual town halls and trainings without third-party platforms |

**Practices:**

- Set and publish a simple service standard (e.g. "acknowledged within 24 hours, resolved within 48") and measure yourself against it.
- Train 2–3 community members as support agents; create templates for common issues (outages, payment help, password resets).
- Offer support in local languages and through the channels people actually use — including in-person at the network's premises.
- Close the loop publicly: report at community meetings (or on a noticeboard) what issues were raised and fixed.

## Knowing your users

Track just enough to serve people well: who is connected, on what plan, with what payment status — while respecting privacy and local data-protection rules. Collect only what you need, tell users what you keep, and never let user data leave the community without consent.

| Tool | Role | Notes |
|------|------|-------|
| Spreadsheets (LibreOffice, Google Sheets) | User list, plans, payments | A legitimate first step; keep a backup and use unique user IDs |
| NocoDB / Grist / Baserow | Self-hosted Airtable-style databases | Friendly upgrade path from spreadsheets, with APIs for automation |
| Splynx / Sonar / UCRM | ISP management: users, billing, provisioning, tickets | When user count makes manual tracking painful |
| SuiteCRM / CiviCRM | Relationship management | CiviCRM is aimed at non-profits — also tracks donors and volunteers |
| Odoo / ERPNext | ERP with CRM modules | One system for money, users, and inventory |

Segment users by need (students, businesses, households, clinics) so you can tailor plans and support — and watch usage data to spot both at-risk users and abuse.

## Feedback and community voice

Feedback only works if it is easy to give, and only counts if it visibly changes something.

| Channel | Best for |
|---------|----------|
| Short surveys (Google Forms, LimeSurvey, KoBoToolbox) | Quantitative snapshots; KoBo works offline for field collection |
| SMS and USSD feedback | Reaching basic-phone users — high response rates where data is scarce |
| Community meetings and focus groups | Deliberation and inclusion — deliberately include women, youth, and elders |
| Suggestion boxes (physical and digital) | Anonymous input from quieter members |
| Public roadmap or noticeboard | Showing what changed *because* of feedback |

![A community meeting where members discuss the network](https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=70)

Keep surveys under five minutes, translate them, and report back: "You asked for faster evening speeds — we upgraded the backhaul."

## Support, troubleshooting, and super users

- Build a **knowledge base** (Wiki.js, BookStack, DokuWiki) with FAQs and guides in plain local language, hosted on the network itself so it works offline.
- Create **short video tutorials** for setup, payments, and common fixes — host locally (MediaCMS/PeerTube) to avoid data costs.
- Cultivate **super users**: tech-savvy members who handle first-line fixes, freeing volunteers for harder problems.
- Use remote access (WireGuard, SSH) for routine troubleshooting; schedule on-site visits for hardware work and relationship-building.

![A volunteer learning new tech skills at their own pace](https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=70)

## Transparency: SLAs, dashboards, and open books

- Publish a **status page or dashboard** (Grafana on LibreNMS data, or lightweight Uptime Kuma) so users can see network health themselves.
- Set realistic service level commitments, track them, and report performance quarterly — then adjust with the community rather than silently.
- Combine network transparency with financial transparency (see [Managing Money](managing-money.html)): annual community audits where members review the books are a hallmark of well-governed CCCIs.
- Design sanctions and dispute processes that are transparent and privacy-respecting — opaque moderation erodes trust faster than congestion does ([Johnson et al., 2021](https://dl.acm.org/doi/10.1145/3449135)).

## Dispute resolution and fair governance

Conflicts — over bandwidth, payments, or governance — will happen. What matters is a process people see as fair:

- **Written, visible rules**: acceptable use, payment terms, and what happens on breach — posted at the premises and shared in chat groups.
- **Community mediation**: trusted elders or elected mediators for everyday disputes.
- **An elected committee** for cases mediation cannot settle.
- **Sanction logs**: transparent records of warnings, suspensions, and their reasons.
- **An appeals path** so decisions can be revisited without escalating to conflict.

## Suggested roadmap

| Stage | Focus |
|-------|-------|
| **Start (0–3 months)** | WhatsApp/Telegram support group; train 2–3 volunteer agents; publish a simple response-time promise; spreadsheet user list; baseline survey; suggestion box; monthly status updates at community meetings |
| **Grow (3–12 months)** | osTicket for tickets; SMS outage notifications; migrate user data to NocoDB or an ISP platform; quarterly surveys and focus groups; knowledge base and video tutorials in local languages |
| **Professionalise (12+ months)** | Public status dashboard; published SLA performance reports; CRM (CiviCRM) linking users, donors, and volunteers; formal dispute-resolution process with elected committee; annual community audit |

## Case studies

- **Zenzeleni (South Africa)** runs support through WhatsApp with local agents, keeping issue resolution inside the community. [zenzeleni.net](https://www.zenzeleni.net/)
- **TandaNET (Kenya)** uses Telegram channels for support and service updates alongside structured ticketing. [tandanet.or.ke](https://tandanet.or.ke/)
- **guifi.net (Spain)** runs Discourse forums and open documentation — governance as commons, at scale. [guifi.net](https://guifi.net/)
- The **Santa Inés community network** (Oaxaca, Mexico) shows that communities may prefer human-mediated, community-based management over purely automated mechanisms — and value privacy-respecting, participatory governance of shared capacity ([Johnson et al., 2021](https://dl.acm.org/doi/10.1145/3449135)).

## Further reading

- [Johnson, Jang, et al. — Network Capacity as Common Pool Resource (CSCW 2021)](https://dl.acm.org/doi/10.1145/3449135) — how one community governs shared network capacity
- [Community Network Readiness Assessment Handbook](https://www.internetsociety.org/resources/doc/2022/community-network-readiness-assessment-handbook/) — participation, communication, and governance practices
- [Community-centred connectivity: A new paradigm (APC)](https://www.apc.org/en/blog/community-centred-connectivity-new-paradigm) — why community-centred models outlast pure market models
- [Telecommunications Reclaimed](https://netcommons.eu/telecommunications-reclaimed) — governance lessons from the European community network movement
