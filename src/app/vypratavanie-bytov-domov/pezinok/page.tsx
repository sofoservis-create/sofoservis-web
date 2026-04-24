import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
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
import TrustBadges from "@/components/sections/TrustBadges";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie bytov a domov Pezinok | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Pezinku ✅ Lacné a férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Pezinku a okolí.",
  keywords:
    "vypratavanie pezinok, vypratávanie bytov pezinok, vypratanie bytu pezinok, vypratanie domu pezinok, likvidacia odpadu pezinok",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/pezinok",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/pezinok",
      en: "https://www.sofoservis.sk/en/apartment-clearance-pezinok",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/pezinok",
    },
  },
};

export default function VypratavaniePezinokPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Pezinku?",
      answer:
        "Vypratávanie v Pezinku začína bezplatnou obhliadkou priestoru. Po dohode stanovíme termín a náš tím príde vybavený potrebným materiálom. Vytriedime veci podľa vašich požiadaviek, odvezieme nepotrebné veci a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Pezinku?",
      answer:
        "Cena za vypratávanie v Pezinku závisí od veľkosti priestoru a množstva vecí. Pre štandardný 2-izbový byt sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Ponúkame nezáväznú cenovú ponuku po bezplatnej obhliadke.",
    },
    {
      question: "Pokrývate aj viničné oblasti a staré domy v okolí Pezinka?",
      answer:
        "Áno, v okolí Pezinka sa špecializujeme aj na vypratávanie starších rodinných domov, usadlostí a objektov vo viničnatých oblastiach. Máme skúsenosti s rôznymi typmi nehnuteľností typickými pre túto oblasť.",
    },
    {
      question: "Ako rýchlo dokážete prísť vypratávať do Pezinka?",
      answer:
        "Keďže Pezinok je blízko Bratislavy, vieme reagovať veľmi rýchlo. V naliehavých prípadoch dokážeme prísť do 24-48 hodín od kontaktovania.",
    },
    {
      question: "Vypratávate aj pivnice v Pezinku?",
      answer:
        "Áno, pivnice sú typickým prvkom domov v oblasti Pezinka. Špecializujeme sa na vypratávanie pivníc, kobiek a vínotočov vrátane starých sudov a náradia.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Pezinku",
    description:
      "Profesionálne a rýchle vypratávanie bytov, domov a nehnuteľností v Pezinku a malokarpatskom okolí. Komplexné služby od triedenia vecí až po ekologickú.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Pezinku",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Pezinku",
    description:
      "Profesionálne vypratávanie nehnuteľností v Pezinku a malokarpatskom regióne.",
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
          "Špecializujeme sa na vypratávanie pivničných priestorov, garáží a skladov.",
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
          "Vyčistíme pozemky od nepotrebných vecí a stavebného odpadu v Pezinku a okolí.",
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

  const pezinokNearby = [
    "Pezinok centrum",
    "Modra",
    "Svätý Jur",
    "Vinosady",
    "Cajla",
    "Grinava",
    "Štefanová",
    "Slovenský Grob",
    "Limbach",
    "Vištuk",
    "Budmerice",
    "Báhoň",
  ];

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotFixedHeightPx={756}
          desktopMascotTopOffsetPct={-0.01}
          desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          showMascot
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-57}
          mobileMascotOffsetX={-32}
          mobileMascotScale={1.02}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
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
          title="Vypratávanie v Pezinku a malokarpatskom okolí"
          description="Poskytujeme naše profesionálne vypratávacie služby v Pezinku a priľahlých obciach"
          locations={pezinokNearby}
          additionalText="Okrem Pezinka pôsobíme aj v Modre, Svätom Jure a ďalších obciach Malokarpatského regiónu."
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
          title="Často kladené otázky o vypratávaní v Pezinku"
          items={faqItems}
        />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Pezinku?"
          description="Náš skúsený tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Pezinku a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Pezinok", description: "Profesionálne sťahovanie v Pezinku a okolí.", href: "/stahovanie-pezinok", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Bratislava", description: "Vypratávanie bytov a priestorov v Bratislave.", href: "/vypratavanie-bytov-domov/bratislava", icon: "/icons/house_icon.svg" },
          { title: "Vypratávanie pivníc a garáží", description: "Rýchle vypratanie pivníc, kobiek a garáží.", href: "/vypratavanie-pivnic-garazi-nebytovych-priestorov", icon: "/icons/house_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
