# Feature List & Technical Implementation

## Core Features

| Feature | Description | Tech Used | My Contribution |
|---|---|---|---|
| **Whitelist & Loan Application Pipeline** | Dual-entry onboarding: (1) Sales scout & import via Excel on Portal. (2) Users apply via Paylater form on Eco App. | NestJS Streams, PostgreSQL | Built the file parsing logic using memory-efficient streams. Developed the API endpoints to handle in-app application submissions. |
| **Auto-Filtering Credit Engine** | Backend logic that automatically evaluates an applicant's requested limit/needs. Passes eligible users to Bao Viet Bank, or flags for manual Eco staff review if rejected. | NestJS, Open API | Implemented the scoring and auto-filter logic. Developed the Open API integration to sync approved applicant profiles to Bao Viet Bank for final underwriting. |
| **Paylater Ecosystem Integration** | Seamlessly connects the Lending engine to the existing Eco ecosystem, utilizing Eco's eKYC and Eco Payment Gateway for Paylater purchases. | REST APIs, Axios | Built the anti-corruption layer isolating lending logic from Eco's core payment system. Ensured robust transaction syncing upon successful payments. |
| **Product Configuration Engine** | Admin interface (`loan-product`) to create finance products and link them to required document sets, fees, and service suppliers. | PostgreSQL, NestJS | Developed the backend CRUD APIs and the complex relation-mapping endpoints. Designed the junction tables. |
| **Multi-Lender Dynamic Switching** | Core architectural capability allowing the platform to route applications based on the active sponsor bank (e.g., Bao Viet Bank). | NestJS, Strategy Pattern | Built the dependency injection patterns to abstract Lender-specific API logic, allowing easy onboarding of new banks. |
| **Dynamic Fee Execution** | Configurable fee module where fixed, percentage, and VAT-inclusive fees can be mapped dynamically to loan products and evaluated at runtime. | NestJS, Redis | Implemented the `execute() & validate()` fee logic. Ensured strict validation of minimum/maximum fee constraints before DB persistence. |

---

## Engineering Challenges & Solutions

### 1. Handling High-Volume Data Imports (Whitelist)
**Challenge:** 
Business teams needed to import tens of thousands of pre-approved customer records scouted by Sales via Excel files simultaneously. A naive implementation loading everything into memory caused memory leaks and slow processing.

**Solution:**
- **Streaming & Chunking:** Switched the Excel parsing library to a stream-based approach, reading the file in chunks rather than buffering the entire file.
- **Batch Processing:** Implemented PostgreSQL batch `INSERT` and `UPDATE` operations.
- **Redis Duplicate Filtering:** Pre-loaded existing phone numbers into a Redis Set for O(1) duplicate checking during the parsing phase, drastically reducing heavy `SELECT` queries on the primary database.

### 2. Multi-Lender Abstraction & Auto-Filtering
**Challenge:**
Integrating with Bao Viet Bank required strict data formatting and immediate responses, but the auto-filter logic inside Eco is highly dynamic based on user needs. Hardcoding "if-else" logic for Bao Viet Bank would make adding future banks difficult.

**Solution:**
- **Strategy Pattern:** Utilized NestJS's dependency injection to implement a common `LenderIntegrationInterface`. Bao Viet Bank is added as a specific provider module.
- **Workflow Decoupling:** The auto-filter engine (`lending-loan-transaction`) processes the rules locally. Only strictly eligible users are pushed via RabbitMQ to the integration layer, decoupling the heavy processing from the external API calls and preventing timeouts.

### 3. Guaranteeing Data Integrity in Complex Mappings
**Challenge:**
When an administrator deletes a core entity (e.g., a Fee or a Document Set), it risks leaving orphaned records in the mapping tables, which could crash the loan evaluation engine at runtime.

**Solution:**
- **DB-Level Cascade Deletions:** Strictly enforced `ON DELETE CASCADE` at the PostgreSQL schema level for all junction tables.
- **Application-Level Validation:** Before any mapping execution, the system explicitly verifies that all input IDs exist in the database and throws granular exceptions.
