# Robert Munson — Career Site

A local-first interactive professional resume built with Vue 3, Vite, TypeScript, and authored CSS. Node.js 22 is recommended (see `.nvmrc`).

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

Career content lives in `src/data`. The production page is composed in `src/components/CareerSite.vue`, with global rules in `src/styles.css` and the responsive page layout in `src/site.css`.

Education is omitted until verified details are available. A résumé download appears only when a real document URL is supplied in `src/data/links.ts`. The private venture remains anonymous; its 2022 launch, co-founding, profitability, healthcare audience, and operating scope are supplied by the owner.

The site includes keyboard-accessible disclosures for all seven Infotech roles and technical delivery details, the private education business, earlier employers, and contact links. The layout adapts for mobile and print.

## Project scope

This repository contains the Vue/Vite career site. The previous Jekyll layouts, sample posts, Ruby dependencies, stylesheets, and unused images have been removed. The original MIT license is retained.

`npm run build` creates the production site in `dist/`. GitHub Actions deploys that output to GitHub Pages when `main` is updated. Generated output and local dependencies are not committed.
