export type ProjectCategory = "Full-Stack" | "Backend" | "Cloud & Microservices" | "Integrations";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory | ProjectCategory[];
  problem: string;
  solution: string;
  impactMetric: string;
  impactLabel: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  statusBadge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const portfolioData = {
  personalInfo: {
    name: "Arnab Roy",
    role: "Senior Full-Stack & Backend Software Engineer",
    shortBio:
      "I build scalable backend systems, custom Shopify solutions, APIs, integrations, and e-commerce experiences using PHP, Laravel, Node.js, JavaScript, and modern web technologies. 5+ years of experience turning complex business requirements into reliable, production-ready solutions.",
    availability: "Available for Senior Full-Stack & Backend Roles",
    isAvailable: true,
    location: "Hooghly, West Bengal, India (Open to Remote Worldwide)",
    email: "arnabroy466@gmail.com",
    phone: "+91-8159097432",
    github: "https://github.com/ARoyCCgit",
    linkedin: "https://linkedin.com/in/arnab-roy-84115a197",
    resumeUrl: "/Arnab_Roy_CV.pdf",
    yearsOfExperience: "5",
    profileImage: "/dp_formal.jpg",
  },

  recruiterQuickSheet: {
    targetRoles: [
      "Senior Full-Stack Engineer",
      "Senior Backend Engineer",
      "Lead Node.js / Laravel Developer",
      "API & Systems Architect",
    ],
    experienceLevel: "5+ Years Building Production Web & Enterprise Applications",
    preferredWorkType: "Remote / Hybrid / Full-Time",
    noticePeriod: "Immediate / 2 Weeks",
    coreStrengths: [
      "Backend & API Architecture with Node.js, Express.js, Next.js, and PHP/Laravel",
      "GenAI solutions & AI workflow integrations with Gemini Pro and ChatGPT",
      "Real-time event streaming with WebSockets (Socket.IO), WebRTC, and RabbitMQ",
      "Multi-gateway payment engineering (Stripe, PayPal, Razorpay, Square, escrow & split payouts)",
      "Logistics & enterprise integrations (Extensiv 3PL, Microsoft SSO, OAuth 2.0, n8n automation)",
    ],
  },

  metrics: [
    { label: "Years Experience", value: "5+ Yrs", detail: "5+ yrs in enterprise & SaaS" },
    { label: "Production Delivery", value: "20+", detail: "Full-stack apps & APIs shipped" },
    { label: "Throughput Boost", value: "+40%", detail: "Query & Redis caching optimization" },
    { label: "API Latency", value: "<80ms", detail: "Sub-second response optimization" },
  ],

  projects: [
    {
      id: "have-it-super-app",
      title: "Have-it Super-App",
      tagline: "Unified Real-Time Messenger + Instagram-Grade Social Ecosystem",
      category: ["Full-Stack", "Cloud & Microservices"],
      problem:
        "Modern communication applications often suffer from latency-heavy polling or fail to combine high-speed ephemeral chat with media-rich social discovery in a single microservices architecture.",
      solution:
        "Architected an event-driven distributed super-app featuring Next.js 15, React 19, Socket.IO, WebRTC voice/video calls, MongoDB Atlas, Upstash Redis, RabbitMQ queues, and a dedicated Next.js Admin Command Center.",
      impactMetric: "⚡ <50ms real-time chat latency",
      impactLabel: "Live in production on Vercel with cross-platform support (Web, Desktop, Android, iOS) handling rooms, receipts, stories, and social graph",
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Socket.IO",
        "Node.js 20",
        "MongoDB Atlas",
        "Redis",
        "RabbitMQ",
        "WebRTC",
        "Tailwind CSS v4",
      ],
      liveUrl: "https://have-it-me.vercel.app/",
      githubUrl: "https://github.com/ARoyCCgit/have-it.git",
      featured: true,
      statusBadge: "Live Production App",
    },
    {
      id: "n8n-crm-automation",
      title: "n8n CRM & Pipeline Automation",
      tagline: "Enterprise Lead Routing, Pingtree & Data Sync Workflow Engine",
      category: "Integrations",
      problem:
        "Marketing and sales teams lost high-intent leads due to slow manual handoffs between CRM systems, email marketing platforms, and third-party partner portals.",
      solution:
        "Engineered automated n8n workflows integrating GoHighLevel (GHL), Salesforce CRM, and Pingtree APIs to dynamically score, route, and synchronize lead records in real-time.",
      impactMetric: "⚡ 85% Reduction in Lead Handoff Time",
      impactLabel: "Automated end-to-end routing for thousands of daily marketing inquiries without dropped events",
      techStack: ["n8n", "Node.js", "Salesforce API", "GoHighLevel API", "REST APIs", "Webhooks"],
      liveUrl: "https://github.com/ARoyCCgit/ai-automation-mail-n8n",
      githubUrl: "https://github.com/ARoyCCgit/ai-automation-mail-n8n",
      featured: true,
      statusBadge: "Production Workflow",
    },
    {
      id: "multi-tenant-saas-platform",
      title: "Multi-Tenant Enterprise SaaS Core",
      tagline: "Dynamic Tenant Isolation, Subdomain Routing & Strict TypeScript RBAC",
      category: ["Full-Stack", "Cloud & Microservices"],
      problem:
        "B2B SaaS architectures face severe data security risks, cross-tenant data leaks, and schema migration bottlenecks as organization accounts scale into the hundreds.",
      solution:
        "Architected an enterprise multi-tenant backend foundation with strict schema/database isolation, tenant context resolution middleware, Zod-validated domain models, and dynamic connection pooling.",
      impactMetric: "🏢 100% Tenant Isolation",
      impactLabel: "Zero cross-tenant data leakage with automated organization onboarding, subdomain resolution, and role-based access control",
      techStack: [
        "TypeScript (Strict)",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Tailwind CSS",
      ],
      liveUrl: "https://github.com/arnabroy466/multi-tenant-saas-core",
      githubUrl: "https://github.com/arnabroy466/multi-tenant-saas-core",
      featured: true,
      statusBadge: "Architecture & Code",
    },
    {
      id: "microsoft-enterprise-sso",
      title: "Microsoft Enterprise Auth & SSO",
      tagline: "Hardened OAuth 2.0 & Multi-Provider Identity Verification Engine",
      category: "Backend",
      problem:
        "Corporate portals required unified single-sign-on (SSO) with Microsoft Azure AD and social logins while preventing token spoofing and session desynchronization.",
      solution:
        "Engineered an enterprise authentication system with PKCE-hardened OAuth 2.0 flows, JWT validation, and unified session management for Microsoft, Google, LinkedIn, and Facebook.",
      impactMetric: "🔒 99.99% Authentication Reliability",
      impactLabel: "Seamless single sign-on experience across multiple corporate web applications with zero token leaks",
      techStack: ["Node.js", "Express.js", "OAuth 2.0", "JWT", "PHP / Laravel", "Redis", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      statusBadge: "Enterprise Core",
    },
  ] as Project[],

  skills: [
    {
      title: "Backend & Systems",
      description: "Developing robust APIs, microservices, and high-concurrency systems",
      skills: [
        { name: "Node.js & Express.js", level: "Expert" },
        { name: "PHP & Laravel Framework", level: "Expert" },
        { name: "RESTful API Design & Integration", level: "Expert" },
        { name: "WebSockets (Socket.IO) & WebRTC", level: "Advanced" },
        { name: "RabbitMQ Message Queuing", level: "Advanced" },
        { name: "OAuth 2.0, Microsoft SSO & JWT", level: "Expert" },
      ],
    },
    {
      title: "Databases & Cloud",
      description: "Data modeling, caching, cloud storage, and containerization",
      skills: [
        { name: "MySQL & Query Optimization", level: "Expert" },
        { name: "Azure Services (App Service, Functions, Storage)", level: "Expert" },
        { name: "MongoDB Atlas & Aggregation", level: "Intermediate" },
        { name: "Redis Caching", level: "Intermediate" },
        { name: "AWS S3", level: "Proficient" },
        { name: "Docker & Containerization", level: "Advanced" },
        { name: "Postman API Automation & Testing", level: "Expert" },
      ],
    },
    {
      title: "Frontend & Integrations",
      description: "Modern UI engineering, GenAI, payments, and workflow automations",
      skills: [
        { name: "Next.js 15/16 (App Router) & React 19", level: "Advanced" },
        { name: "TypeScript & JavaScript (ES6+)", level: "Advanced" },
        { name: "GenAI (Gemini Pro, ChatGPT)", level: "Advanced" },
        { name: "Tailwind CSS & Responsive UI", level: "Advanced" },
        { name: "Payment Gateways (Stripe, PayPal, Razorpay)", level: "Expert" },
        { name: "n8n Workflow & CRM Automation (GHL, Salesforce)", level: "Advanced" },
        { name: "Extensiv 3PL & Logistics APIs", level: "Expert" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      role: "Senior Software Engineer: Web",
      company: "Codeclouds IT Solutions Pvt. Ltd.",
      period: "June 2023 – Present",
      location: "Kolkata, India",
      summary:
        "Lead backend architecture and full-stack web solutions using Node.js, Express.js, Next.js, PHP, Laravel, TypeScript, MySQL, MongoDB, and Redis.",
      highlights: [
        "Architected enterprise web apps and microservices using Docker containerization, reducing defect turnaround times by 35%.",
        "Optimized database queries and introduced Redis caching, boosting application throughput by 40% across high-traffic platforms.",
        "Engineered enterprise Microsoft-based SSO authentication and OAuth 2.0 social login integrations for Google, LinkedIn, and Facebook.",
        "Integrated multi-channel payment gateways including Stripe, PayPal, Razorpay, and Square with split payments and automated vendor payouts.",
        "Integrated Extensiv 3PL logistics platforms for real-time shipment monitoring, inventory reconciliation, and reporting.",
        "Automated business processes via n8n workflows integrating GoHighLevel, Salesforce CRM, and Pingtree for lead routing.",
        "Engineered biometric facial-recognition access control integrated with EMS to automate real-time employee attendance tracking.",
      ],
      tech: ["Node.js", "PHP / Laravel", "Next.js", "Express.js", "TypeScript", "MySQL", "MongoDB", "Redis", "Docker", "Stripe"],
    },
    {
      role: "Software Developer",
      company: "Red Apple Technology Pvt. Ltd.",
      period: "March 2022 – May 2023",
      location: "Kolkata, India",
      summary:
        "Developed full-lifecycle client web applications, database-driven systems, and third-party REST API integrations.",
      highlights: [
        "Engineered backend application logic and database-driven features using PHP, JavaScript, and MySQL.",
        "Collaborated with onshore stakeholders to gather requirements, document technical specifications, and conduct UAT testing.",
        "Troubleshot and resolved complex technical bottlenecks, reducing page load latency by 35%.",
      ],
      tech: ["PHP", "JavaScript", "MySQL", "REST APIs", "HTML5/CSS3", "Git"],
    },
    {
      role: "Web Application Developer",
      company: "Spring Infoserv Technologies",
      period: "February 2021 – February 2022",
      location: "Kolkata, India",
      summary:
        "Developed foundational database-driven web features, authentication routines, and CRUD modules.",
      highlights: [
        "Built PHP-based web applications, REST APIs, and relational database schemas with MySQL.",
        "Refactored legacy queries and maintained production stability across client portals.",
      ],
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
    },
  ] as Experience[],
};
