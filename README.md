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
| **2** | Core libraries (Router, MUI, axios, React Query) | Next |
| **3** | Testing stack (Jest + React Testing Library) | Pending |
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

## Installed so far (Step 1)

### Production

| Package | Purpose |
|---------|---------|
| `react` | UI library (19.x) |
| `react-dom` | Renders React into the browser |
| `sass` | Compile SCSS |

### Development

| Package | Purpose |
|---------|---------|
| `vite` | Dev server and production bundler |
| `@vitejs/plugin-react` | React support in Vite |
| `typescript` | Static types |
| `eslint` + plugins | Linting |
| `@types/react`, `@types/react-dom`, `@types/node` | TypeScript types |

**Not installed yet (Step 2+):** react-router-dom, MUI, axios, TanStack Query, Jest, react-hook-form.

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

---

## README update policy

After **every step** this file is updated with:

- Step status in the plan table
- Commands run and what they mean
- Packages added and why
- How to run / test the app

*Last updated: September 26, 2026 — Step 1 complete. Next: Step 2 (core libraries).*
