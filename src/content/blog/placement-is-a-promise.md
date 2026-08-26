---
title: "placement is a promise"
description: "A page quietly teaches people where things live. Moving an action makes them search again."
publishedAt: 2026-08-26
readingTime: "2 min read"
topics:
  - "product design"
  - "user experience"
---

We’ve been working on project templates in Operately. [This PR has before-and-after screenshots](https://github.com/operately/operately/pull/5133) from a cleanup of the library page.

The create action originally lived inside the empty state. Once someone created a template, its natural home became the page header. The first use taught one location, and every later visit used another.

Other sections in Operately already kept their create actions in the upper-left corner. We followed that pattern for templates and left the middle of the empty page for a short explanation.

A page quietly teaches people where things live. Moving an action makes them search again, even when the new location feels obvious during a design review.

This changed how I work on empty states. I start with the populated page because it reveals the structure people will use over time. Removing the data should leave that structure intact. The empty space can help someone understand what belongs there.

It also makes secondary controls easier to judge. Search has little work to do with one template. An archive filter becomes useful after something has been archived. Each control can appear when the data gives it a clear job.

When reviewing a page like this, open the populated version first, then remove its records while watching which controls lose their purpose. Keep the main action where a returning user will expect it.
