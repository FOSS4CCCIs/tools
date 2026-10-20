---
layout: base.njk
permalink: "enabling-payments.html"
eyebrow: Category
title: Enabling Payments
description: Enabling Payments tools for community networks and digital infrastructure.
---


For **Community-Centered Connectivity Initiatives (CCCIs)**, enabling **flexible, local, and low-friction payment methods** is critical. In many **Global Majority communities**, **cash is still king**, and **mobile money** (e.g., M-Pesa in Kenya, bKash in Bangladesh, Mobile Money in Ghana) dominates digital transactions. **If users can't pay easily, they won't pay at all**. Poor payment systems lead to:

* **Low adoption**: Users avoid signing up if payment is complicated.
* **Poor cash flow**: Delays in payments strain operations.
* **Administrative burden**: Manual reconciliation wastes time and introduces errors.
* **Exclusion**: Unbanked users (up to **1.7 billion globally**) are left out if only digital payments are accepted.

This category focuses on **customer service, payment integration, billing, and financial inclusion** to ensure CCCIs can **sustainably monetize** their services while serving their communities effectively.


## **Why Payments Matter for CCCIs**

CCCIs operate in **diverse economic contexts** where traditional payment systems (e.g., credit cards, bank transfers) are often **inaccessible or impractical**. Key challenges include:

* **Low banking penetration**: Many users lack bank accounts.
* **Cash dominance**: Cash transactions are the norm in rural and informal urban areas.
* **Mobile money prevalence**: Mobile wallets are widely used but fragmented by region.
* **Currency volatility**: Local currencies may fluctuate, affecting pricing and revenue.
* **Regulatory barriers**: Some payment methods require licenses or compliance with local financial laws.

## **🔑 Key Components of Payment Systems for CCCIs**


---

### **A. Customer Service: Making Payments Easy and Familiar**

**Why It Matters for CCCIs:**

* **User adoption** depends on **ease of payment**. If users struggle to pay, they will abandon the service.
* **Customer satisfaction** improves when payment methods align with **local norms** (e.g., cash, mobile money, vouchers).
* **Trust** is built when users see **transparent, fair, and flexible** payment options.

**Community-Specific Challenges:**

* Users may not have **bank accounts, credit cards, or smartphones**.
* **Low digital literacy** can make complex payment systems intimidating.
* **Cultural preferences** (e.g., cash-based transactions, barter systems) must be respected.

**Tools and Approaches:**

| Approach | Description | Community Fit | Business Benefit | Ease of Use | Cost | Global South Considerations | Examples from CCCIs |
|----------|-------------|---------------|------------------|-------------|------|-----------------------------|---------------------|
| **Cash Payments** | Accept cash payments at local agents, shops, or community centers. | Works everywhere; no digital infrastructure required. | High adoption in cash-based economies. | Easy        | Low (agent commissions) | Critical for unbanked users; requires trusted agents. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | **Zenzeleni Networks** (South Africa) accepts cash at local shops. **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |
| **Voucher Systems** | Sell prepaid vouchers (paper or digital) at local stores for users without mobile money. | No smartphone required; works offline. | Reduces administrative burden; enables unbanked users to pay. | Easy        | Low (printing costs) | Critical for areas with low smartphone penetration. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | **Zenzeleni Networks** and **Kasepuhan Ciptagelar** (Indonesia) use voucher-based systems. **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |
| **USSD Menus** | Enable payments via USSD (e.g., `*123#`) for users without smartphones. | Works on basic phones; no internet required. | Expands access to unbanked and low-income users. | Moderate    | Low (SMS costs) | Essential in regions with low smartphone adoption. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | **TandaNET** (Kenya) uses USSD for payments. **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |
| **Group Payments** | Allow community leaders (e.g., school heads, village elders) to pay on behalf of multiple users. | Reduces transaction costs; leverages existing social structures. | Improves cash flow and reduces administrative overhead. | Easy        | Low  | Works well in tight-knit communities. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | **Pathardi** (India) uses community leaders to facilitate payments. **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |
| **Hybrid Systems** | Combine mobile money + cash collection agents + vouchers to cover all users. | Ensures no user is left out due to payment method limitations. | Maximizes adoption and revenue. | Moderate    | Low-Moderate | Best practice for CCCIs in diverse economic contexts. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | **PamojaNet** (DRC) uses a hybrid model. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |

**Implementation Tips:**

* **Survey Your Community**: Identify the **most common payment methods** in your area (e.g., cash, mobile money, vouchers).
* **Partner with Local Agents**: Work with **shops, schools, or community centers** to accept cash or voucher payments.
* **Simplify USSD**: Design **intuitive USSD menus** for users without smartphones.
* **Train Community Leaders**: Empower local leaders to **collect payments and resolve issues** on behalf of users.
* **Pilot Hybrid Systems**: Start with **cash + mobile money**, then add vouchers or group payments as needed.


---

### **B. Mobile Payment Integration**

**Why It Matters for CCCIs:**
Mobile money is **ubiquitous in the Global South**, with platforms like:

* **East Africa**: M-Pesa (Kenya, \~50M users), Mobile Money (Uganda/Tanzania), Airtel Money.
* **West Africa**: MTN Mobile Money (Ghana, Nigeria), Orange Money.
* **South Asia**: bKash (Bangladesh, 70M+ users), Paytm (India), Easypaisa (Pakistan).
* **Latin America**: Mercado Pago (Argentina, Brazil), PicPay (Brazil).

**Integrating mobile payments** increases **adoption, revenue, and cash flow** by **20-40%** in some markets **\[Source: Library - Community Network Readiness Assessment Handbook\]**.

**Tools and Approaches:**

| Region | Popular Payment Methods | Tools/Platforms to Integrate | Notes | Transaction Fees | Global South Considerations |
|--------|-------------------------|------------------------------|-------|------------------|-----------------------------|
| **East Africa** | M-Pesa (Kenya), Mobile Money (Uganda/Tanzania), Airtel Money | **Afrika's Talk**, **Flutterwave**, **Safaricom API** | M-Pesa has \~50M users in Kenya; direct API integration is ideal. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | 1-5% per transaction | Negotiate **bulk discounts** with providers; pass fees to users transparently. |
| **West Africa** | MTN Mobile Money (Ghana, Nigeria), Orange Money | **Flutterwave**, **Paystack**, **MTN API** | MTN Mobile Money dominates in Ghana (40%+ penetration). **\[Source: Library - Community Network Readiness Assessment Handbook\]** | 1-5% per transaction | Use **local agents** to assist users with mobile money transactions. |
| **South Asia** | bKash (Bangladesh), Paytm (India), Easypaisa (Pakistan) | **bKash Merchant API**, **Paytm for Business**, **Stripe** | bKash has 70M+ users in Bangladesh. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | 1-3% per transaction | Ensure **multi-currency support** for cross-border users. |
| **Latin America** | Mercado Pago (Argentina, Brazil), PicPay (Brazil) | **Mercado Pago API**, **DLocal**, **Stripe** | Mercado Pago is widely trusted in LATAM. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | 2-5% per transaction | Partner with **local fintech startups** for better rates. |
| **Global** | Cash, USSD, Voucher-based systems | **Local agents**, **USSD menus**, **Paper vouchers** | Critical for unbanked users. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | Varies           | Combine with **mobile money** for full coverage. |

**Implementation Tips:**

* **Direct API Integration**: Use **official APIs** (e.g., Safaricom for M-Pesa, MTN for Mobile Money) for seamless transactions.
* **Third-Party Gateways**: Use **Flutterwave, Paystack, or DLocal** for multi-country support.
* **Bulk Discounts**: Negotiate **lower fees** for high-volume transactions.
* **User Education**: Train users on **how to use mobile money** for payments (e.g., via SMS or in-person workshops).
* **Fraud Prevention**: Implement **SMS confirmations** or **USSD verification** to prevent disputes.


---

### **C. Billing and Invoicing**

**Why It Matters for CCCIs:**
Billing systems **automate invoicing, track payments, and generate reports**, reducing administrative burden and errors. For CCCIs, this means:

* **Recurring Billing**: Automate monthly/weekly invoices for subscriptions.
* **Payment Tracking**: Monitor who has paid and who hasn't.
* **Flexible Plans**: Offer **prepaid, postpaid, or pay-as-you-go** options.
* **Reporting**: Generate financial reports for transparency and planning.

**Tools and Approaches:**

| Tool/Platform | Use Case | Community Fit | Business Benefit | Ease of Use | Cost | Global South Considerations | Integration with Mobile Payments |
|---------------|----------|---------------|------------------|-------------|------|-----------------------------|----------------------------------|
| **Invoice Ninja** | Open-source invoicing and billing platform. | Simple, self-hosted, and customizable. | Reduces manual invoicing errors; supports recurring billing. | Easy        | Free | Works offline; can be self-hosted on low-cost hardware. **\[Source: User Input\]** | Can integrate with **Flutterwave, Paystack** via plugins. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Akaunting** | Open-source accounting and invoicing software. | User-friendly; supports multi-currency. | Tracks income/expenses; generates financial reports. | Moderate    | Free | Good for small CCCIs; can be localized. **\[Source: User Input\]** | Limited mobile money integration; best for cash/voucher-based systems. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Crater**    | Open-source invoice and estimate management. | Modern UI; supports recurring invoices. | Simplifies billing for small CCCIs. | Easy        | Free | Lightweight; works on low-resource servers. **\[Source: User Input\]** | Limited mobile money support; best for digital payments. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Billrun**   | Open-source billing system for telecom/ISPs. | Designed for ISPs; supports rating, billing, and invoicing. | Scales for growing CCCIs; handles complex billing (e.g., usage-based). | Difficult   | Free | Requires technical expertise; best for larger CCCIs. **\[Source: User Input\]** | Can integrate with **mobile money APIs** via custom scripts. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Splynx**    | Billing, CRM, and network management for WISPs. | All-in-one solution; supports prepaid/postpaid. | Automates billing, invoicing, and payments; integrates with network management. | Moderate    | Proprietary | Free tier for small networks; popular in Global South. **\[Source: User Input\]** | Supports **mobile money, cash, and vouchers**; integrates with local gateways. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **UCRM**      | Free billing platform by Ubiquiti. | Simple, cloud-based; supports recurring invoicing and auto shut-off for late payments. | Reduces administrative burden; improves cash flow. | Easy        | Free | Good for Ubiquiti-based networks; limited to 1000 clients. **\[Source: User Input\]** | Limited mobile money support; best for digital payments. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Sonar**     | All-in-one ISP management (billing, CRM, network management). | Highly scalable; includes hosting. | Automates billing, support, and network management. | Moderate    | Proprietary | Popular among ISPs; supports **mobile money, cash, and cards**. **\[Source: User Input\]** | Integrates with **Flutterwave, Paystack, Stripe**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |

**Implementation Tips:**

* **Start Simple**: Use **Invoice Ninja or Crater** for small CCCIs with basic billing needs.
* **Automate Recurring Payments**: Use **Splynx or Sonar** for recurring subscriptions.
* **Integrate with Mobile Money**: Use **Flutterwave or Paystack** to accept mobile payments.
* **Support Cash Payments**: Use **Splynx or custom solutions** to track cash payments via local agents.
* **Offer Flexible Plans**: Provide **prepaid, postpaid, and pay-as-you-go** options to cater to different user needs.


---

### **D. Payment Gateways**

**Why It Matters for CCCIs:**
Payment gateways **bridge the gap** between CCCIs and payment providers (e.g., mobile money, banks, credit cards). They enable:

* **Multi-Currency Support**: Accept payments in local currencies.
* **Fraud Prevention**: Reduce chargebacks and disputes.
* **Automated Reconciliation**: Match payments to user accounts automatically.
* **Global Reach**: Accept payments from international supporters or donors.

**Tools and Approaches:**

| Payment Gateway | Supported Methods | Community Fit | Business Benefit | Ease of Use | Cost | Global South Considerations |
|-----------------|-------------------|---------------|------------------|-------------|------|-----------------------------|
| **Flutterwave** | Mobile money (M-Pesa, MTN, Airtel), cards, bank transfers. | Supports **10+ African countries**; easy API integration. | Enables mobile money and card payments in one platform. | Moderate    | Transaction fees (\~1.4-3.8%) | Best for **East/West Africa**; supports **USSD and vouchers**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Paystack**    | Mobile money (MTN, Airtel), cards, bank transfers. | Focused on **Nigeria and Ghana**; developer-friendly. | Simplifies mobile money and card payments. | Moderate    | Transaction fees (\~1.5-3.9%) | Best for **West Africa**; integrates with **local banks**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **DLocal**      | Mobile money, cards, bank transfers (Latin America, Asia, Africa). | Supports **30+ countries**; handles local compliance. | Reduces friction for cross-border payments. | Difficult   | Transaction fees (\~2-5%) | Best for **Latin America and Asia**; handles **currency conversion**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Stripe**      | Cards, bank transfers, mobile wallets (limited). | Global reach; supports **135+ currencies**. | Enables international payments (e.g., from donors). | Easy        | Transaction fees (\~2.9% + $0.30) | Limited mobile money support; best for **digital payments**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Safaricom API (M-Pesa)** | M-Pesa (Kenya).   | Direct integration with **M-Pesa**; high reliability. | Dominant in Kenya (\~50M users); low transaction fees. | Difficult   | Transaction fees (\~1-3%) | Requires **Safaricom partnership**; best for **Kenya-based CCCIs**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **MTN API**     | MTN Mobile Money (Ghana, Nigeria, etc.). | Direct integration with **MTN**; widely used in West Africa. | High adoption in **Ghana (40%+ penetration)**. | Difficult   | Transaction fees (\~1-5%) | Requires **MTN partnership**; best for **West Africa**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **bKash Merchant API** | bKash (Bangladesh). | Dominant in **Bangladesh (70M+ users)**. | High adoption; low-cost transactions. | Difficult   | Transaction fees (\~1-3%) | Requires **bKash partnership**; best for **Bangladesh**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |

**Implementation Tips:**

* **Choose Local Gateways**: Use **Flutterwave or Paystack** for Africa, **DLocal** for Latin America/Asia.
* **Negotiate Fees**: Ask for **bulk discounts** or **non-profit rates**.
* **Test Thoroughly**: Ensure gateways work with **local mobile money providers** before launch.
* **Provide Fallbacks**: Offer **cash or voucher options** for users who can't use digital payments.
* **Automate Reconciliation**: Use tools like **Wave or QuickBooks** to match payments to user accounts.


---

### **E. Local Payment Methods**

**Why It Matters for CCCIs:**
CCCIs must **adapt to local payment norms** to maximize adoption. This includes:

* **Cash**: Still the most common method in many regions.
* **Mobile Money**: Dominant in Africa and South Asia.
* **Bank Transfers**: Used by businesses and middle-class users.
* **Vouchers**: Prepaid credits for unbanked users.
* **Barter**: Non-monetary exchanges (e.g., goods, services, or labor).
* **Cryptocurrency**: Emerging in some regions (e.g., Bitcoin in Nigeria, USDC in Kenya).

**Community-Specific Tips:**

* **Hybrid Systems**: Combine **mobile money + cash agents + vouchers** to cover all users.
* **USSD Menus**: For users without smartphones, **USSD-based payments** (e.g., `*123#`) are essential.
* **Group Payments**: Allow **community leaders** to pay on behalf of multiple users (e.g., for a village or school).
* **Barter Systems**: Accept **goods or services** (e.g., agricultural products, labor) in exchange for connectivity.

| Payment Method | Regions | Tools/Platforms | Community Fit | Business Benefit | Ease of Use | Cost |
|----------------|---------|-----------------|---------------|------------------|-------------|------|
| **Cash**       | Global  | Local agents, shops, community centers | Works everywhere; no digital infrastructure required. | High adoption in cash-based economies. | Easy        | Low (agent commissions) |
| **Mobile Money** | Africa, South Asia, Latin America | M-Pesa, MTN Mobile Money, bKash, Paytm | Dominant in many regions; high user adoption. | Increases revenue by 20-40% in some markets. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | Moderate    | Transaction fees (1-5%) |
| **Bank Transfers** | Global (urban areas) | Local banks, Wise, PayPal | Used by businesses and middle-class users. | Reduces cash handling; improves transparency. | Moderate    | Bank fees (varies) |
| **Vouchers**   | Global (unbanked users) | Paper/digital vouchers, local shops | No smartphone required; works offline. | Enables unbanked users to pay. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | Easy        | Low (printing costs) |
| **Barter**     | Rural areas | Custom systems, local agreements | Non-monetary; builds community trust. | Increases adoption in cash-poor communities. **\[Source: Library - Community Network Readiness Assessment Handbook\]** | Moderate    | Low  |
| **Cryptocurrency** | Nigeria, Kenya, Venezuela | Bitcoin, USDC, Lightning Network | Emerging in some regions; borderless. | Enables international payments; reduces currency risks. | Difficult   | Network fees (varies) |

**Implementation Tips:**

* **Survey Your Community**: Identify the **most popular payment methods** in your area.
* **Partner with Local Businesses**: Work with **shops, schools, or community centers** to accept payments.
* **Offer Multiple Options**: Support **at least 2-3 payment methods** (e.g., mobile money + cash + vouchers).
* **Test with Users**: Pilot payment methods with a **small group of users** before full rollout.

  


---

### **F. Financial Inclusion**

**Why It Matters for CCCIs:**
Financial inclusion ensures that **all community members**, including the **unbanked and low-income**, can access and pay for connectivity. CCCIs can play a role in:

* **Digital Literacy**: Training users on **digital payments, budgeting, and financial management**.
* **Access to Financial Services**: Partnering with **microfinance institutions, banks, or mobile money providers** to offer financial services.
* **Affordable Connectivity**: Offering **subsidized or free access** to low-income users.
* **Savings and Credit**: Enabling **micro-savings or credit** for hardware (e.g., CPEs) or service plans.

**Tools and Approaches:**

| Approach | Description | Community Fit | Business Benefit | Ease of Use | Cost | Global South Considerations |
|----------|-------------|---------------|------------------|-------------|------|-----------------------------|
| **Digital Literacy Training** | Workshops on **mobile money, online banking, and budgeting**. | Empowers users to pay digitally; reduces reliance on cash. | Increases adoption of digital payments; builds trust. | Easy        | Low  | Partner with **local NGOs or schools**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Microfinance Partnerships** | Partner with **microfinance institutions** to offer **installment plans** for hardware. | Enables low-income users to afford devices (e.g., CPEs, routers). | Increases adoption; improves cash flow. | Moderate    | Low-Moderate | Common in **rural Africa and South Asia**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Subsidized Access** | Offer **free or discounted access** to low-income users (e.g., schools, clinics). | Ensures **digital inclusion** for marginalized groups. | Builds goodwill; may qualify for **grants or donations**. | Moderate    | Low-Moderate | Funded via **cross-subsidization** (e.g., businesses pay more). **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |
| **Savings Groups** | Facilitate **community savings groups** to pool resources for connectivity. | Builds financial resilience; fosters community ownership. | Reduces default rates; improves sustainability. | Moderate    | Low  | Popular in **Africa and South Asia**. **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Agent Networks** | Train **local agents** to accept payments and provide financial services. | Extends reach to unbanked users; creates local jobs. | Reduces administrative burden; improves cash flow. | Easy        | Low (agent commissions) | Works well in **rural areas**. **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |

**Implementation Tips:**

* **Partner with Microfinance Institutions**: Offer **installment plans** for hardware (e.g., CPEs).
* **Currency Risk Management**: If operating in multiple countries, use **multi-currency tools** (e.g., **Wave, Xero**) to manage exchange rates.
* **Subsidize Access**: Use **cross-subsidization** (e.g., businesses pay more to subsidize low-income users).
* **Train Users**: Conduct **digital literacy workshops** on mobile money, online banking, and budgeting.
* **Leverage Agent Networks**: Partner with **local shops or community leaders** to act as payment agents.











##  **Implementation Roadmap for CCCIs**

### **Phase 1: Getting Started (0–3 Months)**

* **Payment Methods**:
  * Survey your community to identify **preferred payment methods** (cash, mobile money, vouchers).
  * Start with **cash + mobile money** (e.g., M-Pesa, MTN Mobile Money).
  * Partner with **local shops or community centers** to accept cash payments.
* **Billing System**:
  * Use **Invoice Ninja or Crater** for basic invoicing.
  * Set up **prepaid vouchers** if mobile money is not widely used.
* **Financial Inclusion**:
  * Conduct **digital literacy workshops** on mobile money and online payments.
  * Offer **free or discounted access** to low-income users (e.g., schools, clinics).

### **Phase 2: Scaling Up (3–12 Months)**

* **Payment Methods**:
  * Add **USSD menus** for users without smartphones.
  * Implement **group payments** (e.g., community leaders pay for multiple users).
* **Billing System**:
  * Upgrade to **Splynx or UCRM** for automated billing and invoicing.
  * Integrate with **Flutterwave or Paystack** for mobile money payments.
* **Financial Inclusion**:
  * Partner with **microfinance institutions** to offer installment plans for hardware.
  * Launch a **voucher system** for unbanked users.

### **Phase 3: Professionalizing (12+ Months)**

* **Payment Methods**:
  * Add **bank transfers and cards** for businesses and middle-class users.
  * Pilot **cryptocurrency** (e.g., Bitcoin, USDC) for international payments.
* **Billing System**:
  * Migrate to **Sonar or Billrun** for advanced billing and network management.
  * Automate **reconciliation** with tools like **Wave or QuickBooks**.
* **Financial Inclusion**:
  * Offer **subsidized access** for low-income users (funded by cross-subsidization).
  * Establish a **community savings group** to pool resources for connectivity.


---

## **💡 Key Takeaways for CCCIs**


1. **Prioritize Local Payment Methods**: Start with **cash and mobile money**, then add digital options as your community grows.
2. **Keep It Simple**: Use **vouchers, USSD, or group payments** to ensure no user is left out.
3. **Automate Billing**: Deploy **Invoice Ninja, Splynx, or Sonar** to reduce administrative burden.
4. **Integrate Mobile Money**: Use **Flutterwave, Paystack, or DLocal** to accept payments seamlessly.
5. **Promote Financial Inclusion**: Partner with **microfinance institutions**, offer **subsidized access**, and conduct **digital literacy training**.
6. **Diversify Revenue Streams**: Combine **subscriptions, prepaid vouchers, and cross-subsidization** to ensure sustainability.
7. **Learn from Others**: Study **case studies** (e.g., Zenzeleni, TandaNET) to adopt best practices.



## **Payment Models for CCCIs**

CCCIs use a variety of **revenue models** to sustain their operations. Here's a comparison of common approaches:

| Model | Description | Pros | Cons | Best For | Examples |
|-------|-------------|------|------|----------|----------|
| **Prepaid Vouchers** | Users buy vouchers (paper or digital) for a set amount of data/time. | No credit risk; works for unbanked users. | Administrative overhead; requires distribution network. | Rural areas, unbanked users | **Zenzeleni, Kasepuhan Ciptagelar** **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |
| **Mobile Money** | Users pay via mobile wallets (e.g., M-Pesa, MTN Mobile Money). | High adoption; instant payments. | Transaction fees; requires smartphone. | Urban areas, mobile-first regions | **TandaNET, Pathardi** **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |
| **Subscription** | Users pay a **monthly/weekly fee** for unlimited or capped access. | Predictable revenue; easy to manage. | Requires billing system; may exclude low-income users. | Stable networks, middle-class users | **Splynx, Sonar** **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Pay-As-You-Go** | Users pay for **data or time** as they use it. | Flexible; no long-term commitment. | Complex to implement; requires real-time tracking. | Low-income users, prepaid markets | **UCRM, Billrun** **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Tiered Pricing** | Different **speed or data caps** at different price points. | Cats to different user needs; maximizes revenue. | Complex to manage; may require advanced billing. | Diverse user bases | **PamojaNet** **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Cross-Subsidization** | Businesses or wealthier users **pay more** to subsidize low-income users. | Promotes inclusion; sustainable. | Requires diverse user base. | Mixed-income communities | **PamojaNet, Zenzeleni** **\[Source: Library - Community Network Readiness Assessment Handbook\]** |
| **Barter** | Users exchange **goods or services** (e.g., agricultural products) for connectivity. | Inclusive; builds community trust. | Hard to track; not scalable. | Rural, cash-poor communities | **Pathardi** **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |
| **Donations/Grants** | Funded by **donors, grants, or sponsors**. | No direct cost to users; supports inclusion. | Unpredictable; requires fundraising effort. | Non-profits, pilot projects | **TandaNET, Zenzeleni** **\[Source: Library - Belli et al. - Self-sustaining Financing Solutions for Community Connectivity\]** |







## Additional Resources

### **Guides and Tutorials**

* [Flutterwave Documentation](https://developer.flutterwave.com/)
* [Paystack Documentation](https://paystack.com/docs)
* [Invoice Ninja Documentation](https://invoiceninja.github.io/)
* [Splynx Documentation](https://docs.splynx.com/)
* [Sonar Documentation](https://docs.sonar.expert/)

### **Payment Gateways**

* [Flutterwave](https://flutterwave.com/) - Nigeria, Ghana, Kenya, South Africa, Côte d’Ivoire, Cameroon, Uganda, Rwanda, Zambia, and more
* [Paystack](https://paystack.com/) - Nigeria, Ghana, South Africa, Kenya. NGN, GHS, ZAR, KES, USD.
* [DLocal](https://dlocal.com/)
* [Kokopoko](https://kopokopo.co.ke/) - Kenya
* [Stripe](https://stripe.com/) - Global
* PesaPal - v3 OAuth. Kenya, Uganda, Tanzania, Rwanda, Malawi, Zambia.
* [Safaricom M-Pesa API](https://developer.safaricom.co.ke/) - Safaricom Daraja, Kenya. Vodacom for Tanzania, MTN for Uganda on request
* [MTN Mobile Money API](https://momodeveloper.mtn.com/)

### **Billing, Accounting, CRM and Financial Management Platforms**

* [Invoice Ninja](https://invoiceninja.com/)
* [Akaunting](https://akaunting.com/)
* [Centipid](https://centipidbilling.com) - Integrates with multiple payment gateways including Kokopoko sms platforms and fully supports Mikrotik devices
* [Crater](https://craterapp.com/)
* [Billrun](https://billrun.org/)
* [Splynx](https://splynx.com/)
* [UCRM](https://ucrm.io/)
* [Sonar](https://sonar.software/)
* [Open Collective](https://opencollective.com/) - Open-source, values-aligned and radically-transparent financial management platform that includes crowdfunding, money management, and expense management features. 
* NetOS / [MicroNet Africa ](https://micronet.africa) - ISP billing, network management, and customer messaging — one platform

### **Financial Inclusion Resources**

* [GSMA Mobile Money](https://www.gsma.com/mobilefordevelopment/mobile-money)
* [CGAP (Financial Inclusion)](https://www.cgap.org/)
* [Internet Society: Financial Sustainability for Community Networks](https://www.internetsociety.org/resources/doc/2019/community-networks-sustainability-handbook/)