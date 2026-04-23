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
  title: "Sťahovanie do Francúzska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Francúzska a z Francúzska na Slovensko. Trasy do Paríža, Lyonu, Marseille. Transparentné ceny, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/francuzsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/francuzsko",
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-france",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/francuzsko",
    },
  },
  keywords:
    "sťahovanie do Francúzska, medzinárodné sťahovanie Francúzsko, preprava do Paríža, sťahovanie Slovensko Paríž, sťahovanie Lyon",
  openGraph: {
    title: "Sťahovanie do Francúzska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Francúzska. Trasy do Paríža, Lyonu, Marseille. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/francuzsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieFrancuzskoPage() {
  const heroData = {
    title: "Sťahovanie do Francúzska",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Francúzska. Paríž (1 400 km), Lyon (1 200 km) a ďalšie francúzske mestá sú v dosahu nášho tímu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Francúzska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Francúzska cez Sofoservis",
    description:
      "Francúzsko je vzdialenejšia, ale realizovateľná destinácia pre slovenských expatov.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Francúzska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Francúzska s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Paríž a celé Francúzsko",
        description:
          "Sťahujeme do Paríža, Lyonu, Marseille, Toulouse, Bordeaux a ďalších francúzskych miest.",
        link: "/medzinarodne-stahovanie/pariz",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Francúzsko je v EÚ — žiadne colné poplatky na osobné veci pri sťahovaní.",
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
          "Váš majetok je poistený počas celej trasy zo Slovenska do Francúzska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Paríža?",
      answer:
        "Vzdialenosť Bratislava – Paríž je cca 1 400 km, čo zodpovedá zhruba 13 hodinám jazdy. Realizujeme to väčšinou ako 2-dňovú expedíciu s nocľahom.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Francúzska?",
      answer:
        "Francúzsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj z Francúzska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Paríža?",
      answer:
        "Cena závisí od objemu vecí a doplnkových služieb. Paríž je vzdialenejšia destinácia. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj na juh Francúzska alebo do zámorských departementov?",
      answer:
        "Sťahujeme do celej metropolitnej Francúzskej republiky — Paríž, Lyon, Marseille, Nice, Toulouse a ďalšie mestá. Zámorské destinácie riešime individuálne.",
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
          benefits={["Paríž, Lyon, Marseille a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Paríž, Lyon, Marseille a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Francúzska"
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
          { title: "Sťahovanie do Paríža", description: "Preprava do mesta svetla.", href: "/medzinarodne-stahovanie/pariz", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Belgicka", description: "Profesionálne sťahovanie do Belgicka.", href: "/medzinarodne-stahovanie/belgicko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
