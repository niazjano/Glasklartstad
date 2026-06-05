import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CONTACT, ROUTES, TRUST_BADGES } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-fonsterputs.png"
          alt="Professionell fönsterputs i Kristianstad – erfaren fönsterputsare rengör fönster på villa"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 sm:via-white/92 sm:to-white/25" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(90vh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Fönsterputsare Kristianstad
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Professionell Fönsterputs i Kristianstad
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Skinande rena fönster för villor, lägenheter och företag i
            Kristianstad. Din lokala städfirma med fokus på kvalitet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={ROUTES.quote} size="lg">
              Få Gratis Offert
            </Button>
            <Button href={CONTACT.mobileHref} variant="secondary" size="lg">
              Ring Nu
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  ✓
                </span>
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
