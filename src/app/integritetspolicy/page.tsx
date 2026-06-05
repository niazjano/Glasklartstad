import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT, SITE } from "@/lib/constants";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Integritetspolicy",
  description:
    "Integritetspolicy för Glasklart Städ Kristianstad. Information om hur vi hanterar dina personuppgifter.",
  path: "/integritetspolicy",
});

export default function IntegritetspolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: "/" },
          { name: "Integritetspolicy", url: "/integritetspolicy" },
        ])}
      />
      <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Integritetspolicy
        </h1>
        <p className="mt-4 text-muted">Senast uppdaterad: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-6 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Personuppgiftsansvarig
            </h2>
            <p className="mt-3">
              {SITE.name} drivs av {CONTACT.company} (org.nr {CONTACT.orgNumber}).
              Vi är personuppgiftsansvariga för behandlingen av dina
              personuppgifter enligt denna policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Vilka uppgifter samlar vi in?
            </h2>
            <p className="mt-3">
              När du kontaktar oss via formulär, telefon eller e-post kan vi
              samla in namn, telefonnummer, e-postadress, adress och
              information om ditt städ- eller fönsterputsbehov.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Hur använder vi dina uppgifter?
            </h2>
            <p className="mt-3">
              Vi använder dina uppgifter för att besvara förfrågningar, lämna
              offerter, boka och utföra tjänster samt för administrativ
              hantering. Vi delar inte dina uppgifter med tredje part utöver
              vad som krävs för att leverera våra tjänster.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Lagring och radering
            </h2>
            <p className="mt-3">
              Vi sparar dina uppgifter så länge det behövs för att fullgöra våra
              åtaganden och uppfylla lagkrav. Du kan när som helst begära att få
              dina uppgifter raderade genom att kontakta oss.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Dina rättigheter
            </h2>
            <p className="mt-3">
              Du har rätt att begära tillgång till, rättelse eller radering av
              dina personuppgifter. Kontakta oss på {CONTACT.mobile} om du vill
              utöva dina rättigheter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
            <p className="mt-3">
              Vid frågor om denna integritetspolicy, kontakta {SITE.name} på{" "}
              <a href={CONTACT.mobileHref} className="text-brand-600 hover:underline">
                {CONTACT.mobile}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
