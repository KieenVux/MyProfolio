## MyPortfolio Documentation Standard
**Condition**: Whenever the user asks to generate project documentation or update the React UI for the "MyPortfolio" repository.
**Constraints**:
1. **Strict ECODMS Template**: You MUST generate a comprehensive set of documentation matching the ECODMS standard. This includes generating markdown files for:
   - `README.md`
   - `architecture.md`
   - `er-diagram.md`
   - `api-flow.md`
   - `features.md`
   - `functional-map.md`
2. **Comprehensive UI Updates**: You MUST update the React UI files (`portfolio.en.js` and `portfolio.ja.js`) by fully populating the `extendedDetails` object. This payload MUST include:
   - `features`
   - `userRoles`
   - `apiFlows`
   - `engineeringChallenges`
   - `systemArchitecture`
   - `techDetails`
   - `images` (linking to the functional map and ER diagram)
3. **Never Omit Sections**: You MUST NEVER cut, shorten, or skip any of these sections. 
4. **Proactive Questioning**: If the provided context (PDFs, images, CVs) lacks sufficient information to complete any of the required sections, you MUST STOP and explicitly ask the user to provide the missing details before proceeding.
