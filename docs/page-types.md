# Page Types

Sitewright supports a small set of durable page archetypes.

## Product page

Route pattern: `/products/<product>`

Purpose: canonical product/entity page.

Best for: product name searches, internal linking, product overview, conversion.

## Use-case page

Route pattern: `/use-cases/<job-or-intent>`

Purpose: answer a real job-to-be-done query and map it to a product.

Best for: SEO/GEO, long-tail search, product education.

## Alternative/comparison page

Route pattern: `/alternatives/<target>` or `/compare/<a-vs-b>`

Purpose: help high-intent users decide between options.

Best for: factual product positioning. Requires claim checking.

## LP/campaign page

Route pattern: `/lp/<campaign>`

Purpose: conversion-focused page for a campaign, ad, launch, or experiment.

Best for: paid traffic and message matching. Often `noindex`.

## Private/ABM page

Route pattern: `/private/<account>` or `/accounts/<account>`

Purpose: personalized outbound or sales follow-up.

Best for: direct sharing. Always `noindex,nofollow` and excluded from sitemap.

## Docs/tutorial page

Route pattern: `/docs/<task>`

Purpose: help users complete a technical task.

Best for: developer intent, support, AI citations.
