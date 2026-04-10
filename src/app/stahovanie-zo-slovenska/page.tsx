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
  title: "Sťahovanie zo Slovenska do zahraničia | Sofoservis",
  description:
    "Medzinárodné sťahovanie zo Slovenska do Rakúska, Nemecka, UK, Švajčiarska, Holandska a Francúzska. Bezplatná cenová ponuka.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-zo-slovenska",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-zo-slovenska",
      en: "https://www.sofoservis.sk/en/moving-from-slovakia",
      "x-default": "https://www.sofoservis.sk/stahovanie-zo-slovenska",
    },
  },
  keywords:
    "sťahovanie zo Slovenska, medzinárodné sťahovanie zo Slovenska, odchod zo Slovenska, presťahovanie z Bratislavy do zahraničia",
  openGraph: {
    title: "Sťahovanie zo Slovenska do zahraničia | Sofoservis",
    description: "Profesionálne medzinárodné sťahovanie zo Slovenska do Rakúska, Nemecka, UK, Švajčiarska, Holandska, Francúzska, Írska a Nórska. Bezplatná cenová ponuka.",
    url: "https://www.sofoservis.sk/stahovanie-zo-slovenska",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieZoSlovenskaPage() {
  const featuresData = {
    title: "Sťahovanie zo Slovenska — Spoľahlivá preprava",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do zahraničia. Skúsený tím, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie do Rakúska",
        description: "Rýchle a dostupné sťahovanie do Rakúska. Viedeň je len 70 km od Bratislavy.",
        link: "/medzinarodne-stahovanie/rakusko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie do Nemecka",
        description: "Pravidelné linky do Mníchova, Berlína, Hamburgu, Frankfurtu a celého Nemecka.",
        link: "/medzinarodne-stahovanie/nemecko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie do Anglicka (UK)",
        description: "Post-Brexit sťahovanie do UK — všetky colné formality vybavíme za vás.",
        link: "/medzinarodne-stahovanie/anglicko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie do Švajčiarska",
        description: "Profesionálne sťahovanie do Zürichu, Ženevy, Bazileja a celého Švajčiarska.",
        link: "/medzinarodne-stahovanie/svajciarsko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie do Holandska",
        description: "Efektívne sťahovanie z Bratislavy do Amsterdamu, Rotterdamu, Haagu a ďalších holandských miest.",
        link: "/medzinarodne-stahovanie/holandsko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie do Francúzska",
        description: "Dlhé trasy zo Slovenska do Paríža, Lyonu, Marseille a celého Francúzska.",
        link: "/medzinarodne-stahovanie/francuzsko",
      },
    ],
  };

  const faqItems = [
    {
      question: "Kedy si mám rezervovať sťahovanie zo Slovenska?",
      answer: "Odporúčame rezerváciu 2–4 týždne vopred. V letných mesiacoch alebo na konci mesiaca rezervujte skôr. Pri urgentných prípadoch vieme niekedy zorganizovať sťahovanie aj v kratšom čase, najmä do blízkych krajín (Rakúsko, ČR).",
    },
    {
      question: "Musím platiť colné poplatky pri sťahovaní z EÚ krajiny?",
      answer: "Nie — pri sťahovaní osobných vecí medzi krajinami EÚ sa colné poplatky nevzťahujú. Pre sťahovanie do non-EÚ krajín (Švajčiarsko, Nórsko, UK) sú potrebné colné vyhlásenia — postaráme sa o dokumentáciu za vás.",
    },
    {
      question: "Môžem presťahovať len niekoľko kusov, nie celú domácnosť?",
      answer: "Áno, ponúkame skupinovú (grupážnu) prepravu pre menšie objemy. Je to cenovo výhodné riešenie, ak máte len niekoľko krabíc alebo kusov nábytku.",
    },
    {
      question: "Čo je zahrnuté v kompletnom balíku medzinárodného sťahovania?",
      answer: "Kompletná služba zahŕňa balenie a zabalenie všetkých predmetov, nakládku, medzinárodnú prepravu profesionálnym šoférom, vykládku na novej adrese a montáž nábytku. Prepravné poistenie je zahrnuté.",
    },
    {
      question: "Ako vypočítate cenu sťahovania zo Slovenska?",
      answer: "Cena závisí od objemu vecí, cieľovej krajiny, podmienok prístupu na oboch adresách a doplnkových služieb (balenie, skladovanie). Bezplatnú nezáväznú ponuku poskytneme po rýchlej konzultácii.",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Sťahovanie zo Slovenska"
        description="Odchádzate zo Slovenska do zahraničia? Sofoservis zabezpečí kompletné medzinárodné sťahovanie do všetkých hlavných európskych destinácií. Postaráme sa o balenie, prepravu, colné formality a doručenie na vašu novú adresu."
        formTitle="Získajte bezplatnú cenovú ponuku"
        formSubtitle="Sťahovanie zo Slovenska — kalkulácia zadarmo"
        backgroundImage="/images/stahovanie_gauc.jpg"
        benefits={["Sťahovanie do celej Európy", "Bezplatná konzultácia", "Všetky dokumenty vybavíme"]}
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
          title="Často kladené otázky — sťahovanie zo slovenska"
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
          { title: "Sťahovanie na Slovensko", description: "Vraciate sa na Slovensko zo zahraničia?", href: "/stahovanie-na-slovensko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Prehľad všetkých medzinárodných trás.", href: "/medzinarodne-stahovanie", icon: "/icons/truck_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Profesionálne sťahovanie domácností.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
          { title: "Montáž nábytku", description: "Profesionálna montáž nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
    </main>
  );
}
