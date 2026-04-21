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
  title: "Vypratávanie Petržalka - byty, pivnice, garáže | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov, pivníc a garáží v Petržalke od 25€/hod. Jednoizbový byt od 200€. Odvoz odpadu zabezpečíme. Obhliadka zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-petrzalka",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-petrzalka",
      en: "https://www.sofoservis.sk/en/home-clearance-petrzalka",
      "x-default": "https://www.sofoservis.sk/vypratavanie-petrzalka",
    },
  },
  keywords:
    "vypratavanie petrzalka, vypratanie bytu petrzalka, vypratavanie pivnic petrzalka, odvoz nabytku petrzalka, vypratavanie garaz petrzalka",
  openGraph: {
    title: "Vypratávanie Petržalka - byty, pivnice, garáže | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, pivníc a garáží v Petržalke od 25€/hod. Jednoizbový byt od 200€. Odvoz odpadu zabezpečíme.",
    url: "https://www.sofoservis.sk/vypratavanie-petrzalka",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function VypratavaniePetrzalkaPage() {
  const heroData = {
    title: "Vypratávanie Petržalka: Rýchlo a spoľahlivo",
    description:
      "Vypratávame byty, pivnice, kobky a garáže v celej Petržalke od 25€/hod. Odvoz a likvidácia starého nábytku, spotrebičov aj odpadu.",
    formTitle: "Vypratávanie v Petržalke — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné vypratávacie služby v Petržalke",
    description:
      "Postaráme sa o kompletné vypratávanie vašich priestorov v Petržalke — od kobky až po celý byt.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie bytov v Petržalke",
        description:
          "Kompletné vypratanie jednoizbového, dvojizbového alebo väčšieho bytu v Petržalke. Jednoizbový byt od 200€, dvojizbový od 300€. Odvoz všetkého nepotrebného zabezpečíme.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie pivníc a kobiek",
        description:
          "Špecializujeme sa na vypratávanie pivníc a kobiek v petržalských panelákoch. Klasická kobka od 60€. Naložíme a odvezieme všetko, čo nepotrebujete.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Odvoz starého nábytku a spotrebičov",
        description:
          "Odvoz a ekologická likvidácia starých sedačiek, skríň, práčok a ďalších spotrebičov. Nezostane po vás nič nepotrebné — všetko odvezieme a správne zlikvidujeme.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Po rekonštrukcii bytu v Petržalke rýchlo odvezieme suť, staré podlahy a stavebný materiál. Pristavíme kontajner alebo odvezieme priamo dodávkou.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Vynáška z vyšších poschodí",
        description:
          "Vypratávame aj byty bez výťahu — bežná situácia v petržalských panelákoch. Máme skúsenosti s vynáškou ťažkého nábytku zo všetkých poschodí. Za každé poschodie bez výťahu 15€.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie po vypratávaní",
        description:
          "Potrebujete po vypratávaní aj presunúť veci na nové miesto? Kombinujeme vypratávanie so sťahovaním v jednej návšteve. Ušetríte čas aj peniaze.",
        link: "/stahovanie-petrzalka",
      },
    ],
  };

  const mapData = {
    title: "Vypratávame po celej Petržalke a okolí",
    description:
      "Pokrývame všetky časti Petržalky vrátane Háje, Dvory, Ovsište, Kopčany, Šrobárovo aj priľahlé mestské časti Bratislavy.",
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
    additionalText: "Vypratávame aj v okolitých obciach — Šamorín, Senec a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — vypratávanie v Petržalke",
    items: [
      {
        question: "Koľko stojí vypratávanie bytu v Petržalke?",
        answer:
          "Jednoizbový byt v Petržalke vypratáme od 200€, dvojizbový od 300€. Cena závisí od množstva vecí a poschodia bez výťahu. Obhliadka a cenová ponuka sú zadarmo.",
      },
      {
        question: "Koľko stojí vypratávanie pivnice (kobky) v Petržalke?",
        answer:
          "Bežná kobka alebo malá pivnica od 60€. Väčšia pivnica alebo sklad od 100€. Cena zahŕňa naloženie a odvoz všetkého obsahu.",
      },
      {
        question: "Odvezete aj starý nábytok a spotrebiče?",
        answer:
          "Áno, odvoz starého nábytku, sedačiek, práčok, chladničiek a iných spotrebičov je súčasťou našej služby. Likvidujeme ich ekologicky a v súlade so zákonom.",
      },
      {
        question: "Vypratávate aj byty bez výťahu v Petržalke?",
        answer:
          "Áno, bežne vypratávame byty na vyšších poschodiach bez výťahu. Za každé poschodie bez výťahu účtujeme 15€ navyše. Máme skúsený tím na schodiškovú vynášku.",
      },
      {
        question: "Ako rýchlo môžete prísť vypratať?",
        answer:
          "Väčšinou sme schopní prísť do 2–5 pracovných dní. V niektorých prípadoch vieme prísť aj skôr. Kontaktujte nás a dohodnem termín podľa vašich potrieb.",
      },
      {
        question: "Môžem objednať vypratávanie aj so sťahovaním?",
        answer:
          "Samozrejme. Často kombinujeme vypratávanie bytu so sťahovaním nábytku na nové miesto — všetko zvládneme v jednej návšteve. Dohodneme sa na spoločnej cene.",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={756}
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
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
      <ServicePricing filter={["vypratavanie", "stahovanie", "buracie-prace"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie Petržalka","description":"Sťahovanie v Petržalke od 25€/hod.","href":"/stahovanie-petrzalka","icon":"/icons/truck_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
