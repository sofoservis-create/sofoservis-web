import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
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
  title: "Sťahovanie Piešťany - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Piešťanoch a okolí. Rýchlo, spoľahlivo a za výhodné ceny.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-piestany",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-piestany",
        en: "https://www.sofoservis.sk/en/moving-piestany",
        "x-default": "https://www.sofoservis.sk/stahovanie-piestany",
      },
  },
  keywords:
    "stahovanie piestany, stahovanie bytov piestany, stahovacie služby piestany, stahovanie firiem piestany, preprava nabytku piestany, stahovanie dom piestany, stahovanie kupele piestany",
  openGraph: {
      title: "Sťahovanie Piešťany - byty, domy, nábytok a kancelárie | Sofoservis",
      description: "Profesionálne sťahovacie služby v Piešťanoch a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy a kancelárie.",
      url: "https://www.sofoservis.sk/stahovanie-piestany",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovaniePiestanyPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Piešťany: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Piešťanoch a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy.",
    formTitle: "Sťahovanie v Piešťanoch bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };
  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Piešťanoch",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v Piešťanoch a okolí s dôrazom na kvalitu a spoľahlivosť v kúpeľnom meste.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov",
        description:
          "Kompletné služby sťahovania bytov a rodinných domov v Piešťanoch. Zabezpečíme bezpečný presun vášho majetku s maximálnou starostlivosťou a profesionalitou.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Sťahovanie firiem a kancelárií",
        description:
          "Profesionálne sťahovanie podnikov a kancelárií v Piešťanoch. Špecializujeme sa na firemné sťahovanie s minimálnymi prestojmi aj počas víkendov.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Piešťanoch. Zabezpečíme správne rozloženie a následné poskladanie vášho zariadenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Špecializované sťahovanie pianín, trezoroch a iných ťažkých bremien v Piešťanoch s použitím profesionálneho vybavenia a bezpečnostných postupov.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Perfect for clearance services
        title: "Vypratávanie priestorov",
        description:
          "Kompletné vypratávanie bytov, domov a nebytových priestorov v Piešťanoch. Vhodné pri predaji nehnuteľnosti alebo rozsiahlej rekonštrukcii.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/hammer_icon.svg", // Perfect for handyman services
        title: "Hodinový manžel - pomocné práce",
        description:
          "Služby hodinového manžela v Piešťanoch pre drobné opravy, montáže a pomocné práce súvisiace so sťahovaním alebo zariaďovaním domácnosti.",
        link: "/hodinovy-manzel-majster",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme vo všetkých častiach Piešťan",
    description:
      "Naše služby poskytujeme vo všetkých častiach Piešťan aj v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Centrum mesta",
      "Kúpeľný ostrov",
      "Sídlisko Adam Trajan",
      "Sídlisko Juh",
      "Sídlisko Sever",
      "Floreát",
      "Bodona",
      "Kanada",
      "Kolonáda",
      "Malá Bratislavská",
      "Nitrianska",
      "Štefánikova",
      "Vodárenská",
      "Žilinská cesta",
    ],
    additionalText:
      "Vrbové, Moravany nad Váhom, Banka, Ratnovce, Drahovce, Trebatice, Krakovany a ďalšie okolité obce v Piešťanskom regióne.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Piešťanoch",
    items: [
      {
        question: "V ktorých častiach Piešťan poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme vo všetkých častiach Piešťan vrátane centra mesta, Kúpeľného ostrova, sídlisk Adam Trajan, Juh, Sever a ďalších lokalít. Pôsobíme tiež v okolí Piešťan - Vrbové, Moravany nad Váhom, Banka, Drahovce a ďalšie obce v regióne.",
      },
      {
        question: "Aká je cena sťahovania v Piešťanoch?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question:
          "Ako dlho vopred je potrebné objednať sťahovanie v Piešťanoch?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Sťahujete aj v oblasti kúpeľov a kúpeľných hotelov?",
        answer:
          "Áno, máme bohaté skúsenosti so sťahovaním v oblasti Kúpeľného ostrova a kúpeľných zariadení v Piešťanoch. Rozumieme špecifickým požiadavkám a obmedzeniam pri práci v týchto lokalitách a vieme zabezpečiť profesionálne a diskrétne sťahovanie s minimálnym rušením hostí a prevádzky.",
      },
      {
        question:
          "Sťahujete aj ťažké predmety ako klavíry alebo zdravotnícke zariadenia?",
        answer:
          "Áno, špecializujeme sa aj na sťahovanie ťažkých a objemných predmetov ako sú klavíry, trezory, biliardové stoly, ale aj zdravotnícke zariadenia a prístroje. Používame špeciálne vybavenie a techniky na bezpečnú manipuláciu s týmito predmetmi.",
      },
      {
        question:
          "Poskytujete sťahovacie služby aj pre sezónne podniky a prevádzky v Piešťanoch?",
        answer:
          "Áno, poskytujeme sťahovacie služby aj pre sezónne prevádzky, reštaurácie a hotely v Piešťanoch. Vieme prispôsobiť časový harmonogram sťahovania podľa vašich potrieb, vrátane sťahovania v mimosezónnom období alebo mimo otváracích hodín, aby sme minimalizovali vplyv na vašu prevádzku.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

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
