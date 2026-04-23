import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import CTA from "@/components/sections/CTA";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Sťahovanie z Rakúska na Slovensko | Sofoservis",
  description:
    "Profesionálne sťahovanie z Rakúska na Slovensko. Viedeň len 70 km od Bratislavy — doručenie rovnaký deň. Pokrývame Viedeň, Graz, Salzburg, Linz.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-z-rakuska-na-slovensko",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-rakuska-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-austria-to-slovakia",
      "x-default": "https://www.sofoservis.sk/stahovanie-z-rakuska-na-slovensko",
    },
  },
  keywords:
    "sťahovanie z Rakúska na Slovensko, sťahovanie z Viedne na Slovensko, medzinárodné sťahovanie Rakúsko Slovensko",
  openGraph: {
    title: "Sťahovanie z Rakúska na Slovensko | Sofoservis",
    description: "Profesionálne sťahovanie z Rakúska na Slovensko. Viedeň len 70 km od Bratislavy — doručenie rovnaký deň. Pokrývame Viedeň, Graz, Salzburg, Linz.",
    url: "https://www.sofoservis.sk/stahovanie-z-rakuska-na-slovensko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieZRakuskaNaSlovenskoPage() {
  const featuresData = {
    title: "Sťahovanie z Rakúska na Slovensko — Spoľahlivá preprava",
    description:
      "Profesionálne medzinárodné sťahovanie zo zahraničia na Slovensko. Skúsený tím, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Doručenie rovnaký deň do Bratislavy",
        description: "Viedeň je len 70 km od Bratislavy — väčšina sťahovaní sa dokončí za jeden pracovný deň.",
        link: "/stahovanie-z-rakuska-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celé Rakúsko",
        description: "Viedeň, Graz, Salzburg, Linz, Innsbruck, Klagenfurt a všetky ostatné rakúske mestá.",
        link: "/stahovanie-z-rakuska-na-slovensko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Bez colných formalít",
        description: "EÚ-EÚ preprava — žiadna byrokracia pri presune osobných vecí.",
        link: "/stahovanie-z-rakuska-na-slovensko",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description: "Bezpečné zabalenie všetkých predmetov pre krátku aj dlhšiu trasu.",
        link: "/stahovanie-z-rakuska-na-slovensko",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistená preprava",
        description: "Všetky veci sú poistené počas celej trasy z Rakúska na Slovensko.",
        link: "/stahovanie-z-rakuska-na-slovensko",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Montáž nábytku",
        description: "Demontáž v Rakúsku, opätovná montáž na Slovensku.",
        link: "/stahovanie-z-rakuska-na-slovensko",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako blízko je Viedeň od Bratislavy?",
      answer: "Viedeň je cca 70 km od Bratislavy — menej ako hodina jazdy autom. Ide o jednu z najkratších vzdialeností medzi európskymi hlavnými mestami, čo umožňuje veľmi rýchle sťahovanie.",
    },
    {
      question: "Sú potrebné colné formality pri sťahovaní z Rakúska na Slovensko?",
      answer: "Nie — obe krajiny sú v EÚ. Žiadne colné formality nie sú potrebné pri sťahovaní osobných vecí.",
    },
    {
      question: "Dá sa sťahovanie z Viedne na Slovensko stihnúť za jeden deň?",
      answer: "Áno — pre väčšinu domácností je možné nakládku, prepravu aj vykládku na Slovensku zvládnuť v rámci jedného pracovného dňa.",
    },
    {
      question: "Zbieráte tovar z celého Rakúska?",
      answer: "Áno, pokrývame celé Rakúsko — Viedeň, Graz, Salzburg, Linz, Innsbruck, Klagenfurt, Wels a všetky ostatné mestá.",
    },
    {
      question: "Je dostupná montáž nábytku na Slovensku?",
      answer: "Áno, demontáž nábytku v Rakúsku a opätovná montáž na vašej novej adrese na Slovensku je dostupná ako súčasť kompletného balíka.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Sťahovanie z Rakúska na Slovensko"
          description="Vraciate sa z Rakúska na Slovensko? Viedeň je len 70 km od Bratislavy — väčšina sťahovaní je hotová v priebehu jedného pracovného dňa. Pokrývame Viedeň, Graz, Salzburg, Linz a celé Rakúsko."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Sťahovanie z Rakúska na Slovensko"
          description="Vraciate sa z Rakúska na Slovensko? Viedeň je len 70 km od Bratislavy — väčšina sťahovaní je hotová v priebehu jedného pracovného dňa. Pokrývame Viedeň, Graz, Salzburg, Linz a celé Rakúsko."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div><Clients /></div>
      <div><GoogleReviews /></div>
      <HowItWorks />
      <ServicePricing filter={["medzinarodne-stahovanie", "stahovanie"]} />
      <div><Reviews showHeadline={true} /></div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>
      <div>
        <FAQ
          title="Často kladené otázky — sťahovanie z rakúska na slovensko"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />
      <div><CTA /></div>
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Sťahovanie do Rakúska", description: "Sťahovanie zo Slovenska do Rakúska.", href: "/medzinarodne-stahovanie/rakusko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Všetky medzinárodné trasy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie na Slovensko", description: "Prehľad všetkých trás na Slovensko.", href: "/stahovanie-na-slovensko", icon: "/icons/truck_icon.svg" },
          { title: "Montáž nábytku", description: "Profesionálna montáž nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
    </main>
  );
}
