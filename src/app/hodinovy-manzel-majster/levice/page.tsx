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
  title: "Hodinový manžel Levice — opravy, montáž | Sofoservis",
  description:
    "Profesionálny hodinový manžel v Leviciach — montáž nábytku, drobné opravy, vŕtanie a údržba ✅ Od 25€/hod ✅ Rýchly nástup",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/levice",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/levice",
      en: "https://www.sofoservis.sk/en/handyman-levice",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/levice",
    },
  },
};

export default function HodinovyManzelLevicePage() {
  const faqItems = [
    {
      question: "Aké služby poskytuje hodinový manžel v Leviciach?",
      answer:
        "Ponúkame pomoc s drobnými opravami v domácnosti: montáž nábytku, vŕtanie otvorov, vešanie obrazov a garniž, výmenu batérií, či drobné elektro opravy ako výmena zásuviek.",
    },
    {
      question: "Koľko stojí majster v Leviciach?",
      answer:
        "Naša hodinová sadzba v Leviciach je 25€. Doprava a materiál sú účtované osobitne podľa dohody.",
    },
    {
      question: "Ako rýchlo viete prísť v rámci Levíc?",
      answer:
        "Snažíme sa o čo najrýchlejší nástup, zvyčajne do 1-2 pracovných dní. V prípade voľných kapacít prídeme aj v deň objednávky.",
    },
    {
      question: "Robíte aj montáž kuchynských liniek v Leviciach?",
      answer:
        "Áno, montujeme aj kuchyne (IKEA, Decodom a iné) vrátane zapojenia drezu a základných spotrebičov.",
    },
  ];

  const features = [
    {
      image: "/icons/wrench_icon.svg",
      title: "Montáž nábytku",
      description: "Skladanie všetkých typov nábytku z obchodných reťazcov rýchlo a bez chýb.",
      link: "/montaz-nabytku",
    },
    {
      image: "/icons/repair_icon.svg",
      title: "Drobné opravy",
      description: "Všetko od vŕtania poličiek až po opravu kvapkajúcich kohútikov.",
      link: "/hodinovy-manzel-majster",
    },
    {
      image: "/icons/electrical_icon.svg",
      title: "Elektro a Inštalácie",
      description: "Inštalácia svietidiel, výmena vypínačov a drobné úpravy rozvodov.",
      link: "/hodinovy-manzel-majster",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Hodinový manžel v Leviciach"
        description="Vaša pravá ruka pre domácnosť v Leviciach a okolí. Profesionálny prístup k každej drobnej oprave."
        formTitle="Objednať majstra"
        backgroundImage="/images/stahovanie_gauc.jpg"
        phoneNumber="421952044363"
      />
      <Clients />
      <GoogleReviews title="Hodnotenia z Levíc" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["hodinovy-manzel", "montaz-nabytku"]} />
      <Features title="Kutilské služby v Leviciach" description="Prenechajte starosti na nás a užívajte si voľný čas." features={features} />
      <LocationMap
        title="Pôsobíme v celých Leviciach"
        locations={["Levice", "Kalná nad Hronom", "Tlmače", "Hronské Kľačany", "Podlužany", "Starý Tekov"]}
        additionalText="Po dohode prídeme kamkoľvek v rámci levického okresu."
      />
      <InstagramFeed />
      <FAQ title="Často kladené otázky — Levice" items={faqItems} />
      <CTA
        title="Potrebujete hodinového manžela v Leviciach?"
        description="Nerobte si starosti s kutilskými prácami. Náš majster je tu pre vás."
        buttonText="Kontaktujte nás"
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
