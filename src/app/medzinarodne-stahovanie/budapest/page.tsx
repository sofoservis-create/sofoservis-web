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
  title: "Sťahovanie do Budapešti z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Budapešti z Bratislavy (200 km). Rýchla preprava, skúsený tím, poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/budapest",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/budapest",
      en: "https://www.sofoservis.sk/en/moving-to-budapest",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/budapest",
    },
  },
  keywords:
    "sťahovanie do Budapešti, preprava Bratislava Budapešť, sťahovanie Budapešť, medzinárodné sťahovanie Budapešť, sťahovanie Maďarsko",
  openGraph: {
    title: "Sťahovanie do Budapešti z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Budapešti z Bratislavy — len 200 km, cca 2 hod. jazdy. Rýchla preprava, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/budapest",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniBudapestPage() {
  const heroData = {
    title: "Sťahovanie do Budapešti",
    description:
      "Sťahujeme z Bratislavy do Budapešti a z Budapešti do Bratislavy. Vzdialenosť iba 200 km — cesta trvá cca 2 hodiny. Jednodenné sťahovanie zvládnuteľné.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Budapešť",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Budapešti cez Sofoservis",
    description:
      "Budapešť je susedná metropola — blízka, rýchla a cenovo výhodná trasa.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Budapešti",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Budapešti — balenie, nakládka, preprava, vykládka.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Budapešti",
        description:
          "Presun kancelárie z Bratislavy do Budapešti s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Preprava nábytku do Budapešti",
        description:
          "Bezpečná preprava nábytku a osobných vecí na trase Bratislava – Budapešť.",
        link: "/stahovanie-preprava-nabytku",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celá Budapešť",
        description:
          "Sťahujeme do všetkých budapestských obvodov — I. Várhegy až XXIII. Soroksár.",
        link: "/medzinarodne-stahovanie/madarsko",
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
          "Váš majetok je poistený počas celej trasy z Bratislavy do Budapešti.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aká je vzdialenosť z Bratislavy do Budapešti?",
      answer:
        "Vzdialenosť z centra Bratislavy do centra Budapešti je cca 200 km. Jazdou po diaľnici M1 trvá cesta asi 2 hodiny. Celé sťahovanie (vrátane nakládky a vykládky) zvyčajne zvládneme za jeden deň.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Maďarska?",
      answer:
        "Maďarsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj z Budapešti do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Budapešti?",
      answer:
        "Budapešť je blízka destinácia, takže cena je priaznivá. Závisí od objemu vecí a doplnkových služieb. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do okolia Budapešti?",
      answer:
        "Áno, sťahujeme do celej aglomerácie Budapešti vrátane okolitých miest ako Gödöllő, Érd, Budaörs a ďalšie.",
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
        benefits={["Len 200 km z Bratislavy", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Budapešti"
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
          { title: "Sťahovanie do Maďarska", description: "Sťahovanie do celého Maďarska.", href: "/medzinarodne-stahovanie/madarsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Viedne", description: "Preprava do Viedne (60 km).", href: "/medzinarodne-stahovanie/vieden", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
