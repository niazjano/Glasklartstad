import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { KontorsstadningContent } from "@/content/kontorsstadning-content";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbSchema, createMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Kontorsstädning Kristianstad – Städning för Företag",
  description:
    "Professionell kontorsstädning i Kristianstad för företag och kontor. Renare arbetsmiljö, nöjdare medarbetare. Kostnadsfri offert.",
  path: "/kontorsstadning-kristianstad",
  keywords: ["Kontorsstädning Kristianstad"],
  ogImage: IMAGES.kontorsstadning,
});

export default function KontorsstadningPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            "Kontorsstädning Kristianstad",
            "Professionell kontorsstädning för företag i Kristianstad.",
            `${SITE.url}/kontorsstadning-kristianstad`
          ),
          breadcrumbSchema([
            { name: "Hem", url: "/" },
            { name: "Kontorsstädning Kristianstad", url: "/kontorsstadning-kristianstad" },
          ]),
        ]}
      />
      <ServicePageLayout
        title="Kontorsstädning Kristianstad"
        subtitle="Professionell kontorsstädning för företag i Kristianstad. Renare arbetsmiljö, nöjdare medarbetare och ett professionellt intryck."
        image={IMAGES.kontorsstadning}
        imageAlt="Kontorsstädning Kristianstad – professionell städservice för företag"
      >
        <KontorsstadningContent />
      </ServicePageLayout>
      <CTABanner />
    </>
  );
}
