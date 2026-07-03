# System Architecture

## High-Level Architecture Diagram

```mermaid
graph TD
    %% Clients
    subgraph Clients["Clients / Front Apps"]
        WebApp["Admin Portal (ReactJS)"]
        MobileApp["Eco App / Paylater (Mobile)"]
    end

    %% API Gateway & Load Balancer
    subgraph API_Gateway["API Gateway / LB"]
        Ingress["Kubernetes Ingress (Nginx)"]
    end

    %% Microservices (NestJS)
    subgraph Microservices["Backend Services (NestJS / Node.js)"]
        CommonService["lending-common"]
        ProductService["loan-product"]
        TransactionService["lending-transaction"]
        LoanTransactionService["lending-loan-transaction"]
        DynamicFormService["dynamic-form"]
    end

    %% Message Brokers
    subgraph Brokers["Event Streaming & Background Jobs"]
        RabbitMQ["RabbitMQ (RPC / Events)"]
    end

    %% Databases and Cache
    subgraph Databases["Databases & Caching"]
        PostgreSQL[("PostgreSQL (Core DB)")]
        Redis[("Redis (Cache & Session)")]
    end

    %% External Systems
    subgraph External["External APIs / Partners"]
        BaoViet["Bao Viet Bank (Sponsor)"]
        EcoPayment["Eco Payment Gateway"]
        eKYC["Eco eKYC System"]
        Utility["SMS & eSign Vendors"]
    end

    %% Connections
    WebApp -->|HTTPS| Ingress
    MobileApp -->|HTTPS| Ingress

    Ingress --> CommonService
    Ingress --> ProductService
    Ingress --> TransactionService
    Ingress --> LoanTransactionService
    Ingress --> DynamicFormService

    CommonService -.->|RPC| RabbitMQ
    ProductService -.->|RPC| RabbitMQ
    TransactionService -.->|Events| RabbitMQ
    LoanTransactionService -.->|Jobs| RabbitMQ

    RabbitMQ -.-> BaoViet
    RabbitMQ -.-> EcoPayment

    CommonService --> PostgreSQL
    ProductService --> PostgreSQL
    TransactionService --> PostgreSQL
    LoanTransactionService --> PostgreSQL
    DynamicFormService --> PostgreSQL

    CommonService --> Redis
    LoanTransactionService --> Redis

    CommonService -->|REST| eKYC
    TransactionService -->|REST| EcoPayment
    LoanTransactionService -->|Open API| BaoViet
    CommonService -->|REST| Utility
```

## Microservices Breakdown

The backend is built using a Microservices architecture on **NestJS**. Below are the key services and their responsibilities:

1. **`lending-common`**: Handles cross-cutting concerns, shared modules, utility integrations (SMS, eSign, user management, eKYC integration with Eco), and generic customer management logic (Whitelist imports).
2. **`loan-product`**: The configuration engine. Manages product setups, document mapping, fee mapping, supplier mapping, and parameter configurations. 
3. **`lending-loan-transaction`**: Core engine handling the loan lifecycle, auto-filtering logic (scoring and credit granting based on needs), application submission to Bao Viet Bank, and managing loan applications.
4. **`lending-transaction`**: Handles reconciliation, settlement, and integrates with the in-house Eco Payment system for disbursements and Paylater purchases.
5. **`dynamic-form`**: Manages the dynamic creation of onboarding forms, eKYC steps, and document collection workflows based on lender specifications.

## Deployment Flow

The system uses a robust CI/CD pipeline leveraging Docker, Kubernetes, and GitHub Actions.

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Git as GitHub (Source Control)
    participant CI as GitHub Actions (CI)
    participant ECR as AWS ECR (Registry)
    participant CD as ArgoCD (GitOps)
    participant K8s as Kubernetes Cluster

    Dev->>Git: Push code to `main` branch
    Git->>CI: Trigger build pipeline
    CI->>CI: Run Unit Tests & Linting
    CI->>CI: Build Docker Image
    CI->>ECR: Push Docker Image
    CI->>Git: Update K8s Manifest (image tag)
    Git->>CD: Webhook trigger
    CD->>K8s: Apply new deployment (Rolling Update)
    K8s-->>Dev: Deployment Successful
```

### Security Considerations
1. **API Security:** All endpoints are protected via JWT. Inter-service communication is secured within the private Kubernetes network.
2. **Data Encryption:** Sensitive PII (Personally Identifiable Information) and financial records are encrypted at rest in PostgreSQL.
3. **Multi-tenant Isolation:** Lender-specific configurations and whitelist data are logically separated using strict database design and role-based access control.
