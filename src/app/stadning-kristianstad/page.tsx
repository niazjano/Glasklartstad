import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import {
  STADNING_FAQS,
  StadningKristianstadContent,
} from "@/content/stadning-kristianstad-content";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import {
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Städning Kristianstad – Städfirma & Professionell Städservice",
  description:
    "Professionell städning i Kristianstad. Städfirma med hemstädning, kontorsstädning och fönsterputs. Kostnadsfri offert. Ring 076-285 53 34.",
  path: "/stadning-kristianstad",
  keywords: [
    "Städning Kristianstad",
    "Städfirma Kristianstad",
    "Hemstädning Kristianstad",
  ],
  ogImage: IMAGES.hemstadning,
});

export default function StadningKristianstadPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            "Städning Kristianstad",
            "Professionell städning och städservice i Kristianstad.",
            `${SITE.url}/stadning-kristianstad`
          ),
          breadcrumbSchema([
            { name: "Hem", url: "/" },
            { name: "Städning Kristianstad", url: "/stadning-kristianstad" },
          ]),
          faqSchema(STADNING_FAQS),
        ]}
      />
      <ServicePageLayout
        title="Städning Kristianstad"
        subtitle="Professionell städning för hem och företag. Din lokala städfirma i Kristianstad med fokus på kvalitet och nöjda kunder."
        image={IMAGES.hemstadning}
        imageAlt="Professionell städning i Kristianstad"
      >
        <StadningKristianstadContent />
      </ServicePageLayout>
      <FAQSection
        faqs={STADNING_FAQS}
        title="Frågor om städning"
        subtitle="Vanliga frågor om vår städservice i Kristianstad."
      />
      <CTABanner />
    </>
  );
}
