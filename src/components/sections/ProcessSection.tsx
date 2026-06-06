import { Button } from "@/components/ui/Button";
import { PROCESS_STEPS, ROUTES } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Så fungerar det
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Tre enkla steg till skinande rena fönster och ett fräscht hem.
          </p>
        </div>

        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <li key={step.step} className="card-premium p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f172a] text-lg font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-[#0f172a]">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <Button href={ROUTES.quote} variant="primary" size="lg">
            Begär Offert
          </Button>
        </div>
      </div>
    </section>
  );
}
