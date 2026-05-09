import type { APIRoute } from "astro";
import { absoluteUrl } from "../lib/seo";

const pageModules = import.meta.glob("./**/*.{astro,ts}");
const extraDiscoveryRoutes = ["/llms.txt", "/llms-full.txt"];

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function routeFromPageModule(modulePath: string) {
  let route = modulePath.replace(/^\.\//, "");

  if (
    route === "sitemap.xml.ts" ||
    route.startsWith("private/") ||
    route.startsWith("og/") ||
    route.includes("[")
  ) {
    return undefined;
  }

  route = route.replace(/\.astro$/, "").replace(/\.ts$/, "");

  if (route === "index") return "/";
  if (route.endsWith("/index")) route = route.slice(0, -"/index".length);

  return `/${route}`;
}

function priorityFor(path: string) {
  if (path === "/") return "1.0";
  if (path.startsWith("/products/")) return "0.9";
  if (path.startsWith("/use-cases/") || path.startsWith("/tools/")) return "0.8";
  if (["/tools", "/pricing"].includes(path)) return "0.7";
  if (["/pricing.md", "/facts.md", "/llms.txt", "/llms-full.txt"].includes(path)) return "0.6";
  if (path.startsWith("/docs/") || path.startsWith("/alternatives/") || path.startsWith("/faq/") || path.startsWith("/glossary/")) return "0.7";
  return "0.5";
}

export const GET: APIRoute = () => {
  const routes = Array.from(
    new Set([
      ...Object.keys(pageModules).map(routeFromPageModule).filter((route): route is string => Boolean(route)),
      ...extraDiscoveryRoutes,
    ]),
  ).sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const urls = routes
    .map((path) => `  <url>
    <loc>${xmlEscape(absoluteUrl(path))}</loc>
    <priority>${priorityFor(path)}</priority>
  </url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
