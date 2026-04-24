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
  title: "Vypratávanie bytov a domov Šamorín | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Šamoríne ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Šamoríne a okolí.",
  keywords:
    "vypratavanie samorin, vypratávanie bytov samorin, vypratanie bytu samorin, vypratanie domu samorin, likvidacia odpadu samorin, vypratavanie šamorín",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/samorin",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/samorin",
      en: "https://www.sofoservis.sk/en/apartment-clearance-samorin",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/samorin",
    },
  },
};

export default function VypratavanieSamorinPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Šamoríne?",
      answer:
        "Vypratávanie v Šamoríne začína bezplatnou obhliadkou. Po dohode stanovíme termín a náš tím príde vybavený všetkým potrebným. Vytriedime veci, odvezieme odpad a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Šamoríne?",
      answer:
        "Pre 2-izbový byt v Šamoríne sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Bezplatná obhliadka a nezáväzná cenová ponuka.",
    },
    {
      question: "Pokrývate aj Dunajský ostrov a okolie Šamorína?",
      answer:
        "Áno, pôsobíme v Šamoríne a celom okolí vrátane obcí na Dunajskom ostrove — Gabčíkovo, Kalinkovo, Miloslavov a ďalšie.",
    },
    {
      question: "Ako rýchlo dokážete prísť do Šamorína?",
      answer:
        "Šamorín je blízko Bratislavy, takže vieme reagovať veľmi rýchlo. V naliehavých prípadoch dokážeme prísť do 24-48 hodín.",
    },
    {
      question: "Vypratávate aj rekreačné objekty pri Šamoríne?",
      answer:
        "Áno, v okolí Šamorína sa stretávame s vypratávaním rekreačných chalúp, záhradkárskych domčekov a iných objektov. Máme s tým bohaté skúsenosti.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Šamoríne",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Šamoríne a na Žitnom ostrove. Rýchla reakcia vďaka blízkosti Bratislavy, férové ceny a komplexné.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Šamoríne",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Šamoríne",
    description: "Profesionálne vypratávanie nehnuteľností v Šamoríne a na Žitnom ostrove.",
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
        description: "Vyčistíme pozemky od odpadu v Šamoríne a okolí.",
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

  const samorinNearby = [
    "Šamorín centrum",
    "Gabčíkovo",
    "Kalinkovo",
    "Miloslavov",
    "Kostolné Kračany",
    "Rohovce",
    "Lehnice",
    "Trhová Hradská",
    "Dunajská Streda",
    "Čilízie",
    "Baka",
    "Dobrohošť",
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
      <div><Clients /></div>
      <div><GoogleReviews /></div>
      <div><Reviews showHeadline={true} /></div>
      <div>
        <LocationMap
          title="Vypratávanie v Šamoríne a na Žitnom ostrove"
          description="Poskytujeme vypratávacie služby v Šamoríne a priľahlých obciach"
          locations={samorinNearby}
          additionalText="Okrem Šamorína pôsobíme aj v Seneci, Dunajskej Strede a ďalších obciach na Žitnom ostrove."
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
        <FAQ title="Často kladené otázky o vypratávaní v Šamoríne" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Šamoríne?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Šamoríne a na Žitnom ostrove."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Šamorín", description: "Profesionálne sťahovanie v Šamoríne a okolí.", href: "/stahovanie-samorin", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Senec", description: "Vypratávanie bytov a domov v Senci.", href: "/vypratavanie-bytov-domov/senec", icon: "/icons/house_icon.svg" },
          { title: "Vypratávanie Bratislava", description: "Vypratávanie bytov v Bratislave.", href: "/vypratavanie-bytov-domov/bratislava", icon: "/icons/vypratavanie_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
