import { SERVICE_AREAS } from "@/lib/constants";

export function AreasSection() {
  return (
    <section className="bg-surface py-20 sm:py-28" aria-labelledby="areas-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="areas-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Områden vi betjänar
          </h2>
          <p className="mt-4 text-lg text-muted">
            Vi utför fönsterputs och städning i Kristianstad och närliggande
            orter i nordöstra Skåne.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-brand-300 hover:bg-brand-50"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
