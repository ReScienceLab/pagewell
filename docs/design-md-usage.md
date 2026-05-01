# DESIGN.md Usage

`DESIGN.md` is the design contract for all Sitewright skills.

Agents must read it before generating or modifying pages.

## What it should contain

- brand overview
- color tokens
- typography tokens
- spacing/radius tokens
- component guidance
- layout constraints
- do's and don'ts

## How page skills should use it

- Reuse existing visual patterns.
- Do not introduce random colors or fonts.
- Use existing layout widths and card/button styles.
- Keep the brand personality consistent.

## Validation

If available, run:

```bash
npx @google/design.md lint DESIGN.md
```
