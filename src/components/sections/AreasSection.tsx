import { SERVICE_AREAS } from "@/lib/constants";

export function AreasSection() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32" aria-labelledby="areas-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="areas-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Områden vi betjänar
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Vi utför fönsterputs och städning i Kristianstad och närliggande
            orter i nordöstra Skåne.
          </p>
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-3">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] shadow-sm transition-all hover:border-[#0f172a] hover:shadow-md"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
