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
  title: "Sťahovanie Staré Mesto Bratislava - centrum, | Sofoservis",
  description:
    "Sťahovanie v Starom Meste Bratislava. Skúsenosti so sťahovaním v centre mesta, historických budovách a bez parkovania. Vybavíme parkovacie povolenie.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-stare-mesto",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-stare-mesto",
      en: "https://www.sofoservis.sk/en/moving-stare-mesto",
      "x-default": "https://www.sofoservis.sk/stahovanie-stare-mesto",
    },
  },
  keywords:
    "stahovanie stare mesto bratislava, stahovanie centrum bratislava, stahovanie historicke budovy bratislava, stahovacie sluzby stare mesto",
  openGraph: {
    title: "Sťahovanie Staré Mesto Bratislava - centrum, historické budovy | Sofoservis",
    description:
      "Sťahovanie v Starom Meste Bratislava od 25€/hod. Skúsenosti s historickými budovami bez výťahu, úzkymi schodiskami.",
    url: "https://www.sofoservis.sk/stahovanie-stare-mesto",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieStareMestoPage() {
  const heroData = {
    title: "Sťahovanie Staré Mesto: Centrum bez komplikácií",
    description:
      "Sťahujeme v Starom Meste Bratislavy vrátane historických budov, bytov bez výťahu a lokalít s obmedzeným parkovaním. Vybavíme parkovacie povolenie.",
    formTitle: "Sťahovanie v Starom Meste — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Sťahovanie v centre Bratislavy",
    description:
      "Špeciálne skúsenosti so sťahovaním v historickom centre — úzke ulice, obmedzené parkovanie, staré schodiská. Poradíme si s každou situáciou.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov v Starom Meste",
        description:
          "Sťahujeme byty v historickom centre vrátane starých budov s úzkymi schodiskami a bez výťahu. Máme skúsenosti s každým typom nehnuteľnosti.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií v centre",
        description:
          "Sťahujeme kancelárie a firmy sídliace v centre Bratislavy. Vieme sa prispôsobiť obmedzených parkovacím podmienkam a sťahovať aj mimo pracovných hodín.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Starom Meste. Pripravíme nábytok na prepravu cez úzke dvere a schodiská.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Sťahovanie klavírov, trezorov a ťažkého nábytku v centre mesta. Používame špeciálne techniky a vybavenie pre bezpečný presun.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie priestorov",
        description:
          "Vypratávanie bytov, kancelárií a historických priestorov v Starom Meste. Odnos starého nábytku a likvidácia odpadu.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie po celej Bratislave",
        description:
          "Sťahujeme zo Starého Mesta do akejkoľvek časti Bratislavy aj mimo mesta. Rýchlo a bez komplikácií.",
        link: "/stahovanie-bratislava",
      },
    ],
  };

  const mapData = {
    title: "Sťahujeme v celom Starom Meste a okolí",
    description:
      "Pokrývame celé Staré Mesto vrátane historického centra, Palisád, Starého Rínku a priľahlých štvrtí.",
    locations: [
      "Staré Mesto — centrum",
      "Staré Mesto — Palisády",
      "Staré Mesto — Zámocká",
      "Staré Mesto — Šancová",
      "Ružinov",
      "Nové Mesto",
      "Karlova Ves",
      "Petržalka",
      "Lamač",
    ],
    additionalText: "Sťahujeme aj do okolitých obcí a iných miest Slovenska.",
  };

  const faqData = {
    title: "Často kladené otázky — sťahovanie v Starom Meste",
    items: [
      {
        question: "Ako riešite parkovanie sťahovacieho auta v centre Bratislavy?",
        answer:
          "Toto je naša bežná situácia. V prípade potreby vybavíme dočasné parkovacie povolenie na príslušnom miestnom úrade. O celú byrokraciu sa postaráme my — vy sa nemusíte ničím zaťažovať.",
      },
      {
        question: "Sťahujete aj zo starých budov bez výťahu?",
        answer:
          "Áno, máme skúsenosti so sťahovaním z historických budov s úzkymi schodiskami a bez výťahu. Za každé poschodie bez výťahu účtujeme 15€. Vieme preniesť nábytok aj cez úzke dvere a otočné schodiská.",
      },
      {
        question: "Aká je cena sťahovania v Starom Meste?",
        answer:
          "Sťahovanie v Starom Meste účtujeme od 25€/hod na pracovníka, najobľúbenejšia možnosť sú 3 pracovníci za 67€/hod. Pre presný odhad vyplňte formulár — ponuka je zadarmo.",
      },
      {
        question: "Sťahujete aj kancelárie sídliace v historických budovách?",
        answer:
          "Áno, máme skúsenosti so sťahovaním kancelárií z historických budov v centre. Vieme sťahovať aj mimo pracovných hodín alebo cez víkend, aby sme minimalizovali narušenie vášho podnikania.",
      },
      {
        question: "Ako dlho trvá sťahovanie bytu v Starom Meste?",
        answer:
          "Závisí od poschodia, prístupu a množstva nábytku. Bežný jednoizbový byt trvá 3–5 hodín, dvojizbový 5–7 hodín. V historických budovách počítajte s o niečo dlhším časom kvôli schodiskám.",
      },
      {
        question: "Sťahujete aj mimo centra Bratislavy?",
        answer:
          "Áno, sťahujeme zo Starého Mesta do celej Bratislavy aj mimo mesta. Či to je Petržalka, Ružinov, alebo Senec — poradíme si.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
      />

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
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews showCarousel={true} />
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
        <LocationMap
          title={mapData.title}
          description={mapData.description}
          locations={mapData.locations}
          additionalText={mapData.additionalText}
        />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <FAQ title={faqData.title} items={faqData.items} />
      </div>
      <div>
        <CTA />
      </div>
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Sťahovanie Bratislava","description":"Profesionálne sťahovanie v celej Bratislave.","href":"/stahovanie-bratislava","icon":"/icons/truck_icon.svg"},{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
