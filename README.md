# Production-Grade Next.js Frontend

A production-grade frontend starter built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. It ships with a complete tooling suite for linting, type safety, testing, formatting, and CI/CD out of the box.

## Tech Stack

| Layer       | Technology                                                       |
| ----------- | ---------------------------------------------------------------- |
| Framework   | Next.js 15 (App Router, RSC)                                     |
| UI          | React 19, Tailwind CSS, Radix UI, shadcn/ui-style components     |
| Data        | TanStack React Query, Axios, Zod                                 |
| State       | Zustand                                                          |
| Forms       | React Hook Form + Zod (via `@hookform/resolvers`)                |
| Testing     | Vitest + Testing Library + jsdom                                 |
| Tooling     | TypeScript, ESLint, Prettier, Husky                              |
| CI          | GitHub Actions                                                   |

## Features

- **App Router architecture** with route groups: `(auth)`, `(dashboard)`, `(marketing)`.
- **Server & client component separation** with dedicated `layout.tsx`, `loading.tsx`, `error.tsx`, and `not-found.tsx`.
- **Typed environment variables** validated at runtime with Zod (`src/config/env.ts`).
- **Centralized API client** with Axios interceptors for auth token injection and 401 handling (`src/lib/axios.ts`).
- **Component library**: `src/components/ui` (primitive, Radix-based), `src/components/shared` (reusable business components), `src/components/forms`, `src/components/layout`.
- **State management** with Zustand stores (`src/stores`).
- **Dark mode** via `next-themes` (`ModeToggle`).
- **Production quality gates**: lint, typecheck, tests, and format checks enforced locally and in CI.

## Prerequisites

- **Node.js** — version is pinned in `.nvmrc` (Node 20). Using [nvm](https://github.com/nvm-sh/nvm)/[nvm-windows](https://github.com/coreybutler/nvm-windows):

  ```bash
  nvm use
  ```

- **npm** (v9+ recommended) — `npm ci` is used in CI.

## Getting Started

```bash
# 1. Install dependencies
npm ci

# 2. Set up environment variables
cp .env.example .env.local

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Environment variables are validated at import time by Zod in `src/config/env.ts`. If the app fails to start, verify `.env.local` matches the shape below.

| Variable               | Required | Default                      | Description                    |
| ---------------------- | -------- | ---------------------------- | ------------------------------ |
| `NEXT_PUBLIC_APP_URL`  | Yes      | `http://localhost:3000`      | Public base URL of the app     |
| `NEXT_PUBLIC_API_URL`  | Yes      | `http://localhost:4000/api`  | Base URL of the backend API    |
| `NEXT_PUBLIC_SENTRY_DSN` | No    | —                            | Sentry DSN for error monitoring |

> **Security:** never commit real secrets. `.env*.local` files are git-ignored.

## Available Scripts

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start the Next.js dev server                       |
| `npm run build`     | Production build (runs lint → build via `next`)    |
| `npm run start`     | Start the production server                        |
| `npm run lint`      | Run ESLint                                         |
| `npm run lint:fix`  | Run ESLint with auto-fix                           |
| `npm run format`    | Format source files with Prettier                  |
| `npm run format:check` | Verify formatting without modifying files        |
| `npm run typecheck` | Run TypeScript type checking (`tsc --noEmit`)      |
| `npm run test`      | Run Vitest in watch mode                           |
| `npm run test:run`  | Run Vitest once (CI mode)                          |
| `npm run test:coverage` | Run tests with coverage report                  |

## Project Structure

```
.
├── .github/workflows/   # GitHub Actions CI pipeline
├── .husky/              # Git hooks (pre-commit, commit-msg)
├── __tests__/           # Vitest unit/component tests
├── docs/                # Architecture & decision records (ADR)
├── e2e/                 # End-to-end tests (Playwright)
├── public/              # Static assets (served at root)
│   ├── images/          #   Logos, og-image, favicon
│   └── fonts/           #   Self-hosted fonts
├── scripts/             # Automation (codegen, seed, tooling)
├── src/
│   ├── app/             # Next.js App Router (routes, layouts, pages)
│   │   ├── (auth)/      #   Auth route group
│   │   ├── (dashboard)/ #   Dashboard route group
│   │   ├── (marketing)/ #   Marketing route group
│   │   └── api/         #   Route handlers / API endpoints
│   ├── components/
│   │   ├── ui/          #   Primitive UI components (Radix/shadcn)
│   │   ├── shared/      #   Reusable business components
│   │   ├── forms/       #   Form components
│   │   ├── layout/      #   Layout components (Header, Footer, Sidebar)
│   │   ├── auth/        #   Auth-specific components (sign-in, sign-up)
│   │   └── features/    #   Feature-scoped business components
│   ├── config/          # Site + typed env configuration
│   ├── constants/       # App-wide constants
│   ├── data/            # Static/mock data & fixtures
│   ├── hooks/           # Custom React hooks
│   ├── i18n/            # Internationalization setup & messages
│   ├── lib/             # Utilities (axios client, cn, etc.)
│   ├── providers/       # Global providers
│   ├── server/          # Server-only code (auth, SSR utilities)
│   ├── services/        # API client calls
│   ├── stores/          # Zustand stores
│   ├── types/           # TypeScript types
│   └── utils/           # Helper functions
├── .env.example         # Env template
├── AGENTS.md            # Agent/dev instructions
└── package.json
```

## Code Quality

Run the full quality gate before pushing:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run test:run
```

## CI/CD

GitHub Actions runs on every push to `main` and on pull requests (see `.github/workflows/ci.yml`):

1. `npm ci` — clean, reproducible install
2. `npm run lint` — ESLint
3. `npm run typecheck` — TypeScript
4. `npm run test:run` — Vitest unit tests

## Deployment

1. Install dependencies with `npm ci`.
2. Build the app: `npm run build`.
3. Start the server: `npm run start`.

For Vercel, no extra config is required — the framework preset is auto-detected. Set the environment variables above in your hosting provider's dashboard.
