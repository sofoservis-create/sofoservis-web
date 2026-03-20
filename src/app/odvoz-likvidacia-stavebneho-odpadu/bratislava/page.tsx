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
  title: "Odvoz a likvidácia stavebného odpadu Bratislava | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu v Bratislave ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz stavebneho odpadu bratislava, likvidacia stavebneho odpadu bratislava, odvoz sute bratislava, vyvoz odpadu bratislava, odvoz stavebnej sute, likvidácia stavebného odpadu cena, kontajner na suť bratislava",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/bratislava",
  },
};

export default function OdvozStavebnehoOdpaduBratislavaPage() {
  // Custom data for Hero section with Bratislava-specific content
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu Bratislava",
    description:
      "Profesionálne a rýchle služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu a sutiny v Bratislave a okolí. Zabezpečíme odvoz odpadu po rekonštrukcii, demolácii alebo výstavbe za výhodné ceny s kompletnými dokladmi o likvidácii.",
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

  // Bratislava districts for services
  const bratislavaDistricts = [
    "Staré Mesto",
    "Ružinov",
    "Vrakuňa",
    "Podunajské Biskupice",
    "Nové Mesto",
    "Rača",
    "Vajnory",
    "Karlova Ves",
    "Dúbravka",
    "Lamač",
    "Devín",
    "Devínska Nová Ves",
    "Záhorská Bystrica",
    "Petržalka",
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

      {/* Serving Bratislava districts */}
      <div className="py-16">
        <LocationMap
          title="Služby odvozu stavebného odpadu poskytujeme v celej Bratislave"
          description="Pôsobíme vo všetkých mestských častiach Bratislavy"
          locations={bratislavaDistricts}
          additionalText="Samozrejmosťou je aj obsluha okolia Bratislavy vrátane miest ako Stupava, Svätý Jur, Pezinok, Senec, Šamorín a ďalších. Neváhajte nás kontaktovať pre bližšie informácie o službe vo vašej lokalite."
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
          title="Často kladené otázky o odvoze a likvidácii stavebného odpadu v Bratislave"
          items={[
            {
              question: "Aká je cena za odvoz stavebného odpadu v Bratislave?",
              answer:
                "Cena za odvoz stavebného odpadu v Bratislave závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Bratislave, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). V niektorých častiach Bratislavy môže byť cena odlišná vzhľadom na dopravnú situáciu a dostupnosť lokality. Pri väčšom množstve odpadu ponúkame množstevné zľavy. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú obhliadku na mieste v Bratislave.",
            },
            {
              question: "Aké typy stavebného odpadu odvážate v Bratislave?",
              answer:
                "V rámci Bratislavy a okolia zabezpečujeme odvoz prakticky všetkých typov stavebného odpadu vrátane: stavebnej sute (tehly, betón, omietky, dlažby, obklady), sadrokartónu, minerálnej vlny, polystyrénu, stavebných izolácií, strešnej krytiny, okien a dverí, sanitárnej keramiky, stavebných plastov, konštrukčného dreva, kovových stavebných prvkov a stavebných zmesí. Disponujeme potrebnými povoleniami pre zber a prepravu odpadu v Bratislave. Vieme zabezpečiť aj odvoz a likvidáciu nebezpečného stavebného odpadu ako je azbest, kontaminované materiály alebo farby, ale v týchto prípadoch je potrebné dodržať špeciálne postupy pri balení a manipulácii. Pri objednávke vždy špecifikujte typ odpadu, aby sme mohli pripraviť vhodné vozidlo a zabezpečiť správny postup likvidácie v súlade s predpismi platnými v Bratislave.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť odvoz stavebného odpadu v Bratislave?",
              answer:
                "V Bratislave dokážeme zvyčajne reagovať veľmi rýchlo. Pri štandardných požiadavkách zabezpečíme odvoz do 24-48 hodín od objednania. Pri väčších objemoch alebo špeciálnych typoch odpadu môže byť lehota 2-3 dni. V urgentných prípadoch sa vždy snažíme vyjsť v ústrety a zabezpečiť aj expresný odvoz v ten istý deň, samozrejme v závislosti od našich aktuálnych kapacít a dopravnej situácie v Bratislave. Pristavenie kontajnera na dlhšiu dobu (napríklad počas rekonštrukcie) je potrebné objednať aspoň 2-3 dni vopred. Odporúčame službu rezervovať v dostatočnom predstihu, najmä počas stavebnej sezóny (jar-jeseň), kedy je dopyt najvyšší a dopravná situácia v Bratislave náročnejšia.",
            },
            {
              question:
                "Potrebujem povolenie na likvidáciu stavebného odpadu v Bratislave?",
              answer:
                "Pre bežnú likvidáciu stavebného odpadu z rekonštrukcie bytu alebo rodinného domu v Bratislave zvyčajne nepotrebujete špeciálne povolenia, pokiaľ využívate služby autorizovanej spoločnosti ako je naša. My disponujeme všetkými potrebnými povoleniami na zber, prepravu a likvidáciu stavebného odpadu v rámci Bratislavy a celého Slovenska. Avšak, pri väčších projektoch v Bratislave, ako je demolácia budovy alebo rozsiahla rekonštrukcia, môže stavebný úrad požadovať doklad o spôsobe likvidácie odpadu a potvrdenie o jeho odovzdaní na legálnu skládku. Taktiež je dobré vedieť, že v Bratislave môžu byť špecifické požiadavky v niektorých mestských častiach alebo v historickom centre. Pri likvidácii nebezpečného odpadu (napr. azbest) je potrebné dodržať špeciálne postupy a mať príslušné povolenia. V každom prípade vám poskytneme všetky potrebné doklady o likvidácii odpadu, ktoré môžete predložiť príslušným úradom v Bratislave.",
            },
            {
              question:
                "Je možné pristaviť kontajner na verejné priestranstvo v Bratislave?",
              answer:
                "Áno, je to možné, ale v Bratislave sa na to vzťahujú určité pravidlá. Pristavenie kontajnera na verejné priestranstvo (napríklad na parkovacie miesto pred domom) zvyčajne vyžaduje povolenie na záber verejného priestranstva od príslušnej mestskej časti Bratislavy. V niektorých prípadoch, napríklad pri krátkodobom pristavení, môže postačovať ohlásenie. Vďaka našim skúsenostiam vám vieme poradiť, ako v takýchto situáciách postupovať, prípadne vám pomôžeme s vybavením potrebných formalít. Poplatky za záber verejného priestranstva sa líšia v závislosti od konkrétnej mestskej časti Bratislavy, veľkosti zabratej plochy a dĺžky trvania záberu. Pri plánovaní odvozu stavebného odpadu vám odporúčame riešiť túto otázku s dostatočným časovým predstihom.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete odviezť stavebný odpad v Bratislave?"
          description="Zbavte sa stavebného odpadu rýchlo, legálne a bez námahy. Náš tím zabezpečí kompletný odvoz a ekologickú likvidáciu všetkého stavebného odpadu v Bratislave za výhodné ceny. Šetrite svoj čas a energiu - kontaktujte nás ešte dnes!"
          buttonText="Získať cenovú ponuku"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
