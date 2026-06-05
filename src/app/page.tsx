import { AboutSection } from "@/components/sections/AboutSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/JsonLd";
import { HOME_FAQS } from "@/lib/faq-data";
import { faqSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <WhyChooseUs />
      <CTASection
        variant="surface"
        title="Få en kostnadsfri offert idag"
        description="Professionell fönsterputs i Kristianstad med erfarna fönsterputsare. Vi återkommer inom 24 timmar med ett tydligt prisförslag – helt utan förpliktelser."
        primaryLabel="Begär Offert"
      />
      <ServicesSection />
      <CTASection
        variant="light"
        title="Behöver du hjälp med städning?"
        description="Utöver fönsterputs erbjuder vi hemstädning, flyttstädning och kontorsstädning i Kristianstad och närområdet."
        primaryLabel="Kontakta Oss"
      />
      <ProcessSection />
      <AboutSection />
      <CTASection
        variant="dark"
        title="Redo för skinande rena fönster?"
        description="Boka professionell fönsterputs i Kristianstad idag. Kostnadsfri offert, snabb service och nöjd-kund-garanti."
      />
      <AreasSection />
      <FAQSection faqs={HOME_FAQS} />
      <CTABanner />
    </>
  );
}
