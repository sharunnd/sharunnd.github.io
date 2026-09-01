# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project layout

The React app lives in `my-portfolio/`, not the repo root. Run every npm command from
`my-portfolio/`. The repo root only holds a placeholder `README.md`.

This is a personal portfolio site (Create React App, CRA 5 / `react-scripts`) deployed to
`https://sharunnd.github.io`.

## Commands (run from `my-portfolio/`)

```bash
npm install            # first-time setup
npm start              # dev server on http://localhost:3000
npm run build          # production bundle into build/
npm test               # Jest + React Testing Library, interactive watch mode
npm run deploy         # runs predeploy (build) then `gh-pages -d build`
```

Run a single test file (non-watch): `npx react-scripts test --watchAll=false src/App.test.js`

Notes:
- `src/App.test.js` is the stale CRA default (asserts a "learn react" link that no longer
  exists), so `npm test` currently fails. Update or delete it before relying on the suite.
- `gh-pages` is referenced by the `deploy` script but is **not** in `package.json`
  dependencies — `npm i -D gh-pages` (or a global install) is required before `npm run deploy`.
- No standalone linter; ESLint runs only through `react-scripts` (`eslintConfig` extends
  `react-app`). Plain JS/JSX, no TypeScript.

## Architecture

Single-page vertical-scroll site. `src/index.js` renders `<ColorModeScript>` +
`<ChakraProvider theme={theme}>` (from `src/theme/index.js`) inside `StrictMode`, and imports
the global stylesheets. `src/App.js` renders a `<ColorModeSync/>`, a skip link, a fixed
`Navbar`, then section components inside `<main>` in order: `Home`, `About`, `Experience`,
`Skills`, `Projects` (exported as `Project`), `TechStack`, `GitHubActivity`, `Contact`,
followed by `Footer` and a floating `ScrollIcon`.

**Design-token system (single source of truth):** `src/styles/tokens.css` defines all colour
and layout CSS custom properties under `:root[data-theme='light']` / `[data-theme='dark']`.
`src/theme/index.js` (`extendTheme`) exposes them to Chakra via `semanticTokens` whose values
are `var(--…)` strings (e.g. `bg.canvas` → `var(--bg)`, `text.primary`, `accent.solid`,
`border.subtle`). Components use only these semantic tokens plus theme `fontSizes`
(`display`, `h2`, `lead`, `eyebrow`…), `radii` (`xs`–`lg`), and `Button` variants
(`cta` | `line` | `quiet`). Never hardcode a hex. `src/styles/global.css` holds base element
styling + reduced-motion; `src/styles/animations.css` holds the `.reveal` / `.hero-line` /
`.u-link` utility classes.

**Theme switching:** dark is the default. `public/index.html` has an inline pre-paint script
that sets `<html data-theme>` from `localStorage['chakra-ui-color-mode']`; `ColorModeSync`
keeps that attribute in step with Chakra's `useColorMode`; `ThemeToggle` (in `Navbar`, desktop
+ mobile) flips it. Fonts (Fraunces / Inter / IBM Plex Mono) load via `<link>` in
`public/index.html`.

**Reusable pieces:** `src/components/layout/` — `Container`, `Section` (renders the
`react-scroll` `<Element>` + landmark), `SectionHeader` (mono eyebrow + single `<h2>`).
`src/components/ui/` — `Reveal` (IntersectionObserver fade-up, `index` prop staggers),
`MagneticButton`, `IconLink`, `TechBadge`, `ThemeToggle`, `ColorModeSync`. Hooks in
`src/hooks/` (`useReveal`, `useMagnetic`, `useScrolled`, `usePrefersReducedMotion`).

**Scroll navigation contract (`react-scroll`):** `Section` wraps content in
`<Element name="...Section">`; `Navbar`'s `NAV_ITEMS` link to matching names with
`offset={-72}` (header height) and `spy` for the active state. Targets: `homeSection`,
`aboutSection`, `experienceSection`, `skillsSection`, `projectSection`, `techStackSection`,
`contactSection` (+ `githubSection`, no nav link). Keep a section's `name` and the Navbar
`to` in sync or that link silently stops scrolling.

**Content is data, not JSX.** Section content lives in `src/data/` — `projects.js` (8 cards,
verbatim), `experience.js` (2 roles, from the résumé), `skills.js` (capability matrix),
`techStack.js` (grouped tools). Add a project/skill by editing the array. Images are imported
in `src/data/projects.js` from `src/images/`.

**Resume:** `src/resume.js` `handleResume()` fetches `Sharun-ND-Resume.pdf` from `public/`,
forces a download, and opens it in a new tab. Called from `Navbar` and `About`. Replace by
overwriting `my-portfolio/public/Sharun-ND-Resume.pdf`.

**External service in `src/components/GitHubActivity.jsx`:** `react-github-calendar` v4 for
username `site.githubUser`. v4 swallows fetch failures into its own state and renders a plain
"Unable to fetch…" line (it does not throw), so `CalendarBoundary` only guards against a
render-time error — the always-present "View full profile" `IconLink` below the calendar is
the real fallback for an API outage. `colorScheme` follows `useColorMode`; the warm `theme`
scale is inline. Only the contribution grid is shown — the total-count line is hidden
(`hideTotalCount`) and the old `github-readme-stats` / `streak-stats` `<img>` embeds were
removed.

**Identity/contact data:** `src/data/site.js` holds name, role, email, phone, location, and
the GitHub/LinkedIn URLs — imported by `Home`, `Contact`, `Footer`, and `GitHubActivity`.
Change a handle there, not in JSX.
