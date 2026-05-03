# AGENTS.md

## Stack
- React 19 + Vite 8 (both very recent versions)
- Plain JSX, no TypeScript
- Font Awesome via `@fortawesome/react-fontawesome` + `free-solid-svg-icons`

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint (flat config, ignores `dist/`)

No test framework is configured.

## Lint Rules
- `no-unused-vars` ignores vars starting with capital letters or underscores (prevents false positives on React component imports)

## Structure
- Entry: `src/main.jsx` → `App.jsx`
- Components: `src/components/` (Homepage components in `src/components/homePage/`)
- Assets: `src/assets/`
