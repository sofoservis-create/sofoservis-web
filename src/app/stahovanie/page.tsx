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

const stahovanieLocations = [
  { name: "Bratislava", href: "/stahovanie-bratislava" },
  { name: "Nitra", href: "/stahovanie-nitra" },
  { name: "Trnava", href: "/stahovanie-trnava" },
  { name: "Pezinok", href: "/stahovanie-pezinok" },
  { name: "Galanta", href: "/stahovanie-galanta" },
  { name: "Levice", href: "/stahovanie-levice" },
  { name: "Piešťany", href: "/stahovanie-piestany" },
  { name: "Senec", href: "/stahovanie-senec" },
  { name: "Senica", href: "/stahovanie-senica" },
  { name: "Stupava", href: "/stahovanie-stupava" },
  { name: "Komárno", href: "/stahovanie-komarno" },
  { name: "Malacky", href: "/stahovanie-malacky" },
  { name: "Šamorín", href: "/stahovanie-samorin" },
  { name: "Hlohovec", href: "/stahovanie-hlohovec" },
];

export const metadata = {
  title: "Sťahovanie - profesionálne sťahovacie služby | Sofoservis",
  description:
    "Profesionálne sťahovanie bytov, domov, kancelárií a medzinárodné sťahovanie od 25€/hod. Obhliadka zadarmo. Rýchlo, spoľahlivo, spokojnosť garantovaná.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie",
      en: "https://www.sofoservis.sk/en/moving",
      "x-default": "https://www.sofoservis.sk/stahovanie",
    },
  },
  keywords:
    "stahovanie, sťahovanie, stahovanie bytov, stahovanie domov, stahovanie kancelarii, medzinarodne stahovanie, stahovanie klavira, stahovanie trezorov, stahovanie strojov, stahovanie tazkych bremien",
  openGraph: {
    title: "Sťahovanie - profesionálne sťahovacie služby | Sofoservis",
    description:
      "Profesionálne sťahovanie bytov, domov, kancelárií a medzinárodné sťahovanie od 25€/hod. Obhliadka zadarmo. Rýchlo, spoľahlivo.",
    url: "https://www.sofoservis.sk/stahovanie",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Koľko stojí sťahovanie?",
    answer:
      "Hodinová sadzba začína od 25€/hod pre 2 pracovníkov. Cena závisí od vzdialenosti, poschodia, množstva vecí a požiadaviek na demontáž nábytku. Pre 2-izbový byt v Bratislave je bežná cena 200–350€.",
  },
  {
    question: "Robíte sťahovanie aj cez víkendy?",
    answer:
      "Áno, naše služby poskytujeme 6 dní v týždni okrem nedele bez príplatku.",
  },
  {
    question: "Sťahujete aj do zahraničia?",
    answer:
      "Áno, zabezpečujeme medzinárodné sťahovanie domácností aj firiem do celej Európy s kompletným vybavením formalít.",
  },
];

export default function StahovaniePage() {
  const heroData = {
    title: "Sťahovanie",
    description:
      "Profesionálne sťahovacie služby pre domácnosti aj firmy. Sťahujeme byty, domy, kancelárie, klavíry, trezory, stroje a ťažké bremená – rýchlo a bezpečne.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú cenovú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Všetky sťahovacie služby na jednom mieste",
    description:
      "Komplexný servis pre každý typ sťahovania – od malého bytu po medzinárodný presun celej domácnosti.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov a domov",
        description:
          "Sťahujeme byty a rodinné domy po celom Slovensku. Postaráme sa o balenie, demontáž nábytku aj vyloženie na novom mieste.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií a firiem",
        description:
          "Firemné sťahovanie počas noci alebo víkendu – minimalizujeme prestoje a zabezpečíme plynulý presun celej kancelárie.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Medzinárodné sťahovanie",
        description:
          "Sťahovanie domácností do zahraničia aj zo zahraničia. Komplexné riešenie s vybavením formalít a bezpečnou medzinárodnou prepravou.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Sťahovanie ťažkých bremien",
        description:
          "Profesionálna manipulácia s ťažkými a nadrozmerými predmetmi. Používame špecializované vybavenie pre bezpečný presun.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/sofa_icon.svg",
        title: "Sťahovanie klavíra a pianína",
        description:
          "Špeciálna technika a skúsení pracovníci pre bezpečné sťahovanie klavírov a pianín bez rizika poškodenia nástroja.",
        link: "/stahovanie-klavira",
      },
      {
        image: "/icons/safe_icon.svg",
        title: "Sťahovanie trezorov",
        description:
          "Bezpečný presun trezorov a sejfov akejkoľvek veľkosti. Disponujeme potrebnou technikou aj skúsenosťami.",
        link: "/stahovanie-trezorov",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Sťahovanie strojov a zariadení",
        description:
          "Presun priemyselných strojov, výrobných zariadení a techniky. Komplexné riešenie vrátane odbornej manipulácie.",
        link: "/stahovanie-strojov-zariadeni",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Príprava nábytku na sťahovanie",
        description:
          "Profesionálna demontáž nábytku pred sťahovaním a opätovná montáž v novom domove. Rýchlo a bez poškodenia.",
        link: "/stahovanie-preprava-nabytku",
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
          mobileMascotOffsetY={-32}
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

      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />

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
          title="Sťahovanie po celom Slovensku"
          description="Naše sťahovacie služby poskytujeme v nasledujúcich mestách a regiónoch."
          locations={stahovanieLocations}
          additionalText="Poskytujeme profesionálne sťahovacie služby s plnou zodpovednosťou za váš majetok."
          supporText="Sťahujeme vo všetkých regiónoch:"
        />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      <div>
        <FAQ
          title="Často kladené otázky o sťahovaní"
          items={[
            {
              question: "Koľko stojí sťahovanie bytu alebo domu?",
              answer:
                "Hodinová sadzba začína od 25€/hod pre 2 pracovníkov. Pre 2-izbový byt v Bratislave s výťahom je bežná cena 200–350€, pre 3-4-izbový byt 350–600€. Rodinné domy sa cenia individuálne. Pre presný odhad pripravíme bezplatnú cenovú ponuku.",
            },
            {
              question: "Ako dlho trvá sťahovanie?",
              answer:
                "Záleží od veľkosti a objemu vecí. Sťahovanie 2-izbového bytu zvyčajne trvá 3–5 hodín, 3-izbový byt 4–6 hodín. Pri objednávke dostanete presnejší časový odhad.",
            },
            {
              question: "Robíte sťahovanie aj cez víkendy?",
              answer:
                "Áno, naše služby poskytujeme 6 dní v týždni okrem nedele bez príplatku.",
            },
            {
              question: "Zabezpečujete aj balenie vecí?",
              answer:
                "Áno, na požiadanie dodáme všetky potrebné obalové materiály ako kartónové krabice, bublinkové fólie, ochranné deky a sťahovacie pásky. Môžeme zabaliť aj veci samotné.",
            },
            {
              question: "Sťahujete aj do zahraničia?",
              answer:
                "Áno, zabezpečujeme medzinárodné sťahovanie domácností aj firiem do celej Európy. Postaráme sa o komplexné vybavenie vrátane potrebných formalít.",
            },
          ]}
          expandableGroup={{
            label: "Všetko o sťahovaní",
            panels: [
              {
                title: "Aké typy sťahovania ponúkame?",
                content: "Naše sťahovacie služby pokrývajú každú situáciu: sťahovanie bytov a domov pre domácnosti, sťahovanie kancelárií a firiem, medzinárodné sťahovanie do celej Európy, ako aj špeciálne sťahovanie ťažkých predmetov — klavírov, trezorov, strojov a priemyselných zariadení.\n\nBez ohľadu na rozsah prác náš tím zabezpečí plynulý a bezpečný presun s minimálnym stresom pre vás.",
              },
              {
                title: "Príprava na sťahovanie — čo urobiť vopred",
                content: "Dobrá príprava je polovica úspechu. Aspoň 2 týždne pred sťahovaním začnite triediť veci — čo si ponecháte, čo darujete a čo zlikvidujete. Osobné veci, oblečenie a knihy môžete zbaliť aj sami — ušetríte tým čas a peniaze.\n\nVätšie kusy nábytku nechajte na nás. Vopred si odmerajte rozmery vchodu a schodísk v novom byte, aby sme vedeli, či sa nábytok zmestí.",
              },
              {
                title: "Čo ovplyvňuje cenu sťahovania?",
                content: "Na celkovú cenu vplývajú: vzdialenosť medzi starým a novým miestom, poschodie a existencia výťahu, celkový objem vecí, požiadavky na demontáž a montáž nábytku a potreba baliaceho materiálu.\n\nPre medzinárodné sťahovanie cena závisí aj od cieľovej krajiny a objemu zásielky. Vždy pripravíme jasnú cenovú ponuku vopred bez skrytých poplatkov.",
              },
              {
                title: "Poistenie a zodpovednosť za majetok",
                content: "Vaša spokojnosť a bezpečnosť vášho majetku sú naše priority. Pracujeme s profesionálnym baliacim materiálom — ochrannými dekami, bublinkovou fóliou, pevnými krabicami a zaväzovacími popruhmi.\n\nPred sťahovaním odporúčame odfotiť cennejšie predmety. V prípade akéhokoľvek poškodenia škody riešime okamžite a korektne.",
              },
            ],
          }}
        />
      </div>

      <div>
        <CTA />
      </div>

      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Kompletné vypratanie vrátane odvozu odpadu.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Montáž nábytku", description: "Demontáž pred a montáž po sťahovaní.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
          { title: "Sťahovanie v Bratislave", description: "Špeciálna stránka pre sťahovanie po celej Bratislave.", href: "/stahovanie-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy a práce v domácnosti.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
