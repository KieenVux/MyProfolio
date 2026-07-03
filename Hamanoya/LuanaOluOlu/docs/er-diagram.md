# Database Design — ER Diagram

![ER Diagram](../images/er_diagram.png)

## Core Database Entities

The Luana'olu'olu platform utilizes a robust PostgreSQL relational schema to guarantee ACID compliance for E-commerce transactions.

### 1. User & Identity Management
- **`users`**: Contains both customers and internal staff. 
  - `line_id`: Crucial for the seamless SSO flow. Maps external LINE profiles to internal accounts.
  - `role`: Distinguishes between `ADMIN` (access to Admin Portal) and `CUSTOMER` (access to Storefront).

### 2. Catalog & Inventory
- **`categories`**: Logical grouping for desserts and frozen foods.
- **`products`**: The core catalog. Tracks `price` and real-time `stock` levels. Contains a JSONB array for `images` hosted on AWS S3.

### 3. Transaction Ledger
- **`orders`**: The overarching order document. Tracks the `total_amount` and the current fulfillment `status` (PENDING, PAID, SHIPPED, CANCELLED).
- **`order_items`**: A historical snapshot of the cart. Crucially locks the `price_at_purchase` to ensure historical revenue calculations are immune to future price changes in the `products` table.

### 4. Payment Tracking
- **`payments`**: Maps 1:1 with `orders`. Stores the `fincode_transaction_id` and tracks the payment gateway's asynchronous status updates (AUTHORIZED, CAPTURED, FAILED) via webhooks.
