export const siteProfile = {
  name: "Pagewell",
  url: "https://pagewell.dev",
  defaultTitle: "Pagewell — Turn page briefs into production website code",
  description:
    "Pagewell helps coding agents turn page briefs into search-ready website code with routes, metadata, schema, QA, and discovery updates.",
  ogImage: "/og.png",
};

export type SEOInput = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function withSiteTitle(title?: string, options: { appendBrand?: boolean } = {}) {
  if (!title) return siteProfile.defaultTitle;
  if (title.includes(siteProfile.name)) return title;
  return options.appendBrand ? `${title} — ${siteProfile.name}` : title;
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteProfile.url).toString();
}

export function ogImageForPath(path = "/") {
  const normalized = path === "/" || path === "" ? "home" : path.replace(/^\//, "").replace(/\/$/, "");
  return `/og/${normalized}.svg`;
}
