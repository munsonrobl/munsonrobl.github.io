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

Source career records and the shared narrative are retained in `src/data`. `src/App.vue` selects between four independent compositions in `src/designs`, with responsive typography and layout in `src/styles.css`.

Education is omitted until verified details are available. A résumé download appears only when a real document URL is supplied in `src/data/links.ts`. The private venture remains anonymous; its 2022 launch, co-founding, profitability, healthcare audience, and operating scope are supplied by the owner.

The approved editorial folio is preserved on `codex/editorial-folio` at commit `58075b0`. This round lives on `codex/design-round-5` and provides four separately composed designs, selected using the comparison bar or the URL:

- `?design=signal`: cobalt and white, Avenir-led typography, a sticky identity column, and an expandable career record.
- `?design=nocturne`: aubergine and peach, monospaced text with light display type, a full-width work index, and a contrasting business spread.
- `?design=monument`: ivory and vermilion, condensed display lettering, and a date-led chronology.
- `?design=folio`: the previously approved editorial folio, restored from its preserved branch.

All designs retain the same substantive career story, native keyboard-accessible disclosures for all seven Infotech roles and technical delivery detail, the private education business, earlier employers, and contact links. No animation is required. Layouts adapt for mobile, and the active design can be linked directly.

## Project scope

This repository contains the Vue/Vite career site. The previous Jekyll layouts, sample posts, Ruby dependencies, stylesheets, and unused images have been removed. The original MIT license is retained.

`npm run build` creates the production site in `dist/`. Generated output and local dependencies are not committed. This change does not configure or trigger a deployment; any future hosting setup must serve the Vite build output.
