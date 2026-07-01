# Somil Mittal | Personal Portfolio & Software Developer Showcase

Welcome to the official repository of my personal portfolio and professional developer showcase. Designed with a premium, high-fidelity cyberpunk aesthetic, this site highlights my work, academic milestones, verified certifications, and projects in Software Development, Artificial Intelligence (AI), and Machine Learning (ML).

📱 **Live Link:** [https://somil566.github.io/SomilPortfolio/](https://sanumittal946-eng.github.io/SomilPortfolio/)

---

## 🛠️ Technology Stack
*   **Core:** React 19, TypeScript, Vite
*   **Styling & Abstractions:** Vanilla CSS, Tailwind CSS (Custom Design System Tokens)
*   **Animation & Visuals:** Framer Motion (`motion/react`), HTML5 Canvas API (Physics-based particle interactions)
*   **Icons & Branding:** Lucide React, Custom Monogram Logo
*   **Forms & API Handling:** `react-hook-form`, Google Apps Script (Serverless contact data ingestion)

---

## 🛸 Key Features

### 1. Canvas Particle Physics Engine
*   **Magnetic repulsion dot grid:** Responsive background particles that react dynamically to cursor movement with smooth velocity decay.
*   **Shooting Star Effects:** Floating glowing trails randomly crossing the canvas to give a living, premium environment feeling.

### 2. Mechanical Modules (Projects Carousel)
*   **Isometric Project Cards:** Custom 3D mechanical-styled layout detailed with simulated corner screws.
*   **Drag-to-Scroll SNAP:** Mobile-friendly, frictionless touch & drag horizontal scroll snapping carousel.
*   **Dynamic Status Glows:** Cards reflect status glow rings (Lime for Active, Cyan for Synced, Pink for Work-in-Progress) on hover.

### 3. Smart Timeline (Education & Experience)
*   **Interactive Chronological Path:** Node milestones that pulse and glow.
*   **Conditional Work & Academic Icons:** Timeline nodes dynamically choose between a `Briefcase` icon (for internship/work experiences) and a `GraduationCap` icon (for credentials).

### 4. Interactive Certificate Viewer (Preview Lightbox Modal)
*   **In-App Previews:** A custom full-screen lightbox modal allowing users to instantly view PDF certificates (via secure iframes) or image files (via reactive image containers) directly on the website.
*   **Split Redirect Actions:** Integrated options to either preview the certificate directly or open the original document in a new tab.

### 5. Google Sheets Data Integration
*   **Form Submissions:** The Contact Form validates user entries asynchronously using `react-hook-form` and forwards messages to a private Google Sheet via a Google Apps Script Web App endpoint.

---

## 📈 SEO & AEO Optimization

This portfolio is fully optimized for standard Search Engines (SEO) and modern LLM-based Answer Engines (AEO) such as Gemini, SearchGPT, and Perplexity:
*   **JSON-LD Structured Data:** Embedded schema markup (`@type: Person`) explicitly detailing name, job titles, education, social profile links, and specific programming skills.
*   **Semantic HTML5 markup:** Utilizes `<header>`, `<main>`, `<section>`, and `<footer>` elements for crawlers to easily parse layout context.
*   **OpenGraph & Twitter Card Tags:** Rich meta previews configured for sharing on LinkedIn, Slack, Twitter, and other developer platforms.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sanumittal946-eng/SomilPortfolio.git
   cd SomilPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```
   The compiled static files will be outputted to the `dist/` folder.

---

## 🌎 Deployment Pipeline

This project is configured with continuous deployment via **GitHub Actions** ([deploy.yml](.github/workflows/deploy.yml)).
*   **Trigger:** Pushes to the `main` branch.
*   **Process:** Installs packages, runs the Vite compiler, and deploys the static files from `/dist` directly to the `gh-pages` branch.
