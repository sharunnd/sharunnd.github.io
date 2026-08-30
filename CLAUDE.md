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

Single-page vertical-scroll site. `src/index.js` wraps `<App/>` in Chakra's
`ChakraProvider` + `CSSReset` + React `StrictMode`. `src/App.js` renders a fixed `Navbar`
followed by section components in order: `Home`, `About`, `Skills`, `Calender`, `Projects`,
then a floating `ScrollIcon`.

**Scroll navigation contract (`react-scroll`):** every section component wraps its content in
`<Element name="...Section">` (e.g. `homeSection`, `aboutSection`, `skillsSection`,
`projectSection`, `contactSection`). `Navbar` uses `<Link to="...Section" smooth>` with the
matching names. Keep the `name` in a section and the `to` in `Navbar` in sync, or that nav
link silently stops scrolling. `Calender` has no `Element` wrapper and no nav link.

**Styling:** Chakra UI is the primary system — components are styled with inline props and
responsive breakpoint objects `{ base, sm, md, lg }`. Brand color is `#1DA1F2` (Twitter
blue), repeated as a literal throughout; light background is `#EDF2F7`. A little plain CSS
supplements it: `src/App.css`, `src/index.css`, `src/custom-scroll-bar.css` (imported in
`App.js`). `Navbar` additionally does its own JS breakpoint check (`window.innerWidth <= 768`)
to swap between the desktop link row and a mobile hamburger menu — it does not use Chakra
breakpoints for that.

**Content** is hardcoded in JSX. Project cards in `src/components/Projects.jsx` and skill
badges in `src/components/Skills.jsx` are copy-pasted blocks — add a project/skill by
duplicating an existing block. Images are imported from `src/images/`.

**Resume:** `src/resume.js` `handleResume()` fetches `Sharun-ND-Resume.pdf` from `public/`,
forces a download, and opens it in a new tab. Called from both `Navbar` and `About`. Replace
the resume by overwriting `my-portfolio/public/Sharun-ND-Resume.pdf`.

**External services in `src/components/Calender.jsx`:** `react-github-calendar` plus live
`<img>` embeds from `github-readme-stats.vercel.app` and `github-readme-streak-stats.herokuapp.com`,
all hardcoded to GitHub username `sharunnd`. These render blank if the third-party services
are down.
