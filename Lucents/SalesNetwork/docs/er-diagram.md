# ER Diagram

The database uses PostgreSQL via Hasura GraphQL engine. Below is the simplified relational map focusing on the core HRM & Payroll entities:

![ER Diagram](/salesnetwork-images/er_diagram.png)

## Key Tables
* **users**: Represents the sales employees and their association to Keycloak identities.
* **offices & teams**: Hierarchical structural mapping.
* **requests**: Polymorphic approval requests (`type`: EARLY_SALARY, CHANGE_TEAM, CHANGE_OFFICE; `status`: PENDING, DONE, REJECTED).
* **bonus_penalties**: Tracks automated KPI rewards and disciplinary deductions via the cron worker.
* **payment_transactions**: Tracks the asynchronous 9Pay money transfers linked to `users`.
