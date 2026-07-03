# Architecture

Sales Network uses a robust, modernized stack designed for heavy concurrent processing, asynchronous tasks, and high-security identity management.

## Tech Stack Overview
* **Frontend**: ReactJS
* **Identity Management**: Keycloak
* **Data Layer**: Hasura (GraphQL engine) & PostgreSQL
* **Backend Framework**: NestJS & ExpressJS
* **Message Queue**: Bull / Redis
* **Monorepo Management**: NX
* **DevOps**: AWS (EC2, S3, Cognito) & Docker

## The Refactored Core Architecture
The backend is structured into a unified NX Monorepo (`core`, `mailer`) alongside critical standalone microservices (`9pay`, `bonus`, `offices`, `teams`, `payment`).

### Why Microservices & Message Queues?
A monolithic approach to Payroll processing often results in timeouts and untraceable anomalies when dealing with thousands of employees. By utilizing **Bull Queue** backed by **Redis**, the system asynchronously processes heavy payloads (such as mass salary transfers via the 9Pay gateway) with 100% transactional integrity. This architectural refactoring successfully reduced transfer errors by ~80%.
