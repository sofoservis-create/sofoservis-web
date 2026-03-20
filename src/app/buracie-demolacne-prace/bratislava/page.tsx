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
  title: "Búracie práce Bratislava | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti búracích prác v Bratislave ✅ Ohliadka priestoru zadarmo ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "buracie prace bratislava, búracie práce bratislava, búranie domov bratislava, demolácia budov bratislava, búranie starých domov, likvidácia domov, demolácia stodôl, búranie a likvidácia budov, demolačné práce, ekologická demolácia, asanácia budov, búracie práce cena",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-demolacne-prace/bratislava",
  },
};

export default function BuraciePraceBratislavaPage() {
  // Custom data for Hero section with Bratislava focus
  const heroData = {
    title: "Búracie práce Bratislava",
    description:
      "Profesionálne búracie a demolačné služby v Bratislave a okolí. Zabezpečíme bezpečnú demoláciu domov, budov, stodôl a iných objektov s dôrazom na minimálny dopad na okolie. Náš tím odborníkov kompletne zaistí celý proces od prípravných prác až po odvoz a ekologickú likvidáciu stavebného odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Bratislave",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section - localized for Bratislava
  const featuresData = {
    title: "Búracie práce v Bratislave a okolí",
    description:
      "Ponúkame široké spektrum služieb v oblasti búrania a demolácie v hlavnom meste a priľahlých oblastiach Bratislavského kraja.",
    features: [
      {
        image: "/icons/house_icon.svg", // For house demolition
        title: "Búranie starých domov v Bratislave",
        description:
          "Kompletná demolácia starých domov v Bratislave s dôrazom na bezpečnosť a ohľaduplnosť k susedom. Zabezpečíme všetky potrebné povolenia na bratislavskom stavebnom úrade.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/landscape_icon.svg", // For agricultural/farm building demolition
        title: "Demolácia hospodárskych budov",
        description:
          "Špecializujeme sa na demoláciu hospodárskych budov a stodôl v okrajových častiach Bratislavy a v okolitých obciach. Staré stavby odstránime rýchlo a efektívne.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/briefcase_icon.svg", // For commercial/business buildings
        title: "Asanácia komerčných budov",
        description:
          "Profesionálna demolácia komerčných a priemyselných objektov v Bratislave. Postupujeme podľa detailného plánu s dôrazom na dodržiavanie mestských predpisov.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/container_icon.svg", // For waste removal
        title: "Odvoz a likvidácia stavebného odpadu",
        description:
          "Kompletné služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu v Bratislave a okolí. Využívame oficiálne skládky a recyklačné centrá.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/hammer_icon.svg", // For wall demolition
        title: "Búranie stien a priečok",
        description:
          "Realizujeme búranie vnútorných stien a priečok v bratislavských bytoch a domoch. Ideálne pri rekonštrukciách alebo zmene dispozície priestorov.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/recycle_icon.svg", // For ecological disposal and recycling
        title: "Ekologická likvidácia a recyklácia",
        description:
          "Dbáme na životné prostredie Bratislavy - stavebný odpad dôsledne triedime, recyklujeme a ekologicky likvidujeme v súlade s predpismi hlavného mesta.",
        link: "/buranie-demolacia-domov-bytov",
      },
    ],
  };

  // Bratislava districts for the location map
  const bratislavaLocations = [
    "Staré Mesto",
    "Ružinov",
    "Nové Mesto",
    "Petržalka",
    "Karlova Ves",
    "Dúbravka",
    "Rača",
    "Vrakuňa",
    "Podunajské Biskupice",
    "Devínska Nová Ves",
    "Devín",
    "Vajnory",
    "Záhorská Bystrica",
    "Lamač",
    "Rusovce",
    "Jarovce",
    "Čunovo",
  ];

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
          title="Čo o nás hovoria klienti z Bratislavy"
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

      {/* Locations Map for Bratislava */}
      <div>
        <LocationMap
          title="Pôsobíme v celej Bratislave"
          description="Naše búracie práce poskytujeme vo všetkých mestských častiach Bratislavy"
          locations={bratislavaLocations}
          additionalText="Okrem Bratislavy realizujeme búracie a demolačné práce aj v okolitých mestách a obciach Bratislavského kraja ako Senec, Pezinok, Malacky, Stupava, Modra a ďalšie."
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          title="Recenzie na naše búracie práce v Bratislave"
          showReviewsShowcase={false}
        />
      </div>

      {/* FAQ section - localized for Bratislava */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Často kladené otázky o búracích prácach v Bratislave"
          items={[
            {
              question:
                "Aké povolenia potrebujem na búracie práce v Bratislave?",
              answer:
                "Na búracie práce v Bratislave je zvyčajne potrebné búracie povolenie, ktoré vydáva príslušný stavebný úrad mestskej časti, v ktorej sa nehnuteľnosť nachádza. K žiadosti o povolenie je potrebné doložiť: vlastnícky list k nehnuteľnosti, katastrálnu mapu, projekt búracích prác vypracovaný oprávnenou osobou, vyjadrenia dotknutých orgánov a organizácií (napr. BVS, SPP, ZSE), a v niektorých prípadoch aj statický posudok. V historických častiach Bratislavy (najmä Staré Mesto) môžu byť vyžadované aj stanoviská Krajského pamiatkového úradu. Naša spoločnosť vám pomôže s prípravou potrebnej dokumentácie a komunikáciou s príslušným stavebným úradom vašej mestskej časti.",
            },
            {
              question: "Koľko stoja búracie práce v Bratislave?",
              answer:
                "Ceny búracích prác v Bratislave sú v porovnaní s inými regiónmi Slovenska mierne vyššie vzhľadom na vyššie náklady na odvoz a likvidáciu odpadu. Pre menšie objekty ako garáže alebo hospodárske stavby sa ceny pohybujú od 2,500€ do 6,000€. Pri rodinných domoch v Bratislave sa cena zvyčajne pohybuje od 6,000€ do 20,000€, zatiaľ čo pri väčších komerčných budovách môže cena presiahnuť aj 25,000€. Faktory ovplyvňujúce cenu zahŕňajú: veľkosť a typ budovy, použité stavebné materiály, dostupnosť a lokalitu (napr. v centre mesta sú náročnejšie podmienky), špeciálne požiadavky pre historické budovy, a množstvo odpadu. Pre presný odhad nákladov vám ponúkame bezplatnú obhliadku v ktorejkoľvek mestskej časti Bratislavy.",
            },
            {
              question: "Ako dlho trvajú búracie práce v Bratislave?",
              answer:
                "Doba potrebná na demoláciu v Bratislave závisí od viacerých faktorov. Pri priemernom rodinnom dome (cca 100-150m²) sa práce pohybujú od 3 do 7 dní. Treba však zohľadniť aj administratívnu prípravu - získanie povolení v Bratislave môže trvať 30-90 dní v závislosti od mestskej časti a vyťaženosti stavebného úradu. Demolácia zahŕňa: prípravné práce (odpojenie sietí, zabezpečenie staveniska), hlavnú demoláciu, triedenie odpadu a následný odvoz. V husto obývaných častiach Bratislavy (Staré Mesto, Ružinov, Petržalka) musíme dodržiavať prísne predpisy o hlukovej záťaži a čistote, čo môže predĺžiť dobu realizácie. Pri plánovaní je potrebné zohľadniť aj dopravné obmedzenia a koordináciu s mestskou políciou, ak je potrebné dočasne obmedziť dopravu v okolí.",
            },
            {
              question:
                "Realizujete aj menšie búracie práce v bratislavských bytoch?",
              answer:
                "Áno, okrem kompletných demolácií realizujeme aj menšie búracie práce v bratislavských bytoch a domoch. Patria sem: búranie nenosných priečok pri zmenách dispozície bytu, vytváranie nových dverných a okenných otvorov, búranie bytových jadier, odstraňovanie starých podláh a podlahových krytín, búranie obkladov v kúpeľniach a kuchyniach. Pri bytových búracích prácach v Bratislave kladieme maximálny dôraz na minimalizáciu hluku, prachu a vibrácií s ohľadom na susedov. Používame moderné technológie ako diamantové rezanie a vŕtanie, ktoré významne znižujú zaťaženie okolia. Pre bytové domy v Bratislave máme vypracované postupy, ktoré rešpektujú domové poriadky a časové obmedzenia pre hlučné práce.",
            },
            {
              question:
                "Ako postupujete pri búracích prácach v hustej zástavbe Bratislavy?",
              answer:
                "Pri búracích prácach v husto zastavaných častiach Bratislavy dodržiavame špeciálne postupy: 1) Detailná analýza okolia a vytvorenie plánu búracích prác s ohľadom na susedné budovy. 2) Komunikácia so susedmi a správcami okolitých budov. 3) Inštalácia dočasných protiprašných bariér a plachiet na lešení. 4) Pravidelné kropenie vodou na zníženie prašnosti. 5) Používanie nástrojov s odsávaním prachu. 6) Dodržiavanie mestom stanovených časových obmedzení pre hlučné práce (zvyčajne 8:00-18:00 v pracovných dňoch). 7) Priebežný odvoz sutiny, aby nedochádzalo k hromadeniu na mieste. 8) V prípade potreby zabezpečenie dočasných dopravných obmedzení v spolupráci s mestskou políciou. 9) Dôkladné čistenie okolitých ulíc a chodníkov po ukončení prác. Vďaka týmto opatreniam dokážeme realizovať búracie práce aj v najhustejšie zastavaných častiach Bratislavy s minimálnym dopadom na okolie.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete búracie práce v Bratislave?"
          description="Zverte demolačné a búracie práce skúseným bratislavským profesionálom. Zabezpečíme všetky potrebné povolenia, bezpečnú demoláciu, odvoz a ekologickú likvidáciu odpadu. Využite našu bezplatnú obhliadku priestoru a cenovú ponuku bez záväzkov."
          buttonText="Získať bezplatnú cenovú ponuku"
          imageSrc="/images/sofo_bratislava_stahovanie.jpg"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
