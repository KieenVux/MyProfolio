# Lending System — Functional Map

## System Mindmap Overview

The Lending system is a complex integration of Front Apps, an Admin Portal, and multiple Integration points. The functional map below outlines the major features and configurations available across the entire ecosystem.

```text
Lending SYSTEM
├── Front Apps (Eco App / Mobile)
│   ├── Eco Finance (Dashboard)
│   ├── Homepage
│   ├── Onboarding flow
│   │   ├── Personal (non-eWallet / eWallet / Return Flow)
│   │   └── MSME (Return Flow / eWallet / non-eWallet)
│   ├── Balance (Check Credit Limit)
│   ├── Transaction History
│   ├── Statement (Monthly Bills)
│   ├── Repayment (Pay Off Balance)
│   ├── Credit Boost (Increase Limit Request)
│   └── FAQ
│
├── Admin Portal (Backoffice Web)
│   ├── Role & Cooperation Management
│   │   ├── Cooperation Management (Manage Lender, Multi-Lender switching, On/Off lender, Manage Product Distributor)
│   │   ├── User Management (Manage internal users, Import User, View user activity logs)
│   │   ├── Manage Customer (Import Whitelist / Blacklist, Manage Employee)
│   │   └── Group Management & Permission (Role-Based Access Control)
│   ├── Setup & Administration
│   │   ├── Manage Product (Product category, Import product, Manage Product, Fee management)
│   │   ├── Manage Rule & Configuration (Manage bundle mapping, Manage KYC Verification, Score card engine)
│   │   ├── Content Management (Introduction, Manage FAQ, Manage Tutorial, Manage Theme)
│   │   ├── Manage Parameters (Loan Purpose, Manage Document Set, Manage Document List, Transaction flow management)
│   │   ├── Master Data (Master data config, Steps workflow form dynamic, Data validate by FV/Bank, Data converter follow lender spec)
│   │   ├── Manage EULA (Terms & Conditions, Loan Agreement, Privacy Policy)
│   │   └── Manage In-App Notification (Notification, Reminder)
│   ├── Operation Support
│   │   ├── Manage Applications (Manage Loan Application, Disburse / Approved loans tracking)
│   │   ├── Manage Loan Transaction (Transaction History management)
│   │   └── Recon & Settlement (Manage Inc / Out File, Manage Reconciliation, Manage Trans Recon)
│   └── Reports & Dashboard
│       ├── Bill Management list
│       ├── Transaction detail
│       ├── Loan application statistics
│       └── NPL (Non-Performing Loan) report
│
└── Integration & Open API
    ├── Open API with Lender System (Bao Viet Bank)
    │   ├── Transaction history
    │   ├── Bills
    │   ├── Credit check
    │   ├── Statement
    │   ├── Repayment
    │   └── NPL Sync
    ├── eKYC Vendor (Eco Integration)
    ├── eWallet / Ecopay Gateway
    ├── SMS Vendor
    ├── eSign Vendor
    ├── Lender System (Core Banking integration)
    ├── Ecom (E-commerce purchases via Paylater)
    ├── V.A.S (Value Added Services)
    ├── CRM (Customer Relationship Management)
    └── Other FV System...
```
