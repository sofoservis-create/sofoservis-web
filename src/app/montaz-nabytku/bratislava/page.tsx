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
  title: "Montáž nábytku Bratislava — IKEA, JYSK, Asko | Sofoservis",
  description:
    "Profesionálna montáž nábytku v Bratislave ✅ IKEA, JYSK, Asko a iné značky ✅ Od 25€/hod ✅ Dostupní do 24 hodín",
  alternates: {
    canonical: "https://www.sofoservis.sk/montaz-nabytku/bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/montaz-nabytku/bratislava",
      en: "https://www.sofoservis.sk/en/furniture-assembly-bratislava",
      "x-default": "https://www.sofoservis.sk/montaz-nabytku/bratislava",
    },
  },
};

export default function MontazNabytkuBratislavaPage() {
  const faqItems = [
    {
      question: "Ako rýchlo viete prísť na montáž nábytku v Bratislave?",
      answer:
        "Väčšinu montáží v Bratislave realizujeme do 24 až 48 hodín. V urgentných prípadoch (napr. po sťahovaní) sa snažíme prísť ešte v ten istý deň.",
    },
    {
      question: "Koľko stojí montáž nábytku v Bratislave?",
      answer:
        "Cena práce je 25€ na hodinu na jedného pracovníka. Pri zložitejších kusoch ako sú veľké šatníkové skrine alebo kuchyne vám radi vypracujeme fixnú cenovú ponuku.",
    },
    {
      question: "Montujete aj nábytok z IKEA (PAX, METOD)?",
      answer:
        "Áno, montáž nábytku IKEA patrí medzi naše najčastejšie služby. Dokonale poznáme ich systémy, čo nám umožňuje pracovať veľmi rýchlo a efektívne.",
    },
    {
      question: "Máte vlastné náradie na montáž?",
      answer:
        "Samozrejme, naši montážnici prichádzajú plne vybavení profesionálnym náradím, vodováhami a všetkým potrebným pre bezchybný výsledok.",
    },
  ];

  const features = [
    {
      image: "/icons/wrench_icon.svg",
      title: "Skladanie nábytku",
      description: "Odborná montáž skríň, postelí, komôd a stolov zo všetkých obchodných reťazcov.",
      link: "/montaz-nabytku",
    },
    {
      image: "/icons/kitchen_icon.svg",
      title: "Montáž kuchýň",
      description: "Kompletná inštalácia kuchynských liniek vrátane osadenia spotrebičov a drezu.",
      link: "/montaz-kuchyne",
    },
    {
      image: "/icons/repair_icon.svg",
      title: "Úpravy a opravy",
      description: "Vŕtanie otvorov pre káble, skracovanie políc a vyrovnávanie dvierok nábytku.",
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
          title="Montáž nábytku v Bratislave"
          description="Profesionálne skladanie a montáž nábytku v celej Bratislave. Ušetrite si čas a nervy, my sa postaráme o to, aby váš nový nábytok stál pevne a rovno."
          formTitle="Získať kalkuláciu"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/montaz-mascot.svg"
          desktopMascotDynamicHeight
          desktopMinHeroTextHeightPx={384}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Montáž nábytku v Bratislave"
          description="Profesionálne skladanie a montáž nábytku v celej Bratislave. Ušetrite si čas a nervy, my sa postaráme o to, aby váš nový nábytok stál pevne a rovno."
          formTitle="Získať kalkuláciu"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotOffsetY={-45}
          mobileFormOffsetY={32}
          pillsVariant="stahovanie"
          phoneNumber="421952044363"
        />
      </div>
      <Clients />
      <GoogleReviews title="Recenzie našich klientov" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["montaz-nabytku", "montaz-kuchyne"]} />
      <Features title="Odborná montáž v Bratislave" description="Kvalitné skladanie pre váš domov." features={features} />
      <LocationMap
        title="Montujeme v celej Bratislave"
        locations={["Staré Mesto", "Ružinov", "Petržalka", "Nové Mesto", "Dúbravka", "Karlova Ves", "Rača", "Vrakuňa", "Podunajské Biskupice"]}
        additionalText="Dostupní sme vo všetkých mestských častiach Bratislavy a blízkom okolí."
      />
      <InstagramFeed />
      <FAQ title="Často kladené otázky — Montáž Bratislava" items={faqItems} />
      <CTA
        title="Potrebujete poskladať nábytok v Bratislave?"
        description="Neriskujte poškodenie nábytku nesprávnou montážou. Zavolajte našich profesionálov."
        buttonText="Objednať montáž"
        imageSrc="/images/sofoservis montaz.jpg"
      />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Montáž kuchyne", description: "Inštalácia kuchynských liniek.", href: "/montaz-kuchyne", icon: "/icons/kitchen_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy v domácnosti.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
          { title: "Sťahovanie bytov", description: "Kompletné sťahovacie služby.", href: "/stahovanie-bytov-domov", icon: "/icons/truck_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
