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
  title: "Sťahovanie z Nemecka na Slovensko | Sofoservis",
  description:
    "Profesionálne sťahovanie z Nemecka na Slovensko. Pravidelné trasy z Mníchova, Berlína, Frankfurtu, Hamburgu. Bez colných formalít, doručenie 2–4 dni.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-z-nemecka-na-slovensko",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-nemecka-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-germany-to-slovakia",
      "x-default": "https://www.sofoservis.sk/stahovanie-z-nemecka-na-slovensko",
    },
  },
  keywords:
    "sťahovanie z Nemecka na Slovensko, sťahovanie z Mníchova na Slovensko, sťahovanie z Berlína na Slovensko, medzinárodné sťahovanie Nemecko Slovensko",
  openGraph: {
    title: "Sťahovanie z Nemecka na Slovensko | Sofoservis",
    description: "Profesionálne sťahovanie z Nemecka na Slovensko. Pravidelné trasy z Mníchova, Berlína, Frankfurtu, Hamburgu. Bez colných formalít, doručenie 2–4 dni.",
    url: "https://www.sofoservis.sk/stahovanie-z-nemecka-na-slovensko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieZNemeckaNaSlovenskoPage() {
  const featuresData = {
    title: "Sťahovanie z Nemecka na Slovensko — Spoľahlivá preprava",
    description:
      "Profesionálne medzinárodné sťahovanie zo zahraničia na Slovensko. Skúsený tím, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Pravidelné trasy z Nemecka",
        description: "Prevádzkujeme pravidelné linky z celého Nemecka na Slovensko.",
        link: "/stahovanie-z-nemecka-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Zber z celého Nemecka",
        description: "Mníchov, Berlín, Hamburg, Frankfurt, Kolín, Stuttgart a všetky ďalšie nemecké mestá.",
        link: "/stahovanie-z-nemecka-na-slovensko",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description: "Náš tím zabezpečí bezpečné zabalenie celej domácnosti.",
        link: "/stahovanie-z-nemecka-na-slovensko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Bez colných formalít",
        description: "EÚ-EÚ preprava — žiadne colné formality pri presune osobných vecí.",
        link: "/stahovanie-z-nemecka-na-slovensko",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistená preprava",
        description: "Všetky veci sú poistené počas celej trasy z Nemecka na Slovensko.",
        link: "/stahovanie-z-nemecka-na-slovensko",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Montáž nábytku",
        description: "Demontáž v Nemecku a opätovná montáž na vašej novej adrese na Slovensku.",
        link: "/stahovanie-z-nemecka-na-slovensko",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá preprava z Nemecka na Slovensko?",
      answer: "Preprava závisí od miesta vyzdvihnutia: z Mníchova zvyčajne 1–2 dni, z Berlína alebo Frankfurtu 2–3 dni, zo severného Nemecka (Hamburg) 3–4 dni. Prevádzkujeme pravidelné linky, takže na tovar nečakáte dlho.",
    },
    {
      question: "Sú potrebné špeciálne dokumenty pri sťahovaní z Nemecka na Slovensko?",
      answer: "Nie — obe krajiny sú v EÚ, takže colné formality nie sú potrebné pri sťahovaní osobných vecí. Postaráme sa o všetku prepravnú dokumentáciu.",
    },
    {
      question: "Z akých miest v Nemecku zbieráte tovar?",
      answer: "Zbierame z celého Nemecka — Mníchov, Berlín, Hamburg, Frankfurt, Kolín, Stuttgart, Düsseldorf, Lipsko, Drážďany a všetky ostatné mestá.",
    },
    {
      question: "Môžem presťahovať len niekoľko kusov nábytku z Nemecka?",
      answer: "Áno, ponúkame skupinovú (grupážnu) prepravu pre menšie objemy. Je to cenovo výhodné riešenie, ak máte len niekoľko krabíc alebo jednotlivé kusy nábytku.",
    },
    {
      question: "Je prepravné poistenie zahrnuté v cene?",
      answer: "Áno, základné prepravné poistenie je zahrnuté v štandardnej cene sťahovania. Doplnkové poistenie pre cenné alebo krehké predmety je dostupné na požiadanie.",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Sťahovanie z Nemecka na Slovensko"
        description="Vraciate sa z Nemecka na Slovensko? Sofoservis prevádzkuje pravidelné trasy z Mníchova, Berlína, Frankfurtu, Hamburgu a všetkých nemeckých miest priamo na vaše nové slovenské bydlisko."
        formTitle="Získajte bezplatnú cenovú ponuku"
        formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
        backgroundImage="/images/stahovanie-gauc.avif"
        benefits={["Pravidelné trasy z Nemecka", "Doručenie od dverí k dverám", "Bez colných formalít"]}
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
          title="Často kladené otázky — sťahovanie z nemecka na slovensko"
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
          { title: "Sťahovanie do Nemecka", description: "Sťahovanie zo Slovenska do Nemecka.", href: "/medzinarodne-stahovanie/nemecko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Všetky medzinárodné trasy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie na Slovensko", description: "Prehľad všetkých trás na Slovensko.", href: "/stahovanie-na-slovensko", icon: "/icons/truck_icon.svg" },
          { title: "Montáž nábytku", description: "Profesionálna montáž nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
    </main>
  );
}
