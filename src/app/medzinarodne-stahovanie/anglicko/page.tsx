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
  title: "Sťahovanie do Anglicka (UK) zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Anglicka a z UK na Slovensko. Trasy do Londýna a ďalších britských miest.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/anglicko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/anglicko",
      en: "https://www.sofoservis.sk/en/moving-to-uk",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/anglicko",
    },
  },
  keywords:
    "sťahovanie do Anglicka, sťahovanie do UK, medzinárodné sťahovanie Anglicko, preprava do Londýna, sťahovanie Slovensko Británia",
  openGraph: {
    title: "Sťahovanie do Anglicka (UK) zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Anglicka a z UK na Slovensko. Pomoc s colnými formalitami, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/anglicko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieAnglickoPage() {
  const heroData = {
    title: "Sťahovanie do Anglicka",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Anglicka (UK) a späť. Trasa Bratislava – Londýn je 1 500 km. Sťahujeme spoľahlivo s colnou pomocou.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Anglicka — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Anglicka cez Sofoservis",
    description:
      "Po Brexite je sťahovanie do UK o niečo komplikovanejšie — pomáhame s každým krokom.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Anglicka vrátane balenia, prepravy a rozbalenia.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem medzi Slovenskom a Britskými ostrovmi.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Londýn a celá Británia",
        description:
          "Sťahujeme do Londýna, Manchesteru, Birminghamu, Edinburghu a ďalších britských miest.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Post-Brexit colné formality",
        description:
          "Po Brexite UK nie je v EÚ — pomáhame s colným vyhlásením a zoznamom vecí pre britskú colnú správu.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu cez Európu používame zosilnené baliace materiály a špeciálne ochrany.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je plne poistený počas celej trasy z Bratislavy do Anglicka.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aké colné formality sú potrebné po Brexite pri sťahovaní do UK?",
      answer:
        "Od Brexitu (2021) UK nie je súčasťou EÚ. Pri sťahovaní osobných vecí je potrebné vyplniť colné vyhlásenie a pripraviť podrobný inventárny zoznam s hodnotami vecí. Poradenstvo v tejto oblasti poskytujeme bezplatne.",
    },
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Londýna?",
      answer:
        "Vzdialenosť Bratislava – Londýn je cca 1 500 km vrátane prechodu cez Channel Tunnel alebo loďou. Cesta trvá 15–18 hodín. Väčšinou realizujeme 2-dňovú expedíciu s nocľahom na trase.",
    },
    {
      question: "Sťahujete aj z UK späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch. Aj pri sťahovaní z UK na Slovensko pomáhame s colnými formalitami.",
    },
    {
      question: "Aká je cena sťahovania do Londýna?",
      answer:
        "Cena závisí od objemu vecí, služieb a miesta vykládky. Londýn je vzdialenejšia destinácia, čo sa odráža na cene. Kontaktujte nás pre bezplatnú individuálnu kalkuláciu.",
    },
    {
      question: "Sťahujete aj do Škótska alebo Walesu?",
      answer:
        "Áno, sťahujeme do celej Veľkej Británie — Anglicko, Škótsko, Wales a Severné Írsko.",
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
          benefits={["Pomoc s post-Brexit colnými formalitami", "Poistenie prepravy zahrnuté", "Skúsený tím pre dlhé trasy"]}
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
          benefits={["Pomoc s post-Brexit colnými formalitami", "Poistenie prepravy zahrnuté", "Skúsený tím pre dlhé trasy"]}
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
          title="Často kladené otázky — sťahovanie do Anglicka"
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
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Londýna", description: "Preprava do britskej metropoly.", href: "/medzinarodne-stahovanie/londyn", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Írska", description: "Profesionálne sťahovanie do Dublinu.", href: "/medzinarodne-stahovanie/irsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
