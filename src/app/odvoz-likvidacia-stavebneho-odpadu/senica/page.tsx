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
  title: "Odvoz a likvidácia stavebného odpadu Senica | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu v Senici ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz stavebného odpadu senica, likvidacia stavebneho odpadu senica, odvoz sute senica, vyvoz odpadu senica, stavebný odpad senica, kontajner na suť senica, likvidácia odpadu senica",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senica",
      languages: {
        sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senica",
        en: "https://www.sofoservis.sk/en/construction-waste-removal-senica",
        "x-default": "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senica",
      },
  },
};

export default function OdvozStavebnehoOdpaduSenicaPage() {
  const faqItems = [
            {
              question: "Aká je cena za odvoz stavebného odpadu v Senici?",
              answer:
                "Cena za odvoz stavebného odpadu v Senici a okolí závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Senici alebo okolitej obci, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 80€ do 160€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). V Senici a okolí sa snažíme ponúkať konkurencieschopné ceny napriek väčšej vzdialenosti od Bratislavy, kde máme našu základňu. Pre klientov zo Senice poskytujeme množstevné zľavy pri väčšom objeme odpadu alebo pravidelných odvozoch. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú nezáväznú obhliadku priamo na mieste v Senici.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť odvoz stavebného odpadu v Senici?",
              answer:
                "V Senici a okolí sa snažíme plánovať naše služby efektívne, aby sme mohli poskytnúť čo najrýchlejší servis. Pri štandardných požiadavkách dokážeme zvyčajne zabezpečiť odvoz do 2-3 pracovných dní od objednania. Keďže Senica je vzdialená od Bratislavy, plánujeme pravidelné trasy do tohto regiónu, čo nám umožňuje optimalizovať náklady a poskytnúť lepšie ceny. Pre urgentné prípady sa vždy snažíme nájsť riešenie, je však ideálne informovať nás aspoň 2 dni vopred, aby sme mohli váš požiadavok efektívne zaradiť do nášho harmonogramu. Pri plánovaných rekonštrukciách v Senici odporúčame objednať službu aspoň týždeň vopred, najmä počas stavebnej sezóny (jar-jeseň), kedy je dopyt najvyšší. Pre firmy a pravidelných klientov v Senici ponúkame možnosť dohodnúť si dlhodobejší plán odvozov s garantovanými termínmi. V niektorých prípadoch môžeme zabezpečiť aj expresný odvoz, ale v takom prípade môže byť cena vyššia vzhľadom na potrebu špeciálneho plánovania trás.",
            },
            {
              question:
                "Aké druhy kontajnerov ponúkate pre stavebný odpad v Senici?",
              answer:
                "V Senici a okolí ponúkame rôzne typy a veľkosti kontajnerov, aby sme vyhoveli špecifickým potrebám každého projektu. Naša flotila zahŕňa: Malé kontajnery (3-4 m³) - vhodné pre menšie rekonštrukcie bytov, kúpeľní alebo kuchýň. Tieto kontajnery sa zmestia aj do užších priestorov v historickej časti Senice. Stredné kontajnery (5-7 m³) - najčastejšie využívaná veľkosť, ideálna pre bežné rekonštrukcie domov alebo bytov v Senici. Pojmú približne sutinu z kompletnej rekonštrukcie jedného bytu. Veľké kontajnery (9-12 m³) - určené pre rozsiahlejšie projekty, demolácie a väčšie stavby. Vhodné najmä pre stavebné firmy alebo developerov pôsobiacich v regióne Senice. Kontajnery s hákmi alebo reťazami - rôzne systémy nakladania podľa potreby a dostupnosti v danej lokalite. Všetky naše kontajnery sú v dobrom technickom stave, pravidelne kontrolované a označené reflexnými prvkami pre bezpečnosť. V závislosti od typu stavebného odpadu vám odporučíme najvhodnejšiu veľkosť kontajnera, aby ste neplatili za zbytočne veľký kontajner, ale zároveň mali dostatočnú kapacitu na váš odpad. V Senici poskytujeme aj možnosť dlhodobého prenájmu kontajnerov na staveniskách alebo pri rozsiahlejších rekonštrukciách.",
            },
            {
              question:
                "Zabezpečujete aj odvoz nebezpečného stavebného odpadu v Senici?",
              answer:
                "Áno, v Senici a okolí zabezpečujeme aj odvoz a likvidáciu nebezpečného stavebného odpadu v súlade s platnými predpismi. Medzi nebezpečný stavebný odpad, ktorý odvážame, patria: Materiály obsahujúce azbest (eternitové strechy, azbestocementové dosky, izolačné materiály s obsahom azbestu). Pri manipulácii s azbestom dodržiavame prísne bezpečnostné postupy - materiál je pred manipuláciou navlhčený a bezpečne zabalený do špeciálnych nepriepustných obalov. Náterové hmoty, laky, farby a ich obaly obsahujúce nebezpečné látky. Stavebné a izolačné materiály obsahujúce nebezpečné látky. Kontaminovaná zemina a kamenivo, napríklad ropnými látkami. Stavebný odpad obsahujúci PCB (polychlórované bifenyly). Pre odvoz nebezpečného odpadu zo Senice je potrebné dodržať špecifické postupy a mať príslušné povolenia, ktorými naša spoločnosť disponuje. Cena za odvoz nebezpečného stavebného odpadu je zvyčajne vyššia než pri bežnom stavebnom odpade vzhľadom na špeciálne požiadavky na manipuláciu, prepravu a likvidáciu. Po odvezení nebezpečného odpadu vám poskytneme kompletnú dokumentáciu o jeho likvidácii, ktorú môžete potrebovať pre stavebný úrad alebo environmentálne kontroly. Pri objednávke služby v Senici je dôležité vopred špecifikovať, že sa jedná o nebezpečný odpad, aby sme mohli pripraviť vhodné vybavenie a postupy.",
            },
            {
              question:
                "Môžem v Senici objednať len samotný kontajner bez odvozu odpadu?",
              answer:
                "Áno, v Senici a okolí ponúkame aj službu samostatného prenájmu kontajnera bez zabezpečenia odvozu odpadu. Táto služba je dostupná s niekoľkými obmedzeniami a špecifickými podmienkami: Prenájom kontajnera bez odvozu je možný najmä pri dlhodobejších projektoch, kde si klient zabezpečuje vlastnú likvidáciu odpadu. Minimálna doba prenájmu kontajnera je zvyčajne 7 dní. Kontajnery poskytujeme v rôznych veľkostiach od 3m³ do 12m³ podľa potrieb klienta. Cena za prenájom sa odvíja od veľkosti kontajnera a doby prenájmu, pričom zahŕňa dopravu kontajnera na miesto v Senici a jeho vyzdvihnutie po skončení prenájmu. Klient je zodpovedný za obsah kontajnera a zabezpečenie, aby sa v ňom nenachádzal nepovolený odpad. Pri prenájme je vyžadovaná záloha, ktorá je vrátená po bezproblémovom vrátení nepoškodeného kontajnera. Je dôležité si uvedomiť, že podľa platnej legislatívy musí byť stavebný odpad likvidovaný na legálnych skládkach alebo v recyklačných zariadeniach. Ak si teda prenajímate iba kontajner, musíte zabezpečiť, aby bol odpad správne zlikvidovaný a mali ste o tom potrebnú dokumentáciu. V prípade záujmu o túto službu v Senici nás kontaktujte pre podrobnejšie informácie o dostupnosti, cenách a podmienkach prenájmu.",
            },
          ];
  // Custom data for Hero section with Senica-specific content
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu Senica",
    description:
      "Profesionálne a rýchle služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu a sutiny v Senici a okolí. Zabezpečíme odvoz odpadu po rekonštrukcii, demolácii alebo výstavbe za výhodné ceny s kompletnými dokladmi o likvidácii.",
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

  // Senica and nearby locations for services
  const senicaLocations = [
    "Senica",
    "Kunov",
    "Čáčov",
    "Šajdíkove Humence",
    "Dojč",
    "Šaštín-Stráže",
    "Borský Mikuláš",
    "Lakšárska Nová Ves",
    "Prievaly",
    "Jablonica",
    "Cerová",
    "Kúty",
    "Sobotište",
    "Smolinské",
    "Sekule",
    "Moravský Svätý Ján",
    "Borský Svätý Jur",
    "Kuklov",
    "Čáry",
    "Brodské",
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

      {/* Serving Senica and surrounding areas */}
      <div className="py-16">
        <LocationMap
          title="Služby odvozu stavebného odpadu poskytujeme v celej Senici a okolí"
          description="Pôsobíme v Senici a okolitých obciach a mestách"
          locations={senicaLocations}
          additionalText="Okrem uvedených lokalít zabezpečujeme odvoz a likvidáciu stavebného odpadu aj v ďalších mestách a obciach v Záhorskom regióne. Vďaka našej rozsiahlejšej pôsobnosti dokážeme efektívne obsluhovať aj vzdialenejšie lokality. Ak máte záujem o naše služby a vaša obec nie je uvedená v zozname, kontaktujte nás a radi vám poskytneme informácie o dostupnosti našich služieb aj vo vašej lokalite."
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
          title="Často kladené otázky o odvoze a likvidácii stavebného odpadu v Senici"
          items={[
            {
              question: "Aká je cena za odvoz stavebného odpadu v Senici?",
              answer:
                "Cena za odvoz stavebného odpadu v Senici a okolí závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, konkrétna lokalita v Senici alebo okolitej obci, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 80€ do 160€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). V Senici a okolí sa snažíme ponúkať konkurencieschopné ceny napriek väčšej vzdialenosti od Bratislavy, kde máme našu základňu. Pre klientov zo Senice poskytujeme množstevné zľavy pri väčšom objeme odpadu alebo pravidelných odvozoch. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú nezáväznú obhliadku priamo na mieste v Senici.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť odvoz stavebného odpadu v Senici?",
              answer:
                "V Senici a okolí sa snažíme plánovať naše služby efektívne, aby sme mohli poskytnúť čo najrýchlejší servis. Pri štandardných požiadavkách dokážeme zvyčajne zabezpečiť odvoz do 2-3 pracovných dní od objednania. Keďže Senica je vzdialená od Bratislavy, plánujeme pravidelné trasy do tohto regiónu, čo nám umožňuje optimalizovať náklady a poskytnúť lepšie ceny. Pre urgentné prípady sa vždy snažíme nájsť riešenie, je však ideálne informovať nás aspoň 2 dni vopred, aby sme mohli váš požiadavok efektívne zaradiť do nášho harmonogramu. Pri plánovaných rekonštrukciách v Senici odporúčame objednať službu aspoň týždeň vopred, najmä počas stavebnej sezóny (jar-jeseň), kedy je dopyt najvyšší. Pre firmy a pravidelných klientov v Senici ponúkame možnosť dohodnúť si dlhodobejší plán odvozov s garantovanými termínmi. V niektorých prípadoch môžeme zabezpečiť aj expresný odvoz, ale v takom prípade môže byť cena vyššia vzhľadom na potrebu špeciálneho plánovania trás.",
            },
            {
              question:
                "Aké druhy kontajnerov ponúkate pre stavebný odpad v Senici?",
              answer:
                "V Senici a okolí ponúkame rôzne typy a veľkosti kontajnerov, aby sme vyhoveli špecifickým potrebám každého projektu. Naša flotila zahŕňa: Malé kontajnery (3-4 m³) - vhodné pre menšie rekonštrukcie bytov, kúpeľní alebo kuchýň. Tieto kontajnery sa zmestia aj do užších priestorov v historickej časti Senice. Stredné kontajnery (5-7 m³) - najčastejšie využívaná veľkosť, ideálna pre bežné rekonštrukcie domov alebo bytov v Senici. Pojmú približne sutinu z kompletnej rekonštrukcie jedného bytu. Veľké kontajnery (9-12 m³) - určené pre rozsiahlejšie projekty, demolácie a väčšie stavby. Vhodné najmä pre stavebné firmy alebo developerov pôsobiacich v regióne Senice. Kontajnery s hákmi alebo reťazami - rôzne systémy nakladania podľa potreby a dostupnosti v danej lokalite. Všetky naše kontajnery sú v dobrom technickom stave, pravidelne kontrolované a označené reflexnými prvkami pre bezpečnosť. V závislosti od typu stavebného odpadu vám odporučíme najvhodnejšiu veľkosť kontajnera, aby ste neplatili za zbytočne veľký kontajner, ale zároveň mali dostatočnú kapacitu na váš odpad. V Senici poskytujeme aj možnosť dlhodobého prenájmu kontajnerov na staveniskách alebo pri rozsiahlejších rekonštrukciách.",
            },
            {
              question:
                "Zabezpečujete aj odvoz nebezpečného stavebného odpadu v Senici?",
              answer:
                "Áno, v Senici a okolí zabezpečujeme aj odvoz a likvidáciu nebezpečného stavebného odpadu v súlade s platnými predpismi. Medzi nebezpečný stavebný odpad, ktorý odvážame, patria: Materiály obsahujúce azbest (eternitové strechy, azbestocementové dosky, izolačné materiály s obsahom azbestu). Pri manipulácii s azbestom dodržiavame prísne bezpečnostné postupy - materiál je pred manipuláciou navlhčený a bezpečne zabalený do špeciálnych nepriepustných obalov. Náterové hmoty, laky, farby a ich obaly obsahujúce nebezpečné látky. Stavebné a izolačné materiály obsahujúce nebezpečné látky. Kontaminovaná zemina a kamenivo, napríklad ropnými látkami. Stavebný odpad obsahujúci PCB (polychlórované bifenyly). Pre odvoz nebezpečného odpadu zo Senice je potrebné dodržať špecifické postupy a mať príslušné povolenia, ktorými naša spoločnosť disponuje. Cena za odvoz nebezpečného stavebného odpadu je zvyčajne vyššia než pri bežnom stavebnom odpade vzhľadom na špeciálne požiadavky na manipuláciu, prepravu a likvidáciu. Po odvezení nebezpečného odpadu vám poskytneme kompletnú dokumentáciu o jeho likvidácii, ktorú môžete potrebovať pre stavebný úrad alebo environmentálne kontroly. Pri objednávke služby v Senici je dôležité vopred špecifikovať, že sa jedná o nebezpečný odpad, aby sme mohli pripraviť vhodné vybavenie a postupy.",
            },
            {
              question:
                "Môžem v Senici objednať len samotný kontajner bez odvozu odpadu?",
              answer:
                "Áno, v Senici a okolí ponúkame aj službu samostatného prenájmu kontajnera bez zabezpečenia odvozu odpadu. Táto služba je dostupná s niekoľkými obmedzeniami a špecifickými podmienkami: Prenájom kontajnera bez odvozu je možný najmä pri dlhodobejších projektoch, kde si klient zabezpečuje vlastnú likvidáciu odpadu. Minimálna doba prenájmu kontajnera je zvyčajne 7 dní. Kontajnery poskytujeme v rôznych veľkostiach od 3m³ do 12m³ podľa potrieb klienta. Cena za prenájom sa odvíja od veľkosti kontajnera a doby prenájmu, pričom zahŕňa dopravu kontajnera na miesto v Senici a jeho vyzdvihnutie po skončení prenájmu. Klient je zodpovedný za obsah kontajnera a zabezpečenie, aby sa v ňom nenachádzal nepovolený odpad. Pri prenájme je vyžadovaná záloha, ktorá je vrátená po bezproblémovom vrátení nepoškodeného kontajnera. Je dôležité si uvedomiť, že podľa platnej legislatívy musí byť stavebný odpad likvidovaný na legálnych skládkach alebo v recyklačných zariadeniach. Ak si teda prenajímate iba kontajner, musíte zabezpečiť, aby bol odpad správne zlikvidovaný a mali ste o tom potrebnú dokumentáciu. V prípade záujmu o túto službu v Senici nás kontaktujte pre podrobnejšie informácie o dostupnosti, cenách a podmienkach prenájmu.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete odviezť stavebný odpad v Senici?"
          description="Zbavte sa stavebného odpadu rýchlo, legálne a bez námahy. Náš tím zabezpečí kompletný odvoz a ekologickú likvidáciu všetkého stavebného odpadu v Senici a okolí za výhodné ceny. Šetrite svoj čas a energiu - kontaktujte nás ešte dnes!"
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
