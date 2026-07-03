# Key API & Request Lifecycles

## 1. Whitelist & Loan Application Flow (Bao Viet Bank Integration)
This flow handles the two primary ways users can enter the Lending ecosystem, get evaluated, and receive credit lines sponsored by **Bao Viet Bank**.

```mermaid
sequenceDiagram
    participant Sales as Sales (Portal)
    participant User as User (Eco App)
    participant BE as Lending BE Engine
    participant Staff as Eco Staff (Manual Check)
    participant BaoViet as Bao Viet Bank (Lender)
    
    %% Step 1: Two ways to enter Whitelist
    opt Way 1: Sales Scout Import
        Sales->>BE: Upload Excel Whitelist (Portal)
        BE->>BE: Parse, validate format, duplicate check
    end

    opt Way 2: User Submit Form
        User->>BE: Fill Paylater Form & Submit (Eco App)
        BE->>BE: Validate eKYC (via Eco Integration)
    end

    %% Step 2: Auto Filter & Loan Evaluation
    BE->>BE: Auto-filter & evaluate credit limit based on user needs
    
    alt Auto-filter Passed
        BE->>BaoViet: Send User List & Loan Profile (Open API)
    else Auto-filter Failed / Requires Manual Review
        BE->>Staff: Flag for Manual Check
        Staff->>BE: Review and Approve/Reject
        opt If Manually Approved
            BE->>BaoViet: Send User List & Loan Profile
        end
    end

    %% Step 3: Lender Final Check
    BaoViet->>BaoViet: Final Credit Check & Underwriting
    alt Approved by Bao Viet Bank
        BaoViet-->>BE: Approval & Credit Limit Granted
        BE-->>User: Notify Paylater Wallet Activated
    else Rejected
        BaoViet-->>BE: Rejection Reason
        BE-->>User: Notify Application Rejected
    end
```

## 2. Dynamic Fee Execution & Validation Flow
This process links configurable fee structures dynamically to a specific Finance Product.

```mermaid
sequenceDiagram
    participant Client as Admin Portal
    participant API as loan-product (Service)
    participant DB as PostgreSQL
    
    Client->>API: execute(financeProductId, inputFees)
    
    %% Validate Product
    API->>DB: findById(financeProductId)
    alt Product does not exist
        DB-->>API: null
        API-->>Client: throw BadRequestException("Product not found")
    end
    
    %% Validate Fees
    API->>API: Extract fee IDs from inputFees
    API->>DB: findByIds(feeIds)
    DB-->>API: Return existing fee records
    
    API->>API: filter(missingFeeIds = inputFeeIds NOT IN DB)
    alt Missing Fees Found
        API-->>Client: throw BadRequestException("LIST_FEE_NOT_EXISTS")
    end
    
    %% Execute Mapping
    API->>API: Map input data to FinanceProductFee entity
    API->>DB: createMany(FinanceProductFee[])
    API->>DB: save(FinanceProductFee)
    DB-->>API: Return saved mappings
    
    API-->>Client: return mapped fees
```

## 3. Paylater Purchase Flow (Payment Integration)
This flow explains how a user utilizes their granted Paylater credit to make a purchase within the Eco App.

```mermaid
sequenceDiagram
    participant User as User
    participant EcoApp as Eco App Checkout
    participant LendingTx as lending-transaction
    participant EcoPay as Eco Payment Gateway
    participant BaoViet as Bao Viet Bank

    User->>EcoApp: Checkout & Select "Paylater"
    EcoApp->>LendingTx: Request Payment via Paylater (Amount)
    LendingTx->>LendingTx: Check Available Credit Limit
    
    alt Sufficient Limit
        LendingTx->>EcoPay: Execute Payment (Internal Integration)
        EcoPay-->>LendingTx: Payment Success
        LendingTx->>BaoViet: Sync Disbursement/Transaction Data
        LendingTx-->>EcoApp: Confirm Payment Success
        EcoApp-->>User: Order Completed
    else Insufficient Limit
        LendingTx-->>EcoApp: Error: Limit Exceeded
        EcoApp-->>User: Prompt to choose another payment method
    end
```

## 4. CI/CD Deployment Flow
The automated pipeline ensuring zero-downtime deployment for all Lending microservices across environments.

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Git as GitHub
    participant CI as GitHub Actions
    participant ECR as AWS ECR
    participant Argo as ArgoCD
    participant K8s as Kubernetes Cluster

    Dev->>Git: Push feature branch / Merge to `main`
    Git->>CI: Trigger Build Pipeline
    CI->>CI: Run Jest Unit Tests & ESlint
    CI->>CI: Build Docker Image
    CI->>ECR: Push Image with Commit SHA tag
    CI->>Git: Update K8s deployment manifests (helm/kustomize)
    Git->>Argo: Webhook trigger (Sync detected)
    Argo->>K8s: Pull new manifests & Apply Rolling Update
    K8s-->>Argo: Pods Healthy & Ready
    Argo-->>Dev: Deployment Status Update (Slack Notification)
```
