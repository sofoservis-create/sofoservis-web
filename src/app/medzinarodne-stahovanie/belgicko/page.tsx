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
  title: "Sťahovanie do Belgicka zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Belgicka a z Belgicka na Slovensko. Trasy do Bruselu, Antverp a Gentu. Férové ceny, EÚ formality, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/belgicko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/belgicko",
      en: "https://www.sofoservis.sk/en/moving-to-belgium",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/belgicko",
    },
  },
  keywords:
    "sťahovanie do Belgicka, medzinárodné sťahovanie Belgicko, preprava do Bruselu, sťahovanie Slovensko Brusel, sťahovanie Antverpy",
  openGraph: {
    title: "Sťahovanie do Belgicka zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Belgicka. Trasy do Bruselu, Antverp a Gentu. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/belgicko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieBelgickoPage() {
  const heroData = {
    title: "Sťahovanie do Belgicka",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Belgicka. Brusel (1 350 km), Antverpy, Gent — sťahujeme do celého Belgicka. Ceny, termíny a poistenie.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Belgicka — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Belgicka cez Sofoservis",
    description:
      "Belgicko je populárna destinácia pre európskych diplomatov a expats. Máme skúsenosti s touto trasou.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Belgicka vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Belgicka s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Brusel a celé Belgicko",
        description:
          "Sťahujeme do Bruselu, Antverp, Gentu, Liège a ďalších belgických miest.",
        link: "/medzinarodne-stahovanie/brusel",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Belgicko je v EÚ — žiadne colné poplatky na osobné veci, jednoduchá administratíva.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description:
          "Zosilnené balenie pre dlhú trasu cez Európu.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Belgicka.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Bruselu?",
      answer:
        "Vzdialenosť Bratislava – Brusel je cca 1 350 km, čo zodpovedá zhruba 12–13 hodinám jazdy. Realizujeme to väčšinou ako 2-dňovú expedíciu.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Belgicka?",
      answer:
        "Belgicko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj z Belgicka späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Bruselu?",
      answer:
        "Cena závisí od objemu vecí a doplnkových služieb. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do Flámska alebo Valónska?",
      answer:
        "Áno, sťahujeme do celého Belgicka — Brusel, Antverpy, Gent, Bruggy, Liège a ďalšie miesta.",
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
          benefits={["Brusel, Antverpy, Gent a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Brusel, Antverpy, Gent a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Belgicka"
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
          { title: "Sťahovanie do Bruselu", description: "Preprava do hlavného mesta EÚ.", href: "/medzinarodne-stahovanie/brusel", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Holandska", description: "Profesionálne sťahovanie do Holandska.", href: "/medzinarodne-stahovanie/holandsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
