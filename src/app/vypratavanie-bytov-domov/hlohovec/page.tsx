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
  title: "Vypratávanie bytov a domov Hlohovec | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Hlohovci ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Hlohovci a okolí.",
  keywords:
    "vypratavanie hlohovec, vypratávanie bytov hlohovec, vypratanie bytu hlohovec, vypratanie domu hlohovec, likvidacia odpadu hlohovec",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/hlohovec",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/hlohovec",
      en: "https://www.sofoservis.sk/en/apartment-clearance-hlohovec",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/hlohovec",
    },
  },
};

export default function VypratavanieHlohovecPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Hlohovci?",
      answer:
        "Vypratávanie v Hlohovci začína bezplatnou obhliadkou. Po dohode stanovíme termín, príde náš tím, vytriedime veci podľa vašich požiadaviek, odvezieme nepotrebný materiál a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Hlohovci?",
      answer:
        "Cena závisí od veľkosti a obsahu priestoru. Pre 2-izbový byt v Hlohovci sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme bezplatnú obhliadku a nezáväznú cenovú ponuku.",
    },
    {
      question: "Pôsobíte aj v okolí Hlohovca?",
      answer:
        "Áno, pôsobíme v Hlohovci a okolí vrátane Leopoldova, Piešťan, Serede, Dvory nad Žitavou a ďalších obcí v regióne.",
    },
    {
      question: "Ako rýchlo dokážete prísť vypratávať do Hlohovca?",
      answer:
        "V naliehavých prípadoch dokážeme prísť do 24-48 hodín. Pre štandardné zákazky sa snažíme vyjsť v ústrety vašim termínom.",
    },
    {
      question: "Zabezpečujete odvoz odpadu z vypratávania v Hlohovci?",
      answer:
        "Áno, odvoz a ekologická likvidácia sú súčasťou našej služby. Odvážame odpad na zberné dvory a skládky v Hlohovci a Trnavskom kraji.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Hlohovci",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Hlohovci a okolí. Od triedenia vecí po ekologickú likvidáciu odpadu — za férové ceny.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Hlohovci",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Hlohovci",
    description: "Profesionálne vypratávanie nehnuteľností v Hlohovci a okolí.",
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
        description: "Vyčistíme pozemky od odpadu v Hlohovci a okolí.",
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

  const hlohovecNearby = [
    "Hlohovec centrum",
    "Leopoldov",
    "Červeník",
    "Sereď",
    "Šulekovo",
    "Horná Streda",
    "Bojničky",
    "Dolné Otrokovce",
    "Ratnovce",
    "Mochovce",
    "Dvorníky",
    "Tepličky",
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
          title="Vypratávanie v Hlohovci a okolí"
          description="Poskytujeme vypratávacie služby v Hlohovci a priľahlých obciach"
          locations={hlohovecNearby}
          additionalText="Okrem Hlohovca pôsobíme aj v Piešťanoch, Trnave a ďalších obciach regiónu."
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
        <FAQ title="Často kladené otázky o vypratávaní v Hlohovci" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Hlohovci?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Hlohovci a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Hlohovec", description: "Profesionálne sťahovanie v Hlohovci a okolí.", href: "/stahovanie-hlohovec", icon: "/icons/truck_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Vypratávanie Trnava", description: "Vypratávanie bytov v Trnave.", href: "/vypratavanie-bytov-domov/trnava", icon: "/icons/house_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
