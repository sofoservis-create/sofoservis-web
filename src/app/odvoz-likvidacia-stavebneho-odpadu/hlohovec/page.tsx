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
  title: "Odvoz a likvidácia stavebného odpadu Hlohovec | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu v Hlohovci ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz stavebného odpadu hlohovec, likvidacia stavebneho odpadu hlohovec, odvoz sute hlohovec, vyvoz odpadu hlohovec, stavebný odpad hlohovec, kontajner na suť hlohovec, likvidácia stavebnej sute hlohovec",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/hlohovec",
  },
};

export default function OdvozStavebnehoOdpaduHlohovecPage() {
  // Custom data for Hero section with Hlohovec-specific content
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu Hlohovec",
    description:
      "Profesionálne a rýchle služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu a sutiny v Hlohovci a okolí. Zabezpečíme odvoz odpadu po rekonštrukcii, demolácii alebo výstavbe za výhodné ceny s kompletnými dokladmi o likvidácii.",
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

  // Hlohovec and nearby locations for services
  const hlohovecLocations = [
    "Hlohovec",
    "Leopoldov",
    "Červeník",
    "Madunice",
    "Koplotovce",
    "Drahovce",
    "Dolné Zelenice",
    "Horné Zelenice",
    "Siladice",
    "Šulekovo",
    "Jalšové",
    "Pastuchov",
    "Sasinkovo",
    "Kľačany",
    "Bojničky",
    "Dvorníky",
    "Trakovice",
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

      {/* Serving Hlohovec and surrounding areas */}
      <div className="py-16">
        <LocationMap
          title="Služby odvozu stavebného odpadu poskytujeme v celom Hlohovci a okolí"
          description="Pôsobíme v Hlohovci a okolitých obciach a mestách"
          locations={hlohovecLocations}
          additionalText="Okrem uvedených lokalít zabezpečujeme odvoz a likvidáciu stavebného odpadu aj v ďalších mestách a obciach v okolí Hlohovca, vrátane Trnavy a Piešťan. Ak máte záujem o naše služby a vaša obec nie je uvedená v zozname, kontaktujte nás a radi vám poskytneme informácie o dostupnosti našich služieb vo vašej lokalite."
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
          title="Často kladené otázky o odvoze a likvidácii stavebného odpadu v Hlohovci"
          items={[
            {
              question: "Aká je cena za odvoz stavebného odpadu v Hlohovci?",
              answer:
                "Cena za odvoz stavebného odpadu v Hlohovci a okolí závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Hlohovci alebo okolitej obci, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). Pre klientov z Hlohovca a blízkeho okolia ponúkame zvýhodnené ceny. Pri väčšom množstve odpadu poskytujeme aj množstevné zľavy, ktoré môžu byť výhodné najmä pri rozsiahlejších rekonštrukciách. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú nezáväznú obhliadku priamo na mieste v Hlohovci alebo okolí.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť odvoz stavebného odpadu v Hlohovci?",
              answer:
                "V Hlohovci a okolí dokážeme zvyčajne reagovať veľmi rýchlo. Pri štandardných požiadavkách zabezpečíme odvoz do 24-48 hodín od objednania, v závislosti od aktuálneho vyťaženia našich kapacít. Pri väčších objemoch alebo špeciálnych typoch odpadu môže byť lehota 2-3 dni. Pre obyvateľov Hlohovca a blízkeho okolia sa však vždy snažíme vyjsť maximálne v ústrety a v urgentných prípadoch dokážeme zabezpečiť aj expresný odvoz v ten istý deň. Pristavenie kontajnera na dlhšiu dobu (napríklad počas rekonštrukcie) je vhodné objednať aspoň 2-3 dni vopred. Odporúčame službu rezervovať v dostatočnom predstihu, najmä počas stavebnej sezóny (jar-jeseň), kedy je dopyt najvyšší. Pre klientov z Hlohovca ponúkame aj prioritné termíny v rámci nášho harmonogramu a možnosť flexibilného pristavenia kontajnera.",
            },
            {
              question:
                "Aké spôsoby platby akceptujete pri odvoze odpadu v Hlohovci?",
              answer:
                "Pre klientov v Hlohovci a okolí ponúkame viaceré možnosti platby za naše služby. Najčastejšie využívanou metódou je platba v hotovosti priamo po vykonaní služby, kedy vám naši pracovníci vystavia potvrdenku o zaplatení. Ďalšou možnosťou je bezhotovostná platba prevodom na účet na základe vystavenej faktúry, ktorá je výhodná najmä pre firmy a právnické osoby. Pre pravidelných klientov v Hlohovci a okolí ponúkame možnosť uzatvoriť rámcovú zmluvu s mesačnou fakturáciou, čo je ideálne riešenie pri dlhodobých projektoch. Pri väčších projektoch je možná aj zálohová platba vopred. Všetky naše ceny sú transparentné a zahŕňajú kompletnú službu vrátane dopravy, naloženia odpadu a jeho ekologickej likvidácie. V prípade záujmu o naše služby vám radi poskytneme detailnú cenovú ponuku s presnou špecifikáciou všetkých nákladov.",
            },
            {
              question: "Kam odvážate stavebný odpad z Hlohovca?",
              answer:
                "Stavebný odpad z Hlohovca a okolia odvážame na autorizované skládky a do recyklačných centier, ktoré spĺňajú všetky environmentálne predpisy. Naša spoločnosť kladie veľký dôraz na ekologické nakladanie s odpadom, preto vždy volíme optimálny spôsob likvidácie podľa typu odpadu. Bežný stavebný odpad ako tehly, betón či omietky odvážame do najbližších recyklačných zariadení, kde sa drvia a ďalej spracúvajú na druhotné suroviny, ktoré sa môžu opätovne využiť v stavebníctve. Nerecyklovateľný stavebný odpad končí na legálnych skládkach, ktoré majú potrebné povolenia. Nebezpečný stavebný odpad (ako napríklad azbest) odvážame do špecializovaných zariadení, ktoré sú určené na jeho bezpečnú likvidáciu. Pri každom odvoze odpadu z Hlohovca vám poskytneme dokumentáciu o likvidácii, ktorú môžete potrebovať pre úrady alebo ako doklad o ekologickom nakladaní s odpadom.",
            },
            {
              question:
                "Môžete zabezpečiť odvoz a likvidáciu azbestu v Hlohovci?",
              answer:
                "Áno, pre obyvateľov Hlohovca a okolia zabezpečujeme aj odvoz a likvidáciu azbestu, ktorý patrí medzi nebezpečné odpady. Túto službu realizujeme v súlade s prísnymi bezpečnostnými a environmentálnymi predpismi platnými na Slovensku. Naši pracovníci sú špeciálne vyškolení na manipuláciu s azbestom a používajú potrebné ochranné prostriedky. Pri odvoze azbestu (najčastejšie ide o eternitové strechy, izolačné materiály alebo azbestocementové rúry) postupujeme podľa nariadení na ochranu zdravia a životného prostredia. Azbest sa pred manipuláciou navlhčuje, aby sa minimalizovalo uvoľňovanie vlákien do ovzdušia, a následne sa bezpečne zabalí do špeciálnych nepriepustných obalov. Takto zabezpečený azbest odvážame do zariadení, ktoré majú oprávnenie na jeho likvidáciu. Po odvezení azbestu vám poskytneme potrebnú dokumentáciu o jeho likvidácii, ktorú môžete potrebovať pre stavebný úrad alebo iné inštitúcie. Vzhľadom na špecifické postupy pri manipulácii s azbestom je cena za jeho odvoz a likvidáciu v Hlohovci vyššia než pri bežnom stavebnom odpade.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete odviezť stavebný odpad v Hlohovci?"
          description="Zbavte sa stavebného odpadu rýchlo, legálne a bez námahy. Náš tím zabezpečí kompletný odvoz a ekologickú likvidáciu všetkého stavebného odpadu v Hlohovci a okolí za výhodné ceny. Šetrite svoj čas a energiu - kontaktujte nás ešte dnes!"
          buttonText="Získať cenovú ponuku"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
