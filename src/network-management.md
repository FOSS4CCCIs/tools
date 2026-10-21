---
layout: base.njk
permalink: "network-management.html"
eyebrow: Category
title: Network Management
description: Open-source tools for network monitoring, infrastructure management, automation, security, and affordable hardware for community networks.
intro: Keep the network reliable, fast, and secure — connectivity has to earn the community's trust.
---

As users come to depend on the network for education, livelihoods, health services, and emergencies, their tolerance for downtime falls quickly. Every outage is more than a technical fault — it is a withdrawal from the community's trust in the initiative. Connectivity is increasingly recognised as an enabler of human rights, which raises the stakes further: professional network management is part of honouring that promise ([Community Network Readiness Assessment Handbook](https://www.internetsociety.org/resources/doc/2022/community-network-readiness-assessment-handbook/)).

Good network management for a CCCI balances five goals:

- **Reliability** — consistent uptime, with backup power and redundant links.
- **Performance** — enough bandwidth and low enough latency to meet user expectations.
- **Transparency** — public status pages and dashboards users can see for themselves.
- **Scalability** — growth without proportional increases in cost or complexity.
- **Participatory governance** — documentation and decisions the community can actually join.

![Technician configuring community network equipment](img/network-management-hero.jpg)

## Monitoring and alerting

Proactive monitoring prevents outages, speeds up troubleshooting, and gives you the historical data you need for capacity planning. Start small: one monitoring tool on a low-cost server, alerting to a WhatsApp or SMS group, beats an elaborate stack nobody maintains.

| Tool | What it does | Notes for CCCIs |
|------|--------------|----------------|
| LibreNMS | Auto-discovering monitoring, alerting, and graphing for a wide range of devices | Best first step: light, self-hosted, runs on a Raspberry Pi or cheap VPS |
| Zabbix | Enterprise-grade monitoring with distributed options | Powerful but demanding — adopt when you have dedicated IT staff |
| OpenWISP | Wi-Fi and mesh network management with topology, registration, and firmware provisioning | Built with community networks and OpenWrt in mind |
| Smokeping | Latency measurement and visualisation over time | Very light; ideal for troubleshooting intermittent links on low-bandwidth sites |
| Cacti | Polling and RRDtool-based graphing of traffic and loads | Runs happily on older hardware |
| Nagios / Icinga | Classic monitoring and alerting frameworks with plugin ecosystems | Steep learning curve; strong community support |
| Netdata | Real-time per-second metrics with zero-configuration dashboards | Minimal resource usage, good for servers and gateways |
| PRTG / Observium | Proprietary options with free tiers for small networks | Good stopgaps where ease matters more than openness |

**Practices that matter more than tools:**

- Configure alerts for critical metrics (latency, packet loss, bandwidth saturation, device down) and route them to SMS, WhatsApp, or Telegram — not just email.
- Pair your monitor with **Grafana** dashboards; publish a simple public status page so users can see the network is healthy.
- Train local volunteers to read the dashboards and report issues — monitoring is a great first technical role for community members.
- Keep a living network diagram (draw.io or similar) so new volunteers can orient themselves.

## Infrastructure management: IPAM, inventory, documentation

Every device you add without records becomes future downtime. IP address management (IPAM) prevents conflicts; an asset inventory turns "which router is on that tower?" into a lookup.

| Tool | What it does | Notes for CCCIs |
|------|--------------|----------------|
| phpIPAM | Web-based IP address management with PowerDNS integration | Simple entry point; runs on a Raspberry Pi |
| NetBox | IPAM plus DCIM (racks, cables, devices) | Adopt as you grow; a server and some technical capacity required |
| OpenAudIT | Automated network discovery and inventory auditing | Discovers devices and tracks configurations, low bandwidth friendly |
| Netdoc | ISP-focused inventory and documentation platform | Designed for small operators |
| RackTables | Datacentre/server-room asset tracking | Good for the "back office" rack of a growing CCCI |

Keep documentation in a wiki (**DokuWiki**, **Wiki.js**, **BookStack**) hosted on your own server, with offline copies for volunteers without connectivity. Label hardware physically (QR codes linked to your inventory work well) and involve users in asset tracking.

## Automation and configuration

Automation reduces manual errors, saves volunteer time, and keeps configurations consistent as the network grows. It is also insurance: automated backups mean a misconfiguration is a rollback, not a rebuild.

| Tool | What it does | Notes for CCCIs |
|------|--------------|----------------|
| Ansible | Agentless configuration management with simple YAML playbooks | The standard choice; agentless is ideal for mixed MikroTik/OpenWrt/Ubuntu fleets |
| SaltStack | High-speed remote execution and configuration management | Better for larger, more complex estates |
| RANCID | Classic network device configuration backup and change history | Lightweight, runs on very modest servers |
| Oxidized | Modern configuration backup for a wide range of devices | Successor to RANCID; integrates with LibreNMS and Git |

Practices:

- Keep device configurations in **Git** (self-hosted Gitea or a public forge) — you get change history, review, and free backups at once.
- Start with automated backups (RANCID/Oxidized), then move to day-to-day automation (Ansible) once backups are routine.
- Encourage technically-inclined volunteers to contribute playbooks — automation is a skill the community keeps.

## Network security

Security protects user data, prevents abuse, and keeps the network a safe commons. A perimeter firewall, encrypted remote access, and sane access control cover most CCCI needs.

| Tool | What it does | Notes for CCCIs |
|------|--------------|----------------|
| OPNsense | FreeBSD-based firewall and routing platform | Runs on low-cost hardware; web UI approachable for volunteers |
| pfSense CE | The classic FreeBSD firewall distribution | Same family as OPNsense; large community and documentation |
| WireGuard | Modern, fast, kernel-based VPN | Simple to deploy on low-power devices; ideal for remote management |
| OpenVPN | Established userspace VPN | More configuration, broad client support |
| FreeRADIUS | AAA (authentication, authorisation, accounting) server | The backbone for hotspot/captive-portal user management |
| PacketFence | Full network access control (NAC) with captive portal, 802.1X | Heavyweight; relevant once the network is large or institutional |

Practices:

- Change default credentials everywhere, apply firmware updates on a schedule, and keep admin interfaces off the public internet.
- Use WireGuard for remote access to tower and router management.
- Use a captive portal (RADIUS-backed, e.g. with OpenWISP or MikroTik's built-in tools) for guest access, vouchers, and fair-use policies.
- Run periodic vulnerability scans (Nmap, OpenVAS) and keep a simple written security policy for users.

## Low-bandwidth environments

Many CCCIs manage networks over the same constrained links they serve. Optimise for it:

- Prefer **lightweight tools** (Smokeping, Cacti, Netdata, dnsmasq) over heavyweight suites where bandwidth is scarce.
- Cache DNS locally with **dnsmasq** on the router — it cuts latency and upstream queries.
- Strip **OpenWrt** builds down to essential packages on low-power devices.
- Enable compression (gzip/Brotli) on your web services; cache static content with a reverse proxy (Nginx).
- Host local copies of documentation and tutorials so volunteers can work offline.

## Localisation

Multilingual communities need tools and documentation in local languages, or participation narrows to English speakers.

- Prioritise translating **user-facing** surfaces first: captive portals, payment pages, support notices.
- Run community translation through **Weblate** (self-hosted) or **Crowdin**/**Transifex** (free for open-source projects).
- Choose platforms with mature multilingual support — LibreNMS, OpenWISP, and most billing tools ship with community translations.
- Run training workshops in local languages; a translated interface without translated training only gets you halfway.

## Hardware recommendations

Hardware must be affordable, locally available, durable, and energy-efficient. Where possible, pilot with what is already in the local market.

| Role | Commonly used | Typical cost |
|------|---------------|--------------|
| Routers (low-cost) | TP-Link Archer C7, GL.iNet GL-AR750S, Ubiquiti EdgeRouter X — OpenWrt-friendly | $50–150 |
| Routers (higher capacity) | MikroTik hAP/CCR series, Ubiquiti UniFi, Cambium ePMP | $100–500 |
| Outdoor access points & CPE | Ubiquiti NanoStation/LiteBeam, MikroTik RB911G, TP-Link EAP series | $50–200 |
| Managed switches | TP-Link TL-SG108E, Netgear GS308T, MikroTik CSS | $30–150 |
| Servers for your tools | Raspberry Pi 4/5, Intel NUC, Mini-ITX builds — enough for LibreNMS, phpIPAM, Grafana | $50–300 |
| Antennas | Ubiquiti/MikroTik sectors, and DIY options (cantennas) for ultra-low budgets | $20–200 |
| Power | Solar panels + deep-cycle batteries, PoE injectors — essential for off-grid sites | $50–500 |
| Protection | Lightning arrestors and surge protectors — cheap insurance in tropical regions | $10–100 |

![Volunteers assembling a solar-powered network node](img/network-hardware.jpg)

Buy from local vendors where possible (easier returns and spares), design for solar where the grid is unreliable, and always budget for surge protection on outdoor runs ([Wireless Networking in the Developing World](https://wndw.net/)).

## What peer networks use

- **Zenzeleni Networks (South Africa)** — OpenWrt on Ubiquiti hardware with LibreNMS for monitoring. [zenzeleni.net](https://www.zenzeleni.net/)
- **NYC Mesh (USA)** — OpenWISP for topology and member management. [nycmesh.net](https://www.nycmesh.net/)
- **Guifi.net (Spain)** — custom monitoring atop a large community-run inventory; a model for network-as-commons documentation. [guifi.net](https://guifi.net/)
- **AirJaldi (India)** — MikroTik core with The Dude for monitoring across rural links. [airjaldi.com](https://airjaldi.com/)

## Suggested roadmap

| Stage | Focus |
|-------|-------|
| **Start (0–6 months)** | OpenWrt on low-cost routers; LibreNMS (or Cacti) on a Pi; diagram the network; WhatsApp group for outage alerts; solar for critical sites; start localisation of the captive portal |
| **Grow (6–18 months)** | Zabbix or OpenWISP as complexity rises; RANCID/Oxidized config backups into Git; phpIPAM for addresses; OPNsense/pfSense at the edge; WireGuard for remote access; train volunteer "super users" |
| **Professionalise (18+ months)** | NetBox for IPAM+DCIM; Ansible for routine changes; Grafana + Prometheus for analytics and a public status page; periodic security audits; MFA on administrative access; formal governance for infrastructure decisions |

## Further reading

- [OpenWrt documentation](https://openwrt.org/docs/start) · [LibreNMS docs](https://docs.librenms.org/) · [Zabbix manual](https://www.zabbix.com/documentation/current/en/manual) · [NetBox docs](https://netboxlabs.com/docs/netbox/) · [Ansible docs](https://docs.ansible.com/)
- [Wireless Networking in the Developing World](https://wndw.net/) — the classic free book on planning and building low-cost networks
- [Telecommunications Reclaimed](https://netcommons.eu/telecommunications-reclaimed) — a hands-on guide to networking communities, from the guifi.net tradition
- [APC Community Networks Learning Space — Network Management](https://cnlearning.apc.org/?s=Network+Management&e_search_props=d5a3862-7)
