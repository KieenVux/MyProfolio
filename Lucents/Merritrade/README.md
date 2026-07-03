# Merritrade — Microservices Trading Platform
> Scalable Trading & Tournament Platform built with NX, NestJS, and Hasura

![ReactJS](https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Hasura](https://img.shields.io/badge/Hasura-1EB4D4?style=for-the-badge&logo=hasura&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Project Overview
**Merritrade** is a highly complex, microservices-driven trading platform allowing users to trade Forex/Binary options and participate in competitive trading tournaments.

Developed as a core contributor at Lucents Technology, I architected and managed massive backend flows (70%), integrated the React frontend (20%), and maintained the AWS CI/CD pipelines (10%). The system utilizes an **NX Monorepo** managing dozens of dedicated **NestJS microservices**, backed by a blazing-fast **Hasura (GraphQL)** data engine.

## Key System Flows & Contributions
- **Tournament Automation Lifecycle**: Engineered precision cronjobs to handle pre-tournament marketing, trigger automatic force-closures of thousands of open orders at the exact second a tournament ends, and recalculate global ranking boards instantly.
- **Automated eKYC (Identity Verification)**: Developed the integration where users upload their Identity Card, triggering a dedicated OCR microservice (`national-card`) to automatically scan and extract profile information.
- **Heavy Data Export Engine**: Architected an asynchronous export microservice to generate massive Excel/CSV order histories without blocking the main event loop, streaming directly to AWS S3.
- **Real-time Dual Web-App**: Built a strict separation between the User Trading Web and the Admin Management Portal, utilizing Socket.io for live charting and instant administrative actions (e.g., banning suspicious traders).

## Documentation Structure
1. [System Architecture](./architecture.md)
2. [Database Schema (ER Diagram)](./er-diagram.md)
3. [Key API & Request Lifecycles](./api-flow.md)
4. [Functional Map](./functional-map.md)
5. [Detailed Feature List](./features.md)
