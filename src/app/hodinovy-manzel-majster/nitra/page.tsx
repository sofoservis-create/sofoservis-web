import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

export const metadata = {
  title: "Hodinový manžel Nitra — opravy, montáž | Sofoservis",
  description:
    "Profesionálny hodinový manžel v Nitre — montáž nábytku, drobné opravy, vŕtanie a údržba ✅ Od 25€/hod ✅ Rýchly nástup",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/nitra",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/nitra",
      en: "https://www.sofoservis.sk/en/handyman-nitra",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/nitra",
    },
  },
};

export default function HodinovyManzelNitraPage() {
  const faqItems = [
    {
      question: "Aké služby ponúka hodinový manžel v Nitre?",
      answer:
        "V Nitre zabezpečujeme široké spektrum prác: montáž nábytku (IKEA, JYSK, Decodom), vešanie poličiek, zrkadiel a obrazov, drobné opravy vody a elektriny, výmenu batérií, či opravu nábytku.",
    },
    {
      question: "Aká je cena za hodinového manžela v Nitre?",
      answer:
        "Hodinová sadzba v Nitre je 25€. Minimálna dĺžka prác je 1 hodina. Dopravné v rámci Nitry je 20€.",
    },
    {
      question: "Ako rýchlo viete prísť v Nitre?",
      answer:
        "Snažíme sa prísť do 24 až 48 hodín. V prípade naliehavých drobných opráv sa snažíme nájsť termín čo najskôr.",
    },
    {
      question: "Máte vlastné náradie a vŕtačky?",
      answer:
        "Áno, náš majster disponuje profesionálnym náradím na vŕtanie do panelu, tehly aj iných materiálov. Máme so sebou všetko potrebné vybavenie.",
    },
  ];

  const features = [
    {
      image: "/icons/wrench_icon.svg",
      title: "Montáž nábytku",
      description: "Poskladáme skrine, postele a komody rýchlo a odborne podľa návodu.",
      link: "/montaz-nabytku",
    },
    {
      image: "/icons/repair_icon.svg",
      title: "Drobné opravy",
      description: "Oprava kvapkajúcich kohútikov, výmena zámkov, kľučiek a ďalšie drobné práce.",
      link: "/hodinovy-manzel-majster",
    },
    {
      image: "/icons/electrical_icon.svg",
      title: "Inštalácie",
      description: "Montáž svietidiel, výmena vypínačov a zapojenie domácich spotrebičov.",
      link: "/hodinovy-manzel-majster",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Hodinový manžel v Nitre"
        description="Profesionálne handyman služby pre Nitru a okolie. Rýchlo, čisto a za rozumnú cenu vyriešime vaše starosti v domácnosti."
        formTitle="Vyžiadať majstra"
        backgroundImage="/images/stahovanie-gauc.avif"
        phoneNumber="421952044363"
      />
      <Clients />
      <GoogleReviews title="Recenzie z Nitry" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["hodinovy-manzel", "montaz-nabytku"]} />
      <Features title="Handyman služby v Nitre" description="Odborná pomoc pre každú domácnosť." features={features} />
      <LocationMap
        title="Pôsobíme v celej Nitre"
        locations={["Nitra", "Lužianky", "Ivanka pri Nitre", "Zbehy", "Janíkovce", "Čermáň", "Klokočina", "Chrenová", "Zobor"]}
        additionalText="Pokrývame všetky mestské časti Nitry a priľahlé obce."
      />
      <InstagramFeed />
      <FAQ title="Často kladené otázky — Nitra" items={faqItems} />
      <CTA
        title="Hľadáte hodinového manžela v Nitre?"
        description="Kontaktujte nás a prenechajte kutilské práce na profesionálov."
        buttonText="Objednať služby"
        imageSrc="/images/sofoservis montaz.jpg"
      />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Montáž nábytku", description: "Profesionálne skladanie nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
          { title: "Montáž kuchyne", description: "Inštalácia kuchynských liniek.", href: "/montaz-kuchyne", icon: "/icons/kitchen_icon.svg" },
          { title: "Hodinový manžel", description: "Všetky handyman služby.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
