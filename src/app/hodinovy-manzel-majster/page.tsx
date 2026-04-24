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

export const metadata = {
  title: "Hodinový manžel, majster a kutil | Sofoservis",
  description:
    "Profesionálne služby hodinového manžela od 25€/hod. Opravy, skladanie a údržba bytov a domov. Rýchlo, spoľahlivo. Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster",
      languages: {
        sk: "https://www.sofoservis.sk/hodinovy-manzel-majster",
        en: "https://www.sofoservis.sk/en/handyman-services",
        "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster",
      },
  },
  keywords:
    "hodinový manžel, hodinový majster, domáce opravy, údržba bytu, drobné opravy v domácnosti, montáž nábytku, oprava kvapkajúceho kohútika, výmena batérie, drobné stavebné práce, vešanie obrazov, inštalácia svietidiel, hodinový manžel bratislava, hodinový manžel cena",
  openGraph: {
    title: "Hodinový manžel, majster a kutil | Sofoservis",
    description:
      "Profesionálne služby hodinového manžela od 25€/hod. Opravy, skladanie a údržba bytov a domov.",
    url: "https://www.sofoservis.sk/hodinovy-manzel-majster",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const hodinyManzealLocations = [
  { name: "Bratislava", href: "/hodinovy-manzel-majster/bratislava" },
  { name: "Galanta", href: "/hodinovy-manzel-majster/galanta" },
  { name: "Levice", href: "/hodinovy-manzel-majster/levice" },
  { name: "Nitra", href: "/hodinovy-manzel-majster/nitra" },
  { name: "Piešťany", href: "/hodinovy-manzel-majster/piestany" },
  { name: "Šaľa", href: "/hodinovy-manzel-majster/sala" },
  { name: "Trnava", href: "/hodinovy-manzel-majster/trnava" },
];

const faqSchemaItems = [
  {
    question: "Aká je cena hodinového manžela?",
    answer:
      "Cena za služby hodinového manžela začína od 25€/hod. Výsledná cena závisí od rozsahu a zložitosti prác. Pre presný odhad nás kontaktujte.",
  },
  {
    question: "Aké práce hodinový manžel robí?",
    answer:
      "Hodinový manžel sa postará o všetky drobné opravy a práce v domácnosti: montáž nábytku, opravy kohútikov, vešanie obrazov, inštalácia svietidiel, drobné stavebné práce, výmena tesnení a oveľa viac.",
  },
  {
    question: "V ktorých lokalitách poskytujete služby hodinového manžela?",
    answer:
      "Naše služby hodinového manžela poskytujeme primárne v Bratislave a jej okolí do vzdialenosti 30-40 km. Pokrývame všetky mestské časti Bratislavy.",
  },
];

export default function HodinovyManzelMajsterPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Hodinový manžel a majster",
    description:
      "Profesionálne služby hodinového manžela od 20€/hod. Rýchle a spoľahlivé opravy, montáže a údržba vo vašej domácnosti.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby hodinového manžela",
    description:
      "Profesionálne handyman služby pre všetky drobné práce v domácnosti, kancelárii či na pozemku s vlastným náradím a skúsenosťami.",
    features: [
      {
        image: "/icons/wrench_icon.svg", // Perfect for general handyman work
        title: "Drobné opravy a údržba",
        description:
          "Opravy a údržba v domácnosti - výmena batérií, oprava kohútikov, montáž políc, maľovanie, vŕtanie otvorov a ďalšie drobné práce.",
        link: "/hodinovy-manzel-majster",
      },
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž nábytku a zariadenia",
        description:
          "Poskladanie nábytku z IKEA, JYSK a iných značiek. Montáž skríň, postelí, stolov, políc a ďalšieho bytového zariadenia s vlastným náradím.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/electrical_icon.svg", // NEW ICON - For electrical work
        title: "Elektrické práce",
        description:
          "Základné elektrické práce - výmena vypínačov, zásuviek, svetiel, pripojenie lustrov, inštalácia zvoničiek a jednoduchých elektrických zariadení.",
        link: "/hodinovy-manzel-majster",
      },
      {
        image: "/icons/curtain_icon.svg", // For hanging systems
        title: "Montáž garniží a závesov",
        description:
          "Profesionálna montáž garniží, závesných systémov, roliet a žalúzií. Vŕtanie do rôznych typov stien s vhodnými kotviacimi prvkami.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/garden_icon.svg", // NEW ICON - For outdoor work
        title: "Záhradné a vonkajšie práce",
        description:
          "Údržba záhrady, čistenie pozemkov, drobné stavebné práce, montáž plotov, altánkov a ďalšie práce na vonkajších priestoroch.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/paint_icon.svg", // NEW ICON - For painting work
        title: "Maľovanie a dokončovacie práce",
        description:
          "Maľovanie miestností, natieranie dreva, dokončovacie práce po rekonštrukcii, tmely, silikóny a ďalšie úpravy povrchov.",
        link: "/hodinovy-manzel-majster",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
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
          mascotSrc="/images/mascot/montaz-mascot.svg"
          desktopMascotDynamicHeight
          desktopMinHeroTextHeightPx={384}
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
          mascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotOffsetY={-45}
          mobileFormOffsetY={32}
          pillsVariant="hodinovy"
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

      {/* Ako to funguje section */}
      <HowItWorks />

      {/* Service Pricing section */}
      <ServicePricing filter={["hodinovy-manzel", "montaz-nabytku", "montaz-kuchyne"]} />

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

      <div className="md:mb-[-100px]">
        <LocationMap
          title="Hodinový manžel a majster po celom Slovensku"
          description="Naše služby poskytujeme v nasledujúcich mestách a regiónoch."
          locations={hodinyManzealLocations}
          additionalText="Poskytujeme spoľahlivé služby hodinového manžela s profesionálnym prístupom k každej úlohe."
          supporText="Opravujeme a montujeme vo všetkých regiónoch:"
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
          title="Často kladené otázky o službách hodinového manžela"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako sa objednávajú služby hodinového manžela?",
              answer:
                "Objednanie služieb hodinového manžela je jednoduché a môžete si vybrať z niekoľkých možností: 1) Telefonicky na čísle 0952 044 363, kde s vami okamžite prekonzultujeme váš problém a dohodneme termín. 2) Vyplnením kontaktného formulára na našej webstránke, po ktorom vás budeme kontaktovať najneskôr do 24 hodín. 3) Emailom na montaz@sofoservis.sk s popisom požadovaných prác. Pri objednávke je užitočné uviesť: podrobný popis práce, ktorú potrebujete vykonať; adresu a kontaktné údaje; fotografiu problému alebo priestoru (ak je to možné); preferovaný termín realizácie. Po prijatí objednávky vás kontaktujeme pre potvrdenie termínu a dohodnutie detailov. V urgentných prípadoch sa snažíme zabezpečiť výjazd ešte v ten istý deň alebo nasledujúci pracovný deň.",
            },
            {
              question:
                "V ktorých lokalitách poskytujete služby hodinového manžela?",
              answer:
                "Naše služby hodinového manžela poskytujeme primárne v Bratislave a jej širšom okolí. Konkrétne pokrývame všetky mestské časti Bratislavy: Staré Mesto, Ružinov, Nové Mesto, Rača, Vajnory, Karlova Ves, Dúbravka, Lamač, Devín, Devínska Nová Ves, Záhorská Bystrica, Petržalka, Jarovce, Rusovce, Čunovo, Vrakuňa a Podunajské Biskupice. Okrem toho pôsobíme aj v okolí Bratislavy do vzdialenosti približne 30-40 km, čo zahŕňa mestá a obce ako Senec, Pezinok, Modra, Svätý Jur, Stupava, Malacky, Šamorín a ďalšie. Pri väčších zákazkách alebo pravidelnej spolupráci vieme poskytnúť služby aj vo vzdialenejších lokalitách. V prípade záujmu o služby mimo uvedených lokalít nás kontaktujte a dohodneme individuálne podmienky.",
            },
            {
              question: "Aké náradie a vybavenie si mám pripraviť?",
              answer:
                "Nemusíte si pripravovať žiadne náradie ani vybavenie. Naši hodinoví manželi prichádzajú plne vybavení profesionálnym náradím a základným spotrebným materiálom na všetky bežné typy prác v domácnosti. Disponujeme: elektrickým náradím (vŕtačky, skrutkovače, brúsky, píly); ručným náradím (skrutkovače, kliešte, kladivá, pilníky); meracími prístrojmi; rebríkmi a pracovnými plošinami; špecializovaným náradím pre vodoinštalácie a elektroinštalácie. Ak práca vyžaduje špecifický materiál (náhradné diely, upevňovacie prvky, farby a pod.), môžete ho zabezpečiť sami alebo ho po dohode zabezpečíme my. V prípade, že máte vlastný materiál alebo náhradné diely, ktoré chcete použiť, pripravte ich, prosím, pred príchodom technika, aby práca prebiehala efektívne.",
            },
          ]}
          expandableGroup={{
            label: "Všetko o hodinovom manželovi",
            panels: [
              {
                title: "Čo robí hodinový manžel a prečo sa to oplatí?",
                content: "Hodinový manžel (hodinový majster) je profesionál, ktorý sa postará o všetky drobné opravy, montáže a údržbu vašej domácnosti. Cena začína od 25€/hod, čo je zlomok toho, čo by vás stálo volanie špecialistu na každú drobnú opravu zvlášť.\n\nTipické práce: montáž nábytku z obchodov, vešanie obrazov a poličiek, výmena tesnení a kohútikov, oprava kvapkajúcich kohútikov, inštalácia svietidiel, drobné maľovacie práce, inštalácia kuchynských doplnkov, opredy dverí a zámkov, montáž žalúzií a rolet. Hodinový manžel príde vybavený vlastným náradím — nemusíte si nič pripravovať.",
              },
              {
                title: "Kedy sa oplatí hodinový manžel a kedy špecialista?",
                content: "Hodinový manžel je ideálny pre drobné práce do niekoľkých hodín, kde nie je potrebná odborná certifikácia. Pre väčšie elektroinštalačné práce, rozvody vody alebo stavebné práce odporúčame certifikovaného odborníka.\n\nOplátí sa najmä vtedy, keď máte nazbieraných viac drobných opráv naraz — napríklad vesiete nové skrine, potrebujete opraviť dvere a inštalovať nové svietidlá. Za jednu návštevu vybavíme aj 5-6 drobností, čím ušetríte oproti plateniu za každú opravu zvlášť.",
              },
              {
                title: "Montáž nábytku z IKEA a iných obchodov",
                content: "Montáž nábytku z IKEA, Asko, Jysk alebo iných obchodov je jednou z najpopulárnejších služieb hodinového manžela. Naši technici poznajú systémy montáže všetkých bežných výrobcov a poskladajú nábytok 2-3× rýchlejšie ako priemerný domácich majster.\n\nPri montáži skrine, postele alebo komody zvyčajne trvá práca 1-2 hodiny. Kuchynský stôl so stoličkami alebo rozkladacia pohovka môže trvať 2-3 hodiny. Cena je vždy hodinová — platíte len za skutočne odpracovaný čas.",
              },
              {
                title: "Ako sa pripraviť na návštevu hodinového manžela?",
                content: "Aby práca prebehla čo najefektívnejšie, odporúčame: pripraviť zoznam všetkých prác, ktoré chcete vybaviť, mať k dispozícii manuály alebo návody na montáž (pri nábytku z obchodu), zabezpečiť voľný prístup k miestam, kde sa budú práce vykonávať, a mať pripravený materiál alebo náhradné diely, ak ich máte.\n\nNáš technik príde v dohodnutom čase so základnou sadou profesionálneho náradia. Ak sa ukáže, že potrebuje špeciálne náradie alebo materiál, informuje vás vopred. Účtujeme hodinovo od príchodu do odchodu.",
              },
              {
                title: "Oblasti pôsobenia hodinového manžela v Bratislave",
                content: "Naše služby hodinového manžela pokrývajú celú Bratislavu vrátane všetkých mestských častí: Staré Mesto, Ružinov, Nové Mesto, Rača, Vajnory, Karlova Ves, Dúbravka, Lamač, Devín, Devínska Nová Ves, Petržalka, Vrakuňa a Podunajské Biskupice.\n\nOkrem Bratislavy obsluhujeme aj okolie do vzdialenosti 30-40 km: Senec, Pezinok, Modra, Svätý Jur, Stupava, Malacky, Šamorín a ďalšie. Pre väčšie zákazky mimo týchto lokalít nás kontaktujte — dohodneme individuálne podmienky.",
              },
            ],
          }}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete pomoc hodinového manžela?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
    
      <TrustBadges />
      <ContactFormSection />


            <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Montáž nábytku", description: "Profesionálna montáž a skladanie nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
          { title: "Montáž kuchyne", description: "Montáž kuchynských liniek od 120€/m.", href: "/montaz-kuchyne", icon: "/icons/kitchen_icon.svg" },
          { title: "Vypratávanie bytov", description: "Kompletné vypratanie a odvoz nepotrebných vecí.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
