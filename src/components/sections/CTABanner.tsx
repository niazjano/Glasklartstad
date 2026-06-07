import { Button } from "@/components/ui/Button";
import { CONTACT, ROUTES, SITE } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="bg-[#081B3A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Redo för skinande rena fönster?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          Få en kostnadsfri offert idag. {SITE.shortName} hjälper dig med
          fönsterputs och städning i Kristianstad – snabbt, enkelt och
          professionellt.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={ROUTES.quote} variant="darkPrimary" size="lg">
            Få Gratis Offert
          </Button>
          <Button href={CONTACT.mobileHref} variant="darkSecondary" size="lg">
            Ring Nu
          </Button>
        </div>
      </div>
    </section>
  );
}
