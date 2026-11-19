# Anil Biradar — Premium AI Engineering Portfolio

A modern, production-grade AI Engineering Portfolio designed to present commercial capability in **Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Autonomous AI Agents, and Python/FastAPI Backend Engineering**.

Positioning: **Junior AI Engineer | Generative AI Developer | LLM Application Developer | AI Automation Engineer**  
Location: **Bengaluru, Karnataka, India**  
Portfolio Domain: `https://anilbiradar.netlify.app/`  
GitHub: [https://github.com/Anilbirada](https://github.com/Anilbirada)  
LinkedIn: [https://www.linkedin.com/in/anil-biradar-531a71317/](https://www.linkedin.com/in/anil-biradar-531a71317/)

---

## 1. Quick Start (Run Locally)

Requirements: Node.js 20+ and npm.

```powershell
cd ai-hero-update
npm install
npm test
npm run build
npm run dev
```

Open `http://localhost:5173/` in your browser.

---

## 2. Architecture & Website Sections

1. **Section 1: Neural Hero Section**
   - High-performance HTML5 Canvas dynamic neural network particle simulation.
   - Verified profile image with glowing status pill: *"Available for Junior AI Engineer & GenAI Roles • Bengaluru & Remote"*.
   - 6 Instant CTAs: Download Resume, Explore Projects, GitHub, LinkedIn, Contact Me, and Architecture View.

2. **Section 2: Professional About Me**
   - BCA Graduate credentials.
   - Junior AI Developer experience at RSR Technology.
   - Core philosophy: Engineering rigor, context grounding, deterministic fallbacks, and production-tested backends.

3. **Section 3: Technical Expertise**
   - Categorized skills: Programming, Generative AI, RAG Engineering, AI Agents, Backend Systems, Databases, DevOps, Testing.
   - Distinguishes *Production Experience* from *Hands-on Implementation*.

4. **Section 4: Featured AI Projects**
   - **ErrorSentinel AI:** AI-Powered Error Intelligence & Inbox Monitoring (Python, LLM Structured Output, Atomic SQLite).
   - **Nexora AI:** Multi-Agent Business Automation Platform (8 Orchestrated Agents, Human-in-the-Loop, PostgreSQL).
   - **Enterprise RAG Assistant:** Document Intelligence Engine (PyMuPDF, ChromaDB Vector Store, Source Citations).
   - **Customer Loyalty Platform (CLP):** Production Full-Stack Application (Frappe, ERPNext, Python, MariaDB, Docker, Linux VPS).
   - **Secondary Projects:** RouteX AI, Smart Placement Readiness Analyser, Suspicious URL Detection, Build IQ, Support IQ.

5. **Section 5: Project Architecture Deep-Dive Dialog**
   - Interactive dialog displaying Problem Statement, Solution, SVG Data Flow Diagram, LLM Guardrails, Backend, Database, Security, Testing, Deployment, and Real Engineering Challenges.

6. **Section 6: Commercial Experience**
   - RSR Technology (Junior AI Developer | Bengaluru, India).
   - Real responsibilities: Build IQ, Support IQ, Python microservices, LLM APIs, and test suites.

7. **Section 7: GitHub Integration**
   - Real repository cards linked to `https://github.com/Anilbirada`.
   - Interactive 28-week commit activity calendar.

8. **Section 8: Engineering Journey Timeline**
   - Milestones: BCA Education → Software Engineering → Backend Systems → Generative AI → RAG → AI Agents → Production AI.

9. **Section 9: Resume Section**
   - Live interactive resume view.
   - Working "Download Official PDF" button serving `public/resume.pdf`.
   - Fullscreen resume preview modal.

10. **Section 10: Secure Contact Section**
    - Direct email copying, LinkedIn, GitHub, and location badges.
    - Client-side validated form (Name, Email, Subject, Message) with loading state, success toast, and secure email draft generation.

---

## 3. Production Deployment to Netlify

The project is pre-configured with `netlify.toml` for continuous deployment:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Option A: Instant Drag-and-Drop (1 Minute)
1. Run `npm run build` locally.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `ai-hero-update/dist` folder into your browser.

### Option B: Continuous Deployment via GitHub
1. Push this repository to GitHub: `https://github.com/Anilbirada/ai-engineer-portfolio`.
2. Connect the repository in Netlify (**Add new site → Import an existing project**).
3. Netlify will automatically detect `npm run build` and publish `dist`.
