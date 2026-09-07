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

Resume content is organized in `src/data`, shared types live in `src/types`, and presentation components live in `src/components`.

Education is omitted until verified details are available. Contact includes an unavailable résumé placeholder until a real document is supplied. The private venture remains anonymous; its 2022 launch and operating scope are supplied by the owner. No unsupported founding, profitability, or end-date claims are made.

Selected-work tabs change only their panel. The introduction and experience history remain stable. Native disclosures preserve the full Infotech promotion and technical history.

## Project scope

This repository contains the Vue/Vite career site. The previous Jekyll layouts, sample posts, Ruby dependencies, stylesheets, and unused images have been removed. The original MIT license is retained.

`npm run build` creates the production site in `dist/`. Generated output and local dependencies are not committed. This change does not configure or trigger a deployment; any future hosting setup must serve the Vite build output.
