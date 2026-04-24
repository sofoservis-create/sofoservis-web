import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
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
  title: "Hodinový manžel Šaľa — opravy, montáž | Sofoservis",
  description:
    "Profesionálny hodinový manžel v Šali — montáž nábytku, drobné opravy, vŕtanie a údržba ✅ Od 25€/hod ✅ Rýchly nástup",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/sala",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/sala",
      en: "https://www.sofoservis.sk/en/handyman-sala",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/sala",
    },
  },
};

export default function HodinovyManzelSalaPage() {
  const faqItems = [
    {
      question: "Aké služby ponúka hodinový manžel v Šali?",
      answer:
        "V Šali zabezpečujeme drobné opravy: montáž nábytku, vešanie políc, garniž, výmenu vodovodných batérií, opravu splachovačov a iné handyman práce.",
    },
    {
      question: "Aká je cena za hodinového manžela v Šali?",
      answer:
        "Naša hodinová sadzba v Šali je 25€. Minimálna objednávka je 1 hodina. Dopravné náklady sú účtované podľa dohody.",
    },
    {
      question: "Ako rýchlo viete prísť v rámci Šale?",
      answer:
        "Štandardne prichádzame do 24-48 hodín. V urgentných prípadoch sa snažíme nájsť skorší termín.",
    },
    {
      question: "Montujete aj nábytok zakúpený v Galante alebo Nitre?",
      answer:
        "Áno, nezáleží na tom, kde ste nábytok kúpili. My ho u vás v Šali poskladáme rýchlo a odborne.",
    },
  ];

  const features = [
    {
      image: "/icons/wrench_icon.svg",
      title: "Montáž nábytku",
      description: "Poskladáme skrine, komody a postele z akéhokoľvek obchodu.",
      link: "/montaz-nabytku",
    },
    {
      image: "/icons/repair_icon.svg",
      title: "Drobné opravy",
      description: "Všetko od vŕtania do stien až po drobné opravy v domácnosti.",
      link: "/hodinovy-manzel-majster",
    },
    {
      image: "/icons/plumbing_icon.svg",
      title: "Voda a elektro",
      description: "Výmena batérií, sifónov a základné elektroinštalačné úkony.",
      link: "/hodinovy-manzel-majster",
    },
  ];

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Hodinový manžel v Šali"
          description="Spoľahlivý majster pre Šaľu a okolie. Profesionálne vyriešime všetky vaše starosti s údržbou domácnosti."
          formTitle="Získať ponuku"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/montaz-mascot.svg"
          desktopMascotDynamicHeight
          desktopMinHeroTextHeightPx={384}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Hodinový manžel v Šali"
          description="Spoľahlivý majster pre Šaľu a okolie. Profesionálne vyriešime všetky vaše starosti s údržbou domácnosti."
          formTitle="Získať ponuku"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotOffsetY={-45}
          mobileFormOffsetY={32}
          pillsVariant="hodinovy"
          phoneNumber="421952044363"
        />
      </div>
      <Clients />
      <GoogleReviews title="Recenzie našich klientov" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["hodinovy-manzel", "montaz-nabytku"]} />
      <Features title="Majstrovské práce v Šali" description="Kvalitne a rýchlo pre váš domov." features={features} />
      <LocationMap
        title="Pôsobíme v Šali a okolí"
        locations={["Šaľa", "Veča", "Trnovec nad Váhom", "Diakovce", "Tešedíkovo", "Močenok", "Kráľová nad Váhom"]}
        additionalText="Dostupní sme pre celé mesto Šaľa a priľahlé obce."
      />
      <InstagramFeed />
      <FAQ title="Často kladené otázky — Šaľa" items={faqItems} />
      <CTA
        title="Hľadáte hodinového manžela v Šali?"
        description="Nečakajte na voľného remeselníka. Náš hodinový manžel je vám k dispozícii."
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
