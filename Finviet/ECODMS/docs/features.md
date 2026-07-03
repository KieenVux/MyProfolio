# System Features & Engineering Challenges

## Core Feature Matrix

| Feature Module | Description | Key Technologies | Primary Contribution |
|----------------|-------------|------------------|----------------------|
| **Sales Check-In Flow** | GPS-verified mechanism ensuring sales personnel are physically present at merchant locations before unlocking task execution. | NestJS, MongoDB (2dsphere index), Mobile GPS API | **Maintained and optimized the core verification logic.** |
| **KPI Engine** | Multi-dimensional KPI calculation (Daily/Weekly/Monthly) tracking individual salesperson and aggregated team metrics. | CQRS, RabbitMQ, MongoDB Aggregations | **Maintained and scaled the aggregation flow.** |
| **Route Planning** | CRUD interface allowing sales to construct future visit schedules based on target metrics. | NestJS, Express, Bull | **Implemented "View list store in future" and route planning logic.** |
| **Order Export & Reports** | Generation of complex, multi-sheet Excel files mapping assigned routes and order histories. | Node Stream API, jsReport, Bull (Background Processing) | **Built the Export Order File and Route Assignment modules.** |
| **Data Synchronization** | Ensuring real-time consistency of master data, inventory, and routes across distributed databases. | Kafka, PM2, Cronjobs | **Resolved critical bugs regarding store-detail data inconsistencies and distributor-reassignment routing issues.** |
| **Admin Dashboard** | Comprehensive web portal for Senior Managers to oversee the entire distribution network. | NestJS (BFF), React (Frontend) | Supported backend endpoints and materialized view generation. |
| **Merchant Ordering** | Direct B2B order placement via the mobile application, syncing directly to distributors. | NestJS, RabbitMQ | Supported inventory validation logic. |

---

## Major Engineering Challenges Solved

### 1. CQRS Report Architecture
**The Problem:** Calculating multi-tiered KPIs (personal, group, daily, weekly, monthly) for thousands of concurrent sales personnel during peak check-in/check-out hours caused severe database locking and API latency on the monolithic read queries.
**The Solution:** Implemented a Command Query Responsibility Segregation (CQRS) architecture. Write operations (Check-ins, Orders) were decoupled via RabbitMQ. A dedicated background service consumed these events to pre-calculate and update materialized KPI views, allowing the Manager Dashboards to read instantly without complex runtime aggregations. Handled millions of records reliably using 7 isolated data sync instances.

### 2. Nightly Cronjob Pipeline Orchestration
**The Problem:** The system required a massive sequence of data reset and preparation tasks to run every night (auto-checkout, route generation, KPI target initialization, data backups, and ZIP compression), which often failed due to race conditions or service timeouts.
**The Solution:** Built a robust, orchestrated pipeline using the `cronjob-scheduler-service` and `Bull` queues. Scheduled over 10 dependent jobs to trigger sequentially (from 23:59 to 07:00), ensuring data integrity. Added continuous pinging (every 3 seconds) via WebSockets to keep the frontend updated on large file export statuses.

### 3. Multi-Queue Message Architecture
**The Problem:** A single message broker became a bottleneck, mixing high-priority RPC requests with massive, slow data-sync payloads and background ZIP operations.
**The Solution:** Segmented the messaging infrastructure based on workload characteristics:
- **RabbitMQ:** Configured 30+ dedicated queues specifically for fast, inter-service RPC communication.
- **Bull Queue:** Utilized specifically for long-running, CPU-intensive background jobs (Excel parsing, ZIP compression).
- **Apache Kafka:** Deployed as the robust event-streaming platform for synchronizing data outwards to external Enterprise CRMs and Promotion systems.

### 4. Multi-Tenant Data Isolation
**The Problem:** The platform needed to serve multiple distinct FMCG enterprise companies from a single codebase without any risk of cross-company data leakage, especially during complex report generation.
**The Solution:** Designed a strict company-scoped MongoDB schema. Enforced tenant-ID validation at the API Gateway level via JWT claims, and physically isolated report backup generation (`backupReportSummary` at 03:00) per company to ensure absolute data security and compliance.
