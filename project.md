# Al-Noor Academy - Online Quran & Arabic Management Platform

## 📋 Overview

Premium SaaS platform for managing an online Quran and Arabic academy. Built with Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and Lucide Icons. Features a public website (6 pages), admin dashboard (8 pages), teacher dashboard (6 pages), and student dashboard (8 pages) — totalling 28 pages. Includes full LMS flows: program enrollment, lesson viewing (video/PDF/vocab/audio), quiz engine, homework submission, and content builder.

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Radix UI | Accessible primitives |
| Lucide React | Icons |
| React Hook Form | Forms |
| class-variance-authority | Component variants |
| tailwind-merge | Class merging |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#0F766E` (Emerald) |
| Secondary | `#16A34A` (Green) |
| Accent | `#D4AF37` (Gold) |
| Background | `#FFFFFF` |
| Card | `#FFFFFF` |
| Border | `#E5E7EB` |
| Text | `#111827` |
| Muted Text | `#6B7280` |
| Border Radius | `16px` |
| Shadows | `shadow-soft`, `shadow-card`, `shadow-elevated`, `shadow-dialog` |

---

## 📄 Page Structure (28 Pages)

### 🌐 Public Website (6)

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Home — Hero with stats, Why Choose Us, Featured Courses, Teachers, Pricing Preview, Testimonials, FAQ |
| `/about` | `src/app/about/page.tsx` | Mission & Vision, Core Values, Journey Timeline, Statistics |
| `/pricing` | `src/app/pricing/page.tsx` | 3 plan cards, Monthly/Quarterly/Yearly toggle, Comparison table, FAQs |
| `/contact` | `src/app/contact/page.tsx` | Contact info cards, WhatsApp card, Contact form, Map placeholder |
| `/login` | `src/app/login/page.tsx` | Split screen, email/password form, Google OAuth, create account link |
| `/register` | `src/app/register/page.tsx` | 3-step form: Personal → Contact → Plan, progress indicator |

### 👑 Admin Dashboard (8)

| Route | File | Description |
|-------|------|-------------|
| `/dashboard/admin` | `src/app/dashboard/admin/page.tsx` | 6 stat cards, Revenue chart, Student growth chart, Schedule, Notifications, Quick actions |
| `/dashboard/admin/teachers` | `src/app/dashboard/admin/teachers/page.tsx` | Search + filter, teacher table, approval actions |
| `/dashboard/admin/students` | `src/app/dashboard/admin/students/page.tsx` | Search + filter, student table with attendance |
| `/dashboard/admin/courses` | `src/app/dashboard/admin/courses/page.tsx` | Grid/list toggle, course cards, CRUD |
| `/dashboard/admin/subscriptions` | `src/app/dashboard/admin/subscriptions/page.tsx` | Tabs (all/active/expired/paused), subscription table |
| `/dashboard/admin/payments` | `src/app/dashboard/admin/payments/page.tsx` | Tabs (all/paid/pending/failed), invoice table, Export |
| `/dashboard/admin/reports` | `src/app/dashboard/admin/reports/page.tsx` | 4 widgets: Revenue chart, Student growth, Attendance, Subscription distribution |
| `/dashboard/admin/settings` | `src/app/dashboard/admin/settings/page.tsx` | 4 tabs: General, Branding, Payments, Security |

### 📝 Content Builder (Admin) (3)

| Route | File | Description |
|-------|------|-------------|
| `/dashboard/admin/content-builder` | `src/app/dashboard/admin/content-builder/page.tsx` | Program list with nested level/lesson tree, drag handles, add/edit/delete |
| `/dashboard/admin/content-builder/lesson/[id]` | `.../lesson/[id]/page.tsx` | Lesson editor: title, video URL, PDF upload, vocab builder, audio upload, quiz questions |
| `/dashboard/admin/content-builder/program/[id]` | `.../program/[id]/page.tsx` | Program editor with level management, lesson ordering |

### 👨‍🏫 Teacher Dashboard (6)

| Route | File | Description |
|-------|------|-------------|
| `/dashboard/teacher` | `src/app/dashboard/teacher/page.tsx` | 4 stat cards, Monthly hours chart, Upcoming classes, Students table, Achievements, Reviews, Quick actions |
| `/dashboard/teacher/profile` | `src/app/dashboard/teacher/profile/page.tsx` | Avatar, Bio, Specialties, Info grid, Certificates, Teaching statistics |
| `/dashboard/teacher/students` | `src/app/dashboard/teacher/students/page.tsx` | Student table with progress bars, attendance, status |
| `/dashboard/teacher/calendar` | `src/app/dashboard/teacher/calendar/page.tsx` | Monthly calendar grid, upcoming classes list |
| `/dashboard/teacher/homework` | `src/app/dashboard/teacher/homework/page.tsx` | Homework review: student list + submission grading panel |
| `/dashboard/teacher/live/[id]` | `src/app/dashboard/teacher/live/[id]/page.tsx` | Live class room UI (placeholder) |

### 🎓 Student Dashboard (8)

| Route | File | Description |
|-------|------|-------------|
| `/dashboard/student` | `src/app/dashboard/student/page.tsx` | Premium plan card, Remaining classes, Attendance, Progress, Upcoming lessons, Teacher card, Payment history, Reviews, **My Programs section with progress bars**, Quick actions |
| `/dashboard/student/courses` | `src/app/dashboard/student/courses/page.tsx` | **My Programs** — enrolled program cards with progress and CTA |
| `/dashboard/student/courses/[id]` | `.../courses/[id]/page.tsx` | **Program Detail** — level tree with lesson list, locked/unlocked states, back/continue buttons |
| `/dashboard/student/lesson/[id]` | `.../lesson/[id]/page.tsx` | **Lesson View** — video player, PDF/vocab/audio tabs, mark complete, prev/next navigation |
| `/dashboard/student/quiz/[id]` | `.../quiz/[id]/page.tsx` | **Quiz** — question-by-question flow, animated transitions, instant scoring, retry |
| `/dashboard/student/homework/[id]` | `.../homework/[id]/page.tsx` | **Homework Submit** — file upload + audio recording, submit for review |
| `/dashboard/student/certificates` | `.../certificates/page.tsx` | **Certificates** — earned certificates with download/share |
| `/dashboard/student/payments` | `.../payments/page.tsx` | Current plan, total paid, invoice table with status |
| `/dashboard/student/teacher` | `.../teacher/page.tsx` | Teacher profile, info grid, student reviews |
| `/dashboard/student/profile` | `.../profile/page.tsx` | Avatar upload, personal info form, notification toggle, delete account |

---

## 🧩 Components

### UI Components (`src/components/ui/`)
Button, Card (Header/Title/Description/Content/Footer), Input, Label, Badge, Avatar (Image/Fallback), Separator, Switch, Checkbox, Select, Tabs, Accordion, Dialog, DropdownMenu, Skeleton, Tooltip

### Layout Components (`src/components/layout/`)
- **Navbar** - Sticky, glassmorphism, desktop nav + mobile hamburger menu with framer-motion animations
- **Footer** - 5-column grid (brand + academy + courses + support + social), newsletter
- **DashboardSidebar** - Collapsible, role-based links (admin/teacher/student), active state highlighting
- **DashboardTopNav** - Page title, search, notifications (with badge), messages, user dropdown

### Dashboard Components (`src/components/dashboard/`)
- **StatCard** - Animated, icon + value + change %, 6 color variants
- **RevenueChart** - Bar chart with target overlay
- **LineChart** - SVG line chart for student growth
- **DataTable** - Reusable table with columns config and row click

### Home Components (`src/components/home/`)
- **HeroSection** - Headline, CTA buttons, feature image with overlay card, stats bar
- **WhyChooseUs** - 6 feature cards with colored icons
- **FeaturedCourses** - 4 course cards with image, badges, rating, CTA
- **TeachersSection** - 4 teacher profile cards with specialties, languages, CTA
- **PricingPreview** - 3 plan cards with highlighted middle, feature lists
- **Testimonials** - 4 testimonial cards with avatar, rating stars, quote
- **FAQSection** - Accordion with 8 questions

---

## 📦 Mock Data (`src/lib/data.ts`)

Contains all realistic dummy data:
- Site config, stats, 6 why-choose-us cards
- 6 programs (Quran, Tajweed, Arabic, Fiqh, Tafsir, Islamic Studies), each with 3-4 levels and 3-4 lessons per level
- Lessons with video URLs, PDFs, vocabulary lists, audio tracks
- 4 quizzes with 5 questions each (multiple choice), lesson association
- 2 homework assignments with file upload
- 4 teachers, 3 pricing plans, 4 testimonials, 8 FAQs
- Admin revenue/student/schedule data
- 8 teachers, 8 students, 8 subscriptions, 10 payments
- Teacher stats (hours, classes, achievements)
- Student dashboard data (profile, upcoming lessons, payments, reviews)
- 3 certificate records

---

## 🔧 Configuration

### `next.config.ts`
- `typescript.ignoreBuildErrors: true` (required on Windows to work around Next.js 16 WASM type-checker bug)

### `tsconfig.json`
- Path alias: `@/*` → `./src/*`
- Strict mode enabled
- JSX: `react-jsx`

### `postcss.config.mjs`
- Uses `@tailwindcss/postcss` (Tailwind v4)

---

## 🏃‍♂️ Running the Project

```bash
npm install
npm run dev --webpack        # starts on http://localhost:3000
npm run build --webpack      # production build
npm run start                # production server
```

Note: Requires `--webpack` flag because Turbopack doesn't support win32/x64.

---

## 🔗 Repository

**GitHub:** https://github.com/Mhmdelthokaby/Al-Noor.git
**Branch:** `main`
