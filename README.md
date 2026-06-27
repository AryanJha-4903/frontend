# Geneial Creation Portfolio

A premium packaging design portfolio built with Vite, TypeScript, React, TanStack Router, and Tailwind CSS.

---

## Overview

This repository contains a single-page portfolio website for Geneial Creation. The app is built with modern frontend tooling to enable fast development, strong typing, and a high-quality UI component system.

- Core tech: Vite, TypeScript, React
- Routing: `@tanstack/react-router`
- Styling: Tailwind CSS + custom CSS variables
- UI primitives: Radix-based components under `src/components/ui`

---

## Quick Start

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Lint and format:

```bash
npm run lint
npm run format
```

---

## Project Structure (high level)

- `index.html` — Application HTML entry that mounts `#app`.
- `src/main.ts` — App bootstrap and client entry.
- `src/router.tsx` — TanStack Router instance and route definitions.
- `src/routes/__root.tsx` — Root layout, metadata, and providers.
- `src/routes/index.tsx` — Main portfolio page and sections (Hero, About, Services, Work, Contact, etc.).
- `src/components/ui/` — Reusable UI primitives and wrappers (Radix + custom styling).
- `src/styles.css` — Global styles, design tokens, and custom utilities.
- `src/routeTree.gen.ts` — Auto-generated route tree (do not edit).
- `src/server.ts` — Server-side entry used for SSR and Cloudflare Workers.
- `vite.config.ts` — Vite configuration and SSR wiring.
- `wrangler.jsonc` — Cloudflare Workers deployment configuration.
- `public/` — Static assets served by Vite.
- `src/assets/` — Image and media assets used across the site.

---

## Portfolio Sections (what's in `src/routes/index.tsx`)

- Navigation (`Nav`): sticky header with desktop and mobile menus and CTAs.
- Hero (`Hero`): headline, short intro, and primary CTAs with hero artwork.
- About (`About`): brand story, experience, and highlight stats.
- Services (`Services`): service cards (packaging, label, identity, mockups, print).
- Portfolio (`Portfolio`): responsive gallery with filters and hover captions.
- Why (`Why`): reasons to choose the designer and process highlights.
- Testimonials (`Testimonials`): client quotes and endorsements.
- Contact (`Contact`): contact details and inquiry form.
- Footer (`Footer`): site credits and legal/copyright text.

---

## UI Component System

The `src/components/ui` directory contains reusable UI building blocks used throughout the app. These are mostly thin wrappers around Radix primitives (accessible UI) and styled to match the project's design tokens.

Common components:

- `card.tsx`, `button.tsx`, `dialog.tsx`, `tooltip.tsx`, `sidebar.tsx`, `dropdown-menu.tsx`, `input.tsx`, `form.tsx`

Use these components to keep styling and behaviour consistent across pages.

---

## Styling and Design Tokens

Global styles and theme tokens live in `src/styles.css`. The project uses CSS variables for core colors and custom utility classes for recurring visual treatments (gradients, shadows, premium accents).

Key variables include `--gold`, `--primary`, `--card`, and `--background`.

---

## Build & Deployment

- `npm run build` — produce a production bundle via Vite.
- `wrangler.jsonc` — Cloudflare Workers configuration; `src/server.ts` is the SSR entry for the worker.
- `vite.config.ts` ensures SSR entry points and any framework-specific configuration are applied.

To preview the production build locally:

```bash
npm run preview
```

---

## Notes & Best Practices

- Routes are managed with TanStack Router; `src/routeTree.gen.ts` is auto-generated — do not edit it directly.
- The component primitives in `src/components/ui` are deliberately lightweight wrappers to centralize styles and accessibility.
- Keep images in `src/assets/` and reference them from components or pages.

---

## Contributing

If you make changes, please:

1. Fork and create a feature branch.
2. Install dependencies and run the dev server.
3. Follow the existing component patterns in `src/components/ui`.
4. Open a pull request describing your changes.

---

## License

Add your project license here (MIT, Apache-2.0, etc.) or keep as private.

---

If you'd like, I can also:

- add badges (build, license),
- generate a smaller README for the `src/` folder, or
- open a PR with these changes.