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
  title: "Sťahovanie z USA na Slovensko | Sofoservis",
  description:
    "Medzikontinentálne sťahovanie z USA na Slovensko. Námornú prepravu a colné formality koordinujeme za vás. Doručenie 3–6 týždňov, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-z-usa-na-slovensko",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-usa-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-usa-to-slovakia",
      "x-default": "https://www.sofoservis.sk/stahovanie-z-usa-na-slovensko",
    },
  },
  keywords:
    "sťahovanie z USA na Slovensko, sťahovanie z Ameriky na Slovensko, medzikontinentálne sťahovanie USA Slovensko",
  openGraph: {
    title: "Sťahovanie z USA na Slovensko | Sofoservis",
    description: "Medzikontinentálne sťahovanie z USA na Slovensko. Námornú prepravu a colné formality koordinujeme za vás. Doručenie 3–6 týždňov, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/stahovanie-z-usa-na-slovensko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieZUsaNaSlovenskoPage() {
  const featuresData = {
    title: "Sťahovanie z USA na Slovensko — Spoľahlivá preprava",
    description:
      "Profesionálne medzinárodné sťahovanie zo zahraničia na Slovensko. Skúsený tím, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/globe_icon.svg",
        title: "Koordinácia námornej prepravy",
        description: "Zabezpečujeme kontajnerovú námornú prepravu z amerických prístavov do Európy.",
        link: "/stahovanie-z-usa-na-slovensko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Colné formality vybavíme za vás",
        description: "Kompletná colná dokumentácia pri dovoze z USA do EÚ vrátane uplatnenia nároku na bezcolný dovoz.",
        link: "/stahovanie-z-usa-na-slovensko",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Doručenie od dverí k dverám",
        description: "Od vašej americkej adresy až po dvere vášho nového slovenského domova.",
        link: "/stahovanie-z-usa-na-slovensko",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description: "Špeciálne balenie pre dlhé medzikontinentálne trasy.",
        link: "/stahovanie-z-usa-na-slovensko",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistená preprava",
        description: "Tovar je poistený počas celej trasy vrátane námornej prepravy.",
        link: "/stahovanie-z-usa-na-slovensko",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Montáž nábytku",
        description: "Opätovná montáž nábytku na vašej novej slovenskej adrese.",
        link: "/stahovanie-z-usa-na-slovensko",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako prebieha sťahovanie z USA na Slovensko?",
      answer: "Sťahovanie z USA na Slovensko sa realizuje námornou kontajnerovou prepravou. Váš tovar sa zabalí, naloží do kontajnera, prepraví loďou do európskeho prístavu a potom kamiónovou dopravou na Slovensko. Postaráme sa o celú logistiku.",
    },
    {
      question: "Ako dlho trvá sťahovanie z USA na Slovensko?",
      answer: "Celková preprava zvyčajne trvá 4–8 týždňov — záleží od prístavov vyzdvihnutia a doručenia, colného spracovania a logistiky poslednej míle.",
    },
    {
      question: "Sú potrebné colné formality pri sťahovaní z USA na Slovensko?",
      answer: "Áno — USA nie je v EÚ. Pri dovoze osobných vecí na Slovensko z USA sú potrebné colné formality. Môžete mať nárok na bezcolný dovoz pri trvalej zmene bydliska. Náš tím vám pomôže s kompletnou dokumentáciou.",
    },
    {
      question: "Ponúkate aj prepravu auta z USA?",
      answer: "Áno, koordinujeme prepravu vozidla z USA na Slovensko vrátane colného odbavenia a re-registrácie.",
    },
    {
      question: "Je prepravné poistenie zahrnuté?",
      answer: "Áno, tovar je poistený počas celej trasy z USA na Slovensko vrátane námornej prepravy.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
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
          title="Sťahovanie z USA na Slovensko"
          description="Presťahujete sa z USA späť na Slovensko? Sofoservis koordinuje medzikontinentálne sťahovanie vrátane námornej prepravy, colných formalít pri dovoze do EÚ a doručenia priamo na vaše slovenské bydlisko."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Sťahovanie z USA na Slovensko"
          description="Presťahujete sa z USA späť na Slovensko? Sofoservis koordinuje medzikontinentálne sťahovanie vrátane námornej prepravy, colných formalít pri dovoze do EÚ a doručenia priamo na vaše slovenské bydlisko."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
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
          title="Často kladené otázky — sťahovanie z usa na slovensko"
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
          { title: "Medzinárodné sťahovanie", description: "Všetky medzinárodné trasy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie na Slovensko", description: "Prehľad všetkých trás na Slovensko.", href: "/stahovanie-na-slovensko", icon: "/icons/truck_icon.svg" },
          { title: "Sťahovanie zo Slovenska", description: "Odchod zo Slovenska do zahraničia.", href: "/stahovanie-zo-slovenska", icon: "/icons/globe_icon.svg" },
          { title: "Montáž nábytku", description: "Profesionálna montáž nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
    </main>
  );
}
