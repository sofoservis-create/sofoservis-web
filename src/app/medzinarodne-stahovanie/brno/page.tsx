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
  title: "Sťahovanie do Brna z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Brna z Bratislavy (130 km). Rýchla jednodenná preprava, skúsený tím, poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/brno",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/brno",
      en: "https://www.sofoservis.sk/en/moving-to-brno",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/brno",
    },
  },
  keywords:
    "sťahovanie do Brna, preprava Bratislava Brno, sťahovanie Brno, medzinárodné sťahovanie Brno, sťahovanie do ČR Brno",
  openGraph: {
    title: "Sťahovanie do Brna z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Brna z Bratislavy — len 130 km. Rýchla jednodenná preprava, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/brno",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaneBrnoPage() {
  const heroData = {
    title: "Sťahovanie do Brna",
    description:
      "Sťahujeme z Bratislavy do Brna a z Brna do Bratislavy. Vzdialenosť iba 130 km — rýchla jednodenná preprava za výhodné ceny. Brno je druhé najväčšie mesto.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Brno",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Brna cez Sofoservis",
    description:
      "Brno — studijné a kultúrne centrum Moravy. Len 130 km od Bratislavy, cenovo výhodná trasa.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Brna",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Brna — balenie, nakládka, preprava, vykládka.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií do Brna",
        description:
          "Presun kancelárie z Bratislavy do Brna s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Preprava nábytku do Brna",
        description:
          "Bezpečná preprava nábytku a osobných vecí na trase Bratislava – Brno.",
        link: "/stahovanie-preprava-nabytku",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celé Brno",
        description:
          "Sťahujeme do všetkých brnianskych štvrtí — Brno-střed, Židenice, Bohunice a ďalšie.",
        link: "/medzinarodne-stahovanie/ceska-republika",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Balenie a materiál",
        description:
          "Poskytneme baliaci materiál a profesionálne zabalíme vaše veci.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Brna.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aká je vzdialenosť z Bratislavy do Brna?",
      answer:
        "Vzdialenosť z Bratislavy do Brna je cca 130 km. Jazdou trvá cesta asi 1,5 hodiny. Celé sťahovanie zvyčajne zvládneme za dopoludnie alebo jeden deň.",
    },
    {
      question: "Je sťahovanie do Brna lacnejšie ako do Prahy?",
      answer:
        "Áno, Brno je podstatne bližšie ako Praha (130 km vs 330 km), čo sa výrazne odráža na cene prepravy.",
    },
    {
      question: "Sťahujete aj z Brna do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Brna?",
      answer:
        "Brno je jedna z najbližších medzinárodných destinácií — cena je priaznivá. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do okolia Brna — napríklad do Kuřimu?",
      answer:
        "Áno, sťahujeme do celej Juhomoravskej oblasti vrátane obcí v okolí Brna.",
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
        benefits={["Len 130 km z Bratislavy", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Brna"
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
          { title: "Sťahovanie do Česka", description: "Sťahovanie do celej ČR.", href: "/medzinarodne-stahovanie/ceska-republika", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Prahy", description: "Preprava do Prahy (330 km).", href: "/medzinarodne-stahovanie/praha", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
