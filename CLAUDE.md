# Claude working notes

## Project

Personal site for Zhangda Xu (`silmari.org`). Astro 5 + Tailwind 4, deployed on Vercel.

## Don't run `npm run dev` in agent mode

It blocks the loop. Use `npm run build` to verify changes.

## Don't write blog posts unsolicited

Only edit existing posts when asked. Ask before scaffolding new ones.

## Stack notes

- Content lives in `src/content/blog/<year>/<slug>.md` and is loaded via the `glob()` loader in `src/content.config.ts`. Frontmatter schema is enforced there — update it before adding new fields.
- Single layout: `src/layouts/Layout.astro`. No alternate layout system.
- Routes: `/` (post list), `/posts/<id>` (detail, where id is `<year>/<slug>`), `/rss.xml`, `/404`.
- Styles: Tailwind v4 via `@tailwindcss/vite`. Global file at `src/styles/global.css` uses the `@import "tailwindcss"` + `@plugin "@tailwindcss/typography"` syntax (no `tailwind.config.js`).
- Path alias: `@/*` → `src/*` (set in both `tsconfig.json` and `astro.config.mjs`).

## Deployment

Vercel auto-detects Astro. Config in `vercel.json` is intentionally minimal — only security headers. Analytics + Speed Insights run via `@vercel/analytics/astro` and `@vercel/speed-insights/astro` injected from `Layout.astro`.
