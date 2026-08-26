# development

This repository contains Luca Mancini's Astro blog.

## run it locally

```sh
npm install
npm run dev
```

Astro serves the site at `http://localhost:4321` by default.

## useful commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run build` | Check and create the static production build |
| `npm run preview` | Preview the production build locally |

## add a note

Create a Markdown file in `src/content/blog`. The frontmatter schema is:

```yaml
title: "your lowercase title"
description: "a concise summary."
publishedAt: 2026-08-26
readingTime: "4 min read"
topics:
  - "product design"
draft: false
```

## editorial style

- Write article titles and headings in lowercase.

Set `site` in `astro.config.mjs` when the production domain is known. Canonical
metadata is intentionally omitted until then, so local URLs cannot leak into a
production build.
