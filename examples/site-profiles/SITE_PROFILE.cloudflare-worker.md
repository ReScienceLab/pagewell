# SITE_PROFILE.md

Generated: 2026-05-01

## Summary

Framework: Cloudflare Worker
Rendering: edge worker HTML responses
Routing: manual request routing in `worker.js`
Styling: inline CSS in `worker.js`
Components: none; HTML strings and helper constants
Layouts: single inline HTML shell
Content: inline JavaScript objects/strings
Metadata: manual HTML head tags
Discovery files: `/robots.txt` and `/sitemap.xml` served by Worker; `/llms.txt` absent
Deployment: Wrangler / Cloudflare Workers

## Conventions to follow

- Prefer a shared page registry before adding many pages.
- Serve discovery files as explicit Worker routes.
- Keep generated HTML static and fast.
- Preserve existing visual design.

## Recommended adapter

Use `adapters/cloudflare-worker.md`.

## Known gaps

- Current site may be one large inline homepage.
- No reusable metadata renderer unless added.
- No `llms.txt` unless added.

## Safe implementation strategy

Refactor to a small `PAGES` registry with shared render helpers before adding many SEO pages.
