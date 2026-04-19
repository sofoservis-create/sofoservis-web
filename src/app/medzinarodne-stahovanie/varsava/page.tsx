import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Sťahovanie do Varšavy z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Varšavy z Bratislavy (650 km). EÚ formality, skúsený tím, poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/varsava",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/varsava",
      en: "https://www.sofoservis.sk/en/moving-to-warsaw",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/varsava",
    },
  },
  keywords:
    "sťahovanie do Varšavy, preprava Bratislava Varšava, sťahovanie Varšava, medzinárodné sťahovanie Varšava, sťahovanie Poľsko Varšava",
  openGraph: {
    title: "Sťahovanie do Varšavy z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Varšavy z Bratislavy — 650 km. EÚ formality, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/varsava",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieVarsavaPage() {
  const heroData = {
    title: "Sťahovanie do Varšavy",
    description:
      "Sťahujeme z Bratislavy do Varšavy — hlavného mesta Poľska. Vzdialenosť 650 km, cca 6–7 hodín jazdy.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Varšava",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Varšavy cez Sofoservis",
    description:
      "Varšava — dynamická poľská metropola. Trasa overená, tím skúsený.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Varšavy",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Varšavy vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Varšavy",
        description:
          "Presun kancelárie z Bratislavy do Varšavy s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celá Varšava",
        description:
          "Sťahujeme do všetkých varšavských štvrtí — Śródmieście, Praga, Ursynów a ďalšie.",
        link: "/medzinarodne-stahovanie/polsko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Poľsko je v EÚ — žiadne colné poplatky na osobné veci.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description:
          "Bezpečná preprava nábytku a vecí na trase Bratislava – Varšava.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Varšavy.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aká je vzdialenosť z Bratislavy do Varšavy?",
      answer:
        "Vzdialenosť z Bratislavy do Varšavy je cca 650 km. Jazdou trvá cesta asi 6–7 hodín. Celé sťahovanie zvyčajne realizujeme ako jednodenné.",
    },
    {
      question: "Sťahujete aj z Varšavy do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Varšavy?",
      answer:
        "Cena závisí od objemu vecí a doplnkových služieb. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do okolia Varšavy?",
      answer:
        "Áno, sťahujeme do celého Mazovského vojvodstva vrátane miest v okolí Varšavy.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Varšavy?",
      answer:
        "Poľsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Bratislava – Varšava 650 km / 6–7 hod.", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
      />
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
          title="Často kladené otázky — sťahovanie do Varšavy"
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
          { title: "Sťahovanie do Poľska", description: "Sťahovanie do celého Poľska.", href: "/medzinarodne-stahovanie/polsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Česka", description: "Preprava do ČR.", href: "/medzinarodne-stahovanie/ceska-republika", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
