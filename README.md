# React19App — CQRS Enterprise Dashboard (React 19)

A **React 19** learning application that rebuilds the **business modules** of [Angular19App](https://github.com/Avaneesh3772/Angular19App) — a CQRS enterprise portal (*Global Knowledge. Local Support.*).

**This repo:** [Avaneesh3772/React19App](https://github.com/Avaneesh3772/React19App)

**Excluded:** RxJS Learning and Signals Learning pages (Angular-only).

**Working rule:** Discuss each step in detail → implement → update this README.

---

## End goal

Same navigation and features as Angular19App (business modules only):

| Module | Routes |
|--------|--------|
| **Dashboard** | `/dashboard` |
| **Templates** | `/templates` |
| **Admin** | `/admin/close-quarter`, `/admin/le-calculation`, `/admin/rounding-model-calculation` |
| **Role** | `/role/role-definition`, `/role/role-assignment` |
| **Restatement** | `/restatement/initiate-and-define`, `/restatement/track-and-action`, `/restatement/track/:id` |

Reuse Angular CSS class names, service names, and variable names where it helps. Use enterprise-style React patterns (TypeScript, ESLint, feature folders, tests).

Default route (planned): `/dashboard`.

---

## Development plan

| Step | Name | Status |
|------|------|--------|
| **1** | Workspace — Vite + React 19 + TypeScript + ESLint + SCSS | **Complete** |
| **2** | Core libraries (Router, MUI, axios, React Query) | **Complete** |
| **3** | Testing stack (Jest + React Testing Library) | **Next** |
| **4** | Health check (`dev`, `lint`, `build`, `test`) | Pending |
| **5** | Folder structure + Header/Footer/Sidebar + empty pages | Pending |
| **6** | Shared foundation (`webApiClient`, theme, mock JSON) | Pending |
| **7** | Dashboard module | Pending |
| **8** | Templates module | Pending |
| **9** | Restatement module | Pending |
| **10** | Role module | Pending |
| **11** | Admin module (forms) | Pending |
| **12** | Auth, guards, interceptor, lazy load | Pending |
| **13** | Full regression + this README polish | Pending |

---

## Why Vite?

This app is a **client-side SPA**, like Angular19App (`ng serve` + router). Vite + React Router is the closest match.

Large banks (including RBC) use a **mix**: Angular/Webpack, React + Next.js, and sometimes Vite. Vite is not “the official RBC standard.” It is a valid, modern SPA toolchain. We chose it to stay close to the Angular reference, not because every bank app uses Vite.

| Angular | This project (Vite) | CRA (legacy) |
|---------|---------------------|--------------|
| `ng new` | `npm create vite@latest` | `create-react-app` |
| `ng serve` / `npm start` | `npm run dev` / `npm start` | `npm start` (port 3000) |
| `ng build` | `npm run build` | `npm run build` |
| `ng lint` | `npm run lint` | `npm run lint` (if configured) |

---

## Step 1 — what we did

- Emptied the folder (kept `.git`) and scaffolded a new app
- React **19.3.0** + TypeScript + ESLint + Vite 8
- Installed `sass` for SCSS
- Replaced Vite `index.css` / `App.css` with `src/styles/global.scss` and `src/App.scss`
- Added `npm start` (same habit as Angular)
- Verified `npm run lint`, `npm run build`, `npm run dev`
- Landing page works at [http://localhost:5173](http://localhost:5173)
- Pushed to GitHub

### Step 1 commands (reproduce from an empty folder with `.git`)

```bash
cd "c:/Avaneesh Projects/React19App"

npm create vite@latest . -- --template react-ts --eslint
npm install
npm install sass
npm pkg set scripts.start="vite"

npm list react --depth=0
npm run lint
npm run build
npm run dev
```

If Vite asks which linter, choose **ESLint**.

### What each command means

| Command | Purpose |
|---------|---------|
| `npm create vite@latest . -- --template react-ts --eslint` | Create React + TypeScript + ESLint project in the current folder |
| `npm install` | Install packages from `package.json` into `node_modules` |
| `npm install sass` | Enable `.scss` files (Vite compiles them) |
| `npm pkg set scripts.start="vite"` | Add `npm start` (same as `npm run dev`) |
| `npm list react --depth=0` | Confirm React 19 is installed |
| `npm run lint` | Run ESLint |
| `npm run build` | Typecheck + production bundle → `dist/` |
| `npm run dev` | Start dev server (hot reload) |

### CRA / Webpack / Nx equivalents (learning reference)

| Job | Vite (this repo) | Create React App | Custom Webpack | Nx |
|-----|------------------|------------------|----------------|-----|
| Create app | `npm create vite@latest . -- --template react-ts --eslint` | `npx create-react-app . --template typescript` | Write `webpack.config.js` yourself | `npx create-nx-workspace@latest` |
| Install | `npm install` | `npm install` | `npm install` + webpack loaders | `npm install` at workspace root |
| SCSS | `npm install sass` | `npm install sass` | `sass` + `sass-loader` | `npm install sass` |
| Dev server | `npm run dev` (port 5173) | `npm start` (port 3000) | `webpack serve` | `nx serve <app>` |
| Lint | `npm run lint` | `npm run lint` (if set) | `eslint` after you configure it | `nx lint <app>` |
| Build | `npm run build` → `dist/` | `npm run build` → `build/` | `webpack --mode production` | `nx build <app>` |

CRA is deprecated for new projects. Nx is for monorepos (many apps in one repo).

---

## Step 2 — core libraries (complete)

**Goal:** Install routing, MUI, HTTP, and React Query. Do **not** wire providers or replace the landing page yet.

**Done:** Packages installed. `npm run lint` and `npm run build` passed. Landing page unchanged.

**UI decision:** **MUI (Material UI)** + `@mui/icons-material` — closest to Angular Material. We compared MUI, Ant Design, shadcn/ui, Chakra UI, and Mantine. Forms/dates wait until Step 11.

### Step 2 commands

```bash
cd "c:/Avaneesh Projects/React19App"

npm install react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material axios @tanstack/react-query
```

Then verify:

```bash
npm list react-router-dom @mui/material axios @tanstack/react-query --depth=0
npm run lint
npm run build
```

`npm run dev` should still show the same Vite landing page.

### What each package is for

| Package | Purpose | Angular equivalent |
|---------|---------|-------------------|
| `react-router-dom` | Client-side routes (`/dashboard`, `/admin/...`) | `@angular/router` |
| `@mui/material` | UI — Table, Dialog, Tabs, Button, TextField | Angular Material |
| `@emotion/react` | Required by MUI (styling engine) | Material theming |
| `@emotion/styled` | Required by MUI (styled components) | Material theming |
| `@mui/icons-material` | Material icons (`account_balance`, `account_circle`) | Material Icons |
| `axios` | HTTP GET/POST/PUT/DELETE | `HttpClient` |
| `@tanstack/react-query` | API loading, error, cache, refetch | HTTP + RxJS in services |

### Not installed in Step 2

| Package | When |
|---------|------|
| `react-hook-form`, `zod`, `@hookform/resolvers` | Step 11 (Admin forms) |
| `dayjs`, `@mui/x-date-pickers` | Step 11 |
| Jest + Testing Library | Step 3 |
| `@tanstack/react-query-devtools`, `msw` | Later (API / tests) |

---

## Installed so far

### Production (Steps 1–2)

| Package | Version | Purpose | Step |
|---------|---------|---------|------|
| `react` | ^19.2.8 | UI library | 1 |
| `react-dom` | ^19.2.8 | Renders React into the browser | 1 |
| `sass` | ^1.105.0 | Compile SCSS | 1 |
| `react-router-dom` | ^7.18.4 | Client-side routing | 2 |
| `@mui/material` | ^9.4.0 | UI components | 2 |
| `@mui/icons-material` | ^9.4.0 | Material icons | 2 |
| `@emotion/react` | ^11.14.0 | MUI styling engine | 2 |
| `@emotion/styled` | ^11.14.1 | MUI styled API | 2 |
| `axios` | ^1.20.0 | HTTP client | 2 |
| `@tanstack/react-query` | ^5.104.0 | Server/API state | 2 |

### Development (Step 1)

| Package | Purpose |
|---------|---------|
| `vite` | Dev server and production bundler |
| `@vitejs/plugin-react` | React support in Vite |
| `typescript` | Static types |
| `eslint` + plugins | Linting |
| `@types/react`, `@types/react-dom`, `@types/node` | TypeScript types |

**Later:** Jest (Step 3), react-hook-form + zod + dayjs (Step 11).

---

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install (fresh clone)

```bash
npm install
```

### Run

```bash
npm run dev
# or
npm start
```

Open [http://localhost:5173](http://localhost:5173).

### Other scripts

| Command | Purpose |
|---------|---------|
| `npm run lint` | ESLint |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm test` | Not available until Step 3 (Jest) |

---

## How the app boots (Step 1)

```
index.html          → <div id="root">
src/main.tsx        → createRoot(...).render(<App />)
src/App.tsx         → current landing page (Vite welcome UI)
```

Same idea as Angular `index.html` → `main.ts` → `AppComponent`.

### Important files (current codebase)

| File | Role | Angular equivalent |
|------|------|-------------------|
| `index.html` | The only HTML page. Contains `<div id="root">` and loads `main.tsx`. | `src/index.html` |
| `src/main.tsx` | Starts React and mounts `<App />` into `#root`. | `src/main.ts` (`bootstrapApplication`) |
| `src/App.tsx` | Root component — the landing page you see in the browser. | `AppComponent` |
| `src/styles/global.scss` | App-wide styles (imported from `main.tsx`). | `src/styles.scss` |
| `src/App.scss` | Styles for the landing page component. | Component `.scss` |
| `package.json` | Scripts and dependencies. | Angular `package.json` |
| `vite.config.ts` | Vite dev server and build settings. | `angular.json` (build/serve) |
| `tsconfig.app.json` | TypeScript rules for app code. | `tsconfig.app.json` |
| `eslint.config.js` | Lint rules. | Angular ESLint / `ng lint` |
| `public/` | Static files (favicon, `icons.svg`) copied as-is. | `public/` |
| `.gitignore` | Keeps `node_modules` and `dist` out of Git. | `.gitignore` |

---

## README update policy

After **every step** this file is updated with:

- Step status in the plan table
- Commands run and what they mean
- Packages added and why
- How to run / test the app

*Last updated: September 26, 2026 — Step 2 complete. Next: Step 3 (Jest + React Testing Library).*
