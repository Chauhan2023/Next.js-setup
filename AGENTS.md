# Next.js Frontend — Agent Instructions

## Commands

```bash
npm run dev          # Next.js dev server
npm run build        # Production build (runs lint → build via next)
npm run test         # Vitest unit tests
npm run test:run     # Vitest run (CI mode)
npm run typecheck    # tsc --noEmit
npm run format       # Prettier (includes tailwind plugin)
npm run lint         # ESLint check
npm run lint:fix     # ESLint with auto-fix
```

## Key conventions

- **Path alias**: `@/` maps to `src/` — always use it (imports, tailwind content, vitest resolve alias)
- **Package manager**: npm. `npm ci` in CI.
- **Env validation**: `src/config/env.ts` runs `z.object(...).parse(process.env)` at import time. If startup fails, check `.env.local` matches `.env.example`.
- **CSS theming**: HSL variables in `globals.css`; tailwind maps via `hsl(var(--primary))`. Use `cn()` from `src/lib/utils.ts` for class merging.
- **File structure**: `src/app/` = Next.js App Router (+ `src/app/api/` = route handlers), `src/components/` = React components (ui/layout/shared/forms/auth/features), `src/services/` = API client calls, `src/stores/` = Zustand state, `src/hooks/` = custom hooks, `src/server/` = server-only code, `src/data/` = static/mock data, `src/i18n/` = internationalization, `__tests__/` = unit tests, `e2e/` = end-to-end tests.

## Testing

- **Vitest**: config at `vitest.config.ts`. Tests in `__tests__/`. Pattern `*.test.(ts|tsx)`. jsdom environment.
- **Component tests**: use `@testing-library/react` + `@testing-library/jest-dom` (auto-imported via `__tests__/setup.ts`).


