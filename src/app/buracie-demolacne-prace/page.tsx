import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Búracie a demolačné práce od profesionálov | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti búracích a demolačných prác ✅ Obhliadka priestoru zadarmo ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-demolacne-prace",
    languages: {
      sk: "https://www.sofoservis.sk/buracie-demolacne-prace",
      en: "https://www.sofoservis.sk/en/demolition-services",
      "x-default": "https://www.sofoservis.sk/buracie-demolacne-prace",
    },
  },
  keywords:
    "buracie prace, búracie prace, rucne buracie prace, buracie práce, rucne buracie prace cena, buracie prace cena, buracie prace cennik, cena buracich prac, cena buracie prace, cena za buracie prace, demolačné práce, demolacne prace",
  openGraph: {
      title: "Búracie a demolačné práce od profesionálov | Sofoservis",
      description: "Komplexné búracie a demolačné práce v Bratislave a okolí. Bouranie priečok, stien a objektov. Obhliadka priestoru zadarmo. Lacné ceny.",
      url: "https://www.sofoservis.sk/buracie-demolacne-prace",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function BuracieDemlacnePracePage() {
  // Custom data for Hero section
  const heroData = {
    title: "Búracie a demolačné práce od profesionálov",
    description:
      "Profesionálne a spoľahlivé služby v oblasti búracích a demolačných prác. Realizujeme búranie a demoláciu bytových jadier, priečok, nosných stien, podláh.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const buracieLocations = [
    { name: "Bratislava", href: "/buracie-demolacne-prace/bratislava" },
    { name: "Nitra", href: "/buracie-demolacne-prace/nitra" },
    { name: "Pezinok", href: "/buracie-demolacne-prace/pezinok" },
    { name: "Trnava", href: "/buracie-demolacne-prace/trnava" },
  ];
  // Custom data for Features section

  const featuresData = {
    title: "Komplexné búracie a demolačné služby",
    description:
      "Ponúkame široké spektrum búracích a demolačných služieb pre interiéry aj exteriéry, od drobných búracích prác až po kompletné demolácie objektov.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg", // For demolition/breaking work
        title: "Búranie bytových jadier a priečok",
        description:
          "Odborné búranie bytových jadier a nenosných priečok pri rekonštrukciách bytov. Pracujeme šetrne s ohľadom na minimalizáciu prachu a hluku, kladieme dôraz na bezpečnosť a čistotu.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/hammer_icon.svg", // For breaking/demolition work
        title: "Búranie nosných stien a konštrukcií",
        description:
          "Bezpečné búranie nosných stien a konštrukcií pod dohľadom statika. Zabezpečíme kompletnú dokumentáciu a potrebné povolenia pre búranie nosných častí budov.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/hazmat_icon.svg", // For floor removal/surface work
        title: "Vybúranie podláh a povrchov",
        description:
          "Presné vybúranie starých podláh, dlažieb, poterov a povrchov. Pripravíme váš priestor na položenie nových podláh alebo realizáciu nových povrchových úprav.",
        link: "/buracie-demolacne-prace",
      },
      {
        image: "/icons/plumbing_icon.svg", // For bathroom/kitchen demolition
        title: "Demolácia kúpeľní a kuchýň",
        description:
          "Komplexná demolácia kúpeľní a kuchýň, vrátane odstránenia obkladov, dlažby, sanity a rozvodov. Priestor pripravíme pre novú modernú kúpeľňu alebo kuchyňu.",
        link: "/buracie-demolacne-prace",
      },
      {
        image: "/icons/house_icon.svg", // For building demolition
        title: "Demolácia budov a objektov",
        description:
          "Profesionálna demolácia celých objektov, vrátane rodinných domov, garáží, hospodárskych budov, starých prístreškov a iných stavieb. Zabezpečíme všetky potrebné povolenia.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/container_icon.svg", // For waste removal/container services
        title: "Odvoz a likvidácia stavebného odpadu",
        description:
          "Ekologická likvidácia a odvoz všetkého stavebného odpadu vzniknutého pri búracích prácach. Zabezpečíme pristavenie kontajnerov a oficiálne doklady o likvidácii odpadu.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  // FAQ Data
  const faqItems = [
    {
      question: "Ako postupujú búracie práce v bytoch?",
      answer:
        "Búracie práce v bytoch vykonávame podľa jasne stanoveného postupu, aby sme zabezpečili bezpečnosť a minimalizovali negatívne vplyvy na susedov. Najprv vykonáme detailnú obhliadku a prípravu projektu. Následne priestor zabezpečíme ochrannou fóliou, odpojíme elektroinštaláciu a rozvody. Búracie práce realizujeme v presne stanovenom poradí podľa statického posudku (najprv nenosné, potom nosné prvky). Využívame moderné techniky a nástroje na minimalizáciu prašnosti a hluku vrátane špeciálnych odhlučnených búracích kladív a odsávačov prachu. Stavenisko pravidelne čistíme a odpad priebežne odvážame. Po dokončení všetkých búracích prác priestor vyčistíme a pripravíme na ďalšiu etapu rekonštrukcie.",
    },
    {
      question: "Koľko stoja búracie práce?",
      answer:
        "Cena búracích prác závisí od viacerých faktorov, ako sú typ búranej konštrukcie, rozsah prác, dostupnosť a lokalita. Pre základnú orientáciu uvádzame približné ceny: búranie priečky z tehál (10-15€/m²), búranie bytového jadra (350-700€), vybúranie otvoru do nosnej steny (400-800€), vybúranie podlahy (10-20€/m²), búranie betónového poteru (15-25€/m²). K týmto cenám je potrebné pripočítať náklady za odvoz a likvidáciu sutiny (cca 70-150€ za kontajner). Konečná cena sa stanovuje na základe obhliadky priestoru a vypracovania podrobnej cenovej ponuky. Pre väčšie demolačné projekty ponúkame individuálne nacenenie na základe rozsahu prác a technickej náročnosti.",
    },
    {
      question: "Je potrebné povolenie na búracie práce v byte?",
      answer:
        "Áno, na väčšinu búracích prác v byte je potrebné získať povolenie, no závisí to od rozsahu a typu búrania. Pre menšie úpravy, ako je búranie nenosných priečok či bytového jadra, zvyčajne postačuje ohlásenie stavebných úprav na stavebnom úrade. Pri zásahoch do nosných konštrukcií (steny, stropy) je nevyhnutné stavebné povolenie spolu so statickým posudkom a projektovou dokumentáciou. Búranie v panelových domoch vždy vyžaduje statický posudok a súhlas stavebného úradu, keďže nesprávne zásahy môžu ohroziť statiku celej budovy. V prípade bytov v bytových domoch je tiež potrebný súhlas spoločenstva vlastníkov alebo správcu. Pri historických budovách a pamiatkovo chránených objektoch sa vyžadujú dodatočné povolenia od pamiatkového úradu. Naša spoločnosť vám pomôže so zabezpečením všetkých potrebných povolení a dokumentov.",
    },
    {
      question: "Ako dlho trvajú búracie práce v byte?",
      answer:
        "Dĺžka búracích prác v byte závisí od rozsahu a náročnosti projektu. Pre základnú predstavu uvádzame približné časové rámce: búranie nenosnej priečky (1-2 dni), kompletné búranie bytového jadra (2-3 dni), vybúranie otvoru do nosnej steny (1-2 dni), búranie podláh v celom byte (2-4 dni), kompletná rekonštrukcia bytu s rozsiahlym búraním (1-2 týždne). Tieto odhady platia pre štandardný byt a zahŕňajú aj základné upratanie a odvoz odpadu. Faktory, ktoré môžu predĺžiť proces, zahŕňajú: obmedzený prístup do budovy, nutnosť ručného búrania pre minimalizáciu hluku (napr. v panelových domoch), neočakávané komplikácie v konštrukcii, alebo špecifické požiadavky bytového domu na čas vykonávania hlučných prác. Pri obhliadke priestoru vám vieme poskytnúť presnejší časový harmonogram pre váš konkrétny projekt.",
    },
    {
      question: "Ako minimalizujete prašnosť pri búracích prácach?",
      answer:
        "Prašnosť pri búracích prácach je jedným z hlavných problémov, ktorý riešime komplexným prístupom. Priestor dôkladne izolujeme pomocou špeciálnych prachotesných fólií a lepiacich pások, čím vytvoríme uzavretú zónu. Využívame profesionálne priemyselné vysávače s HEPA filtrami, ktoré zachytávajú až 99,97% prachových častíc. Pri búraní nasadzujeme zariadenia s integrovaným odsávaním prachu a vodným kropením, čo výrazne znižuje prašnosť priamo pri zdroji. V prípade potreby inštalujeme prenosné čističky vzduchu s HEPA filtráciou. Sute a odpad priebežne balíme do uzavretých vriec a odvážame, aby nedochádzalo k hromadeniu prachu. Po ukončení prác vykonávame dôkladné upratanie s použitím profesionálnych čistiacich prostriedkov. Tento komplexný prístup zabezpečuje, že prašnosť je minimalizovaná nielen v búranom priestore, ale aj v okolitých miestnostiach a spoločných priestoroch budovy.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero section */}
      <link
        rel="preload"
        href="/images/mascot/buranie-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/buranie-mascot.svg"
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
          backgroundImage={heroData.backgroundImage}
          benefits={["Poistenie zahrnuté", "Bez skrytých poplatkov", "Záväzná cena vopred"]}
          mascotSrc="/images/mascot/buranie-mascot.svg"
          desktopMascotDynamicHeight
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          benefits={["Poistenie zahrnuté", "Bez skrytých poplatkov", "Záväzná cena vopred"]}
          showMascot
          mascotSrc="/images/mascot/buranie-mascot.svg"
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

      {/* Ako to funguje section */}
      <HowItWorks />

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

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      <div className="md:mb-[-100px]">
        <LocationMap
          title="Búracie a demolačné práce po celom Slovensku"
          description="Naše služby poskytujeme v nasledujúcich mestách a regiónech."
          locations={buracieLocations}
          additionalText="Poskytujeme profesionálne búracie a demolačné práce s plnou zodpovednosťou za váš majetok."
          supporText="Búrame vo všetkých regiónoch:"
        />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Často kladené otázky o búracích a demolačných prácach"
          items={faqItems}
          expandableGroup={{
            label: "Všetko o búracích a demolačných prácach",
            panels: [
              {
                title: "Nosné steny vs. priečky — kedy potrebujete projekt?",
                content:
                  "Nie každú stenu možno búrať bez projektu. Nosné steny sú konštrukčnou súčasťou budovy — ich odstránenie bez statického posúdenia môže ohroziť celú stavbu. Priečky (nenosné steny) možno vo väčšine prípadov búrať bez projektu, stačí nahlásenie stavebného úradu.\n\nPred začatím búracích prác vždy odporúčame overenie s projektantom alebo statikom, najmä v panelových domoch a starších zástavbách. Náš tím vám poradí pri identifikácii nosných konštrukcií a v prípade potreby vás nasmeruje na príslušné orgány.",
              },
              {
                title: "Búracie práce v byte vs. v dome — kľúčové rozdiely",
                content:
                  "Búracie práce v byte musia rešpektovať ostatných obyvateľov bytového domu — hluk, prašnosť a vibrácie sú obmedzené stavebným zákonom a domovým poriadkom. Práce je zvyčajne možné vykonávať len v pracovných dňoch medzi 8:00 a 18:00.\n\nPri búraní v rodinnom dome je viac slobody, ale stále platia stavebné predpisy. Výhodou domu je priamy prístup pre mechanizáciu a jednoduchší odvoz sutiny. V byte všetok materiál nosíme ručne po schodisku alebo výťahom.",
              },
              {
                title: "Odvoz sutiny a odpadu po búracích prácach",
                content:
                  "Sutina (tehly, omietka, betón) patrí medzi stavebný odpad a musí byť likvidovaná na certifikovaných skládkach. Náš tím sa postará o odvoz a ekologickú likvidáciu všetkého odpadu, ktorý vznikne počas búracích prác.\n\nPre väčšie zákazky zabezpečujeme kontajner priamo pred budovou, čo urýchľuje prácu a znižuje celkové náklady. Cena odvozu závisí od objemu odpadu a vzdialenosti od skládky.",
              },
              {
                title: "Minimalizácia prašnosti a ochrany priestorov",
                content:
                  "Prach pri búracích prácach je nevyhnutný, ale dá sa výrazne minimalizovať. Používame priemyselné vysávače s HEPA filtrami, ktoré zachytávajú jemnú prašnosť. Pred búraním zakrývame podlahy a nábytok v priľahlých miestnostiach ochrannými fóliami.\n\nDvere medzi búranou miestnosťou a zvyškom bytu tesniac zakryjeme plastovým závesom, ktorý zabraňuje šíreniu prachu. Po dokončení búracích prác urobíme hrubé upratovanie — odvezieme sutinu a vyčistíme pracovný priestor.",
              },
            ],
          }}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete profesionálne búracie práce?"
          description="Zverte búracie a demolačné práce do rúk odborníkov s dlhoročnými skúsenosťami. Pracujeme bezpečne, rýchlo a s ohľadom na minimalizáciu prašnosti a hluku. Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku."
          buttonText="Získať bezplatnú ponuku"
        />
      </div>
    
      <ServicePricing filter={["buracie-prace", "stahovanie", "vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Búracie a demolačné práce","description":"Komplexné búracie práce pre byty a kancelársie.","href":"/buracie-demolacne-prace","icon":"/icons/crane_icon.svg"},{"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},{"title":"Hodinový manžel","description":"Drobné opravy, inštalácie a domáce práce.","href":"/hodinovy-manzel-majster","icon":"/icons/repair_icon.svg"},{"title":"Likvidácia nebezpečného odpadu","description":"Bezpečná likvidácia starých spotrebičov a nebezpečného odpadu.","href":"/likvidacia-nebezpecneho-odpadu-starych-spotrebicov","icon":"/icons/hazmat_icon.svg"}]}
      />
    </main>
  );
}
