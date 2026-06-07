import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ROUTES, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function AboutSection() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl">
            <Image
              src={IMAGES.squeegee}
              alt="Professionell fönsterputsare i Kristianstad"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>

          <div>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-[#081B3A] sm:text-4xl"
            >
              Din lokala städpartner i Kristianstad
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
              <p>
                {SITE.name} är specialiserade på professionell fönsterputs och
                städtjänster för privatpersoner och företag i Kristianstad med
                omnejd.
              </p>
              <p>
                Oavsett om du bor i en villa i Åhus, en lägenhet i centrala
                Kristianstad eller driver ett kontor – vi levererar ett
                skinande resultat du kan lita på.
              </p>
              <p>
                Vi tror på tydlig kommunikation, transparenta priser och service
                som överträffar förväntningar.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={ROUTES.quote} variant="primary">
                Få Gratis Offert
              </Button>
              <Button href="/om-oss" variant="secondary">
                Läs mer om oss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
