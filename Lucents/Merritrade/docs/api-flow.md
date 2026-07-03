# Key System API & Job Flows

## 1. Automated Tournament Lifecycle (The Core Engine)
This flow highlights the complex orchestration between marketing cronjobs and the high-precision trading engine.

```mermaid
sequenceDiagram
    participant Admin (Portal)
    participant Notification System
    participant Trading Engine
    participant Cron (cron-tournament-end)
    participant PostgreSQL DB

    Admin (Portal)->>PostgreSQL DB: Create Tournament (Set End Time & Criteria)
    PostgreSQL DB-->>Notification System: Trigger: Tournament Created
    Notification System->>Users: Email: "New Tournament Joined!"
    
    %% Marketing Schedulers
    Note over Notification System: 3 Days Before Start
    Notification System->>Users: Email: "Tournament Starts Soon"
    Note over Notification System: 1 Day Before End
    Notification System->>Users: Email: "Warning: Close your orders soon!"
    
    %% The Precision Termination Engine
    Note over Cron (cron-tournament-end): T-0: Tournament Ends Exactly Now
    Cron (cron-tournament-end)->>Trading Engine: Fetch all OPEN orders for Tournament
    Trading Engine->>PostgreSQL DB: Force-Close Orders (Using exact current exchange rate)
    Cron (cron-tournament-end)->>PostgreSQL DB: Calculate & Lock Ranking Boards (Based on criteria)
```

## 2. Asynchronous eKYC Verification Flow
Automating identity verification to reduce Admin workload.

```mermaid
sequenceDiagram
    participant User (Trading Web)
    participant NestJS (national-card)
    participant OCR Engine
    participant PostgreSQL DB

    User (Trading Web)->>NestJS (national-card): Upload Identity Card Photo
    NestJS (national-card)->>OCR Engine: Send Image for Scanning
    OCR Engine-->>NestJS (national-card): Extracted Data (Name, ID, DOB)
    NestJS (national-card)->>PostgreSQL DB: Update user_identities
    NestJS (national-card)->>PostgreSQL DB: Update ekyc_status to VERIFIED
    NestJS (national-card)-->>User (Trading Web): Success Response
```

## 3. Scalable Data Export Flow
Designed to prevent memory exhaustion when exporting massive datasets (thousands of trading orders).

```mermaid
sequenceDiagram
    participant User/Admin (React UI)
    participant NestJS (export)
    participant PostgreSQL DB
    participant AWS S3

    User/Admin (React UI)->>NestJS (export): Request Order History Export
    NestJS (export)->>PostgreSQL DB: Create export_history (Status: PROCESSING)
    NestJS (export)-->>User/Admin (React UI): "Export Started. Please wait."
    
    %% Background Processing
    NestJS (export)->>PostgreSQL DB: Aggregate massive order rows
    NestJS (export)->>NestJS (export): Generate large Excel/CSV file
    NestJS (export)->>AWS S3: Upload File stream
    AWS S3-->>NestJS (export): Return S3 URL
    
    NestJS (export)->>PostgreSQL DB: Update export_history (Status: COMPLETED, s3_url)
```
