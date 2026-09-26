# React19App — CQRS Enterprise Dashboard (React 19)

A **React 19** learning application that rebuilds the **business modules** of [Angular19App](https://github.com/Avaneesh3772/Angular19App) — a CQRS enterprise portal (*Global Knowledge. Local Support.*).

**This repo:** [Avaneesh3772/React19App](https://github.com/Avaneesh3772/React19App)

**Excluded:** RxJS Learning and Signals Learning pages (Angular-only).

**Working rule:** Discuss each step → implement → update this README with the same tables (packages, files, commands).

---

## End goal

| Module | Routes |
|--------|--------|
| **Dashboard** | `/dashboard` |
| **Templates** | `/templates` |
| **Admin** | `/admin/close-quarter`, `/admin/le-calculation`, `/admin/rounding-model-calculation` |
| **Role** | `/role/role-definition`, `/role/role-assignment` |
| **Restatement** | `/restatement/initiate-and-define`, `/restatement/track-and-action`, `/restatement/track/:id` |

Reuse Angular CSS class names, service names, and variable names where it helps.

---

## Development plan

| Step | Name | Status |
|------|------|--------|
| **1** | Workspace — Vite + React 19 + TypeScript + ESLint + SCSS | **Complete** |
| **2** | Core libraries (Router, MUI, axios, React Query) | **Complete** |
| **3** | Testing stack (Jest + React Testing Library) | **Complete** |
| **4** | Health check (`dev`, `lint`, `build`, `test`) | **Next** |
| **5** | Folder structure + Header/Footer/Sidebar + empty pages | Pending |
| **6** | Shared foundation (`webApiClient`, theme, mock JSON) | Pending |
| **7** | Dashboard module | Pending |
| **8** | Templates module | Pending |
| **9** | Restatement module | Pending |
| **10** | Role module | Pending |
| **11** | Admin module (forms) | Pending |
| **12** | Auth, guards, interceptor, lazy load | Pending |
| **13** | Full regression + README polish | Pending |

---

## How we document each step

Every completed step in this README uses the same tables:

| Table | What it answers |
|-------|-----------------|
| **Packages added** | What we installed, in one sentence, plus Angular equivalent |
| **Files added or changed** | What appeared in the repo |
| **Commands** | What you ran |
| **Notes** | Decisions (e.g. MUI vs Ant Design) |

Future steps have a short **planned** table so you can see what is coming.

---

## Getting started

```bash
npm install
npm run dev
# or: npm start
```

Open [http://localhost:5173](http://localhost:5173).

| Command | Purpose |
|---------|---------|
| `npm start` / `npm run dev` | Dev server (Vite, port 5173) |
| `npm run lint` | ESLint |
| `npm run build` | Typecheck + production bundle → `dist/` |
| `npm run preview` | Preview the production build |
| `npm test` | Jest unit tests |
| `npm run test:watch` | Re-run tests on file change |

---

## Step 1 — workspace (complete)

**Goal:** Create a Vite + React 19 + TypeScript + ESLint app and switch styles to SCSS.

### Packages added

| Package | In one sentence | Angular equivalent |
|---------|-----------------|-------------------|
| `react` | UI library (19.x) | `@angular/core` |
| `react-dom` | Puts React onto the page | Browser bootstrap |
| `sass` | Compile `.scss` files | Angular component/global SCSS |
| `vite` | Dev server and bundler | Angular CLI (`ng serve` / `ng build`) |
| `typescript` | Static types | TypeScript in Angular |
| `eslint` + plugins | Lint the code | `ng lint` |

### Files added or changed

| File | Purpose |
|------|---------|
| `index.html` | Only HTML page — `<div id="root">` |
| `src/main.tsx` | Starts React (like `main.ts`) |
| `src/App.tsx` | Landing page component |
| `src/styles/global.scss` | App-wide styles (replaced `index.css`) |
| `src/App.scss` | Landing page styles (replaced `App.css`) |
| `package.json` | Scripts and dependencies |
| `vite.config.ts` | Vite settings |
| `tsconfig*.json` | TypeScript (app + Node/Vite) |
| `eslint.config.js` | Lint rules |
| `.vscode/settings.json` | Use workspace TypeScript 6 |

### Commands

```bash
npm create vite@latest . -- --template react-ts --eslint
npm install
npm install sass
npm pkg set scripts.start="vite"
npm run lint
npm run build
npm run dev
```

### Notes

- Vite is closest to Angular SPA. Banks also use Next.js / Webpack; we chose Vite to match [Angular19App](https://github.com/Avaneesh3772/Angular19App).
- Folder structure is still the Vite starter (enterprise folders come in Step 5).

---

## Step 2 — core libraries (complete)

**Goal:** Install routing, MUI, HTTP, and React Query. **Do not** wire them into the UI yet.

### Packages added

| Package | In one sentence | Angular equivalent |
|---------|-----------------|-------------------|
| `react-router-dom` | Pages and URLs (`/dashboard`, `/admin/...`) | `@angular/router` |
| `@mui/material` | Tables, dialogs, tabs, buttons | Angular Material |
| `@emotion/react` + `@emotion/styled` | Required by MUI for styling | Material theming |
| `@mui/icons-material` | Same Material icons as Angular (`account_balance`, etc.) | Material Icons |
| `axios` | HTTP GET/POST/PUT/DELETE | `HttpClient` + `WebApiService` |
| `@tanstack/react-query` | Loading / error / cache / refetch for APIs | Services + RxJS for HTTP data |

### Files added or changed

| File | Purpose |
|------|---------|
| `package.json` / `package-lock.json` | New dependencies only — no new `src` files |

### Commands

```bash
npm install react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material axios @tanstack/react-query
npm run lint
npm run build
```

### Notes

- **UI library decision:** MUI (not Ant Design, shadcn/ui, Chakra, or Mantine) — closest to Angular Material.
- Forms/dates (`react-hook-form`, `zod`, `dayjs`) wait until **Step 11**.

---

## Step 3 — testing (complete)

**Goal:** Jest + React Testing Library and **one** landing-page test.

### Packages added

| Package | In one sentence | Angular equivalent |
|---------|-----------------|-------------------|
| `jest` | The test runner (`npm test`) | Jasmine + Karma |
| `@types/jest` | TypeScript knows `describe`, `it`, `expect` | Jasmine types |
| `jest-environment-jsdom` | Fake browser so we can render HTML in Node | Karma + Chrome |
| `ts-jest` | Lets Jest run `.tsx` files | `ts-jest` / Angular test compiler |
| `@testing-library/react` | `render()`, `screen.getByText()` | `TestBed` + queries |
| `@testing-library/jest-dom` | `toBeInTheDocument()` | DOM matchers |
| `@testing-library/user-event` | Later: click/type like a user | User events in specs |
| `jest-transform-stub` | Ignore `.scss` / images in tests so Jest does not crash | Style mocks |

### Files added or changed

| File | Purpose |
|------|---------|
| `jest.config.ts` | Jest settings |
| `tsconfig.jest.json` | TypeScript for tests only |
| `src/setupTests.ts` | Load jest-dom |
| `src/App.test.tsx` | One test: heading “Get started” |
| `package.json` | Scripts `test` and `test:watch` |

### Commands

```bash
npm install -D jest @types/jest jest-environment-jsdom ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-transform-stub
npm test
```

**Result:** 1 test passed.

---

## Step 4 — health check (next)

**Goal:** You run all scripts yourself. No new packages.

| Command | Expected |
|---------|----------|
| `npm run dev` | Landing page in the browser |
| `npm run lint` | No errors |
| `npm run build` | `dist/` created |
| `npm test` | 1 passed |

---

## Step 5 — planned (empty shell)

| Will add | Purpose |
|----------|---------|
| `src/app/`, `src/features/`, `src/shared/` | Enterprise folder structure |
| Header, Footer, Sidebar, AppLayout | Same shell as Angular |
| Empty pages (`<h2>` only) | Dashboard, Templates, Admin, Role, Restatement |
| Routes | `/` → `/dashboard`, 404 |

---

## Step 6 — planned (shared foundation)

| Will add | Purpose | Angular equivalent |
|----------|---------|-------------------|
| `webApiClient` | Shared axios wrapper | `WebApiService` |
| MUI theme + QueryClient providers | App-wide setup | `app.config.ts` |
| Business mock JSON | Config / admin / role data | `src/assets/mockData/` |

---

## Steps 7–13 — planned (modules)

| Step | Module | Planned work |
|------|--------|----------------|
| **7** | Dashboard | JSONPlaceholder users table + dialog + tests |
| **8** | Templates | Posts CRUD + dialogs + tests |
| **9** | Restatement | Initiate & Define, Track & Action, `/track/:id` |
| **10** | Role | Definition tabs + assignment |
| **11** | Admin | Forms: `react-hook-form` + `zod` + `dayjs` |
| **12** | Cross-cutting | Auth interceptor, guards, lazy load |
| **13** | Sign-off | Full test + README polish |

Each of these will get the same **Packages / Files / Commands** tables when we finish that step.

---

## All packages (running list)

### Production

| Package | Version | In one sentence | Step |
|---------|---------|-----------------|------|
| `react` | ^19.2.8 | UI library | 1 |
| `react-dom` | ^19.2.8 | Renders React in the browser | 1 |
| `sass` | ^1.105.0 | Compile SCSS | 1 |
| `react-router-dom` | ^7.18.4 | Pages and URLs | 2 |
| `@mui/material` | ^9.4.0 | Tables, dialogs, tabs, buttons | 2 |
| `@mui/icons-material` | ^9.4.0 | Material icons | 2 |
| `@emotion/react` | ^11.14.0 | Required by MUI | 2 |
| `@emotion/styled` | ^11.14.1 | Required by MUI | 2 |
| `axios` | ^1.20.0 | HTTP GET/POST/PUT/DELETE | 2 |
| `@tanstack/react-query` | ^5.104.0 | API loading, cache, refetch | 2 |

### Development

| Package | In one sentence | Step |
|---------|-----------------|------|
| `vite` + `@vitejs/plugin-react` | Dev server and React plugin | 1 |
| `typescript` | Static types | 1 |
| `eslint` + plugins | Lint | 1 |
| `@types/react`, `@types/react-dom`, `@types/node` | TypeScript types | 1 |
| `jest` | Test runner | 3 |
| `@types/jest` | Jest TypeScript types | 3 |
| `jest-environment-jsdom` | Fake browser for tests | 3 |
| `ts-jest` | Run TSX in Jest | 3 |
| `@testing-library/react` | Render components in tests | 3 |
| `@testing-library/jest-dom` | `toBeInTheDocument()` | 3 |
| `@testing-library/user-event` | Click/type in tests | 3 |
| `jest-transform-stub` | Stub SCSS/images in tests | 3 |

---

## How the app boots (today)

```
index.html       → <div id="root">
src/main.tsx     → createRoot(...).render(<App />)
src/App.tsx      → Vite landing page (“Get started”)
```

---

*Last updated: September 26, 2026 — README now uses the same tables for every step. Next: Step 4 (health check).*
