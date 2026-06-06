import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { FlyttstadningContent } from "@/content/flyttstadning-content";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbSchema, createMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Flyttstädning Kristianstad – Godkänd Städning",
  description:
    "Professionell flyttstädning i Kristianstad enligt branschstandard. Godkänd städning vid inflyttning och utflyttning. Kostnadsfri offert.",
  path: "/flyttstadning-kristianstad",
  keywords: ["Flyttstädning Kristianstad"],
  ogImage: IMAGES.squeegee,
});

export default function FlyttstadningPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            "Flyttstädning Kristianstad",
            "Grundlig flyttstädning i Kristianstad enligt branschstandard.",
            `${SITE.url}/flyttstadning-kristianstad`
          ),
          breadcrumbSchema([
            { name: "Hem", url: "/" },
            { name: "Flyttstädning Kristianstad", url: "/flyttstadning-kristianstad" },
          ]),
        ]}
      />
      <ServicePageLayout
        title="Flyttstädning Kristianstad"
        subtitle="Grundlig flyttstädning enligt branschstandard. Godkänd städning vid inflyttning och utflyttning i Kristianstad."
        image={IMAGES.squeegee}
        imageAlt="Flyttstädning Kristianstad – professionell städservice"
      >
        <FlyttstadningContent />
      </ServicePageLayout>
      <CTABanner />
    </>
  );
}
