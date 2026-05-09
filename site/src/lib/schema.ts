import { absoluteUrl, siteProfile } from "./seo";

type FAQItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

type SchemaThing = Record<string, unknown>;

type ArticleInput = {
  headline: string;
  description: string;
  url: string;
  dateModified?: string;
  datePublished?: string;
  authorName?: string;
  keywords?: string[];
};

type HowToStepInput = {
  name: string;
  text: string;
  url?: string;
};

type HowToInput = {
  name: string;
  description: string;
  url: string;
  steps: HowToStepInput[];
};

type WebApplicationInput = {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  featureList?: string[];
};

type ItemListInput = {
  name: string;
  description?: string;
  url?: string;
  items: Array<string | { name: string; url?: string; description?: string }>;
};

type DefinedTermInput = {
  name: string;
  description: string;
  url: string;
  alternateName?: string | string[];
  inDefinedTermSet?: string;
};

type SoftwareApplicationInput = {
  name?: string;
  description?: string;
  url?: string;
  softwareVersion?: string;
  featureList?: string[];
  applicationSubCategory?: string;
};

const defaultAuthor = { "@type": "Organization", name: "Pagewell team", url: siteProfile.url };
const defaultPublisher = { "@type": "Organization", name: siteProfile.name, url: siteProfile.url };

function withContext(schema: SchemaThing) {
  return {
    "@context": "https://schema.org",
    ...schema,
  };
}

function offer(price = "0") {
  return {
    "@type": "Offer",
    price,
    priceCurrency: "USD",
    url: absoluteUrl("/pricing"),
    availability: "https://schema.org/InStock",
  };
}

export function websiteSchema() {
  return withContext({
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteProfile.name,
    url: siteProfile.url,
    description: siteProfile.description,
    inLanguage: "en",
    publisher: { "@id": absoluteUrl("/#organization") },
  });
}

export function organizationSchema() {
  return withContext({
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteProfile.name,
    url: siteProfile.url,
    description: siteProfile.description,
    sameAs: ["https://github.com/ReScienceLab/pagewell"],
  });
}

export function softwareApplicationSchema(input: SoftwareApplicationInput = {}) {
  const featureList = input.featureList ?? [
    "Repo-native SEO/GEO page generation",
    "Page briefs and framework-neutral specs",
    "Metadata, schema, claim, design, and genericness QA",
    "Discovery file guidance for sitemap, robots, and llms.txt",
  ];

  return withContext({
    "@type": "SoftwareApplication",
    "@id": absoluteUrl("/products/pagewell#software"),
    name: input.name ?? siteProfile.name,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: input.applicationSubCategory ?? "Coding agent skill pack",
    operatingSystem: "Any",
    description: input.description ?? siteProfile.description,
    url: absoluteUrl(input.url ?? "/products/pagewell"),
    sameAs: ["https://github.com/ReScienceLab/pagewell"],
    softwareVersion: input.softwareVersion ?? "0.3.3",
    isAccessibleForFree: true,
    featureList,
    offers: offer(),
    publisher: { "@id": absoluteUrl("/#organization") },
  });
}

export function productSchema() {
  return withContext({
    "@type": "Product",
    name: siteProfile.name,
    description: siteProfile.description,
    url: absoluteUrl("/products/pagewell"),
    brand: { "@id": absoluteUrl("/#organization") },
    category: "Repo-native page-generation skill pack for coding agents",
    offers: offer(),
  });
}

export function pricingOfferSchema() {
  return withContext({
    ...offer(),
    name: "Pagewell open-source skill pack",
    description: "No hosted Pagewell cloud plan, paid tier, seat price, usage quota, or SLA is listed on the website today.",
  });
}

export function articleSchema(input: ArticleInput) {
  return withContext({
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.url),
    mainEntityOfPage: absoluteUrl(input.url),
    datePublished: input.datePublished ?? "2026-05-01",
    dateModified: input.dateModified ?? "2026-05-09",
    author: { ...defaultAuthor, name: input.authorName ?? "Pagewell team" },
    publisher: defaultPublisher,
    keywords: input.keywords,
  });
}

export function techArticleSchema(input: ArticleInput) {
  return withContext({
    "@type": "TechArticle",
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.url),
    mainEntityOfPage: absoluteUrl(input.url),
    datePublished: input.datePublished ?? "2026-05-01",
    dateModified: input.dateModified ?? "2026-05-09",
    author: { ...defaultAuthor, name: input.authorName ?? "Pagewell team" },
    publisher: defaultPublisher,
    proficiencyLevel: "Beginner",
    dependencies: "Bun, skills CLI, coding agent harness",
    keywords: input.keywords,
  });
}

export function howToSchema(input: HowToInput) {
  return withContext({
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url ? absoluteUrl(step.url) : undefined,
    })),
  });
}

export function webApplicationSchema(input: WebApplicationInput) {
  return withContext({
    "@type": "WebApplication",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    applicationCategory: input.applicationCategory ?? "DeveloperApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    featureList: input.featureList,
    offers: offer(),
    publisher: { "@id": absoluteUrl("/#organization") },
  });
}

export function itemListSchema(input: ItemListInput) {
  return withContext({
    "@type": "ItemList",
    name: input.name,
    description: input.description,
    url: input.url ? absoluteUrl(input.url) : undefined,
    itemListElement: input.items.map((item, index) => {
      const value = typeof item === "string" ? { name: item } : item;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: value.name,
        url: value.url ? absoluteUrl(value.url) : undefined,
        description: value.description,
      };
    }),
  });
}

export function definedTermSchema(input: DefinedTermInput) {
  return withContext({
    "@type": "DefinedTerm",
    name: input.name,
    alternateName: input.alternateName,
    description: input.description,
    url: absoluteUrl(input.url),
    inDefinedTermSet: input.inDefinedTermSet,
  });
}

export function faqPageSchema(items: FAQItem[]) {
  return withContext({
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
}

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return withContext({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  });
}
