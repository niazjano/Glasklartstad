import { Button } from "@/components/ui/Button";
import { CONTACT, ROUTES, SITE } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="bg-foreground py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Redo för skinande rena fönster?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Få en kostnadsfri offert idag. {SITE.shortName} hjälper dig med
          fönsterputs och städning i Kristianstad – snabbt, enkelt och
          professionellt.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={ROUTES.quote} variant="inverse" size="lg">
            Få Gratis Offert
          </Button>
          <Button
            href={CONTACT.mobileHref}
            variant="secondary"
            size="lg"
            className="border-slate-600 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
          >
            Ring {CONTACT.mobile}
          </Button>
        </div>
      </div>
    </section>
  );
}
