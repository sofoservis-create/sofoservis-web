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
  title: "Sťahovanie Komárno - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Komárne a okolí. Rýchlo, spoľahlivo a za výhodné ceny.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-komarno",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-komarno",
        en: "https://www.sofoservis.sk/en/moving-komarno",
        "x-default": "https://www.sofoservis.sk/stahovanie-komarno",
      },
  },
  keywords:
    "stahovanie komarno, stahovanie bytov komarno, stahovacie služby komarno, stahovanie firiem komarno, preprava nabytku komarno, stahovanie dom komarno",
  openGraph: {
      title: "Sťahovanie Komárno - byty, domy, nábytok a kancelárie | Sofoservis",
      description: "Profesionálne sťahovacie služby v Komárne a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy a kancelárie.",
      url: "https://www.sofoservis.sk/stahovanie-komarno",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovanieKomarnoPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Komárno: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Komárne a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v celom.",
    formTitle: "Sťahovanie v Komárne bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Komárne",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v Komárne a okolí s dôrazom na kvalitu a bezpečnosť prepravy.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Komárne",
        description:
          "Kompletné služby sťahovania bytov a rodinných domov v Komárne. Zabezpečíme bezpečný a spoľahlivý presun vášho majetku s maximálnou opatrnosťou.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Sťahovanie firiem a kancelárií",
        description:
          "Profesionálne sťahovanie podnikov a kancelárií v Komárne. Minimalizujeme prestoje vašej firmy flexibilným sťahovaním aj počas víkendov.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Komárne. Postaráme sa o správne rozloženie a následné poskladanie vášho zariadenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Špecializované sťahovanie pianín, trezorů a iných ťažkých bremien v Komárne s použitím profesionálneho vybavenia a bezpečnostných postupov.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving (Hungary border)
        title: "Medzinárodné sťahovanie",
        description:
          "Sťahovanie z Komárna do zahraničia alebo naopak. Výhodná poloha pri hraniciach s Maďarskom pre efektívnu medzinárodnú prepravu.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Perfect for clearance services
        title: "Vypratávanie nehnuteľností",
        description:
          "Kompletné vypratávanie bytov, domov a nebytových priestorov v Komárne. Ideálne pri predaji nehnuteľnosti alebo generálnej rekonštrukcii.",
        link: "/vypratavanie-bytov-domov",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Komárne a okolí",
    description:
      "Naše služby poskytujeme v celom Komárne aj v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Staré Mesto",
      "Letecké pole",
      "Nová Stráž",
      "Kava",
      "Hadovce",
      "Ďulov Dvor",
      "Robotnícka štvrť",
      "Bašta",
      "Sídlisko I",
      "Sídlisko II",
      "Komárno - Centrum",
      "Komárno - Priemyselná zóna",
    ],
    additionalText:
      "Nová Stráž, Iža, Chotín, Svätý Peter, Hurbanovo, Kolárovo, Zlatná na Ostrove a ďalšie okolité obce. Zabezpečujeme aj cezhraničné sťahovanie do/z maďarského Komáromu.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Komárne",
    items: [
      {
        question: "V ktorých častiach Komárna poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celom Komárne a vo všetkých jeho častiach, vrátane Starého Mesta, Leteckého poľa, Novej Stráže, Kavy, Hadoviec, Ďulovho Dvora, Robotníckej štvrte a ďalších lokalít. Pôsobíme tiež v okolí Komárna - Iža, Chotín, Svätý Peter, Hurbanovo, Kolárovo a ďalšie obce.",
      },
      {
        question: "Zabezpečujete aj cezhraničné sťahovanie do/z Maďarska?",
        answer:
          "Áno, vďaka strategickej polohe Komárna na hranici s Maďarskom poskytujeme aj cezhraničné sťahovacie služby. Zabezpečujeme komplexné sťahovanie do/z maďarského Komáromu a ďalších miest v Maďarsku. Máme skúsenosti s cezhraničným sťahovaním a poznáme všetky potrebné administratívne náležitosti.",
      },
      {
        question: "Aká je cena sťahovania v Komárne?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question: "Ako dlho vopred je potrebné objednať sťahovanie v Komárne?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Komárne?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question:
          "Zabezpečujete aj sťahovanie firiem a podnikov v priemyselnej zóne Komárna?",
        answer:
          "Áno, špecializujeme sa na sťahovanie firiem a podnikov v celom Komárne vrátane priemyselnej zóny. Máme skúsenosti so sťahovaním kancelárií, skladov a výrobných prevádzok. Sťahovanie realizujeme aj mimo pracovných hodín, počas víkendov a sviatkov, aby sme minimalizovali prestoje a výpadky vašej prevádzky.",
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
