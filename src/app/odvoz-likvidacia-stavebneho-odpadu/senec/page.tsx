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
  title: "Odvoz a likvidácia stavebného odpadu Senec | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu v Senci ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz stavebného odpadu senec, likvidacia stavebneho odpadu senec, odvoz sute senec, vyvoz odpadu senec, stavebný odpad senec, kontajner na suť senec, likvidácia odpadu senec",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senec",
      languages: {
        sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senec",
        en: "https://www.sofoservis.sk/en/construction-waste-removal-senec",
        "x-default": "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senec",
      },
  },
};

export default function OdvozStavebnehoOdpaduSenecPage() {
  const faqItems = [
            {
              question: "Aká je cena za odvoz stavebného odpadu v Senci?",
              answer:
                "Cena za odvoz stavebného odpadu v Senci a okolí závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Senci alebo okolitej obci, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). Vzhľadom na blízkosť Bratislavy a našu pravidelnú činnosť v regióne Senca dokážeme ponúknuť veľmi konkurenčné ceny. Pre klientov zo Senca a okolia poskytujeme aj množstevné zľavy pri väčšom objeme odpadu alebo pravidelných odvozoch. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú nezáväznú obhliadku priamo na mieste v Senci.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť odvoz stavebného odpadu v Senci?",
              answer:
                "V Senci a okolí dokážeme zabezpečiť odvoz stavebného odpadu veľmi flexibilne, často už do 24-48 hodín od objednania, v závislosti od aktuálneho vyťaženia našich kapacít. Vďaka strategickej polohe Senca medzi Bratislavou a ďalšími regiónmi, kde pravidelne pôsobíme, máme v tejto oblasti takmer každodenné trasy, čo nám umožňuje efektívne plánovanie a rýchlu dostupnosť služieb. Pri štandardných požiadavkách na odvoz stavebného odpadu zo Senca je ideálne informovať nás 1-2 dni vopred. V urgentných prípadoch sa vždy snažíme vyjsť maximálne v ústrety a podľa možností zabezpečiť aj expresný odvoz v ten istý deň. Pristavenie kontajnera na dlhšiu dobu (napríklad počas celej rekonštrukcie) je vhodné objednať aspoň 2-3 dni vopred, najmä počas stavebnej sezóny (jar-jeseň), kedy je dopyt najvyšší. Pre pravidelných klientov v Senci ponúkame možnosť prednostného vybavenia a garantovaných termínov podľa dohodnutého harmonogramu.",
            },
            {
              question:
                "Je potrebné zabezpečiť povolenie na umiestnenie kontajnera v Senci?",
              answer:
                "Áno, v Senci, podobne ako v iných mestách, je zvyčajne potrebné zabezpečiť povolenie na umiestnenie kontajnera na verejnom priestranstve. Ak plánujete umiestniť kontajner na verejné priestranstvo (chodník, parkovacie miesto, zelený pás), je potrebné požiadať Mestský úrad v Senci o povolenie na zvláštne užívanie verejného priestranstva. Tento proces zahŕňa podanie žiadosti a zaplatenie miestneho poplatku, ktorého výška závisí od plochy záberu a doby umiestnenia kontajnera. V niektorých prípadoch (najmä pri krátkodobom umiestnení do 24 hodín) môže postačovať zjednodušené ohlásenie. Naša spoločnosť má bohaté skúsenosti s vybavovaním potrebných povolení v Senci a môžeme vám s týmto procesom pomôcť, prípadne ho za vás kompletne vybaviť. Ak plánujete umiestniť kontajner na súkromný pozemok (napr. vo vašej záhrade alebo na príjazdovej ceste), povolenie zvyčajne nie je potrebné. V prípade bytových domov je vhodné informovať správcu budovy alebo spoločenstvo vlastníkov. V Senci existujú aj špecifické obmedzenia pre historické časti mesta alebo oblasti so zvláštnym režimom, o ktorých vás budeme informovať pri objednávke.",
            },
            {
              question: "Aké typy odpadu odvážate zo Senca a okolia?",
              answer:
                "V Senci a okolí zabezpečujeme odvoz prakticky všetkých typov stavebného odpadu a sutiny. Medzi najčastejšie odvážané materiály patria: betón, tehly a keramické výrobky z rekonštrukcií a demolácií, zmiešaný stavebný odpad a sutina, omietky, sadrokartón a sadra, minerálna vlna a izolačné materiály, polystyrén a iné tepelné izolácie, strešná krytina (škridla, plech), okná a dvere, sanitárna keramika (umývadlá, vane, WC), dlažby a obklady, stavebné plasty a PVC, drevený stavebný materiál a konštrukcie, kovové stavebné prvky. Vieme zabezpečiť aj odvoz a likvidáciu nebezpečného stavebného odpadu, ako je azbest alebo materiály kontaminované nebezpečnými látkami, avšak v týchto prípadoch je potrebné dodržať špeciálne postupy pri balení a manipulácii. Popri stavebnom odpade vieme zo Senca odviezť aj ostatný odpad, ako starý nábytok, zariadenie domácnosti, elektrospotrebiče a iný objemný odpad. Pri objednávke služby vždy špecifikujte typ odpadu, aby sme mohli pripraviť vhodné vozidlo a zabezpečiť správny postup likvidácie v súlade s predpismi platnými v regióne Senca.",
            },
            {
              question: "Je v cene zahrnuté aj naloženie odpadu v Senci?",
              answer:
                "Áno, v základnej cene našich služieb odvozu stavebného odpadu v Senci je zahrnuté aj naloženie odpadu do kontajnera alebo vozidla. Naši skúsení pracovníci zabezpečia kompletné naloženie odpadu, ktorý je dostupný a pripravený na odvoz. V rámci štandardnej služby pre klientov zo Senca zabezpečujeme: naloženie stavebnej sute a odpadu z dostupných miest, vynášanie odpadu z prízemia budovy alebo dvora, manipuláciu s odpadom a jeho uloženie do kontajnera tak, aby bol prepravný priestor efektívne využitý. Za príplatok ponúkame rozšírené služby, ako: vynášanie odpadu z vyšších poschodí budov (najmä v bytových domoch Senca bez výťahu), rozoberanie väčších kusov nábytku alebo konštrukcií pre jednoduchšiu manipuláciu, vynášanie odpadu z ťažko prístupných miest (pivnice, podkrovia), vynášanie veľmi ťažkých predmetov vyžadujúcich špeciálne vybavenie. V prípade, že máte špecifické požiadavky na naloženie odpadu v Senci, informujte nás o tom pri objednávke a dohodneme presný rozsah služieb a prípadné dodatočné náklady. Pre firmy a developerov v Senci ponúkame aj možnosť dlhodobého prenájmu kontajnera s pravidelným vývozom, kde si nakladanie zabezpečuje klient sám.",
            },
          ];
  // Custom data for Hero section with Senec-specific content
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu Senec",
    description:
      "Profesionálne a rýchle služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu a sutiny v Senci a okolí. Zabezpečíme odvoz odpadu po rekonštrukcii, demolácii alebo výstavbe za výhodné ceny s kompletnými dokladmi o likvidácii.",
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

  // Senec and nearby locations for services
  const senecLocations = [
    "Senec",
    "Veľký Biel",
    "Reca",
    "Boldog",
    "Kráľová pri Senci",
    "Hrubá Borša",
    "Hrubý Šúr",
    "Kostolná pri Dunaji",
    "Nový Svet",
    "Tureň",
    "Nová Dedinka",
    "Tomášov",
    "Malinovo",
    "Ivanka pri Dunaji",
    "Bernolákovo",
    "Chorvátsky Grob",
    "Svätý Martin",
    "Jelka",
    "Čataj",
    "Igram",
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

      {/* Serving Senec and surrounding areas */}
      <div className="py-16">
        <LocationMap
          title="Služby odvozu stavebného odpadu poskytujeme v celom Senci a okolí"
          description="Pôsobíme v Senci a okolitých obciach a mestách"
          locations={senecLocations}
          additionalText="Okrem uvedených lokalít zabezpečujeme odvoz a likvidáciu stavebného odpadu aj v ďalších mestách a obciach v okolí Senca. Vzhľadom na blízkosť Bratislavy dokážeme efektívne obsluhovať aj oblasti na pomedzí týchto regiónov. Ak máte záujem o naše služby a vaša obec nie je uvedená v zozname, kontaktujte nás a radi vám poskytneme informácie o dostupnosti našich služieb aj vo vašej lokalite."
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
          title="Často kladené otázky o odvoze a likvidácii stavebného odpadu v Senci"
          items={[
            {
              question: "Aká je cena za odvoz stavebného odpadu v Senci?",
              answer:
                "Cena za odvoz stavebného odpadu v Senci a okolí závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Senci alebo okolitej obci, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). Vzhľadom na blízkosť Bratislavy a našu pravidelnú činnosť v regióne Senca dokážeme ponúknuť veľmi konkurenčné ceny. Pre klientov zo Senca a okolia poskytujeme aj množstevné zľavy pri väčšom objeme odpadu alebo pravidelných odvozoch. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú nezáväznú obhliadku priamo na mieste v Senci.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť odvoz stavebného odpadu v Senci?",
              answer:
                "V Senci a okolí dokážeme zabezpečiť odvoz stavebného odpadu veľmi flexibilne, často už do 24-48 hodín od objednania, v závislosti od aktuálneho vyťaženia našich kapacít. Vďaka strategickej polohe Senca medzi Bratislavou a ďalšími regiónmi, kde pravidelne pôsobíme, máme v tejto oblasti takmer každodenné trasy, čo nám umožňuje efektívne plánovanie a rýchlu dostupnosť služieb. Pri štandardných požiadavkách na odvoz stavebného odpadu zo Senca je ideálne informovať nás 1-2 dni vopred. V urgentných prípadoch sa vždy snažíme vyjsť maximálne v ústrety a podľa možností zabezpečiť aj expresný odvoz v ten istý deň. Pristavenie kontajnera na dlhšiu dobu (napríklad počas celej rekonštrukcie) je vhodné objednať aspoň 2-3 dni vopred, najmä počas stavebnej sezóny (jar-jeseň), kedy je dopyt najvyšší. Pre pravidelných klientov v Senci ponúkame možnosť prednostného vybavenia a garantovaných termínov podľa dohodnutého harmonogramu.",
            },
            {
              question:
                "Je potrebné zabezpečiť povolenie na umiestnenie kontajnera v Senci?",
              answer:
                "Áno, v Senci, podobne ako v iných mestách, je zvyčajne potrebné zabezpečiť povolenie na umiestnenie kontajnera na verejnom priestranstve. Ak plánujete umiestniť kontajner na verejné priestranstvo (chodník, parkovacie miesto, zelený pás), je potrebné požiadať Mestský úrad v Senci o povolenie na zvláštne užívanie verejného priestranstva. Tento proces zahŕňa podanie žiadosti a zaplatenie miestneho poplatku, ktorého výška závisí od plochy záberu a doby umiestnenia kontajnera. V niektorých prípadoch (najmä pri krátkodobom umiestnení do 24 hodín) môže postačovať zjednodušené ohlásenie. Naša spoločnosť má bohaté skúsenosti s vybavovaním potrebných povolení v Senci a môžeme vám s týmto procesom pomôcť, prípadne ho za vás kompletne vybaviť. Ak plánujete umiestniť kontajner na súkromný pozemok (napr. vo vašej záhrade alebo na príjazdovej ceste), povolenie zvyčajne nie je potrebné. V prípade bytových domov je vhodné informovať správcu budovy alebo spoločenstvo vlastníkov. V Senci existujú aj špecifické obmedzenia pre historické časti mesta alebo oblasti so zvláštnym režimom, o ktorých vás budeme informovať pri objednávke.",
            },
            {
              question: "Aké typy odpadu odvážate zo Senca a okolia?",
              answer:
                "V Senci a okolí zabezpečujeme odvoz prakticky všetkých typov stavebného odpadu a sutiny. Medzi najčastejšie odvážané materiály patria: betón, tehly a keramické výrobky z rekonštrukcií a demolácií, zmiešaný stavebný odpad a sutina, omietky, sadrokartón a sadra, minerálna vlna a izolačné materiály, polystyrén a iné tepelné izolácie, strešná krytina (škridla, plech), okná a dvere, sanitárna keramika (umývadlá, vane, WC), dlažby a obklady, stavebné plasty a PVC, drevený stavebný materiál a konštrukcie, kovové stavebné prvky. Vieme zabezpečiť aj odvoz a likvidáciu nebezpečného stavebného odpadu, ako je azbest alebo materiály kontaminované nebezpečnými látkami, avšak v týchto prípadoch je potrebné dodržať špeciálne postupy pri balení a manipulácii. Popri stavebnom odpade vieme zo Senca odviezť aj ostatný odpad, ako starý nábytok, zariadenie domácnosti, elektrospotrebiče a iný objemný odpad. Pri objednávke služby vždy špecifikujte typ odpadu, aby sme mohli pripraviť vhodné vozidlo a zabezpečiť správny postup likvidácie v súlade s predpismi platnými v regióne Senca.",
            },
            {
              question: "Je v cene zahrnuté aj naloženie odpadu v Senci?",
              answer:
                "Áno, v základnej cene našich služieb odvozu stavebného odpadu v Senci je zahrnuté aj naloženie odpadu do kontajnera alebo vozidla. Naši skúsení pracovníci zabezpečia kompletné naloženie odpadu, ktorý je dostupný a pripravený na odvoz. V rámci štandardnej služby pre klientov zo Senca zabezpečujeme: naloženie stavebnej sute a odpadu z dostupných miest, vynášanie odpadu z prízemia budovy alebo dvora, manipuláciu s odpadom a jeho uloženie do kontajnera tak, aby bol prepravný priestor efektívne využitý. Za príplatok ponúkame rozšírené služby, ako: vynášanie odpadu z vyšších poschodí budov (najmä v bytových domoch Senca bez výťahu), rozoberanie väčších kusov nábytku alebo konštrukcií pre jednoduchšiu manipuláciu, vynášanie odpadu z ťažko prístupných miest (pivnice, podkrovia), vynášanie veľmi ťažkých predmetov vyžadujúcich špeciálne vybavenie. V prípade, že máte špecifické požiadavky na naloženie odpadu v Senci, informujte nás o tom pri objednávke a dohodneme presný rozsah služieb a prípadné dodatočné náklady. Pre firmy a developerov v Senci ponúkame aj možnosť dlhodobého prenájmu kontajnera s pravidelným vývozom, kde si nakladanie zabezpečuje klient sám.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete odviezť stavebný odpad v Senci?"
          description="Zbavte sa stavebného odpadu rýchlo, legálne a bez námahy. Náš tím zabezpečí kompletný odvoz a ekologickú likvidáciu všetkého stavebného odpadu v Senci a okolí za výhodné ceny. Šetrite svoj čas a energiu - kontaktujte nás ešte dnes!"
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
