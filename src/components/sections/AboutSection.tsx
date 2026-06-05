import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ROUTES, SITE } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/fonsterputs-squeegee.png"
              alt="Professionell fönsterputsare i Kristianstad putsar fönster med skrapa"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 id="about-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Din lokala städpartner i Kristianstad
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                {SITE.name} är specialiserade på professionell
                fönsterputs och städtjänster för privatpersoner och företag i
                Kristianstad med omnejd. Vi kombinerar lokal närvaro med hög
                kvalitet och ett genuint fokus på nöjda kunder.
              </p>
              <p>
                Oavsett om du bor i en villa i Åhus, en lägenhet i centrala
                Kristianstad eller driver ett kontor i Bromölla – vi levererar
                ett skinande resultat du kan lita på. Vår erfarna personal
                arbetar noggrant, punktligt och med respekt för ditt hem eller
                din verksamhet.
              </p>
              <p>
                Vi tror på tydlig kommunikation, transparenta priser och
                service som överträffar förväntningar. Det är därför allt fler
                i Kristianstad väljer oss som sin städfirma.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={ROUTES.quote}>Få Gratis Offert</Button>
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
