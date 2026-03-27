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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata = {
  title: "Sťahovanie Senica - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Senici a okolí. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy v Senici a celom Záhorí.",
  keywords:
    "stahovanie senica, stahovanie bytov senica, stahovacie služby senica, stahovanie firiem senica, preprava nabytku senica, stahovanie zahorie, stahovanie dom senica",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-senica",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-senica",
        en: "https://www.sofoservis.sk/en/moving-senica",
        "x-default": "https://www.sofoservis.sk/stahovanie-senica",
      },
  },
};

export default function StahovanieSenicaPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Senica: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Senici a celom regióne Záhoria. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v Senici a blízkom okolí.",
    formTitle: "Sťahovanie v Senici bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Data for Features section
  const featuresData = {
    title: "Komplexné sťahovacie služby v Senici",
    description:
      "Bezpečne presúvame váš majetok v Senici a okolí s dôrazom na kvalitu a spokojnosť zákazníkov.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Senici",
        description:
          "Profesionálne sťahovanie rodinných domov a bytov v Senici. Postaráme sa o kompletnú organizáciu vrátane balenia, prepravy a vybalenia na novom mieste.",
        link: "/stahovanie-bytov-domov", // Real URL from project
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Firemné sťahovanie v Senici",
        description:
          "Sťahujeme kancelárie a firmy v Senici s minimálnymi prestojmi. Organizujeme presun počas víkendov a sviatkov, aby váš tím mohol pokračovať v práci bez prerušenia.",
        link: "/stahovanie-kancelarii-firiem", // Real URL from project
      },
      {
        image: "/icons/truck_icon.svg", // Perfect for furniture transport
        title: "Preprava nábytku v Senici",
        description:
          "Bezpečná preprava nábytku a ťažkých predmetov v Senici. Používame špecializované techniki a zariadenia pre bezpečné manipulovanie s vašimi cennými kusmi.",
        link: "/stahovanie-preprava-nabytku", // Real URL from project
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving
        title: "Medzinárodné sťahovanie zo Senice",
        description:
          "Presťahujeme vás zo Senice kamkoľvek v Európe. S dôrazom na presné termíny a bezpečné balenie vám pomôžeme začať nový život v zahraničí.",
        link: "/medzinarodne-stahovanie", // Real URL from project
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých bremien v Senici",
        description:
          "Špecializujeme sa na presun pianín, trezoroch a iných ťažkých predmetov v Senici. Máme špeciálne vybavenie a skúsený tím pre bezpečnú manipuláciu.",
        link: "/stahovanie-tazkych-bremien", // Real URL from project
      },
      {
        image: "/icons/container_icon.svg", // Perfect for construction waste removal
        title: "Odvoz stavebného odpadu v Senici",
        description:
          "Ponúkame profesionálny odvoz a likvidáciu stavebného odpadu v Senici. Postaráme sa o environmentálne zodpovedné zneškodnenie všetkých materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu", // Real URL from project
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Senici a celom Záhorí",
    description:
      "Naše služby poskytujeme v celom meste Senica a v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Senica centrum",
      "Sotina",
      "Čáčov",
      "Kunov",
      "Skalica",
      "Holíč",
      "Šaštín-Stráže",
      "Kúty",
      "Sobotište",
      "Štefanov",
      "Dojč",
      "Jablonica",
      "Cerová",
      "Prietrž",
    ],
    additionalText:
      "Myjava, Malacky, Trnava a ďalšie mestá a obce v regióne Záhoria.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Senici",
    items: [
      {
        question:
          "V ktorých častiach Senice a okolia poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celom meste Senica vrátane všetkých jeho častí - centrum, Sotina, Čáčov, Kunov a ďalšie. Pôsobíme tiež v širšom okolí - Skalica, Holíč, Šaštín-Stráže, Kúty, Sobotište a ďalšie obce v regióne Záhoria.",
      },
      {
        question: "Aká je cena sťahovania v Senici?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question: "Ako dlho vopred je potrebné objednať sťahovanie v Senici?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Senici?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question:
          "Zabezpečujete aj medzimestské sťahovanie zo Senice do iných miest?",
        answer:
          "Áno, okrem lokálneho sťahovania v rámci Senice a okolia poskytujeme aj medzimestské sťahovanie zo Senice do iných miest na Slovensku, ako aj medzinárodné sťahovanie. Často realizujeme sťahovanie zo Senice do Bratislavy, Trnavy, či iných väčších miest.",
      },
      {
        question: "Realizujete v Senici aj sťahovanie firiem a kancelárií?",
        answer:
          "Áno, špecializujeme sa na sťahovanie firiem a kancelárií v Senici a okolí. Sťahovanie realizujeme aj mimo pracovných hodín, cez víkendy či sviatky, aby sme minimalizovali prestoje vašej firmy. Zaistíme bezpečný presun kancelárskeho zariadenia, IT vybavenia, archívov a iného firemného majetku.",
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
            benefits={["Poistenie nábytku zahrnuté", "Bez skrytých poplatkov", "Záväzná cena vopred"]}
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
      <div>
        <FAQ title={faqData.title} items={faqData.items} />
      </div>

      {/* CTA section */}
      <div>
        <CTA />
      </div>
    
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie kancelárií","description":"Rýchle sťahovanie firiem s minimálnym prestojom.","href":"/stahovanie-kancelarii-firiem","icon":"/icons/briefcase_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/broom_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
