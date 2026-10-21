---
layout: base.njk
permalink: "enabling-payments.html"
eyebrow: Category
title: Enabling Payments
description: Open-source tools, mobile money integrations, and billing platforms so community network users can pay the way they already pay.
intro: If users cannot pay easily, they will not pay at all — meet people where their money already lives.
---

In much of the Global Majority, **cash is still king** and mobile money — M-Pesa, MTN MoMo, bKash, Orange Money — dominates digital transactions. Card payments and bank transfers are often the exception, not the rule. Poor payment design quietly kills community networks: adoption stalls, cash flow strains operations, manual reconciliation eats volunteer time, and unbanked users (1.7 billion people globally) are simply excluded ([Community Network Readiness Assessment Handbook](https://www.internetsociety.org/resources/doc/2022/community-network-readiness-assessment-handbook/)).

The goal of this category is customer service: **let people pay for connectivity the way they already pay for everything else.** ([Self-sustaining Financing Solutions for Community Connectivity — DC3](https://comconnectivity.org/self-sustaining-financing-solutions-for-community-connectivity/))

![A shopkeeper accepting a mobile money payment](img/payments-hero.jpg)

## Meet users where they already pay

Before choosing software, choose payment channels. The strongest CCCIs combine several:

| Channel | How it works | Where it fits |
|---------|--------------|---------------|
| Cash agents | Local shops or community centres collect payments on your behalf | Everywhere; essential for unbanked users. Zenzeleni (South Africa) collects cash at local shops |
| Prepaid vouchers | Paper or digital vouchers sold at local stores for time or data | No smartphone required; works offline. Used by Zenzeleni and Kasepuhan Ciptagelar (Indonesia) |
| USSD menus | Pay or check balance by dialling a short code on a basic phone | Regions with low smartphone penetration. TandaNET (Kenya) uses USSD |
| Group payments | A school, church, or village elder pays on behalf of many users | Cuts transaction costs in tight-knit communities. Used in Pathardi (India) |
| Mobile money | Wallet-based transfers pushed straight into your billing system | The backbone of urban and peri-urban CCCIs across Africa and South Asia |
| Hybrid | Mobile money + cash agents + vouchers together | Best practice: no user is excluded by any single channel's limits. PamojaNet (DRC) runs a hybrid model |

**Getting it right:**

- Survey the community first — ask how people already pay for airtime, school fees, or bus fares.
- Design USSD menus to be intuitive; they serve your least-connected users.
- Set clear, published turnaround for payment confirmation, and send SMS receipts.
- Train agents and community leaders who collect payments, and reconcile their accounts weekly.

## Mobile money integration

Direct API integrations with mobile network operators give instant, low-friction payment confirmation. Typical fees run 1–5% per transaction — negotiate bulk or non-profit rates, and be transparent with users about any surcharge.

| Region | Dominant platforms | Integration routes |
|--------|--------------------|--------------------|
| East Africa | M-Pesa (Kenya, Tanzania), Airtel Money | Safaricom Daraja API; aggregators (Flutterwave, PesaPal, Kopo Kopo) |
| West Africa | MTN MoMo, Orange Money | MTN MoMo Developer API; aggregators (Flutterwave, Paystack) |
| South Asia | bKash (Bangladesh), Paytm and UPI (India), Easypaisa (Pakistan) | bKash Merchant API, Paytm for Business, local PSPs |
| Latin America | Mercado Pago (Argentina, Brazil), Pix (Brazil), PicPay | Mercado Pago API, dLocal, Stripe for cross-border |
| Cross-region | — | Flutterwave and dLocal cover 10–30+ countries each |

![A mobile money agent helping a customer transfer funds](img/mobile-money-agent.jpg)

Useful aggregators and gateways: [Flutterwave](https://developer.flutterwave.com/), [Paystack](https://paystack.com/docs) (Nigeria, Ghana, South Africa, Kenya), [PesaPal](https://www.pesapal.com/) (East Africa), [Kopo Kopo](https://kopokopo.co.ke/) (Kenya), [dLocal](https://dlocal.com/) (LATAM/Asia/Africa), and [Stripe](https://stripe.com/) for international/donor payments. Open-source payment hubs such as **Mojaloop** and protocols like **Beckn** can enable interoperable local payment rails for larger initiatives.

## Billing and invoicing platforms

Once money arrives, you need to track who paid for what. FOSS billing platforms automate invoicing, dunning, prepaid balance, and reporting.

| Platform | Best at | Notes |
|----------|---------|-------|
| Invoice Ninja | Clean self-hosted invoicing with recurring billing | Easy start; integrates with payment gateways via plugins |
| Akaunting | Small-business accounting + invoicing in one | Multi-currency; pairs well with cash/voucher workflows |
| Crater | Lightweight invoicing and estimates | Low-resource servers; good first billing system |
| Billrun | Telecom-grade open-source rating and billing | Handles usage-based and complex ISP billing; steeper learning curve |
| Splynx | WISP billing + RADIUS + CRM | Supports mobile money, cash, vouchers; popular in the Global South |
| UCRM | Free client and billing management | Simple recurring invoicing with automatic service suspension; free for small networks |
| Sonar | All-in-one ISP management (billing, CRM, provisioning) | Proprietary but widely used; integrates with Flutterwave, Paystack, Stripe |

**Practices:**

- Start with Invoice Ninja or Crater; move to Splynx, Sonar, or Billrun when automation of provisioning and dunning pays for itself.
- Support **prepaid, postpaid, and pay-as-you-go** plans from the start — prepaid reduces credit risk, and PAYGO matches cash-flow realities.
- Automate reconciliation: match gateway or mobile money notifications to user accounts, and reconcile agents weekly.
- Publish prices and plan terms clearly — opaque billing is a common source of community conflict.

## Payment models that work for CCCIs

| Model | Pros | Cons | Seen in |
|-------|------|------|---------|
| Prepaid vouchers | No credit risk; includes unbanked | Distribution overhead | Zenzeleni, Kasepuhan Ciptagelar |
| Mobile money subscriptions | Instant, low-friction | Transaction fees | TandaNET, Pathardi |
| Monthly flat subscription | Predictable revenue | Needs billing discipline | Most mature CCCIs |
| Pay-as-you-go | Matches irregular incomes | Needs real-time tracking | Small rural networks |
| Tiered pricing | Serves mixed income groups | More complex to administer | PamojaNet |
| Cross-subsidisation | Businesses fund community access | Needs a business user base | PamojaNet, Zenzeleni |
| Barter / in-kind | Works in cash-poor communities | Hard to track and scale | Pathardi |

## Financial inclusion

Payments are also an opportunity to deepen financial inclusion:

- **Digital literacy training** on mobile money, budgeting, and safe payments — partner with local NGOs or schools.
- **Microfinance partnerships** so users can buy CPEs and routers in instalments (common in rural Africa and South Asia).
- **Agent networks** that both collect payments and offer basic financial services — they create local jobs.
- **Community savings groups** that pool resources for connectivity and reduce default rates.
- **Subsidised access** for schools and clinics, funded by cross-subsidisation or grants — plan it deliberately rather than ad hoc.

## Suggested roadmap

| Stage | Focus |
|-------|-------|
| **Start (0–3 months)** | Survey preferred payment methods; launch cash agents + one mobile money channel; basic invoicing (Invoice Ninja/Crater); prepaid vouchers if smartphone penetration is low |
| **Grow (3–12 months)** | Add USSD and group payments; upgrade to Splynx or UCRM; integrate a gateway (Flutterwave/Paystack) for automated reconciliation |
| **Professionalise (12+ months)** | Add cards/bank transfers for business users; migrate to Sonar or Billrun if scale demands; automate reconciliation and dunning; establish reporting that supports blended-finance audits |

## Further reading

- [Safaricom Daraja (M-Pesa) API](https://developer.safaricom.co.ke/) · [MTN MoMo API](https://momodeveloper.mtn.com/) · [Flutterwave docs](https://developer.flutterwave.com/) · [Paystack docs](https://paystack.com/docs) · [Splynx docs](https://docs.splynx.com/)
- [GSMA Mobile Money programme](https://www.gsma.com/mobilefordevelopment/mobile-money/) and [CGAP](https://www.cgap.org/) — research and practice on inclusive finance
- [Internet Society: Financial Sustainability for Community Networks](https://www.internetsociety.org/resources/doc/2019/community-networks-sustainability-handbook/)
