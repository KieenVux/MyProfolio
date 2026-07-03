# Key Features & Responsibilities

As the Main Backend Developer on this project, my responsibilities centered on refactoring critical financial flows and integrating complex approval logic:

* **Financial Refactoring (9Pay)**: Overhauled the money-transfer flow by migrating from synchronous API calls to an asynchronous **Bull Queue** architecture in the new core codebase, dropping transfer errors by ~80% and ensuring smooth payroll processing.
* **Frontend & Backend Integration**: Implemented UI from design specs and integrated directly with backend NestJS APIs and Hasura GraphQL.
* **Approval Workflow Engine**: Handled strict Request-Approve logic for department/team changes and implemented heavy payroll data exports using file generation libraries (`node-xlsx`, `pdfmake`).
* **Bonus & Penalty System**: Refactored the core logic calculating employee KPI rewards and disciplinary deductions. This relies heavily on scheduled scripts (`cron_update_bonus.js`, `calculate_penalize_bonus.js`) and the `bonus-blacklist` module running in the background to automatically sweep and calculate metrics.
* **Internal Notifications**: Managed real-time communication via NestJS WebSockets (`@nestjs/platform-socket.io`) and internal mailers (`@nestjs-modules/mailer`, `nodemailer`).
* **AWS Infra & CI/CD**: Managed deployments via AWS (EC2, S3, Cognito) and Docker containerization pipelines.
