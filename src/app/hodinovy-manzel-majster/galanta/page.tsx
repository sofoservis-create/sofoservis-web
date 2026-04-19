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
  title: "Hodinový manžel Galanta — opravy, montáž | Sofoservis",
  description:
    "Profesionálny hodinový manžel v Galante — montáž nábytku, drobné opravy, vŕtanie a údržba ✅ Od 25€/hod ✅ Rýchly nástup",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/galanta",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/galanta",
      en: "https://www.sofoservis.sk/en/handyman-galanta",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/galanta",
    },
  },
};

export default function HodinovyManzelGalantaPage() {
  const faqItems = [
    {
      question: "Aké práce vykonáva hodinový manžel v Galante?",
      answer:
        "Zabezpečujeme všetky drobné opravy: montáž nábytku, vešanie políc, obrazov a zrkadiel, výmenu vodovodných batérií, opravu splachovačov či inštaláciu svietidiel.",
    },
    {
      question: "Aká je cena za hodinu v Galante?",
      answer:
        "Základná sadzba je 25€/hod. Minimálny odber služieb je jedna hodina. Doprava v rámci Galanty a blízkeho okolia je dohodnutá individuálne.",
    },
    {
      question: "Prídete aj do okolitých obcí Galanty?",
      answer:
        "Áno, obsluhujeme aj obce ako Matúškovo, Kajal, Váhovce, Sládkovičovo či Sereď.",
    },
    {
      question: "Musím mať vlastné skrutky alebo hmoždinky?",
      answer:
        "Náš majster má so sebou základný spojovací materiál. Ak potrebujete špecifické diely, môžeme ich po dohode zakúpiť za vás.",
    },
  ];

  const features = [
    {
      image: "/icons/wrench_icon.svg",
      title: "Montáž nábytku",
      description: "Poskladáme vaše skrine, postele a stoly z akéhokoľvek obchodu (IKEA, JYSK, Moebelix).",
      link: "/montaz-nabytku",
    },
    {
      image: "/icons/repair_icon.svg",
      title: "Domáce opravy",
      description: "Vŕtanie do stien, oprava nábytku, výmena zámkov a kľučiek na dverách.",
      link: "/hodinovy-manzel-majster",
    },
    {
      image: "/icons/plumbing_icon.svg",
      title: "Voda a elektro",
      description: "Drobné inštalatérske práce a výmena vypínačov či zásuviek bez čakania.",
      link: "/hodinovy-manzel-majster",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Hodinový manžel v Galante"
        description="Váš spoľahlivý majster pre Galantu a okolie. Pomôžeme vám s prácami v domácnosti, na ktoré nemáte čas alebo potrebné náradie."
        formTitle="Rezervujte si termín"
        backgroundImage="/images/stahovanie-gauc.avif"
        phoneNumber="421952044363"
      />
      <Clients />
      <GoogleReviews title="Recenzie z Galanty" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["hodinovy-manzel", "montaz-nabytku"]} />
      <Features title="Majstrovské služby v Galante" description="Všetko pre váš domov pod jednou strechou." features={features} />
      <LocationMap
        title="Pôsobíme v Galante a okolí"
        locations={["Galanta", "Matúškovo", "Kajal", "Váhovce", "Sládkovičovo", "Sereď", "Nebojsa", "Hody", "Javorinka"]}
        additionalText="Rýchly dojazd v rámci celého okresu Galanta."
      />
      <InstagramFeed />
      <FAQ title="Často kladené otázky — Galanta" items={faqItems} />
      <CTA
        title="Hľadáte hodinového manžela v Galante?"
        description="Zavolajte nám a dohodnite si termín ešte dnes. Sme flexibilní a pripravení pomôcť."
        buttonText="Kontaktovať majstra"
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
