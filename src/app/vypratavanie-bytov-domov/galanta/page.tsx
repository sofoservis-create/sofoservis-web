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
  title: "Vypratávanie bytov a domov Galanta | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Galante ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Galante a okolí.",
  keywords:
    "vypratavanie galanta, vypratávanie bytov galanta, vypratanie bytu galanta, vypratanie domu galanta, likvidacia odpadu galanta",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/galanta",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/galanta",
      en: "https://www.sofoservis.sk/en/apartment-clearance-galanta",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/galanta",
    },
  },
};

export default function VypratavanieGalantaPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Galante?",
      answer:
        "Vypratávanie v Galante začína bezplatnou obhliadkou. Po odsúhlasení cenovej ponuky stanovíme termín. Náš tím príde vybavený všetkým potrebným, vytriedime veci, odvezieme odpad a priestor upraceme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Galante?",
      answer:
        "Cena závisí od veľkosti priestoru a množstva vecí. Pre 2-izbový byt v Galante sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Obhliadka a cenová ponuka je bezplatná.",
    },
    {
      question: "Pôsobíte aj v okolí Galanty?",
      answer:
        "Áno, okrem Galanty obsluhujeme aj Šaľu, Sereď, Šintavu, Kráľovu nad Váhom a ďalšie obce v Trnavskom a Nitrianskom kraji.",
    },
    {
      question: "Zabezpečíte aj odvoz odpadu po vypratávaní v Galante?",
      answer:
        "Áno, odvoz a ekologická likvidácia odpadu je súčasťou našej služby. Odvážame na zberné dvory v Galante a okolí v súlade s platnou legislatívou.",
    },
    {
      question: "Vypratávate aj starší rodinný dom s veľkým množstvom vecí v okolí Galanty?",
      answer:
        "Áno, špecializujeme sa práve na väčšie zákazky — staré domy, usadlosti a nehnuteľnosti s dlhodobo nahromadenými vecami. Máme skúsenosti s každým typom obsahu.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Galante",
    description:
      "Profesionálne a rýchle vypratávanie bytov, domov a nehnuteľností v Galante a okolí. Komplexné služby od triedenia vecí, cez odvoz, až po ekologickú.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Galante",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Galante",
    description:
      "Profesionálne vypratávanie nehnuteľností s odvozom a likvidáciou vecí v Galante a okolí.",
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
        description: "Vyčistíme pozemky od odpadu v Galante a okolí.",
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
        description: "Odvoz stavebného odpadu, sute a demolačných materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  const galantaNearby = [
    "Galanta centrum",
    "Sereď",
    "Šaľa",
    "Šintava",
    "Kráľová nad Váhom",
    "Vlčany",
    "Jelka",
    "Veľká Mača",
    "Horná Kráľová",
    "Pusté Úľany",
    "Tomášikovo",
    "Šúrovce",
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
          title="Vypratávanie v Galante a okolí"
          description="Poskytujeme vypratávacie služby v Galante a priľahlých obciach"
          locations={galantaNearby}
          additionalText="Okrem Galanty pôsobíme aj v Šali, Seredi, Komárne a ďalších obciach."
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
        <FAQ title="Často kladené otázky o vypratávaní v Galante" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Galante?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Galante a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Galanta", description: "Profesionálne sťahovanie v Galante a okolí.", href: "/stahovanie-galanta", icon: "/icons/truck_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Vypratávanie pivníc a garáží", description: "Rýchle vypratanie pivníc, kobiek a garáží.", href: "/vypratavanie-pivnic-garazi-nebytovych-priestorov", icon: "/icons/house_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
