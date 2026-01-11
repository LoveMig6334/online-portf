# Project Context: Online Portfolio

## Overview
This is a personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. It is designed to showcase the academic and extracurricular achievements of a student (likely high school), featuring sections for skills, subject-specific projects, activities, and a timeline of events.

## Tech Stack
- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Icons:** Lucide React
- **Charts:** Recharts
- **Package Manager:** NPM (inferred from `package-lock.json`)

## Key Directories & Files

### Core
- `app/page.tsx`: The main landing page. Composes sections like `Hero`, `PersonalDetails`, `Skills`, `SubjectPortfolio`, `Activities`, `Timeline`, etc.
- `app/layout.tsx`: Root layout file.
- `app/types.ts`: Shared TypeScript interfaces (`Project`, `Subject`, `TimelineEvent`, `Activity`, `DetailItemProps`).
- `app/globals.css`: Global styles and Tailwind imports.

### Components (`app/components/`)
- `Hero.tsx`: Introduction section.
- `SubjectPortfolio.tsx`: Displays academic subjects (Math, Thai, Social, Science) as cards linking to detailed pages.
- `Timeline.tsx`: Chronological display of education/grades.
- `Skills.tsx`, `Activities.tsx`, `Evaluation.tsx`: Other content sections.
- `Navbar.tsx`, `Footer.tsx`: Navigation and footer.

### Routing
- `app/subjects/[subject]/page.tsx`: Dynamic route for individual subject portfolios. Links from `SubjectPortfolio.tsx` point here (e.g., `/subjects/math`).

## Development Scripts
Run these commands with `npm run <script>`:
- `dev`: Starts the development server at `http://localhost:3000`.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint.

## Data Structure
Data models are defined in `app/types.ts`.
- **Subject:** ID, name, description, color styling.
- **Project:** ID, title, description, tags, date.
- **TimelineEvent:** Year, grade, title, description, bullets.

## Conventions
- **Styling:** Utility-first CSS using Tailwind.
- **Icons:** `lucide-react` components used inline.
- **Components:** Functional React components.
- **Navigation:** `next/link` for internal routing.
