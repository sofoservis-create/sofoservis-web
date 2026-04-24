import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie chalupy a záhradného domčeka | Sofoservis",
  description:
    "Profesionálne vypratávanie chalúp, chát a záhradných domčekov. Odvoz starého nábytku a náradia. Čistenie pozemku. Obhliadka zadarmo.",
  keywords:
    "vypratavanie chalupy, vypratanie chaty, vypratavanie zahradneho domceka, vypratavanie chata, likvidacia chaty, odvoz nabytku z chalupy, vypratanie chalupy",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-chalupy",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-chalupy",
      en: "https://www.sofoservis.sk/en/cottage-clearance",
      "x-default": "https://www.sofoservis.sk/vypratavanie-chalupy",
    },
  },
  openGraph: {
    title: "Vypratávanie chalupy, chaty a záhradného domčeka | Sofoservis",
    description:
      "Profesionálne vypratávanie chalúp a chát. Odvoz starého nábytku, náradia a odpadu. Čistenie pozemku. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie-chalupy",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Čo všetko odvezieme pri vypratávaní chalupy?",
    answer:
      "Odvezieme starý nábytok, záhradné náradie, poľnohospodárske stroje, starý odpad, pneumatiky, elektrospotrebiče a akýkoľvek ďalší odpad, ktorý sa nahromadil v chalupe alebo na pozemku.",
  },
  {
    question: "Vypratávate aj záhradu a okolie chalupy?",
    answer:
      "Áno, okrem interiéru chalupy môžeme vyčistiť aj záhradu, hospodárske budovy, stodoly a okolie objektu od starých vecí a odpadu.",
  },
  {
    question: "Aká je cena za vypratanie chalupy?",
    answer:
      "Cena závisí od veľkosti objektu, množstva obsahu a lokality. Pre menšiu chatu ceny začínajú od 300€. Poskytujeme bezplatnú obhliadku a nezáväznú cenovú ponuku.",
  },
];

export default function VypratavanieChalupyPage() {
  const heroData = {
    title: "Vypratávanie chalupy, chaty a záhradného domčeka",
    description:
      "Potrebujete vypratať starú chalúpu alebo chatku? Postaráme sa o odvoz starého nábytku, náradia, hospodárskeho zariadenia a nahromadeného odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu vypratania chalupy",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Čo zahŕňa vypratávanie chalupy",
    description:
      "Kompletné riešenie pre vypratanie chalupy, chaty alebo záhradného domčeka.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie interiéru",
        description:
          "Odvezieme všetok starý nábytok, textílie, domáce potreby a iné veci z interiéru chalupy. Triedime podľa druhu materiálu.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Čistenie záhrady a pozemku",
        description:
          "Vyčistíme záhradu a pozemok od starých vecí, pneumatík, starého náradia a nahromadeného odpadu.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Hospodárske budovy a stodoly",
        description:
          "Vypratáme stodoly, kolne, garáže a iné hospodárske budovy od starého zariadenia, náradia a poľnohospodárskeho odpadu.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Starý nábytok a spotrebiče",
        description:
          "Odvezieme starý nábytok, spotrebiče, televízory a ďalšie zariadenia. Funkčné veci môžeme darovať charitám.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia odpadu",
        description:
          "Odpad separujeme a odvážame na príslušné zberné dvory. Nebezpečný odpad (farby, chemikálie, pneumatiky) likvidujeme podľa predpisov.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Prístup do odľahlých lokalít",
        description:
          "Chalúpy sú často na ťažšie dostupných miestach. Disponujeme vhodnou technikou pre prístup na horské cesty a poľné trasy.",
        link: "/vypratavanie-chalupy",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotFixedHeightPx={756}
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews />
      </div>
      <div>
        <Reviews showHeadline={true} />
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
        <GoogleReviews showReviewsShowcase={false} />
      </div>
      <div>
        <FAQ
          title="Časté otázky o vypratávaní chalúp a chát"
          items={[
            {
              question: "Čo všetko odvezieme pri vypratávaní chalupy?",
              answer:
                "Odvezieme starý nábytok, záhradné a poľnohospodárske náradie, staré elektrospotrebiče, textílie, záhradné dlaždice, pneumatiky a akýkoľvek iný odpad. Triedime odpad podľa druhu — ekologicky zodpovedná likvidácia je pre nás samozrejmosťou.",
            },
            {
              question: "Aká je cena za vypratanie chalupy?",
              answer:
                "Cena závisí od veľkosti chalupy, množstva obsahu a lokality (vzdialenosť a prístupnosť). Pre menšiu chatku ceny začínajú od 300€, pre väčšiu chalúpu od 600€. Poskytujeme bezplatnú obhliadku a nezáväznú cenovú ponuku.",
            },
            {
              question: "Vypratávate aj záhradu a okolie chalupy?",
              answer:
                "Áno, okrem interiéru chalupy môžeme vyčistiť záhradu, stodoly, kolne a okolie objektu od starých vecí a odpadu. Komplexné riešenie na jednom mieste.",
            },
            {
              question: "Prídete aj do vzdialenejších lokalít?",
              answer:
                "Áno, chalúpy a chaty sú často na ťažšie dostupných miestach. Disponujeme vhodnou technikou a vozidlami pre prístup na poľné cesty. Doprava sa kalkuluje individuálne podľa vzdialenosti.",
            },
            {
              question: "Môžete chalúpu vypratať aj vtedy, keď tam nebudem?",
              answer:
                "Áno, ak nám zveríte kľúče alebo zabezpečíte prístup, vieme chalúpu vypratať aj vo vašej neprítomnosti. O priebehu vás budeme priebežne informovať a všetko si vopred podrobne dohodneme.",
            },
          ]}
          expandableGroup={{
            label: "Viac o vypratávaní chalúp",
            panels: [
              {
                title: "Kedy je vhodné vypratať chalúpu?",
                content: "Chalúpu je vhodné vypratať pred predajom, prenájmom, rekonštrukciou alebo keď sa nahromadil odpad, ktorý sa nemá kde odložiť. Mnohí klienti sa nás obrátia po zdedení starej chalupy, ktorú je potrebné pripraviť na ďalšie využitie.\n\nVypratanie chalupy môže výrazne zvýšiť jej hodnotu pred predajom a zjednodušiť kolaudáciu po rekonštrukcii.",
              },
              {
                title: "Ako naložíme so starými poľnohospodárskymi strojmi a nástrojmi?",
                content: "Starý kovový odpad (stroje, náradie, pluhy) odovzdávame na výkupne kovového odpadu alebo špecializované zberné dvory. Ak sú predmety v použiteľnom stave, ponúkneme ich na darovanie alebo predaj.\n\nNebezpečný odpad (oleje, pohonné hmoty, pesticídy) spracovávame v súlade s platnou legislatívou.",
              },
            ],
          }}
        />
      </div>
      <div>
        <CTA
          title="Potrebujete vypratať chalúpu alebo chatu?"
          description="Postaráme sa o kompletné vypratanie — interiér, záhrada, stodola. Aj v odľahlých lokalitách, aj vo vašej neprítomnosti."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ServicePricing filter={["vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Kompletné vypratanie bytu alebo domu.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Čistenie pozemkov", description: "Čistenie pozemkov a záhrad od odpadu.", href: "/cistenie-vypratavanie-pozemkov-nehnutelnosti", icon: "/icons/landscape_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Vypratávanie pozostalosti", description: "Diskrétne vypratanie po zosnulom.", href: "/vypratavanie-pozostalosti", icon: "/icons/house_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
