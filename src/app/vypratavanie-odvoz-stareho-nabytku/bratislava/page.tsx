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
  title:
    "Odvoz, vypratávanie a likvidácia starého nábytku Bratislava | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti vypratávania, odvozu a likvidácie starého nábytku v Bratislave ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz starého nábytku bratislava, likvidácia starého nábytku bratislava, odvoz stareho nabytku bratislava, vypratavanie nabytku bratislava, vyvoz nabytku bratislava, likvidacia nabytku bratislava, ekologicka likvidacia nabytku bratislava",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku/bratislava",
  },
};

export default function VypratavanieNabytkuBratislavaPage() {
  // Custom data for Hero section with Bratislava specifics
  const heroData = {
    title: "Odvoz, vypratávanie a likvidácia starého nábytku Bratislava",
    description:
      "Profesionálne služby pre rýchly a spoľahlivý odvoz a ekologickú likvidáciu starého, nepotrebného nábytku v Bratislave a okolí. Vypratáme a odvezieme akýkoľvek nábytok od jednotlivých kusov až po kompletné zariadenie domácnosti či kancelárie.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby odvozu a likvidácie nábytku",
    description:
      "Ponúkame široké spektrum služieb pre vynesenie, odvoz a ekologickú likvidáciu všetkých typov starého a nepotrebného nábytku.",
    features: [
      {
        image: "/icons/furniture_icon.svg", // Perfect for individual furniture pieces
        title: "Odvoz jednotlivých kusov nábytku",
        description:
          "Rýchly a spoľahlivý odvoz jednotlivých kusov nábytku, ako sú skrine, postele, sedačky, stoly či stoličky. Ideálne pri výmene starého nábytku za nový.",
        link: "/vypratavanie-odvoz-stareho-nabytku/bratislava",
      },
      {
        image: "/icons/house_icon.svg", // For complete home clearance
        title: "Kompletné vypratanie bytov",
        description:
          "Vypratanie všetkého nábytku a zariadenia z bytov, domov a iných priestorov. Vhodné pri rekonštrukcii, predaji nehnuteľnosti alebo dedičskom konaní.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/crane_icon.svg", // For heavy lifting and carrying
        title: "Demontáž a vynesenie nábytku",
        description:
          "Odborná demontáž nábytku pred odvozom a vynesenie aj z vyšších poschodí bez výťahu. Poradíme si aj s objemnými kusmi a ťažkými bremená v stiesnených priestoroch.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/recycle_icon.svg", // For ecological disposal
        title: "Ekologická likvidácia nábytku",
        description:
          "Zabezpečujeme ekologickú likvidáciu všetkých typov nábytku. Nábytok rozoberieme, vytriedime podľa materiálov a zabezpečíme recykláciu vhodných komponentov v zberných dvoroch.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/briefcase_icon.svg", // For office furniture removal
        title: "Odvoz nábytku z kancelárií",
        description:
          "Špecializujeme sa aj na vypratávanie a odvoz nábytku z kancelárskych a komerčných priestorov. Zabezpečíme rýchly odvoz aj väčšieho množstva kancelárskeho nábytku.",
        link: "/stahovanie-kancelarii-firiem",
      },
    ],
  };

  // Bratislava city districts for location section
  const bratislavaDistricts = [
    "Staré Mesto",
    "Ružinov",
    "Nové Mesto",
    "Karlova Ves",
    "Petržalka",
    "Dúbravka",
    "Rača",
    "Vajnory",
    "Devín",
    "Devínska Nová Ves",
    "Záhorská Bystrica",
    "Lamač",
    "Vrakuňa",
    "Podunajské Biskupice",
    "Jarovce",
    "Rusovce",
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
          title="Čo hovoria naši klienti o nás v Bratislave"
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

      {/* Location Map showing Bratislava districts covered */}
      <div>
        <LocationMap
          title="Poskytujeme služby v celej Bratislave"
          description="Zabezpečujeme vypratávanie a odvoz starého nábytku vo všetkých mestských častiach Bratislavy"
          locations={bratislavaDistricts}
          additionalText="Okrem Bratislavy poskytujeme naše služby aj v blízkom okolí - Senec, Pezinok, Modra, Svätý Jur, Malacky a ďalšie obce v okolí Bratislavy."
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="Spokojní zákazníci v Bratislave"
        />
      </div>

      {/* FAQ section */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Často kladené otázky o odvoze nábytku v Bratislave"
          items={[
            {
              question: "Aká je cena za odvoz starého nábytku v Bratislave?",
              answer:
                "Cena za odvoz starého nábytku v Bratislave závisí od niekoľkých faktorov: množstvo a typ nábytku, mestská časť, prístupové podmienky (poschodie, výťah) a to, či je potrebná demontáž. Pre orientáciu, odvoz jedného kusu nábytku (napr. sedačky, skrine) v Bratislave sa pohybuje od 40€ do 80€ vrátane naloženia a likvidácie. Pri väčšom množstve nábytku alebo kompletnom vypratávaní ponúkame výhodnejšie sadzby. V centre Bratislavy môže byť cena vyššia vzhľadom na obmedzené možnosti parkovania a prístupu. Presná cena vám bude stanovená po bezplatnej obhliadke alebo na základe fotografií a popisu, ktoré nám pošlete. ",
            },
            {
              question: "Za aký čas viete prísť odviezť nábytok v Bratislave?",
              answer:
                "V Bratislave ponúkame flexibilné termíny odvozu nábytku, často aj s možnosťou realizácie do 24 hodín od objednávky pri urgentných prípadoch. Štandardne vieme zabezpečiť odvoz do 1-3 pracovných dní. Vďaka našej rozsiahlej flotile vozidiel a tímu pracovníkov pôsobiacich priamo v Bratislave dokážeme efektívne plánovať trasy a poskytovať promptné služby. Pre najvyťaženejšie termíny (víkendy, začiatok/koniec mesiaca) odporúčame objednať odvoz s dostatočným predstihom. Ponúkame aj možnosť objednať si službu vo večerných hodinách alebo počas víkendov za príplatok. Vždy sa snažíme vyjsť v ústrety vašim časovým možnostiam.",
            },
            {
              question:
                "Ako riešite špecifické výzvy v rôznych častiach Bratislavy?",
              answer:
                "Každá mestská časť Bratislavy má svoje špecifiká, ktoré pri odvoze nábytku zohľadňujeme. V Starom Meste sa často stretávame s úzkymi ulicami, obmedzeným parkovaním a historickými budovami s úzkymi schodiskami - tu využívame menšie vozidlá a špecializované techniky manipulácie. Na sídliskách v Petržalke, Dúbravke či Karlovej Vsi riešime často odvoz nábytku z vyšších poschodí - naši pracovníci sú na to špeciálne vyškolení. V niektorých prípadoch využívame aj externé výťahy alebo spúšťanie cez balkóny. Pri luxusných rezidenciách v Novom Meste alebo Ružinove dbáme na extra ochranu spoločných priestorov. Vďaka dlhoročným skúsenostiam v Bratislave poznáme miestne podmienky, vrátane dopravných špičiek či obmedzení vjazdu do určitých zón, a dokážeme tak efektívne naplánovať každý odvoz.",
            },
            {
              question:
                "Vynesiete nábytok aj z vyšších poschodí bratislavských panelákov bez výťahu?",
              answer:
                "Áno, naši pracovníci sú špeciálne vyškolení na manipuláciu s nábytkom v bratislavských panelákoch, vrátane vynesenia z najvyšších poschodí aj bez výťahu. Disponujeme špeciálnymi pomôckami ako sú sťahovacie popruhy, protišmykové rukavice, ochranné rohy a plachty, ktoré uľahčujú manipuláciu s ťažkými predmetmi po schodiskách. Väčšie kusy nábytku vieme aj rozložiť priamo na mieste, ak je to potrebné pre bezpečný a bezproblémový prenos. Pri extrémne komplikovaných situáciách v niektorých bratislavských lokalitách (veľmi úzke schodisko, nadrozmerný nábytok) máme skúsenosti s využívaním sťahovacích výťahov alebo spúšťaním cez balkón. Naši pracovníci vždy dbajú na ochranu schodiska, zábradlia, stien a dverí počas celého procesu vynášania.",
            },
            {
              question: "Kam odvážate vyzbieraný nábytok z Bratislavy?",
              answer:
                "Nábytok vyzbieraný v Bratislave prechádzá dôkladným triedením. Funkčný a zachovalý nábytok môže byť po dohode ponúknutý na ďalšie využitie bratislavským charitám, sociálnym organizáciám alebo rodinám v núdzi. Pre tento účel spolupracujeme s viacerými neziskovými organizáciami v Bratislave. Nábytok nevhodný na ďalšie použitie rozoberáme na jednotlivé materiály priamo v našom depe na okraji Bratislavy. Vytriedené materiály následne odovzdávame bratislavským zberným dvorom a recyklačným centrám - drevo, kov, textil a plasty sú spracované samostatne. Spolupracujeme s legitímnymi zariadeniami na spracovanie odpadov v Bratislave a okolí, ktoré zabezpečujú ekologické nakladanie s vyzbieraným materiálom. Na požiadanie vám môžeme poskytnúť potvrdenie o ekologickej likvidácii.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Zbavte sa starého nábytku v Bratislave jednoducho a ekologicky"
          description="Nepotrebný nábytok v Bratislave už nemusí byť problémom. Naši profesionáli zabezpečia rýchly odvoz, šetrnú demontáž a ekologickú likvidáciu akéhokoľvek nábytku z bytu, domu či kancelárie v Bratislave a okolí. Získajte viac priestoru bez námahy!"
          buttonText="Objednať odvoz nábytku v Bratislave"
          buttonLink="/kontakt"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
