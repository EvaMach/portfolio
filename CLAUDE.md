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
- `src/components/` — Feature components. `ui/` contains Shadcn/ui primitives (don't edit these directly — regenerate via `npx shadcn@latest add`).
- `src/lib/projects.ts` — All project data lives here as structured TypeScript objects. Adding/editing projects means editing this file.
- `src/lib/email.ts` — Resend API integration for the contact form.
- `src/hooks/useInView.ts` — Intersection Observer hook that drives entrance animations.
- `src/app/globals.css` — Design tokens (CSS variables), entrance animation classes (`animate-fade-up`, `animate-fade-in`, `animate-scale-in`), and stagger utilities.

### Design system

- **Colors** defined as CSS variables in `globals.css` with both dark (`:root`) and light (`.light`) variants. Custom Tailwind tokens in `tailwind.config.ts` reference these variables.
- **Accent colors**: primary = yellow, secondary = green, tertiary = pink (recently migrated from purple — keep consistent).
- **Theme system**: `ThemeProvider` uses Context API + localStorage + system preference detection. An inline script in the root layout prevents theme flash.
- **Animations**: CSS entrance animations triggered by `useInView` hook. Hero section animations are CSS-only (no JS). All animated elements respect `prefers-reduced-motion`.

### Styling conventions

- Tailwind utility classes for static styles; inline `style` prop for dynamic/computed values.
- Path alias `@/*` maps to `src/*`.
- Custom breakpoint `xs: 480px` (smaller than Tailwind default `sm`).

### Email

Requires `.env` with `RESEND_API_KEY`, `RESEND_SENDER`, and `RESEND_RECEIVER`. The contact form uses React Hook Form + Zod validation, submitting to a Next.js API route that calls Resend.

## Code style

**Comments**: Use sparingly. Comments should explain *why*, never *what* or *how* — clean code and well-named variables are always preferred over comments. Do not add structural JSX comments (e.g. `{/* Logo */}`, `{/* Left column */}`) — the code speaks for itself.
