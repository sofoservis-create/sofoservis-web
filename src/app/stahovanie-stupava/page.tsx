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
  title: "Sťahovanie Stupava - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Stupave a okolí. Rýchle, spoľahlivé a cenovo výhodné sťahovanie bytov, domov, kancelárií a firiem v Stupave a blízkych lokalitách.",
  keywords:
    "stahovanie stupava, stahovanie bytov stupava, stahovacie služby stupava, stahovanie firiem stupava, preprava nabytku stupava, stahovanie dom stupava",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-stupava",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-stupava",
        en: "https://www.sofoservis.sk/en/moving-stupava",
        "x-default": "https://www.sofoservis.sk/stahovanie-stupava",
      },
  },
  openGraph: {
      title: "Sťahovanie Stupava - byty, domy, nábytok a kancelárie | Sofoservis",
      description: "Profesionálne sťahovacie služby v Stupave a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy a kancelárie.",
      url: "https://www.sofoservis.sk/stahovanie-stupava",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovanieStupavaPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Stupava: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Stupave a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v Stupave a priľahlých lokalitách.",
    formTitle: "Sťahovanie v Stupave bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Data for Features section
  const featuresData = {
    title: "Komplexné sťahovacie služby v Stupave",
    description:
      "Bezpečne presúvame váš majetok v Stupave a okolí s dôrazom na kvalitu a spokojnosť zákazníkov.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Stupave",
        description:
          "Profesionálne sťahovanie rodinných domov a bytov v Stupave. Postaráme sa o kompletnú organizáciu vrátane balenia, prepravy a vybalenia na novom mieste.",
        link: "/stahovanie-bytov-domov", // Real URL from project
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Firemné sťahovanie v Stupave",
        description:
          "Sťahujeme kancelárie a firmy v Stupave s minimálnymi prestojmi. Organizujeme presun počas víkendov a sviatkov, aby váš tím mohol pokračovať v práci bez prerušenia.",
        link: "/stahovanie-kancelarii-firiem", // Real URL from project
      },
      {
        image: "/icons/truck_icon.svg", // Perfect for furniture transport
        title: "Preprava nábytku v Stupave",
        description:
          "Bezpečná preprava nábytku a ťažkých predmetov v Stupave. Používame špecializované techniki a zariadenia pre bezpečné manipulovanie s vašimi cennými kusmi.",
        link: "/stahovanie-preprava-nabytku", // Real URL from project
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving
        title: "Medzinárodné sťahovanie zo Stupavy",
        description:
          "Presťahujeme vás zo Stupavy kamkoľvek v Európe. S dôrazom na presné termíny a bezpečné balenie vám pomôžeme začať nový život v zahraničí.",
        link: "/medzinarodne-stahovanie", // Real URL from project
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých bremien v Stupave",
        description:
          "Špecializujeme sa na presun pianín, trezoroch a iných ťažkých predmetov v Stupave. Máme špeciálne vybavenie a skúsený tím pre bezpečnú manipuláciu.",
        link: "/stahovanie-tazkych-bremien", // Real URL from project
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž nábytku v Stupave",
        description:
          "Ponúkame profesionálnu montáž a demontáž nábytku v Stupave. Máme skúsenosti so všetkými typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
        link: "/montaz-nabytku", // Real URL from project
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Stupave a okolí",
    description:
      "Naše služby poskytujeme v Stupave aj v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Stupava centrum",
      "Stupava Mást",
      "Stupava Malý háj",
      "Kremenica",
      "Vrchná hora",
      "Borník",
      "Koloničova záhrada",
      "Malacky",
      "Zohor",
      "Marianka",
      "Borinka",
      "Lozorno",
      "Vysoká pri Morave",
      "Záhorská Bystrica",
    ],
    additionalText:
      "Bratislava, Malacky, Pezinok a ďalšie lokality v regióne Záhorie a západnej časti Bratislavského kraja.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Stupave",
    items: [
      {
        question:
          "V ktorých častiach Stupavy a okolia poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celej Stupave vrátane všetkých jej častí ako centrum, Mást, Malý háj, ako aj v okolitých obciach ako Marianka, Borinka, Lozorno, Zohor a ďalšie. Samozrejmosťou je aj sťahovanie zo Stupavy do Bratislavy a opačne, keďže ide o dve veľmi blízke lokality.",
      },
      {
        question: "Aká je cena sťahovania v Stupave?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question: "Poskytujete sťahovanie zo Stupavy do Bratislavy a naopak?",
        answer:
          "Áno, sťahovanie medzi Stupavou a Bratislavou je jednou z našich najčastejších trás. Vzhľadom na blízkosť týchto miest vieme zabezpečiť rýchly a efektívny presun vášho majetku s minimálnymi nákladmi.",
      },
      {
        question: "Pomáhate aj so sťahovaním rodinných domov v Stupave?",
        answer:
          "Áno, máme bohaté skúsenosti so sťahovaním rodinných domov v Stupave a okolí. Vieme efektívne zvládnuť logistiku presunu väčšieho množstva nábytku a osobných vecí, vrátane presunu záhradného nábytku a vybavenia.",
      },
      {
        question: "Ako dlho vopred je potrebné objednať sťahovanie v Stupave?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. Keďže Stupava je menšie mesto, v prípade potreby vieme často zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Ponúkate aj balenie vecí pred sťahovaním v Stupave?",
        answer:
          "Áno, naše komplexné služby zahŕňajú aj profesionálne balenie vecí pred sťahovaním. Používame kvalitné baliace materiály, ktoré zabezpečia, že váš majetok bude počas presunu v Stupave a okolí dokonale chránený.",
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
