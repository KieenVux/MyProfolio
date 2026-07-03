# DMS Portfolio Documentation — Updated Implementation Plan (v3)

> **Scope:** DMS project only. Lending will be done separately after.

## Your Info (Confirmed)

| Field | Value |
|-------|-------|
| **Role** | Backend Developer |
| **Period** | June 2024 – December 2024 |
| **Company** | Finviet |
| **Team Size** | 14 members (2 Product, 2 Tester, 2 FE, 1 Leader, 2 Mobile, 5 BE) |

## Your Specific Contributions (Confirmed)

- Maintain the flow for **sales check-in**
- Maintain flow for **KPI counting** (day, week, month — personal & team)
- **Export order file** & route assigned
- **View list store in future** (upcoming route planning)
- **Bug fixes:** Store detail information missing/wrong, Route reassignment after distributor change

---

## DMS — 3 User Types + Merchant (Updated)

### 1. Sales (Salesperson)
- Check-in at merchant stores (GPS verification)
- CRUD Routes — plan which stores to visit (today/tomorrow/future) based on KPI targets from manager
- Create & manage merchants (new + existing stores)
- Check inventory at merchants they manage
- Complete assigned tasks during visits (survey, photo, order)
- View personal KPI (day/week/month)

### 2. Manager Sale (per Group)
- Everything Sales can do, PLUS:
- Overview dashboard — which sales have checked in, which haven't
- Track merchant visits — which merchants each sale visited from assigned list
- KPI per sale — view individual KPI of each salesperson in group

### 3. Manager (Senior)
- Track KPI of entire sales groups (aggregated view)
- Assign KPI targets to groups and individuals
- Overall reporting (daily/monthly summary)

### 4. Merchant (Mobile App Only)
- Order products from distributor
- Check inventory stock levels

---

## Proposed Files (DMS Only — 6 files)

### [NEW] `dms/README.md`
- Title + Japanese subtitle + tech badges (actual stack)
- Project overview: multi-tenant DMS for FMCG distribution
- Two-app architecture: **Portal** (admin/manager) + **Mobile** (sales & merchant)
- 3 user types + merchant described clearly
- Features grouped by user type
- Tech stack table (actual dependencies)
- Architecture reference → docs/
- Proprietary code notice
- Contact info

---

### [NEW] `dms/docs/architecture.md`
- Mermaid `graph TD` diagram showing:
  - Portal Web App & Mobile App as clients
  - 15 NestJS microservices (grouped by function)
  - Message queues: RabbitMQ (inter-service RPC, 30+ queues), Bull (background jobs), Kafka (external sync to CRM & Promotion)
  - MongoDB + Redis
  - Keycloak SSO
  - External integrations (Firebase, Telegram, Ecopay, CRM)
  - Infrastructure: Docker → K8s → ArgoCD (deployment tracking)
- Description of each layer
- CI/CD flow (GitLab CI → Docker → GCP Artifact Registry → ArgoCD → K8s)
- Security section (Keycloak, JWT, RBAC via ACL module)

---

### [NEW] `dms/docs/functional-map.md`
> **This is a new file** — a visual Functional Map similar to the Lending system mind-map you showed me.

Will contain a **generated image** (mind-map style) showing all DMS features organized by:

```
DMS System
├── Portal (Web — Admin/Manager)
│   ├── Dashboard & KPI
│   │   ├── KPI by time (day/week/month)
│   │   ├── KPI by category / product brand
│   │   ├── KPI by route / area group
│   │   ├── Active store / Reactive store metrics
│   │   └── Assign KPI targets to groups/individuals
│   ├── Store Management
│   │   ├── CRUD stores (merchant)
│   │   ├── Store detail (location, images, status)
│   │   ├── Store survey data
│   │   └── Store inventory view
│   ├── Route Management
│   │   ├── Create/edit routes (assign stores to salesperson)
│   │   ├── Assign routes to sales
│   │   ├── Frequency sets (visit schedule)
│   │   └── View real-route tracking (GPS)
│   ├── Order Management
│   │   ├── View orders by store/distributor
│   │   ├── Order detail (products, pricing, promotions)
│   │   └── Export order reports
│   ├── Product Management
│   │   ├── CRUD products / categories / brands
│   │   ├── Product groups / material groups
│   │   ├── Import products (Excel)
│   │   └── Inventory management
│   ├── Distributor Management
│   │   ├── CRUD distributors
│   │   └── Distributor-store assignment
│   ├── User & Role Management
│   │   ├── User CRUD / groups / area groups
│   │   ├── Role & permissions (ACL)
│   │   └── Employee monitoring
│   ├── Event & Promotion
│   │   ├── Create events / rewards
│   │   ├── Event participants / accumulate
│   │   └── Loyalty program
│   ├── Survey Management
│   │   ├── Survey builder (v2)
│   │   ├── Survey responses / data
│   │   └── Store survey results
│   ├── Reports & Export
│   │   ├── Summary reports (daily/monthly/overview)
│   │   ├── KPI reports (personal/team)
│   │   ├── Export to Excel/PDF (jsReport)
│   │   ├── Compressed report download (zip)
│   │   └── Payment transaction reports
│   ├── Ticket System
│   │   └── Support tickets
│   ├── News & Notifications
│   │   ├── News / announcements
│   │   ├── Push notifications (Firebase)
│   │   └── Telegram alerts
│   ├── Import / Export
│   │   ├── Excel import (products, stores, routes, KPI)
│   │   ├── Excel/PDF export
│   │   └── Batch processing (Bull queue)
│   └── Settings & Configuration
│       ├── Module config fields
│       ├── Screen config fields
│       └── Master data
│
├── Mobile App (Sales & Merchant)
│   ├── Sales Features
│   │   ├── Route planning (today/future)
│   │   ├── Store check-in (GPS) / check-out
│   │   ├── Task completion during visit
│   │   ├── Photo album upload
│   │   ├── Survey completion
│   │   ├── Order placement for store
│   │   ├── Inventory check at store
│   │   ├── Note / memo per store
│   │   ├── View personal KPI
│   │   └── Real-time notifications
│   └── Merchant Features
│       ├── Order products from distributor
│       └── Check inventory stock
│
├── Background Services
│   ├── Cronjob Service (Scheduled Tasks)
│   │   ├── 23:59 — End of day (auto-checkout, clear cache)
│   │   ├── 00:15 — Mark expired routes
│   │   ├── 00:30 — Create future routes
│   │   ├── 00:00 — Cleanup temp exports + Sync payment transactions
│   │   ├── 01:00 — Create real-routes for new day
│   │   ├── 02:00 — Create daily KPI targets
│   │   ├── 03:00 — Backup summary reports (per company)
│   │   ├── 04:00 — Compress reports → zip files
│   │   ├── Every 5min — Push compressed files
│   │   ├── Every 3sec — Ping report export status
│   │   ├── Every 1min — Trigger push notifications
│   │   └── Weekly — Cleanup export/import files
│   ├── Report Sync Service (7 PM2 instances)
│   │   ├── Master data sync
│   │   ├── Store sync
│   │   ├── Route sync
│   │   ├── Event sync
│   │   ├── Order sync
│   │   ├── Checksum validation
│   │   └── Inventory sync
│   └── Scheduler Service
│       ├── Event scheduling
│       └── Event accumulate scheduling
│
└── Integration
    ├── Keycloak SSO (authentication)
    ├── Firebase (push notifications)
    ├── Telegram (system alerts)
    ├── Ecopay (e-wallet payments)
    ├── CRM (store sync via Kafka)
    ├── Promotion System (event sync via Kafka)
    ├── Third-party distributors (Ecom V1/V2, Tan Long)
    └── jsReport (PDF report rendering)
```

---

### [NEW] `dms/docs/er-diagram.md`
- **Generated image** (not Mermaid text) showing ER relationships
- Visual diagram of core MongoDB collections and relationships
- Accompanying table of each collection, purpose, and key fields
- Notes on indexes and constraints

---

### [NEW] `dms/docs/api-flow.md`
Based on user types + system processes:

- **Flow 1: Sales Check-In & Store Visit**
  - Sales opens route → travels to store → GPS check-in → complete tasks → photos → survey → check-out

- **Flow 2: Sales Route Planning (CRUD Routes)**
  - Sales views KPI targets → creates/edits route plan → selects stores for upcoming days → system validates

- **Flow 3: Merchant Order Placement (Mobile)**
  - Merchant opens app → browses products → checks inventory → places order → order synced via RabbitMQ

- **Flow 4: KPI Calculation Pipeline (CQRS)**
  - Data collected → report-write-service → RabbitMQ → report-kpi-service aggregates → report-read-service serves dashboard

- **Flow 5: Manager Monitoring**
  - Manager views group dashboard → check-in status → individual KPI → assigns new KPI targets

- **Flow 6: CI/CD Deployment**
  - GitLab tag → CI build per service → Docker → GCP Artifact Registry → ArgoCD → K8s

- **Flow 7: Cronjob & Report Data Pipeline** ⭐ NEW
  - Nightly: `processEndDay` (23:59) → `processExpired` (00:15) → `processFuture` (00:30)
  - → `createRealRoute` (01:00) → `createDailyKpiTargets` (02:00)
  - → `backupReportSummary` per company (03:00) → `createCompressReport` zip (04:00)
  - → `pushFileCompressReport` every 5min → `checkStatus` (07:00)
  - Meanwhile: `pingReportStatus` every 3sec, `triggerNotifications` every 1min
  - report-sync-service running 7 parallel instances syncing: master data, store, route, event, order, checksum, inventory

---

### [NEW] `dms/docs/features.md`
- Feature table grouped by user type: Feature | Description | Tech Used | My Contribution
- Engineering Challenges:
  1. **CQRS Report Architecture** — millions of records, separated read/write, 7 data sync instances
  2. **Nightly Cronjob Pipeline** — orchestrating 10+ scheduled jobs in correct sequence across services
  3. **Multi-queue message architecture** — RabbitMQ (30+ queues for RPC), Bull (background jobs), Kafka (external sync)
  4. **Multi-tenant data isolation** — company-scoped MongoDB schema, per-company report generation

---

## Verification Plan

- All Mermaid diagrams tested for GitHub rendering
- ER diagram + Functional Map generated as actual images
- Content cross-referenced against actual codebase
- Professional English suitable for Japanese tech company review
- No proprietary source code exposed
