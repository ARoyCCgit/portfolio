# Arnab Roy — Senior Full-Stack & Backend Engineer Portfolio

<div align="center">

![Next.js 16](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)
![React 19](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js 20](https://img.shields.io/badge/Node.js%2020-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br />

**Architecting high-availability backend systems, microservices, and modern web applications.**  
Delivering real-time communication architectures (WebSockets & WebRTC), multi-gateway payment integrations, and enterprise cloud workflows.

[Explore Live Demo](https://have-it-me.vercel.app/) • [Download CV](public/Arnab_Roy_CV.pdf) • [Connect on LinkedIn](https://linkedin.com/in/arnab-roy-84115a197)

</div>

---

## ⚡ Overview

This repository contains the source code for the personal engineering portfolio of **Arnab Roy**, a Senior Full-Stack and Backend Software Engineer with nearly 5 years of professional experience across SaaS, fintech, logistics, and real-time enterprise web systems.

Designed with a high-contrast dark aesthetic, glassmorphism panels, and optimized for sub-second page loads, this portfolio adheres strictly to the **15-to-30 second recruiter scan framework**—surfacing verifiable business metrics, live production projects, and clean architecture upfront.

---

## 🎯 Key Sections & Features

- **Availability & Status Header**: Dynamic ping indicator showing current availability for Senior Full-Stack and Backend positions, location flexibility, and one-click contact channels.
- **Hero & Verified Metrics**:
  - `5 Yrs` enterprise & SaaS engineering experience.
  - `20+` full-stack applications & production APIs shipped.
  - `+40%` database throughput boost via query tuning & Redis caching.
  - `<80ms` sub-second API response latency targets.
- **Recruiter Fast-Track (Quick-Sheet)**:
  - Target roles (*Senior Full-Stack Engineer, Senior Backend Engineer, Lead Node.js/Laravel Developer, API & Systems Architect*).
  - Work preference: Remote Worldwide / Hybrid.
  - Notice period: Immediate / 2 Weeks.
  - Core domain strengths summary.
- **Production Projects Showcase**:
  - **Have-it Super-App**: Real-time ephemeral messenger & social ecosystem featuring Next.js 15, React 19, Socket.IO, WebRTC voice/video calls, MongoDB Atlas, Redis, and RabbitMQ (<50ms real-time chat latency).
  - **n8n CRM & Pipeline Automation**: Automated high-intent lead routing integrating GoHighLevel, Salesforce CRM, and Pingtree APIs (85% reduction in lead handoff time).
  - **Multi-Tenant SaaS Foundation**: Dynamic schema/database isolation, tenant context resolution middleware, and strict TypeScript RBAC.
  - **Microsoft Enterprise Auth & SSO**: PKCE-hardened OAuth 2.0 flows, JWT validation, and unified session management.
  - **Extensiv 3PL Logistics Tracking**: Real-time carrier status webhooks, inventory reconciliation pipelines syncing 50k+ monthly shipments.
  - **Multi-Gateway Payment Engine**: Resilient transaction routing integrating Stripe, PayPal, Razorpay, and Square with split disbursements and automated dispute reconciliation.
- **Interactive Skills Matrix**: Grouped by *Backend & Systems*, *Databases & Cloud*, and *Frontend & Integrations*.
- **Verified Work Experience**: Detailed progression across Codeclouds IT Solutions, Red Apple Technology, and Spring Infoserv Technologies.
- **Performance & Core Web Vitals**:
  - Eager LCP image loading with Next.js 16 image optimization.
  - Zero Cumulative Layout Shift (CLS) via fluid aspect ratios.
  - Completely static prerendering (SSG) for instantaneous global edge delivery.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Geist Sans & Geist Mono via `next/font` |
| **Deployment** | [Vercel](https://vercel.com/) (Edge Network) |

---

## 📂 Project Structure

```text
portfolio/
├── public/                     # Static assets served at root /
│   ├── Arnab_Roy_CV.pdf        # Direct downloadable PDF resume
│   └── dp_formal.jpg           # High-resolution formal display picture
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind CSS v4 & custom glassmorphism styles
│   │   ├── layout.tsx          # Root layout, Geist fonts, and OpenGraph metadata
│   │   └── page.tsx            # Composition page pulling all portfolio modules
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with quick links & eager avatar
│   │   ├── Hero.tsx            # Main hero with metrics, CTA, and display card
│   │   ├── RecruiterSheet.tsx  # Fast-track vetting sheet for recruiters
│   │   ├── ProjectShowcase.tsx # Tabbed P-S-I project showcase
│   │   ├── SkillsSection.tsx   # Categorized technical competency cards
│   │   ├── ExperienceSection.tsx # Chronological career history & achievements
│   │   ├── ContactSection.tsx  # Interactive contact methods & quick copy email
│   │   ├── Footer.tsx          # Minimal footer with back-to-top button
│   │   └── Icons.tsx           # Custom branded SVG icons (GitHub, LinkedIn)
│   └── data/
│       └── portfolio-data.ts   # Centralized single source of truth for all content
├── next.config.ts              # Next.js 16 configuration
├── package.json                # Dependencies and build scripts
├── tsconfig.json               # TypeScript configuration with strict flags
└── README.md                   # Repository documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `v20.x` or higher
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ARoyCCgit/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Build & Verification

To create an optimized production build:

```bash
# Run Next.js static build & TypeScript checks
npm run build

# Start the production server locally
npm run start
```

---

## 🌐 Deploying to Vercel

The portfolio is optimized for zero-config deployment on Vercel:

1. Push your repository to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/ARoyCCgit/portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework preset **Next.js** will be detected automatically. Click **"Deploy"**.

---

## 📬 Contact & Connect

**Arnab Roy**  
*Senior Full-Stack & Backend Software Engineer*

- **Location**: Hooghly, West Bengal, India (Open to Remote Worldwide)
- **Email**: [arnabroy466@gmail.com](mailto:arnabroy466@gmail.com)
- **Phone**: +91-8159097432
- **GitHub**: [github.com/arnabroy466](https://github.com/arnabroy466)
- **LinkedIn**: [linkedin.com/in/arnab-roy-84115a197](https://linkedin.com/in/arnab-roy-84115a197)
- **Resume**: [Download Arnab Roy CV](public/Arnab_Roy_CV.pdf)

---

<div align="center">
  <sub>Designed & built with Next.js 16, React 19, and Tailwind CSS v4. © Arnab Roy. All rights reserved.</sub>
</div>
