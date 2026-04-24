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
  title: "Vypratávanie bytov a domov Levice | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Leviciach ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Leviciach a okolí.",
  keywords:
    "vypratavanie levice, vypratávanie bytov levice, vypratanie bytu levice, vypratanie domu levice, likvidacia odpadu levice",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/levice",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/levice",
      en: "https://www.sofoservis.sk/en/apartment-clearance-levice",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/levice",
    },
  },
};

export default function VypratavanieLevicePage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Leviciach?",
      answer:
        "Vypratávanie v Leviciach začína bezplatnou obhliadkou. Po dohode stanovíme termín a náš tím príde vybavený všetkým potrebným. Vytriedime veci, odvezieme odpad a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Leviciach?",
      answer:
        "Pre 2-izbový byt v Leviciach sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Obhliadka a cenová ponuka sú bezplatné.",
    },
    {
      question: "Pokrývate aj okolie Levíc?",
      answer:
        "Áno, pôsobíme v Leviciach a okolí — Šahy, Želiezovce, Tlmače, Tekovské Lužany a ďalšie obce Nitrianskeho kraja.",
    },
    {
      question: "Ako rýchlo dokážete prísť do Levíc?",
      answer:
        "V naliehavých prípadoch dokážeme prísť do 24-48 hodín. Pre štandardné zákazky sa snažíme vyjsť v ústrety vašim termínom.",
    },
    {
      question: "Vypratávate aj po zosnulých v Leviciach?",
      answer:
        "Áno, zabezpečujeme citlivé vypratávanie pozostalosti v Leviciach s maximálnou empatiou a diskréciou.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Leviciach",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Leviciach a okolí. Komplexné služby za férové ceny — od triedenia vecí po likvidáciu odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Leviciach",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Leviciach",
    description: "Profesionálne vypratávanie nehnuteľností v Leviciach a okolí.",
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
        description: "Vyčistíme pozemky od odpadu v Leviciach a okolí.",
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

  const leviceNearby = [
    "Levice centrum",
    "Šahy",
    "Želiezovce",
    "Tlmače",
    "Tekovské Lužany",
    "Zlaté Moravce",
    "Vráble",
    "Pukanec",
    "Nová Baňa",
    "Hronovce",
    "Bátovce",
    "Čajkov",
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
          title="Vypratávanie v Leviciach a okolí"
          description="Poskytujeme vypratávacie služby v Leviciach a priľahlých obciach"
          locations={leviceNearby}
          additionalText="Okrem Levíc pôsobíme aj v Zlatých Moravciach, Šahách a ďalších obciach Nitrianskeho kraja."
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
        <FAQ title="Často kladené otázky o vypratávaní v Leviciach" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Leviciach?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Leviciach a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Levice", description: "Profesionálne sťahovanie v Leviciach a okolí.", href: "/stahovanie-levice", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Nitra", description: "Vypratávanie bytov a domov v Nitre.", href: "/vypratavanie-bytov-domov/nitra", icon: "/icons/house_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
