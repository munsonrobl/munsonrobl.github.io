# Robert Munson — Interactive Resume

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

The downloadable resume URL in `src/data/links.ts` is intentionally blank until a curated resume is available. The education section is similarly reserved until exact degree and institution details are confirmed.
