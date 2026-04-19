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
  title: "Sťahovanie do Viedne zo Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Viedne z Bratislavy. Vzdialenosť len 60 km — rýchla a cenovo výhodná preprava. Skúsený tím, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/vieden",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/vieden",
      en: "https://www.sofoservis.sk/en/moving-to-vienna",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/vieden",
    },
  },
  keywords:
    "sťahovanie do Viedne, preprava Bratislava Viedeň, sťahovanie Viedeň, medzinárodné sťahovanie Viedeň, sťahovanie do Rakúska Viedeň",
  openGraph: {
    title: "Sťahovanie do Viedne zo Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Viedne z Bratislavy — len 60 km. Rýchla preprava, férové ceny, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/vieden",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieViedenPage() {
  const heroData = {
    title: "Sťahovanie do Viedne",
    description:
      "Sťahujeme z Bratislavy do Viedne a z Viedne do Bratislavy. Vzdialenosť iba 60 km robí z tejto trasy jednu z najrýchlejších a najvýhodnejších medzinárodných prepráv. Nakladáme v Bratislave ráno — a ešte dopoludnia sú vaše veci vo Viedni.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Viedeň",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Viedne cez Sofoservis",
    description:
      "Trasa Bratislava – Viedeň je naša domáca medzinárodná trasa. Vykonávame ju pravidelne.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Viedne",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Viedne — balenie, nakládka, preprava, vykládka.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Viedne",
        description:
          "Presun kancelárie alebo firmy z Bratislavy do Viedne počas víkendu pre minimálny prestoj.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Preprava nábytku do Viedne",
        description:
          "Bezpečná preprava jednotlivých kusov nábytku alebo celého zariadenia z Bratislavy do Viedne.",
        link: "/stahovanie-preprava-nabytku",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Všetky časti Viedne",
        description:
          "Sťahujeme do všetkých viedenských obvodov — 1. obvod (centrum) až 23. obvod (Liesing).",
        link: "/medzinarodne-stahovanie/rakusko",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Balenie a materiál",
        description:
          "Poskytneme baliaci materiál a profesionálne zabalíme vaše veci pre bezpečnú prepravu.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Viedne.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aká je vzdialenosť z Bratislavy do Viedne a ako dlho trvá cesta?",
      answer:
        "Vzdialenosť z centra Bratislavy do centra Viedne je cca 60 km. Jazdou po diaľnici A1/E60 trvá cesta asi 50–60 minút. Sťahovanie (vrátane nakládky a vykládky) zvyčajne zvládneme za jeden deň.",
    },
    {
      question: "Potrebujem špeciálne povolenie na parkovanie vo Viedni pri sťahovaní?",
      answer:
        "Viedeň má zóny s obmedzeným parkovaním. Pri sťahovaní do centra (1.–9. obvod) je zvyčajne potrebné povolenie na dočasné parkovanie sťahovacieho vozidla. Poradíme vám, ako ho získať, prípadne to zariadíme za vás.",
    },
    {
      question: "Sťahujete aj z Viedne do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch. Ak sa vraciate zo Viedne na Slovensko, rovnako nás kontaktujte.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Viedne?",
      answer:
        "Cena závisí od objemu vecí, poschodia, potreby balenia a ďalších faktorov. Viedeň je blízka destinácia, preto je cena za medzinárodnú prepravu relatívne nízka. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do okolia Viedne — napríklad do Baden bei Wien?",
      answer:
        "Áno, sťahujeme do celého regiónu Viedeň vrátane okolitých obcí ako Baden, Klosterneuburg, Mödling a ďalšie.",
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
        benefits={["Len 60 km z Bratislavy", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Viedne"
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
          { title: "Sťahovanie do Rakúska", description: "Sťahovanie do celého Rakúska.", href: "/medzinarodne-stahovanie/rakusko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
          { title: "Sťahovanie kancelárií", description: "Firemné sťahovanie s minimálnym prestojom.", href: "/stahovanie-kancelarii-firiem", icon: "/icons/briefcase_icon.svg" },
        ]}
      />
    </main>
  );
}
