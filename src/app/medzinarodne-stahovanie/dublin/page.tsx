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
  title: "Sťahovanie do Dublinu z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Dublinu z Bratislavy. Trasa cez kontinent + lodný transport. EÚ formality, poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/dublin",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/dublin",
      en: "https://www.sofoservis.sk/en/moving-to-dublin",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/dublin",
    },
  },
  keywords:
    "sťahovanie do Dublinu, preprava Bratislava Dublin, sťahovanie Dublin, medzinárodné sťahovanie Dublin, sťahovanie Írsko Dublin",
  openGraph: {
    title: "Sťahovanie do Dublinu z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Dublinu z Bratislavy. Lodný transport, EÚ formality, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/dublin",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaneDublinPage() {
  const heroData = {
    title: "Sťahovanie do Dublinu",
    description:
      "Sťahujeme z Bratislavy do Dublinu — írskej metropoly. Trasa zahŕňa cestu cez kontinentálnu Európu a prechod lodou cez Írske more.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Dublin",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Dublinu cez Sofoservis",
    description:
      "Dublin — dynamické írske mesto plné príležitostí pre Slovákov. Lodný transport zariadíme.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Dublinu",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Dublinu vrátane lodného transportu.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Dublinu",
        description:
          "Presun kancelárie z Bratislavy do Dublinu s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Dublin",
        description:
          "Sťahujeme do všetkých dublinských štvrtí — Dublin 1 až Dublin 24.",
        link: "/medzinarodne-stahovanie/irsko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Írsko je v EÚ — žiadne colné poplatky. Pomáhame aj s lodnou dokumentáciou.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Vodotesné balenie",
        description:
          "Pre lodný transport používame vodotesné baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy vrátane lodného transportu.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako sa prepravujú veci z Bratislavy do Dublinu?",
      answer:
        "Trasa vedie cez kontinentálnu Európu (Nemecko, Holandsko/Belgicko) a potom lodou cez Írske more (napríklad Holyhead – Dublin alebo Pembroke – Rosslare). Celá logistika je na nás.",
    },
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Dublinu?",
      answer:
        "Celá trasa vrátane lodného prechodu trvá 2–3 dni. Plánujeme individuálne.",
    },
    {
      question: "Sťahujete aj z Dublinu do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Dublinu?",
      answer:
        "Dublin je vzdialenejšia destinácia vyžadujúca lodný transport — cena je vyššia. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj mimo Dublinu — napríklad do Corku?",
      answer:
        "Áno, sťahujeme do celého Írska — Dublin, Cork, Galway, Limerick a ďalšie mestá.",
    },
  ];

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
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
          benefits={["Lodný transport zariadíme za vás", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          benefits={["Lodný transport zariadíme za vás", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
          showMascot
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotSrc="/images/mascot/2holding boxes mascot.svgz"
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
          title="Často kladené otázky — sťahovanie do Dublinu"
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
          { title: "Sťahovanie do Írska", description: "Sťahovanie do celého Írska.", href: "/medzinarodne-stahovanie/irsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Anglicka", description: "Preprava do UK.", href: "/medzinarodne-stahovanie/anglicko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
