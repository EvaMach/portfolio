# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack
npm run build     # Production build (auto-runs next-sitemap postbuild)
npm run start     # Run production server
npm run lint      # ESLint checks
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** portfolio site with React 19, TypeScript, Tailwind CSS, and Shadcn/ui.

### Key structure

- `src/app/` — App Router pages. `page.tsx` is the single-page home (Hero → About → Work → Contact). `[id]/page.tsx` is the dynamic project detail route.
- `src/components/` — Feature and composite components. `ui/` contains both Shadcn/ui primitives (don't edit — regenerate via `npx shadcn@latest add`) and small custom presentational primitives.
- `src/lib/projects.ts` — All project data as structured TypeScript objects.
- `src/lib/content.ts` — All static UI text (headings, labels, descriptions, nav links, social links). Components receive text via props from this file.
- `src/lib/email.ts` — Resend API integration for the contact form.
- `src/hooks/` — Custom hooks. `useInView.ts` drives entrance animations. `useScrolled.ts` detects scroll position. `useScrollRestoration.ts` saves/restores scroll position.
- `src/app/globals.css` — Design tokens (CSS variables), entrance animation classes (`animate-fade-up`, `animate-fade-in`, `animate-scale-in`), and stagger utilities.

### Design system

- **Colors** defined as CSS variables in `globals.css` with both dark (`:root`) and light (`.light`) variants. All variables are mapped as Tailwind tokens in `tailwind.config.ts` (e.g. `text-text-primary`, `bg-bg-secondary`, `border-border-subtle`, `text-accent-primary`).
- **Accent colors**: primary = yellow, secondary = green, tertiary = pink.
- **Theme system**: `ThemeProvider` uses Context API + localStorage + system preference detection. An inline script in the root layout prevents theme flash.
- **Animations**: CSS entrance animations triggered by `useInView` hook. Hero section animations are CSS-only (no JS). All animated elements respect `prefers-reduced-motion`.

### Styling conventions

- **Always use Tailwind CSS** for styling. Use the `style` prop only when the value cannot be expressed in Tailwind — e.g. `radial-gradient()` backgrounds, `filter: blur()`, `color-mix()` values, or values derived from JS at runtime.
- Use Tailwind color tokens instead of inline CSS variables: `text-text-primary` not `style={{ color: "var(--text-primary)" }}`, `bg-bg-secondary` not `style={{ background: "var(--bg-secondary)" }}`, etc.
- Use Tailwind `hover:` variants instead of `onMouseEnter`/`onMouseLeave` JS handlers for hover effects.
- Path alias `@/*` maps to `src/*`.
- Custom breakpoint `xs: 480px` (smaller than Tailwind default `sm`).

### Component conventions

- **Pages** (`src/app/**/page.tsx`, `layout.tsx`) are function components: `export default function PageName`.
- **All other components** are arrow functions: `const ComponentName = () => {}`.
- **Smart components** own state, effects, and context (e.g. `Header`, `ContactForm`, `ThemeProvider`). Keep logic out of presentational components.
- **Presentational components** accept props and return JSX — no state, no side effects. These live in `src/components/ui/` if small/reusable, or `src/components/` if larger/feature-specific.
- Keep components small and single-responsibility (SRP). Split large components into focused sub-components.
- Extract reusable stateful logic into custom hooks in `src/hooks/`.

### Text content

- Static text belongs in `src/lib/content.ts`, not hardcoded in components. Components receive text as props.
- Project data stays in `src/lib/projects.ts`.

### Email

Requires `.env` with `RESEND_API_KEY`, `RESEND_SENDER`, and `RESEND_RECEIVER`. The contact form uses React Hook Form + Zod validation, submitting via a server action that calls Resend.

## Code style

**Comments**: Use sparingly. Comments should explain *why*, never *what* or *how* — clean code and well-named variables are always preferred over comments. Do not add structural JSX comments (e.g. `{/* Logo */}`, `{/* Left column */}`) — the code speaks for itself.
