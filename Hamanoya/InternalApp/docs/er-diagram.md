# Database Design — ER Diagram

![ER Diagram](../images/er_diagram.png)

## Core Database Entities

The Internal App relies on a highly relational MySQL database managed via TypeORM.

### 1. User Management
- **`users`**: Represents the company employees and administrators. Uses a unique `code` (Employee ID) rather than an email for authentication, mirroring traditional Japanese corporate environments. Contains `role` (ADMIN, MANAGER, USER) for strict RBAC.

### 2. Content Engine
- **`categories`**: Central entity allowing logical grouping of different content types (e.g., HR, IT, General).
- **`posts`**: Stores dynamic rich-text content representing company news, notices, and policies. Can contain complex JSON arrays for `images` and `files`.
- **`documents`**: Specifically tailored for manuals and permanent reference material.

### 3. Feedback Loop
- **`opinions`**: The core mechanism for bottom-up communication. Contains an `isAnonymus` boolean flag. When set to true, the frontend and backend ensure no identifying data is leaked to the admin panel. Features an `isSeen` flag for admin workflow tracking.

### 4. Alerts
- **`notifications`**: Simple broadcast records mapped and synced with external communication platforms (LINE WORKS).
