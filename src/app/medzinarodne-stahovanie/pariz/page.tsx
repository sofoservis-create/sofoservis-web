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
  title: "Sťahovanie do Paríža z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Paríža z Bratislavy (1 400 km). EÚ formality, skúsený tím, poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/pariz",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/pariz",
      en: "https://www.sofoservis.sk/en/moving-to-paris",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/pariz",
    },
  },
  keywords:
    "sťahovanie do Paríža, preprava Bratislava Paríž, sťahovanie Paríž, medzinárodné sťahovanie Paríž, sťahovanie Francúzsko Paríž",
  openGraph: {
    title: "Sťahovanie do Paríža z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Paríža z Bratislavy — 1 400 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/pariz",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieParizPage() {
  const heroData = {
    title: "Sťahovanie do Paríža",
    description:
      "Sťahujeme z Bratislavy do Paríža — mesta svetla a európskej kultúry. Vzdialenosť 1 400 km, cca 13 hodín jazdy. EÚ formality, poistenie zahrnuté.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Paríž",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Paríža cez Sofoservis",
    description:
      "Paríž — mesto svetla a cieľ slovenských expatov. Trasa dlhá, ale zvládnuteľná.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Paríža",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Paríža vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Paríža",
        description:
          "Presun kancelárie z Bratislavy do Paríža s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Paríž",
        description:
          "Sťahujeme do všetkých parížskych arrondissement — 1er až 20ème arrondissement.",
        link: "/medzinarodne-stahovanie/francuzsko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Francúzsko je v EÚ — žiadne colné poplatky na osobné veci.",
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
          "Váš majetok je poistený počas celej trasy z Bratislavy do Paríža.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Paríža?",
      answer:
        "Vzdialenosť z Bratislavy do Paríža je cca 1 400 km. Jazdou trvá cesta asi 13 hodín. Realizujeme to väčšinou ako 2-dňovú expedíciu.",
    },
    {
      question: "Je ťažké parkovať v Paríži pri sťahovaní?",
      answer:
        "Paríž má veľmi obmedzené parkovanie, najmä v centre. Poradíme vám, ako zariadiť povolenie pre sťahovacie vozidlo.",
    },
    {
      question: "Sťahujete aj z Paríža do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Paríža?",
      answer:
        "Paríž je vzdialenejšia destinácia. Cena závisí od objemu vecí. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do okolia Paríža — napríklad do Versailles?",
      answer:
        "Áno, sťahujeme do celého Île-de-France regiónu — Paríž a okolie vrátane Versailles, Saint-Denis, Boulogne-Billancourt a ďalšie.",
    },
  ];

  return (
    <main className="bg-white">
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
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          benefits={["Bratislava – Paríž 1 400 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Bratislava – Paríž 1 400 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Paríža"
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
          { title: "Sťahovanie do Francúzska", description: "Sťahovanie do celého Francúzska.", href: "/medzinarodne-stahovanie/francuzsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Belgicka", description: "Preprava do Belgicka.", href: "/medzinarodne-stahovanie/belgicko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
