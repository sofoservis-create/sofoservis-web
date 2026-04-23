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
  title: "Sťahovanie do Bruselu z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Bruselu z Bratislavy (1 350 km). EÚ hlavné mesto, skúsený tím, poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/brusel",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/brusel",
      en: "https://www.sofoservis.sk/en/moving-to-brussels",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/brusel",
    },
  },
  keywords:
    "sťahovanie do Bruselu, preprava Bratislava Brusel, sťahovanie Brusel, medzinárodné sťahovanie Brusel, sťahovanie Belgicko Brusel",
  openGraph: {
    title: "Sťahovanie do Bruselu z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Bruselu z Bratislavy — 1 350 km. EÚ hlavné mesto, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/brusel",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniBruselPage() {
  const heroData = {
    title: "Sťahovanie do Bruselu",
    description:
      "Sťahujeme z Bratislavy do Bruselu — hlavného mesta Belgicka a de facto hlavného mesta EÚ. Vzdialenosť 1 350 km, cca 12–13 hodín jazdy. Oblíbená destinácia.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Brusel",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Bruselu cez Sofoservis",
    description:
      "Brusel — európska metropola a domov slovenských diplomatov a expats v inštitúciách EÚ.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Bruselu",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Bruselu vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Bruselu",
        description:
          "Presun kancelárie z Bratislavy do Bruselu — ideálne pre diplomatov a pracovníkov EÚ inštitúcií.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Brusel",
        description:
          "Sťahujeme do všetkých bruselských komunít — Brussels, Ixelles, Uccle, Etterbeek a ďalšie.",
        link: "/medzinarodne-stahovanie/belgicko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Belgicko je v EÚ — žiadne colné poplatky na osobné veci.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu cez Európu používame zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Bruselu.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Bruselu?",
      answer:
        "Vzdialenosť z Bratislavy do Bruselu je cca 1 350 km. Jazdou trvá cesta asi 12–13 hodín. Realizujeme to väčšinou ako 2-dňovú expedíciu.",
    },
    {
      question: "Sťahujete aj z Bruselu do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Bruselu?",
      answer:
        "Brusel je vzdialenejšia destinácia. Cena závisí od objemu vecí. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do okolia Bruselu alebo Flandrií?",
      answer:
        "Áno, sťahujeme do celého Belgicka — Brusel, Antverpy, Gent a ďalšie.",
    },
    {
      question: "Pracujete s diplomatickými presunmi do Bruselu?",
      answer:
        "Áno, máme skúsenosti s diplomatickými presunmi a presunmi pre pracovníkov EÚ inštitúcií. Kontaktujte nás pre individuálnu ponuku.",
    },
  ];

  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
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
          benefits={["Hlavné mesto EÚ", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
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
          benefits={["Hlavné mesto EÚ", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Bruselu"
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
          { title: "Sťahovanie do Belgicka", description: "Sťahovanie do celého Belgicka.", href: "/medzinarodne-stahovanie/belgicko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Holandska", description: "Preprava do Holandska.", href: "/medzinarodne-stahovanie/holandsko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
