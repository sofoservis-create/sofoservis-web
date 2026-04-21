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
  title: "Sťahovanie z Holandska na Slovensko | Sofoservis",
  description:
    "Profesionálne sťahovanie z Holandska (Nízozemska) na Slovensko. Trasy z Amsterdamu, Rotterdamu, Haagu a ďalších holandských miest. Doručenie 3–5 dní.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-z-holandska-na-slovensko",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-holandska-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-netherlands-to-slovakia",
      "x-default": "https://www.sofoservis.sk/stahovanie-z-holandska-na-slovensko",
    },
  },
  keywords:
    "sťahovanie z Holandska na Slovensko, sťahovanie z Amsterdamu na Slovensko, sťahovanie z Nízozemska na Slovensko, medzinárodné sťahovanie Holandsko Slovensko",
  openGraph: {
    title: "Sťahovanie z Holandska na Slovensko | Sofoservis",
    description: "Profesionálne sťahovanie z Holandska (Nízozemska) na Slovensko. Trasy z Amsterdamu, Rotterdamu, Haagu a ďalších holandských miest. Doručenie 3–5 dní.",
    url: "https://www.sofoservis.sk/stahovanie-z-holandska-na-slovensko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieZHolandskaNaSlovenskoPage() {
  const featuresData = {
    title: "Sťahovanie z Holandska na Slovensko — Spoľahlivá preprava",
    description:
      "Profesionálne medzinárodné sťahovanie zo zahraničia na Slovensko. Skúsený tím, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Pravidelné trasy z Holandska",
        description: "Prevádzkujeme pravidelné linky z Holandska na Slovensko — doručenie 3–5 dní.",
        link: "/stahovanie-z-holandska-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celé Holandsko",
        description: "Amsterdam, Rotterdam, Haag, Utrecht, Eindhoven, Groningen a všetky ďalšie holandské mestá.",
        link: "/stahovanie-z-holandska-na-slovensko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Bez colných formalít",
        description: "EÚ-EÚ preprava — žiadna byrokracia pre osobné veci.",
        link: "/stahovanie-z-holandska-na-slovensko",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description: "Kvalitné baliace materiály pre dlhú trasu z Holandska na Slovensko.",
        link: "/stahovanie-z-holandska-na-slovensko",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistená preprava",
        description: "Všetky veci sú poistené počas celej cesty.",
        link: "/stahovanie-z-holandska-na-slovensko",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Montáž nábytku",
        description: "Demontáž v Holandsku, opätovná montáž na Slovensku.",
        link: "/stahovanie-z-holandska-na-slovensko",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá preprava z Holandska na Slovensko?",
      answer: "Preprava z Holandska na Slovensko trvá štandardne 3–5 pracovných dní. Prevádzkujeme pravidelné linky, takže na tovar nečakáte dlho.",
    },
    {
      question: "Sú potrebné colné formality pri sťahovaní z Holandska na Slovensko?",
      answer: "Nie — obe krajiny sú v EÚ. Žiadne colné formality nie sú potrebné pri sťahovaní osobných vecí.",
    },
    {
      question: "Z akých miest v Holandsku zbieráte tovar?",
      answer: "Zbierame z celého Holandska — Amsterdam, Rotterdam, Haag, Utrecht, Eindhoven, Groningen a všetky ostatné holandské mestá.",
    },
    {
      question: "Ponúkate skupinovú prepravu pre menší objem?",
      answer: "Áno, skupinová preprava je ideálna pre menšie objemy. Váš tovar skombinujeme s ďalšími zásielkami smerujúcimi na Slovensko.",
    },
    {
      question: "Je prepravné poistenie zahrnuté?",
      answer: "Áno, všetky veci sú kryté prepravným poistením počas celej trasy z Holandska na Slovensko.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
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
          title="Sťahovanie z Holandska na Slovensko"
          description="Vraciate sa z Holandska (Nízozemska) na Slovensko? Sofoservis prevádzkuje pravidelné trasy z Amsterdamu, Rotterdamu, Haagu, Utrechtu a všetkých holandských miest priamo na vaše nové slovenské bydlisko."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Sťahovanie z Holandska na Slovensko"
          description="Vraciate sa z Holandska (Nízozemska) na Slovensko? Sofoservis prevádzkuje pravidelné trasy z Amsterdamu, Rotterdamu, Haagu, Utrechtu a všetkých holandských miest priamo na vaše nové slovenské bydlisko."
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
          title="Často kladené otázky — sťahovanie z holandska na slovensko"
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
          { title: "Sťahovanie do Holandska", description: "Sťahovanie zo Slovenska do Holandska.", href: "/medzinarodne-stahovanie/holandsko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Všetky medzinárodné trasy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie na Slovensko", description: "Prehľad všetkých trás na Slovensko.", href: "/stahovanie-na-slovensko", icon: "/icons/truck_icon.svg" },
          { title: "Montáž nábytku", description: "Profesionálna montáž nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
    </main>
  );
}
