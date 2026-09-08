# Robert Munson — Career Site

A local-first interactive professional resume built with Vue 3, Vite, TypeScript, and Tailwind CSS. Node.js 22 is recommended (see `.nvmrc`).

## Local development

```bash
npm install
npm run dev
```

The terminal prints the local URL, usually `http://localhost:5173`.

## Checks

```bash
npm run typecheck
npm run build
```

Source career records are retained in `src/data`; the editorial composition and condensed narrative live in `src/App.vue`, with responsive typography and layout in `src/styles.css`.

Education is omitted until verified details are available. A résumé download appears only when a real document URL is supplied in `src/data/links.ts`. The private venture remains anonymous; its 2022 launch, co-founding, profitability, healthcare audience, and operating scope are supplied by the owner.

The editorial folio replaces the previous design selector, perspective tabs, repeated section headings, and capability grids. Leadership, technical work, and business experience appear in one narrative, with the private venture alongside Infotech on desktop and in reading order on mobile. Native keyboard-accessible disclosures preserve all seven Infotech roles and technical delivery detail. Email and LinkedIn links remain available.

## Project scope

This repository contains the Vue/Vite career site. The previous Jekyll layouts, sample posts, Ruby dependencies, stylesheets, and unused images have been removed. The original MIT license is retained.

`npm run build` creates the production site in `dist/`. Generated output and local dependencies are not committed. This change does not configure or trigger a deployment; any future hosting setup must serve the Vite build output.
