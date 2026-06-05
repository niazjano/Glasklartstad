import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT, ROUTES, SITE } from "@/lib/constants";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gratis Offert – Fönsterputs & Städning Kristianstad",
  description:
    "Begär en kostnadsfri offert på fönsterputs eller städning i Kristianstad. Snabb återkoppling inom 24 timmar. Ring 076-285 53 34.",
  path: ROUTES.quote,
  keywords: [
    "Fönsterputs Kristianstad offert",
    "Städfirma Kristianstad offert",
    "Kostnadsfri offert fönsterputs",
  ],
});

export default function GratisOffertPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: "/" },
          { name: "Gratis Offert", url: ROUTES.quote },
        ])}
      />
      <section className="pt-24 pb-8 sm:pt-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Kostnadsfri offert
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Få en Gratis Offert
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Snabb återkoppling inom 24 timmar. Fyll i formuläret nedan för en
            kostnadsfri offert på fönsterputs eller städning i Kristianstad.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            <p className="text-sm text-muted">
              Eller ring oss:{" "}
              <a
                href={CONTACT.mobileHref}
                className="font-semibold text-foreground hover:text-brand-600"
              >
                {CONTACT.mobile}
              </a>
            </p>
            <span className="hidden text-slate-300 sm:inline" aria-hidden>
              |
            </span>
            <p className="text-sm text-muted">
              Kontor:{" "}
              <a
                href={CONTACT.officeHref}
                className="font-semibold text-foreground hover:text-brand-600"
              >
                {CONTACT.office}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <iframe
              src={CONTACT.tallyForm}
              title={`Offertformulär – ${SITE.name}`}
              className="min-h-[600px] w-full border-0"
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            Verksamheten drivs av {CONTACT.company} · Org.nr {CONTACT.orgNumber}
          </p>
        </div>
      </section>
    </>
  );
}
