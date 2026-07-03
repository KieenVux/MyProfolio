# Database Design — ER Diagram

![ER Diagram](../images/er_diagram.png)

## Core Database Entities

The Merritrade platform relies on a robust PostgreSQL schema, heavily queried via Hasura and manipulated via NestJS microservices.

### 1. Identity & Security
- **`users`**: The central account record. Includes critical administrative flags such as `is_banned` and the overall `ekyc_status`.
- **`user_identities`**: Mapped 1:1 with users. This table is populated automatically by the `national-card` OCR microservice when a user uploads their Identity Card, storing extracted data like `full_name`, `id_number`, and `dob`.

### 2. Tournament Engine
- **`tournaments`**: The core administrative entity defining a competition. It stores exact `start_time` and `end_time` timestamps (critical for the `cron-tournament-end` service), and contains a JSONB field `ranking_criteria` which allows Admins to dynamically define how scores are calculated.
- **`ranking_boards`**: A high-read table mapping a user's `total_pnl` and `rank_position` within a specific tournament. Continuously updated and finally locked when the tournament cronjob fires.

### 3. The Trading Ledger
- **`currency_pairs`**: Defines the available trading instruments (e.g., EUR/USD) and their current live exchange rate.
- **`orders`**: The massive transactional ledger. Contains the `type` (FOREX or BINARY), the `open_price`, and the `close_price`. The `status` field transitions from `OPEN` to `CLOSED`, or explicitly `FORCE_CLOSED` if terminated by the tournament cronjob.

### 4. Admin & Support Ops
- **`export_history`**: Tracks heavy background jobs. When a user or Admin requests an order history export, a record is created here. The background `export` microservice processes the Excel file, uploads it to AWS S3, and saves the `s3_url` here.
- **`complaints`**: Directly integrated into the React UI, allowing users to submit disputes regarding their orders directly to the BTC (Ban Tổ Chức) for resolution.
