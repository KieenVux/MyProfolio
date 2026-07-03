# Functional Map

![Functional Map](../images/functional_map.png)

## Overview
The Luana'olu'olu platform is strictly partitioned into two separate front-end applications, each serving a distinct user base while communicating with the central NestJS REST API.

## 1. Customer Storefront (Web App 1)
Designed for high conversion rates and a seamless shopping experience.

### Product Catalog
- **Browse Categories**: Filter desserts and frozen foods.
- **Search & Filter Products**: Quickly find specific items.
- **View Product Details**: High-resolution image galleries fetched from AWS S3.

### Shopping Cart & Checkout
- **Manage Cart Items**: Add, remove, and update quantities.
- **Calculate Totals**: Compute tax and shipping costs dynamically.
- **Credit Card Checkout**: Secure redirection to the fincode payment gateway.

### Authentication & Account
- **LINE SSO Login**: One-click registration and login.
- **Order History**: View past purchases and current order statuses.

---

## 2. Admin Portal (Web App 2)
A secure back-office dashboard restricted to users with the `ADMIN` role.

### Inventory Management
- **CRUD Products**: Add new desserts, update prices, and upload images.
- **Stock Tracking**: Monitor inventory levels to prevent overselling.

### Order Management
- **View Orders**: Monitor the queue of `PENDING` and `PAID` orders.
- **Process Shipments**: Update order status to `SHIPPED` after physical dispatch.
- **Trigger Notifications**: Automatically send shipping confirmation messages to the customer's LINE account.

### System Operations
- **Webhook Monitoring**: Ensure Fincode payment callbacks are successfully recorded in the database.
