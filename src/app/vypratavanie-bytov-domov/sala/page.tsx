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
  title: "Vypratávanie bytov a domov Šaľa | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Šali ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Šali a okolí.",
  keywords:
    "vypratavanie sala, vypratávanie bytov sala, vypratanie bytu sala, vypratanie domu sala, likvidacia odpadu sala, vypratavanie šaľa",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/sala",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/sala",
      en: "https://www.sofoservis.sk/en/apartment-clearance-sala",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/sala",
    },
  },
};

export default function VypratavanieSalaPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Šali?",
      answer:
        "Vypratávanie v Šali začína bezplatnou obhliadkou priestoru. Po dohode stanovíme termín a príde náš tím vybavený všetkým potrebným. Vytriedime veci, odvezieme odpad a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Šali?",
      answer:
        "Cena závisí od veľkosti a obsahu priestoru. Pre 2-izbový byt v Šali sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Obhliadka a cenová ponuka je bezplatná a nezáväzná.",
    },
    {
      question: "Aké oblasti okolo Šale obsluhujete?",
      answer:
        "Okrem Šale pôsobíme aj v Galante, Senci, Komárne, Hurbanove a ďalších obciach Nitrianskeho a Trnavského kraja.",
    },
    {
      question: "Dokážete vypratávať aj väčšie domy a starší majetok v Šali?",
      answer:
        "Áno, v regióne Šale sa stretávame s vypratávaním staršieho rodinného majetku, pričom máme skúsenosti s každým typom obsahu od nábytku po záhradné náradie.",
    },
    {
      question: "Zabezpečujete vypratávanie po zosnulých v Šali?",
      answer:
        "Áno, zabezpečujeme citlivé a diskrétne vypratávanie pozostalosti s maximálnou empatiou. Pomôžeme vám roztriediť osobné veci a cennosti.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Šali",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Šali a okolí. Komplexné služby od triedenia vecí až po ekologickú likvidáciu odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Šali",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Šali",
    description: "Profesionálne vypratávanie nehnuteľností v Šali a okolí.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie bytu alebo domu",
        description: "Vypratáme celý byt alebo dom vrátane všetkých miestností a pivnice.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description: "Špecializujeme sa na vypratávanie pivníc, garáží a skladov v Šali.",
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
        description: "Vyčistíme pozemky od odpadu v Šali a okolí.",
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

  const salaNearby = [
    "Šaľa centrum",
    "Veča",
    "Diakovce",
    "Tešedíkovo",
    "Vlčany",
    "Kráľová nad Váhom",
    "Neded",
    "Selice",
    "Rišňovce",
    "Žihárec",
    "Horná Kráľová",
    "Kajsa",
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
          title="Vypratávanie v Šali a okolí"
          description="Poskytujeme vypratávacie služby v Šali a priľahlých obciach"
          locations={salaNearby}
          additionalText="Okrem Šale pôsobíme aj v Galante, Komárne a ďalších obciach regiónu."
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
        <FAQ title="Často kladené otázky o vypratávaní v Šali" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Šali?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Šali a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Šaľa", description: "Profesionálne sťahovanie v Šali a okolí.", href: "/stahovanie-sala", icon: "/icons/truck_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Vypratávanie pivníc a garáží", description: "Rýchle vypratanie pivníc, kobiek a garáží.", href: "/vypratavanie-pivnic-garazi-nebytovych-priestorov", icon: "/icons/house_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
