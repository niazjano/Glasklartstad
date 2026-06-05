import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CONTACT, ROUTES } from "@/lib/constants";

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
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Brödsmulor" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Hem
                  </Link>
                </li>
                {breadcrumbs.map((crumb) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    <span aria-hidden>/</span>
                    <Link href={crumb.href} className="hover:text-foreground">
                      {crumb.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={ROUTES.quote} size="lg">
                Få Gratis Offert
              </Button>
              <Button href={CONTACT.mobileHref} variant="secondary" size="lg">
                Ring {CONTACT.mobile}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="service-content space-y-6 text-muted leading-relaxed [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_a]:font-medium [&_a]:text-brand-600 [&_a]:hover:underline [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:space-y-2">
          {children}
        </div>
      </article>
    </>
  );
}
