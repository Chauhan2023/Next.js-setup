# Project Coding Instructions

## 1. Reusable Components First
- Before writing a new component, check if a reusable/shared component already exists in the codebase.
- Only create a new component if no suitable reusable one is available.
- If a new component is created and it's likely to be reused, place it in the shared/common component folder.

## 2. API Integration — SSR vs CSR
- Before writing any API integration, decide whether it should run on the **server (SSR)** or **client (CSR)**.
- Use SSR for data needed at first paint, SEO-relevant content, or data that shouldn't be exposed to the client.
- Use CSR for data that depends on user interaction, is behind auth-only client state, or updates frequently after load.
- Document the choice with a short comment where the fetch is implemented.

## 3. TypeScript for All JSX
- All `.jsx` files should be written as `.tsx` — always use TypeScript when writing JSX/components.
- Define proper types/interfaces for props, state, and API responses. Avoid `any`.

## 4. Safe Updates
- Before updating existing code, check:
  - Whether unit tests cover the affected area — update/add tests as needed.
  - What else in the codebase depends on the changed function/component/type.
- Don't merge a change without confirming nothing else breaks.

## 5. SEO
- Always consider how a change affects SEO: semantic HTML, meta tags, heading hierarchy, alt text, SSR for crawlable content, proper canonical/OpenGraph tags where relevant.

## 6. Plan Before Coding
- Outline the approach (structure, components, data flow) before writing code — even briefly.
- Confirm the plan makes sense, then implement.

## 7. Code Review & Quality
- After writing code, review it yourself for:
  - Code quality and readability
  - Performance issues (unnecessary re-renders, unoptimized loops/queries, large bundle impact)
  - Adherence to project conventions

## 8. Build in Small Chunks
- Write and deliver code in small, logical chunks rather than one large drop — easier to review, understand, and maintain.

## 9. Keep Files Small & Organized
- Avoid large, monolithic files.
- Structure code by **pages** and **components**, each kept small and focused, for easier maintenance.