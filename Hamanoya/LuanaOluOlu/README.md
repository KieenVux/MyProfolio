# Luana'olu'olu — E-Commerce Platform
> デザート・冷凍食品販売ショップ向けECサイト

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Project Overview
**Luana'olu'olu** is an elegant, cloud-native E-Commerce platform specifically tailored for a dessert and frozen-food shop. Developed entirely from scratch, the system handles the complete customer journey from browsing the product catalog to completing secure credit card payments.

To provide a frictionless user experience, the platform is divided into a **Customer Storefront** for seamless shopping via LINE SSO, and an **Admin Portal** for robust inventory and order management.

## Key Features
- **Dual Web-App Architecture**: Clear separation of concerns between the Customer Storefront and the Admin Management Portal.
- **Frictionless Onboarding**: Integrated **LINE Login (SSO)** to drastically reduce checkout drop-off rates, along with automated LINE Message order receipts.
- **PCI-Compliant Payments**: Secure credit card transaction processing via the **fincode** payment gateway webhook integration.
- **AWS DevOps Automation**: A fully automated, zero-downtime CI/CD pipeline leveraging AWS CodeBuild, ECR, CodePipeline, and EC2.

## Documentation Structure
1. [System Architecture](./architecture.md)
2. [Database Schema (ER Diagram)](./er-diagram.md)
3. [Key API & Request Lifecycles](./api-flow.md)
4. [Functional Map](./functional-map.md)
5. [Detailed Feature List](./features.md)
