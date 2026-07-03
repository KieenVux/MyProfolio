# Key API & Request Lifecycles

## 1. Content Publication & LINE WORKS Broadcast Flow
This is the core flow for administrators pushing critical information down the corporate ladder.

```mermaid
sequenceDiagram
    participant Admin (SvelteKit)
    participant NestJS Backend
    participant MySQL Database
    participant LINE WORKS API
    participant Employee (LINE App)

    Admin (SvelteKit)->>NestJS Backend: POST /posts (Title, Rich Text HTML, Images)
    NestJS Backend->>NestJS Backend: Validate payload & Sanitize HTML
    NestJS Backend->>MySQL Database: INSERT INTO posts
    MySQL Database-->>NestJS Backend: Return Post ID
    NestJS Backend->>LINE WORKS API: Trigger Push Notification Webhook
    LINE WORKS API->>Employee (LINE App): Broadcast Alert: "New Important Notice"
    NestJS Backend-->>Admin (SvelteKit): 201 Created Success
```

## 2. Secure Anonymous Feedback Flow
This flow empowers employees to report issues or suggest improvements without fear of reprisal.

```mermaid
sequenceDiagram
    participant Employee (SvelteKit)
    participant NestJS Backend
    participant MySQL Database

    Employee (SvelteKit)->>NestJS Backend: POST /opinions (Content, isAnonymus: true)
    NestJS Backend->>NestJS Backend: Strip JWT User Context (Nullify createdById)
    NestJS Backend->>MySQL Database: INSERT INTO opinions (Anonymous record)
    MySQL Database-->>NestJS Backend: OK
    NestJS Backend-->>Employee (SvelteKit): 201 Submitted
    Note right of NestJS Backend: Admin panel will display "Anonymous User"
```

## 3. JWT RBAC Authentication Flow
A clean authentication mechanism optimized for internal environments using strict Employee Codes rather than vulnerable email addresses.

```mermaid
sequenceDiagram
    participant Client
    participant AuthController
    participant AuthService
    participant MySQL Database

    Client->>AuthController: POST /auth/login (code, password)
    AuthController->>AuthService: Validate Credentials
    AuthService->>MySQL Database: Find User by Code
    MySQL Database-->>AuthService: Return User + Hashed Password
    AuthService->>AuthService: Bcrypt Compare
    AuthService->>AuthController: Generate JWT (Includes Role)
    AuthController-->>Client: 200 OK + JWT Token
```
