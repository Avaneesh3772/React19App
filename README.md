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
| **4** | Health check (`dev`, `lint`, `build`, `test`) | **Complete** |
| **5** | Folder structure + Header/Footer/Sidebar + empty pages | **Complete** |
| **6** | Shared foundation (`webApiClient`, theme, mock JSON) | **Complete** |
| **7** | Dashboard module | **Next** |
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

## Step 4 — health check (complete)

**Goal:** Run all existing scripts. No new packages or source files.

### Packages added

| Package | In one sentence | Angular equivalent |
|---------|-----------------|-------------------|
| *(none)* | Step 4 only verifies the project | `ng serve` / `ng test` / `ng build` |

### Files added or changed

| File | Purpose |
|------|---------|
| *(none in `src/`)* | README updated with results |

### Commands

| Command | Result |
|---------|--------|
| `npm run lint` | Passed (no ESLint errors) |
| `npm run build` | Passed — Vite built `dist/` |
| `npm test` | Passed — 1 test (`Get started` heading) |
| `npm run dev` | Landing page at http://localhost:5173 |

### Notes

- Foundation (Steps 1–3) is healthy. Next step adds real app structure and empty pages.

---

## Step 5 — empty shell (complete)

**Goal:** Feature folders, Header/Footer/Sidebar, empty business pages, and routes so the CQRS layout shows instead of the Vite welcome page.

Done in five parts: **5.1** folders → **5.2** empty pages → **5.3** layout → **5.4** router → **5.5** tests + this README.

### Packages added

| Package | In one sentence | Angular equivalent |
|---------|-----------------|-------------------|
| *(none)* | Router and MUI were installed in Step 2 | `@angular/router` already in Angular19App |

### Files added or changed

| File | Purpose |
|------|---------|
| `src/features/dashboard/Dashboard.tsx` | Empty `/dashboard` page |
| `src/features/templates/Templates.tsx` | Empty `/templates` page |
| `src/features/admin/CloseQuarter.tsx` | Empty close-quarter page |
| `src/features/admin/LeCalculation.tsx` | Empty LE calculation page |
| `src/features/admin/RoundingModelCalculation.tsx` | Empty rounding-model page |
| `src/features/role/RoleDefinition.tsx` | Empty role-definition page |
| `src/features/role/RoleAssignment.tsx` | Empty role-assignment page |
| `src/features/restatement/InitiateAndDefine.tsx` | Empty initiate-and-define page |
| `src/features/restatement/TrackAndAction.tsx` | Empty track-and-action page |
| `src/features/restatement/Track.tsx` | `/restatement/track/:id` — shows the id |
| `src/shared/constants/navigation.ts` | Sidebar labels and paths (no RxJS/Signals) |
| `src/shared/components/layout/Header.tsx` | CQRS title + username |
| `src/shared/components/layout/Footer.tsx` | Copyright line |
| `src/shared/components/layout/Sidebar.tsx` | Left menu (`NavLink`) |
| `src/shared/components/layout/AppLayout.tsx` | Header + sidebar + `<Outlet />` + footer |
| `src/shared/components/PageNotFound.tsx` | `*` unknown URL |
| `src/app/router/AppRouter.tsx` | Route table (like `app.routes.ts`) |
| `src/app/router/AppRouter.test.tsx` | 404 + Track id tests (`MemoryRouter`) |
| `src/App.tsx` | `BrowserRouter` + `AppRouter` (Vite welcome page removed) |
| `src/App.test.tsx` | Smoke test: CQRS + Dashboard |
| `src/styles/global.scss` | Angular shell classes; Vite `#root` centering removed |
| `src/setupPolyfills.ts` | Jest `TextEncoder` for react-router |
| `jest.config.ts` | `setupFiles` for the polyfill |
| `tsconfig.app.json` | Exclude Jest setup files from the app build |

### Commands

| Command | Result |
|---------|--------|
| `npm run lint` | Passed |
| `npm test` | Passed — 3 tests (shell, 404, Track id) |
| `npm run build` | Passed — `dist/` built |
| `npm run dev` | CQRS shell at http://localhost:5173/dashboard |

### Notes

- **No RxJS Learning or Signals Learning** — Angular-only, left out of the menu and routes.
- Pages are `export function` (named export). Sidebar items with a `path` are links; items with `children` are groups.
- 404 stays **inside** `AppLayout` (header/sidebar still visible), same as Angular `**`.
- Guards and lazy routes wait for **Step 12**. Username stays hardcoded until **Step 7**.
- Vite leftover `#root { text-align: center; width: 1126px }` was removed so the shell is full-width like Angular. The blue frame is Angular’s `DodgerBlue` `.app-container`.

---

## Step 6 — shared foundation (complete)

**Goal:** Shared HTTP client, MUI theme, React Query, and Angular mock JSON so later modules can call APIs. Done in four parts: **6.1** JSON → **6.2** `webApiClient` → **6.3** providers → **6.4** test + this README.

### Packages added

| Package | In one sentence | Angular equivalent |
|---------|-----------------|-------------------|
| *(none)* | axios, MUI, and React Query were installed in Step 2 | `HttpClient` + Material + services |

### Files added or changed

| File | Purpose |
|------|---------|
| `public/assets/mockData/appConfiguration.json` | User name + roles (header/guards later) |
| `public/assets/mockData/adminMockData.json` | Admin (Step 11) |
| `public/assets/mockData/roleMockData.json` | Role (Step 10) |
| `public/assets/mockData/roleAssignmentList.json` | Role assignment |
| `public/assets/mockData/roleAssignmentUsersList.json` | Role assignment users |
| `public/assets/mockData/employeeData.json` | Later modules |
| `public/assets/mockData/ordersData.json` | Later modules |
| `public/assets/mockData/artistData.json` | Later modules |
| `public/assets/mockData/doctorsData.json` | Later modules |
| `src/shared/api/webApiClient.ts` | axios wrapper — `baseHttpGet/Post/Put/DeleteRequest` |
| `src/shared/api/webApiClient.test.ts` | GET returns `response.data` (mocked axios, no network) |
| `src/app/theme/theme.ts` | MUI theme — Roboto, primary `#1976d2` |
| `src/app/queryClient.ts` | Shared `QueryClient` (own file) |
| `src/app/AppProviders.tsx` | Theme + React Query + `CssBaseline` |
| `src/App.tsx` | `AppProviders` → `BrowserRouter` → `AppRouter` |

### Commands

| Command | Result |
|---------|--------|
| `npm run lint` | Passed |
| `npm test` | Passed — 4 tests (shell, 404, Track id, GET unwrap) |
| `npm run build` | Passed — `dist/` built |
| `npm run dev` | CQRS shell; mocks at `/assets/mockData/...` |

### Notes

- Mock JSON lives in **`public/`** so the URL matches Angular (`/assets/mockData/...`). Vite does not serve `src/assets/` as a public URL.
- `webApiClient` keeps Angular method names and returns a **Promise** of the JSON body. No `baseURL` and no auth header yet.
- Header name from `appConfiguration.json` waits for **Step 7**. Interceptor and guards wait for **Step 12**.
- See [Decisions and learning notes](#decisions-and-learning-notes) for the longer “why.”

---

## Steps 7–13 — planned (modules)

| Step | Module | Planned work |
|------|--------|----------------|
| **7** | Dashboard | JSONPlaceholder users table + dialog + tests; header name from `appConfiguration.json` |
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
index.html     → <div id="root">
src/main.tsx   → createRoot(...).render(<App />)
src/App.tsx    → AppProviders → BrowserRouter → AppRouter
AppLayout      → Header + Sidebar + Outlet + Footer
```

`AppProviders` = MUI theme + `CssBaseline` + React Query. `/` redirects to `/dashboard`. Unknown URLs show Page Not Found inside the same shell.

---

## Decisions and learning notes

Standing choices so you can re-read them without scrolling the chat. Each completed step also has **Packages / Files / Commands** tables above.

### How we work

- Discuss the piece → implement → health check (`lint` / `test` / `build`) → README tables at step close.
- Small parts (5.1–5.5, 6.1–6.4) when a step is large.

### Components and exports

- **`export function Header()`** for pages and layout — not arrow components. Arrows are for `onClick`, `className={({ isActive }) => …}`, and `.map()`.
- **Named export** (`import { Sidebar } from './Sidebar'`). `export default` only where the file already used it (`App`).
- “Functional component” means a function that returns JSX, not “must be an arrow.”

### Routing and sidebar

- `AppLayout` + `<Outlet />` = Angular shell + `router-outlet`.
- `NavLink` `className={({ isActive }) => (isActive ? 'active' : undefined)}` = `routerLinkActive="active"`.
- Menu item with `path` = link; item with `children` = group. No `isGroup()` type guard.
- 404 stays **inside** the shell (header/sidebar still visible).
- Router tests use `MemoryRouter` + `initialEntries` (test stand-in for `BrowserRouter`).
- `BrowserRouter` + `<Routes>` (not `createBrowserRouter`) — easier to map from Angular `app.routes.ts`.

### HTTP, theme, mock data

- Vite static files go in **`public/`**. URL `/assets/mockData/appConfiguration.json` matches Angular. Do not put fetchable mocks only under `src/assets/`.
- `webApiClient` keeps Angular names (`baseHttpGetRequest`, …) and returns a **Promise** of JSON (`response.data`), not an Observable.
- No `baseURL` yet — local `/assets/...` and `https://jsonplaceholder.typicode.com/...` both work.
- Auth interceptor and guards = **Step 12**.
- `queryClient` lives in **`src/app/queryClient.ts`**, not in `AppProviders.tsx` (Fast Refresh).
- In tests later (Step 7), create a **new** `QueryClient` per test so cache does not leak.
- Header **Username - Avaneesh Mishra** stays hardcoded until **Step 7**.

### UI / CSS

- Vite leftover `#root { text-align: center; width: 1126px }` was removed so the shell is full-width.
- Blue frame is Angular’s `DodgerBlue` `.app-container`.
- `CssBaseline` (6.3) may tighten default margins.

### Enterprise shape (honest)

- Feature folders, `AppProviders`, one HTTP wrapper, React Query for server data = standard enterprise React.
- Teaching choices: Angular HTTP method names; `<Routes>` instead of `createBrowserRouter`; no `@/` path alias yet.
- Not done yet: interceptor, env `baseURL`, error boundary, zod, CI gates.

---

*Last updated: September 28, 2026 — Step 6 complete. Next: Step 7 (Dashboard + header name from config).*
