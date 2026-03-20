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
  title: "Odvoz a likvidácia stavebného odpadu Trnava | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu v Trnave ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz stavebného odpadu trnava, likvidacia stavebneho odpadu trnava, odvoz sute trnava, vyvoz odpadu trnava, stavebný odpad trnava, kontajner na suť trnava, likvidácia odpadu trnava",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/trnava",
  },
};

export default function OdvozStavebnehoOdpaduTrnavaPage() {
  // Custom data for Hero section with Trnava-specific content
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu Trnava",
    description:
      "Profesionálne a rýchle služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu a sutiny v Trnave a okolí. Zabezpečíme odvoz odpadu po rekonštrukcii, demolácii alebo výstavbe za výhodné ceny s kompletnými dokladmi o likvidácii.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby odvozu a likvidácie stavebného odpadu",
    description:
      "Profesionálny odvoz a ekologická likvidácia všetkých typov stavebného odpadu a sutiny s kompletnými dokladmi o likvidácii.",
    features: [
      {
        image: "/icons/truck_icon.svg", // Perfect for construction waste transport
        title: "Odvoz stavebnej sute a odpadu",
        description:
          "Rýchly a efektívny odvoz stavebnej sute po rekonštrukcii bytu, domu alebo demolácii. Naše vozidlá sú vybavené na prepravu ťažkých materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg", // For ecological waste processing
        title: "Ekologická likvidácia odpadu",
        description:
          "Zabezpečujeme ekologickú likvidáciu stavebného odpadu vrátane sutiny, tehál, betónu, omietok a ďalších stavebných materiálov v súlade s environmentálnymi predpismi.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/crane_icon.svg", // For heavy lifting and loading
        title: "Nakladanie a vynášanie odpadu",
        description:
          "Naši pracovníci zabezpečia kompletné naloženie a vynesenie stavebného odpadu, vrátane vynesenia z vyšších poschodí, pivníc alebo ťažko dostupných miest.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/container_icon.svg", // NEW ICON - For container rental
        title: "Pristavenie kontajnerov",
        description:
          "Ponúkame pristavenie kontajnerov rôznych veľkostí na stavebný odpad priamo na vašu adresu. Kontajnery sú k dispozícii na krátkodobý aj dlhodobý prenájom.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/wrecking_ball_icon.svg", // For demolition waste
        title: "Odvoz odpadu po demolácii",
        description:
          "Špecializované služby odvozu odpadu po búracích a demolačných prácach. Zabezpečíme odvoz sutiny z kompletných demolácií budov a objektov.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/document_icon.svg", // NEW ICON - For documentation
        title: "Dokumentácia o likvidácii",
        description:
          "Ku každému odvozu stavebného odpadu poskytujeme kompletnú dokumentáciu o likvidácii, ktorú môžete potrebovať pre stavebný úrad alebo environmentálne kontroly.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  // Trnava and nearby locations for services
  const trnavaLocations = [
    "Trnava",
    "Modranka",
    "Biely Kostol",
    "Hrnčiarovce nad Parnou",
    "Zeleneč",
    "Jaslovské Bohunice",
    "Špačince",
    "Bohdanovce nad Trnavou",
    "Brestovany",
    "Voderady",
    "Ružindol",
    "Zvončín",
    "Suchá nad Parnou",
    "Dolné Lovčice",
    "Zavar",
    "Cífer",
    "Majcichov",
    "Vlčkovce",
    "Opoj",
    "Malženice",
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

      {/* Serving Trnava and surrounding areas */}
      <div className="py-16">
        <LocationMap
          title="Služby odvozu stavebného odpadu poskytujeme v celej Trnave a okolí"
          description="Pôsobíme v Trnave a okolitých obciach a mestách"
          locations={trnavaLocations}
          additionalText="Vzhľadom na strategickú polohu Trnavy a jej blízkosť k Bratislave vieme zabezpečiť služby odvozu a likvidácie stavebného odpadu rýchlo a efektívne. Okrem uvedených lokalít pôsobíme aj v ďalších mestách a obciach Trnavského kraja. Ak vaša lokalita nie je uvedená v zozname, kontaktujte nás a radi vám poskytneme informácie o dostupnosti našich služieb aj vo vašej oblasti."
          showCallToAction={true}
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
          title="Často kladené otázky o odvoze a likvidácii stavebného odpadu v Trnave"
          items={[
            {
              question: "Aká je cena za odvoz stavebného odpadu v Trnave?",
              answer:
                "Cena za odvoz stavebného odpadu v Trnave a okolí závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Trnave alebo okolitej obci, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). Vďaka dobrej dostupnosti Trnavy a našej častej prítomnosti v tejto oblasti dokážeme ponúknuť konkurencieschopné ceny. Pre klientov z Trnavy a okolia poskytujeme množstevné zľavy pri väčšom objeme odpadu alebo pravidelných odvozoch. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre firmy a developerov pôsobiacich v Trnave ponúkame možnosť uzatvoriť rámcovú zmluvu s výhodnejšími podmienkami. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú nezáväznú obhliadku priamo na mieste v Trnave.",
            },
            {
              question:
                "Ako rýchlo dokážete zabezpečiť odvoz stavebného odpadu v Trnave?",
              answer:
                "V Trnave a okolí dokážeme vďaka strategickej polohe a pravidelnému pôsobeniu zabezpečiť odvoz stavebného odpadu veľmi flexibilne, zvyčajne do 1-2 pracovných dní od objednania. Trnava je jednou z našich prioritných oblastí, kde máme pravidelne plánované trasy, čo nám umožňuje efektívne organizovať odvoz odpadu. V urgentných prípadoch dokážeme často zabezpečiť aj odvoz v ten istý deň alebo nasledujúci deň po objednávke, v závislosti od aktuálneho vyťaženia našich kapacít. Pri plánovaných rekonštrukciách alebo väčších projektoch v Trnave odporúčame kontaktovať nás aspoň 2-3 dni vopred, aby sme mohli optimálne naplánovať naše služby. Počas najvyťaženejších období stavebnej sezóny (jar a jeseň) je vhodné objednať službu s väčším predstihom. Pre firmy a stavebné spoločnosti v Trnave ponúkame možnosť pravidelného odvozu odpadu podľa dohodnutého harmonogramu, čo zabezpečuje plynulosť vašich stavebných prác.",
            },
            {
              question:
                "Čo všetko zahŕňa služba odvozu stavebného odpadu v Trnave?",
              answer:
                "Naša služba odvozu stavebného odpadu v Trnave je komplexná a zahŕňa niekoľko kľúčových prvkov: 1) Konzultáciu a cenovú kalkuláciu - na základe vašich požiadaviek vám odporučíme najvhodnejší spôsob a termín odvozu odpadu. 2) Pristavenie kontajnera - zabezpečíme dodanie vhodného kontajnera na vašu adresu v Trnave v dohodnutom termíne. 3) Naloženie odpadu - naši pracovníci profesionálne naložia odpad do kontajnera, vrátane vynesenia z budovy, ak je to potrebné. 4) Bezpečnú prepravu - odpad prevezieme v súlade s predpismi, bez rozsypania či straty počas prepravy. 5) Ekologickú likvidáciu - zabezpečíme, aby bol odpad zlikvidovaný v súlade s environmentálnymi predpismi, s dôrazom na recykláciu, kde je to možné. 6) Poskytnutie dokumentácie - na požiadanie vám vystavíme doklad o likvidácii odpadu pre stavebný úrad alebo inú inštitúciu. Táto komplexná služba v Trnave je navrhnutá tak, aby ste sa nemuseli starať o žiadny aspekt odvozu a likvidácie stavebného odpadu - stačí zavolať a všetko ostatné zabezpečíme my. Pre stavebné firmy a developerov v Trnave ponúkame aj možnosť prispôsobenia služieb podľa ich špecifických potrieb a rozsahu projektu.",
            },
            {
              question:
                "Je možné objednať kontajner na stavebný odpad cez víkend v Trnave?",
              answer:
                "Áno, v Trnave a okolí ponúkame služby odvozu a pristavenia kontajnerov aj počas víkendov. Chápeme, že mnohí naši klienti pracujú na svojich rekonštrukciách práve počas víkendov, preto sa snažíme prispôsobiť našu prevádzku ich potrebám. Víkendové služby v Trnave zahŕňajú: Pristavenie nového kontajnera v sobotu - zvyčajne realizujeme v dohodnutý čas v sobotu, na základe vopred dohodnutej objednávky. Odvoz naplneného kontajnera v sobotu - možnosť odvozu odpadu nazhromaždeného počas pracovného týždňa. Výmena kontajnerov počas víkendu - pre väčšie projekty, kde je potrebná kontinuálna dostupnosť kontajnera. Je dôležité poznamenať, že víkendové služby v Trnave je potrebné objednať s dostatočným predstihom, ideálne aspoň 2-3 dni vopred, aby sme mohli zabezpečiť dostupnosť vozidla a personálu. V niektorých prípadoch môže byť cena za víkendové služby mierne vyššia v porovnaní so štandardnými pracovnými dňami. Nedeľné služby poskytujeme len v obmedzenom režime a vo výnimočných prípadoch, preto odporúčame plánovať odvoz odpadu primárne na sobotu. Pre pravidelnú víkendovú spoluprácu s firmami v Trnave ponúkame možnosť dohodnúť si špeciálne podmienky a harmonogram.",
            },
            {
              question:
                "Aké možnosti recyklácie stavebného odpadu ponúkate v Trnave?",
              answer:
                "V Trnave a okolí kladieme veľký dôraz na environmentálne zodpovedné nakladanie so stavebným odpadom, pričom maximalizujeme možnosti recyklácie. Náš prístup k recyklácii stavebného odpadu v trnavskom regióne zahŕňa: 1) Triedenie odpadu - už pri zbere odpadu sa snažíme separovať recyklovateľné materiály od nerecyklovateľných. 2) Spracovanie betónu a tehál - tieto materiály sa po rozdrvení môžu opätovne využiť ako podkladový materiál pri stavbách ciest alebo ako plnivo do nového betónu. 3) Recyklácia kovov - železné a neželezné kovy vytriedené zo stavebného odpadu odvážame do špecializovaných zariadení na ďalšie spracovanie. 4) Využitie dreva - drevený stavebný odpad, ktorý nie je kontaminovaný, môže byť spracovaný na drevnú štiepku alebo využitý energeticky. 5) Recyklácia sadrokartónu - čistý sadrokartón môže byť recyklovaný a použitý pri výrobe nových sadrokartónových dosiek. 6) Spracovanie stavebných zmesí - niektoré zmesné materiály je možné po spracovaní využiť ako zásypový materiál. Spolupracujeme s recyklačnými zariadeniami v okolí Trnavy, ktoré spĺňajú všetky environmentálne normy. Pri každom odvoze stavebného odpadu analyzujeme možnosti jeho recyklácie a snažíme sa minimalizovať množstvo odpadu končiaceho na skládkach. Pre firmy a developerov v Trnave ponúkame aj možnosť vypracovania plánu nakladania s odpadom, ktorý maximalizuje mieru recyklácie a opätovného využitia materiálov, čo môže byť relevantné aj pre projekty s environmentálnou certifikáciou.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete odviezť stavebný odpad v Trnave?"
          description="Zbavte sa stavebného odpadu rýchlo, legálne a bez námahy. Náš tím zabezpečí kompletný odvoz a ekologickú likvidáciu všetkého stavebného odpadu v Trnave a okolí za výhodné ceny. Šetrite svoj čas a energiu - kontaktujte nás ešte dnes!"
          buttonText="Získať cenovú ponuku"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
