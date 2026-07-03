# API & Approval Flows

The Sales Network platform relies heavily on event-driven internal notifications and asynchronous workflows.

## The Manager Approval Workflow (Change Team/Office)
Changing teams or offices requires strict hierarchical approval logic:
1. **Request Creation**: Employee requests a change via the UI. System generates a `PENDING` request in the database.
2. **Notification Targeting**: A Hasura Event Trigger invokes the backend. The system identifies all Administrators & Approvers associated with the target office and sends them Notifications via Socket.io/Mailer.
3. **Manager Review**: Administrator/Approver reviews the request.
4. **Execution & Event Emission**: 
   - If `APPROVE`: The request status updates to `DONE`. The system emits an internal event (`InternalEvent.CHANGE_OFFICE`) which subsequently mutates the user's profile entity.
   - If `REJECT`: Status updates to `REJECTED`.
5. **Final Notification**: A success/rejection WebSocket/Mailer notification is delivered back to the requesting Employee.

## The 9Pay Money-Transfer Flow (The Queue-Based Pipeline)
The core achievement of the financial refactoring.
* **Previous Flow**: Synchronous API calls to the 9Pay gateway. During mass payroll distribution (thousands of users concurrently), this led to timeouts, hanging API requests, and an unacceptable error rate.
* **Refactored Flow (Queue-Based)**: 
  1. The Payroll system aggregates basic salary + dynamic `bonus_penalties`.
  2. Mass data payloads are injected into a **Bull Queue**.
  3. Background workers process payments one by one asynchronously.
  4. Webhooks update transaction statuses safely.
  *Result*: Ensured 100% transactional integrity and reduced transfer errors by **~80%**.
