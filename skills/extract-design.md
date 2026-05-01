# Skill: Extract Design

## Purpose

Create or update `DESIGN.md`, the website's durable visual identity contract for agents.

`DESIGN.md` should combine machine-readable design tokens with prose that explains how to apply the style.

## Inputs

- `SITE_PROFILE.md` if present.
- Existing homepage, layouts, components, global CSS, Tailwind config, or inline styles.
- Existing logo/icon SVGs and product cards.
- Optional screenshots or visual references supplied by the user.

## Output

Create or update `DESIGN.md` at the repo root using the `DESIGN.md` format:

```md
---
version: alpha
name: <Design system name>
description: <short style description>
colors:
  primary: "#..."
typography:
  h1:
    fontFamily: ...
    fontSize: ...
rounded:
  sm: ...
spacing:
  sm: ...
components:
  button-primary:
    backgroundColor: "{colors.primary}"
---

## Overview
...
```

## Process

1. Read `SITE_PROFILE.md` if available.
2. Identify the canonical visual surface, usually the homepage or main marketing layout.
3. Extract exact values where possible:
   - colors
   - font families
   - font sizes and weights
   - max widths
   - spacing scale
   - borders, radii, shadows
   - button/card/input styles
4. Write prose sections explaining:
   - brand feeling
   - when to use accent colors
   - layout rules
   - component rules
   - do's and don'ts
5. If values are inconsistent, choose the most common/canonical value and note exceptions.
6. If the repo can run the linter, validate with:

```bash
npx @google/design.md lint DESIGN.md
```

## Rules

- Do not invent a different visual system.
- Prefer exact values from source code over guessed values.
- Preserve existing brand personality.
- Keep prose actionable for page-generation agents.
- Do not refactor the site while extracting design.

## Acceptance criteria

- `DESIGN.md` exists at repo root.
- It includes tokens and human-readable rules.
- It includes component guidance for at least buttons, cards, command/code blocks, and page layout when those exist.
- It says what not to do visually.
