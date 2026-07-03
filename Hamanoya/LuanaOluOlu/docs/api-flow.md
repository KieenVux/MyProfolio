# Key API & Request Lifecycles

## 1. LINE SSO Authentication Flow (Storefront)
Designed to drastically reduce the friction of account creation for new customers.

```mermaid
sequenceDiagram
    participant Customer (Storefront)
    participant NestJS Backend
    participant LINE OAuth Server
    participant PostgreSQL DB

    Customer (Storefront)->>LINE OAuth Server: Click "Login with LINE" (Redirect)
    LINE OAuth Server-->>Customer (Storefront): Returns Auth Code
    Customer (Storefront)->>NestJS Backend: POST /auth/line (Auth Code)
    NestJS Backend->>LINE OAuth Server: Exchange Code for Access Token
    LINE OAuth Server-->>NestJS Backend: Access Token + User Profile
    NestJS Backend->>PostgreSQL DB: Upsert User by line_id
    PostgreSQL DB-->>NestJS Backend: User ID
    NestJS Backend-->>Customer (Storefront): Return JWT Session Token
```

## 2. Checkout & Fincode Payment Webhook Flow (Storefront)
Ensures payments are securely captured without blocking the main application thread, utilizing asynchronous webhooks.

```mermaid
sequenceDiagram
    participant Customer (Storefront)
    participant NestJS Backend
    participant Fincode API
    participant PostgreSQL DB

    Customer (Storefront)->>NestJS Backend: POST /orders (Cart Data)
    NestJS Backend->>PostgreSQL DB: Create Order (Status: PENDING)
    NestJS Backend->>Fincode API: Create Payment Intent
    Fincode API-->>NestJS Backend: Return Checkout URL
    NestJS Backend-->>Customer (Storefront): Redirect to Fincode URL
    Customer (Storefront)->>Fincode API: Enters Credit Card Details
    Fincode API-->>Customer (Storefront): Payment Success (Redirect to Thank You page)
    
    %% Asynchronous Webhook
    Fincode API-)NestJS Backend: Async Webhook (Payment Captured)
    NestJS Backend->>PostgreSQL DB: Update Order (Status: PAID) & Deduct Stock
```

## 3. Order Fulfillment Flow (Admin Portal)
The operational flow for store managers to process and ship orders, keeping the customer informed via LINE.

```mermaid
sequenceDiagram
    participant Admin (Portal)
    participant NestJS Backend
    participant PostgreSQL DB
    participant LINE Messaging API

    Admin (Portal)->>NestJS Backend: GET /orders?status=PAID
    NestJS Backend-->>Admin (Portal): List of pending shipments
    Admin (Portal)->>NestJS Backend: PATCH /orders/:id/status (SHIPPED)
    NestJS Backend->>PostgreSQL DB: Update Status
    NestJS Backend->>LINE Messaging API: Push Message ("Your order has shipped!")
    LINE Messaging API-->>NestJS Backend: OK
    NestJS Backend-->>Admin (Portal): 200 OK
```
