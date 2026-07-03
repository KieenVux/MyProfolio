# Architecture & Infrastructure

The Finviet DMS backend is structured as a **NestJS Monorepo** containing **15 distinct microservices**. This architecture is designed to handle high concurrency from thousands of sales personnel executing GPS-verified check-ins, while isolating complex background jobs and data synchronization.

## High-Level Architecture Diagram

```mermaid
graph TD
    %% Clients
    ClientWeb[Portal Web App<br/>Admin/Manager] --> |HTTPS/REST| Gateway
    ClientMob[Mobile App<br/>Sales/Merchant] --> |HTTPS/REST + WebSockets| Gateway

    %% API Gateway / Auth
    Gateway[API Gateway / BFF]
    Gateway -.-> |Auth| SSO[Keycloak SSO]

    %% Microservices Layer (15 Services)
    subgraph NestJS Microservices
        SvcMaster[Master Data Service]
        SvcStore[Store & Route Service]
        SvcOrder[Order Management Service]
        SvcKPI[KPI Calculation Service]
        SvcReportR[Report Read Service]
        SvcReportW[Report Write Service]
        SvcEvent[Event & Promo Service]
        SvcCron[Cronjob Scheduler Service]
        SvcSync[Data Sync Service<br/>7 PM2 Instances]
    end

    Gateway --> SvcMaster
    Gateway --> SvcStore
    Gateway --> SvcOrder
    Gateway --> SvcReportR
    Gateway --> SvcReportW

    %% Message Brokers
    subgraph Message Brokers
        RMQ[(RabbitMQ<br/>30+ RPC Queues)]
        Bull[(Bull Queue<br/>Background Jobs)]
        Kafka[(Apache Kafka<br/>External Sync)]
    end

    SvcStore <--> RMQ
    SvcOrder <--> RMQ
    SvcReportW --> |CQRS Events| RMQ --> SvcKPI

    SvcCron --> Bull
    SvcReportW --> Bull

    SvcEvent <--> Kafka
    SvcStore <--> Kafka

    %% Databases
    subgraph Data Persistence
        DB_Mongo[(MongoDB<br/>Multi-tenant)]
        DB_Redis[(Redis<br/>Cache & Sockets)]
    end

    SvcMaster --> DB_Mongo
    SvcStore --> DB_Mongo
    SvcOrder --> DB_Mongo
    SvcReportR --> DB_Mongo
    SvcReportW --> DB_Mongo

    SvcStore --> DB_Redis
    Gateway --> DB_Redis

    %% Integrations
    subgraph External Integrations
        Firebase[Firebase Push Notifications]
        Telegram[Telegram System Alerts]
        Ecopay[Ecopay e-Wallet]
        CRM[Enterprise CRM]
        jsReport[jsReport PDF Engine]
    end

    SvcCron --> Firebase
    SvcCron --> Telegram
    SvcOrder --> Ecopay
    Kafka <--> CRM
    SvcReportR --> jsReport
```

## Architectural Components

### 1. Multi-Queue Message Architecture
The system relies on three distinct message brokers to decouple services and ensure reliability:
- **RabbitMQ:** Configured with over 30 queues, serving as the primary nervous system for inter-service RPC (Remote Procedure Call) communication.
- **Bull Queue:** Utilized for heavy, asynchronous background processing such as Excel imports/exports and batch updates.
- **Apache Kafka:** Dedicated to high-throughput external data synchronization, specifically streaming events to the legacy Enterprise CRM and third-party promotion engines.

### 2. CQRS Pattern (Command Query Responsibility Segregation)
Due to the massive volume of daily check-ins, tasks, and KPI calculations, the reporting architecture separates write and read operations:
- `report-write-service` handles all incoming transactional data from sales activities.
- Data is published to RabbitMQ.
- `report-kpi-service` consumes these events to aggregate and calculate KPIs in real-time.
- `report-read-service` serves highly optimized, read-only materialized views directly to the manager dashboards via API.

### 3. CI/CD & Deployment Strategy
The infrastructure is fully containerized and leverages modern DevOps practices:
1. **Source Control:** GitLab triggers CI pipelines on tag creation.
2. **Build:** Docker images are built individually for each of the 15 microservices.
3. **Registry:** Images are pushed to Google Cloud Platform (GCP) Artifact Registry.
4. **Orchestration:** Kubernetes (K8s) manages the container lifecycle.
5. **Deployment:** ArgoCD continuously monitors the registry and Git state to perform automated, declarative deployments to the K8s clusters.

### 4. Security & Data Isolation
- **Keycloak SSO:** Centralized identity and access management.
- **RBAC via ACL Module:** Fine-grained Access Control Lists determine exactly which features Sales, Group Managers, and Senior Managers can access.
- **Multi-tenant MongoDB:** Data isolation is enforced at the database level through company-scoped schema designs, ensuring zero cross-contamination between different enterprise clients using the platform.
