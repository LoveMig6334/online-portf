# 🎓 Modern Thai Portfolio

> A sleek, Bento-style personal portfolio for a passionate high school student. Built with cutting-edge web technologies.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)

---

## 📖 Overview

**Modern Thai Portfolio** is a thoughtfully designed personal portfolio website for a Grade 10 student in Thailand. The project showcases academic achievements, extracurricular activities, and personal growth through a visually stunning **Bento Box** grid layout.

### ✨ Core Tech Stack

| Technology          | Description                                            |
| ------------------- | ------------------------------------------------------ |
| **Next.js 16**      | App Router with TurboPack for blazing-fast development |
| **TypeScript**      | Type-safe development experience                       |
| **React 19**        | Server Components for optimal performance              |
| **Tailwind CSS v4** | Utility-first styling with custom theme configuration  |
| **Recharts**        | Beautiful, interactive data visualizations             |
| **Lucide React**    | Crisp, modern icon library                             |

---

## 🚀 Features

### 1. 👋 Profile & Greeting (`Hero.tsx`)

The Hero section welcomes visitors with an engaging introduction. It sets the tone for the entire portfolio with a clean, modern design that immediately communicates the student's personality and aspirations.

### 2. 🪪 Personal Info (`PersonalDetails.tsx`)

A detailed biography section featuring:

- **Full Name** and personal identity
- **Religion** and cultural background
- **Study Plan** and academic focus
- **Hobbies** and personal interests

### 3. 📊 Interactive Skills Graph (`Skills.tsx`)

A visually stunning skills visualization powered by **Recharts**, displaying aptitude levels across:

- 💻 **Programming** - Web development, competitive coding
- 🌐 **Languages** - Thai, English proficiency
- 🔬 **Science** - STEM subjects and analytical thinking

### 4. 📚 Subject Showcases (`SubjectPortfolio.tsx`)

Four dedicated routes for academic portfolios, each with custom styling:

| Subject           | Route               | Description                            |
| ----------------- | ------------------- | -------------------------------------- |
| 📐 Math           | `/subjects/math`    | Mathematical achievements and projects |
| 📝 Thai           | `/subjects/thai`    | Thai language arts and literature      |
| 🌍 Social Studies | `/subjects/social`  | Civic engagement and history           |
| 🧪 Science        | `/subjects/science` | Scientific experiments and discoveries |

### 5. 🍱 Bento Box Activity Feed (`Activities.tsx`)

A modern grid layout showcasing projects and activities in an aesthetically pleasing Bento-style arrangement. Each activity card features:

- Project title and description
- Visual tags and categories
- Interactive hover effects

### 6. 📅 Interactive Timeline (`Timeline.tsx`)

An alternating timeline design chronicling the educational journey from Grade 10 onwards to future aspirations. Features:

- Chronological milestone markers
- Grade-specific achievements
- Future goal projections

### 7. ⭐ Evaluation System (`Evaluation.tsx`)

An interactive 1-5 star rating form allowing visitors to:

- Rate the portfolio's design and content
- Provide anonymous feedback
- Engage with the student's work

---

## 💻 Installation & Usage

### Prerequisites

- **Node.js** `v18.17.0` or higher (LTS recommended)
- **npm** `v9.0.0` or higher

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-username/online-portf.git
cd online-portf

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with TurboPack |
| `npm run build` | Build for production                    |
| `npm run start` | Start production server                 |
| `npm run lint`  | Run ESLint for code quality             |

---

## 🗺️ Long-Term Roadmap

A professional development plan for evolving this portfolio as the student progresses through their academic journey.

### Phase 1: Foundation _(Current)_ ✅

> **Status:** Complete

- [x] Static content and UI polish
- [x] Bento Box grid layout implementation
- [x] Interactive skills visualization
- [x] Subject showcase pages
- [x] Timeline and evaluation components

---

### Phase 2: Dynamic Content 📝

> **Goal:** Enable content updates without coding

- [ ] Integrate a **Headless CMS** (Sanity.io or Strapi)
- [ ] Create blog/activity management dashboard
- [ ] Implement preview mode for drafts
- [ ] Add image optimization through CMS

**Why?** As the student advances, they'll want to add new projects, awards, and blog posts without deploying code changes.

---

### Phase 3: Backend Integration ⚡

> **Goal:** Persist visitor interactions

- [ ] Connect Evaluation Form to **Supabase** or **Firebase**
- [ ] Store and display aggregate ratings
- [ ] Implement visitor analytics dashboard
- [ ] Add serverless API routes for data handling

**Why?** Real feedback data helps improve the portfolio and provides valuable insights for university applications.

---

### Phase 4: Accessibility & SEO 🎯

> **Goal:** Maximum visibility for admissions

- [ ] Enhance **ARIA labels** for screen readers
- [ ] Add comprehensive **meta tags** (Open Graph, Twitter Cards)
- [ ] Implement **structured data** (JSON-LD) for rich snippets
- [ ] Generate **sitemap.xml** and **robots.txt**
- [ ] Optimize **Core Web Vitals** scores
- [ ] Multi-language support (Thai/English toggle)

**Why?** University admissions officers and recruiters should easily find and navigate this portfolio.

---

## 🎨 Design System

### Color Palette

The portfolio uses a harmonious three-color palette that conveys professionalism and youthful energy:

| Color                           | Hex Code  | Usage                           |
| ------------------------------- | --------- | ------------------------------- |
| 🔵 **Light Blue** (Primary)     | `#329ee2` | Headers, links, primary actions |
| 🔷 **Dark Blue** (Primary Dark) | `#207bb5` | Hover states, emphasis          |
| 🟡 **Yellow** (Secondary)       | `#facc15` | Accents, highlights, CTAs       |
| ⬛ **Dark**                     | `#111b21` | Text, dark elements             |
| 🔲 **Surface Light**            | `#f8fafb` | Backgrounds, cards              |

### Design Philosophy

- **Clean & Minimal** — White backgrounds provide breathing room
- **Bento Grid Layout** — Modular, visually engaging content blocks
- **Subtle Animations** — Micro-interactions enhance user experience
- **Typography** — _Plus Jakarta Sans_ with _Noto Sans Thai_ fallback

---

## 📁 Project Structure

```
online-portf/
├── app/
│   ├── components/         # Reusable UI components
│   │   ├── Activities.tsx
│   │   ├── Evaluation.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PersonalDetails.tsx
│   │   ├── Skills.tsx
│   │   ├── SubjectPortfolio.tsx
│   │   └── Timeline.tsx
│   ├── subjects/
│   │   └── [subject]/      # Dynamic subject routes
│   │       └── page.tsx
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── types.ts            # TypeScript interfaces
├── public/                 # Static assets
├── package.json
└── README.md
```

---

## 📄 License

This project is for educational purposes. Feel free to use it as inspiration for your own portfolio!

---

<p align="center">
  Made with 💙 by a passionate Grade 10 student in Thailand
</p>
