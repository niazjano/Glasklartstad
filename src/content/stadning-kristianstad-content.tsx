import Link from "next/link";

export function StadningKristianstadContent() {
  return (
    <>
      <p>
        Letar du efter en pålitlig <strong>städfirma i Kristianstad</strong>?
        Glasklart erbjuder professionell <strong>städning i Kristianstad</strong>{" "}
        för hem och företag – med samma fokus på kvalitet som vår
        uppskattade fönsterputsservice.
      </p>

      <h2>Städning i Kristianstad – för hem och företag</h2>
      <p>
        Vi hjälper privatpersoner och företag i Kristianstad med allt från
        regelbunden hemstädning till grundlig kontorsstädning. Som lokal aktör
        känner vi området och kan snabbt anpassa våra tjänster efter dina
        behov och ditt schema.
      </p>
      <p>
        Oavsett om du bor i centrala Kristianstad, Åhus, Fjälkinge eller
        Degeberga – vi levererar städning av hög kvalitet med erfaren personal
        och tydliga priser.
      </p>

      <h2>Våra städtjänster</h2>
      <h3>Hemstädning i Kristianstad</h3>
      <p>
        Regelbunden hemstädning som ger dig mer tid och ett fräscht hem. Vi
        erbjuder veckovis, varannan vecka eller månadsvis städning.{" "}
        <Link href="/hemstadning-kristianstad">Läs mer om hemstädning</Link>.
      </p>
      <h3>Kontorsstädning i Kristianstad</h3>
      <p>
        Professionell städning för kontor, butiker och verksamhetslokaler.
        Skräddarsydda avtal med flexibla tider.{" "}
        <Link href="/kontorsstadning-kristianstad">Läs mer om kontorsstädning</Link>.
      </p>
      <h3>Fönsterputs i Kristianstad</h3>
      <p>
        Vår specialitet – skinande rena fönster för villor, lägenheter och
        företag.{" "}
        <Link href="/fonsterputs-kristianstad">Läs mer om fönsterputs</Link>.
      </p>

      <h2>Varför välja Glasklart för städning?</h2>
      <ul>
        <li>Lokalt företag i Kristianstad med snabb responstid</li>
        <li>Erfaren och pålitlig personal</li>
        <li>Kostnadsfri offert innan vi börjar</li>
        <li>Nöjd kund-garanti och fasta priser</li>
        <li>Kombinera städning med fönsterputs</li>
        <li>Flexibla tider anpassade efter dig</li>
      </ul>

      <h2>Städfirma i Kristianstad och närområdet</h2>
      <p>
        Vi utför städning i Kristianstad, Åhus, Fjälkinge, Degeberga, Bromölla,
        Arkelstorp och Tollarp. Som din lokala städfirma är vi alltid nära till
        hands när du behöver oss.
      </p>

      <h2>Vanliga frågor om städning i Kristianstad</h2>
      <h3>Vad kostar städning i Kristianstad?</h3>
      <p>
        Priset beror på bostadens storlek, typ av städning och frekvens. Vi
        lämnar alltid en kostnadsfri offert anpassad efter dina behov.
      </p>
      <h3>Erbjuder ni RUT-avdrag?</h3>
      <p>
        Ja, hemstädning omfattas av RUT-avdrag. Vi hjälper dig att förstå vad
        som gäller för ditt uppdrag.
      </p>
      <h3>Kan jag kombinera städning och fönsterputs?</h3>
      <p>
        Absolut. Många kunder bokar både städning och fönsterputs hos oss för
        ett komplett resultat.
      </p>

      <h2>Boka städning i Kristianstad</h2>
      <p>
        Kontakta oss för en kostnadsfri offert. Ring{" "}
        <a href="tel:+46762855334">076-285 53 34</a> eller besök vår{" "}
        <Link href="/gratis-offert">offertsida</Link>.
      </p>
    </>
  );
}

export const STADNING_FAQS = [
  {
    question: "Vad kostar städning i Kristianstad?",
    answer:
      "Priset varierar beroende på storlek, typ och frekvens. Kontakta oss för en kostnadsfri offert anpassad efter dina behov.",
  },
  {
    question: "Vilka städtjänster erbjuder ni?",
    answer:
      "Vi erbjuder hemstädning, kontorsstädning och fönsterputs i Kristianstad och närområdet.",
  },
  {
    question: "Hur bokar jag städning?",
    answer:
      "Fyll i vårt offertformulär på /gratis-offert eller ring 076-285 53 34. Vi återkommer inom 24 timmar.",
  },
  {
    question: "Betjänar ni områden utanför Kristianstad?",
    answer:
      "Ja, vi städar i Åhus, Fjälkinge, Degeberga, Bromölla, Arkelstorp och Tollarp.",
  },
] as const;
