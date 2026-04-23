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
  title: "Sťahovanie do Poľska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Poľska a z Poľska na Slovensko. Trasy do Varšavy, Krakova, Wrocławi. Transparentné ceny, EÚ formality, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/polsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/polsko",
      en: "https://www.sofoservis.sk/en/moving-to-poland",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/polsko",
    },
  },
  keywords:
    "sťahovanie do Poľska, medzinárodné sťahovanie Poľsko, preprava do Varšavy, sťahovanie Bratislava Varšava, sťahovanie Krakov",
  openGraph: {
    title: "Sťahovanie do Poľska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Poľska. Trasy do Varšavy, Krakova, Wrocławi. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/polsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniePolskoPage() {
  const heroData = {
    title: "Sťahovanie do Poľska",
    description:
      "Spoľahlivé medzinárodné sťahovanie zo Slovenska do Poľska. Varšava (650 km), Krakov (280 km) a Wrocław (460 km) — sťahujeme do celého Poľska. EÚ formality.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Poľska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Poľska cez Sofoservis",
    description:
      "Poľsko je susedná krajina s dlhou spoločnou hranicou — máme overené trasy a skúsenosti.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Poľska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Poľska s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Varšava, Krakov a celé Poľsko",
        description:
          "Sťahujeme do Varšavy, Krakova, Wrocławi, Gdańsku a ďalších poľských miest.",
        link: "/medzinarodne-stahovanie/varsava",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Poľsko je v EÚ — žiadne colné poplatky na osobné veci, jednoduchá administratíva.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description:
          "Bezpečná preprava nábytku a krehkých predmetov na trase Slovensko – Poľsko.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Poľska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Varšavy?",
      answer:
        "Vzdialenosť Bratislava – Varšava je cca 650 km, čo zodpovedá zhruba 6–7 hodinám jazdy. Zvyčajne realizujeme jednodenné sťahovanie.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Poľska?",
      answer:
        "Poľsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj z Poľska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Krakova?",
      answer:
        "Krakov je blízkejší ako Varšava (cca 280 km), takže cena bude nižšia. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do severného Poľska, napríklad do Gdańsku?",
      answer:
        "Áno, sťahujeme do celého Poľska — Varšava, Krakov, Wrocław, Gdańsk, Poznaň a ďalšie mestá.",
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
          benefits={["Varšava, Krakov, Wrocław a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Varšava, Krakov, Wrocław a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Poľska"
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
          { title: "Sťahovanie do Varšavy", description: "Preprava do poľskej metropoly.", href: "/medzinarodne-stahovanie/varsava", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Česka", description: "Profesionálne sťahovanie do ČR.", href: "/medzinarodne-stahovanie/ceska-republika", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
