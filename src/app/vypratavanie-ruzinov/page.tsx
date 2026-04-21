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
  title: "Vypratávanie Ružinov - byty, pivnice, garáže | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov, pivníc a garáží v Ružinove od 25€/hod. Jednoizbový byt od 200€. Odvoz odpadu zabezpečíme. Obhliadka zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-ruzinov",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-ruzinov",
      en: "https://www.sofoservis.sk/en/home-clearance-ruzinov",
      "x-default": "https://www.sofoservis.sk/vypratavanie-ruzinov",
    },
  },
  keywords:
    "vypratavanie ruzinov, vypratanie bytu ruzinov, vypratavanie pivnic ruzinov, odvoz nabytku ruzinov, vypratavanie garaz ruzinov",
  openGraph: {
    title: "Vypratávanie Ružinov - byty, pivnice, garáže | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, pivníc a garáží v Ružinove od 25€/hod. Jednoizbový byt od 200€. Odvoz odpadu zabezpečíme.",
    url: "https://www.sofoservis.sk/vypratavanie-ruzinov",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function VypratavanieRuzinovPage() {
  const heroData = {
    title: "Vypratávanie Ružinov: Rýchlo a spoľahlivo",
    description:
      "Vypratávame byty, pivnice a garáže v celom Ružinove od 25€/hod. Odvoz a likvidácia starého nábytku, spotrebičov aj odpadu — všetko v jednej službe.",
    formTitle: "Vypratávanie v Ružinove — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné vypratávacie služby v Ružinove",
    description:
      "Postaráme sa o kompletné vypratávanie vašich priestorov v Ružinove — od garáže pri Štrkoveckom jazere až po byty na Trnávke.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie bytov v Ružinove",
        description:
          "Kompletné vypratanie bytu v Ružinove — Trnávka, Nivy, Pošeň, Prievoz. Jednoizbový byt od 200€, dvojizbový od 300€. Odvoz všetkého nepotrebného zabezpečíme.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description:
          "Vypratávame pivnice, garážové boxy a kobky v Ružinove. Klasická pivnica od 60€. Naložíme a odvezieme všetko — nábytok, spotrebiče, staré veci.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Odvoz starého nábytku a spotrebičov",
        description:
          "Ekologický odvoz a likvidácia starých sedačiek, skríň, práčok a elektrospotrebičov. Správne triediame a likvidujeme odpad podľa zákona.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Po rekonštrukcii bytu v Ružinove rýchlo odvezieme suť, staré podlahy a stavebný materiál. Pristavíme kontajner alebo odvezieme priamo dodávkou.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/cash_icon.svg",
        title: "Transparentné ceny bez prekvapení",
        description:
          "Cenu dohodneme vopred po obhliadke alebo na základe fotografií. Žiadne skryté poplatky. Jednoizbový byt od 200€, pivnica od 60€.",
        link: "/cennik",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie po vypratávaní",
        description:
          "Kombinujeme vypratávanie so sťahovaním — zvládneme obe služby v jednej návšteve. Ušetríte čas aj peniaze. Sťahujeme kdekoľvek po Bratislave.",
        link: "/stahovanie-ruzinov",
      },
    ],
  };

  const mapData = {
    title: "Vypratávame po celom Ružinove a okolí",
    description:
      "Pokrývame všetky časti Ružinova — Trnávka, Nivy, Pošeň, Prievoz, Ružinov-centrum aj priľahlé mestské časti.",
    locations: [
      "Ružinov — Trnávka",
      "Ružinov — Nivy",
      "Ružinov — Pošeň",
      "Ružinov — Prievoz",
      "Ružinov — Štrkovecké jazero",
      "Ružinov — centrum",
      "Vrakuňa",
      "Podunajské Biskupice",
      "Petržalka",
      "Staré Mesto",
    ],
    additionalText: "Vypratávame aj v okolitých obciach — Senec, Bernolákovo a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — vypratávanie v Ružinove",
    items: [
      {
        question: "Koľko stojí vypratávanie bytu v Ružinove?",
        answer:
          "Jednoizbový byt v Ružinove vypratáme od 200€, dvojizbový od 300€. Presná cena závisí od množstva vecí a poschodia. Obhliadka a cenová ponuka sú zadarmo.",
      },
      {
        question: "Koľko stojí vypratávanie pivnice alebo garáže v Ružinove?",
        answer:
          "Bežná pivnica alebo kobka od 60€. Garážové miesto od 80€. Väčší sklad podľa rozsahu. Cena zahŕňa naloženie a odvoz všetkého obsahu.",
      },
      {
        question: "Odvezete aj starý nábytok a elektrospotrebiče?",
        answer:
          "Áno, odvoz starého nábytku, sedačiek, práčok, chladničiek a iných spotrebičov je súčasťou našej služby. Likvidujeme ich ekologicky a v súlade so zákonom o odpadoch.",
      },
      {
        question: "Vypratávate aj nebytové priestory a sklady v Ružinove?",
        answer:
          "Áno, vypratávame nielen byty a domy, ale aj sklady, kancelárie, prevádzky a iné nebytové priestory v Ružinove. Cenu dohodnem po obhliadke priestoru.",
      },
      {
        question: "Ako rýchlo môžete prísť vypratať v Ružinove?",
        answer:
          "Väčšinou sme schopní prísť do 2–5 pracovných dní. Pri urgentných prípadoch sa snažíme prísť skôr. Kontaktujte nás a dohodnem termín podľa vašich potrieb.",
      },
      {
        question: "Môžem objednať vypratávanie aj so sťahovaním?",
        answer:
          "Samozrejme. Bežne kombinujeme vypratávanie bytu so sťahovaním na nové miesto — všetko zvládneme v jednej návšteve. Dohodnem spoločnú výhodnú cenu.",
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
          desktopMascotScaleMultiplier={1.03}
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
        services={[{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie Ružinov","description":"Sťahovanie v Ružinove od 25€/hod.","href":"/stahovanie-ruzinov","icon":"/icons/truck_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
