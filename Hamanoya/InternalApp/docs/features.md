# Feature List & Technical Implementation

## Core Features

| Feature | Description | Tech Used | My Contribution |
|---|---|---|---|
| **Dynamic Rich Text Communication Engine** | Managers can create highly formatted news, policies, and manuals with embedded images and files via a custom WYSIWYG editor. | SvelteKit, TipTap, NestJS | Developed the end-to-end flow from the custom SvelteKit TipTap component to the NestJS HTML-sanitization API. |
| **Anonymous Opinion/Feedback Loop** | Employees can submit concerns and feedback. Built-in toggle to completely anonymize the submission, stripping identity tokens on the server side to protect whistleblowers. | NestJS, MySQL | Designed the database schema and implemented the backend logic to strictly isolate identity logic from the `opinions` table. |
| **Real-time LINE WORKS Broadcasting** | Critical corporate notices automatically trigger push notifications to employee LINE accounts, ensuring high visibility. | LINE WORKS API, NestJS | Integrated the external LINE Webhook API, handling network resilience and broadcast logic asynchronously. |
| **Role-Based Access Control (RBAC)** | Strict segregation between ADMIN, MANAGER, and USER roles. Managers can only edit content, while ADMINs can create and modify user hierarchies. | Passport-JWT, NestJS | Implemented custom Guards and Decorators in NestJS to seamlessly protect API routes based on decoded JWT payloads. |
| **Zero-Downtime Deployment Pipeline** | The entire system is hosted on an internal XSERVER environment. | GitHub Actions, PM2, XSERVER | Authored the CI/CD pipeline to build the SvelteKit Node adapter and automatically trigger graceful PM2 reloads on the Linux server without dropping active HTTP requests. |
