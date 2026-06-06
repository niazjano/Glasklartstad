export const SITE = {
  name: "Glasklart Fönsterputs & Städ",
  shortName: "Glasklart",
  legalName: "Glasklart Städ Kristianstad",
  domain: "glasklartstad.se",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://glasklartstad.se",
  description:
    "Professionell fönsterputs i Kristianstad. Erfarna fönsterputsare för villor, lägenheter och företag. Städfirma med hemstädning och kontorsstädning. Kostnadsfri offert.",
  locale: "sv_SE",
} as const;

export const ROUTES = {
  quote: "/gratis-offert",
  contact: "/kontakt",
} as const;

export const CONTACT = {
  mobile: "076-285 53 34",
  mobileHref: "tel:+46762855334",
  office: "044-478 53 002",
  officeHref: "tel:+464447853002",
  tallyForm: "https://tally.so/r/2EokEe",
  company: "Flyttivo Flytt & Städ AB",
  orgNumber: "559585-4174",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Hem" },
  { href: "/fonsterputs-kristianstad", label: "Fönsterputs" },
  { href: "/stadning-kristianstad", label: "Städning" },
  { href: "/om-oss", label: "Om Oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const SERVICE_AREAS = [
  "Kristianstad",
  "Åhus",
  "Fjälkinge",
  "Degeberga",
  "Bromölla",
  "Arkelstorp",
  "Tollarp",
] as const;

export const SERVICES = [
  {
    slug: "fonsterputs-kristianstad",
    title: "Fönsterputs",
    shortTitle: "Fönsterputs Kristianstad",
    description:
      "Professionell fönsterputs för villor, lägenheter och företag. Skinande rena fönster året runt.",
    imageKey: "hero" as const,
    featured: true,
    keywords: ["Fönsterputs Kristianstad", "Fönsterputsare Kristianstad"],
  },
  {
    slug: "stadning-kristianstad",
    title: "Städning",
    shortTitle: "Städning Kristianstad",
    description:
      "Komplett städservice i Kristianstad – hemstädning, flyttstädning och kontorsstädning.",
    imageKey: "hemstadning" as const,
    featured: false,
    keywords: ["Städning Kristianstad", "Städfirma Kristianstad"],
  },
  {
    slug: "hemstadning-kristianstad",
    title: "Hemstädning",
    shortTitle: "Hemstädning Kristianstad",
    description:
      "Regelbunden hemstädning med fokus på kvalitet, detaljer och din trygghet.",
    imageKey: "hemstadning" as const,
    featured: false,
    keywords: ["Hemstädning Kristianstad"],
  },
  {
    slug: "kontorsstadning-kristianstad",
    title: "Kontorsstädning",
    shortTitle: "Kontorsstädning Kristianstad",
    description:
      "Professionell kontorsstädning för företag i Kristianstad. Renare arbetsmiljö.",
    imageKey: "squeegee" as const,
    featured: false,
    keywords: ["Kontorsstädning Kristianstad"],
  },
] as const;

export const TRUST_CARDS = [
  {
    title: "Snabb återkoppling",
    description: "Vi svarar inom 24 timmar på alla förfrågningar.",
  },
  {
    title: "Kostnadsfri offert",
    description: "Tydligt prisförslag utan dolda avgifter eller förpliktelser.",
  },
  {
    title: "Professionell service",
    description: "Erfarna fönsterputsare och städare med rätt utrustning.",
  },
  {
    title: "Lokalt företag i Kristianstad",
    description: "Vi känner området och är snabbt på plats när du behöver oss.",
  },
  {
    title: "Nöjd kund-garanti",
    description: "Vi jobbar tills du är helt nöjd med resultatet.",
  },
  {
    title: "Fasta priser",
    description: "Du vet exakt vad det kostar innan vi påbörjar arbetet.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Begär offert",
    description:
      "Fyll i vårt formulär eller ring oss. Beskriv ditt behov så återkommer vi snabbt.",
  },
  {
    step: 2,
    title: "Vi kontaktar dig",
    description:
      "Vi hör av oss inom 24 timmar med en kostnadsfri offert anpassad efter dina önskemål.",
  },
  {
    step: 3,
    title: "Njut av ett skinande resultat",
    description:
      "Vårt professionella team utför arbetet noggrant så att du kan njuta av ett perfekt resultat.",
  },
] as const;

export const TRUST_BADGES = [
  "Snabb återkoppling",
  "Kostnadsfri offert",
  "Professionell service",
] as const;
