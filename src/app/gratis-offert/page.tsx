import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CTABanner } from "@/components/sections/CTABanner";
import { CONTACT, ROUTES, SITE } from "@/lib/constants";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gratis Offert – Fönsterputs & Städning Kristianstad",
  description:
    "Begär en kostnadsfri offert på fönsterputs eller städning i Kristianstad. Snabb återkoppling inom 24 timmar. Ring 076-285 53 34.",
  path: ROUTES.quote,
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

      <section className="border-b border-slate-200 bg-slate-50 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Kostnadsfri offert
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl">
            Få en Gratis Offert
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Snabb återkoppling inom 24 timmar. Fyll i formuläret för fönsterputs
            eller städning i Kristianstad.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <a
              href={CONTACT.mobileHref}
              className="text-sm text-slate-600"
            >
              Mobil:{" "}
              <span className="font-semibold text-[#0f172a]">{CONTACT.mobile}</span>
            </a>
            <span className="hidden text-slate-300 sm:inline" aria-hidden>|</span>
            <a
              href={CONTACT.officeHref}
              className="text-sm text-slate-600"
            >
              Kontor:{" "}
              <span className="font-semibold text-[#0f172a]">{CONTACT.office}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <iframe
              src={CONTACT.tallyForm}
              title={`Offertformulär – ${SITE.name}`}
              className="min-h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Verksamheten drivs av {CONTACT.company} · Org.nr {CONTACT.orgNumber}
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
