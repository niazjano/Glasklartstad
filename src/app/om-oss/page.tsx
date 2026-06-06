import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT, ROUTES, SERVICE_AREAS, SITE, TRUST_CARDS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Om Oss – Glasklart Fönsterputs & Städ",
  description:
    "Lär känna Glasklart – lokalt företag specialiserat på fönsterputs och städning i Kristianstad med fokus på kvalitet och nöjda kunder.",
  path: "/om-oss",
});

export default function OmOssPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: "/" },
          { name: "Om Oss", url: "/om-oss" },
        ])}
      />
      <section className="pt-24 pb-16 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl">
                Om {SITE.shortName}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Vi är ett lokalt företag i Kristianstad specialiserat på
                professionell fönsterputs och städtjänster. Vår mission är
                enkel: skinande resultat och service som överträffar
                förväntningar.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
              <Image
                src={IMAGES.squeegee}
                alt="Glasklart – professionell fönsterputsare i Kristianstad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">Vår historia och värderingar</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
            <p>
              {SITE.name} grundades med visionen att erbjuda den bästa
              fönsterputs- och städservicen i Kristianstad och närområdet.
            </p>
            <p>
              Verksamheten drivs av {CONTACT.company} (org.nr{" "}
              {CONTACT.orgNumber}).
            </p>
            <p>
              Kvalitet, pålitlighet och kundnöjdhet genomsyrar allt vi gör.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#0f172a]">
            Det här skiljer oss åt
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_CARDS.map((item) => (
              <div key={item.title} className="card-premium p-6">
                <h3 className="font-semibold text-[#0f172a]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">Områden vi betjänar</h2>
          <p className="mt-4 text-slate-600">
            Vi utför fönsterputs och städning i {SERVICE_AREAS.join(", ")}.
          </p>
          <div className="mt-8">
            <Button href={ROUTES.quote} variant="primary" size="lg">
              Få Gratis Offert
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
