import type { Metadata } from "next";
import { CONTACT, SITE } from "./constants";
import { IMAGES } from "./images";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = IMAGES.hero,
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "Fönsterputs Kristianstad",
      "Fönsterputsare Kristianstad",
      "Städfirma Kristianstad",
      ...keywords,
    ],
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    alternateName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: [CONTACT.mobile, CONTACT.office],
    image: `${SITE.url}/images/hero-fonsterputs.png`,
    logo: `${SITE.url}/logo.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kristianstad",
      addressRegion: "Skåne",
      postalCode: "291 00",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 56.0294,
      longitude: 14.1567,
    },
    areaServed: [
      { "@type": "City", name: "Kristianstad" },
      { "@type": "City", name: "Åhus" },
      { "@type": "City", name: "Bromölla" },
      { "@type": "City", name: "Fjälkinge" },
      { "@type": "City", name: "Tollarp" },
      { "@type": "City", name: "Arkelstorp" },
      { "@type": "City", name: "Degeberga" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Städtjänster",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fönsterputs Kristianstad",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hemstädning Kristianstad",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flyttstädning Kristianstad",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kontorsstädning Kristianstad",
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: CONTACT.company,
      taxID: CONTACT.orgNumber,
    },
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      "@type": "City",
      name: "Kristianstad",
    },
  };
}

export function faqSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}
