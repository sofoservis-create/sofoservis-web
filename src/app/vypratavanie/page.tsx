import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

const vypratavanieLocations = [
  { name: "Bratislava", href: "/vypratavanie-bratislava" },
  { name: "Nitra", href: "/vypratavanie-nitra" },
  { name: "Trnava", href: "/vypratavanie-trnava" },
  { name: "Pezinok", href: "/vypratavanie-pezinok" },
  { name: "Galanta", href: "/vypratavanie-galanta" },
  { name: "Levice", href: "/vypratavanie-levice" },
  { name: "Piešťany", href: "/vypratavanie-piestany" },
  { name: "Senec", href: "/vypratavanie-senec" },
  { name: "Senica", href: "/vypratavanie-senica" },
  { name: "Stupava", href: "/vypratavanie-stupava" },
  { name: "Komárno", href: "/vypratavanie-komarno" },
  { name: "Malacky", href: "/vypratavanie-malacky" },
  { name: "Šamorín", href: "/vypratavanie-samorin" },
  { name: "Hlohovec", href: "/vypratavanie-hlohovec" },
];

export const metadata = {
  title: "Vypratávanie – profesionálne vypratávacie | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov, domov, kancelárií, pivníc, chalúp, po rekonštrukcii a po pozostalosti od 25€/hod. Obhliadka zadarmo. Rýchlo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie",
      en: "https://www.sofoservis.sk/en/clearance",
      "x-default": "https://www.sofoservis.sk/vypratavanie",
    },
  },
  keywords:
    "vypratavanie, vypratávanie, vypratavanie bytov, vypratavanie domov, vypratavanie kancelarii, vypratavanie pivnic, vypratavanie chalup, vypratavanie po rekonstrukcii, vypratavanie pozostalosti, odvoz stareho nabytku",
  openGraph: {
    title: "Vypratávanie – profesionálne vypratávacie | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, domov, kancelárií, pivníc a chalúp od 25€/hod. Obhliadka zadarmo. Rýchlo, spoľahlivo.",
    url: "https://www.sofoservis.sk/vypratavanie",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Aká je cena za vypratanie bytu alebo domu?",
    answer:
      "Cena závisí od veľkosti priestoru a množstva vecí. Pre jednoizbový byt ceny začínajú od 200€. Hodinová sadzba je od 25€/hod. Poskytujeme nezáväznú cenovú ponuku po bezplatnej obhliadke.",
  },
  {
    question: "Ako dlho trvá vypratanie bytu alebo domu?",
    answer:
      "Štandardný 2-izbový byt zvyčajne vypraceme za 1 deň (4–8 hodín). Väčšie domy alebo byty s množstvom vecí môžu vyžadovať 2–3 dni.",
  },
  {
    question: "Zabezpečujete aj vypratávanie po zosnulých?",
    answer:
      "Áno, špecializujeme sa aj na citlivé a diskrétne vypratávanie nehnuteľností po zosnulých, s maximálnou empatiou a rešpektom.",
  },
];

export default function VypratavaniePage() {
  const heroData = {
    title: "Vypratávanie",
    description:
      "Komplexné vypratávacie služby pre byty, domy, kancelárie, pivnice, chalupy aj pozemky. Diskrétne, ekologické a za férové ceny – náš tím sa postará o všetko od triedenia vecí po odvoz a likvidáciu odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Všetky vypratávacie služby na jednom mieste",
    description:
      "Vypratávame akýkoľvek priestor – od jednoduchého odvozu starého nábytku až po komplexné vypratanie celého domu po pozostalosti.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie bytov a domov",
        description:
          "Kompletné vypratanie bytu alebo domu vrátane všetkých miestností, pivnice a podkrovia. Postaráme sa o triedenie, odvoz a ekologickú likvidáciu.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Vypratávanie kancelárií",
        description:
          "Efektívne vypratanie kancelárskych priestorov, firemných skladov a nebytových priestorov. Vypratáme rýchlo aj mimo pracovného času.",
        link: "/vypratavanie-kancelarii",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description:
          "Špecializujeme sa na vypratávanie pivničných priestorov, garáží a skladov. Odstránime všetky nepotrebné veci a zabezpečíme čistotu.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/garden_icon.svg",
        title: "Vypratávanie chalúp",
        description:
          "Vypratanie chalúp, záhradných domčekov a víkendových usadlostí. Postaráme sa o kompletné vyprázdnenie priestoru vrátane záhrady.",
        link: "/vypratavanie-chalupy",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Vypratávanie po rekonštrukcii",
        description:
          "Odvoz stavebného odpadu, sutí a obalových materiálov po rekonštrukcii. Rýchle upratanie priestoru pre dokončovacie práce.",
        link: "/vypratavanie-po-rekonstrukcii",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Vypratávanie po pozostalosti",
        description:
          "Diskrétne a empatické vypratávanie nehnuteľností po zosnulých príbuzných. Pomôžeme roztriediť osobné veci s maximálnym rešpektom.",
        link: "/vypratavanie-pozostalosti",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz starého nábytku",
        description:
          "Rýchly odvoz starého nábytku, spotrebičov a nepotrebných vecí. Zabezpečujeme ekologickú likvidáciu alebo darovanie charitám.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Čistenie pozemkov a nehnuteľností",
        description:
          "Vyčistíme a vypratáme pozemky od nepotrebných vecí, stavebného odpadu a rastlinných zvyškov. Pripravíme pozemok na ďalšie využitie.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
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
          desktopMascotAnchor="frame-bottom"
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotBehindForm
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
        <GoogleReviews />
      </div>

      <HowItWorks />

      <ServicePricing filter={["vypratavanie", "stahovanie", "buracie-prace"]} />

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

      <div className="md:mb-[-100px]">
        <LocationMap
          title="Vypratávanie po celom Slovensku"
          description="Naše vypratávacie služby poskytujeme v nasledujúcich mestách a regiónoch."
          locations={vypratavanieLocations}
          additionalText="Poskytujeme profesionálne vypratávacie služby s ekologickou likvidáciou odpadu."
          supporText="Vypratávame vo všetkých regiónoch:"
        />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      <div>
        <FAQ
          title="Často kladené otázky o vypratávaní"
          items={[
            {
              question: "Aká je cena za vypratanie bytu alebo domu?",
              answer:
                "Cena závisí od viacerých faktorov: veľkosť priestoru, množstvo vecí, dostupnosť (poschodie, výťah) a typ odpadu. Pre jednoizbový byt ceny začínajú od 200€, pre 2-izbový byt 350–500€, pre rodinný dom 600–1500€. Poskytujeme bezplatnú obhliadku a jasnú cenovú ponuku vopred.",
            },
            {
              question: "Ako dlho trvá vypratanie bytu?",
              answer:
                "Štandardný 2-izbový byt zvyčajne vypraceme za 1 deň (4–8 hodín). Väčšie domy alebo byty s množstvom vecí môžu vyžadovať 2–3 dni. Pri obhliadke vám poskytneme presnejší časový odhad.",
            },
            {
              question: "Zabezpečujete aj vypratávanie po zosnulých?",
              answer:
                "Áno, špecializujeme sa na citlivé a diskrétne vypratávanie nehnuteľností po zosnulých príbuzných. Pristupujeme k tejto situácii s maximálnou empatiou, diskréciou a rešpektom. Pomôžeme roztriediť osobné veci, dokumenty a cennosti.",
            },
            {
              question: "Čo sa stane s vecami po vypratávaní?",
              answer:
                "Funkčný nábytok a spotrebiče darujeme charitám alebo sociálne slabším rodinám. Použiteľné oblečenie odovzdávame do zbierok. Odpad separujeme a odvážame na zberné dvory. Snažíme sa minimalizovať množstvo vecí, ktoré skončia na skládke.",
            },
            {
              question: "Vypratávate aj po rekonštrukcii?",
              answer:
                "Áno, zabezpečujeme odvoz stavebného odpadu, sutí, obalových materiálov a všetkého, čo zostane po rekonštrukcii. Rýchlo vyčistíme priestor pre dokončovacie práce.",
            },
          ]}
          expandableGroup={{
            label: "Všetko o vypratávaní",
            panels: [
              {
                title: "Kedy potrebujete profesionálne vypratávanie?",
                content: "Vypratávanie bytu alebo domu je proces systematického vyčistenia priestoru od nábytku, spotrebičov, osobných vecí a odpadu. Potrebujete ho pri: sťahovaní z prenajatého bytu, predaji nehnuteľnosti, vypratávaní po zosnulom príbuznom, čistení po rekonštrukcii, vypratávaní pivnice alebo garáže alebo pri príprave priestoru na prenájom.\n\nProfesionálna firma zabezpečí nielen odvoz vecí, ale aj triedenie, ekologickú likvidáciu odpadu a prípadne aj záverečné čistenie priestoru.",
              },
              {
                title: "Ako prebieha vypratávanie — proces krok za krokom",
                content: "Celý proces začína bezplatnou obhliadkou, pri ktorej odhadneme rozsah prác a pripravíme cenovú ponuku. Po odsúhlasení termínu príde náš tím vybavený všetkým potrebným.\n\nNajprv vytriedime veci podľa vašich pokynov — čo zachovať, čo darovať a čo zlikvidovať. Potom systematicky vyprázdnime priestor a odvezieme odpad na príslušné zberné miesta. Na záver môžeme vykonať aj základné upratanie.",
              },
              {
                title: "Cena vypratávania — čo ovplyvňuje sumu?",
                content: "Cena závisí od: veľkosti priestoru, množstva a typu vecí, prístupnosti (poschodie, výťah), druhu odpadu a požiadaviek na doplnkové služby.\n\nOrientačné ceny: jednoizbový byt od 200€, dvojizbový byt 350–500€, rodinný dom 600–1500€. Cena zahŕňa prácu, odvoz a ekologickú likvidáciu bežného domového odpadu. Bezplatnú cenovú ponuku vám pripravíme po obhliadke.",
              },
              {
                title: "Ekologická likvidácia odpadu po vypratávaní",
                content: "Snažíme sa minimalizovať množstvo odpadu, ktorý skončí na skládke. Funkčný nábytok a spotrebiče darujeme charitám. Elektroniku odovzdávame na autorizované zberné miesta. Odpad separujeme a odvážame na zberné dvory podľa druhu materiálu.\n\nNebezpečný odpad (farby, chemikálie, batérie) spracovávame podľa platnej legislatívy.",
              },
            ],
          }}
        />
      </div>

      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie?"
          description="Zbavte sa starostí s vypratávaním. Náš skúsený tím sa postará o všetko – od triedenia vecí až po finálne vyčistenie priestoru. Kontaktujte nás ešte dnes pre bezplatnú konzultáciu."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>

      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Sťahovanie bytov a domov", description: "Presťahujeme vás spoľahlivo a rýchlo.", href: "/stahovanie-bytov-domov", icon: "/icons/truck_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Odvoz a ekologická likvidácia stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy a úpravy po vypratávaní.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
          { title: "Montáž nábytku", description: "Skladanie nového nábytku do vyprataného priestoru.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
