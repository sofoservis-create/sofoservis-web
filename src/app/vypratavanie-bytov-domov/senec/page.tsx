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
  title: "Vypratávanie bytov a domov Senec | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Senci ✅ Lacné a férové ceny ✅ Obhliadka zadarmo ✅ Rýchle a spoľahlivé vypratanie nehnuteľností v Senci a okolí.",
  keywords:
    "vypratavanie senec, vypratávanie bytov senec, vypratanie bytu senec, vypratanie domu senec, vypratanie pozostalosti senec, likvidacia odpadu senec",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/senec",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/senec",
      en: "https://www.sofoservis.sk/en/apartment-clearance-senec",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/senec",
    },
  },
};

export default function VypratavanieSenecPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Senci?",
      answer:
        "Vypratávanie v Senci začína bezplatnou obhliadkou priestoru. Po dohode stanovíme termín a náš tím príde vybavený všetkým potrebným. Vytriedime veci, odvezieme nepotrebný materiál a priestor vyčistíme. Senec je blízko Bratislavy, takže vieme reagovať veľmi rýchlo.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Senci?",
      answer:
        "Cena za vypratávanie v Senci závisí od veľkosti priestoru a množstva vecí. Pre štandardný 2-izbový byt sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme bezplatnú obhliadku a nezáväznú cenovú ponuku.",
    },
    {
      question: "Pokrývate aj okolie Senca?",
      answer:
        "Áno, pôsobíme v Senci a celom okolí — Bernolákovo, Ivanka pri Dunaji, Šamorín, Dunajská Streda a ďalšie obce v regióne. Doprava na krátku vzdialenosť je zahrnutá v cene.",
    },
    {
      question: "Kam odvážate odpad z vypratávania v Senci?",
      answer:
        "Odpad odvážame na legálne zberné dvory a skládky v Senci a Bratislavskom kraji. Recyklovateľné materiály separujeme a smerujeme do recyklačných zariadení.",
    },
    {
      question: "Zabezpečujete vypratávanie chalúp a rekreačných objektov pri Senci?",
      answer:
        "Áno, v oblasti Senca a Slnečných jazier sa často stretávame s vypratávaním rekreačných chalúp a záhradkárskych domčekov. Máme s tým bohaté skúsenosti a vieme efektívne zlikvidovať všetky typy odpadu.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Senci",
    description:
      "Profesionálne a rýchle vypratávanie bytov, domov a nehnuteľností v Senci a okolí. Blízkosť Bratislavy nám umožňuje rýchlu reakciu a nízke náklady.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Senci",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Senci",
    description:
      "Profesionálne vypratávanie nehnuteľností s odvozom a likvidáciou nepotrebných vecí v Senci a okolí.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie bytu alebo domu",
        description:
          "Vypratáme celý byt alebo dom vrátane všetkých miestností, pivnice a podkrovia.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description:
          "Špecializujeme sa na vypratávanie pivničných priestorov, garáží a skladov v Senci.",
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
          "Vyčistíme pozemky od nepotrebných vecí a stavebného odpadu v Senci a okolí.",
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

  const senecNearby = [
    "Senec centrum",
    "Bernolákovo",
    "Ivanka pri Dunaji",
    "Chorvátsky Grob",
    "Zálesie",
    "Šenkvice",
    "Reca",
    "Vlky",
    "Nová Dedinka",
    "Kráľová pri Senci",
    "Hamuliakovo",
    "Most pri Bratislave",
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
          title="Vypratávanie v Senci a celom okolí"
          description="Poskytujeme naše profesionálne vypratávacie služby v Senci a priľahlých obciach"
          locations={senecNearby}
          additionalText="Okrem Senca pôsobíme aj v Šamoríne, Dunajskej Strede a ďalších obciach Bratislavského kraja."
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
          title="Často kladené otázky o vypratávaní v Senci"
          items={faqItems}
        />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Senci?"
          description="Náš skúsený tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru. Pôsobíme v Senci a celom okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Senec", description: "Profesionálne sťahovanie v Senci a okolí.", href: "/stahovanie-senec", icon: "/icons/truck_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Vypratávanie Bratislava", description: "Vypratávanie bytov a priestorov v Bratislave.", href: "/vypratavanie-bytov-domov/bratislava", icon: "/icons/house_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
