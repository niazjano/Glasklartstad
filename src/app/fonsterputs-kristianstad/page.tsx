import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { FonsterputsContent } from "@/content/fonsterputs-content";
import { FONSTERPUTS_FAQS } from "@/lib/faq-data";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import {
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Fönsterputs Kristianstad – Professionell Fönsterputsare",
  description:
    "Professionell fönsterputs i Kristianstad för villor, lägenheter, företag och butiker. Erfarna fönsterputsare. Kostnadsfri offert. Ring 076-285 53 34.",
  path: "/fonsterputs-kristianstad",
  keywords: [
    "Fönsterputsning Kristianstad",
    "Fönsterputs Kristianstad",
    "Fönsterputsare Kristianstad",
    "Professionell Fönsterputs Kristianstad",
  ],
});

export default function FonsterputsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            "Fönsterputs Kristianstad",
            "Professionell fönsterputs för villor, lägenheter och företag i Kristianstad.",
            `${SITE.url}/fonsterputs-kristianstad`
          ),
          breadcrumbSchema([
            { name: "Hem", url: "/" },
            { name: "Fönsterputs Kristianstad", url: "/fonsterputs-kristianstad" },
          ]),
          faqSchema(FONSTERPUTS_FAQS),
        ]}
      />
      <ServicePageLayout
        title="Fönsterputs Kristianstad"
        subtitle="Professionell fönsterputs för villor, lägenheter, företag och butiker. Skinande rena fönster av erfarna fönsterputsare i Kristianstad."
        image={IMAGES.hero}
        imageAlt="Professionell fönsterputs Kristianstad – fönsterputsare rengör fönster på villa"
      >
        <FonsterputsContent />
      </ServicePageLayout>
      <FAQSection
        faqs={FONSTERPUTS_FAQS}
        title="Frågor om fönsterputs"
        subtitle="Vanliga frågor om vår fönsterputsservice i Kristianstad."
      />
      <CTABanner />
    </>
  );
}
