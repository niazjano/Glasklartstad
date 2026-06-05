import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT, SERVICE_AREAS, WHY_CHOOSE_US } from "@/lib/constants";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Om Oss – Glasklart Städ Kristianstad",
  description:
    "Lär känna Glasklart Städ Kristianstad. Lokalt företag specialiserat på fönsterputs och städning i Kristianstad med fokus på kvalitet och nöjda kunder.",
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
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Om Glasklart Städ Kristianstad
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Vi är ett lokalt företag i Kristianstad specialiserat på
                professionell fönsterputs och städtjänster. Vår mission är
                enkel: att leverera skinande resultat och service som
                överträffar förväntningar.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/fonsterputs-squeegee.png"
                alt="Glasklart Städ Kristianstad – professionell fönsterputsare"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">Vår historia och värderingar</h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              Glasklart Städ Kristianstad grundades med visionen att erbjuda
              den bästa fönsterputs- och städservicen i Kristianstad och
              närområdet. Vi såg ett behov av en lokal aktör som kombinerar
              professionell kvalitet med personlig service och tydliga priser.
            </p>
            <p>
              Verksamheten drivs av {CONTACT.company} (org.nr{" "}
              {CONTACT.orgNumber}). Vi är stolta över att vara en del av
              Kristianstads lokala näringsliv och att hjälpa både
              privatpersoner och företag med rena fönster och fräscha hem.
            </p>
            <p>
              Kvalitet, pålitlighet och kundnöjdhet genomsyrar allt vi gör.
              Vi tror på att varje kund förtjänar ett skinande resultat och en
              upplevelse som känns trygg och professionell från första
              kontakt till färdigt uppdrag.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-foreground">
            Det här skiljer oss åt
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">Områden vi betjänar</h2>
          <p className="mt-4 text-muted">
            Vi utför fönsterputs och städning i {SERVICE_AREAS.join(", ")} och
            närliggande orter.
          </p>
          <div className="mt-8">
            <Button href={ROUTES.quote} size="lg">
              Få Gratis Offert
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
