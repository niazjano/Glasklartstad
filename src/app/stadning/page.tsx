import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { ROUTES, SERVICES } from "@/lib/constants";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Städning Kristianstad – Hemstädning, Flyttstädning & Kontor",
  description:
    "Professionell städning i Kristianstad. Hemstädning, flyttstädning och kontorsstädning. Lokal städfirma med fokus på kvalitet. Kostnadsfri offert.",
  path: "/stadning",
  keywords: [
    "Städfirma Kristianstad",
    "Hemstädning Kristianstad",
    "Flyttstädning Kristianstad",
    "Kontorsstädning Kristianstad",
  ],
});

export default function StadningPage() {
  const cleaningServices = SERVICES.filter((s) => s.slug !== "fonsterputs-kristianstad");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: "/" },
          { name: "Städning", url: "/stadning" },
        ])}
      />
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Städning i Kristianstad
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Glasklart Städ Kristianstad erbjuder professionell städning för
              hem och företag. Vi kombinerar lokal expertis med hög kvalitet
              och ett fokus på nöjda kunder.
            </p>
            <div className="mt-8">
              <Button href={ROUTES.quote} size="lg">
                Få Gratis Offert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {cleaningServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.shortTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-brand-600">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-surface p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-foreground">
              Fönsterputs – vår specialitet
            </h2>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">
              Utöver städning erbjuder vi professionell{" "}
              <Link href="/fonsterputs-kristianstad" className="font-medium text-brand-600 hover:underline">
                fönsterputs i Kristianstad
              </Link>
              . Skinande rena fönster för villor, lägenheter och företag.
            </p>
            <div className="mt-6">
              <Button href="/fonsterputs-kristianstad" variant="outline">
                Läs om fönsterputs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
