import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Odvoz a likvidácia stavebného odpadu Nitra | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu v Nitre ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "vyvoz stavebneho odpadu nitra, odvoz stavebného odpadu nitra, likvidacia stavebneho odpadu nitra, kontajner na suť nitra, odvoz sute nitra, stavebný odpad nitra, likvidácia odpadu nitra",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/nitra",
      languages: {
        sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/nitra",
        en: "https://www.sofoservis.sk/en/construction-waste-removal-nitra",
        "x-default": "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/nitra",
      },
  },
};

export default function OdvozStavebnehoOdpaduNitraPage() {
  const faqItems = [
            {
              question: "Aká je cena za vývoz stavebného odpadu v Nitre?",
              answer:
                "Cena za vývoz stavebného odpadu v Nitre závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Nitre alebo okolí, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru alebo skládke. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). V niektorých častiach Nitry s obmedzeným prístupom (napr. historické centrum alebo úzke uličky) môže byť cena mierne vyššia kvôli potrebe použitia špeciálnych vozidiel. Pre klientov z Nitry a blízkeho okolia ponúkame zvýhodnené ceny najmä pri pravidelných odvozoch alebo väčších objemoch. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú nezáväznú obhliadku priamo na mieste v Nitre.",
            },
            {
              question:
                "Koľko vopred je potrebné objednať kontajner na stavebný odpad v Nitre?",
              answer:
                "V Nitre a okolí sa snažíme vyjsť našim klientom maximálne v ústrety, čo sa týka termínov pristavenia kontajnerov. Pri štandardných požiadavkách odporúčame objednať kontajner aspoň 1-2 pracovné dni vopred, aby sme mohli zabezpečiť optimálne plánovanie trás a dodržať požadovaný termín. Počas najvyťaženejších období stavebnej sezóny (jar a jeseň) môže byť vhodné objednať kontajner aj 3-4 dni vopred. V prípade urgentnej potreby však vieme často zabezpečiť pristavenie kontajnera aj v deň objednávky alebo nasledujúci deň, v závislosti od aktuálneho vyťaženia našich kapacít. Pre dlhodobý prenájom kontajnerov (napr. na väčšie stavby alebo rekonštrukcie v Nitre) odporúčame rezerváciu aspoň týždeň vopred. Flexibilitu v termínoch vieme ponúknuť najmä stálym klientom v Nitre, s ktorými máme nadviazanú dlhodobú spoluprácu. V prípade potreby špecifického času pristavenia (napr. večerné hodiny alebo skoré ráno) je vhodné túto požiadavku uviesť pri objednávke.",
            },
            {
              question:
                "Aké veľkosti kontajnerov ponúkate pre odvoz stavebného odpadu v Nitre?",
              answer:
                "V Nitre a okolí ponúkame rôzne veľkosti kontajnerov na stavebný odpad, aby sme vyhoveli potrebám každého projektu. Naša flotila zahŕňa: Malé kontajnery (3-4 m³) - ideálne na menšie rekonštrukcie bytov, kúpeľní či kuchýň v bytových domoch Nitry. Tieto kontajnery sú vhodné aj do užších priestorov a na miesta s obmedzeným prístupom. Stredné kontajnery (5-7 m³) - najčastejšie využívaná veľkosť, vhodná na bežné rekonštrukcie domov a bytov v Nitre. Pojmú približne sutinu z rekonštrukcie jedného 3-izbového bytu. Veľké kontajnery (9-12 m³) - určené na rozsiahle rekonštrukcie alebo demolácie rodinných domov v Nitre a okolí. Ideálne riešenie pre stavebné firmy alebo väčšie projekty. Pre špecifické potreby v niektorých lokalitách Nitry (najmä historické centrum alebo úzke uličky) disponujeme aj špeciálnymi kontajnermi s menšími rozmermi, ktoré sa zmestia do obmedzených priestorov. Pri objednávke vám odporučíme optimálnu veľkosť kontajnera pre váš projekt, aby ste neplatili za zbytočne veľký kontajner, ale zároveň mali dostatočnú kapacitu pre váš odpad.",
            },
            {
              question:
                "Môžem v Nitre umiestniť kontajner na verejné priestranstvo?",
              answer:
                "Áno, v Nitre je možné umiestniť kontajner na verejné priestranstvo (napríklad na parkovacie miesto pred domom alebo na chodník), avšak je potrebné dodržať určité pravidlá. Podľa platných predpisov mesta Nitra je na umiestnenie kontajnera na verejnom priestranstve zvyčajne potrebné povolenie na záber verejného priestranstva, ktoré vydáva príslušný mestský úrad. Tento proces zahŕňa podanie žiadosti a zaplatenie poplatku, ktorého výška závisí od plochy záberu a doby umiestnenia kontajnera. V niektorých prípadoch (najmä pri krátkodobom umiestnení do 24 hodín) môže postačovať zjednodušené ohlásenie. Naša spoločnosť má bohaté skúsenosti s vybavovaním potrebných povolení v Nitre a môžeme vám s týmto procesom pomôcť, prípadne ho za vás kompletne vybaviť. Zároveň dbáme na to, aby bol kontajner umiestnený bezpečne, označený reflexnými prvkami a nebránil plynulosti cestnej premávky. V niektorých častiach Nitry (najmä v historickom centre alebo na sídliskách s nedostatkom parkovacích miest) môžu platiť špecifické obmedzenia alebo zákazy umiestnenia kontajnerov, o ktorých vás budeme informovať.",
            },
            {
              question:
                "Existujú v Nitre nejaké špecifické predpisy pre likvidáciu stavebného odpadu?",
              answer:
                "Áno, v Nitre, podobne ako v iných mestách na Slovensku, platia určité špecifické predpisy týkajúce sa likvidácie stavebného odpadu. Mesto Nitra má vlastné všeobecne záväzné nariadenie (VZN) o nakladaní s komunálnymi odpadmi a drobnými stavebnými odpadmi, ktoré upravuje aj nakladanie so stavebným odpadom. Podľa týchto predpisov musí byť stavebný odpad likvidovaný na legálnych skládkach alebo v recyklačných zariadeniach, ktoré majú príslušné povolenia. Producent stavebného odpadu (stavebník) je povinný zabezpečiť jeho likvidáciu v súlade s týmito predpismi. V prípade väčších stavebných projektov v Nitre je často potrebné predložiť plán nakladania so stavebným odpadom ako súčasť stavebného povolenia. Po likvidácii odpadu je nutné mať doklad o jeho odovzdaní na legálnu skládku alebo do recyklačného zariadenia, ktorý môže byť vyžadovaný pri kolaudácii alebo kontrole zo strany úradov. Naša spoločnosť zabezpečuje odvoz a likvidáciu stavebného odpadu v Nitre plne v súlade s týmito predpismi a poskytujeme klientom všetku potrebnú dokumentáciu. Máme skúsenosti s požiadavkami nitrianskych úradov a dokážeme zabezpečiť, aby likvidácia vášho stavebného odpadu prebehla bezproblémovo a v súlade so všetkými právnymi predpismi.",
            },
          ];
  // Custom data for Hero section with Nitra-specific content
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu Nitra",
    description:
      "Profesionálne a rýchle služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu a sutiny v Nitre a okolí. Zabezpečíme odvoz odpadu po rekonštrukcii, demolácii alebo výstavbe za výhodné ceny s kompletnými dokladmi o likvidácii.",
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

  // Nitra and nearby locations for services
  const nitraLocations = [
    "Nitra",
    "Dolné Krškany",
    "Horné Krškany",
    "Chrenová",
    "Janíkovce",
    "Dražovce",
    "Zobor",
    "Klokočina",
    "Čermáň",
    "Mlynárce",
    "Kynek",
    "Párovské Háje",
    "Ivanka pri Nitre",
    "Lužianky",
    "Nitrianske Hrnčiarovce",
    "Štitáre",
    "Veľké Zálužie",
    "Cabaj-Čápor",
    "Branč",
    "Mojmírovce",
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

      {/* Serving Nitra and surrounding areas */}
      <div className="py-16">
        <LocationMap
          title="Služby vývozu stavebného odpadu poskytujeme v celej Nitre"
          description="Pôsobíme vo všetkých mestských častiach Nitry a okolí"
          locations={nitraLocations}
          additionalText="Zabezpečujeme odvoz a likvidáciu stavebného odpadu aj v ďalších mestách a obciach v Nitrianskom kraji. Ak vaša lokalita nie je uvedená v zozname, kontaktujte nás a radi vám poskytneme informácie o dostupnosti našich služieb aj vo vašej oblasti."
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
      <div>
        <FAQ
          title="Často kladené otázky o vývoze a likvidácii stavebného odpadu v Nitre"
          items={[
            {
              question: "Aká je cena za vývoz stavebného odpadu v Nitre?",
              answer:
                "Cena za vývoz stavebného odpadu v Nitre závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Nitre alebo okolí, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru alebo skládke. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). V niektorých častiach Nitry s obmedzeným prístupom (napr. historické centrum alebo úzke uličky) môže byť cena mierne vyššia kvôli potrebe použitia špeciálnych vozidiel. Pre klientov z Nitry a blízkeho okolia ponúkame zvýhodnené ceny najmä pri pravidelných odvozoch alebo väčších objemoch. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú nezáväznú obhliadku priamo na mieste v Nitre.",
            },
            {
              question:
                "Koľko vopred je potrebné objednať kontajner na stavebný odpad v Nitre?",
              answer:
                "V Nitre a okolí sa snažíme vyjsť našim klientom maximálne v ústrety, čo sa týka termínov pristavenia kontajnerov. Pri štandardných požiadavkách odporúčame objednať kontajner aspoň 1-2 pracovné dni vopred, aby sme mohli zabezpečiť optimálne plánovanie trás a dodržať požadovaný termín. Počas najvyťaženejších období stavebnej sezóny (jar a jeseň) môže byť vhodné objednať kontajner aj 3-4 dni vopred. V prípade urgentnej potreby však vieme často zabezpečiť pristavenie kontajnera aj v deň objednávky alebo nasledujúci deň, v závislosti od aktuálneho vyťaženia našich kapacít. Pre dlhodobý prenájom kontajnerov (napr. na väčšie stavby alebo rekonštrukcie v Nitre) odporúčame rezerváciu aspoň týždeň vopred. Flexibilitu v termínoch vieme ponúknuť najmä stálym klientom v Nitre, s ktorými máme nadviazanú dlhodobú spoluprácu. V prípade potreby špecifického času pristavenia (napr. večerné hodiny alebo skoré ráno) je vhodné túto požiadavku uviesť pri objednávke.",
            },
            {
              question:
                "Aké veľkosti kontajnerov ponúkate pre odvoz stavebného odpadu v Nitre?",
              answer:
                "V Nitre a okolí ponúkame rôzne veľkosti kontajnerov na stavebný odpad, aby sme vyhoveli potrebám každého projektu. Naša flotila zahŕňa: Malé kontajnery (3-4 m³) - ideálne na menšie rekonštrukcie bytov, kúpeľní či kuchýň v bytových domoch Nitry. Tieto kontajnery sú vhodné aj do užších priestorov a na miesta s obmedzeným prístupom. Stredné kontajnery (5-7 m³) - najčastejšie využívaná veľkosť, vhodná na bežné rekonštrukcie domov a bytov v Nitre. Pojmú približne sutinu z rekonštrukcie jedného 3-izbového bytu. Veľké kontajnery (9-12 m³) - určené na rozsiahle rekonštrukcie alebo demolácie rodinných domov v Nitre a okolí. Ideálne riešenie pre stavebné firmy alebo väčšie projekty. Pre špecifické potreby v niektorých lokalitách Nitry (najmä historické centrum alebo úzke uličky) disponujeme aj špeciálnymi kontajnermi s menšími rozmermi, ktoré sa zmestia do obmedzených priestorov. Pri objednávke vám odporučíme optimálnu veľkosť kontajnera pre váš projekt, aby ste neplatili za zbytočne veľký kontajner, ale zároveň mali dostatočnú kapacitu pre váš odpad.",
            },
            {
              question:
                "Môžem v Nitre umiestniť kontajner na verejné priestranstvo?",
              answer:
                "Áno, v Nitre je možné umiestniť kontajner na verejné priestranstvo (napríklad na parkovacie miesto pred domom alebo na chodník), avšak je potrebné dodržať určité pravidlá. Podľa platných predpisov mesta Nitra je na umiestnenie kontajnera na verejnom priestranstve zvyčajne potrebné povolenie na záber verejného priestranstva, ktoré vydáva príslušný mestský úrad. Tento proces zahŕňa podanie žiadosti a zaplatenie poplatku, ktorého výška závisí od plochy záberu a doby umiestnenia kontajnera. V niektorých prípadoch (najmä pri krátkodobom umiestnení do 24 hodín) môže postačovať zjednodušené ohlásenie. Naša spoločnosť má bohaté skúsenosti s vybavovaním potrebných povolení v Nitre a môžeme vám s týmto procesom pomôcť, prípadne ho za vás kompletne vybaviť. Zároveň dbáme na to, aby bol kontajner umiestnený bezpečne, označený reflexnými prvkami a nebránil plynulosti cestnej premávky. V niektorých častiach Nitry (najmä v historickom centre alebo na sídliskách s nedostatkom parkovacích miest) môžu platiť špecifické obmedzenia alebo zákazy umiestnenia kontajnerov, o ktorých vás budeme informovať.",
            },
            {
              question:
                "Existujú v Nitre nejaké špecifické predpisy pre likvidáciu stavebného odpadu?",
              answer:
                "Áno, v Nitre, podobne ako v iných mestách na Slovensku, platia určité špecifické predpisy týkajúce sa likvidácie stavebného odpadu. Mesto Nitra má vlastné všeobecne záväzné nariadenie (VZN) o nakladaní s komunálnymi odpadmi a drobnými stavebnými odpadmi, ktoré upravuje aj nakladanie so stavebným odpadom. Podľa týchto predpisov musí byť stavebný odpad likvidovaný na legálnych skládkach alebo v recyklačných zariadeniach, ktoré majú príslušné povolenia. Producent stavebného odpadu (stavebník) je povinný zabezpečiť jeho likvidáciu v súlade s týmito predpismi. V prípade väčších stavebných projektov v Nitre je často potrebné predložiť plán nakladania so stavebným odpadom ako súčasť stavebného povolenia. Po likvidácii odpadu je nutné mať doklad o jeho odovzdaní na legálnu skládku alebo do recyklačného zariadenia, ktorý môže byť vyžadovaný pri kolaudácii alebo kontrole zo strany úradov. Naša spoločnosť zabezpečuje odvoz a likvidáciu stavebného odpadu v Nitre plne v súlade s týmito predpismi a poskytujeme klientom všetku potrebnú dokumentáciu. Máme skúsenosti s požiadavkami nitrianskych úradov a dokážeme zabezpečiť, aby likvidácia vášho stavebného odpadu prebehla bezproblémovo a v súlade so všetkými právnymi predpismi.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete odviezť stavebný odpad v Nitre?"
          description="Zbavte sa stavebného odpadu rýchlo, legálne a bez námahy. Náš tím zabezpečí kompletný vývoz a ekologickú likvidáciu všetkého stavebného odpadu v Nitre a okolí za výhodné ceny. Šetrite svoj čas a energiu - kontaktujte nás ešte dnes!"
          buttonText="Získať cenovú ponuku"
        />
      </div>
    
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Búranie a demolácia","description":"Profesionálne búranie stien, predelov a objektov.","href":"/buranie-demolacia-domov-bytov","icon":"/icons/crane_icon.svg"},{"title":"Likvidácia nebezpečného odpadu","description":"Bezpečná likvidácia starých spotrebičov a nebezpečného odpadu.","href":"/likvidacia-nebezpecneho-odpadu-starych-spotrebicov","icon":"/icons/hazmat_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/broom_icon.svg"},{"title":"Čistenie a vypratávanie pozemkov","description":"Kompletné čistenie a vypratávanie pozemkov.","href":"/cistenie-vypratavanie-pozemkov-nehnutelnosti","icon":"/icons/landscape_icon.svg"}]}
      />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
