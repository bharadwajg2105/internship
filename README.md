# Accredian Enterprise Landing Page (Partial Clone)

## Live Demo

* **Vercel Deployment:** [https://internship-five-rust.vercel.app/](https://internship-five-rust.vercel.app/)

## GitHub Repository

* **Repository:** [https://github.com/](https://github.com/bharadwajg2105/internship)<bharadwajg2105>/<internship>
* **Commit History:** Available in the repository commits tab.

---

## Project Overview

This project is a partial clone of the **Accredian Enterprise** website built as part of an assignment. The goal was to recreate the landing page experience with a clean, responsive UI using modern frontend practices.

**Reference Website:** [https://enterprise.accredian.com/](https://enterprise.accredian.com/)

The project focuses on:

* Recreating major landing page sections
* Responsive design for mobile and desktop
* Reusable component-based architecture
* Smooth section navigation
* Lead capture modal/form integration
* Deployment on Vercel

---

## Tech Stack

* **Next.js** (App Router)
* **TypeScript**
* **CSS / Global CSS**
* **Vercel** for deployment

---

## Features Implemented

### Landing Page Sections

* Responsive Navbar
* Hero Section
* Stats Section
* Clients Section
* Accredian Edge Section
* CAT Framework Section
* How It Works Section
* FAQ Section
* Testimonials Section
* Contact CTA Section
* Footer Section

### Functional Features

* Mobile sidebar navigation
* Active nav link highlight + underline
* Smooth scroll to sections
* Lead capture modal on **Enquire Now / Contact Us** buttons
* Reusable UI components
* Responsive layout across devices

---

## Folder Structure

```text
app/
├── globals.css
├── layout.tsx
├── page.tsx

components/
├── CatFramework.tsx
├── Clients.tsx
├── ContactCTA.tsx
├── Edge.tsx
├── Expertise.tsx
├── FAQ.tsx
├── Footer.tsx
├── Hero.tsx
├── HowItWorks.tsx
├── Join.tsx
├── LeadModal.tsx
├── LeadProvider.tsx
├── Navbar.tsx
├── Segmentation.tsx
├── Stats.tsx
├── Testimonials.tsx

public/
├── image.png
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open in Browser

```text
http://localhost:3000
```

---

## Approach Taken

1. Broke the UI into reusable components for maintainability.
2. Used App Router structure in Next.js.
3. Built responsive layouts using CSS media queries and flexible containers.
4. Added smooth anchor navigation for section-based scrolling.
5. Implemented a global modal system using Context API (`LeadProvider`).
6. Matched design and spacing as closely as possible to the reference.
7. Deployed the final build on Vercel.

---

## AI Usage Explanation

AI tools were intentionally used during development as requested in the assignment.

### Tools Used

* ChatGPT
* Claude (project context / guidance)
* GitHub Copilot (optional assistance in editor)

### Where AI Helped

* Component scaffolding
* Responsive CSS suggestions
* Refactoring repetitive UI code
* Modal architecture guidance
* README structuring
* Debugging import/layout issues

### Manual Improvements Done

* Final UI adjustments
* Layout corrections
* Section spacing and typography tuning
* Navigation behavior fixes
* Responsive testing
* Code organization and cleanup
* Final integration across components

---

## Improvements With More Time

* Add backend API to store lead form submissions
* Form validation with error states
* Animations / micro-interactions
* Dark mode support
* Performance optimization (image lazy loading, code splitting)
* SEO enhancements with metadata per section
* Unit / integration tests
* CMS-based content management

---

## Evaluation Focus Covered

* Clean execution & UI quality
* Readable and maintainable code
* Reusable components
* Structured development approach
* Effective AI-assisted workflow

---

## Author

**Mayank Bhardwaj **

If you'd like, I can also create a **premium recruiter-ready README with badges, screenshots, GIF previews, and polished GitHub formatting**.
