import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT, ROUTES, SERVICE_AREAS, SERVICES, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p>
                Mobil:{" "}
                <a href={CONTACT.mobileHref} className="hover:text-white">
                  {CONTACT.mobile}
                </a>
              </p>
              <p>
                Kontor:{" "}
                <a href={CONTACT.officeHref} className="hover:text-white">
                  {CONTACT.office}
                </a>
              </p>
            </div>
            <div className="mt-8">
              <Button href={ROUTES.quote} variant="darkPrimary" size="sm">
                Få Gratis Offert
              </Button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Tjänster
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="hover:text-white">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Företag
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/om-oss" className="hover:text-white">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="hover:text-white">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href={ROUTES.quote} className="hover:text-white">
                  Gratis Offert
                </Link>
              </li>
              <li>
                <Link href="/integritetspolicy" className="hover:text-white">
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Områden
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-sm text-slate-400">
          <p>Verksamheten drivs av {CONTACT.company}</p>
          <p className="mt-1">Org.nr: {CONTACT.orgNumber}</p>
          <p className="mt-4">
            © {new Date().getFullYear()} {SITE.name}. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
