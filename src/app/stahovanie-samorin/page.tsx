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
  title: "Sťahovanie Šamorín - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Šamoríne a okolí. Rýchlo, spoľahlivo a za výhodné ceny.",
  keywords:
    "stahovanie samorin, stahovanie bytov samorin, stahovacie služby samorin, stahovanie firiem samorin, preprava nabytku samorin, stahovanie dom samorin",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-samorin",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-samorin",
        en: "https://www.sofoservis.sk/en/moving-samorin",
        "x-default": "https://www.sofoservis.sk/stahovanie-samorin",
      },
  },
  openGraph: {
      title: "Sťahovanie Šamorín - byty, domy, nábytok a kancelárie | Sofoservis",
      description: "Profesionálne sťahovacie služby v Šamoríne a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy a kancelárie.",
      url: "https://www.sofoservis.sk/stahovanie-samorin",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function SamorinPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Šamorín: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Šamoríne a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy.",
    formTitle: "Sťahovanie v Šamoríne bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Data for Features section
  const featuresData = {
    title: "Komplexné sťahovacie služby v Šamoríne",
    description:
      "Bezpečne presúvame váš majetok v Šamoríne a okolí s dôrazom na kvalitu a spokojnosť zákazníkov.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Šamoríne",
        description:
          "Profesionálne sťahovanie rodinných domov a bytov v Šamoríne. Postaráme sa o kompletnú organizáciu vrátane balenia, prepravy a vybalenia na novom mieste.",
        link: "/stahovanie-bytov-domov", // Real URL from project
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Firemné sťahovanie v Šamoríne",
        description:
          "Sťahujeme kancelárie a firmy v Šamoríne s minimálnymi prestojmi. Organizujeme presun počas víkendov a sviatkov, aby váš tím mohol pokračovať v práci bez prerušenia.",
        link: "/stahovanie-kancelarii-firiem", // Real URL from project
      },
      {
        image: "/icons/truck_icon.svg", // Perfect for furniture transport
        title: "Preprava nábytku v Šamoríne",
        description:
          "Bezpečná preprava nábytku a ťažkých predmetov v Šamoríne. Používame špecializované techniki a zariadenia pre bezpečné manipulovanie s vašimi cennými kusmi.",
        link: "/stahovanie-preprava-nabytku", // Real URL from project
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving
        title: "Medzinárodné sťahovanie zo Šamorína",
        description:
          "Presťahujeme vás zo Šamorína kamkoľvek v Európe. S dôrazom na presné termíny a bezpečné balenie vám pomôžeme začať nový život v zahraničí.",
        link: "/medzinarodne-stahovanie", // Real URL from project
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých bremien v Šamoríne",
        description:
          "Špecializujeme sa na presun pianín, trezoroch a iných ťažkých predmetov v Šamoríne. Máme špeciálne vybavenie a skúsený tím pre bezpečnú manipuláciu.",
        link: "/stahovanie-tazkych-bremien", // Real URL from project
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž nábytku v Šamoríne",
        description:
          "Ponúkame profesionálnu montáž a demontáž nábytku v Šamoríne. Máme skúsenosti so všetkými typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
        link: "/montaz-nabytku", // Real URL from project
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Šamoríne a okolí",
    description:
      "Naše služby poskytujeme v celom Šamoríne a v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Šamorín centrum",
      "Čilistov",
      "Mliečno",
      "Kráľovianky",
      "Bučuháza",
      "Hamuliakovo",
      "Kyselica",
      "Vojka nad Dunajom",
      "Dobrohošť",
      "Rohovce",
      "Báč",
      "Kvetoslavov",
      "Hubice",
      "Hviezdoslavov",
    ],
    additionalText:
      "Dunajská Streda, Veľký Meder, Gabčíkovo, Bratislava a ďalšie okolité obce v Trnavskom kraji.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Šamoríne",
    items: [
      {
        question: "V ktorých častiach Šamorína poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celom Šamoríne vrátane mestských častí ako Čilistov, Mliečno, Kráľovianky a Bučuháza. Pôsobíme tiež v okolí Šamorína - Hamuliakovo, Kyselica, Vojka nad Dunajom, Dobrohošť, Rohovce, Báč, Kvetoslavov a ďalšie blízke obce.",
      },
      {
        question: "Aká je cena sťahovania v Šamoríne?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question: "Ako dlho vopred je potrebné objednať sťahovanie v Šamoríne?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj sťahovanie do/z Bratislavy zo Šamorína?",
        answer:
          "Áno, vďaka blízkosti Bratislavy je sťahovanie medzi Šamorínom a Bratislavou jedna z našich najčastejších trás. Máme bohaté skúsenosti s touto trasou a zabezpečujeme rýchly a efektívny presun majetku medzi týmito mestami.",
      },
      {
        question:
          "Sťahujete aj ťažké predmety ako klavíry alebo trezory v Šamoríne?",
        answer:
          "Áno, špecializujeme sa aj na sťahovanie ťažkých a objemných predmetov ako sú klavíry, trezory, biliardové stoly či antický nábytok. Používame špeciálne vybavenie a techniky na bezpečnú manipuláciu s týmito predmetmi.",
      },
      {
        question: "Viete pomôcť so sťahovaním aj počas víkendov v Šamoríne?",
        answer:
          "Áno, naše služby poskytujeme 6 dní v týždni vrátane soboty, a to bez príplatku. Sme flexibilní a prispôsobíme sa vašim časovým požiadavkám, aby sťahovanie prebiehalo čo najpohodlnejšie.",
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
        services={[{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie kancelárií","description":"Rýchle sťahovanie firiem s minimálnym prestojom.","href":"/stahovanie-kancelarii-firiem","icon":"/icons/briefcase_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
