# Skill: QA Page

## Purpose

Review a generated or modified page for SEO, GEO, design consistency, routing, schema, sitemap behavior, and factual correctness.

## Inputs

- `SITE_PROFILE.md`
- `DESIGN.md`
- product facts
- page brief/spec if available
- generated/modified page files
- discovery files if changed

## Checks

### Routing

- Requested route exists.
- Route matches site conventions.
- Page can be built/rendered by the site's build system where possible.
- No public navigation link added for private pages.

### Metadata

- Unique title.
- Unique meta description.
- One H1.
- Canonical URL for indexable pages.
- `noindex,nofollow` for private pages.
- Open Graph/Twitter tags where site supports them.

### Schema

- JSON-LD is valid JSON.
- `FAQPage` schema only appears when visible FAQ exists.
- FAQ schema questions/answers match visible copy.
- `SoftwareApplication` facts are supported by product facts.
- `BreadcrumbList` URLs are correct.

### Discovery

- Indexable pages appear in sitemap if the site maintains a sitemap.
- `noindex` pages do not appear in sitemap.
- `robots.txt` does not block indexable pages.
- `llms.txt` remains factual if updated.

### Design

- `DESIGN.md` conforms to the Google Labs Code `DESIGN.md` spec with zero linter errors when validation is possible.
- Page follows `DESIGN.md` tokens and prose.
- Existing components/layouts are reused where possible.
- No new visual system, random colors, or inconsistent spacing.
- Mobile behavior follows existing site conventions.

### Content and claims

- Product claims come from canonical facts or the brief.
- No invented metrics, customers, testimonials, ratings, prices, or integrations.
- Competitor/alternative pages pass `claim-check.md`.
- Page answers its stated intent directly.

### Conversion

- Primary CTA exists.
- Product command/copy UI exists if applicable.
- Outbound links are correct.
- Contact/email links are correct.

### Free tool pages

For `pageType: free-tool`:

- Tool provides a useful result without authentication.
- Tool interface is visible above the fold or immediately after the hero.
- Inputs have labels, validation, and helpful errors.
- Output has copy/download/share action where relevant.
- Lead capture, if present, does not block first value.
- `WebApplication` schema is present for indexable tool pages.
- `offers.price` is `0` when claiming the tool is free.
- Tool usage/product CTA events follow existing analytics conventions if analytics exists.

## Output

Return a concise QA report:

```md
# QA Report: <route>

Status: PASS | PASS WITH NOTES | FAIL

## Checked files
- ...

## Findings
- [pass] ...
- [warn] ...
- [fail] ...

## Required fixes
- ...

## Suggested improvements
- ...
```

## Rules

- If a build/test command exists and is safe, run it.
- Do not silently ignore failures.
- Prefer fixing small issues immediately when in scope.
- Ask before broad refactors.
