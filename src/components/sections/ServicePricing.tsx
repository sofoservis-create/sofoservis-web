import Container from "@/components/ui/Container";
import Link from "next/link";

interface PricingCard {
  key: string;
  title: string;
  href: string;
  fromPrice: string;
  icon: string;
  iconAlt: string;
}

interface ServicePricingProps {
  title?: string;
  subtitle?: string;
  filter?: string[];
  lang?: "sk" | "en";
}

const allCardsSk: PricingCard[] = [
  {
    key: "stahovanie",
    title: "Sťahovanie bytov a domov",
    href: "/stahovanie-bytov-domov",
    fromPrice: "od 25 €/hod",
    icon: "/icons/truck_icon.svg",
    iconAlt: "Sťahovanie",
  },
  {
    key: "vypratavanie",
    title: "Vypratávanie bytov a priestorov",
    href: "/vypratavanie-bratislava",
    fromPrice: "od 60 €",
    icon: "/icons/broom_icon.svg",
    iconAlt: "Vypratávanie",
  },
  {
    key: "montaz-nabytku",
    title: "Montáž a demontáž nábytku",
    href: "/montaz-nabytku",
    fromPrice: "od 20 €",
    icon: "/icons/wrench_icon.svg",
    iconAlt: "Montáž nábytku",
  },
  {
    key: "montaz-kuchyne",
    title: "Montáž kuchynských liniek",
    href: "/montaz-kuchyne",
    fromPrice: "od 120 €/bm",
    icon: "/icons/kitchen_icon.svg",
    iconAlt: "Montáž kuchyne",
  },
  {
    key: "hodinovy-manzel",
    title: "Hodinový manžel a majster",
    href: "/hodinovy-manzel-majster",
    fromPrice: "od 25 €/hod",
    icon: "/icons/repair_icon.svg",
    iconAlt: "Hodinový manžel",
  },
  {
    key: "buracie-prace",
    title: "Búracie a demolačné práce",
    href: "/buracie-demolacne-prace",
    fromPrice: "od 15 €/m²",
    icon: "/icons/hammer_icon.svg",
    iconAlt: "Búracie práce",
  },
  {
    key: "medzinarodne-stahovanie",
    title: "Medzinárodné sťahovanie",
    href: "/medzinarodne-stahovanie",
    fromPrice: "individuálna kalkulácia",
    icon: "/icons/globe_icon.svg",
    iconAlt: "Medzinárodné sťahovanie",
  },
];

const allCardsEn: PricingCard[] = [
  {
    key: "moving",
    title: "Apartment & House Moving",
    href: "/en/apartment-moving",
    fromPrice: "from €25/hr",
    icon: "/icons/truck_icon.svg",
    iconAlt: "Moving",
  },
  {
    key: "clearance",
    title: "Home & Property Clearance",
    href: "/en/home-clearance",
    fromPrice: "from €60",
    icon: "/icons/broom_icon.svg",
    iconAlt: "Clearance",
  },
  {
    key: "furniture-assembly",
    title: "Furniture Assembly",
    href: "/en/furniture-assembly",
    fromPrice: "from €20",
    icon: "/icons/wrench_icon.svg",
    iconAlt: "Furniture Assembly",
  },
  {
    key: "kitchen-installation",
    title: "Kitchen Installation",
    href: "/en/kitchen-installation",
    fromPrice: "from €120/m",
    icon: "/icons/kitchen_icon.svg",
    iconAlt: "Kitchen Installation",
  },
  {
    key: "handyman",
    title: "Handyman Services",
    href: "/en/handyman-services",
    fromPrice: "from €25/hr",
    icon: "/icons/repair_icon.svg",
    iconAlt: "Handyman",
  },
  {
    key: "demolition",
    title: "Demolition Works",
    href: "/en/demolition-services",
    fromPrice: "from €15/m²",
    icon: "/icons/hammer_icon.svg",
    iconAlt: "Demolition",
  },
  {
    key: "international-moving",
    title: "International Moving",
    href: "/en/international-moving-services",
    fromPrice: "individual quote",
    icon: "/icons/globe_icon.svg",
    iconAlt: "International Moving",
  },
];

const defaultTitles = {
  sk: { title: "Orientačné ceny našich služieb", subtitle: "Transparentné ceny bez skrytých poplatkov. Presná kalkulácia po bezplatnej obhliadke." },
  en: { title: "Our Service Prices", subtitle: "Transparent pricing with no hidden fees. Exact quote after a free assessment." },
};

export default function ServicePricing({
  title,
  subtitle,
  filter,
  lang = "sk",
}: ServicePricingProps) {
  const allCards = lang === "en" ? allCardsEn : allCardsSk;
  const cardMap = new Map(allCards.map((c) => [c.key, c]));
  const cards = filter
    ? filter.map((key) => cardMap.get(key)).filter((c): c is PricingCard => c !== undefined)
    : allCards;

  const defaults = defaultTitles[lang];
  const resolvedTitle = title ?? defaults.title;
  const resolvedSubtitle = subtitle ?? defaults.subtitle;
  const ctaLabel = lang === "en" ? "Get a free quote" : "Získať presnú cenovú ponuku zadarmo";
  const ctaNote = lang === "en" ? "Exact price depends on scope — free assessment included." : "Presná cena závisí od rozsahu — obhliadka zadarmo.";

  return (
    <section className="pt-10 md:pt-[60px] pb-6 md:pb-8 bg-gray-50">
      <Container>
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {resolvedTitle}
          </h2>
          <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
            {resolvedSubtitle}
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center lg:overflow-x-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-accent-400 hover:shadow-sm transition-all duration-200 flex-shrink-0 w-[72vw] max-w-xs snap-start lg:flex-none lg:w-[calc(33.333%-8px)]"
            >
              <div className="w-9 h-9 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-primary-900 leading-snug line-clamp-2">
                  {card.title}
                </p>
                <p className="text-xs text-primary-600 mt-0.5">{card.fromPrice}</p>
              </div>
              <span className="text-xs font-semibold text-accent-600 group-hover:text-primary-900 whitespace-nowrap transition-colors duration-150 flex-shrink-0">
                {lang === "en" ? "Learn more →" : "Zistiť viac →"}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center bg-white rounded-xl px-6 py-5 border border-gray-100">
          <p className="text-primary-700 mb-4 text-base">
            <strong>{ctaNote}</strong>
          </p>
          <Link
            href={lang === "en" ? "/en/contact" : "/kontakt"}
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-primary-900 font-bold px-6 py-3 rounded-xl transition-colors duration-200 text-sm"
          >
            {ctaLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
