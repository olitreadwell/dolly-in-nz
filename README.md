# Starter Template

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
