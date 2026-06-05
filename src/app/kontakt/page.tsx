import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT, ROUTES, SITE } from "@/lib/constants";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Kontakt – Glasklart Fönsterputs & Städ Kristianstad",
  description:
    "Kontakta oss för fönsterputs och städning i Kristianstad. Mobil 076-285 53 34, kontor 044-478 53 002. Kostnadsfri offert via vårt formulär.",
  path: ROUTES.contact,
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: "/" },
          { name: "Kontakt", url: ROUTES.contact },
        ])}
      />
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Kontakta oss
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Vi svarar snabbt och erbjuder alltid kostnadsfri offert. Ring oss
            direkt eller begär offert via vårt formulär.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card-premium p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                Mobil
              </p>
              <a
                href={CONTACT.mobileHref}
                className="mt-2 block text-2xl font-bold text-foreground hover:text-brand-600"
              >
                {CONTACT.mobile}
              </a>
            </div>
            <div className="card-premium p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                Kontor
              </p>
              <a
                href={CONTACT.officeHref}
                className="mt-2 block text-2xl font-bold text-foreground hover:text-brand-600"
              >
                {CONTACT.office}
              </a>
            </div>
          </div>

          <div className="mt-10 card-premium p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Vill du ha en offert?
            </h2>
            <p className="mt-2 text-muted">
              Fyll i vårt formulär så återkommer vi inom 24 timmar.
            </p>
            <div className="mt-6">
              <Button href={ROUTES.quote} size="lg">
                Få Gratis Offert
              </Button>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-surface p-6 text-sm text-muted">
            <p className="font-semibold text-foreground">{SITE.name}</p>
            <p className="mt-2">Verksamheten drivs av {CONTACT.company}</p>
            <p>Org.nr: {CONTACT.orgNumber}</p>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
