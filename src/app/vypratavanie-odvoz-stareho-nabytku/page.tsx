import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata = {
  title: "Odvoz, vypratávanie a likvidácia nábytku | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti vypratávania, odvozu a likvidácie starého nábytku ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz starého nábytku, vypratávanie nábytku, likvidácia nábytku, odvoz sedačky, vypratávanie bytu, likvidácia starých vecí, ekologická likvidácia nábytku, odvoz veľkých kusov nábytku",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku",
      languages: {
        sk: "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku",
        en: "https://www.sofoservis.sk/en/furniture-removal",
        "x-default": "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku",
      },
  },
  openGraph: {
      title: "Odvoz, vypratávanie a likvidácia nábytku | Sofoservis",
      description: "Rýchly odvoz a ekologická likvidácia starého nábytku, sedačiek, skríň a spotrebičov. Vypratanie bytu, pivnice alebo garáže. Lacné ceny.",
      url: "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function VypratavaniaOdvozStarehoNabytkuPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Odvoz, vypratávanie a likvidácia starého nábytku",
    description:
      "Komplexné služby pre odvoz a ekologickú likvidáciu starého nábytku. Náš profesionálny tím zabezpečí kompletné vypratanie vašich priestorov.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby vypratávania a likvidácie nábytku",
    description:
      "Profesionálne vypratávanie priestorov s ekologickou likvidáciou starého nábytku a zariadenia. Šetríme váš čas a staráme sa o životné prostredie.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie bytov a domov",
        description:
          "Kompletné vypratanie bytov, domov a nebytových priestorov. Odnos všetkého starého nábytku, spotrebičov a nepotrebných vecí s následným upratovaním.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz starého nábytku",
        description:
          "Profesionálny odvoz starého nábytku priamo z vašej domácnosti. Postaráme sa o bezpečný transport a nakladanie všetkých kusov bez poškodenia priestorov.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia",
        description:
          "Environmentálne zodpovedná likvidácia starého nábytku v súlade s legislatívou. Materiály roztrieďujeme a odovzdávame do autorizovaných zberných dvorov.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/sofa_icon.svg",
        title: "Odvoz sedacích súprav",
        description:
          "Špecializovaný odvoz veľkých kusov nábytku ako sú sedačky, gauče, kresla a rohové súpravy. Máme vybavenie na bezpečnú manipuláciu s objemnými kusmi.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/appliance_icon.svg",
        title: "Likvidácia starých spotrebičov",
        description:
          "Profesionálna likvidácia starých spotrebičov vrátane chladničiek, práčok, televízorov a inej elektroniky podľa environmentálnych predpisov.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Poskytnutie kontajnerov",
        description:
          "Dodanie kontajnerov rôznych veľkostí pre väčšie množstvo odpadu. Ideálne riešenie pri komplexnom vypratávaní alebo rekonštrukcii.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  // Location service areas
  const serviceLocations = [
    "Bratislava",
    "Trnava",
    "Pezinok",
    "Senec",
    "Malacky",
    "Stupava",
    "Šamorín",
    "Modra",
    "Galanta",
    "Nitra",
    "Nové Zámky",
    "Levice",
    "Komárno",
    "Piešťany",
    "Hlohovec",
    "Senica",
    "Skalica",
    "Trenčín",
    "Žilina",
    "Banská Bystrica",
  ];

  const faqItems = [
            {
              question: "Aká je cena za odvoz a likvidáciu starého nábytku?",
              answer:
                "Cena závisí od množstva nábytku, jeho typu, prístupových podmienok a vzdialenosti. Základné sadzby začínajú od 50€ za menšie množstvo nábytku. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po telefóne alebo osobnej obhliadke.",
            },
            {
              question: "Ktoré typy nábytku dokážete odviesť a zlikvidovať?",
              answer:
                "Odvezieme a zlikvidujeme všetky typy nábytku - sedačky, skrine, stoly, stoličky, postele, matrace, koberce, spotrebiče a ďalšie zariadenie domácnosti. Nevieme likvidovať len nebezpečný odpad ako farby, chemikálie alebo azbestové materiály.",
            },
            {
              question: "Potrebujem si vopred pripraviť nábytok na odvoz?",
              answer:
                "Nie je to potrebné. Naši pracovníci si sami vynesú všetok nábytok z bytu alebo domu. Stačí ak nám ukážete, čo má byť odvezené. V prípade potreby nábytok aj rozoberieme pre jednoduchší transport.",
            },
            {
              question: "Ako prebieha ekologická likvidácia nábytku?",
              answer:
                "Nábytok triediame podľa materiálov - drevo, kov, textil, plasty. Recyklovateľné materiály odovzdávame do autorizovaných zberných dvorov, nerecyklovateľné časti likvidujeme v súlade s environmentálnymi predpismi. O celom procese vám na požiadanie poskytneme dokumentáciu.",
            },
            {
              question: "Dokážete odviesť nábytok z vyšších poschodí?",
              answer:
                "Áno, bez problémov vynesieme nábytok z akéhokoľvek poschodia. Máme skúsenosti s úzkymi schodiskami, malými výťahmi a zložitými prístupovými podmienkami. V extrémnych prípadoch môžeme použiť aj techniku spúšťania cez balkón alebo okno.",
            },
            {
              question: "Ponúkate aj kompletné vypratanie nehnuteľnosti?",
              answer:
                "Áno, poskytujeme kompletné vypratanie bytov, domov, pivníc, garáží či nebytových priestorov. Odvezieme všetok nábytok, osobné veci, spotrebiče a na záver priestory aj povysávame. Táto služba je ideálna pri dedičstve, predaji nehnuteľnosti alebo pred rekonštrukciou.",
            },
            ];

  return (
    <main className="bg-white">
      {/* Hero section */}
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

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews showHeadline={true} />
      </div>

      {/* Features section */}
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      {/* Location Map */}
      <div>
        <LocationMap
          title="Poskytujeme služby po celom Slovensku"
          description="Naše služby vypratávania a likvidácie nábytku sú dostupné v týchto lokalitách"
          locations={serviceLocations}
          supporText="Pôsobíme aj mimo Bratislavy:"
          callToActionText="Poskytujeme služby aj vo vašej lokalite, získajte ponuku"
          additionalText="Okrem uvedených miest poskytujeme služby vypratávania a likvidácie nábytku aj v ďalších obciach a mestách po celom Slovensku. Kontaktujte nás pre informácie o dostupnosti v konkrétnej lokalite."
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Často kladené otázky o vypratávaní a likvidácii starého nábytku"
          subtitle="Odpovede na najčastejšie otázky o našich službách vypratávania a likvidácie"
          items={faqItems}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete sa zbaviť starého nábytku?"
          description="Kontaktujte nás a my sa postaráme o kompletný odvoz a ekologickú likvidáciu. Rýchlo, spoľahlivo a za férové ceny."
          buttonText="Získajte cenovú ponuku"
        />
      </div>
    
      <ServicePricing filter={["vypratavanie", "stahovanie", "buracie-prace"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},{"title":"Čistenie a vypratávanie pozemkov","description":"Kompletné čistenie a vypratávanie pozemkov.","href":"/cistenie-vypratavanie-pozemkov-nehnutelnosti","icon":"/icons/landscape_icon.svg"}]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
