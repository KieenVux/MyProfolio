# Functional Map

![Functional Map](../images/functional_map.png)

## Overview
The Merritrade platform is split into two primary web applications, supported by a massive array of background Cronjobs and Asynchronous Microservices.

## 1. Trading Web (User Frontend)
Built with ReactJS, this is the main portal for traders.

### eKYC Onboarding
- **Identity Card Upload**: Users submit photos of their ID.
- **Auto-Scan & Verification**: The `national-card` microservice instantly extracts data to verify the user.

### Trading Engine & Tournament Hub
- **Place Orders**: Execute FOREX and BINARY trades.
- **Join Tournaments**: Enroll in upcoming competitions triggered by marketing emails.
- **View Rankings**: Check live leaderboards driven by Hasura GraphQL queries.
- **Export Personal History**: Trigger the async exporter to download a CSV of past trades.

### Support & Disputes
- **Submit Complaints**: If a user suspects an error in the ranking or order execution, they can file a dispute directly to the BTC.

---

## 2. Admin Portal (Management Frontend)
The secure back-office application for system administrators.

### Tournament Management
- **CRUD Tournaments**: Create new events, set exact Start/End times, and configure complex JSON criteria for ranking calculations.

### User Management
- **Monitor & Ban**: Review suspicious activity. Banning a user instantly terminates their Socket.io connection.
- **eKYC Approvals**: Manually review Identity Cards that failed the automated OCR scan.

### System Exports
- **Export Global Rankings & Orders**: Trigger the `export` microservice to compile massive Excel datasets of entire tournaments, uploading directly to AWS S3.

---

## 3. Background Microservices & Cronjobs (Backend Core)
The invisible engines driving the platform.

### Hasura GraphQL & Socket.io
- **Rapid Data Aggregation**: Hasura provides instant queries across the PostgreSQL database.
- **Live Broadcasting**: Socket.io pushes live candlestick prices and instant system notifications.

### Precision Cron Schedulers
- **Marketing Mailers**: Sends T-3 and T-1 reminder emails.
- **Auto-Close Engine**: The `cron-tournament-end` service force-closes all open orders the exact second the tournament ends, locking the final PNL.

### Asynchronous Workers
- **Heavy Data Export**: Prevents server crashes by offloading Excel generation.
- **OCR Processing**: Offloads image scanning for the eKYC flow.
