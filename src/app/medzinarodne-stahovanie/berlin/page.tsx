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
  title: "Sťahovanie do Berlína z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Berlína z Bratislavy (900 km). Skúsený tím, poistenie zahrnuté, transparentná cena. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/berlin",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/berlin",
      en: "https://www.sofoservis.sk/en/moving-to-berlin",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/berlin",
    },
  },
  keywords:
    "sťahovanie do Berlína, preprava Bratislava Berlín, sťahovanie Berlín, medzinárodné sťahovanie Berlín, sťahovanie do Nemecka Berlín",
  openGraph: {
    title: "Sťahovanie do Berlína z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Berlína z Bratislavy — 900 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/berlin",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniBerlinPage() {
  const heroData = {
    title: "Sťahovanie do Berlína",
    description:
      "Sťahujeme z Bratislavy do Berlína a z Berlína do Bratislavy. Vzdialenosť 900 km — cca 8–9 hodín jazdy. Berlín je metropola plná príležitostí.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Berlín",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Berlína cez Sofoservis",
    description:
      "Berlín — hlavné mesto Nemecka a jedno z najväčších európskych miest. Trasa overená, tím skúsený.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Berlína",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Berlína vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Berlína",
        description:
          "Presun kancelárie z Bratislavy do Berlína s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Všetky berlínske obvody",
        description:
          "Sťahujeme do všetkých berlínskych obvodov — Mitte, Prenzlauer Berg, Charlottenburg a ďalšie.",
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
        title: "Profesionálne balenie",
        description:
          "Zosilnené balenie pre bezpečnú prepravu na dlhšej trase Bratislava – Berlín.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Berlína.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aká je vzdialenosť z Bratislavy do Berlína?",
      answer:
        "Vzdialenosť z Bratislavy do Berlína je cca 900 km. Jazdou trvá cesta asi 8–9 hodín. Celé sťahovanie (vrátane nakládky a vykládky) zvyčajne realizujeme ako celodenné alebo 2-dňové.",
    },
    {
      question: "Sťahujete aj z Berlína do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Berlína?",
      answer:
        "Cena závisí od objemu vecí, poschodia a doplnkových služieb. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Berlína?",
      answer:
        "Nemecko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj do okolia Berlína — napríklad do Postupimi?",
      answer:
        "Áno, sťahujeme do celého Berlína a okolia vrátane Postupimi, Brandenburgu a ďalších.",
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
          benefits={["Bratislava – Berlín 900 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Bratislava – Berlín 900 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Berlína"
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
          { title: "Sťahovanie do Mníchova", description: "Preprava do bavorskej metropoly.", href: "/medzinarodne-stahovanie/mnichov", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Hamburgu", description: "Preprava do Hamburgu.", href: "/medzinarodne-stahovanie/hamburg", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
