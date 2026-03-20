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
  title: "Odvoz a likvidácia stavebného odpadu Galanta | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu v Galante ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz stavebného odpadu galanta, likvidacia stavebneho odpadu galanta, odvoz sute galanta, vyvoz odpadu galanta, stavebný odpad galanta, kontajner na suť galanta, likvidácia stavebnej sute galanta",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/galanta",
  },
};

export default function OdvozStavebnehoOdpaduGalantaPage() {
  // Custom data for Hero section with Galanta-specific content
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu Galanta",
    description:
      "Profesionálne a rýchle služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu a sutiny v Galante a okolí. Zabezpečíme odvoz odpadu po rekonštrukcii, demolácii alebo výstavbe za výhodné ceny s kompletnými dokladmi o likvidácii.",
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

  // Galanta nearby locations for services
  const galantaLocations = [
    "Galanta",
    "Šaľa",
    "Sereď",
    "Sládkovičovo",
    "Matúškovo",
    "Veľké Úľany",
    "Jelka",
    "Košúty",
    "Dolné Saliby",
    "Horné Saliby",
    "Trstice",
    "Veľká Mača",
    "Topoľnica",
    "Pusté Úľany",
    "Mostová",
    "Čierna Voda",
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

      {/* Serving Galanta and surrounding areas */}
      <div className="py-16">
        <LocationMap
          title="Služby odvozu stavebného odpadu poskytujeme v celej Galante a okolí"
          description="Pôsobíme v Galante a okolitých obciach a mestách"
          locations={galantaLocations}
          additionalText="Okrem uvedených lokalít zabezpečujeme odvoz a likvidáciu stavebného odpadu aj v ďalších obciach v okolí Galanty. Ak máte záujem o naše služby a vaša obec nie je uvedená v zozname, kontaktujte nás a radi vám poskytneme informácie o dostupnosti našich služieb vo vašej lokalite."
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
          title="Často kladené otázky o odvoze a likvidácii stavebného odpadu v Galante"
          items={[
            {
              question: "Aká je cena za odvoz stavebného odpadu v Galante?",
              answer:
                "Cena za odvoz stavebného odpadu v Galante a okolí závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Galante alebo okolitej obci, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). Pre klientov z Galanty a blízkeho okolia ponúkame výhodné ceny vďaka optimalizácii našich trás. Pri väčšom množstve odpadu poskytujeme množstevné zľavy. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú obhliadku priamo na mieste v Galante alebo okolí.",
            },
            {
              question: "Aké typy stavebného odpadu odvážate v Galante?",
              answer:
                "V rámci Galanty a okolia zabezpečujeme odvoz prakticky všetkých typov stavebného odpadu vrátane: stavebnej sute (tehly, betón, omietky, dlažby, obklady), sadrokartónu, minerálnej vlny, polystyrénu, stavebných izolácií, strešnej krytiny, okien a dverí, sanitárnej keramiky, stavebných plastov, konštrukčného dreva, kovových stavebných prvkov a stavebných zmesí. Disponujeme potrebnými povoleniami pre zber a prepravu odpadu v regióne Galanty. Vieme zabezpečiť aj odvoz a likvidáciu nebezpečného stavebného odpadu ako je azbest, kontaminované materiály alebo farby, ale v týchto prípadoch je potrebné dodržať špeciálne postupy pri balení a manipulácii. Pri objednávke vždy špecifikujte typ odpadu, aby sme mohli pripraviť vhodné vozidlo a zabezpečiť správny postup likvidácie v súlade s predpismi platnými v danej oblasti.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť odvoz stavebného odpadu v Galante?",
              answer:
                "V Galante a okolí dokážeme zvyčajne reagovať rýchlo, ak je to potrebné. Pri štandardných požiadavkách zabezpečíme odvoz do 24-48 hodín od objednania. Pri väčších objemoch alebo špeciálnych typoch odpadu môže byť lehota 2-3 dni. V urgentných prípadoch sa vždy snažíme vyjsť v ústrety a zabezpečiť aj expresný odvoz v ten istý deň, samozrejme v závislosti od našich aktuálnych kapacít a vzdialenosti v rámci Galanty a okolia. Pristavenie kontajnera na dlhšiu dobu (napríklad počas rekonštrukcie) je potrebné objednať aspoň 2-3 dni vopred. Odporúčame službu rezervovať v dostatočnom predstihu, najmä počas stavebnej sezóny (jar-jeseň), kedy je dopyt najvyšší. Pre klientov z Galanty a blízkeho okolia dokážeme často ponúknuť flexibilnejšie termíny vďaka pravidelnému pohybu našich vozidiel v tejto oblasti.",
            },
            {
              question:
                "Zabezpečujete aj vypratávanie stavieb alebo domov v Galante?",
              answer:
                "Áno, okrem samotného odvozu stavebného odpadu ponúkame aj komplexné služby vypratávania stavieb, domov, bytov či nebytových priestorov v Galante a okolí. Naši pracovníci zabezpečia kompletné vypratanie priestorov, od vynesenia nábytku, zariadenia a vybavenia až po drobný odpad. Služba je ideálna pri rekonštrukciách, pred demoláciou alebo po kúpe staršej nehnuteľnosti v Galante. Vypratávanie zahŕňa nielen fyzické odstránenie vecí, ale aj ich následné triedenie, odvoz a ekologickú likvidáciu. Materiály, ktoré sa dajú recyklovať alebo ďalej využiť, odovzdávame na príslušné miesta. Taktiež ponúkame aj vypratávanie po zosnulých, vypratávanie pivníc, garáží, podkroví a iných priestorov v Galante a okolí. Cena za vypratávanie závisí od rozsahu prác, typu a množstva odpadu, a prístupnosti lokality v rámci Galanty.",
            },
            {
              question:
                "Je potrebné byť prítomný pri odvoze stavebného odpadu v Galante?",
              answer:
                "Nie je nutné, aby ste boli fyzicky prítomní pri odvoze stavebného odpadu, pokiaľ nám zabezpečíte prístup k odpadu. V Galante a okolí bežne realizujeme odvoz aj bez prítomnosti klienta, stačí nám poskytnúť potrebné informácie o umiestnení odpadu a zabezpečiť k nemu prístup. Pred samotným odvozom sa vždy telefonicky skontaktujeme a dohodneme detaily. Ak sa však jedná o odpad vo vnútorných priestoroch alebo na miestach s obmedzeným prístupom, môže byť vaša prítomnosť alebo prítomnosť vami poverenej osoby potrebná na zabezpečenie vstupu. Pre klientov z Galanty a okolia ponúkame aj možnosť dohodnúť si konkrétny časový interval odvozu, aby vyhovoval vášmu harmonogramu. Po vykonaní služby vám vždy zašleme dokumentáciu o likvidácii odpadu, takže budete mať prehľad o realizácii služby aj bez vašej fyzickej prítomnosti.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete odviezť stavebný odpad v Galante?"
          description="Zbavte sa stavebného odpadu rýchlo, legálne a bez námahy. Náš tím zabezpečí kompletný odvoz a ekologickú likvidáciu všetkého stavebného odpadu v Galante a okolí za výhodné ceny. Šetrite svoj čas a energiu - kontaktujte nás ešte dnes!"
          buttonText="Získať cenovú ponuku"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
