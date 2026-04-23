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
  title: "Sťahovanie Petržalka — byty a domy | Sofoservis",
  description:
    "Profesionálne sťahovanie v Petržalke. Skúsenosti so sťahovaním z panelových domov, vynáškou bez výťahu a dopravou po celej Bratislave. Cenová ponuka.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-petrzalka",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-petrzalka",
      en: "https://www.sofoservis.sk/en/moving-petrzalka",
      "x-default": "https://www.sofoservis.sk/stahovanie-petrzalka",
    },
  },
  keywords:
    "stahovanie petrzalka, stahovanie bytov petrzalka, stahovanie panelakovych bytov petrzalka, stahovacie sluzby petrzalka bratislava",
  openGraph: {
    title: "Sťahovanie Petržalka - byty, panelové domy, nábytok | Sofoservis",
    description:
      "Profesionálne sťahovanie v Petržalke od 25€/hod. Skúsenosti s panelovými domami, vynáška bez výťahu, doprava po celej Bratislave.",
    url: "https://www.sofoservis.sk/stahovanie-petrzalka",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniePetrzalkaPage() {
  const heroData = {
    title: "Sťahovanie Petržalka: Rýchlo a spoľahlivo",
    description:
      "Sťahujeme byty a domácnosti v celej Petržalke. Máme skúsenosti so sťahovaním z panelových domov vrátane vynášky po schodoch bez výťahu. Profesionálny tím, výhodné ceny, spokojnosť garantovaná.",
    formTitle: "Sťahovanie v Petržalke — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Profesionálne sťahovacie služby v Petržalke",
    description:
      "Kompletné sťahovanie pre domácnosti v Petržalke. Sťahujeme byty, nábytok a ťažké predmety v celej mestskej časti.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov v Petržalke",
        description:
          "Kompletné sťahovanie bytov vrátane panelákov. Bezpečne prevezieme váš nábytok a osobné veci na nové miesto kdekoľvek v Petržalke aj mimo nej.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií a firiem",
        description:
          "Sťahujeme firmy a kancelárie z Petržalky aj do Petržalky. Minimalizujeme prestoje vašej firmy sťahovaním počas víkendov a sviatkov.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Petržalke. Šetríme váš čas a energiu, postaráme sa o každý detail.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Vynáška bez výťahu",
        description:
          "Špecializujeme sa na vynášku nábytku po schodoch bez výťahu — bežná situácia v petržalských panelákoch. Máme skúsenosti aj s najvyššími poschodiami.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie priestorov",
        description:
          "Kompletné vypratávanie bytov a pivníc v Petržalke. Vhodné pri predaji, rekonštrukcii alebo dedičskom konaní.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie v rámci Bratislavy",
        description:
          "Sťahujeme z Petržalky do akejkoľvek inej mestskej časti Bratislavy aj do okolia. Rýchlo, bezpečne, za férovú cenu.",
        link: "/stahovanie-bratislava",
      },
    ],
  };

  const mapData = {
    title: "Sťahujeme po celej Petržalke a okolí",
    description:
      "Pokrývame všetky časti Petržalky vrátane Háje, Dvory, Ovsište, Kopčany aj priľahlé mestské časti Bratislavy.",
    locations: [
      "Petržalka — Háje",
      "Petržalka — Dvory",
      "Petržalka — Ovsište",
      "Petržalka — Kopčany",
      "Petržalka — Lúky",
      "Petržalka — Šrobárovo",
      "Jarovce",
      "Rusovce",
      "Čunovo",
      "Staré Mesto",
      "Ružinov",
    ],
    additionalText: "Sťahujeme aj do okolitých obcí — Šamorín, Senec a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — sťahovanie v Petržalke",
    items: [
      {
        question: "Sťahujete aj z vyšších poschodí panelákov bez výťahu?",
        answer:
          "Áno, toto je naša každodenná práca. Máme skúsenosti s vynáškou nábytku z ľubovoľného poschodia bez výťahu. Za každé poschodie bez výťahu účtujeme 15€, čo je transparentný a férový poplatok.",
      },
      {
        question: "Ako dlho trvá sťahovanie jednoizbového bytu v Petržalke?",
        answer:
          "Bežné jednoizbové sťahovanie v Petržalke trvá 2–4 hodiny vrátane nakládky, prepravy a vykládky. Závisí od poschodia, množstva vecí a vzdialenosti nového bytu.",
      },
      {
        question: "Aká je cena sťahovania v Petržalke?",
        answer:
          "Sťahovanie v Petržalke účtujeme od 25€/hod na pracovníka. Najobľúbenejšia možnosť sú 3 pracovníci za 67€/hod. Pre presný odhad vyplňte formulár alebo nám zavolajte — ponuka je zadarmo.",
      },
      {
        question: "Kde parkujete sťahovacie auto v Petržalke?",
        answer:
          "Parkujeme priamo pri vchodovom vstupe do bytového domu. Petržalka má väčšinou dostatok priestoru na parkovanie dodávky. V prípade potreby vieme požiadať o dočasné parkovanie.",
      },
      {
        question: "Sťahujete aj mimo Petržalky?",
        answer:
          "Áno, sťahujeme z Petržalky do celej Bratislavy aj mimo nej — Senec, Šamorín, Pezinok a ďalšie okolité obce. Cestovné mimo mesta je 0,70€/km.",
      },
      {
        question: "Poskytujete aj vypratávanie pivníc v Petržalke?",
        answer:
          "Áno, vypratávame pivnice, kobky aj celé byty v Petržalke. Klasická pivnica (kobka) od 60€, väčšia pivnica podľa rozsahu. Odvoz odpadu je súčasťou služby.",
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
