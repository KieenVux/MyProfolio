# Lending Portfolio Documentation — Implementation Plan

> **Scope:** Lending project only.

## Your Info (Confirmed from CVs)

| Field | Value |
|-------|-------|
| **Role** | Backend Developer |
| **Period** | October 2024 – May 2025 (CV) / Jan 2025 - Jun 2025 (Portfolio) |
| **Company** | Finviet |
| **Team Size** | 10 members (Backend team & others) |

## Your Specific Contributions (Confirmed from CVs & SDLC Process)

- **End-to-End SDLC (Built from scratch):** Led the requirement gathering phase by communicating directly with the Board of Directors, Product Managers (PM), and Solution Architects (SA). Translated business needs (Multi-Lender switching) into technical specifications, microservices architecture, and DB schemas.
- **Whitelist Import/Export Module:** Developed memory-efficient pipelines to import/export eligible borrower whitelists, utilizing Node.js Streams, Redis caching, and batch PostgreSQL transactions to ensure high performance and prevent data duplication.
- **Product Configuration Engine:** Architected and implemented the mapping logic for linking required documents (`document_set`), configurable fees (`fee`), and third-party service providers (`providers`) to specific loan products.
- **In-house Gateway Integration:** Integrated internal payment gateways (eWallet/Ecopay) into the lending application to facilitate seamless Paylater purchases and loan disbursements.
- **Open API Gateways:** Developed anti-corruption layers to integrate external lenders (e.g., Bao Viet Bank), eKYC vendors, and SMS/eSign providers.
- **Production Stability & Optimization:** Applied prior experience from the Infofinance project to optimize system architecture from day one, writing extensive backend unit & integration tests, significantly reducing processing time for complex tasks and preventing common integration bottlenecks.

---

## Lending System — Key Modules

The Lending system functions as a **Paylater (Buy Now, Pay Later)** wallet integrated into Finviet's Eco App. **Bao Viet Bank** acts as the primary sponsor bank providing the capital.

### 1. Integration & Open API
- **External Lenders & Partners:** Connect via Open APIs to **Bao Viet Bank** for final underwriting, credit checks, and disbursements.
- **Eco Ecosystem Integrations:** Connects to existing Eco systems: eKYC, User Management, and Eco Payment Gateway (for Paylater purchases).
- **Utility Vendors:** SMS and eSign vendors.

### 2. Admin Portal (Backoffice)
- **Role & Cooperation Management:** Manage lenders (Bao Viet Bank), product distributors, users, and granular group permissions.
- **Configuration & Master Data:** Manage products, parameters, document sets, fee management, and customer management.
- **Operation Support & Reports:** Manage loan applications, auto-filtering configurations, and manual review queues.

### 3. Front Apps (Eco App)
- **Customer Journey:** Users access the "Paylater" section within the Eco app to fill out applications, view granted credit limits from Bao Viet Bank, and use the Paylater method during checkout.

---

## Proposed Files (Lending Only — 6 files)

### [UPDATED] `Lending/README.md`
- Title + Japanese subtitle + tech badges.
- Project overview: A comprehensive Paylater Platform built from scratch with Bao Viet Bank.
- Dual-entry onboarding: Sales Scout (Excel) vs User App Submit.
- Architecture reference → `docs/architecture.md`
- Proprietary code notice.

---

### [UPDATED] `Lending/docs/architecture.md`
- Mermaid `graph TD` diagram showing exact microservices:
  - `lending-common`: Shared modules, utility integrations (SMS, eKYC), and Whitelist management.
  - `loan-product`: Configuration engine for products, fees, documents, and suppliers.
  - `lending-loan-transaction`: Core loan lifecycle engine, auto-filter logic, and Bao Viet Bank integration.
  - `lending-transaction`: Handles reconciliation and integration with Eco Payment Gateway.
  - `dynamic-form`: Manages dynamic creation of onboarding forms.
- Message queues: RabbitMQ (RPC / Events).
- Databases: PostgreSQL + Redis.
- CI/CD Deployment Flow (GitHub Actions → AWS ECR → ArgoCD → Kubernetes).

---

### [NEW] `Lending/docs/functional-map.md`
Contains a visual Functional Map detailing the Mindmap you provided, breaking down the entire system into:
- **Front Apps:** Dashboard, Onboarding flow, Balance, Statement, Repayment.
- **Admin Portal:** Role Management, Setup Administration (Products, Rules, Content, Master data), Operation Support (Loan Trans, Recon), Reports.
- **Integration:** Open API with Lender system, eKYC Vendor, eWallet Gateway, SMS/eSign.

---

### [UPDATED] `Lending/docs/er-diagram.md`
- Mermaid `erDiagram` showing core tables split by microservices:
  - **Loan Product Service:** `finance_product`, `finance_product_fee`, `document_set`.
  - **Dynamic Form Service:** `form`, `field_master_data`, `form_submit_value`.
  - **Loan Application Service:** `loan_application`, `application_profile`, `application_eKYC`.
  - **Loan Transaction Service:** `payment_transactions`, `bill`, `transaction_detail`.
- Table dictionary explaining the purpose and key fields of each table based on the official `DetailDesign` PDF.

---

### [UPDATED] `Lending/docs/api-flow.md`
Based on system processes:
- **Flow 1: Whitelist & Loan Application Flow:** (Sales Excel upload vs User App Form → Auto Filter BE based on needs → Manual Check if fail → Send to Bao Viet Bank for final approval → Eco grants credit).
- **Flow 2: Dynamic Fee Validation & Execution Flow.**
- **Flow 3: Paylater Purchase Flow:** Integration with Eco Payment Gateway for seamless in-app checkouts.
- **Flow 4: CI/CD Deployment Flow.**

---

### [UPDATED] `Lending/docs/features.md`
- Feature table grouped by domain: Feature | Description | Tech Used | My Contribution
- Engineering Challenges:
  1. Handling High-Volume Whitelist Imports via Streams & Redis.
  2. Multi-Lender Abstraction for Bao Viet Bank using the Strategy Pattern.
  3. Guaranteeing Data Integrity in Complex Mappings using DB-level cascades.
