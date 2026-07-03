# Hamanoya Internal App — Company Communication Hub
> 社内ポータル・コミュニケーションハブ (Internal Communication & HR Hub)

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![LINE](https://img.shields.io/badge/LINE_WORKS-00C300?style=for-the-badge&logo=LINE&logoColor=white)

## Project Overview
The **Hamanoya Internal App** is a centralized communication and HR management platform built from scratch. It bridges the gap between management and employees by distributing critical news, notices, policies, and manuals, while offering a secure, anonymous channel for employee feedback and opinions.

Integrated directly with **LINE WORKS**, the system provides instant push notifications for urgent updates, ensuring no employee misses crucial information. 

## Key Features
- **Rich Text Content Engine**: Built with TipTap on the frontend and NestJS on the backend for handling complex media (images/files) seamlessly.
- **Anonymous Feedback Loop**: A secure Opinion module where employees can voice concerns anonymously, completely stripped of JWT identifiers.
- **LINE WORKS Broadcast**: Instant automated messaging to company LINE groups when new critical notices are published.
- **XSERVER & PM2 Infrastructure**: Highly available deployment on XSERVER using PM2 process clustering for zero-downtime updates via GitHub Actions.

## Documentation Structure
1. [System Architecture](./architecture.md)
2. [Database Schema (ER Diagram)](./er-diagram.md)
3. [Key API & Request Lifecycles](./api-flow.md)
4. [Functional Map](./functional-map.md)
5. [Detailed Feature List](./features.md)
