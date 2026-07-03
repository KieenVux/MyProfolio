# Finviet Lending — Paylater & Loan Lifecycle Platform
> 融資ライフサイクルプラットフォーム (Loan Lifecycle Platform)

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)

## Project Overview
The **Finviet Lending System** is a comprehensive, multi-lender platform designed to operate as a **"Buy Now, Pay Later" (Paylater)** e-wallet integrated directly into Finviet's Eco App ecosystem. With backing from sponsor banks (e.g., **Bao Viet Bank**), the system manages the entire credit lifecycle—from borrower onboarding and auto-filtering to loan application, disbursement, and repayment.

As a **Backend Developer** on this project (Jan 2025 – Jun 2025), I owned the end-to-end SDLC, communicating directly with C-level executives, PMs, and SAs.
- **System Analysis & DB Design:** Started from scratch and collaborated with the Senior Developer and Team Lead to design and set up the PostgreSQL database schema.
- **Core Implementation:** Developed the dynamic configuration engine for mapping fees, documents, and service suppliers to loan products.
- **Whitelist & Application Flow:** Built complex pipelines handling user imports (via Sales Excel uploads) and direct in-app applications. Integrated an auto-filtering system to evaluate credit needs before passing eligible users to Bao Viet Bank for final approval.
- **Integration:** Integrated in-house payment gateways (Eco Payment), eKYC services, and various third-party utility vendors.

## Features
- **Whitelist & Paylater Application Pipeline:** Dual-entry onboarding allowing Sales to scout and import users, or users to apply directly via the Eco App.
- **Auto-Filtering Credit Engine:** Evaluates borrower limits based on requested needs. Includes manual review fallbacks for Eco staff before sending to the sponsor bank.
- **Multi-Lender Dynamic Switching:** Dynamically configure and route applications based on active capital providers (like Bao Viet Bank).
- **Product & Fee Configuration:** Robust administration (`loan-product`) mapping variable/fixed fees, suppliers, and required document sets.
- **Seamless Eco Ecosystem Integration:** Fully integrated with existing Eco eKYC modules and Eco Payment gateways for smooth Paylater checkout experiences.
- **Role & Customer Management:** Granular control over permissions, parameter management, and user profiles.

## Tech Stack

| Category | Technology |
|---|---|
| **Frontend** | Svelte / ReactJS (Admin Portal) / Mobile (Eco App) |
| **Backend** | NestJS (TypeScript), Node.js |
| **Database** | PostgreSQL |
| **Message Broker** | RabbitMQ |
| **Cache & Session** | Redis |
| **Infrastructure** | Docker, Kubernetes, CI/CD pipelines |
| **Architecture** | Microservices (`loan-product`, `lending-loan-transaction`, etc.) |

## Architecture Overview
The system relies on a Microservices architecture communicating via RabbitMQ and REST APIs:
1. **Microservices:** Divided into domain-specific services like `lending-common`, `loan-product`, `lending-transaction`, `lending-loan-transaction`, and `dynamic-form`.
2. **Admin Portal:** Backoffice system for managing roles, configuring finance products, setting fees, and processing whitelist imports.
3. **Integration Layer:** Open APIs connecting our core lending engine with Bao Viet Bank, Eco eKYC, and Eco Payment gateways.

> 📖 **Read more in the [System Architecture Documentation](docs/architecture.md)**

## Screenshots
*(Screenshots available upon request due to data privacy policies)*

## Source Code Notice
> **Note:** The source code is proprietary and cannot be shared publicly. This repository contains technical documentation, architectural designs, and database schemas to demonstrate system design and engineering decisions.

## Contact
- **Developer:** Kien Vu
- **Role:** Backend Developer
