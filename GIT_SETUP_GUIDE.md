# Complete Git & GitHub Setup Guide

This guide walks you step-by-step through publishing your portfolio to GitHub, deploying it live on Vercel for free, and setting up clean TypeScript repositories that impress recruiters.

---

## Part 1: Publishing This Portfolio to GitHub

### Step 1: Verify Git Configuration
Open your terminal in `D:\portfolio` and verify your Git identity:

```powershell
git config --global user.name "Arnab Roy"
git config --global user.email "arnabroy466@gmail.com"
```

### Step 2: Stage and Commit All Files
Check your current Git status and create your first commit:

```powershell
# Check tracked & untracked files
git status

# Stage all files
git add .

# Create the initial commit
git commit -m "feat: initial release of dark-mode portfolio with recruiter strategy & Have-it project"
```

### Step 3: Create the Repository on GitHub
1. Open [github.com/new](https://github.com/new) in your browser.
2. Set the **Repository name** to: `portfolio` (or `arnab-roy-portfolio`).
3. Set visibility to **Public** (crucial for recruiters to view your code).
4. Do **not** check "Add a README file" (we already have a complete codebase).
5. Click **Create repository**.

### Step 4: Push Local Repository to GitHub
Run the following commands (replace `YOUR_GITHUB_USERNAME` with your GitHub username, e.g., `arnabroy466`):

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

---

## Part 2: 1-Click Free Deployment to Vercel

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Locate your `portfolio` repository from the GitHub list and click **Import**.
4. Keep the default settings (Framework Preset: **Next.js**, Root Directory: `./`).
5. Click **Deploy**.
6. In ~60 seconds, your portfolio will be live at `https://portfolio-xxxx.vercel.app`!
7. *(Optional)* Add a free custom domain (e.g. `arnabroy.dev`) in Vercel under **Settings -> Domains**.

---

## Part 3: Recruiter Blueprint — "1-Click Live Demo & Clean TypeScript"

Recruiters and hiring managers spend an average of **15 to 30 seconds** vetting a portfolio. Here is the exact formula to guarantee you pass their technical screen:

### 1. The Rules for a High-Converting "Live Demo"
* **Zero Barrier to Entry:** Recruiters will **not** create a new account, check their email for an OTP, or input credit card details.
  * *Best Practice:* Provide a **"Guest Login"** or **"Explore as Demo User"** button that logs in with 1 click.
  * Your **Have-it Super-App** at `https://have-it-me.vercel.app/` is a prime example — it loads immediately in production!
* **Sub-2-Second Load Times:**
  * Free-tier servers (like Render or Railway free tier) often sleep after inactivity and take 45–60 seconds to wake up. Recruiters think the app is broken and leave.
  * *Solution:* Host on Vercel, Cloudflare Pages, or keep backend instances awake via scheduled pings (e.g., cron-job.org).

---

### 2. What Technical Interviewers Look for in Public TypeScript Repos

When a Lead Engineer clicks your **"GitHub Repo"** button, they open 3 things:
1. `tsconfig.json` (to see if you write real TypeScript or treat it like loose JavaScript).
2. The folder structure (to see if you understand Clean Architecture & separation of concerns).
3. A random service file (to check type safety and error handling).

#### Checklist for a 10/10 TypeScript Repository:

| Requirement | What to Do | What to Avoid |
| :--- | :--- | :--- |
| **Strict Compiler** | `"strict": true`, `"noImplicitAny": true`, `"noUncheckedIndexedAccess": true` | `"skipLibCheck": true` without strict flags |
| **No `any` Types** | Use `unknown`, generic types `<T>`, or discriminated unions | `const data: any = await res.json()` |
| **Runtime Validation** | Validate API inputs with **Zod** (`z.object({...})`) and infer types with `z.infer<typeof Schema>` | Blindly casting with `as MyType` |
| **Error Handling** | Use structured Result types (`Result<T, E>`) or custom Domain Errors | Empty `catch (e) {}` blocks |
| **Repository README** | Include a system architecture diagram (Mermaid), tech stack badges, and 3-step setup guide | An empty or default `create-react-app` README |

---

## Part 4: How to Pin Projects on Your GitHub Profile

1. Go to your GitHub profile: `https://github.com/YOUR_GITHUB_USERNAME`
2. Click **Customize your pins** (located just below your contribution graph).
3. Select up to 6 repositories to showcase:
   * 🌟 **`have-it-super-app`** (Real-time communication app)
   * 🌟 **`portfolio`** (This Next.js 16 website)
   * 🌟 **`n8n-crm-automation`** (Automated workflows & integrations)
   * 🌟 **`multi-tenant-saas-core`** (When you develop it)
4. Click **Save pins**.

Your most impactful production code is now front-and-center for any recruiter who lands on your GitHub!
