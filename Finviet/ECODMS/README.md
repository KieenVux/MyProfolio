# Finviet DMS (Distribution Management System)
> **流通管理システム — 複数倉庫および販売チャネルの最適化**

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)

## Project Overview

A massive-scale, multi-tenant Distribution Management System (DMS) built for the FMCG industry. The platform streamlines product distribution, tracks inventory, manages complex route planning, and calculates multi-tiered KPIs for thousands of sales personnel in real-time.

**Architecture Paradigm:** 15-microservice NestJS Monorepo utilizing CQRS and event-driven architecture.

### Dual-App Ecosystem
The system is divided into two primary client applications interacting with the unified microservices backend:
1. **Portal (Web App):** A comprehensive administration dashboard for Senior Managers and Group Sales Managers to oversee operations, assign KPIs, configure master data, and analyze CQRS-generated reports.
2. **Mobile App:** A dual-purpose mobile client for:
   - **Salespersons:** GPS-verified route check-ins, task completion, and performance tracking.
   - **Merchants:** Direct product ordering and inventory management.

## System Actors & Features

### 1. Sales (Salesperson)
- Check-in at merchant stores (GPS verification).
- **CRUD Routes** — plan which stores to visit (today/tomorrow/future) based on KPI targets assigned by management.
- Create & manage merchants (new + existing stores).
- Check inventory at merchants they manage.
- Complete assigned tasks during visits (surveys, photography, ordering).
- View personal KPI metrics (day/week/month).

### 2. Manager Sale (per Group)
- Inherits all Sales privileges, plus:
- Overview dashboard — real-time tracking of team check-ins.
- Track merchant visits — verify which merchants each salesperson visited from their assigned lists.
- Individual KPI tracking — view KPI metrics for each salesperson within the group.

### 3. Manager (Senior)
- Track aggregated KPI metrics across entire sales groups.
- Assign KPI targets to groups and individuals.
- Generate overall daily/monthly summary reports.

### 4. Merchant (Mobile App Only)
- Direct product ordering from distributors.
- Real-time inventory stock level verification.

## Technology Stack

| Category | Technologies |
|----------|--------------|
| **Core Framework** | NestJS (TypeScript), Express |
| **Databases** | MongoDB (Multi-tenant data isolation), Redis (Caching & Sockets) |
| **Message Brokers** | RabbitMQ (RPC), Bull (Background Jobs), Kafka (External Sync) |
| **Architecture** | Microservices (15 nodes), CQRS (Reporting) |
| **Authentication** | Keycloak SSO, JWT, ACL |
| **Infrastructure** | Docker, Kubernetes (K8s), ArgoCD |

## Documentation Directory

Please explore the `docs/` folder for in-depth system architecture and implementation details:

- [System Architecture & Infrastructure](./docs/architecture.md)
- [Functional Mind Map](./docs/functional-map.md)
- [Entity-Relationship Diagram](./docs/er-diagram.md)
- [Core API & System Flows](./docs/api-flow.md)
- [Features & Engineering Challenges](./docs/features.md)

---
*Note: Due to confidentiality agreements, proprietary source code is not included in this repository. This documentation serves as a structural and architectural overview of the system design.*
