# Skill: Generate Docs / Tutorial Page

## Purpose

Generate a technical docs, install, tutorial, or troubleshooting page.

Docs pages should be concrete, command-forward, and easy for humans and AI systems to cite.

## Required inputs

- `SITE_PROFILE.md`
- `DESIGN.md`
- product facts
- page brief with task, route, audience, prerequisites, commands, expected output, and troubleshooting notes

## Framework-neutral page spec

```yaml
route: /docs/<slug>
pageType: docs
title: <task-oriented docs title>
description: <what the reader can accomplish>
h1: <task-oriented H1>
product: <product-slug>
noindex: false
sections:
  - overview
  - prerequisites
  - quickstart
  - examples
  - troubleshooting
  - faq
  - related-links
schema:
  - WebPage
  - BreadcrumbList
  - FAQPage
```

## Required structure

1. Overview: what this doc helps with.
2. Prerequisites.
3. Quickstart commands.
4. Step-by-step instructions.
5. Examples.
6. Troubleshooting.
7. Related docs/product links.

## Content rules

- Commands must be copyable and exact.
- Do not invent flags, APIs, or behavior.
- Include expected outputs only if known.
- If something is unknown, ask or mark it clearly.

## Implementation rules

- Read the recommended adapter from `SITE_PROFILE.md`.
- Follow existing docs/content conventions if present.
- Reuse code block and command components if available.

## Acceptance criteria

- Page teaches a real task.
- Commands are visible and copyable where supported.
- Page passes `qa-page.md`.
