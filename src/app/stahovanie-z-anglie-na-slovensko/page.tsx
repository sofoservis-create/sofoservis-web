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
  title: "Sťahovanie z Anglicka (UK) na Slovensko | Sofoservis",
  description:
    "Profesionálne sťahovanie z Anglicka (UK) na Slovensko. Zber po celej Británii — Londýn, Manchester, Birmingham. Pomoc s post-Brexit colnými formalitami.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-z-anglie-na-slovensko",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-anglie-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-uk-to-slovakia",
      "x-default": "https://www.sofoservis.sk/stahovanie-z-anglie-na-slovensko",
    },
  },
  keywords:
    "sťahovanie z Anglicka na Slovensko, sťahovanie z UK na Slovensko, sťahovanie z Londýna na Slovensko, medzinárodné sťahovanie UK Slovensko",
  openGraph: {
    title: "Sťahovanie z Anglicka (UK) na Slovensko | Sofoservis",
    description: "Profesionálne sťahovanie z Anglicka (UK) na Slovensko. Zber po celej Británii — Londýn, Manchester, Birmingham. Pomoc s post-Brexit colnými formalitami.",
    url: "https://www.sofoservis.sk/stahovanie-z-anglie-na-slovensko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieZAnglieNaSlovenskoPage() {
  const featuresData = {
    title: "Sťahovanie z Anglicka na Slovensko — Spoľahlivá preprava",
    description:
      "Profesionálne medzinárodné sťahovanie zo zahraničia na Slovensko. Skúsený tím, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Colné formality vybaví za vás",
        description: "Pomáhame s kompletnou post-Brexit dokumentáciou — inventárny zoznam, colné vyhlásenie, Transfer of Residence.",
        link: "/stahovanie-z-anglie-na-slovensko",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Doručenie od dverí k dverám",
        description: "Vyzdvihneme tovar na vašej britskej adrese a doručíme priamo na slovenské bydlisko.",
        link: "/stahovanie-z-anglie-na-slovensko",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description: "Kvalitné baliace materiály vhodné pre dlhé medzinárodné trasy.",
        link: "/stahovanie-z-anglie-na-slovensko",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistená preprava",
        description: "Všetky veci sú poistené počas celej trasy z UK na Slovensko.",
        link: "/stahovanie-z-anglie-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Zber z celej Británie",
        description: "Londýn, Manchester, Birmingham, Edinburgh, Leeds, Glasgow a ďalšie britské mestá.",
        link: "/stahovanie-z-anglie-na-slovensko",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Montáž nábytku",
        description: "Demontáž v UK a opätovná montáž na vašej novej slovenskej adrese.",
        link: "/stahovanie-z-anglie-na-slovensko",
      },
    ],
  };

  const faqItems = [
    {
      question: "Sú pri sťahovaní z UK na Slovensko potrebné colné formality?",
      answer: "Áno — po Brexite UK nie je v EÚ. Pri sťahovaní osobných vecí z UK na Slovensko je potrebné colné vyhlásenie. Môžete mať nárok na bezcolný dovoz v rámci Transfer of Residence (zmena bydliska). Náš tím vám pomôže s kompletnou dokumentáciou.",
    },
    {
      question: "Ako dlho trvá preprava z UK na Slovensko?",
      answer: "Preprava od dverí k dverám z UK na Slovensko trvá štandardne 4–7 pracovných dní. Čas závisí od miesta vyzdvihnutia a colného spracovania.",
    },
    {
      question: "Zbieráte tovar z celej Británie?",
      answer: "Áno, zbierame tovar z celého Anglicka, Škótska a Walesu. Pokrývame Londýn, Manchester, Birmingham, Edinburgh, Leeds, Glasgow a všetky ostatné mestá.",
    },
    {
      question: "Ponúkate baliacu službu pri sťahovaní z UK?",
      answer: "Áno, náš tím vybaví profesionálne balenie celej domácnosti vrátane špeciálnych materiálov pre krehké predmety. Baliaca služba je dostupná ako súčasť kompletného balíka alebo za príplatok.",
    },
    {
      question: "Je preprava poistená počas celej trasy?",
      answer: "Áno, všetky veci sú kryté prepravným poistením počas celého presunu z UK na Slovensko.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Sťahovanie z Anglicka na Slovensko"
          description="Vraciate sa z Anglicka (UK) na Slovensko? Sofoservis zabezpečí kompletné medzinárodné sťahovanie z Londýna, Manchesteru, Birminghamu alebo kdekoľvek inde v Británii. Postaráme sa o balenie, prepravu, colné formality a doručenie priamo na vašu novú adresu."
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
          title="Sťahovanie z Anglicka na Slovensko"
          description="Vraciate sa z Anglicka (UK) na Slovensko? Sofoservis zabezpečí kompletné medzinárodné sťahovanie z Londýna, Manchesteru, Birminghamu alebo kdekoľvek inde v Británii. Postaráme sa o balenie, prepravu, colné formality a doručenie priamo na vašu novú adresu."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
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
          title="Často kladené otázky — sťahovanie z anglicka na slovensko"
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
          { title: "Sťahovanie do Anglicka", description: "Sťahovanie zo Slovenska do UK.", href: "/medzinarodne-stahovanie/anglicko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Všetky medzinárodné trasy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie na Slovensko", description: "Prehľad všetkých trás na Slovensko.", href: "/stahovanie-na-slovensko", icon: "/icons/truck_icon.svg" },
          { title: "Montáž nábytku", description: "Profesionálna montáž nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
    </main>
  );
}
