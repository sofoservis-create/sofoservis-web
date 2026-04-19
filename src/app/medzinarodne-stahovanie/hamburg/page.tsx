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
  title: "Sťahovanie do Hamburgu z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Hamburgu z Bratislavy (1 100 km). Skúsený tím, poistenie zahrnuté, transparentná cena. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/hamburg",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/hamburg",
      en: "https://www.sofoservis.sk/en/moving-to-hamburg",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/hamburg",
    },
  },
  keywords:
    "sťahovanie do Hamburgu, preprava Bratislava Hamburg, sťahovanie Hamburg, medzinárodné sťahovanie Hamburg, sťahovanie do Nemecka Hamburg",
  openGraph: {
    title: "Sťahovanie do Hamburgu z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Hamburgu z Bratislavy — 1 100 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/hamburg",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieHamburgPage() {
  const heroData = {
    title: "Sťahovanie do Hamburgu",
    description:
      "Sťahujeme z Bratislavy do Hamburgu — druhého najväčšieho nemeckého mesta a dôležitého prístavu. Vzdialenosť 1 100 km si vyžaduje 2-dňovú expedíciu.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Hamburg",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Hamburgu cez Sofoservis",
    description:
      "Hamburg — prístavné mesto na severe Nemecka. Dlhšia trasa, skúsený tím.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Hamburgu",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Hamburgu vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Hamburgu",
        description:
          "Presun kancelárie z Bratislavy do Hamburgu s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Hamburg",
        description:
          "Sťahujeme do všetkých hamburských štvrtí — Altona, Eimsbüttel, Hamburg-Mitte a ďalšie.",
        link: "/medzinarodne-stahovanie/nemecko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Nemecko je v EÚ — žiadne colné poplatky na osobné veci.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu 1 100 km používame zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Hamburgu.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aká je vzdialenosť z Bratislavy do Hamburgu?",
      answer:
        "Vzdialenosť z Bratislavy do Hamburgu je cca 1 100 km. Jazdou trvá cesta asi 10 hodín. Realizujeme to ako 2-dňovú expedíciu s nocľahom.",
    },
    {
      question: "Sťahujete aj z Hamburgu do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Hamburgu?",
      answer:
        "Hamburg je vzdialenejšia destinácia — cena je vyššia ako pre Mníchov alebo Berlín. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do okolia Hamburgu?",
      answer:
        "Áno, sťahujeme do celej aglomerácie Hamburgu vrátane okolia — Lübeck, Kiel, Lüneburg a ďalšie.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Hamburgu?",
      answer:
        "Nemecko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
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
        benefits={["Bratislava – Hamburg 1 100 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Hamburgu"
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
          { title: "Sťahovanie do Nemecka", description: "Sťahovanie do celého Nemecka.", href: "/medzinarodne-stahovanie/nemecko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Berlína", description: "Preprava do Berlína.", href: "/medzinarodne-stahovanie/berlin", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
