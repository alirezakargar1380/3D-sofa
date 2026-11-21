# Upgrade report

## Scope

The project was migrated from the older Next.js 14 / React 18 / Material UI 5 generation to the current major-generation architecture declared in `package.json`.

## Package and platform changes

- Next.js 16 and React 19, including asynchronous dynamic route parameters and App Router compatibility work.
- Material UI 9, MUI Lab 9 beta, and MUI X 9.
- TypeScript 7 with strict checking and modern bundler module resolution.
- ESLint flat configuration and Prettier 3 configuration.
- Current major versions for FullCalendar, Firebase, AWS Amplify, React Hook Form, Mapbox, React Markdown, React Dropzone, SWR, Framer Motion, and the remaining application dependencies.
- Missing direct dependencies used by the source were added explicitly.
- Stale npm and Yarn lockfiles were removed. Generate a fresh `package-lock.json` with `npm install`.

## Source migrations

### Next.js and React

- Converted App Router dynamic page props to the Promise-based Next.js 16 form.
- Added Suspense boundaries around views that consume `useSearchParams`.
- Made the shared Next.js Link adapter an explicit Client Component.
- Replaced legacy `ReactDOM.render` examples with `createRoot` and updated React 19 ref initialization patterns.
- Added the official MUI App Router cache provider and removed the custom Emotion SSR cache implementation.
- Moved viewport and theme-color data to the dedicated Next.js viewport export.

### Material UI and MUI X

- Migrated Grid2 usages to the current Grid API.
- Moved removed system props into `sx`.
- Replaced MUI Lab `LoadingButton` with Material `Button` loading support.
- Migrated deprecated component props to slots and `slotProps`.
- Replaced Autocomplete `renderTags` with `renderValue` and `getItemProps`, updated option/value key handling, and migrated `renderInput` parameters to the MUI 9 `slotProps` shape.
- Migrated Data Grid row-selection models, toolbar configuration, value getters, and theme class selectors.
- Updated date-picker typings and theme augmentation.
- Removed obsolete Tree View and LoadingButton theme overrides, migrated removed Typography paragraph overrides, and updated nested Select menu paper props.

### Replaced legacy wrappers

- Replaced `react-lazy-load-image-component` with an internal native lazy-loading image component.
- Replaced `react-organizational-chart` with an internal CSS-based implementation.
- Replaced `react-quill` with `react-quill-new` for React 19 compatibility.
- Updated React Map GL imports to the Mapbox entry point.
- Migrated AWS Amplify authentication calls to the modular v6 API.

## Validation performed in this environment

- Parsed every TypeScript and TSX source file: no syntax errors.
- Resolved all local source imports: no unresolved imports found.
- Audited external imports against `package.json`: no undeclared runtime packages found.
- Searched for removed high-risk APIs and package imports: no blocking matches found.
- Added `npm run audit:static` so these source-level checks are reproducible.

## Validation not performed here

The package registry was unreachable in the execution environment, so dependencies could not be installed. Consequently, the following could not be truthfully verified here:

- TypeScript semantic type checking against the installed package declarations.
- ESLint and Prettier execution. The source parses successfully, but run `npm run format` once after installation before enforcing `npm run format:check` in CI.
- Next.js production build.
- Browser runtime and visual-regression testing.

Run the following on a machine with registry access:

```bash
nvm use
npm install
npm run format
npm run validate
```

Commit the generated `package-lock.json` after a successful install.

## Required project-specific restoration

The uploaded archive did not include `public/`, although the application references many `/assets/*` images, favicon files, and `/manifest.json`. Restore the original licensed Minimal assets before judging visual output or performing end-to-end tests.

The original `.env` file is intentionally excluded from the deliverable. Copy `.env.example` to `.env.local` and add the project’s real provider credentials locally.

## Runtime QA checklist

After `npm run validate` succeeds, verify these areas in a browser:

1. Authentication flows for the provider actually used by the project.
2. Data grids, date pickers, calendars, charts, and the rich-text editor.
3. Mapbox pages with a valid token.
4. RTL mode and all theme presets.
5. File upload, lightbox, carousel, and organizational-chart examples.
6. Dynamic invoice, product, job, order, post, tour, and user routes.
