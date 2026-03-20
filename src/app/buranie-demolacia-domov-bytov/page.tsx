import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Búranie a demolícia starých domov, budov, stodôl | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti búrania a demolície starých domov, budov alebo stodôl ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/buranie-demolacia-domov-bytov",
  },
  keywords:
    "búranie domov, demolácia budov, búranie starých domov, likvidácia domov, demolácia stodôl, búranie a likvidácia budov, demolačné práce, ekologická demolácia, asanácia budov, búracie práce, búranie domu cena, búranie domu svojpomocne",
};

export default function BuranieDemlaciaPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Búranie a demolácia domov, budov",
    description:
      "Profesionálne služby v oblasti búrania a demolácie starých domov, budov, stodôl a iných objektov. Zabezpečíme kompletný proces od prípravných prác, cez bezpečnú demoláciu až po odvoz a ekologickú likvidáciu stavebného odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby búrania a demolácie",
    description:
      "Ponúkame riešenia pre všetky typy búracích a demolačných prác s dôrazom na bezpečnosť a profesionalitu.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg", // Perfect for complete building demolition
        title: "Demolácia celých budov",
        description:
          "Kompletná demolácia rodinných domov, bytových domov a priemyselných objektov. Používame moderné technológie a postupy pre kontrolovanú demoláciu.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/hammer_icon.svg", // NEW ICON - For interior demolition
        title: "Búranie stien a priečok",
        description:
          "Profesionálne búranie nosných aj nenosných stien v bytoch a domoch. Zabezpečujeme všetky potrebné povolenia a statické posudky pre bezpečné vykonanie prác.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/broom_icon.svg", // For clearing before demolition
        title: "Vypratávanie pred demoláciou",
        description:
          "Kompletné vypratanie objektu pred demoláciou. Ekologicky zlikvidujeme všetok movitý majetok a odpady podľa platných predpisov.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/truck_icon.svg", // For waste removal
        title: "Odvoz stavebného odpadu",
        description:
          "Zabezpečujeme odvoz a likvidáciu všetkého stavebného odpadu vzniknutého pri búracích prácach. Máme kontajnery rôznych veľkostí.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/safety_icon.svg", // NEW ICON - For safety and permits
        title: "Povolenia a bezpečnosť",
        description:
          "Zabezpečujeme všetky potrebné stavebné povolenia, statické posudky a dodržiavame prísne bezpečnostné protokoly pri všetkých demolačných prácach.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/recycle_icon.svg", // For ecological disposal
        title: "Ekologická likvidácia materiálov",
        description:
          "Dbáme na životné prostredie - stavebný odpad dôsledne triedime, recyklujeme a ekologicky likvidujeme v súlade s environmentálnymi predpismi.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
      />

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

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      {/* FAQ section */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Často kladené otázky o búraní a demolácii"
          items={[
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
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete demolovať starú budovu?"
          description="Zverte búranie a demoláciu skúseným profesionálom. Zabezpečíme všetky potrebné povolenia, bezpečnú demoláciu, odvoz a ekologickú likvidáciu odpadu. Využite našu bezplatnú obhliadku a cenovú ponuku bez záväzkov."
          buttonText="Získať bezplatnú cenovú ponuku"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
