import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Våra tjänster
          </h2>
          <p className="mt-4 text-lg text-muted">
            Från professionell fönsterputs till komplett städning – vi hjälper
            dig i Kristianstad och närområdet.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className={cn(
                "group card-premium overflow-hidden p-0 hover:-translate-y-1",
                service.featured && "lg:col-span-2 lg:grid lg:grid-cols-2"
              )}
            >
              <div
                className={cn(
                  "relative aspect-[16/10] overflow-hidden",
                  service.featured ? "lg:aspect-auto lg:min-h-[320px]" : "h-48"
                )}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} i Kristianstad`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={service.featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                />
                {service.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Vår specialitet
                  </span>
                )}
              </div>
              <div className={cn("p-8", service.featured && "flex flex-col justify-center")}>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Läs mer
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
