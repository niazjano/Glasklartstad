import { TRUST_CARDS } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="why-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Varför välja Glasklart?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Din lokala städfirma och fönsterputsare i Kristianstad – med fokus
            på kvalitet, trygghet och nöjda kunder.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_CARDS.map((item) => (
            <article
              key={item.title}
              className="card-premium group p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f172a] text-sm font-bold text-white">
                ✓
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#0f172a]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
