# API & System Flows

This document details the core business sequences and background pipelines that drive the DMS system.

## Flow 1: Sales Check-In & Store Visit Lifecycle
*This is the most critical operational flow, executed thousands of times daily.*
1. **Route Initialization:** Salesperson opens the assigned route for the day via the Mobile App.
2. **Transit & Verification:** Salesperson travels to the store location. The app pings the `store-route-service` with GPS coordinates.
3. **GPS Check-In:** The backend verifies the coordinates against the `location` 2dsphere index in MongoDB. If within the geofence, check-in is approved.
4. **Task Execution:** Salesperson completes assigned merchant tasks:
   - Captures and uploads store condition photos (synced to object storage).
   - Completes dynamic surveys (`survey-service`).
5. **Check-Out:** Finalizes the visit, triggering an event to the CQRS pipeline to update visit metrics.

## Flow 2: Route Planning (CRUD Routes)
*Empowering sales staff to manage their own schedules based on KPI goals.*
1. **Target Review:** Salesperson views their daily/weekly KPI targets.
2. **Drafting:** Salesperson selects merchants from their managed pool to construct a visit route for future dates.
3. **Validation:** The `store-route-service` validates constraints (e.g., maximum stores per day, overlapping assignments).
4. **Approval/Activation:** Once validated, the system saves the future route, which will be activated by the nightly Cronjob pipeline.

## Flow 3: Merchant Order Placement
*Self-service portal for merchants on the Mobile App.*
1. **Browsing:** Merchant opens the app and requests product catalogs from `master-data-service`.
2. **Inventory Check:** System verifies stock availability in real-time.
3. **Order Placement:** Merchant submits the cart.
4. **Processing:** `order-service` captures the request and places a message on the RabbitMQ queue for inventory reservation and distributor notification.

## Flow 4: CQRS KPI Calculation Pipeline
*Handling the massive volume of metric updates without slowing down transactional APIs.*
1. **Data Ingestion:** Any action (check-in, order placed, survey completed) hits the `report-write-service`.
2. **Event Publishing:** The write-service instantly acknowledges the request and publishes a payload to a RabbitMQ exchange.
3. **Aggregation:** The `report-kpi-service` consumes the queue, crunching the numbers against individual and group targets.
4. **Materialization:** Results are saved to the MongoDB `Reports` collection.
5. **Dashboard Rendering:** When a Manager opens their dashboard, the `report-read-service` instantly serves these pre-calculated views.

## Flow 5: Manager Monitoring
*Top-down operational oversight.*
1. Manager logs into the Web Portal.
2. Dashboard queries `report-read-service` for team aggregations.
3. Manager drills down into individual salesperson performance (Check-in status vs. Route plan).
4. Manager adjusts and assigns new KPI targets via `master-data-service`, triggering updates downstream.

## Flow 6: CI/CD Deployment Pipeline
*Ensuring robust and reliable releases.*
1. **Trigger:** Developer tags a release in GitLab.
2. **Build:** GitLab CI builds Docker images for the affected microservices.
3. **Push:** Images are securely pushed to GCP Artifact Registry.
4. **Sync:** ArgoCD detects registry updates and Git repository changes.
5. **Deploy:** ArgoCD orchestrates rolling updates across the Kubernetes clusters, ensuring zero downtime.

## Flow 7: Cronjob & Report Data Pipeline
*The critical nightly orchestration engine that prepares the system for the next business day.*
This pipeline is managed by `cronjob-scheduler-service` and utilizes `bull` queues:
- **23:59:** `processEndDay` — Forces auto-checkout for incomplete visits and clears Redis working-time caches.
- **00:15:** `processExpired` — Marks unvisited route schedules as expired.
- **00:30:** `processFuture` — Prepares routes drafted for the upcoming day.
- **01:00:** `createRealRoute` — Instantiates the actual operational routes for the day.
- **02:00:** `createDailyKpiTargets` — Initializes tracking metrics.
- **03:00:** `backupReportSummary` — Aggregates and backs up data (isolated per company).
- **04:00:** `createCompressReport` — Zips massive data exports.
- **Continuous (Every 5m):** `pushFileCompressReport` uploads to storage.
- **Continuous (Every 3s):** `pingReportStatus` updates the frontend via WebSockets on export readiness.
- **Parallel Sync:** Meanwhile, `report-sync-service` runs 7 separate PM2 instances constantly synchronizing master data, stores, routes, events, orders, inventory, and checksums.
