import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-[#081B3A] sm:text-4xl"
          >
            Våra tjänster
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Fönsterputs i Kristianstad är vår specialitet. Vi erbjuder även
            professionell städning för hem och företag.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group card-premium flex h-full flex-col overflow-hidden p-0"
            >
              <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-60">
                <Image
                  src={IMAGES[service.imageKey]}
                  alt={`${service.title} i Kristianstad`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  unoptimized
                />
                {service.featured && (
                  <span className="absolute left-5 top-5 rounded-full bg-[#081B3A] px-4 py-1.5 text-xs font-semibold text-white">
                    Vår specialitet
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-xl font-semibold text-[#081B3A] transition-colors group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#081B3A]">
                  Läs mer
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
