# Feature List & Technical Implementation

## Core Features

| Feature | Description | Tech Used | My Contribution |
|---|---|---|---|
| **Dual Web-App Architecture** | Two distinct web applications built on HTML/JS. A highly-optimized **Customer Storefront** for shopping, and a secure **Admin Portal** for business operations. | HTML, JS, NestJS | Designed and implemented the RESTful APIs in NestJS to securely serve both applications, managing complex CORS policies and distinct JWT authentication layers. |
| **Frictionless LINE SSO Login** | Customers can log in and create accounts instantly using their LINE app, removing the barrier of traditional email/password registration. | LINE API, NestJS | Integrated the LINE OAuth 2.0 flow, handling the backend token exchange and database mapping to establish secure user sessions. |
| **PCI-Compliant Payment Gateway** | Secure credit card processing via **fincode**. Customers are redirected to a secure payment page, and the backend listens for asynchronous webhooks to confirm payment. | Fincode API, NestJS | Engineered the webhook listener in NestJS, ensuring atomic database transactions to safely update order statuses and deduct stock only upon verified payment capture. |
| **Automated Order Receipts via LINE** | The system automatically pushes an order confirmation and shipping notification directly to the customer's LINE chat. | LINE Messaging API | Developed the notification service that triggers a Push Message to the user's `line_id` whenever an order transitions to PAID or SHIPPED. |
| **Fully Automated AWS CI/CD** | A professional deployment pipeline ensuring zero-downtime updates to the production environment. | AWS (EC2, ECR, CodePipeline, CodeBuild) | Configured the entire AWS infrastructure from scratch. Wrote the buildspec files to containerize the NestJS app with Docker, push to ECR, and orchestrate the rolling deployment on EC2. |
