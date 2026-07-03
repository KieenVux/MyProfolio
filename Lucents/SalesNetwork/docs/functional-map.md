# Functional Map

Below is the mindmap detailing the distribution of functionalities across the distinct portals and backend layers.

![Functional Map](/salesnetwork-images/functional_map.png)

## Core Domains
1. **Sales Employee Portal**: Interfaces for checking daily KPI targets, viewing payslips, and submitting requests (early salary, change office/team).
2. **Manager Portal**: Interfaces for reviewing `PENDING` requests, managing office/team hierarchies, and exporting heavy payroll data.
3. **Backend Engine**:
   - **Identity**: Keycloak IAM.
   - **Data Layer**: Hasura GraphQL.
   - **Queue Workers**: Bull / Redis for `9pay` salary transfers.
   - **Cron Workers**: Automated KPI sweeps for the Bonus/Penalty ledger.
