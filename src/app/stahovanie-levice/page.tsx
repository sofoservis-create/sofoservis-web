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
  title: "Sťahovanie Levice - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Leviciach a okolí. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy v celom meste.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-levice",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-levice",
        en: "https://www.sofoservis.sk/en/moving-levice",
        "x-default": "https://www.sofoservis.sk/stahovanie-levice",
      },
  },
  keywords:
    "stahovanie levice, stahovanie bytov levice, stahovacie služby levice, stahovanie firiem levice, preprava nabytku levice, stahovanie dom levice",
  openGraph: {
      title: "Sťahovanie Levice - byty, domy, nábytok a kancelárie | Sofoservis",
      description: "Profesionálne sťahovacie služby v Leviciach a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy a kancelárie.",
      url: "https://www.sofoservis.sk/stahovanie-levice",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovanieLevicePage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Levice: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Leviciach a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v celých Leviciach a okolitých obciach.",
    formTitle: "Sťahovanie v Leviciach bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Leviciach",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v Leviciach a okolí s dôrazom na spoľahlivosť a profesionalitu.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Leviciach",
        description:
          "Kompletné služby sťahovania bytov a rodinných domov v Leviciach. Zabezpečíme bezpečný presun vášho majetku s maximálnou starostlivosťou a precíznosťou.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Sťahovanie firiem a kancelárií",
        description:
          "Profesionálne sťahovanie podnikov a kancelárií v Leviciach. Flexibilné termíny včítane víkendov pre minimalizáciu prestojov vašej firmy.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Leviciach. Zabezpečíme správne rozloženie a následné poskladanie vášho zariadenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Špecializované sťahovanie pianín, trezorů a iných ťažkých bremien v Leviciach s použitím profesionálneho vybavenia a bezpečnostných postupov.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Perfect for clearance services
        title: "Vypratávanie priestorov",
        description:
          "Kompletné vypratávanie bytov, domov a nebytových priestorov v Leviciach. Vhodné pri predaji nehnuteľnosti alebo rozsiahlej rekonštrukcii.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/hammer_icon.svg", // Perfect for handyman services
        title: "Hodinový manžel - pomocné práce",
        description:
          "Služby hodinového manžela v Leviciach pre drobné opravy, montáže a pomocné práce súvisiace so sťahovaním alebo zariaďovaním domácnosti.",
        link: "/hodinovy-manzel-majster",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Leviciach a okolí",
    description:
      "Naše služby poskytujeme v celých Leviciach a v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Centrum mesta",
      "Rybníky",
      "Čankov",
      "Horša",
      "Kalinčiakovo",
      "Malý Kiar",
      "Nixbród",
      "Levice-juh",
      "Sídlisko Vinohrady",
      "Sídlisko Rybníky",
      "Žigmund",
      "Levice-západ",
      "Družstevnícka štvrť",
      "Krížny Vrch",
    ],
    additionalText:
      "Šahy, Želiezovce, Tlmače, Pukanec, Bátovce a ďalšie okolité obce v Levickom okrese.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Leviciach",
    items: [
      {
        question: "V ktorých častiach Levíc poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celých Leviciach vrátane všetkých mestských častí a sídlisk ako Centrum, Rybníky, Vinohrady, a ďalších. Pôsobíme tiež v širokom okolí Levíc - Šahy, Želiezovce, Tlmače, Pukanec, Bátovce a iné obce v Levickom okrese.",
      },
      {
        question: "Aká je cena sťahovania v Leviciach?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question:
          "Ako dlho vopred je potrebné objednať sťahovanie v Leviciach?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Leviciach?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question:
          "Sťahujete aj ťažké predmety ako klavíry alebo trezory v Leviciach?",
        answer:
          "Áno, špecializujeme sa aj na sťahovanie ťažkých a objemných predmetov ako sú klavíry, trezory, biliardové stoly či antický nábytok. Používame špeciálne vybavenie a techniky na bezpečnú manipuláciu s týmito predmetmi.",
      },
      {
        question:
          "Poskytujete aj sťahovanie z Levíc do iných miest na Slovensku?",
        answer:
          "Áno, okrem lokálneho sťahovania v rámci Levíc poskytujeme aj sťahovanie z Levíc do iných slovenských miest alebo opačne. Zabezpečujeme aj medzinárodné sťahovanie. Vďaka našej celoštátnej pôsobnosti vám vieme garantovať rovnakú kvalitu služieb bez ohľadu na vzdialenosť.",
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
