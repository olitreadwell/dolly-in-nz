# Dolly In Welly

Single-page memorial for Dolly Parton (19 January 1946 - 25 August 2026),
built with a Wellington, New Zealand twist and deployed to GitHub Pages at
https://olitreadwell.github.io/dolly-in-welly/.

## Run it

```sh
npm install
npm run dev        # http://localhost:3000/dolly-in-welly
npm run check      # full gate: format, lint, typecheck, tests, build, smoke, e2e
```

## How it is built

- Next.js static export (`output: 'export'`) with `basePath: '/dolly-in-welly'`,
  deployed by `.github/workflows/pages.yml` to GitHub Pages.
- Tailwind 4 theme: deep green ink, rhinestone gold accent, Cormorant
  Garamond display serif. Dark page locked, `prefers-reduced-motion`
  respected, sharp corners, no em-dashes.
- All copy and sources live in `src/data/memorialContent.ts`. Every fact is
  sourced to RNZ, the NZ Herald archive, Wikipedia tour records, or the
  Dollywood Foundation. Nothing is invented.
- Photographs are Wikimedia Commons files under their licenses. Credits
  appear inline in the gallery and in `public/images/ATTRIBUTION.md`.

## Gathering Dolly-in-Wellington material

This repo is the home of the Dolly-in-Welly research. The public library
`olitreadwell/nz-open-data-connectors` (NZ public data connectors) stays
separate and can be used as a tool to search data.govt.nz, DigitalNZ and
other NZ open data sources for Dolly Parton coverage. Sources found there
belong in this repo, never in the library.

[![CI](https://github.com/olitreadwell/template/actions/workflows/ci.yml/badge.svg)](https://github.com/olitreadwell/template/actions/workflows/ci.yml)

Opinionated starter template for new repos: quality gates, automation, and
docs wired in from day one. Scaffold a new project in minutes, not days.

## Quick start

```bash
gh repo create my-project --template olitreadwell/template --private
cd my-project
npm install
npm run setup      # interactive scaffolder (rename, scope, deploy target)
npm run dev        # http://localhost:3000
```

## Commands

| Command | Purpose | CI gate |
| --- | --- | --- |
| `npm run dev` | Dev server | |
| `npm run build` | Production build | Blocking |
| `npm run typecheck` | `tsc --noEmit` | Blocking |
| `npm run lint` | ESLint | Blocking |
| `npm run format:check` | Prettier check | Blocking |
| `npm test` | Vitest unit/component | Blocking |
| `npm run test:coverage` | Coverage gate | Blocking |
| `npm run test:e2e` | Playwright | Blocking |
| `npm run smoke` | Boot + curl routes | Blocking |
| `npm run check:links` | Internal link integrity | Blocking |
| **`npm run check`** | All of the above | Mirrored 1:1 |
| `npm run audit` | Dependency audit | Advisory |

## Tech stack

- Next.js App Router, React 19, TypeScript strict
- Tailwind CSS 4 + shadcn/ui
- Vitest + Testing Library + vitest-axe; Playwright e2e
- ESLint 9 flat config + Prettier; husky pre-commit/pre-push
- Zod validation at the boundary, pino structured logs, centralized errors
- Multi-stage Dockerfile with `HEALTHCHECK` on `/health`

## Documentation

- [Onboarding](docs/onboarding.md)
- [Engineering standards](docs/engineering.md)
- [Style guide](docs/style-guide.md)
- [LLM-agent-optimized writing](docs/llm-agent-optimization.md)
- [Testing guide](docs/testing.md)
- [Deployment](docs/deploy.md)
- [Philosophy](docs/philosophy.md)
- [Contributing guide](docs/contributing/00-index.md)

## Agent-first repo

`AGENTS.md` + `CLAUDE.md` tell AI agents exactly how this repo works, what
the quality bar is, and how to verify changes. See
[docs/llm-agent-optimization.md](docs/llm-agent-optimization.md) for why the
repo is written the way it is.
