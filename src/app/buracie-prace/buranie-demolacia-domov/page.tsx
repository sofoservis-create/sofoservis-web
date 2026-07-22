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
  title: "Búranie a demolácia domov a budov | Sofoservis",
  description:
    "Ponúkame komplexné služby búrania a demolácie starých domov, budov alebo stodôl ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-prace/buranie-demolacia-domov",
      languages: {
        sk: "https://www.sofoservis.sk/buracie-prace/buranie-demolacia-domov",
        en: "https://www.sofoservis.sk/en/house-demolition",
        "x-default": "https://www.sofoservis.sk/buracie-prace/buranie-demolacia-domov",
      },
  },
};

export default function BuranieDemlaciaPage() {
  const heroData = {
    title: "Búranie a demolácia domov a budov",
    description:
      "Profesionálne služby v oblasti búrania a demolácie starých domov, budov, stodôl a iných objektov. Zabezpečíme kompletný proces od prípravných prác.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/sofoservis-zamestnanci-hero.avif",
  };

  const featuresData = {
    title: "Komplexné služby búrania a demolácie",
    description:
      "Ponúkame riešenia pre všetky typy búracích a demolačných prác s dôrazom na bezpečnosť a profesionalitu.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Demolácia celých budov",
        description:
          "Kompletná demolácia rodinných domov, bytových domov a priemyselných objektov. Používame moderné technológie a postupy pre kontrolovanú demoláciu.",
        link: "/buracie-prace/buranie-demolacia-domov",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Búranie stien a priečok",
        description:
          "Profesionálne búranie nosných aj nenosných stien v bytoch a domoch. Zabezpečujeme všetky potrebné povolenia a statické posudky pre bezpečné vykonanie prác.",
        link: "/buracie-prace/buranie-stien-priecok",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie pred demoláciou",
        description:
          "Kompletné vypratanie objektu pred demoláciou. Ekologicky zlikvidujeme všetok movitý majetok a odpady podľa platných predpisov.",
        link: "/vypratavanie/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Zabezpečujeme odvoz a likvidáciu všetkého stavebného odpadu vzniknutého pri búracích prácach. Máme kontajnery rôznych veľkostí.",
        link: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/safety_icon.svg",
        title: "Povolenia a bezpečnosť",
        description:
          "Zabezpečujeme všetky potrebné stavebné povolenia, statické posudky a dodržiavame prísne bezpečnostné protokoly pri všetkých demolačných prácach.",
        link: "/buracie-prace/buranie-demolacia-domov",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia materiálov",
        description:
          "Dbáme na životné prostredie - stavebný odpad dôsledne triedime, recyklujeme a ekologicky likvidujeme v súlade s environmentálnymi predpismi.",
        link: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  const faqItems = [
            {
              question: "Aké povolenia sú potrebné na demoláciu budovy?",
              answer:
                "Na demoláciu budovy je zvyčajne potrebné búracie povolenie, ktoré vydáva príslušný stavebný úrad. K žiadosti o povolenie je potrebné doložiť: vlastnícky list k nehnuteľnosti, katastrálnu mapu, projekt búracích prác vypracovaný oprávnenou osobou, vyjadrenia dotknutých orgánov a organizácií (napr. plynárne, vodárne, elektrárne), a v niektorých prípadoch aj statický posudok. Súčasťou dokumentácie je aj plán nakladania s odpadom. Proces získania povolenia trvá zvyčajne 30-60 dní. Naša spoločnosť vám môže pomôcť s prípravou potrebnej dokumentácie a komunikáciou s úradmi.",
            },
            {
              question: "Koľko stojí demolácia domu alebo inej budovy?",
              answer:
                "Cena demolácie závisí od viacerých faktorov: veľkosť a typ budovy, použité stavebné materiály, dostupnosť a lokalita, potreba špeciálnych postupov (napr. pri historických budovách), množstvo a typ odpadu, a ďalšie špecifické požiadavky. Pre menšie objekty ako garáže alebo hospodárske stavby sa ceny pohybujú od 2,000€ do 5,000€. Pri rodinných domoch sa cena zvyčajne pohybuje od 5,000€ do 15,000€, zatiaľ čo pri väčších komerčných budovách môže cena presiahnuť aj 20,000€. Súčasťou ceny je aj odvoz a likvidácia odpadu. Pre presný odhad nákladov odporúčame využiť našu bezplatnú obhliadku a konzultáciu.",
            },
            {
              question: "Ako dlho trvá demolácia priemerného rodinného domu?",
              answer:
                "Doba potrebná na demoláciu priemerného rodinného domu (cca 100-150m²) sa pohybuje od 2 do 5 dní, v závislosti od použitých stavebných materiálov, prístupových podmienok a potreby špeciálnych postupov. Samotný proces zahŕňa niekoľko fáz: prípravné práce (odpojenie sietí, zabezpečenie staveniska, odstránenie nebezpečných materiálov), hlavná demolácia, triedenie materiálu, a následný odvoz a likvidácia odpadu. Pri komplexnejších projektoch alebo väčších budovách môže celý proces trvať 1-2 týždne. Pred samotnou demoláciou je potrebné získať všetky povolenia, čo môže trvať 30-60 dní. Pri plánovaní je tiež potrebné zohľadniť čas potrebný na prípadné odpojenie od inžinierskych sietí.",
            },
            {
              question: "Búrate aj časti domov alebo len kompletné objekty?",
              answer:
                "Áno, realizujeme aj selektívnu demoláciu častí objektov, nielen kompletné búranie. Vieme odborne odstrániť jednotlivé časti stavieb ako prístavby, terasy, garáže, hospodárske časti alebo len vnútorné nenosné priečky pri zachovaní hlavnej konštrukcie budovy. Tento typ selektívnej demolácie je ideálny pri rekonštrukciách, kde potrebujete zmeniť dispozíciu priestoru, odstrániť problematické časti stavby alebo pripraviť objekt na prístavbu. Pri takýchto prácach kladieme dôraz na minimalizáciu vplyvu na okolité konštrukcie. Vždy postupujeme podľa podrobného plánu a v prípade potreby spolupracujeme so statikom, aby bola zaručená bezpečnosť a stabilita zachovaných častí objektu.",
            },
            {
              question:
                "Ako postupujete pri demolácii v husto obývaných oblastiach?",
              answer:
                "Pri demoláciách v husto obývaných oblastiach dodržiavame prísne bezpečnostné a environmentálne postupy. Najprv vypracujeme detailný demolačný plán zohľadňujúci blízkosť ostatných budov a verejných priestorov. Pred začatím prác informujeme susedov a miestne úrady o harmonograme a rozsahu prác. Stavenisko dôkladne zabezpečíme ochrannými bariérami a značením. Používame techniky na zníženie prašnosti (kropenie vodou) a hluku (protihlukové bariéry, časové obmedzenie hlučných prác). Používame vhodné stroje a postupy, ktoré minimalizujú vibrácie, ktoré by mohli poškodiť okolité stavby. Materiál odvážame priebežne, aby nedochádzalo k hromadeniu na mieste. V prípade potreby zabezpečíme aj dočasné dopravné obmedzenia alebo alternatívne prístupové trasy v spolupráci s miestnymi úradmi.",
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
          title="Často kladené otázky o búraní a demolácii"
          items={faqItems}
          expandableGroup={{
            label: "Všetko o demolácii budov a objektov",
            panels: [
              {
                title: "Ekologická demolácia — čo sa stane s materiálom?",
                content:
                  "Moderná demolácia nie je len búranie — je to aj recyklácia. Betón, tehly a kamenivo sa drvením menia na recyklovaný štrk, ktorý nachádza uplatnenie pri stavbe ciest a terénnych úpravách. Kovové konštrukcie, oceľ a farebné kovy sú hodnotnou surovinou a putujú do zberní a hutní.\n\nDrevo, okná, dvere a strešná krytina môžu byť v dobrom stave opätovne použiteľné. Náš tím triedi materiál už počas demolácie, čo znižuje množstvo odpadu a znižuje celkovú cenu zákazky.",
              },
              {
                title: "Demolácia vs. rekonštrukcia — kedy sa vyplatí demolovať?",
                content:
                  "Demolácia a nová výstavba sa vyplatí, keď: stav budovy je natoľko zlý, že rekonštrukcia by stála viac ako 60-70% ceny novostavby; budova nespĺňa požiadavky na energetickú hospodárnosť ani po rekonštrukcii; dispozičné riešenie je nevyhovujúce a jeho zmena by si vyžiadala rozsiahle búracie práce.\n\nRekonštrukcia je výhodnejšia pri zachovalej nosnej konštrukcii, hodnotných architektonických prvkoch alebo v chránených pamiatkových zónach, kde demolácia podlieha osobitným povoleniam.",
              },
              {
                title: "Demolácia záhradných stavieb, garáží a hospodárskych budov",
                content:
                  "Menšie objekty ako garáže, záhradné domčeky, sauny alebo hospodárske budovy sú menej regulované ako rodinné domy, no stále vyžadujú nahlásenie demolácie na miestnom stavebnom úrade. Lehota pre vyjadrenie úradu je zvyčajne 30 dní.\n\nPre malé objekty (do 25m²) platí zjednodušený postup. Cena demolácie garáže sa pohybuje od 800€ do 2500€ v závislosti od materiálu (murovaná vs. plechová) a ťažkosti prístupu. Odvoz sute je zahrnutý v cene.",
              },
              {
                title: "Poistenie a zodpovednosť počas demolácie",
                content:
                  "Všetky naše demolačné práce sú kryté poistením zodpovednosti za škodu. To znamená, že v prípade poškodenia susednej nehnuteľnosti, inžinierskych sietí alebo iného majetku sú škody kryté poisťovňou.\n\nPred začatím demolácie vždy vyznačíme inžinierske siete (elektrické vedenia, vodovodné a kanalizačné prípojky) a zabezpečíme ich odpojenie. Toto je nevyhnutná bezpečnostná podmienka každej demolácie.",
              },
            ],
          }}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      <div>
        <CTA
          title="Potrebujete demolovať starú budovu?"
          description="Zverte búranie a demoláciu skúseným profesionálom. Zabezpečíme všetky potrebné povolenia, bezpečnú demoláciu, odvoz a ekologickú likvidáciu odpadu. Využite našu bezplatnú obhliadku a cenovú ponuku bez záväzkov."
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
          {"title":"Búranie stien a priečok","description":"Búranie nosných a nenosných stien v bytoch.","href":"/buracie-prace/buranie-stien-priecok","icon":"/icons/hammer_icon.svg"},
          {"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/vypratavanie/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},
          {"title":"Hodinový manžel","description":"Drobné opravy, inštalácie a domáce práce.","href":"/hodinovy-manzel-majster","icon":"/icons/repair_icon.svg"},
        ]}
      />
    </main>
  );
}
