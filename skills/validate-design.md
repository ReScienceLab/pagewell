# Skill: Validate Design

## Purpose

Validate that `DESIGN.md` strictly conforms to the Google Labs Code `DESIGN.md` specification.

Use this after `extract-design.md` and before any page-generation skill that relies on `DESIGN.md`.

## Normative specification

- Canonical spec repo: https://github.com/google-labs-code/design.md
- CLI/package: `@google/design.md`
- Spec command: `npx @google/design.md spec --rules`
- Lint command: `npx @google/design.md lint DESIGN.md`

## Inputs

- `DESIGN.md`
- optional current Google spec output from `npx @google/design.md spec --rules`

## Process

1. Confirm `DESIGN.md` exists at the repo root.
2. Run, when possible:

   ```bash
   npx @google/design.md lint DESIGN.md
   ```

3. If the command is unavailable, inspect manually against the Google spec:
   - YAML front matter begins and ends with exact `---` fences.
   - Token schema uses only Google DESIGN.md token groups:
     - `version`
     - `name`
     - `description`
     - `colors`
     - `typography`
     - `rounded`
     - `spacing`
     - `components`
   - Colors are hex sRGB strings beginning with `#`.
   - Dimensions use `px`, `em`, or `rem`.
   - Token references use `{path.to.token}`.
   - Component properties use Google component token properties where possible.
   - `##` sections appear in canonical order.
   - There are no duplicate section headings.
4. Fix all linter errors.
5. Address warnings when practical, especially contrast, section order, missing primary color, and missing typography.

## Output

Return a concise validation report:

```md
# DESIGN.md Validation

Status: PASS | PASS WITH WARNINGS | FAIL

## Command
- `npx @google/design.md lint DESIGN.md`

## Findings
- ...

## Fixes applied
- ...
```

## Acceptance criteria

- Linter reports zero errors.
- If warnings remain, they are documented and acceptable.
- Page-generation skills can safely treat `DESIGN.md` as the design source of truth.
