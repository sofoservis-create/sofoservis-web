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
  title: "Sťahovanie do Frankfurtu z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Frankfurtu nad Mohanom z Bratislavy (900 km). Skúsený tím, poistenie zahrnuté, transparentná cena.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/frankfurt",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/frankfurt",
      en: "https://www.sofoservis.sk/en/moving-to-frankfurt",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/frankfurt",
    },
  },
  keywords:
    "sťahovanie do Frankfurtu, preprava Bratislava Frankfurt, sťahovanie Frankfurt, medzinárodné sťahovanie Frankfurt, sťahovanie do Nemecka Frankfurt",
  openGraph: {
    title: "Sťahovanie do Frankfurtu z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Frankfurtu z Bratislavy — 900 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/frankfurt",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniFrankfurtPage() {
  const heroData = {
    title: "Sťahovanie do Frankfurtu",
    description:
      "Sťahujeme z Bratislavy do Frankfurtu nad Mohanom a späť. Vzdialenosť 900 km — finančné centrum Nemecka a sídlo Európskej centrálnej banky. Oblíbená destinácia pre slovenských finančníkov a expatov. Profesionálna preprava, poistenie zahrnuté.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Frankfurt",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Frankfurtu cez Sofoservis",
    description:
      "Frankfurt — finančné centrum Nemecka. Trasa z Bratislavy overená, tím skúsený.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Frankfurtu",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Frankfurtu vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Frankfurtu",
        description:
          "Presun kancelárie z Bratislavy do Frankfurtu s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Frankfurt a okolie",
        description:
          "Sťahujeme do všetkých časí Frankfurtu aj do okolitého regiónu Rýn-Mohan.",
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
          "Zosilnené balenie pre bezpečnú prepravu na trase Bratislava – Frankfurt.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Frankfurtu.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aká je vzdialenosť z Bratislavy do Frankfurtu?",
      answer:
        "Vzdialenosť z Bratislavy do Frankfurtu nad Mohanom je cca 900 km. Jazdou trvá cesta asi 8 hodín. Celé sťahovanie zvyčajne realizujeme ako celodenné.",
    },
    {
      question: "Sťahujete aj z Frankfurtu do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Frankfurtu?",
      answer:
        "Cena závisí od objemu vecí a doplnkových služieb. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do Wiesbadenu alebo Darmstadtu?",
      answer:
        "Áno, sťahujeme do celého regiónu Rhein-Main — Frankfurt, Wiesbaden, Darmstadt, Mainz a ďalšie mestá.",
    },
    {
      question: "Ako prebieha parkovanie pri sťahovaní v centre Frankfurtu?",
      answer:
        "Frankfurt má obmedzené parkovanie v centre. Poradíme vám s povoleniami alebo ich zariadíme za vás.",
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
          benefits={["Bratislava – Frankfurt 900 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Bratislava – Frankfurt 900 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Frankfurtu"
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
          { title: "Sťahovanie do Berlína", description: "Preprava do Berlína.", href: "/medzinarodne-stahovanie/berlin", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
