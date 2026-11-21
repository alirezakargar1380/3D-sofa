# Minimal Next.js Template — Modernized

This repository is a source-level modernization of an older Minimal template release.

## Target stack

- Next.js 16
- React 19
- TypeScript 7
- Material UI 9
- MUI X 9
- Node.js 24 LTS recommended (`.nvmrc`)

## Setup

```bash
nvm use
cp .env.example .env.local
npm install
npm run format
npm run validate
npm run dev
```

The development server runs on `http://localhost:8082`.

## Validation commands

```bash
npm run audit:static
npm run typecheck
npm run lint
npm run format:check
npm run build
```

`npm run validate` runs the static audit, semantic type check, ESLint, and production build. Formatting is intentionally a separate command so migration output can be normalized once before enforcing `npm run format:check` in CI.

## Important asset note

The uploaded project archive did not contain a `public/` directory. Restore the original licensed Minimal assets there before visual QA. Routes currently reference `/assets`, `/favicon`, and `/manifest.json`.

See [UPGRADE.md](./UPGRADE.md) for migration details and the remaining verification checklist.
