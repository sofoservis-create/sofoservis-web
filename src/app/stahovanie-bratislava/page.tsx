import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import LocationMap from "@/components/sections/LocationMap";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Sťahovanie Bratislava - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Bratislave a okolí. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy v každej mestskej časti.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-bratislava",
  },
  keywords:
    "stahovanie bratislava, stahovanie bytov bratislava, stahovacie služby, stahovanie firiem bratislava, preprava nabytku bratislava",
};

export default function StahovanieBratislavaPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Bratislava: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Bratislave a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v každej mestskej časti Bratislavy.",
    formTitle: "Sťahovanie v Bratislave bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Bratislave",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v celej Bratislave a okolí.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment moving
        title: "Sťahovanie bytov v Bratislave",
        description:
          "Kompletné služby sťahovania bytov v Bratislave. Bezpečne prevezieme váš nábytok a osobné veci na nové miesto.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for office/business moving
        title: "Sťahovanie kancelárií a firiem",
        description:
          "Profesionálne sťahovanie firiem a kancelárií v Bratislave. Minimalizujeme prestoje vašej firmy sťahovaním počas víkendov a sviatkov.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for assembly/disassembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž akéhokoľvek nábytku pri sťahovaní v Bratislave. Šetríme váš čas a energiu.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých bremien",
        description:
          "Špecializujeme sa na presun ťažkých bremien ako sú klavíry, trezory či veľké kusy nábytku v Bratislave.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving
        title: "Medzinárodné sťahovanie z Bratislavy",
        description:
          "Presťahovanie z Bratislavy do zahraničia alebo naopak. Komplexné riešenie pre medzinárodné sťahovanie s minimom starostí.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/broom_icon.svg", // Perfect for clearance/cleaning
        title: "Vypratávanie priestorov",
        description:
          "Kompletné vypratávanie nehnuteľností v Bratislave. Vhodné pri predaji, rekonštrukcii alebo dedičskom konaní.",
        link: "/vypratavanie-bytov-domov",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme vo všetkých častiach Bratislavy",
    description:
      "Naše služby poskytujeme vo všetkých mestských častiach Bratislavy aj v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Staré Mesto",
      "Ružinov",
      "Nové Mesto",
      "Petržalka",
      "Karlova Ves",
      "Dúbravka",
      "Rača",
      "Vrakuňa",
      "Podunajské Biskupice",
      "Devínska Nová Ves",
      "Devín",
      "Lamač",
      "Záhorská Bystrica",
      "Vajnory",
      "Jarovce",
      "Rusovce",
      "Čunovo",
    ],
    additionalText: "Senec, Pezinok, Malacky, Stupava a ďalšie okolité obce.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Bratislave",
    items: [
      {
        question:
          "V ktorých častiach Bratislavy poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme vo všetkých mestských častiach Bratislavy vrátane Starého Mesta, Ružinova, Petržalky, Dúbravky, Karlovej Vsi, Nového Mesta, Rače a ďalších. Pôsobíme tiež v okolí Bratislavy - Senec, Pezinok, Malacky.",
      },
      {
        question: "Aká je cena sťahovania v Bratislave?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question:
          "Ako dlho vopred je potrebné objednať sťahovanie v Bratislave?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Bratislave?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question:
          "Sťahujete aj ťažké predmety ako klavíry alebo trezory v Bratislave?",
        answer:
          "Áno, špecializujeme sa aj na sťahovanie ťažkých a objemných predmetov ako sú klavíry, trezory, biliardové stoly či antický nábytok. Používame špeciálne vybavenie a techniky na bezpečnú manipuláciu s týmito predmetmi.",
      },
      {
        question:
          "Ako riešite parkovanie sťahovacieho auta v centre Bratislavy?",
        answer:
          "Máme skúsenosti s parkovaním v centre Bratislavy. V prípade potreby vieme zabezpečiť povolenia na dočasné parkovanie. O túto administratívu sa postaráme my, aby ste sa nemuseli zaťažovať byrokraciou.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
      />

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showCarousel={true} />
      </div>

      {/* Features section */}
      <div className="">
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Location Map section */}
      <div>
        <LocationMap
          title={mapData.title}
          description={mapData.description}
          locations={mapData.locations}
          additionalText={mapData.additionalText}
        />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews />
      </div>

      {/* FAQ section */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ title={faqData.title} items={faqData.items} />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
