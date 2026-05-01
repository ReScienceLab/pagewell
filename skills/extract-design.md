# Skill: Extract Design

## Purpose

Create or update `DESIGN.md`, the website's durable visual identity contract for agents.

`DESIGN.md` **must strictly conform to the Google Labs Code `DESIGN.md` specification**:

- Canonical spec repo: https://github.com/google-labs-code/design.md
- CLI/package: `@google/design.md`
- Spec command: `npx @google/design.md spec --rules`
- Lint command: `npx @google/design.md lint DESIGN.md`

Treat the Google spec as normative. Do not invent a parallel Sitewright design format.

## Inputs

- `SITE_PROFILE.md` if present.
- Existing homepage, layouts, components, global CSS, Tailwind config, or inline styles.
- Existing logo/icon SVGs and product cards.
- Optional screenshots or visual references supplied by the user.

## Required output

Create or update `DESIGN.md` at the repo root.

The file must contain:

1. Optional YAML front matter delimited by exact `---` lines.
2. Markdown prose sections using `##` headings.
3. Tokens and sections that validate under `@google/design.md`.

Minimal valid shape:

```md
---
version: alpha
name: <Design system name>
description: <short style description>
colors:
  primary: "#000000"
typography:
  body-md:
    fontFamily: <font family>
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 4px
spacing:
  sm: 8px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: 12px
---

## Overview

...

## Colors

...

## Typography

...

## Layout

...

## Elevation & Depth

...

## Shapes

...

## Components

...

## Do's and Don'ts

...
```

## Google DESIGN.md constraints to follow

### Token schema

Use only the schema accepted by the Google spec in YAML front matter:

```yaml
version: <string>          # optional; current version is "alpha"
name: <string>
description: <string>      # optional
colors:
  <token-name>: <Color>
typography:
  <token-name>: <Typography>
rounded:
  <scale-level>: <Dimension>
spacing:
  <scale-level>: <Dimension | number>
components:
  <component-name>:
    <token-name>: <string | token reference>
```

### Token value formats

- `Color`: hex sRGB string beginning with `#`, e.g. `"#0047AB"`.
- `Dimension`: string with `px`, `em`, or `rem`, e.g. `24px`, `1.5rem`, `-0.02em`.
- `lineHeight`: dimension or unitless number.
- `fontWeight`: number or numeric string.
- token reference: `{path.to.token}`, e.g. `{colors.primary}`.

### Typography properties

Allowed typography properties include:

- `fontFamily`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `letterSpacing`
- `fontFeature`
- `fontVariation`

### Component property tokens

Use the Google component token properties when possible:

- `backgroundColor`
- `textColor`
- `typography`
- `rounded`
- `padding`
- `size`
- `height`
- `width`

Unknown component properties are allowed by the spec but produce warnings. Avoid them unless the design cannot be expressed otherwise.

### Section order

Sections can be omitted when not relevant, but any included `##` sections must appear in this canonical order:

1. `## Overview` or `## Brand & Style`
2. `## Colors`
3. `## Typography`
4. `## Layout` or `## Layout & Spacing`
5. `## Elevation & Depth` or `## Elevation`
6. `## Shapes`
7. `## Components`
8. `## Do's and Don'ts`

Do not duplicate section headings.

## Process

1. Read `SITE_PROFILE.md` if available.
2. If internet/package execution is available, inspect the current Google spec with:

   ```bash
   npx @google/design.md spec --rules
   ```

3. Identify the canonical visual surface, usually the homepage or main marketing layout.
4. Extract exact values where possible:
   - colors
   - font families
   - font sizes, weights, line heights, letter spacing
   - max widths and layout rhythm
   - spacing scale
   - borders, radii, shadows/depth strategy
   - button, card, command/code block, input, and navigation styles
5. Create or update `DESIGN.md` using the Google schema and section order.
6. Prefer token references in `components` so tokens are not orphaned.
7. Validate the result:

   ```bash
   npx @google/design.md lint DESIGN.md
   ```

8. Fix all linter errors. Address warnings when practical, especially:
   - missing `primary` color
   - missing typography
   - broken references
   - low contrast
   - out-of-order sections

## Rules

- Strictly use the Google Labs Code `DESIGN.md` spec.
- Do not invent a Sitewright-specific design format.
- Do not add arbitrary YAML groups outside the spec unless they are intentionally non-normative and do not break linting.
- Prefer exact values from source code over guessed values.
- Preserve existing brand personality.
- Keep prose actionable for page-generation agents.
- Do not refactor the site while extracting design.
- Do not proceed with a `DESIGN.md` that has linter errors unless the user explicitly accepts the failure.

## Acceptance criteria

- `DESIGN.md` exists at repo root.
- It conforms to the Google Labs Code `DESIGN.md` spec.
- `npx @google/design.md lint DESIGN.md` reports zero errors.
- It includes machine-readable tokens and human-readable rationale.
- It includes component guidance for at least buttons, cards, command/code blocks, and page layout when those patterns exist.
- It says what not to do visually.
