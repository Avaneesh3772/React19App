# React19App — CQRS Enterprise Dashboard (React 19)

A **React 19** learning application that mirrors the business modules of [Angular19App](https://github.com/Avaneesh3772/Angular19App) — a role-based enterprise CQRS portal (*Global Knowledge. Local Support.*).

**Reference app:** [Angular19App](https://github.com/Avaneesh3772/Angular19App)  
**This repo:** [React19App](https://github.com/Avaneesh3772/React19App)

**Excluded from React version:** RxJS Learning and Signals Learning modules (Angular-only learning sandboxes).

**Default route (planned):** `/dashboard`

---

## Project goal

Build a React 19 SPA with the same business navigation and features as Angular19App:

| Module | Routes |
|--------|--------|
| **Dashboard** | `/dashboard` |
| **Templates** | `/templates` |
| **Admin** | `/admin/close-quarter`, `/admin/le-calculation`, `/admin/rounding-model-calculation` |
| **Role** | `/role/role-definition`, `/role/role-assignment` |
| **Restatement** | `/restatement/initiate-and-define`, `/restatement/track-and-action`, `/restatement/track/:id` |

Reuse CSS class names, service names, and variable names from Angular where possible for consistency.

---

## Development phases

| Phase | Description | Status |
|-------|-------------|--------|
| **Phase 1** | Scaffold React 19 + Vite + TypeScript + ESLint; install dependencies; Jest setup; folder structure; mock data | **Complete** |
| **Phase 2** | Header, Footer, Sidebar, AppLayout, empty pages, routes, layout tests | **Complete** |
| **Phase 3** | Dashboard — API + table + user info dialog + tests | **Next** |
| **Phase 4** | Templates — CRUD + dialogs + tests | Pending |
| **Phase 5** | Restatement — list, detail, mock API + tests | Pending |
| **Phase 6** | Role — definition tabs, assignment + tests | Pending |
| **Phase 7** | Admin — forms (react-hook-form + zod) + tests | Pending |
| **Phase 8** | Auth interceptor, app init, route guards, lazy loading | Pending |
| **Phase 9** | README polish, full test pass, final integration | Pending |

---

## Progress log

### Completed

- [x] **Phase 1** — React 19 app scaffolded with Vite + TypeScript + ESLint
- [x] Pushed initial scaffold to GitHub (`main` branch)
- [x] **All dependencies installed** — see [Package installation commands](#package-installation-commands) and [Installed dependencies](#installed-dependencies)
- [x] Removed `bootstrap` — project uses **MUI only**
- [x] **Jest configured** — `jest.config.ts`, `tsconfig.jest.json`, `src/setupTests.ts`
- [x] **Test scripts added** — `npm test`, `npm run test:watch`, `npm run test:coverage`
- [x] **Feature-based folder structure** — `src/app/`, `src/features/`, `src/shared/`
- [x] **Mock JSON copied** from Angular19App → `src/assets/mockData/` (9 files)
- [x] **AppProviders** — MUI Theme, TanStack Query, React Query Devtools (dev only)
- [x] **Global SCSS** ported from Angular19App business styles → `src/styles/global.scss`
- [x] **webApiClient** — axios base client (maps to Angular `WebApiService`)
- [x] **Path alias** — `@/` → `src/` (Vite + TypeScript + Jest)
- [x] **Smoke tests** — 2 tests passing (`App.test.tsx`, `webApiClient.test.ts`)
- [x] **Phase 2** — App shell, navigation, empty business pages, routing tests
  - Header, Footer, Sidebar, AppLayout
  - Empty pages: Dashboard, Templates, Admin (3), Role (2), Restatement (3)
  - Routes: `/` → `/dashboard`, dynamic `/restatement/track/:id`, 404 page
  - Navigation config in `shared/constants/navigation.ts` (no RxJS/Signals)
  - **8 tests passing** (layout + routing)
- [x] Architecture decisions documented:
  - **UI:** MUI (Material UI) — no Bootstrap
  - **Server state:** TanStack React Query
  - **HTTP:** axios
  - **Forms (Phase 7):** react-hook-form + zod
  - **Testing:** Jest + React Testing Library
  - **Folder structure:** Feature-based (`features/`, `shared/`, `app/`)

### Next steps (Phase 3)

- [ ] Dashboard service + React Query hook
- [ ] User table from JSONPlaceholder
- [ ] User info dialog on row click
- [ ] Loading and error states
- [ ] Dashboard unit tests

---

## Tech stack

| Layer | Technology | Status |
|-------|------------|--------|
| Framework | React 19 | Installed |
| Build tool | Vite 8 | Installed |
| Language | TypeScript 6 | Installed |
| Linting | ESLint | Installed |
| Routing | react-router-dom | Installed |
| UI | MUI (Material UI) + MUI Icons | Installed |
| HTTP | axios | Installed |
| Server state | TanStack React Query | Installed |
| Forms | react-hook-form + zod | Installed (used in Phase 7) |
| Dates | dayjs + MUI X Date Pickers | Installed (used in Phase 7) |
| Styles | SCSS (sass) | Installed |
| Unit tests | Jest + React Testing Library | Configured — **8 tests passing** |
| API mocking (tests) | MSW | Installed |
| E2E (future) | Playwright or Cypress | Not planned yet |

### Angular → React mapping

| Angular19App | React19App |
|--------------|------------|
| Angular Material | `@mui/material` + `@mui/icons-material` |
| Bootstrap | **Not used** — MUI handles layout and components |
| HttpClient + WebApiService | `axios` + shared `webApiClient` |
| RxJS (module data) | TanStack React Query |
| Reactive Forms | react-hook-form + zod |
| Moment.js | dayjs |
| Jasmine + Karma | Jest + React Testing Library |
| Route guards | ProtectedRoute (Phase 8) |
| HTTP interceptor | axios interceptors (Phase 8) |

---

## Package installation commands

Use these commands to reproduce the dependency setup on a fresh machine or after cloning the repo (after `npm create vite` scaffold).

### Step 1 — Create the app (already done)

```bash
cd "c:/Avaneesh Projects/React19App"
npm create vite@latest . -- --template react-ts --eslint
npm install
```

### Step 2 — Core app dependencies (routing, UI, API, styles)

```bash
npm install react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @tanstack/react-query axios sass
```

| Package | Why we install it |
|---------|-------------------|
| `react-router-dom` | Client-side routing for Dashboard, Admin, Role, Restatement pages |
| `@mui/material` | UI components — tables, dialogs, tabs, buttons (Angular Material equivalent) |
| `@emotion/react` | Required peer dependency for MUI styling engine |
| `@emotion/styled` | Required peer dependency for MUI styled components |
| `@mui/icons-material` | Material icons (`account_balance`, `account_circle`, etc.) |
| `@tanstack/react-query` | Server/API state — loading, error, cache, refetch after mutations |
| `axios` | HTTP client with interceptor support (maps to Angular HttpClient) |
| `sass` | Compile SCSS — port global styles from Angular19App |

### Step 3 — Forms and dates (Admin module — Phase 7)

```bash
npm install react-hook-form zod @hookform/resolvers dayjs @mui/x-date-pickers
```

| Package | Why we install it |
|---------|-------------------|
| `react-hook-form` | Form state management for Admin forms (Close Quarter, LE Calc, etc.) |
| `zod` | Schema-based validation with TypeScript type inference |
| `@hookform/resolvers` | Connects Zod validation schemas to react-hook-form |
| `dayjs` | Lightweight date library (replaces Moment.js from Angular app) |
| `@mui/x-date-pickers` | MUI date picker UI components for Admin forms |

### Step 4 — Jest and React Testing Library

```bash
npm install -D jest @types/jest jest-environment-jsdom ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-transform-stub
```

| Package | Why we install it |
|---------|-------------------|
| `jest` | Test runner (enterprise-standard; Jest-compatible API) |
| `@types/jest` | TypeScript type definitions for Jest globals (`describe`, `it`, `expect`) |
| `jest-environment-jsdom` | Simulates browser DOM in Node so components can render in tests |
| `ts-jest` | Compiles TypeScript files when running Jest |
| `@testing-library/react` | Render and query React components by role/text (industry standard) |
| `@testing-library/jest-dom` | Extra matchers: `toBeInTheDocument()`, `toHaveTextContent()`, etc. |
| `@testing-library/user-event` | Simulates realistic user actions — click, type, tab |
| `jest-transform-stub` | Stubs `.css`, `.scss`, and image imports so Jest does not fail on them |

### Step 5 — Optional dev/testing tools (recommended)

```bash
npm install -D @tanstack/react-query-devtools msw
```

| Package | Why we install it |
|---------|-------------------|
| `@tanstack/react-query-devtools` | Visual debugger panel for React Query cache and requests in dev |
| `msw` | Mock Service Worker — intercept and mock HTTP APIs in unit tests |

### Step 6 — Remove Bootstrap (if accidentally installed)

This project uses **MUI only**. Bootstrap is not needed:

```bash
npm uninstall bootstrap
```

### One-shot — all dependencies (after Vite scaffold)

```bash
cd "c:/Avaneesh Projects/React19App"

# Production dependencies
npm install react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @tanstack/react-query axios sass react-hook-form zod @hookform/resolvers dayjs @mui/x-date-pickers

# Dev dependencies
npm install -D jest @types/jest jest-environment-jsdom ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-transform-stub @tanstack/react-query-devtools msw
```

### Verify installation

```bash
npm list --depth=0
```

---

## Installed dependencies

> **Status: All packages installed.** Last verified: July 11, 2026.

### Production (`dependencies`) — 15 packages

| Package | Version | Purpose | Used in phase |
|---------|---------|---------|---------------|
| `react` | ^19.2.7 | Core UI library | All |
| `react-dom` | ^19.2.7 | Renders React components to the DOM | All |
| `react-router-dom` | ^7.18.1 | Client-side routing and navigation | Phase 2+ |
| `@mui/material` | ^9.2.0 | UI components — Table, Dialog, Tabs, TextField, Card, Button | Phase 2+ |
| `@mui/icons-material` | ^9.2.0 | Material Design icons in header, sidebar, actions | Phase 2+ |
| `@emotion/react` | ^11.14.0 | CSS-in-JS engine required by MUI | All (with MUI) |
| `@emotion/styled` | ^11.14.1 | Styled component support required by MUI | All (with MUI) |
| `@tanstack/react-query` | ^5.101.2 | Fetch, cache, and sync server/API data | Phase 3+ |
| `axios` | ^1.18.1 | HTTP GET/POST/PUT/DELETE + auth interceptors | Phase 3+ |
| `sass` | ^1.101.0 | Compile `.scss` files — global styles from Angular | Phase 1+ |
| `react-hook-form` | ^7.81.0 | Performant form state for Admin module | Phase 7 |
| `zod` | ^4.4.3 | Declarative validation schemas with TypeScript types | Phase 7 |
| `@hookform/resolvers` | ^5.4.0 | Bridges Zod schemas into react-hook-form | Phase 7 |
| `dayjs` | ^1.11.21 | Parse and format dates in Admin forms | Phase 7 |
| `@mui/x-date-pickers` | ^9.9.0 | Date picker UI for Admin forms | Phase 7 |

### Development (`devDependencies`) — 22 packages

| Package | Version | Purpose | Used in phase |
|---------|---------|---------|---------------|
| `typescript` | ~6.0.2 | Static typing for the entire codebase | All |
| `vite` | ^8.1.1 | Dev server with HMR and production bundler | All |
| `@vitejs/plugin-react` | ^6.0.3 | React Fast Refresh and JSX support in Vite | All |
| `eslint` | ^10.6.0 | Lint JavaScript/TypeScript for code quality | All |
| `@eslint/js` | ^10.0.1 | Base ESLint recommended rules | All |
| `typescript-eslint` | ^8.62.0 | TypeScript-specific ESLint rules | All |
| `eslint-plugin-react-hooks` | ^7.1.1 | Enforces Rules of Hooks | All |
| `eslint-plugin-react-refresh` | ^0.5.3 | Validates React Refresh usage with Vite | All |
| `globals` | ^17.7.0 | Global variable definitions for ESLint flat config | All |
| `@types/node` | ^24.13.2 | TypeScript types for Node.js APIs | All |
| `@types/react` | ^19.2.17 | TypeScript types for React | All |
| `@types/react-dom` | ^19.2.3 | TypeScript types for React DOM | All |
| `jest` | ^30.4.2 | Unit and component test runner | All tests |
| `@types/jest` | ^30.0.0 | TypeScript types for Jest | All tests |
| `jest-environment-jsdom` | ^30.4.1 | Browser DOM simulation for component tests | All tests |
| `ts-jest` | ^29.4.11 | Transpile TypeScript in Jest without separate build step | All tests |
| `@testing-library/react` | ^16.3.2 | Render components and assert on visible output | All tests |
| `@testing-library/jest-dom` | ^6.9.1 | DOM-specific Jest matchers | All tests |
| `@testing-library/user-event` | ^14.6.1 | Simulate user interactions in tests | All tests |
| `jest-transform-stub` | ^2.0.0 | Replace CSS/image imports with stubs in Jest | All tests |
| `@tanstack/react-query-devtools` | ^5.101.2 | Dev-only panel to inspect React Query state | Dev only |
| `msw` | ^2.15.0 | Mock HTTP requests in tests (JSONPlaceholder, mock JSON) | Phase 3+ tests |

### Packages intentionally not used

| Package | Reason |
|---------|--------|
| `bootstrap` | Removed — MUI provides all layout and UI components |
| `vitest` | Not used — project uses Jest per enterprise preference |
| `moment` | Not used — replaced by `dayjs` |
| `redux` / `mobx` | Not needed — React Query handles server state; Context for app config |

---

## Project folder structure

```
src/
├── app/
│   ├── App.tsx                 # Root component — providers + router
│   ├── App.test.tsx            # App shell smoke test
│   ├── AppProviders.tsx        # MUI Theme + React Query providers
│   ├── queryClient.ts          # TanStack Query client instance
│   ├── router/
│   │   ├── AppRouter.tsx       # All business route definitions
│   │   └── AppRouter.test.tsx  # Routing and navigation tests
│   └── theme/
│       └── theme.ts            # MUI theme
├── features/
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   ├── templates/
│   │   └── Templates.tsx
│   ├── admin/
│   │   ├── CloseQuarter.tsx
│   │   ├── LeCalculation.tsx
│   │   └── RoundingModelCalculation.tsx
│   ├── role/
│   │   ├── RoleDefinition.tsx
│   │   └── RoleAssignment.tsx
│   └── restatement/
│       ├── InitiateAndDefine.tsx
│       ├── TrackAndAction.tsx
│       └── Track.tsx           # Dynamic route — /restatement/track/:id
├── shared/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.test.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.test.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Sidebar.test.tsx
│   │   │   └── AppLayout.tsx   # Shell — header + sidebar + outlet + footer
│   │   ├── PageShell.tsx       # Reusable empty page wrapper
│   │   └── PageNotFound.tsx
│   ├── constants/
│   │   └── navigation.ts       # Sidebar menu config
│   ├── api/
│   │   ├── webApiClient.ts
│   │   └── webApiClient.test.ts
│   ├── testing/
│   │   └── renderWithProviders.tsx
│   └── types/
│       └── appConfiguration.ts
├── assets/mockData/            # JSON mock files from Angular19App
├── styles/global.scss
├── setupTests.ts
└── main.tsx
```

### Application routes (Phase 2)

| Route | Component |
|-------|-----------|
| `/` | Redirects to `/dashboard` |
| `/dashboard` | Dashboard |
| `/templates` | Templates |
| `/admin/close-quarter` | CloseQuarter |
| `/admin/le-calculation` | LeCalculation |
| `/admin/rounding-model-calculation` | RoundingModelCalculation |
| `/role/role-definition` | RoleDefinition |
| `/role/role-assignment` | RoleAssignment |
| `/restatement/initiate-and-define` | InitiateAndDefine |
| `/restatement/track-and-action` | TrackAndAction |
| `/restatement/track/:id` | Track |
| `*` | PageNotFound (404) |

---

## Jest configuration (Phase 1)

| File | Purpose |
|------|---------|
| `jest.config.ts` | Jest config — ts-jest, jsdom, path alias, asset stubs |
| `tsconfig.jest.json` | TypeScript config for Jest (separate from Vite build) |
| `src/setupTests.ts` | Loads `@testing-library/jest-dom` and Node polyfills |

### Test commands

```bash
npm test                 # Run all tests once
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage report
```

---

## Planned folder structure (Phase 3+ additions)

Phase 3 will add to `features/dashboard/`:

```
features/dashboard/
├── Dashboard.tsx
├── api/
│   ├── dashboardService.ts
│   └── useDashboardUsers.ts
└── components/
    └── UserInfoDialog.tsx
```

---

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install (fresh clone)

```bash
npm install
```

This reads `package.json` and installs all dependencies listed above. No extra install commands needed.

### Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Tests

```bash
npm test
npm run test:watch
npm run test:coverage
```

Current status: **8 tests passing** (App shell, layout, routing, webApiClient).

---

## README update policy

This README is updated as the project progresses:

- New packages installed → added to **Installed dependencies** and **Package installation commands**
- Phase completed → updated in **Development phases** and **Progress log**
- Architecture decisions → documented in **Tech stack**

*Last updated: July 11, 2026 — Phase 2 complete. Phase 3 (Dashboard) is next.*
