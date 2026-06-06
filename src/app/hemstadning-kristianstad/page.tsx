import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { HemstadningContent } from "@/content/hemstadning-content";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbSchema, createMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Hemstädning Kristianstad – Professionell Städservice",
  description:
    "Professionell hemstädning i Kristianstad. Regelbunden städning med fokus på kvalitet och detaljer. Kostnadsfri offert. Ring 076-285 53 34.",
  path: "/hemstadning-kristianstad",
  keywords: ["Hemstädning Kristianstad"],
  ogImage: IMAGES.hemstadning,
});

export default function HemstadningPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            "Hemstädning Kristianstad",
            "Professionell hemstädning i Kristianstad med fokus på kvalitet och detaljer.",
            `${SITE.url}/hemstadning-kristianstad`
          ),
          breadcrumbSchema([
            { name: "Hem", url: "/" },
            { name: "Hemstädning Kristianstad", url: "/hemstadning-kristianstad" },
          ]),
        ]}
      />
      <ServicePageLayout
        title="Hemstädning Kristianstad"
        subtitle="Professionell hemstädning med fokus på kvalitet, detaljer och din trygghet. Vi hjälper dig i Kristianstad och närområdet."
        image={IMAGES.hemstadning}
        imageAlt="Professionell hemstädning i Kristianstad – städare moppar golv i modernt hem"
      >
        <HemstadningContent />
      </ServicePageLayout>
      <CTABanner />
    </>
  );
}
