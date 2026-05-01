import { absoluteUrl, siteProfile } from "./seo";

type FAQItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteProfile.name,
    url: siteProfile.url,
    description: siteProfile.description,
    inLanguage: "en",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteProfile.name,
    url: siteProfile.url,
    description: siteProfile.description,
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteProfile.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    description: siteProfile.description,
    url: siteProfile.url,
    softwareVersion: "alpha",
  };
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}
