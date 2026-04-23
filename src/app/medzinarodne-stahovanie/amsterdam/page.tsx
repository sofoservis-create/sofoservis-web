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
  title: "Sťahovanie do Amsterdamu z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Amsterdamu z Bratislavy (1 250 km). Skúsený tím, EÚ formality, poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/amsterdam",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/amsterdam",
      en: "https://www.sofoservis.sk/en/moving-to-amsterdam",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/amsterdam",
    },
  },
  keywords:
    "sťahovanie do Amsterdamu, preprava Bratislava Amsterdam, sťahovanie Amsterdam, medzinárodné sťahovanie Amsterdam, sťahovanie Holandsko Amsterdam",
  openGraph: {
    title: "Sťahovanie do Amsterdamu z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Amsterdamu z Bratislavy — 1 250 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/amsterdam",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieAmsterdamPage() {
  const heroData = {
    title: "Sťahovanie do Amsterdamu",
    description:
      "Sťahujeme z Bratislavy do Amsterdamu — holandskej metropoly a obchodného centra. Vzdialenosť 1 250 km, cca 11–12 hodín jazdy. EÚ formality, poistenie.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Amsterdam",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Amsterdamu cez Sofoservis",
    description:
      "Amsterdam — kanálové mesto v Holandsku. Trasa cez Nemecko, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Amsterdamu",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Amsterdamu vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Amsterdamu",
        description:
          "Presun kancelárie z Bratislavy do Amsterdamu s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Amsterdam",
        description:
          "Sťahujeme do všetkých amsterdamských štvrtí — Centrum, Oud-West, De Pijp, Noord a ďalšie.",
        link: "/medzinarodne-stahovanie/holandsko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Holandsko je v EÚ — žiadne colné poplatky na osobné veci.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu cez Nemecko a Holandsko používame zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Amsterdamu.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Amsterdamu?",
      answer:
        "Vzdialenosť z Bratislavy do Amsterdamu je cca 1 250 km. Jazdou trvá cesta asi 11–12 hodín. Realizujeme to väčšinou ako 2-dňovú expedíciu.",
    },
    {
      question: "Sťahujete aj z Amsterdamu do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Je ťažké parkovať v Amsterdame pri sťahovaní?",
      answer:
        "Amsterdam je hustou mestskou oblasťou s obmedzeným parkovaním. Poradíme vám, ako zariadiť parkovanie pre sťahovacie vozidlo.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Amsterdamu?",
      answer:
        "Amsterdam je vzdialenejšia destinácia. Cena závisí od objemu vecí. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do iných holandských miest?",
      answer:
        "Áno, sťahujeme do celého Holandska — Amsterdam, Rotterdam, Haag, Utrecht a ďalšie.",
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
          benefits={["Bratislava – Amsterdam 1 250 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Bratislava – Amsterdam 1 250 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Amsterdamu"
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
          { title: "Sťahovanie do Holandska", description: "Sťahovanie do celého Holandska.", href: "/medzinarodne-stahovanie/holandsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Belgicka", description: "Preprava do Belgicka.", href: "/medzinarodne-stahovanie/belgicko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
