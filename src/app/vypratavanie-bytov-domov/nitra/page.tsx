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
  title: "Vypratávanie bytov a domov Nitra | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Nitre ✅ Lacné a férové ceny ✅ Obhliadka zadarmo ✅ Rýchle a spoľahlivé vypratanie nehnuteľností v Nitre.",
  keywords:
    "vypratavanie nitra, vypratávanie bytov nitra, vypratanie bytu nitra, vypratanie domu nitra, vypratanie pozostalosti nitra, likvidacia odpadu nitra",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/nitra",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/nitra",
      en: "https://www.sofoservis.sk/en/apartment-clearance-nitra",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/nitra",
    },
  },
};

export default function VypratavanieNitraPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Nitre?",
      answer:
        "Proces vypratávania v Nitre začína bezplatnou obhliadkou priestoru. Po dohode stanovíme termín, v dohodnutý deň náš tím príde so všetkým potrebným vybavením. Najprv vytriedime veci podľa vašich požiadaviek, následne odvezieme nepotrebný materiál a priestor vyčistíme. Dobre poznáme zberné dvory a skládky v Nitre a okolí.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Nitre?",
      answer:
        "Cena za vypratávanie v Nitre závisí od veľkosti priestoru, množstva vecí, dostupnosti a typu odpadu. Pre štandardný 2-izbový byt sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme nezáväznú cenovú ponuku po bezplatnej obhliadke.",
    },
    {
      question: "Ako rýchlo viete zabezpečiť vypratávanie v Nitre?",
      answer:
        "V naliehavých prípadoch dokážeme zorganizovať vypratávanie do 24-48 hodín. Pokrývame celú Nitru a blízke okolie vrátane Šurán, Komárna a ďalších obcí Nitrianskeho kraja.",
    },
    {
      question: "Kam odvážate odpad z vypratávania v Nitre?",
      answer:
        "Odpad odvážame na oficiálne zberné dvory a skládky v Nitre a okolí v súlade s predpismi o odpadovom hospodárstve. Recyklovateľný materiál separujeme.",
    },
    {
      question: "Vypratávate aj po zosnulých v Nitre?",
      answer:
        "Áno, v Nitre a okolí zabezpečujeme aj citlivé vypratávanie nehnuteľností po zosnulých s maximálnou empatiou a diskréciou. Pomôžeme vám roztriediť osobné veci a cennosti.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Nitre",
    description:
      "Profesionálne a rýchle vypratávanie bytov, domov a nehnuteľností v Nitre a okolí. Náš tím sa postará o komplexné služby od triedenia vecí, cez odvoz, až.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Nitre",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Nitre",
    description:
      "Profesionálne vypratávanie nehnuteľností s odvozom a likvidáciou nepotrebných vecí v Nitre.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie bytu alebo domu",
        description:
          "Vypratáme celý byt alebo dom vrátane všetkých miestností, pivnice a podkrovia. Triedenie vecí a ekologická likvidácia.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description:
          "Špecializujeme sa na vypratávanie pivničných priestorov, garáží a skladov v Nitre.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz a likvidácia starého nábytku",
        description:
          "Profesionálny odvoz starého nábytku a spotrebičov s environmentálne zodpovednou likvidáciou.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Čistenie a vypratávanie pozemkov",
        description:
          "Vyčistíme pozemky od nepotrebných vecí a stavebného odpadu v Nitre a okolí.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Likvidácia nebezpečného odpadu",
        description:
          "Bezpečne zlikvidujeme nebezpečný odpad, farby a chemikálie podľa platných predpisov.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Po vypratávaní zabezpečíme odvoz stavebného odpadu, sute a demolačných materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  const nitraNearby = [
    "Nitra centrum",
    "Chrenová",
    "Klokočina",
    "Diely",
    "Párovce",
    "Zobor",
    "Dolné Krškany",
    "Horné Krškany",
    "Mlynárce",
    "Čermáň",
    "Štitáre",
    "Ivánka pri Nitre",
    "Janíkovce",
    "Lužianky",
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
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews />
      </div>
      <div>
        <Reviews showHeadline={true} />
      </div>
      <div>
        <LocationMap
          title="Vypratávanie vo všetkých častiach Nitry a okolia"
          description="Poskytujeme naše profesionálne vypratávacie služby v celej Nitre a priľahlých obciach"
          locations={nitraNearby}
          additionalText="Okrem Nitry pôsobíme aj v Šuranoch, Zlatých Moravciach, Komárne a ďalších obciach Nitrianskeho kraja."
        />
      </div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>
      <div>
        <InstagramFeed />
      </div>
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>
      <div>
        <FAQ
          title="Často kladené otázky o vypratávaní v Nitre"
          items={faqItems}
        />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Nitre?"
          description="Náš skúsený tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru. Pôsobíme v celej Nitre a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Nitra", description: "Profesionálne sťahovanie v Nitre a okolí.", href: "/stahovanie-nitra", icon: "/icons/truck_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Vypratávanie pivníc a garáží", description: "Rýchle vypratanie pivníc, kobiek a garáží.", href: "/vypratavanie-pivnic-garazi-nebytovych-priestorov", icon: "/icons/house_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
