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
  title: "Sťahovanie do Zürichu z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Zürichu z Bratislavy (950 km). Pomoc s colnými formalitami mimo EÚ. Poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/zurich",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/zurich",
      en: "https://www.sofoservis.sk/en/moving-to-zurich",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/zurich",
    },
  },
  keywords:
    "sťahovanie do Zürichu, preprava Bratislava Zürich, sťahovanie Zürich, medzinárodné sťahovanie Zürich, sťahovanie do Švajčiarska Zürich",
  openGraph: {
    title: "Sťahovanie do Zürichu z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Zürichu z Bratislavy — 950 km. Pomoc s colnými formalitami, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/zurich",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieZurichPage() {
  const heroData = {
    title: "Sťahovanie do Zürichu",
    description:
      "Sťahujeme z Bratislavy do Zürichu — finančného centra Európy. Vzdialenosť 950 km, cca 9 hodín jazdy. Švajčiarsko nie je v EÚ — colné formality vybavíme.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Zürich",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Zürichu cez Sofoservis",
    description:
      "Zürich — svetové finančné centrum v Alpách. Colné formality zvládneme za vás.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Zürichu",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Zürichu vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Zürichu",
        description:
          "Presun kancelárie z Bratislavy do Zürichu s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Zürich a okolie",
        description:
          "Sťahujeme do všetkých zürichských mestských štvrtí aj do okolia — Winterthur, Baden a ďalšie.",
        link: "/medzinarodne-stahovanie/svajciarsko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Colné formality mimo EÚ",
        description:
          "Švajčiarsko nie je v EÚ — pripravíme colné dokumenty a inventárny zoznam.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre trasy cez Alpy a pre Zürich používame zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Zürichu.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aké colné formality treba splniť pri sťahovaní do Zürichu?",
      answer:
        "Švajčiarsko nie je v EÚ. Pri sťahovaní osobných vecí do Zürichu je potrebné colné vyhlásenie a inventárny zoznam. Osobné veci pri trvalej zmene bydliska sú zvyčajne od cla oslobodené. Pomáhame s prípravou všetkej dokumentácie.",
    },
    {
      question: "Aká je vzdialenosť z Bratislavy do Zürichu?",
      answer:
        "Vzdialenosť z Bratislavy do Zürichu je cca 950 km. Jazdou trvá cesta asi 9 hodín. Zvyčajne realizujeme jednodenné sťahovanie.",
    },
    {
      question: "Sťahujete aj z Zürichu do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Zürichu?",
      answer:
        "Zürich je mimo EÚ, čo sa odráža na cene (colné poplatky za samotnú prepravu). Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do iných švajčiarskych miest?",
      answer:
        "Áno, sťahujeme do celého Švajčiarska — Zürich, Bern, Ženeva, Bazilej a ďalšie kantóny.",
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
          benefits={["Pomoc s colnými formalitami mimo EÚ", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Pomoc s colnými formalitami mimo EÚ", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Zürichu"
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
          { title: "Sťahovanie do Švajčiarska", description: "Sťahovanie do celého Švajčiarska.", href: "/medzinarodne-stahovanie/svajciarsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Nemecka", description: "Preprava do Nemecka.", href: "/medzinarodne-stahovanie/nemecko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
