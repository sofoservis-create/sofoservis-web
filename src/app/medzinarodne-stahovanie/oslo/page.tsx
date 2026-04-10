import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Sťahovanie do Osla zo Slovenska | Sofoservis",
  description:
    "Profesionálne medzinárodné sťahovanie do Osla zo Slovenska. Vzdialenosť 1 800 km, tranzit 2-3 dni.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/oslo",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/oslo",
      en: "https://www.sofoservis.sk/en/moving-to-oslo",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/oslo",
    },
  },
  keywords:
    "sťahovanie do Osla, preprava Slovensko Oslo, sťahovanie Oslo, medzinárodné sťahovanie Oslo, sťahovanie do Nórska, colné formality Nórsko",
  openGraph: {
    title: "Sťahovanie do Osla zo Slovenska | Sofoservis",
    description:
      "Sťahovanie do Osla zo Slovenska — 1 800 km. Colné formality vybavené, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/oslo",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieOsloPage() {
  const heroData = {
    title: "Sťahovanie do Osla",
    description:
      "Realizujeme sťahovanie zo Slovenska do Osla — hlavného mesta Nórska. Vzdialenosť cca 1 800 km, tranzit 2–3 dni. Colné formality za vás vybavíme.",
    formTitle: "Cenová ponuka — sťahovanie do Osla",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Osla cez Sofoservis",
    description:
      "Oslo — mesto medzi fjordmi a lesmi. Zabezpečíme hladký presun vášho domova na sever Európy.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Osla",
        description:
          "Kompletné sťahovanie domácností vrátane odborného balenia na náročnú trasu.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Colné formality",
        description:
          "Nórsko je mimo EÚ — pomôžeme vám s potrebnou dokumentáciou pre bezproblémový prechod hraníc.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celé Oslo a Nórsko",
        description:
          "Sťahujeme do všetkých častí Osla aj do okolitých nórskych miest.",
        link: "/medzinarodne-stahovanie/norsko",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre trasu dlhú 1 800 km cez viacero štátov používame špičkové baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Medzinárodné poistenie",
        description:
          "Váš majetok je plne chránený poistením počas celej cesty až do Nórska.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné presuny",
        description:
          "Profesionálne sťahovanie kancelárií zo Slovenska do Nórska so všetkými náležitosťmi.",
        link: "/stahovanie-kancelarii-firiem",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie zo Slovenska do Osla?",
      answer:
        "Vzdialenosť je približne 1 800 km. Sťahovanie zvyčajne trvá 2 až 3 dni v závislosti od konkrétnej trasy a colného konania.",
    },
    {
      question: "Aké dokumenty potrebujem na sťahovanie do Nórska?",
      answer:
        "Keďže Nórsko nie je členom EÚ, budete potrebovať inventárny zoznam vecí a doklady o sťahovaní do krajiny. Radi vám s tým poradíme.",
    },
    {
      question: "Sťahujete aj v opačnom smere z Nórska na Slovensko?",
      answer:
        "Áno, realizujeme sťahovania v oboch smeroch, vrátane vybavenia dovozných formalít na Slovensko.",
    },
    {
      question: "Aká je cena sťahovania do Osla?",
      answer:
        "Cena závisí od objemu sťahovaných vecí a rozsahu služieb. Kontaktujte nás a pripravíme vám cenovú ponuku na mieru.",
    },
    {
      question: "Musím platiť clo za svoje sťahované veci?",
      answer:
        "Pri sťahovaní osobného majetku do Nórska je možné požiadať o oslobodenie od cla, ak spĺňate určité podmienky. Pomôžeme vám s procesom.",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Slovensko – Oslo ~1 800 km", "Colné formality vyriešené", "Poistenie v cene"]}
      />
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
          title="Často kladené otázky — sťahovanie do Osla"
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
          { title: "Sťahovanie do Nórska", description: "Sťahovanie do celého Nórska.", href: "/medzinarodne-stahovanie/norsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Švédska", description: "Preprava do Švédska.", href: "/medzinarodne-stahovanie/svedsko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
