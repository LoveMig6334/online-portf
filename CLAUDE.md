# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Thai student portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Features a Bento-style grid layout showcasing academic achievements, skills visualization, and subject-specific portfolios.

## Commands

```bash
npm run dev     # Start dev server at http://localhost:3000 (uses TurboPack)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Architecture

### Component Model
- **Server Components** (default): `page.tsx`, subject pages
- **Client Components** (`"use client"`): `Navbar`, `Skills`, `Timeline`, `Evaluation` - for interactivity/charts

### Routing
- Home page: `app/page.tsx` - composes all section components
- Dynamic subject pages: `app/subjects/[subject]/page.tsx` - uses `generateStaticParams()` for math, thai, social, science

### Type Definitions
All shared interfaces in `app/types.ts`:
- `Project`, `Subject`, `TimelineEvent`, `Activity`, `DetailItemProps`

### Styling
- Tailwind v4 with custom theme in `app/globals.css`
- Theme colors: Primary (`#329ee2`), Primary Dark (`#207bb5`), Secondary (`#facc15`), Dark (`#111b21`), Surface Light (`#f8fafb`)
- Fonts: Plus Jakarta Sans + Noto Sans Thai

### Data
Currently hardcoded in components. Roadmap includes headless CMS integration (Sanity.io/Strapi).

## Key Conventions

- Icons: `lucide-react` imported inline
- Images: `next/image` with remote patterns configured for `picsum.photos`
- Navigation: `next/link` for internal routing
- Language: Thai (`lang="th"` in root layout)
