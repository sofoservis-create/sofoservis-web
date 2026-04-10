import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie bytov a domov Piešťany | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Piešťanoch ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Piešťanoch a okolí.",
  keywords:
    "vypratavanie piestany, vypratávanie bytov piestany, vypratanie bytu piestany, vypratanie domu piestany, likvidacia odpadu piestany",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/piestany",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/piestany",
      en: "https://www.sofoservis.sk/en/apartment-clearance-piestany",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/piestany",
    },
  },
};

export default function VypratavaniePiestanyPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Piešťanoch?",
      answer:
        "Vypratávanie v Piešťanoch začína bezplatnou obhliadkou. Po dohode stanovíme termín a náš tím príde vybavený všetkým potrebným. Vytriedime veci, odvezieme odpad a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Piešťanoch?",
      answer:
        "Pre 2-izbový byt v Piešťanoch sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Bezplatná obhliadka a nezáväzná cenová ponuka.",
    },
    {
      question: "Pokrývate aj okolie Piešťan?",
      answer:
        "Áno, pôsobíme v Piešťanoch a okolí — Hlohovec, Vrbové, Drahovce, Ducové a ďalšie obce Trnavského kraja.",
    },
    {
      question: "Vypratávate aj kúpeľné nehnuteľnosti v Piešťanoch?",
      answer:
        "Áno, v Piešťanoch máme skúsenosti s vypratávaním rôznych typov nehnuteľností vrátane starších bytov a domov v kúpeľnej časti mesta.",
    },
    {
      question: "Ako rýchlo dokážete prísť do Piešťan?",
      answer:
        "V naliehavých prípadoch dokážeme prísť do 24-48 hodín. Pokrývame celý trnavský región.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Piešťanoch",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Piešťanoch a okolí. Komplexné služby za férové ceny — od triedenia vecí po likvidáciu odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Piešťanoch",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Piešťanoch",
    description: "Profesionálne vypratávanie nehnuteľností v Piešťanoch a okolí.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie bytu alebo domu",
        description: "Vypratáme celý byt alebo dom vrátane všetkých miestností.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description: "Špecializujeme sa na vypratávanie pivníc, garáží a skladov.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz a likvidácia starého nábytku",
        description: "Profesionálny odvoz starého nábytku a spotrebičov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Čistenie a vypratávanie pozemkov",
        description: "Vyčistíme pozemky od odpadu v Piešťanoch a okolí.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Likvidácia nebezpečného odpadu",
        description: "Bezpečná likvidácia nebezpečného odpadu podľa predpisov.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description: "Odvoz stavebného odpadu a demolačných materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  const piestanyNearby = [
    "Piešťany centrum",
    "Vrbové",
    "Drahovce",
    "Ducové",
    "Banky",
    "Ratnovce",
    "Krakovany",
    "Borovce",
    "Moravany nad Váhom",
    "Trebatice",
    "Sokolovce",
    "Dolné Otrokovce",
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
      />
      <div><Clients /></div>
      <div><GoogleReviews /></div>
      <div><Reviews showHeadline={true} /></div>
      <div>
        <LocationMap
          title="Vypratávanie v Piešťanoch a okolí"
          description="Poskytujeme vypratávacie služby v Piešťanoch a priľahlých obciach"
          locations={piestanyNearby}
          additionalText="Okrem Piešťan pôsobíme aj v Hlohovci, Trnave a ďalších obciach Trnavského kraja."
        />
      </div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>
      <div><InstagramFeed /></div>
      <div><GoogleReviews showReviewsShowcase={false} /></div>
      <div>
        <FAQ title="Často kladené otázky o vypratávaní v Piešťanoch" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Piešťanoch?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Piešťanoch a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Piešťany", description: "Profesionálne sťahovanie v Piešťanoch a okolí.", href: "/stahovanie-piestany", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Hlohovec", description: "Vypratávanie bytov a domov v Hlohovci.", href: "/vypratavanie-bytov-domov/hlohovec", icon: "/icons/house_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
