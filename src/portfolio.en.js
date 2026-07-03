/* English Portfolio */

export const settings = {
  isSplash: false,
};

export const seo = {
  title: "Vu Trung Kien | Portfolio",
  description:
    "A highly capable Software Engineer with 3+ years of hands-on experience in designing, building, and deploying scalable backend systems and microservices. Aspiring to leverage technical expertise to become a Bridge Software Engineer (BrSE) or Project Manager (PM).",
  og: {
    title: "Vu Trung Kien Portfolio",
    type: "website",
    url: "https://my-cv-theta.vercel.app/",
  },
};

export const greeting = {
  title: "Vu Trung Kien",
  logo_name: "Vu Trung Kien",
  nickname: "Kien",
  subTitle:
    "A highly capable Software Engineer with 3+ years of hands-on experience in designing, building, and deploying scalable backend systems and microservices. Strong proficiency in Node.js, NestJS, and AWS. Aspiring to leverage my technical expertise and communication skills to become a Bridge Software Engineer (BrSE) or Project Manager (PM) in the future.",
  resumeLink: "/VuTrungKien-BackendDeveloper.pdf",
};

export const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/KieenVux?tab=repositories",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:trungkienks8@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

export const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Hands-on SQL, MySQL, PostgreSQL, MongoDB, Redis experience",
        "⚡ Web API experience (RESTful, GraphQL, Microservices)",
        "⚡ GitHub, GitLab, Docker, Deploy in server, CI/CD by Github Actions, AWS",
        "⚡ Frontend: ReactJs, Svelte, HTML, Angular",
        "⚡ Backend: NestJS, ExpressJS, Php, Go, .Net",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: { color: "#E0234E" },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
      ],
    },
  ],
};

export const competitiveSites = {
  competitiveSites: [],
};

export const degrees = {
  degrees: [
    {
      title: "FPT University",
      subtitle: "Bachelor of Software Engineering",
      logo_path: "fpt_logo.svg",
      alt_name: "FPT",
      duration: "10/2018 - 10/2022",
      descriptions: [
        "⚡ Member, Video Game Society",
        "⚡ Member, Student IT Helpdesk",
        "⚡ Champion, FPT University Football Tournament",
      ],
    },
  ],
};

export const certifications = {
  certifications: [],
};

export const experience = {
  title: "Experience",
  subtitle: "Work History",
  description:
    "A highly capable software engineer with full-stack and backend expertise, proficient in handling complex requirements, database structures, and deploying high-performance applications.",
  header_image_path: "experience.svg",
  companies: [
    {
      name: "Hamanoya-浜の家",
      role: "Fullstack Developer",
      duration: "9/2025 - present",
      color: "#0879bf",
      logo_path: "hamanoya_logo.jpg",
      projects: [
        {
          id: "luana-oluolu",
          name: "Luana'olu'olu — EC Shop",
          duration: "9/2025 - 12/2025",
          description:
            "E-commerce site for a dessert & frozen-food shop, built from scratch as sole developer.",
          techStack: [
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "HTML",
            "RESTful API",
            "AWS",
            "Docker",
            "GitHub Actions",
          ],
          responsibilities: [
            "Built full project from scratch (requirements → deploy)",
            "CRUD for products, categories, users & orders",
            "LINE Login, LINE Rich-Menu & LINE message integration",
            "fincode credit-card payment integration",
            "AWS infra setup: EC2, S3, CodeBuild, ECR, R53",
            "Automated CI/CD via GitHub Actions",
          ],
          githubDocs: {
            architecture:
              "https://github.com/KienVu/portfolio-docs/blob/main/luana-oluolu/docs/architecture.md",
            erDiagram:
              "https://github.com/KienVu/portfolio-docs/blob/main/luana-oluolu/docs/er-diagram.md",
            features:
              "https://github.com/KienVu/portfolio-docs/blob/main/luana-oluolu/docs/features.md",
          },
          extendedDetails: {
            features: [
              "Headless CMS integration for dynamic product catalogs",
              "Real-time order tracking via LINE messaging API",
              "Automated payment reconciliation with fincode",
              "Infrastructure as code using Terraform on AWS",
            ],
            userRoles: [
              {
                role: "Customer",
                details: [
                  "Browse products and purchase via LINE login",
                  "Receive order updates directly in LINE chat",
                ],
              },
              {
                role: "Admin (Shop Owner)",
                details: [
                  "Manage inventory and update product details",
                  "Process incoming orders and handle refunds",
                  "Configure LINE Rich Menu dynamically",
                ],
              },
            ],
            apiFlows: [
              {
                title: "Checkout Flow",
                description:
                  "User selects items → Cart validation → Payment Intent created via fincode → User confirms → Webhook confirms payment → Order marked 'Paid' → LINE notification sent.",
              },
              {
                title: "LINE Login Flow",
                description:
                  "User clicks LINE Login → Redirected to LINE Auth → Code exchanged for Token → Profile fetched → Account linked/created → JWT issued.",
              },
            ],
            techDetails:
              "NestJS monolithic architecture with a PostgreSQL database. The frontend is built dynamically, interacting heavily with LINE APIs for seamless mobile user experiences.",
            engineeringChallenges: [
              {
                title: "Idempotent Payment Processing",
                description:
                  "Ensured double-charging was impossible by implementing strict idempotency keys in NestJS combined with database-level constraints.",
              },
              {
                title: "LINE API Rate Limits",
                description:
                  "Implemented Redis caching and a queue system to batch outgoing LINE messages during high-volume periods (e.g. promotional pushes).",
              },
            ],
            systemArchitecture: [
              {
                title: "Overview",
                description:
                  "Single API Gateway (NestJS) handling Webhooks, Auth, and Business Logic. Hosted on AWS EC2, with static assets served via CloudFront.",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/luana-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/luana-images/er_diagram.png`,
            },
          },
        },
        {
          id: "internal-app",
          name: "Internal App — 360 Feedback System",
          duration: "9/2025 - present",
          description:
            "Feedback & evaluation system for internal employees to provide 360-degree reviews.",
          techStack: [
            "SvelteKit",
            "NestJS",
            "TypeScript",
            "MySQL",
            "Tiptap",
            "TailwindCSS",
            "RESTful API",
            "LINE WORKS API",
          ],
          responsibilities: [
            "Sole developer (FE + BE) building the entire product",
            "Implement rich-text editing & data management (Tiptap)",
            "Automated testing structure & internal notifications",
            "LINE WORKS integration for bot notifications",
          ],
          githubDocs: {
            architecture:
              "https://github.com/KienVu/portfolio-docs/blob/main/internal-app/docs/architecture.md",
            erDiagram:
              "https://github.com/KienVu/portfolio-docs/blob/main/internal-app/docs/er-diagram.md",
            features:
              "https://github.com/KienVu/portfolio-docs/blob/main/internal-app/docs/features.md",
          },
          extendedDetails: {
            features: [
              "Anonymous 360-degree evaluation with secure data isolation",
              "Rich-text feedback forms using Tiptap integration",
              "Automated LINE WORKS bot notifications for pending reviews",
              "Dynamic reporting dashboards for HR administrators",
            ],
            userRoles: [
              {
                role: "Employee",
                details: [
                  "Submit anonymous reviews for peers",
                  "View aggregated personal feedback",
                  "Receive LINE WORKS notifications",
                ],
              },
              {
                role: "HR Admin",
                details: [
                  "Create and schedule review cycles",
                  "Monitor submission completion rates",
                  "Export anonymous reports",
                ],
              },
            ],
            apiFlows: [
              {
                title: "Evaluation Submission Flow",
                description:
                  "Employee fills Tiptap form → Payload sanitized in SvelteKit → NestJS validates relationships → Anonymized record saved to MySQL → LINE WORKS triggers 'Thank You' message.",
              },
              {
                title: "Reminder Flow",
                description:
                  "Cronjob checks pending reviews → Fetches missing user IDs → Pings LINE WORKS API → Bot sends reminder to specific employees.",
              },
            ],
            techDetails:
              "SvelteKit acts as a BFF (Backend-for-Frontend) communicating with a robust NestJS backend. MySQL is used for structured data, and Tiptap ensures clean JSON-based rich text storage.",
            engineeringChallenges: [
              {
                title: "Rich Text State Management",
                description:
                  "Engineered a seamless flow to manage, sanitize, and serve complex JSON/HTML states generated by Tiptap across the SvelteKit frontend and NestJS backend.",
              },
              {
                title: "Guaranteed Feedback Anonymity",
                description:
                  "Architected the database and backend logic to strictly isolate identity context from the opinions table, ensuring 100% anonymity for sensitive HR reporting.",
              },
            ],
            systemArchitecture: [
              {
                title: "Overview",
                description:
                  "2-tier architecture with SvelteKit frontend and NestJS backend. Hosted on an XSERVER Linux environment managed by PM2, integrating external LINE WORKS APIs.",
              },
              {
                title: "Frontend (SvelteKit)",
                description:
                  "Handles dynamic UI generation, rich-text block editing (Tiptap), and media uploads.",
              },
              {
                title: "Backend (NestJS)",
                description:
                  "PM2-clustered Node.js server handling REST APIs, MySQL transactions via TypeORM, and asynchronous LINE WORKS webhook triggers.",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/internal-app-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/internal-app-images/er_diagram.png`,
            },
          },
        },
      ],
    },
    {
      name: "Tamayoshi 玉吉製作所",
      role: "Software Engineer",
      duration: "6/2025 - 8/2025",
      color: "#555555",
      logo_path: "tamayoshi_logo.png",
      projects: [
        {
          id: "t-next",
          name: "T-Next — Loan Management Dashboard",
          duration: "6/2025 - 8/2025",
          description:
            "Platform managing the loan lifecycle from borrower verification to repayment. Team of 4.",
          techStack: [
            "C#",
            "TypeScript",
            ".NET",
            "Angular",
            "RESTful API",
            "MSSQL",
          ],
          responsibilities: [
            "Dashboard for estimate projects and purchase items management",
            "CRUD for delivery types and measurement methods",
            "Requirements analysis and basic/detailed design",
          ],
        },
      ],
    },
    {
      name: "Finviet",
      role: "Backend Developer",
      duration: "6/2024 - 6/2025",
      color: "#9b1578",
      logo_path: "finviet_logo.png",
      projects: [
        {
          id: "finviet-dms",
          name: "ECODMS — Distribution Management System",
          duration: "6/2024 - 12/2024",
          description:
            "DMS to streamline product distribution, inventory tracking and order fulfilment across multiple warehouses and sales channels.",
          techStack: [
            "NestJS",
            "Socket.io",
            "RESTful",
            "MongoDB",
            "Redis",
            "Microservices",
          ],
          responsibilities: [
            "Maintained and optimized the core Sales Check-in API, ensuring robust GPS location validation and high-concurrency handling during peak morning hours.",
            "Managed the complex KPI counting engine using CQRS and RabbitMQ, processing thousands of daily check-in/order events to generate real-time metrics (day/week/month) for both individuals and teams.",
            "Developed heavy data export features (Orders & Assigned Routes) utilizing Bull Queue for background processing, preventing main thread blocking and improving system responsiveness.",
            "Implemented the upcoming route planning module, enabling complex queries for future store visit schedules based on salesman KPI targets.",
            "Resolved critical production issues, including complex data inconsistencies during Route Reassignment when distributors change, ensuring 99.9% system integrity.",
          ],
          extendedDetails: {
            githubDocs: {
              architecture:
                "https://github.com/your-username/MyProfolio/tree/main/Finviet/ECODMS/docs/architecture.md",
              erDiagram:
                "https://github.com/your-username/MyProfolio/tree/main/Finviet/ECODMS/docs/er-diagram.md",
              functionalMap:
                "https://github.com/your-username/MyProfolio/tree/main/Finviet/ECODMS/docs/functional-map.md",
              apiFlows:
                "https://github.com/your-username/MyProfolio/tree/main/Finviet/ECODMS/docs/api-flow.md",
            },
            features: [
              "GPS-verified store check-in/check-out for thousands of sales personnel",
              "Real-time KPI engine for tracking daily, weekly, and monthly targets",
              "Complex CQRS reporting pipeline handling millions of records",
              "Automated nightly cronjobs for data backup, ZIP report generation, and synchronization across 7 PM2 instances",
            ],
            userTypes: [
              {
                role: "Sales (Salesperson)",
                details: [
                  "Check-in at merchant stores (GPS verification)",
                  "CRUD Routes — plan which stores to visit based on KPI targets",
                  "Create & manage merchants",
                  "Complete assigned tasks during visits (survey, photo, order)",
                  "View personal KPI (day/week/month)",
                ],
              },
              {
                role: "Manager Sale (per Group)",
                details: [
                  "Overview dashboard to monitor team check-ins",
                  "Track merchant visits against assigned lists",
                  "View individual KPI of each salesperson in the group",
                ],
              },
              {
                role: "Manager (Senior)",
                details: [
                  "Track KPI of entire sales groups (aggregated view)",
                  "Assign KPI targets to groups and individuals",
                  "Overall reporting (daily/monthly summary)",
                ],
              },
              {
                role: "Merchant (Mobile App)",
                details: [
                  "Order products directly from distributors",
                  "Check inventory stock levels",
                ],
              },
            ],
            apiFlows: [
              {
                title: "Sales Check-In & Store Visit",
                description:
                  "Sales opens route → GPS check-in → complete tasks → photos → survey → check-out.",
              },
              {
                title: "Route Planning",
                description:
                  "Sales views KPI targets → creates route plan → selects stores for upcoming days → system validates.",
              },
              {
                title: "CQRS KPI Calculation Pipeline",
                description:
                  "Data collected → report-write-service → RabbitMQ → report-kpi-service aggregates → report-read-service serves fast dashboard.",
              },
              {
                title: "Cronjob & Report Data Pipeline",
                description: [
                  "Nightly Sequence: processEndDay (23:59) → processExpired (00:15) → processFuture (00:30).",
                  "Data Generation: createRealRoute (01:00) → createDailyKpiTargets (02:00).",
                  "Reporting: backupReportSummary (03:00) → createCompressReport (04:00) → pushFileCompressReport (every 5m).",
                  "Continuous Jobs: pingReportStatus (every 3s), triggerNotifications (every 1m).",
                  "Data Sync: report-sync-service runs 7 parallel instances syncing master data, stores, routes, events, and inventory.",
                ],
              },
            ],
            techDetails:
              "MongoDB for multi-tenant data isolation, Redis for caching and socket sessions, Keycloak for SSO.",
            engineeringChallenges: [
              {
                title: "CQRS Report Architecture",
                description:
                  "Handling millions of records with separated read/write operations and 7 parallel data sync instances.",
              },
              {
                title: "Nightly Cronjob Pipeline",
                description:
                  "Orchestrating 10+ scheduled jobs in correct sequence across microservices (e.g. backup, zip, sync).",
              },
              {
                title: "Multi-queue Message Architecture",
                description:
                  "Configured 30+ RabbitMQ queues for RPC, Bull for background jobs, and Kafka for external CRM sync.",
              },
              {
                title: "Multi-tenant Data Isolation",
                description:
                  "Implemented company-scoped MongoDB schema allowing secure per-company report generation.",
              },
            ],
            systemArchitecture: [
              {
                title: "Overview",
                description:
                  "15-microservice NestJS monorepo utilizing CQRS and three message brokers (RabbitMQ, Bull, Kafka). Fully containerized and orchestrated with Kubernetes and ArgoCD.",
              },
              {
                title: "15-Microservice Monorepo Breakdown",
                description: [
                  "Built on NestJS and organized in a strict monorepo structure.",
                  "Master Data Service: Manages base entities like products, categories, and distributors.",
                  "Store & Route Service: Handles store CRUD, GPS check-ins, and route planning.",
                  "Order Service: Processes merchant orders and integrates with external distributors.",
                  "Report & KPI Service (CQRS): Aggregates daily/weekly data into materialized views for rapid dashboard queries.",
                  "Event & Promo Service: Manages loyalty programs, rewards, and event participation.",
                  "Scheduler Service: Nightly cronjobs for data backup, routing, and reporting.",
                  "Sync Service: 7 parallel instances syncing data with legacy CRM systems.",
                ],
              },
              {
                title: "CQRS Data Flow",
                description:
                  "Read operations (Dashboards) and Write operations (Check-ins, Orders) are fully segregated. Background sync instances process writes and update materialized read views in MongoDB.",
              },
              {
                title: "Distributed Message Brokers",
                description:
                  "RabbitMQ handles fast RPC requests (30+ queues). Bull Queue orchestrates heavy background jobs (reports, imports). Kafka streams data to external legacy CRM systems.",
              },
              {
                title: "Multi-tenant Persistence",
                description:
                  "MongoDB is designed with strict company-scoped schema isolation. Redis handles distributed caching, rate-limiting, and WebSocket session states.",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/dms-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/dms-images/er_diagram.png`,
            },
          },
        },
        {
          id: "finviet-lending",
          name: "Lending — Loan Lifecycle Platform",
          duration: "1/2025 - 6/2025",
          description:
            "Comprehensive platform managing the full loan lifecycle from borrower verification to disbursement and repayment.",
          techStack: ["NestJS", "RESTful", "PostgreSQL", "Microservices"],
          responsibilities: [
            "Owned end-to-end SDLC from requirement gathering with C-level/SA/PM to DB schema design and production deployment.",
            "Architected Multi-Lender switching logic, creating a dynamic configuration engine for products, fees, and documents.",
            "Built memory-efficient Whitelist Processing pipelines via Node.js Streams and batch PostgreSQL transactions.",
            "Developed anti-corruption Open API gateways to integrate external lenders, eKYC, and payment providers.",
            "Wrote extensive backend unit & integration tests, achieving high stability before QA handover.",
          ],
          githubDocs: {
            readme:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/README.md",
            architecture:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/architecture.md",
            erDiagram:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/er-diagram.md",
            apiFlow:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/api-flow.md",
            features:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/features.md",
            functionalMap:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/functional-map.md",
          },
          extendedDetails: {
            features: [
              "Multi-Lender Dynamic Switching allowing easy onboarding of new banks (like Bao Viet Bank)",
              "Dual-entry Whitelist processing via memory-efficient Node.js Streams and batch PostgreSQL inserts",
              "Auto-filtering Credit Engine evaluating credit limits based on user needs before sending to sponsor banks",
              "Seamless Paylater integration with Eco Payment Gateway and Eco eKYC",
              "Dynamic Product & Fee Configuration Mapping using Strategy Pattern",
            ],
            userRoles: [
              {
                role: "Sales (Eco Staff)",
                details: [
                  "Scout potential borrowers",
                  "Import Whitelist Excel files via Admin Portal",
                  "Manually review loan applications rejected by Auto-filter",
                ],
              },
              {
                role: "Customer (Eco App User)",
                details: [
                  "Apply for Paylater via Eco App",
                  "Check available credit balance",
                  "Use Paylater wallet during Eco App checkout",
                  "View transaction history and monthly statements",
                  "Process repayments",
                ],
              },
              {
                role: "Lender (Bao Viet Bank)",
                details: [
                  "Receive eligible users from Auto-filter via Open API",
                  "Perform final credit underwriting",
                  "Grant credit limits and process disbursements",
                ],
              },
              {
                role: "System Admin",
                details: [
                  "Configure finance products, fees, document sets, and parameters",
                  "Manage service suppliers (SMS, eSign, eKYC)",
                  "Reconcile and settle transactions",
                ],
              },
            ],
            apiFlows: [
              {
                title: "Whitelist & Loan Application Flow",
                description:
                  "Sales Excel import / User App Form → Auto Filter BE based on needs → Manual Check (if fail) → Send to Bao Viet Bank for final approval → Eco grants credit.",
              },
              {
                title: "Dynamic Fee Execution & Validation Flow",
                description:
                  "Execute API with input fees → Fetch product constraints → Fetch DB fees → Map & batch insert mappings.",
              },
              {
                title: "Paylater Purchase Flow",
                description:
                  "User Checkout via Paylater → Request Payment → Check Limit → Execute via Eco Payment Gateway → Sync with Bao Viet Bank.",
              },
              {
                title: "CI/CD Deployment Flow",
                description:
                  "GitHub Push → GitHub Actions CI → Build Docker Image → Push to AWS ECR → ArgoCD → Kubernetes Rolling Update.",
              },
            ],
            techDetails:
              "NestJS Microservices communicating via RabbitMQ. PostgreSQL handles core configurations and transactions, while Redis provides fast caching and duplicate checks. Containerized via Docker and orchestrated on Kubernetes.",
            engineeringChallenges: [
              {
                title: "High-Volume Data Imports",
                description:
                  "Business teams import thousands of Whitelist records. Handled via stream-based parsing, Redis O(1) duplicate checking, and chunked PostgreSQL batch operations to prevent memory leaks.",
              },
              {
                title: "Multi-Lender Abstraction & Auto-Filtering",
                description:
                  "Implemented a Strategy Pattern for Bao Viet Bank integration. Decoupled the heavy auto-filtering logic from external API calls using RabbitMQ to prevent timeouts.",
              },
              {
                title: "Data Integrity in Complex Mappings",
                description:
                  "Enforced DB-level ON DELETE CASCADE and strict application-level validation flows before persisting product, fee, and document configurations.",
              },
            ],
            systemArchitecture: [
              {
                title: "Overview",
                description:
                  "5 Core NestJS Microservices, fully decoupled with separate database schemas. Managed via Kubernetes Ingress and asynchronous RabbitMQ event streaming.",
              },
              {
                title: "lending-common",
                description:
                  "Handles shared modules, utility integrations (SMS, eSign, eKYC), and generic customer/whitelist management.",
              },
              {
                title: "loan-product",
                description:
                  "Configuration engine managing products, documents, fees, and supplier setups.",
              },
              {
                title: "lending-loan-transaction",
                description:
                  "Core loan lifecycle engine, processing auto-filtering logic and interacting with Bao Viet Bank's Open APIs.",
              },
              {
                title: "lending-transaction",
                description:
                  "Handles reconciliation, settlements, and integration with the Eco Payment Gateway for Paylater purchases.",
              },
              {
                title: "dynamic-form",
                description:
                  "Manages the dynamic creation of onboarding forms, KYC steps, and document collection workflows.",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/lending-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/lending-images/er_diagram.png`,
            },
          },
        },
      ],
    },
    {
      name: "Lucents Technology",
      role: "Fullstack Developer",
      duration: "6/2022 - 5/2024",
      color: "#fc1f20",
      logo_path: "lucents_logo.svg",
      projects: [
        {
          id: "merritrade",
          name: "Merritrade — Trading Tournament Platform",
          duration: "6/2022 - 12/2022",
          description:
            "Trading tournament platform for investors. Role: Fullstack (Backend 70%, Frontend 20%, DevOps 10%).",
          techStack: [
            "ReactJS",
            "NestJS",
            "PostgreSQL",
            "GraphQL",
            "RESTful",
            "AWS",
            "Docker",
          ],
          responsibilities: [
            "Manage banned users",
            "Automate email notifications for upcoming & ending tournaments",
            "Fix ranking boards at tournament end",
            "Export order history & multiple ranking board files",
            "Manage articles and notifications",
            "Handle AWS infra & CI/CD (EC2, S3, RDS, CodeBuild, ECR, R53)",
          ],
          extendedDetails: {
            features: [
              "Dual-Web Architecture featuring a Trading Web for users and an Admin Portal for management",
              "Automated eKYC Onboarding triggering OCR scans on uploaded Identity Cards via the national-card microservice",
              "High-precision Tournament Lifecycle Automation closing active orders exactly when a tournament ends",
              "Dynamic Ranking Engine calculating leaderboards based on customizable criteria",
              "Asynchronous Data Exporting capable of generating massive Excel files without blocking the main thread",
            ],
            userRoles: [
              {
                role: "Trader",
                details: [
                  "Upload Identity Card for automated eKYC verification",
                  "Place trades, view real-time charts, and join active tournaments",
                  "Review personal order histories and submit disputes (complaints) to the BTC",
                  "Export personal trading histories directly to Excel/CSV",
                ],
              },
              {
                role: "Admin (BTC)",
                details: [
                  "Full CRUD control over Tournaments, defining start/end times and ranking criteria",
                  "Instantly ban suspicious users, forcefully disconnecting their active Socket.io sessions",
                  "Trigger massive global system exports for tournament orders and leaderboards",
                ],
              },
            ],
            apiFlows: [
              {
                title: "Complete Tournament Lifecycle Flow",
                description:
                  "Admin creates Tournament → T-3 / T-1 reminder emails sent → Tournament ends → cron-tournament-end automatically force-closes open orders based on exact exchange rate → Calculates Ranking Boards.",
              },
              {
                title: "eKYC Identity Verification Flow",
                description:
                  "User uploads Identity Card photo → national-card microservice triggers OCR scan → Extracts Identity details → Saves to DB & updates eKYC status.",
              },
              {
                title: "Heavy Data Export Flow",
                description:
                  "Admin requests export → export microservice aggregates historical data asynchronously → Generates Excel file → Streams to AWS S3 → Returns signed download link.",
              },
            ],
            techDetails:
              "Dual-Web ReactJS application interfacing with a massive NestJS Microservices backend managed via NX Monorepo. Features Hasura for lightning-fast GraphQL, dedicated NestJS services for OCR eKYC and asynchronous data exports, and complex cron-schedulers for the tournament lifecycle. Fully containerized and deployed on AWS.",
            engineeringChallenges: [
              {
                title: "Mathematical Precision in Tournament Execution",
                description:
                  "Ensured absolute precision and zero latency when force-closing thousands of open orders concurrently using the exact exchange rate at the exact second a tournament ends.",
              },
              {
                title: "Preventing Memory Leaks during Data Exports",
                description:
                  "Offloaded the generation of massive Excel/CSV datasets (Orders/Rankings) to a dedicated export microservice to prevent crashing the main API, streaming the output directly to AWS S3.",
              },
              {
                title: "Coordinating Precision Cronjobs",
                description:
                  "Managed complex scheduling across multiple Cronjobs to handle pre-tournament marketing (emails) and the mission-critical post-tournament ranking calculations.",
              },
            ],
            systemArchitecture: [
              {
                title: "Overview",
                description:
                  "NX Monorepo orchestrating 15+ microservices. Hasura (GraphQL) wrapping PostgreSQL for data delivery, with Socket.io driving real-time functionality.",
              },
              {
                title: "Frontends",
                description: "Separate ReactJS Trading Web and Admin Portal.",
              },
              {
                title: "Backend Core",
                description:
                  "NestJS microservices handling eKYC, exports, trading logic, and tournament schedulers. Redis for Pub/Sub and Socket.io state management.",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/merritrade-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/merritrade-images/er_diagram.png`,
            },
          },
        },
        {
          id: "infofinance",
          name: "Infofinance — Financial News & Complaint Management",
          duration: "12/2022 - 5/2024",
          description:
            "Third-party platform resolving investor complaints and publishing latest financial news. Built from scratch.",
          techStack: [
            "ReactJS",
            "Strapi",
            "NestJS",
            "MongoDB",
            "RESTful",
            "AWS",
            "Cognito",
            "Amplify",
            "Docker",
          ],
          responsibilities: [
            "Built full project from scratch",
            "User features: create complaints, join events, read news",
            "Dashboard: manage complaints by team, create/edit events, teams & news",
            "AWS infra & CI/CD (EC2, S3, Cognito, Amplify, CodePipeline)",
          ],
          extendedDetails: {
            systemArchitecture:
              "Strapi CMS + Hasura GraphQL + NestJS Microservices + Airtable + AWS Lambda (MediaConvert)",
            techDetails:
              "Dual-portal web application (User & Broker) engineered with a decoupled backend architecture. Strapi CMS manages rich news and events, while Hasura provides an ultra-fast GraphQL layer over PostgreSQL. NestJS Microservices handle complex business logic such as syncing Event Registrations and User Contacts directly to Airtable, effectively turning it into a real-time CRM for brokers. A dedicated AWS Serverless stack utilizing Cognito (Custom Triggers) and Lambda (AWS MediaConvert) automatically transcodes user-uploaded video complaints into optimized HLS streams.",
            features: [
              "Broker Reviews & Star-Ratings System",
              "Automated Ticket Capture for Multimedia Complaints",
              "Serverless Video Transcoding (AWS MediaConvert via Lambda)",
              "Event Registration & Dynamic CRM Sync via Airtable",
              "Custom Identity Management via AWS Cognito & Lambda Triggers",
            ],
            metrics: [
              "Zero-maintenance CRM integration using Airtable",
              "Highly scalable video streaming using Apple HLS (M3U8) encoding",
            ],
            githubMarkdownUrl:
              "file:///Users/KienVu/Desktop/Lucents/hasura-infofx/docs/README.md",
            images: [
              {
                url: "/infofx-images/er_diagram.png",
                caption: "InfoFX ER Diagram",
                isMarkdownDiagram: true,
              },
              {
                url: "/infofx-images/functional_map.png",
                caption: "InfoFX Functional Mindmap",
                isMarkdownDiagram: true,
              },
            ],
          },
        },
        {
          id: "sales-network",
          name: "Sales Network — Smart HRM & Payroll Management",
          duration: "1/2023 - 5/2024",
          description:
            "Smart HRM system implementing payroll solution. Role: Main Backend Developer.",
          techStack: [
            "ReactJS",
            "NX",
            "NestJS",
            "ExpressJS",
            "Socket.io",
            "GraphQL",
            "PostgreSQL",
            "AWS",
            "Docker",
          ],
          responsibilities: [
            "Refactored money-transfer flow → reduced transfer errors by ~80%",
            "Implemented UI from design specs & integrated with backend APIs",
            "Handled department/team changes, complaints & payroll exports",
            "Refactored bonus and penalty system",
            "Managed internal notifications",
            "AWS infra & CI/CD management",
          ],
          extendedDetails: {
            images: {
              erDiagram: "/salesnetwork-images/er_diagram.png",
              functionalMap: "/salesnetwork-images/functional_map.png",
            },
            githubDocs: {
              architecture:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/architecture.md",
              apiFlow:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/api-flow.md",
              erDiagram:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/er-diagram.md",
              features:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/features.md",
              functionalMap:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/functional-map.md",
            },
            features: [
              "Approval Workflow Engine: Handled strict Request-Approve logic (PENDING -> DONE/REJECTED) for department/team changes and implemented heavy payroll data exports using node-xlsx and pdfmake.",
              "Financial Refactoring (9Pay): Overhauled the money-transfer flow by migrating from synchronous API calls to an asynchronous Bull Queue architecture in the new core codebase, dropping transfer errors by ~80% and ensuring smooth payroll processing.",
              "Bonus & Penalty System: Refactored the core logic calculating employee KPI rewards and disciplinary deductions. Features automated cron workers (cron_update_bonus.js, calculate_penalize_bonus.js) and the bonus-blacklist module.",
              "Internal Notifications: Managed real-time communication via NestJS WebSockets (@nestjs/platform-socket.io) and internal mailers (@nestjs-modules/mailer).",
            ],
            userRoles: ["Sales Employee", "Approver / Administrator (Manager)"],
            apiFlows: [
              "Manager Approval Flow (Event-driven Profile Updates via Socket/Mailer Notifications)",
              "Asynchronous 9Pay Transfer Flow (via Bull / Redis Queue)",
              "Automated Bonus/Penalty sweeps via Cron Workers",
            ],
            engineeringChallenges: [
              "Challenge 1: Migrating the synchronous 9Pay money-transfer flow to a Bull Queue system to prevent API timeouts, ensuring smooth mass payroll distribution and reducing errors by 80%.",
              "Challenge 2: Designing a flexible schema and event-driven architecture to handle complex hierarchical approvals (Employee -> Approver -> Administrator), emitting internal events to update profiles dynamically.",
              "Challenge 3: Building a highly concurrent background cron system to calculate massive sets of KPI bonuses and disciplinary deductions efficiently.",
            ],
            systemArchitecture:
              "ReactJS + Keycloak (IAM) + Hasura GraphQL + NestJS Microservices (NX Monorepo) + Bull Queue / Redis",
            techDetails:
              "Comprehensive HRM system utilizing Keycloak for Access Management and Hasura for rapid GraphQL data access. Features a heavily refactored financial microservice integrating a Bull Queue for 9Pay, ensuring smooth asynchronous payroll transfers and reducing anomalies by 80%.",
          },
        },
      ],
    },
  ],
};

export const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

export const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

export const publications = {
  data: [],
};

export const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "3-14-13 Nakoji, Amagasaki, Hyogo 661-0974",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "07084736863",
  },
};
