import React from "react";
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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Búranie stien a priečok v dome a byte | Sofoservis",
  description:
    "Ponúkame komplexné búranie stien a priečok v dome alebo byte ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-prace/buranie-stien-priecok",
      languages: {
        sk: "https://www.sofoservis.sk/buracie-prace/buranie-stien-priecok",
        en: "https://www.sofoservis.sk/en/wall-demolition",
        "x-default": "https://www.sofoservis.sk/buracie-prace/buranie-stien-priecok",
      },
  },
};

export default function BuranieStienPriecokPage() {
  const heroData = {
    title: "Búranie stien a priečok v dome a byte",
    description:
      "Profesionálne búranie a odstraňovanie nosných stien, nenosných priečok a vytváranie otvorov v stenách. Zabezpečíme statický posudok.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/sofoservis-zamestnanci-hero.avif",
  };

  const featuresData = {
    title: "Komplexné búranie stien a priečok",
    description:
      "Ponúkame profesionálne riešenia pre všetky typy búracích prác v bytoch a domoch s dôrazom na bezpečnosť a kvalitu.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Búranie nosných stien",
        description:
          "Profesionálne búranie nosných stien s projektom statika a všetkými potrebnými povoleniami. Zabezpečujeme náhradnú konštrukciu pre zachovanie stability budovy.",
        link: "/buracie-prace/buranie-stien-priecok",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Búranie priečok a deliacich stien",
        description:
          "Rýchle a čisté búranie priečok v bytoch a domoch. Používame presné techniky pre minimálne poškodenie okolitých plôch a rýchle dokončenie práce.",
        link: "/buracie-prace/buranie-stien-priecok",
      },
      {
        image: "/icons/safety_icon.svg",
        title: "Bezpečnostné opatrenia",
        description:
          "Dôsledné dodržiavanie bezpečnostných predpisov a ochrana okolitých priestorov. Všetci naši pracovníci majú certifikáty pre búracie práce.",
        link: "/buracie-prace/buranie-stien-priecok",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Povolenia a projektová dokumentácia",
        description:
          "Vybavíme všetky potrebné povolenia, projektovú dokumentáciu a posudky statika. Zaistíme súlad s platnými predpismi a normami.",
        link: "/buracie-prace/buranie-stien-priecok",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Odvoz a likvidácia sute",
        description:
          "Kompletný odvoz búracieho odpadu a sute na oficiálne skládky. Environmentálne zodpovedné zneškodňovanie stavebného odpadu podľa platných predpisov.",
        link: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Špecializované vybavenie",
        description:
          "Moderné búracie nástroje a ochranné pomôcky pre efektívnu a bezpečnú prácu. Máme vybavenie pre všetky typy stavebných materiálov.",
        link: "/buracie-prace/buranie-stien-priecok",
      },
    ],
  };

  const faqItems = [
            {
              question:
                "Ako zistím, či je stena v mojom byte nosná alebo nenosná?",
              answer:
                "Určiť, či je stena nosná, nie je vždy jednoduché a vyžaduje odborné posúdenie. Existuje však niekoľko základných indikátorov: Nosné steny sú zvyčajne hrubšie (15cm a viac), zatiaľ čo nenosné majú často hrúbku 10cm alebo menej. V panelových domoch sú obvykle nosné všetky pôvodné betónové steny. Nosné steny typicky prebiehajú súbežne s kratšou stranou budovy a sú umiestnené nad sebou v jednotlivých poschodiach. Presné určenie si vyžaduje nahliadnutie do stavebných plánov budovy alebo konzultáciu so statikom. Ponúkame bezplatnú obhliadku, pri ktorej vám pomôžeme určiť, o aký typ steny ide, a navrhneme najvhodnejší postup pre vašu situáciu.",
            },
            {
              question:
                "Aké povolenia potrebujem na búranie steny v byte alebo dome?",
              answer:
                "Povolenia závisia od typu steny a rozsahu úprav. Pri búraní nenosných priečok zvyčajne stačí ohlásiť stavebné úpravy príslušnému stavebnému úradu. Pri búraní nosných stien je však vždy potrebné stavebné povolenie. K žiadosti je nutné priložiť projektovú dokumentáciu vypracovanú autorizovaným stavebným inžinierom a statický posudok, ktorý potvrdí, že úprava neohrozí stabilitu budovy. V bytových domoch je tiež potrebný súhlas spoločenstva vlastníkov bytov. V prípade, že ste v podnájme, vyžaduje sa súhlas majiteľa nehnuteľnosti. Naša spoločnosť vám môže pomôcť s prípravou potrebnej dokumentácie a vybavením všetkých povolení.",
            },
            {
              question: "Ako dlho trvá vybúranie priečky v byte?",
              answer:
                "Doba búrania priečky závisí od niekoľkých faktorov - veľkosti a typu priečky, materiálu, z ktorého je vyhotovená, a dostupnosti priestoru. Štandardné búranie nenosnej priečky o ploche 5-10m² zvyčajne trvá 1 pracovný deň. Toto zahŕňa samotnú demoláciu, zabalenie a prípravu odpadu na odvoz. Ak je súčasťou steny elektroinštalácia alebo rozvody vody, proces sa môže predĺžiť o ďalší deň potrebný na preloženie týchto sietí. Pri väčších plochách alebo nosných stenách môže proces trvať 2-4 dni. Po búracích prácach je potrebné počítať s ďalším časom na úpravu povrchov, omietky a dokončovacie práce, ktoré môžu trvať ďalšie 2-3 dni v závislosti od rozsahu.",
            },
            {
              question: "Koľko stojí búranie stien a priečok?",
              answer:
                "Cena za búranie stien a priečok závisí od viacerých faktorov: typu steny (nosná/nenosná), materiálu (tehla, betón, sadrokartón, panel), hrúbky a plochy steny, lokality a dostupnosti, a potreby špeciálnych postupov. Orientačné ceny: búranie nenosnej priečky sa pohybuje od 20€ do 40€ za m², búranie nosnej steny od 50€ do 120€ za m². Vytvorenie dverného otvoru v nenosnej stene stojí približne 150-300€, v nosnej stene 400-800€. Tieto ceny zvyčajne nezahŕňajú statický posudok (200-500€), projektovú dokumentáciu (300-700€) a odvoz sutiny (30-50€/m³). Pre komplexné búracie práce s potrebnými povoleniami a dokumentáciou odporúčame počítať s rozpočtom od 800€ (malé nenosné priečky) do 3000€ a viac (nosné steny). Presná cena vám bude stanovená po bezplatnej obhliadke.",
            },
            {
              question:
                "Je možné vytvoriť otvor v nosnej stene bez narušenia stability budovy?",
              answer:
                "Áno, je možné vytvoriť otvor v nosnej stene bez narušenia stability budovy, ale vyžaduje to odborný prístup a presné dodržanie technologických postupov. Proces začína statickým posudkom, ktorý určí, či a ako môže byť otvor vytvorený. Následne sa pripraví projektová dokumentácia s presným postupom prác. Pri samotnej realizácii sa najprv zabezpečí dočasné podopretie stropnej konštrukcie v mieste budúceho otvoru. Potom sa nad plánovaným otvorom vytvorí nový preklad, ktorý prevezme zaťaženie z hornej časti steny. Až potom sa pristúpi k vybúraniu samotného otvoru. Po dokončení búracích prác sa realizuje začistenie a prípadné doplnkové spevnenie. Celý proces musí vykonávať skúsená firma s potrebnými oprávneniami, pretože chyby môžu viesť k vážnemu narušeniu statiky budovy.",
            },
          ];
  return (
    <main className="bg-white">
      <link rel="preload"
        as="image"
        href="/images/mascot/buranie-mascot.svg"
        media="(min-width: 1024px)" fetchPriority="high" />
      <link rel="preload"
        as="image"
        href="/images/mascot/buranie-mascot.svg"
        media="(max-width: 1023px)" fetchPriority="high" />

      <LabHero
        narrowForm
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        benefits={[]}
        ratingText="3500+ spokojných zákazníkov"
        mascotSrc="/images/mascot/buranie-mascot.svg"
        desktopMascotDynamicHeight
        backgroundImage={heroData.backgroundImage}
        showMascot
        pillsVariant="stahovanie"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews />
      </div>

      <HowItWorks />

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
          title="Často kladené otázky o búraní stien a priečok"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      <div>
        <CTA
          title="Potrebujete odborne vybúrať stenu alebo priečku?"
          description="Zverte búranie stien profesionálom s dlhoročnými skúsenosťami. Zabezpečíme statický posudok, potrebné povolenia, bezpečné búranie a odvoz odpadu. Získajte bezplatnú cenovú ponuku na búracie práce vo vašom byte či dome."
          buttonText="Získať bezplatnú cenovú ponuku"
        />
      </div>
    
      <ServicePricing filter={["buracie-prace", "stahovanie", "vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          {"title":"Búracie práce","description":"Komplexné búracie práce pre byty a kancelárie.","href":"/buracie-prace","icon":"/icons/crane_icon.svg"},
          {"title":"Búranie domov a budov","description":"Demolácia domov, garáží a hospodárskych stavieb.","href":"/buracie-prace/buranie-demolacia-domov","icon":"/icons/wrecking_ball_icon.svg"},
          {"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/vypratavanie/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},
          {"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"},
        ]}
      />
    </main>
  );
}
