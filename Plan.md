# Portfolio Redesign — Claude Code Agent Implementation Plan

**Project:** eva-machova.cz portfolio redesign
**Stack:** Next.js (App Router), Tailwind CSS v4, TypeScript
**Goal:** Transform the current portfolio into a modern, polished, dark-themed developer portfolio with light mode, smooth animations, and properly designed work detail pages.

---

## 0 · Pre-flight

Before writing any code, the agent must orient itself in the codebase.

```
Steps:
1. Run `find . -maxdepth 3 -type f | head -80` and `cat package.json` to map the project structure, framework version, and existing dependencies.
2. Identify the routing model (App Router vs Pages Router) and the CSS approach already in use.
3. Read the existing Tailwind config, global CSS, and any theme/token files.
4. Locate all page routes (homepage, work detail pages like /Beey, /BeeyLive, etc.) and shared layout files.
5. Catalogue all static assets: logo, avatar image (me.webp), project screenshots, and any icons.
6. Run `npm run build` (or `next build`) to confirm the project compiles cleanly before making changes.
```

**Commit after pre-flight:** _none — read-only phase_

---

## 1 · Design Tokens & Theme System (foundation — do this first)

### 1.1 Color palette

Derive from the current site's dark scheme and the reference images. Define as CSS custom properties in `globals.css` and expose through Tailwind.

```
Dark mode (default):
  --bg-primary:        #0A0A0F        (near-black base — ref: image 1 & 2)
  --bg-secondary:      #111118        (card / elevated surfaces)
  --bg-tertiary:       #1A1A24        (subtle card hover / inset panels)
  --text-primary:      #E8E8ED        (main body text — high contrast)
  --text-secondary:    #9595A8        (muted / caption text)
  --accent-primary:    #A78BFA        (purple — carried from existing brand)
  --accent-secondary:  #6EE7B7        (mint/green — complementary accent, ref: image 2 lime-green CTAs)
  --accent-tertiary:   #F472B6        (pink — for decorative shapes, ref: image 1 geometric shapes)
  --border-subtle:     #1F1F2E        (card borders, dividers)
  --glow-purple:       rgba(167,139,250,0.15)   (for ambient glow spots)
  --glow-green:        rgba(110,231,183,0.08)
  --glow-pink:         rgba(244,114,182,0.10)

Light mode:
  --bg-primary:        #F8F8FC
  --bg-secondary:      #FFFFFF
  --bg-tertiary:       #F0F0F6
  --text-primary:      #1A1A2E
  --text-secondary:    #6B6B80
  --accent-primary:    #7C3AED        (slightly deeper purple for light bg contrast)
  --accent-secondary:  #059669        (deeper green)
  --accent-tertiary:   #DB2777
  --border-subtle:     #E2E2EC
  --glow-purple:       rgba(124,58,237,0.06)
  --glow-green:        rgba(5,150,105,0.04)
  --glow-pink:         rgba(219,39,119,0.05)
```

### 1.2 Typography

Replace current fonts with a modern pairing loaded via `next/font/google`:

```
Display / Headings:  "Plus Jakarta Sans" (weight 700, 800)
   — geometric, modern, excellent for tech portfolios
   — alternatives if unavailable: "Satoshi", "General Sans"

Body:                "Plus Jakarta Sans" (weight 400, 500)
   — single-family pairing for cohesion

Mono (code tags):    "JetBrains Mono" (weight 400)
```

Set up a typographic scale using Tailwind's `fontSize` extend:

```
hero:      clamp(2.5rem, 5vw, 4rem)      — hero headline
section:   clamp(1.75rem, 3vw, 2.5rem)   — section headings
card:      1.25rem                        — card titles
body:      1rem / 1.6 line-height         — paragraph text
caption:   0.875rem                       — tags, dates, metadata
```

### 1.3 Light/dark mode toggle

Implementation approach:

1. Add a `ThemeProvider` component (client component) that reads `localStorage` key `theme` on mount.
2. Apply `class="dark"` or `class="light"` on `<html>`.
3. Use Tailwind's `darkMode: 'class'` strategy.
4. All color tokens defined as CSS vars that swap based on `.dark` / `.light` class.
5. Toggle component: a pill-shaped switch with sun/moon icons, positioned in the top navigation bar.
6. Include a `<script>` in `<head>` (inline, blocking) that reads `localStorage` before paint to prevent flash of wrong theme (FOUC).

**Commit:** `feat: add design tokens, typography, and theme system`

---

## 2 · Background & Ambient Visual Effects

Inspired by reference images 1 and 3 (colored glow spots, subtle gradients).

### 2.1 Ambient glow blobs

Create a `BackgroundEffects` component rendered once in the root layout, positioned `fixed` with `pointer-events-none` and `z-[-1]`.

```
Technique:
- 3–4 large radial-gradient circles (300–500px diameter) placed at strategic positions
- Colors: purple, green, pink glows at very low opacity (0.08–0.15)
- Apply a subtle CSS animation: slow drift / float (translateX/Y oscillation over 15–25s, infinite)
- Add a `backdrop-filter: blur(100px)` or use `filter: blur(80px)` directly on the blobs
- Light mode: reduce blob opacity by ~50%
```

### 2.2 Subtle noise texture overlay

Add a full-screen noise texture SVG filter or a tiny repeating PNG at ~3% opacity to give the background depth (ref: image 3 has this).

### 2.3 Optional: grid pattern

A very faint dot-grid or line-grid pattern (opacity ~0.03) on the background, visible mainly in the hero area. Disable in light mode or reduce further.

**Commit:** `feat: add ambient background effects and noise texture`

---

## 3 · Navigation Redesign

### Current state

Simple horizontal nav with logo, links (About, Work, Contact), no theme toggle.

### Target design

```
Layout:
  [Logo/Avatar]  ·····  [About]  [Work]  [Contact]  [Theme Toggle]

Style:
- Glassmorphic bar: `backdrop-blur-xl bg-bg-secondary/60 border border-border-subtle`
- Sticky top with `position: sticky; top: 0; z-index: 50`
- Compact padding, rounded-full or rounded-2xl pill shape (floated, not full-width)
- On scroll: slight shadow/glow appears beneath the nav
- Mobile: hamburger → slide-in drawer from right with same glass effect
- Active section indicator: small dot or underline that follows scroll position (use IntersectionObserver)
- Smooth scroll to sections on click
```

### Animations

- Nav items: subtle hover scale (1.02) + color shift to accent
- Theme toggle: icon rotation transition on switch (sun rotates into moon)
- Mobile menu: slide + fade-in with staggered link reveals

**Commit:** `feat: redesign navigation with glassmorphic style and mobile drawer`

---

## 4 · Hero Section Redesign

### Current state

Left-aligned text ("Hi there, I'm Eva Machová") with avatar on right. Clean but plain.

### Target design

```
Layout (desktop):
  Left column (60%):
    - Small label badge: "Frontend Developer" (pill-shaped, border-accent-primary, text-accent-primary)
    - Main headline: "Hi, I'm Eva" (hero font size, text-primary)
      "I build digital products." (same size, accent gradient text on "digital products")
    - Subtitle paragraph: 2–3 lines, text-secondary, max-w-lg
    - CTA row: [View my work ↓] primary button + [Get in touch] ghost button

  Right column (40%):
    - Avatar image with decorative elements around it:
      - Soft purple glow behind the image
      - 2–3 floating geometric shapes (circle, triangle, ring) — CSS-only, slowly rotating/floating
        (ref: image 1 has pink heart shape, circles, rings floating around)
      - Optional: thin orbital ring path around the avatar

Layout (mobile):
  - Stack vertically: avatar on top (smaller), text below
  - Geometric shapes reduced or hidden on mobile
```

### Animations (on page load)

```
Staggered entrance sequence:
  1. Label badge fades in + slides up (delay: 0ms)
  2. Headline lines fade in + slide up (delay: 150ms, 300ms)
  3. Subtitle fades in (delay: 450ms)
  4. CTA buttons fade in + slide up (delay: 600ms)
  5. Avatar scales from 0.9 → 1 + fades in (delay: 300ms)
  6. Geometric shapes drift in from edges (delay: 700ms+)

Use: CSS @keyframes with animation-delay, or Framer Motion's stagger if installed.
Prefer CSS-only to minimize bundle impact.
```

**Commit:** `feat: redesign hero section with floating decorative elements and staggered entrance`

---

## 5 · About Section Redesign

### Current state

Two paragraphs of text, no visual structure.

### Target design

```
Layout:
  Section label: "ABOUT" (caption size, accent-primary, uppercase tracking-widest, with decorative line)

  Two-column layout (desktop):
    Left (55%): Bio text, slightly larger than body (1.125rem), with key phrases subtly highlighted
                (e.g., "clean, maintainable code" gets a soft accent background-highlight)

    Right (45%): A "skills snapshot" or "what I work with" mini-grid
      - Tech icon chips in a flowing layout: React, TypeScript, Next.js, Python, Tailwind, etc.
      - Each chip: small icon + label, bg-bg-tertiary, rounded-lg, border-border-subtle
      - Hover: chip lifts slightly (translateY -2px) + border becomes accent-primary

  Bottom (full width, optional):
    Horizontal scrolling "experience timeline" showing roles:
    QA → UX/UI Design → Frontend Dev → Team Lead → Fullstack
    Each node: small circle + label + year range, connected by a thin line
```

### Animations

- Section fades in on scroll (IntersectionObserver, once)
- Skill chips animate in with staggered delay when section enters viewport
- Timeline nodes sequentially light up left-to-right on scroll

**Commit:** `feat: redesign about section with skill chips and experience timeline`

---

## 6 · Work Section — Project Cards Redesign

### Current state

Vertical stack of cards with text on left, screenshot on right. Basic layout, all cards identical.

### Target design

Inspired by reference image 1 (grid of project cards with colored tags) and image 2 (numbered list approach).

```
Section header:
  "WORK" label (same style as About)
  "Selected Projects" heading
  Subtitle: "Professional projects from the last few years"

Card design — alternating layout:
  Odd cards: image LEFT, text RIGHT
  Even cards: image RIGHT, text LEFT
  (Creates visual rhythm, avoids monotony)

Individual card structure:
  ┌──────────────────────────────────────────────────┐
  │  ┌─────────────┐   Project Name          /01     │
  │  │             │   Year · Company                 │
  │  │  Screenshot │   Role badge(s)                  │
  │  │             │                                  │
  │  │             │   Short description (2–3 lines)  │
  │  └─────────────┘                                  │
  │                    [Tech] [Tags] [Row]             │
  │                    [Read more →]                   │
  └──────────────────────────────────────────────────┘

Card styling:
  - bg-bg-secondary with border-border-subtle
  - Rounded-2xl (16px radius)
  - On hover: slight lift (translateY -4px) + shadow grows + border brightens to accent-primary/30
  - Screenshot: rounded-xl, subtle shadow, slight scale on card hover (1.02)
  - Project number (/01, /02...) in accent-secondary, large semi-transparent text (ref: image 2 "/22" style)
  - Tech tags: small pills, bg-bg-tertiary, monospace font
  - "Read more →" link with arrow that slides right on hover

Mobile:
  - Cards stack vertically, image on top, text below
  - Full-width cards with reduced padding
```

### Animations

- Cards enter viewport with fade-up + slight scale (staggered by 100ms each)
- Screenshot has a subtle parallax-like shift on scroll (optional, CSS `transform` based)
- Hover transitions: 300ms ease-out

**Commit:** `feat: redesign project cards with alternating layout and hover effects`

---

## 7 · Work Detail Pages — Full Redesign

### Current state

"Very basic" — likely just text content with minimal styling.

### Target design

Each detail page (`/Beey`, `/BeeyLive`, `/BeeyTrsx`, `/TimeShift`, `/MyM`) gets a structured layout:

```
PAGE STRUCTURE:

1. HERO BANNER
   - Full-width section with gradient background (project-specific accent color)
   - Project title (large, display font)
   - Subtitle / one-liner
   - Metadata row: Year · Company · Role(s)
   - External link button (if applicable): "Visit live site ↗"
   - Tech stack pills row
   - Large screenshot below, slightly overlapping the hero (negative margin, creates depth)
   - "Back to projects ←" link at top-left

2. OVERVIEW SECTION
   - "Overview" heading
   - 2–3 paragraph description of the project
   - Sidebar (desktop) or inline block:
     - Role: Frontend Developer
     - Team size: 4
     - Duration: 2023–2025
     - Company: Newton Technologies

3. KEY FEATURES / HIGHLIGHTS
   - "Highlights" heading
   - Grid of 3–4 feature cards (icon + title + short description)
   - Example for Beey: "Rich Text Editor", "Subtitle Mode", "Plugin System", "AI Transcription"

4. MY CONTRIBUTION
   - "My Role" heading
   - Bullet points or short paragraphs describing what the developer specifically did
   - If applicable: before/after comparison, challenges faced, lessons learned

5. TECH STACK DETAIL
   - "Built With" heading
   - Larger tech pills or a grid showing each technology with brief context
     e.g., "React — UI components and state management"
          "Cypress — E2E testing suite"

6. GALLERY (if multiple screenshots available)
   - Horizontal scrollable row or 2-column masonry grid of screenshots
   - Lightbox on click (optional)

7. NAVIGATION FOOTER
   - "← Previous Project" | "Next Project →" links
   - Styled as large clickable areas, full-width, with project names

STYLING:
  - Same dark theme, same tokens
  - Generous whitespace between sections (py-20 to py-32)
  - Each section uses the same label + heading pattern as homepage
  - Smooth scroll-triggered fade-in animations per section
```

### Data architecture

Create a centralized project data file (`data/projects.ts`) with typed project objects:

```typescript
type Project = {
  slug: string; // URL path
  title: string;
  subtitle: string;
  year: string;
  company: string;
  roles: string[];
  description: string; // overview paragraph(s)
  highlights: { icon: string; title: string; description: string }[];
  contribution: string[]; // bullet points
  techStack: { name: string; context?: string }[];
  screenshot: string; // main image path
  gallery?: string[]; // additional screenshots
  liveUrl?: string;
  accentColor: string; // per-project accent for the hero gradient
};
```

This allows detail pages to be generated from a single dynamic route `[slug]/page.tsx` using `generateStaticParams`.

**Commit:** `feat: create work detail page template with structured sections`
**Commit:** `feat: populate project data and wire up detail pages`

---

## 8 · Contact Section Redesign

### Current state

Simple form with Name, Email, Message fields and Submit button.

### Target design

```
Layout:
  Left column (50%):
    - "GET IN TOUCH" label
    - "Let's work together" heading (display size)
    - Brief paragraph: "Have a project in mind or just want to say hi?"
    - Social links row: GitHub, LinkedIn, Email icons
      (circular icon buttons, bg-bg-tertiary, hover → accent-primary bg)

  Right column (50%):
    - Contact form:
      - Inputs: modern floating-label style or minimal underline style
      - bg-transparent with border-bottom only (ref: minimalist tech aesthetic)
      - Focus state: border-accent-primary + subtle glow
      - Submit button: bg-accent-primary, rounded-full, px-8
        Hover: slight scale + glow
    - Below form: "Or email me directly at [email]" fallback text

Mobile:
  - Stack vertically, social links above form
```

### Animations

- Section entrance: fade-up
- Form inputs: border animates width from center outward on focus
- Submit button: subtle pulse on hover

**Commit:** `feat: redesign contact section with modern form and social links`

---

## 9 · Animations Framework

### Approach: CSS-first, minimal JS

Use CSS `@keyframes` and `animation` for all entrance/transition animations. Only use `IntersectionObserver` (vanilla, in a small custom hook `useInView`) to trigger `.animate-in` classes on scroll.

### Core animation utilities to define in Tailwind/CSS:

```css
/* Entrance animations — applied via utility classes */
.animate-fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}
.animate-fade-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

.animate-fade-in {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}
.animate-fade-in.in-view {
  opacity: 1;
}

.animate-scale-in {
  opacity: 0;
  transform: scale(0.95);
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
}
.animate-scale-in.in-view {
  opacity: 1;
  transform: scale(1);
}

/* Stagger delays — apply to children */
.stagger-1 {
  transition-delay: 100ms;
}
.stagger-2 {
  transition-delay: 200ms;
}
.stagger-3 {
  transition-delay: 300ms;
}
.stagger-4 {
  transition-delay: 400ms;
}
.stagger-5 {
  transition-delay: 500ms;
}

/* Continuous ambient animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

@keyframes drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(10px, -10px);
  }
  66% {
    transform: translate(-5px, 5px);
  }
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
}
```

### Custom hook: `useInView`

```typescript
// hooks/useInView.ts
// Thin wrapper around IntersectionObserver
// Returns a ref to attach to the element
// Adds 'in-view' class when element enters viewport (threshold: 0.1)
// Once triggered, disconnects (animate once only)
```

### Smooth scroll

Enable `scroll-behavior: smooth` on `<html>` and use `scrollIntoView({ behavior: 'smooth' })` for nav link clicks.

### Page transitions

If the app already uses App Router, add a simple fade-in on route change using a layout-level CSS transition or a lightweight wrapper. Avoid heavy page transition libraries.

**Commit:** `feat: add animation utilities, useInView hook, and smooth scroll`

---

## 10 · Responsive Polish & Accessibility

### Breakpoints

```
sm:  640px   — mobile landscape
md:  768px   — tablet
lg:  1024px  — desktop
xl:  1280px  — wide desktop
```

### Responsive checklist

- [ ] Hero: text stacks on mobile, avatar shrinks, geometric shapes hidden on sm
- [ ] Nav: collapses to hamburger below md
- [ ] About: single column below md, skill chips wrap naturally
- [ ] Work cards: single column below md, image above text
- [ ] Contact: single column below md
- [ ] Detail pages: single column for all content below md, hero screenshot goes full-width
- [ ] Font sizes use `clamp()` for fluid scaling
- [ ] Spacing reduces on mobile (py-12 vs py-24)
- [ ] Touch targets minimum 44×44px on mobile

### Accessibility checklist

- [ ] All images have descriptive `alt` text
- [ ] Color contrast ratios meet WCAG AA (4.5:1 for body text, 3:1 for large text)
- [ ] Focus indicators visible on all interactive elements
- [ ] `aria-label` on icon-only buttons (theme toggle, social links, hamburger)
- [ ] Reduced motion: respect `prefers-reduced-motion` — disable all transform/opacity animations
- [ ] Skip-to-content link (hidden, visible on focus)
- [ ] Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Form inputs have associated `<label>` elements

**Commit:** `feat: responsive polish and accessibility improvements`

---

## 11 · Performance Checklist

- [ ] All images use `next/image` with appropriate `sizes` and `priority` for above-fold
- [ ] Fonts loaded via `next/font/google` with `display: swap`
- [ ] No layout shift from font loading (ensure fallback font metrics match)
- [ ] Animations use `transform` and `opacity` only (GPU-composited, no layout thrashing)
- [ ] Background glow blobs use `will-change: transform` for GPU promotion
- [ ] Lazy load below-fold images (Next.js default behavior)
- [ ] Run Lighthouse audit — target 90+ on all categories
- [ ] Ensure `generateStaticParams` is used for work detail pages (static generation)

**Commit:** `chore: performance optimization pass`

---

## 12 · Execution Order & Commit Strategy

Execute phases in this order to minimize merge conflicts and ensure each phase builds on the last:

```
Phase A — Foundation (Phases 1, 9)
  ├─ Design tokens, theme system, light/dark toggle
  ├─ Animation utilities and useInView hook
  └─ Commit + verify build

Phase B — Layout Shell (Phases 3, 2)
  ├─ Navigation redesign (glassmorphic, mobile drawer, theme toggle placement)
  ├─ Background ambient effects
  └─ Commit + verify build

Phase C — Homepage Sections (Phases 4, 5, 6, 8)
  ├─ Hero section redesign
  ├─ About section redesign
  ├─ Work cards redesign
  ├─ Contact section redesign
  └─ Commit after each section, verify build between

Phase D — Detail Pages (Phase 7)
  ├─ Create project data file
  ├─ Build detail page template
  ├─ Wire up all 5 project pages
  └─ Commit + verify build

Phase E — Polish (Phases 10, 11)
  ├─ Responsive fixes across all breakpoints
  ├─ Accessibility audit and fixes
  ├─ Performance optimization
  ├─ Final Lighthouse run
  └─ Commit + tag release
```

---

## 13 · Key Constraints & Reminders

1. **Keep the existing avatar and logo** — do not replace `me.webp` or `logo.png`. Only restyle their containers.
2. **Stay close to the color schema** — the dark purple/teal base is the brand. The accents (green, pink) are additive complements.
3. **Don't overload with dependencies** — prefer CSS animations over Framer Motion. If Framer Motion is already installed, use it sparingly. Avoid installing GSAP or other heavy libraries.
4. **Content stays the same** — do not rewrite bio text, project descriptions, or any copy. Only restructure and restyle.
5. **Test both themes** — every component must look polished in both dark and light mode. No afterthought light mode.
6. **Build must pass after every phase** — run `npm run build` before committing. Fix all TypeScript and ESLint errors.
7. **No regressions on mobile** — test at 375px (iPhone SE) and 768px (iPad) widths at minimum.
