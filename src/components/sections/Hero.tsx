import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CONTACT, ROUTES, TRUST_BADGES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Professionell fönsterputs i Kristianstad – fönsterputsare putsar fönster på villa"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/96 to-white/50 sm:via-white/94 sm:to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="mb-5 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0f172a]">
            Fönsterputsare Kristianstad
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
            Professionell Fönsterputs i Kristianstad
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Skinande rena fönster för villor, lägenheter och företag i
            Kristianstad. Snabb service, kostnadsfri offert och professionellt
            resultat.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={ROUTES.quote} variant="primary" size="lg">
              Få Gratis Offert
            </Button>
            <Button href={CONTACT.mobileHref} variant="secondary" size="lg">
              Ring Nu
            </Button>
          </div>

          <ul className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2.5 text-sm font-medium text-[#0f172a]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f172a] text-xs text-white">
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
