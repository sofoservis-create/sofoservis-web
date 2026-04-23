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
  title: "Sťahovanie Ružinov - byty, domy, kancelárie | Sofoservis",
  description:
    "Profesionálne sťahovanie v Ružinove. Sťahujeme byty, rodinné domy a kancelárie po celom Ružinove. Rýchlo, spoľahlivo, za výhodné ceny. Ponuka zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-ruzinov",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-ruzinov",
      en: "https://www.sofoservis.sk/en/moving-ruzinov",
      "x-default": "https://www.sofoservis.sk/stahovanie-ruzinov",
    },
  },
  keywords:
    "stahovanie ruzinov, stahovanie bytov ruzinov, stahovacie sluzby ruzinov, stahovanie ruzinov bratislava",
  openGraph: {
    title: "Sťahovanie Ružinov - byty, domy, kancelárie | Sofoservis",
    description:
      "Profesionálne sťahovanie v Ružinove od 25€/hod. Byty, domy, kancelárie, garsonky. Skúsený tím, výhodné ceny.",
    url: "https://www.sofoservis.sk/stahovanie-ruzinov",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieRuzinovPage() {
  const heroData = {
    title: "Sťahovanie Ružinov: Rýchlo a spoľahlivo",
    description:
      "Sťahujeme byty, domy a kancelárie v celom Ružinove. Profesionálny tím s rokmi skúseností v bratislavských štvrtiach. Výhodné ceny, spokojnosť garantovaná.",
    formTitle: "Sťahovanie v Ružinove — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Profesionálne sťahovacie služby v Ružinove",
    description:
      "Kompletné sťahovanie pre domácnosti aj firmy v Ružinove a okolí s dôrazom na starostlivosť a profesionalitu.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov v Ružinove",
        description:
          "Kompletné sťahovanie bytov v Ružinove. Bezpečne prevezieme váš nábytok a osobné veci na nové miesto s maximálnou starostlivosťou.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií a firiem",
        description:
          "Sťahujeme firmy a kancelárie v Ružinove a okolí. Minimalizujeme prestoje vašej firmy — sťahujeme aj cez víkend.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Ružinove. Pracujeme s IKEA, Asko, Jysk aj ďalšími značkami.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Sťahovanie ťažkých bremien",
        description:
          "Sťahovanie klavírov, trezorov a veľkých kusov nábytku v Ružinove. Používame špeciálne vybavenie pre bezpečnú manipuláciu.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie priestorov",
        description:
          "Vypratávanie bytov, domov a pivníc v Ružinove. Vhodné pri predaji nehnuteľnosti alebo rekonštrukcii.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie po celej Bratislave",
        description:
          "Sťahujeme z Ružinova do akejkoľvek časti Bratislavy aj do okolia. Senec, Pezinok, Malacky a ďalšie.",
        link: "/stahovanie-bratislava",
      },
    ],
  };

  const mapData = {
    title: "Sťahujeme po celom Ružinove a okolí",
    description:
      "Pokrývame všetky časti Ružinova vrátane Trnavského mýta, Nivy, Vlčieho hrdla, Trnávky a priľahlých štvrtí.",
    locations: [
      "Ružinov — Trnavské mýto",
      "Ružinov — Nivy",
      "Ružinov — Trnávka",
      "Ružinov — Vlčie hrdlo",
      "Ružinov — Pošeň",
      "Vrakuňa",
      "Podunajské Biskupice",
      "Staré Mesto",
      "Nové Mesto",
      "Petržalka",
    ],
    additionalText: "Sťahujeme aj do okolitých obcí — Senec, Slovenský Grob a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — sťahovanie v Ružinove",
    items: [
      {
        question: "V ktorých častiach Ružinova pôsobíte?",
        answer:
          "Pokrývame celý Ružinov — Trnavské mýto, Nivy, Trnávku, Vlčie hrdlo, Pošeň aj Vrakuňu a Podunajské Biskupice. Sťahujeme z akejkoľvek ulice v tejto mestskej časti.",
      },
      {
        question: "Aká je cena sťahovania v Ružinove?",
        answer:
          "Sťahovanie v Ružinove účtujeme od 25€/hod na pracovníka. Najobľúbenejšia možnosť sú 3 pracovníci za 67€/hod. Sťahovanie v rámci mesta od 40€. Pre presný odhad vyplňte formulár — ponuka je zadarmo.",
      },
      {
        question: "Ako dlho trvá sťahovanie bytu v Ružinove?",
        answer:
          "Jednoizbový byt zvyčajne 2–4 hodiny, dvojizbový 4–6 hodín. Závisí od poschodia, množstva nábytku a vzdialenosti nového bytu.",
      },
      {
        question: "Sťahujete aj kancelárie na Nivách alebo pri Trnavskom mýte?",
        answer:
          "Áno, kancelárske sťahovanie v komerčných budovách na Nivách, pri Trnavskom mýte a v celom Ružinove je naša bežná práca. Vieme sťahovať aj mimo pracovných hodín.",
      },
      {
        question: "Pomáhate aj s montážou nábytku po sťahovaní?",
        answer:
          "Áno, ponúkame kompletné sťahovanie vrátane demontáže nábytku pred odchodom a montáže v novom byte. Pracujeme so všetkými typmi nábytku.",
      },
      {
        question: "Sťahujete aj mimo Ružinova?",
        answer:
          "Samozrejme. Sťahujeme z Ružinova do celej Bratislavy aj za hranice mesta — Senec, Pezinok, Malacky a ďalšie okolité obce. Cestovné mimo mesta je 0,70€/km.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
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
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
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
