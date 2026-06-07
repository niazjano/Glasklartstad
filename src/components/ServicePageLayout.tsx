import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CONTACT, ROUTES } from "@/lib/constants";
import { asset } from "@/lib/images";

type ServicePageLayoutProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href: string }[];
};

export function ServicePageLayout({
  title,
  subtitle,
  image,
  imageAlt,
  children,
  breadcrumbs = [],
}: ServicePageLayoutProps) {
  return (
    <>
      <section className="relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <Image
            src={asset(image)}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/96 to-white/45" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Brödsmulor" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <li>
                  <Link href="/" className="hover:text-[#081B3A]">
                    Hem
                  </Link>
                </li>
                {breadcrumbs.map((crumb) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    <span aria-hidden>/</span>
                    <Link href={crumb.href} className="hover:text-[#081B3A]">
                      {crumb.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-[#081B3A] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={ROUTES.quote} variant="primary" size="lg">
                Få Gratis Offert
              </Button>
              <Button href={CONTACT.mobileHref} variant="secondary" size="lg">
                Ring Nu
              </Button>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="service-content space-y-6 text-slate-600 leading-relaxed [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#081B3A] [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#081B3A] [&_a]:font-medium [&_a]:text-blue-600 [&_a]:hover:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-[#081B3A] [&_ul]:space-y-2">
          {children}
        </div>
      </article>
    </>
  );
}
