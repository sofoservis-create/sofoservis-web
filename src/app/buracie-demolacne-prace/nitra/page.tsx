import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Búracie práce Nitra | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti búracích prác v Nitre ✅ Ohliadka priestoru zadarmo ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "buracie prace nitra, búracie práce nitra, búranie domov nitra, demolácia budov nitra, búranie starých domov, likvidácia domov, demolácia stodôl, búranie a likvidácia budov, demolačné práce nitra, ekologická demolácia, asanácia budov, búracie práce cena",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-demolacne-prace/nitra",
  },
};

export default function BuraciePraceNitraPage() {
  // Custom data for Hero section with Nitra focus
  const heroData = {
    title: "Búracie práce Nitra",
    description:
      "Profesionálne búracie a demolačné služby v Nitre a okolí. Zabezpečíme bezpečnú demoláciu domov, budov, stodôl a iných objektov s dôrazom na minimálny dopad na okolie. Náš tím odborníkov kompletne zaistí celý proces od prípravných prác až po odvoz a ekologickú likvidáciu stavebného odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Nitre",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section - localized for Nitra
  const featuresData = {
    title: "Búracie práce v Nitre a okolí",
    description:
      "Ponúkame široké spektrum služieb v oblasti búrania a demolácie v Nitre a celom Nitrianskom kraji.",
    features: [
      {
        image: "/icons/house_icon.svg", // For house demolition
        title: "Búranie starých domov v Nitre",
        description:
          "Kompletná demolácia starých domov v Nitre a okolí s dôrazom na bezpečnosť a minimálny dopad na okolie. Zabezpečíme všetky potrebné povolenia na nitrianskom stavebnom úrade.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/landscape_icon.svg", // For agricultural/farm building demolition
        title: "Demolácia hospodárskych budov",
        description:
          "Špecializujeme sa na demoláciu hospodárskych budov a stodôl v Nitre a priľahlých obciach. Staré poľnohospodárske objekty odstránime rýchlo a efektívne.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/briefcase_icon.svg", // For commercial/industrial buildings
        title: "Asanácia komerčných budov",
        description:
          "Profesionálna demolácia komerčných a priemyselných objektov v Nitre. Postupujeme podľa detailného plánu s dôrazom na dodržiavanie miestnych predpisov a vyhlášok.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/container_icon.svg", // For waste removal and disposal
        title: "Odvoz a likvidácia stavebného odpadu",
        description:
          "Kompletné služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu v Nitre a okolí. Využívame oficiálne skládky a recyklačné centrá v regióne.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/hammer_icon.svg", // For wall demolition
        title: "Búranie stien a priečok",
        description:
          "Realizujeme búranie vnútorných stien a priečok v nitrianskych bytoch a domoch. Ideálne pri rekonštrukciách alebo zmene dispozície priestorov.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/recycle_icon.svg", // For ecological disposal and recycling
        title: "Ekologická likvidácia a recyklácia",
        description:
          "Dbáme na životné prostredie - stavebný odpad z Nitry a okolia dôsledne triedime, recyklujeme a ekologicky likvidujeme v súlade s miestnymi predpismi.",
        link: "/buranie-demolacia-domov-bytov",
      },
    ],
  };

  // Nitra districts and surrounding areas for the location map
  const nitraLocations = [
    "Staré Mesto",
    "Čermáň",
    "Klokočina",
    "Diely",
    "Chrenová",
    "Zobor",
    "Dražovce",
    "Janíkovce",
    "Kynek",
    "Mlynárce",
    "Párovské Háje",
    "Dolné Krškany",
    "Horné Krškany",
  ];

  const surroundingLocations =
    "Naše služby poskytujeme aj v okolitých mestách a obciach ako Vráble, Zlaté Moravce, Šaľa, Topoľčany, Levice a v celom Nitrianskom kraji. Navštívime aj menšie obce ako Ivanka pri Nitre, Veľký Cetín, Mojmírovce, Lehota, Cabaj-Čápor a ďalšie.";

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
        <GoogleReviews
          title="Čo o nás hovoria klienti z Nitry"
        />
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

      {/* Locations Map for Nitra */}
      <div>
        <LocationMap
          title="Pôsobíme v celej Nitre"
          description="Naše búracie práce poskytujeme vo všetkých mestských častiach Nitry"
          locations={nitraLocations}
          additionalText={surroundingLocations}
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          title="Recenzie na naše búracie práce v Nitre"
          showReviewsShowcase={false}
        />
      </div>

      {/* FAQ section - localized for Nitra */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Často kladené otázky o búracích prácach v Nitre"
          items={[
            {
              question: "Aké povolenia potrebujem na búracie práce v Nitre?",
              answer:
                "Na búracie práce v Nitre je potrebné búracie povolenie, ktoré vydáva Stavebný úrad mesta Nitra. K žiadosti je potrebné doložiť: vlastnícky list k nehnuteľnosti, katastrálnu mapu, projekt búracích prác vypracovaný oprávnenou osobou, vyjadrenia dotknutých orgánov a organizácií (napr. Západoslovenská vodárenská spoločnosť, SPP, Západoslovenská distribučná), a v niektorých prípadoch aj statický posudok. V historickej časti Nitry môže byť potrebné stanovisko Krajského pamiatkového úradu Nitra. Náš tím vám pomôže s prípravou všetkých potrebných dokumentov a komunikáciou s nitrianskym stavebným úradom. Vybavenie povolenia v Nitre zvyčajne trvá 30-60 dní v závislosti od komplexnosti projektu.",
            },
            {
              question: "Koľko stoja búracie práce v Nitre?",
              answer:
                "Ceny búracích prác v Nitre a okolí sa odvíjajú od viacerých faktorov. Pre menšie objekty ako garáže alebo hospodárske stavby sa ceny pohybujú od 2,000€ do 5,000€. Pri rodinných domoch v Nitre sa cena zvyčajne pohybuje od 5,000€ do 15,000€, zatiaľ čo pri väčších komerčných budovách môže cena presiahnuť aj 20,000€. Faktory ovplyvňujúce cenu zahŕňajú: veľkosť a typ budovy, použité stavebné materiály, dostupnosť a lokalitu (napr. stiesnené podmienky v centre Nitry), prípadné špeciálne požiadavky pre historické budovy, a množstvo a typ odpadu. Súčasťou ceny je aj odvoz a likvidácia odpadu. Pre presný odhad nákladov vám ponúkame bezplatnú obhliadku kdekoľvek v Nitre a okolí.",
            },
            {
              question: "Ako dlho trvajú búracie práce v Nitre?",
              answer:
                "Doba potrebná na demoláciu v Nitre závisí od viacerých faktorov. Pri priemernom rodinnom dome (cca 100-150m²) sa práce pohybujú od 2 do 5 dní. Treba však zohľadniť aj administratívnu prípravu - získanie povolení v Nitre môže trvať 30-60 dní v závislosti od vyťaženosti stavebného úradu. Demolácia zahŕňa: prípravné práce (odpojenie sietí, zabezpečenie staveniska, odstránenie nebezpečných materiálov), hlavnú demoláciu, triedenie materiálu, a následný odvoz a likvidáciu odpadu. V historickom centre Nitry musíme dodržiavať prísnejšie predpisy a postupy, čo môže predĺžiť dobu realizácie. Pri plánovaní demolácie je potrebné brať do úvahy aj podmienky stanovené nitrianskym stavebným úradom, ktoré môžu obsahovať časové obmedzenia pre hlučné práce.",
            },
            {
              question:
                "Realizujete aj menšie búracie práce v nitrianskych bytoch?",
              answer:
                "Áno, okrem kompletných demolácií realizujeme aj menšie búracie práce v nitrianskych bytoch a domoch. Naše služby zahŕňajú: búranie nenosných priečok pri zmenách dispozície bytu, vytváranie nových dverných a okenných otvorov, búranie bytových jadier v panelových domoch na sídliskách Klokočina a Chrenová, odstraňovanie starých podláh a podlahových krytín, búranie obkladov v kúpeľniach a kuchyniach. Pri bytových búracích prácach v Nitre kladieme maximálny dôraz na minimalizáciu hluku, prachu a vibrácií s ohľadom na susedov. Používame moderné technológie ako diamantové rezanie a vŕtanie, ktoré významne znižujú zaťaženie okolia. Všetky bytové búracie práce realizujeme v súlade s domovými poriadkami a hygienickými normami.",
            },
            {
              question:
                "Ponúkate odvoz a likvidáciu stavebného odpadu v Nitre?",
              answer:
                "Áno, súčasťou našich služieb v Nitre je kompletný odvoz a ekologická likvidácia stavebného odpadu. Disponujeme vlastnou technikou na odvoz sutiny a stavebného odpadu. Zabezpečíme pristavenie kontajnerov rôznych veľkostí podľa rozsahu prác. Všetok odpad odvážame na oficiálne skládky a recyklačné centrá v Nitrianskom kraji, kde je spracovaný v súlade s environmentálnymi predpismi. V závislosti od typu odpadu zabezpečujeme jeho triedenie a maximálnu možnú mieru recyklácie. Napríklad betón a tehly sú spracované na recyklát, ktorý sa ďalej využíva v stavebníctve. Kovové časti sú odovzdané do zberných surovín. K likvidácii odpadu poskytujeme všetku potrebnú dokumentáciu, ktorú môžete použiť v prípadných konaniach so stavebnými úradmi alebo environmentálnymi inštitúciami.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete búracie práce v Nitre?"
          description="Zverte demolačné a búracie práce skúseným nitrianskym profesionálom. Zabezpečíme všetky potrebné povolenia, bezpečnú demoláciu, odvoz a ekologickú likvidáciu odpadu. Využite našu bezplatnú obhliadku priestoru a cenovú ponuku bez záväzkov."
          buttonText="Získať bezplatnú cenovú ponuku"
          imageSrc="/images/sofo_bratislava_stahovanie.jpg"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
