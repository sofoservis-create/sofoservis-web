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
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie bytov a domov Komárno | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Komárne ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Komárne a okolí.",
  keywords:
    "vypratavanie komarno, vypratávanie bytov komarno, vypratanie bytu komarno, vypratanie domu komarno, likvidacia odpadu komarno",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/komarno",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/komarno",
      en: "https://www.sofoservis.sk/en/apartment-clearance-komarno",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/komarno",
    },
  },
};

export default function VypratavanieKomarnoPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Komárne?",
      answer:
        "Vypratávanie v Komárne začína bezplatnou obhliadkou. Po dohode stanovíme termín a náš tím príde vybavený všetkým potrebným. Vytriedime veci, odvezieme odpad a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Komárne?",
      answer:
        "Pre 2-izbový byt v Komárne sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Obhliadka a cenová ponuka sú bezplatné a nezáväzné.",
    },
    {
      question: "Pokrývate aj okolie Komárna?",
      answer:
        "Áno, pôsobíme v Komárne a okolí — Štúrovo, Hurbanovo, Šaľa, Nové Zámky a ďalšie obce Nitrianskeho kraja.",
    },
    {
      question: "Vypratávate aj staré domy a usadlosti v okolí Komárna?",
      answer:
        "Áno, v regióne Komárna sa stretávame s vypratávaním starších rodinných domov a usadlostí. Máme skúsenosti s každým typom nehnuteľností.",
    },
    {
      question: "Ako rýchlo dokážete prísť vypratávať do Komárna?",
      answer:
        "V naliehavých prípadoch dokážeme prísť do 24-48 hodín od kontaktovania.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Komárne",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Komárne a okolí. Komplexné služby za férové ceny — rýchlo a spoľahlivo.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Komárne",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Komárne",
    description: "Profesionálne vypratávanie nehnuteľností v Komárne a okolí.",
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
        description: "Vyčistíme pozemky od odpadu v Komárne a okolí.",
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

  const komarnoNearby = [
    "Komárno centrum",
    "Hurbanovo",
    "Štúrovo",
    "Nové Zámky",
    "Martovce",
    "Kravany nad Dunajom",
    "Patince",
    "Radvaň nad Dunajom",
    "Moča",
    "Iža",
    "Búč",
    "Zlatná na Ostrove",
  ];

  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

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
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={756}
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
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div><Clients /></div>
      <div><GoogleReviews /></div>
      <div><Reviews showHeadline={true} /></div>
      <div>
        <LocationMap
          title="Vypratávanie v Komárne a okolí"
          description="Poskytujeme vypratávacie služby v Komárne a priľahlých obciach"
          locations={komarnoNearby}
          additionalText="Okrem Komárna pôsobíme aj v Štúrove, Nových Zámkoch, Šali a ďalších obciach regiónu."
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
        <FAQ title="Často kladené otázky o vypratávaní v Komárne" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Komárne?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Komárne a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Komárno", description: "Profesionálne sťahovanie v Komárne a okolí.", href: "/stahovanie-komarno", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Nitra", description: "Vypratávanie bytov a domov v Nitre.", href: "/vypratavanie-bytov-domov/nitra", icon: "/icons/house_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
