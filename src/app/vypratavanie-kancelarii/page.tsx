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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie kancelárií a firemných priestorov | Sofoservis",
  description:
    "Profesionálne vypratávanie kancelárií a kancelárskych priestorov ✅ Rýchle a efektívne ✅ Odvoz kancelárskeho nábytku a vybavenia ✅ Ekologická likvidácia.",
  keywords:
    "vypratavanie kancelarii, vypratanie kancelarie, vypratavanie kancelárií, vypratanie kanclarskych priestorov, odvoz kancelarskeho nabytku, likvidacia kancelarskeho vybavenia",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-kancelarii",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-kancelarii",
      en: "https://www.sofoservis.sk/en/office-clearance",
      "x-default": "https://www.sofoservis.sk/vypratavanie-kancelarii",
    },
  },
  openGraph: {
    title: "Vypratávanie kancelárií a firemných priestorov | Sofoservis",
    description:
      "Profesionálne vypratávanie kancelárií. Odvoz nábytku, vybavenia a elektroniky. Ekologická likvidácia. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie-kancelarii",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Čo všetko zahŕňa vypratávanie kancelárie?",
    answer:
      "Zahŕňa odvoz kancelárskeho nábytku (stoly, stoličky, skrine), elektroniky (počítače, monitory, tlačiarne), archívnych materiálov a ostatného vybavenia. Zabezpečíme aj záverečné vyčistenie priestoru.",
  },
  {
    question: "Ako rýchlo viete vypratať kanceláriu?",
    answer:
      "V závislosti od veľkosti priestoru vieme vypratať štandardnú kanceláriu (100-200 m²) za jeden pracovný deň. Vieme organizovať práce aj počas víkendov a sviatkov pre minimálny výpadok vašej prevádzky.",
  },
  {
    question: "Ako naložíte s kancelárskou elektronikou?",
    answer:
      "Kancelársku elektroniku odovzdávame na autorizované zberné miesta elektroodpadu. Ak máte záujem, vieme zabezpečiť aj bezpečné vymazanie dát z pevných diskov pred likvidáciou.",
  },
];

export default function VypratavanieKancelariiPage() {
  const heroData = {
    title: "Vypratávanie kancelárií a kancelárskych priestorov",
    description:
      "Profesionálne a rýchle vypratávanie kancelárií, open-space priestorov, coworking centier a administratívnych budov. Minimalizujeme výpadok vašej prevádzky — pracujeme aj počas víkendov.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Čo zahŕňa vypratávanie kancelárií",
    description:
      "Kompletné riešenie pre vypratanie kancelárskych priestorov — od nábytku po elektroniku.",
    features: [
      {
        image: "/icons/briefcase_icon.svg",
        title: "Kancelársky nábytok a vybavenie",
        description:
          "Odvezieme kancelárske stoly, stoličky, skrine, regály a ostatný nábytok. Zabezpečíme ekologickú likvidáciu alebo darovanie funkčných kusov.",
        link: "/vypratavanie-kancelarii",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Kancelárska elektronika",
        description:
          "Počítače, monitory, tlačiarne, servery a iné zariadenia odovzdávame na autorizované zberné miesta elektroodpadu v súlade s legislatívou.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Archívy a dokumenty",
        description:
          "Pomôžeme s odvozom archívnych materiálov. Na požiadanie zabezpečíme aj bezpečnú skartáciu dokumentov.",
        link: "/vypratavanie-kancelarii",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Rýchle a flexibilné termíny",
        description:
          "Pracujeme aj počas víkendov a sviatkov, aby sme minimalizovali výpadok vašej prevádzky. Plánujeme zákazky podľa vašich potrieb.",
        link: "/vypratavanie-kancelarii",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Záverečné upratovanie",
        description:
          "Po vypratávaní vykonáme záverečné upratovanie priestoru, aby bol pripravený pre nového nájomníka alebo rekonštrukciu.",
        link: "/vypratavanie-kancelarii",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Vypratanie celej budovy",
        description:
          "Vypratávame nielen kancelárie, ale aj sklady, zasadacie miestnosti, archívy, kuchynky a iné priestory v administratívnych budovách.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Práca cez víkend", "Ekologická likvidácia", "Záväzná cena vopred"]}
      />
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews />
      </div>
      <div>
        <Reviews showHeadline={true} />
      </div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>
      <div>
        <InstagramFeed />
      </div>
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>
      <div>
        <FAQ
          title="Časté otázky o vypratávaní kancelárií"
          items={[
            {
              question: "Čo všetko zahŕňa vypratávanie kancelárie?",
              answer:
                "Zahŕňa odvoz kancelárskeho nábytku (stoly, stoličky, skrine, regály), elektroniky (počítače, monitory, tlačiarne, servery), archívnych materiálov, dekorácií a ostatného vybavenia. Na požiadanie vykonáme aj záverečné upratovanie priestoru.",
            },
            {
              question: "Ako rýchlo viete vypratať kanceláriu?",
              answer:
                "Štandardnú kanceláriu (do 200 m²) vieme vypratať za 1 pracovný deň. Väčšie priestory plánujeme individuálne. Pracujeme aj cez víkendy a sviatky, aby sme minimalizovali výpadok vašej prevádzky.",
            },
            {
              question: "Aká je cena za vypratanie kancelárie?",
              answer:
                "Cena závisí od veľkosti priestoru, množstva nábytku a elektroniky a doplnkových služieb. Poskytujeme nezáväznú cenovú ponuku po bezplatnej obhliadke. Hodinová sadzba začína od 25€/hod.",
            },
            {
              question: "Ako naložíte s kancelárskou elektronikou?",
              answer:
                "Kancelársku elektroniku — počítače, monitory, tlačiarne, servery — odovzdávame na autorizované zberné miesta elektroodpadu. Na požiadanie vieme zabezpečiť aj bezpečné vymazanie dát z pevných diskov pred odovzdaním.",
            },
            {
              question: "Vypratávate aj kancelárie v iných mestách okrem Bratislavy?",
              answer:
                "Áno, vypratávame kancelárie v celom Bratislavskom, Trnavskom a Nitrianskom kraji. Pôsobíme v Bratislave, Trnave, Nitre, Senci, Galante, Hlohovci a ďalších mestách.",
            },
          ]}
        />
      </div>
      <div>
        <CTA
          title="Potrebujete rýchle vypratanie kancelárie?"
          description="Zabezpečíme profesionálne vypratanie kancelárskych priestorov s minimálnym výpadkom vašej prevádzky. Pracujeme aj cez víkendy."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ServicePricing filter={["vypratavanie", "stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Sťahovanie kancelárií", description: "Profesionálne sťahovanie firiem a kancelárií.", href: "/stahovanie-kancelarii-firiem", icon: "/icons/briefcase_icon.svg" },
          { title: "Vypratávanie bytov a domov", description: "Kompletné vypratanie bytu alebo domu.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Montáž nábytku", description: "Montáž nového nábytku do prázdneho priestoru.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
