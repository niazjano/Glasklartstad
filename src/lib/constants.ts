export const SITE = {
  name: "Glasklart Fönsterputs & Städ",
  shortName: "Glasklart",
  legalName: "Glasklart Städ Kristianstad",
  domain: "glasklarstad.se",
  url: "https://glasklarstad.se",
  description:
    "Professionell fönsterputs i Kristianstad. Erfarna fönsterputsare för villor, lägenheter och företag. Även hemstädning, flyttstädning och kontorsstädning. Kostnadsfri offert.",
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
  { href: "/stadning", label: "Städning" },
  { href: "/om-oss", label: "Om Oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const SERVICE_AREAS = [
  "Kristianstad",
  "Åhus",
  "Bromölla",
  "Fjälkinge",
  "Tollarp",
  "Arkelstorp",
  "Degeberga",
] as const;

export const SERVICES = [
  {
    slug: "fonsterputs-kristianstad",
    title: "Fönsterputs",
    shortTitle: "Fönsterputs Kristianstad",
    description:
      "Professionell fönsterputs för villor, lägenheter och företag. Skinande rena fönster året runt.",
    image: "/images/hero-fonsterputs.png",
    featured: true,
    keywords: ["Fönsterputs Kristianstad", "Fönsterputsare Kristianstad"],
  },
  {
    slug: "hemstadning-kristianstad",
    title: "Hemstädning",
    shortTitle: "Hemstädning Kristianstad",
    description:
      "Regelbunden hemstädning med fokus på kvalitet, detaljer och din trygghet.",
    image: "/images/hemstadning.png",
    featured: false,
    keywords: ["Hemstädning Kristianstad"],
  },
  {
    slug: "flyttstadning-kristianstad",
    title: "Flyttstädning",
    shortTitle: "Flyttstädning Kristianstad",
    description:
      "Grundlig flyttstädning enligt branschstandard. Godkänd städning vid inflyttning och utflyttning.",
    image: "/images/fonsterputs-squeegee.png",
    featured: false,
    keywords: ["Flyttstädning Kristianstad"],
  },
  {
    slug: "kontorsstadning-kristianstad",
    title: "Kontorsstädning",
    shortTitle: "Kontorsstädning Kristianstad",
    description:
      "Professionell kontorsstädning för företag i Kristianstad. Renare arbetsmiljö, nöjdare medarbetare.",
    image: "/images/hemstadning.png",
    featured: false,
    keywords: ["Kontorsstädning Kristianstad"],
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Erfaren personal",
    description:
      "Vårt team har lång erfarenhet av fönsterputs och städning i Kristianstad med fokus på kvalitet.",
    icon: "users",
  },
  {
    title: "Snabb service",
    description:
      "Vi erbjuder snabb återkoppling och flexibla tider som passar dig och ditt schema.",
    icon: "clock",
  },
  {
    title: "Nöjd kund fokus",
    description:
      "Din tillfredsställelse är vår högsta prioritet. Vi jobbar tills du är helt nöjd.",
    icon: "heart",
  },
  {
    title: "Lokalt företag",
    description:
      "Vi är ett lokalt företag i Kristianstad som känner området och våra kunders behov.",
    icon: "map",
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
