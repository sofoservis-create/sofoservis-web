import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Odvoz a likvidácia stavebného odpadu, sute | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu",
    languages: {
      sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu",
      en: "https://www.sofoservis.sk/en/construction-waste-removal",
      "x-default": "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu",
    },
  },
  keywords:
    "odvoz stavebného odpadu, likvidacia stavebneho odpadu, likvidácia stavebného odpadu, vyvoz stavebneho odpadu, odvoz stavebneho odpadu, likvidacia stavebnej sute, odvoz stavebného odpadu cena, cena odvozu stavebneho odpadu, cena za odvoz stavebneho odpadu, likvidácia stavebného odpadu cena, odvoz stavebneho materialu",
  openGraph: {
    title: "Odvoz a likvidácia stavebného odpadu, sute | Sofoservis",
    description:
      "Rýchly odvoz a ekologická likvidácia stavebného odpadu, sute a demolačného materiálu v Bratislave a okolí. Lacné ceny, kontajnery k dispozícii.",
    url: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const odvozStavebnehoOdpaduLocations = [
  { name: "Bratislava", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava" },
  { name: "Galanta", href: "/odvoz-likvidacia-stavebneho-odpadu/galanta" },
  { name: "Hlohovec", href: "/odvoz-likvidacia-stavebneho-odpadu/hlohovec" },
  { name: "Nitra", href: "/odvoz-likvidacia-stavebneho-odpadu/nitra" },
  { name: "Senec", href: "/odvoz-likvidacia-stavebneho-odpadu/senec" },
  { name: "Senica", href: "/odvoz-likvidacia-stavebneho-odpadu/senica" },
  { name: "Trnava", href: "/odvoz-likvidacia-stavebneho-odpadu/trnava" },
];

const faqItems = [
  {
    question: "Aká je cena za odvoz stavebného odpadu?",
    answer:
      "Cena za odvoz stavebného odpadu závisí od viacerých faktorov: množstvo odpadu (objem alebo hmotnosť), typ odpadu, lokalita, prístupnosť miesta nakladania a vzdialenosť k najbližšiemu zbernému dvoru. Orientačne sa ceny za odvoz pohybujú od 70€ do 150€ za kontajner s objemom 5-7m³, pričom v cene je zahrnuté pristavenie kontajnera, odvoz a likvidácia bežného stavebného odpadu (tehly, omietky, betón). Pri väčšom množstve odpadu ponúkame množstevné zľavy. Špeciálne druhy stavebného odpadu (azbest, izolačné materiály s obsahom nebezpečných látok) môžu byť spoplatnené dodatočne. Pre presnú kalkuláciu odporúčame využiť našu bezplatnú obhliadku.",
  },
  {
    question: "Aké typy stavebného odpadu odvážate?",
    answer:
      "Zabezpečujeme odvoz prakticky všetkých typov stavebného odpadu vrátane: stavebnej sute (tehly, betón, omietky, dlažby, obklady), sadrokartónu, minerálnej vlny, polystyrénu, stavebných izolácií, strešnej krytiny, okien a dverí, sanitárnej keramiky, stavebných plastov, konštrukčného dreva, kovových stavebných prvkov a stavebných zmesí. Vieme zabezpečiť aj odvoz a likvidáciu nebezpečného stavebného odpadu ako je azbest, kontaminované materiály alebo farby, ale v týchto prípadoch je potrebné dodržať špeciálne postupy pri balení a manipulácii. Pri objednávke vždy špecifikujte typ odpadu, aby sme mohli pripraviť vhodné vozidlo a zabezpečiť správny postup likvidácie.",
  },
  {
    question: "Ako rýchlo viete zabezpečiť odvoz stavebného odpadu?",
    answer:
      "Rýchlosť odvozu závisí od aktuálneho vyťaženia našich kapacít a objemu vášho odpadu. Pri štandardných požiadavkách dokážeme zabezpečiť odvoz do 24-48 hodín od objednania. Pri väčších objemoch alebo špeciálnych typoch odpadu môže byť lehota 2-3 dni. V urgentných prípadoch sa vždy snažíme vyjsť v ústrety a zabezpečiť aj expresný odvoz v ten istý deň, samozrejme v závislosti od našich možností. Pristavenie kontajnera na dlhšiu dobu (napríklad počas rekonštrukcie) je potrebné objednať aspoň 2-3 dni vopred. Odporúčame službu rezervovať v dostatočnom predstihu, najmä počas stavebnej sezóny (jar-jeseň), kedy je dopyt najvyšší.",
  },
  {
    question: "Potrebujem povolenie na likvidáciu stavebného odpadu?",
    answer:
      "Pre bežnú likvidáciu stavebného odpadu z rekonštrukcie bytu alebo rodinného domu zvyčajne nepotrebujete špeciálne povolenia, pokiaľ využívate služby autorizovanej spoločnosti ako je naša. My disponujeme všetkými potrebnými povoleniami na zber, prepravu a likvidáciu stavebného odpadu. Avšak, pri väčších projektoch ako je demolácia budovy alebo rozsiahla rekonštrukcia, môže stavebný úrad požadovať doklad o spôsobe likvidácie odpadu a potvrdenie o jeho odovzdaní na legálnu skládku. Taktiež pri likvidácii nebezpečného odpadu (napr. azbest) je potrebné dodržať špeciálne postupy a mať príslušné povolenia. V každom prípade vám poskytneme všetky potrebné doklady o likvidácii odpadu, ktoré môžete predložiť príslušným úradom.",
  },
  {
    question: "Vyčistíte priestor po odvoze stavebného odpadu?",
    answer:
      "Áno, súčasťou našich služieb je aj základné vyčistenie priestoru po naložení a odvoze stavebného odpadu. Po odstránení hrubého odpadu priestor vyčistíme od zvyškov sutiny, prachu a drobného odpadu. Za príplatok ponúkame aj komplexnejšie čistenie po stavebných prácach, ktoré zahŕňa dôkladnejšie vyčistenie priestorov, odstránenie stavebného prachu zo stien a podláh, prípadne umytie okien a podláh znečistených pri stavebných prácach. Rozsah čistenia vždy dohodneme vopred podľa vašich požiadaviek. Služba vyčistenia je ideálna pri dokončení rekonštrukcie bytov, domov alebo komerčných priestorov, kde potrebujete rýchlo priestor pripraviť na užívanie.",
  },
];

export default function OdvozStavebnehoOdpaduPage() {
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu, sute",
    description:
      "Profesionálne a rýchle služby v oblasti odvozu a ekologickej likvidácie stavebného odpadu a sutiny. Zabezpečíme odvoz odpadu po rekonštrukcii, demolácii.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby odvozu a likvidácie stavebného odpadu",
    description:
      "Profesionálny odvoz a ekologická likvidácia všetkých typov stavebného odpadu a sutiny s kompletnými dokladmi o likvidácii.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebnej sute a odpadu",
        description:
          "Rýchly a efektívny odvoz stavebnej sute po rekonštrukcii bytu, domu alebo demolácii. Naše vozidlá sú vybavené na prepravu ťažkých materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia odpadu",
        description:
          "Zabezpečujeme ekologickú likvidáciu stavebného odpadu vrátane sutiny, tehál, betónu, omietok a ďalších stavebných materiálov v súlade s environmentálnymi predpismi.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Nakladanie a vynášanie odpadu",
        description:
          "Naši pracovníci zabezpečia kompletné naloženie a vynesenie stavebného odpadu, vrátane vynesenia z vyšších poschodí, pivníc alebo ťažko dostupných miest.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Pristavenie kontajnerov",
        description:
          "Ponúkame pristavenie kontajnerov rôznych veľkostí na stavebný odpad priamo na vašu adresu. Kontajnery sú k dispozícii na krátkodobý aj dlhodobý prenájom.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Odvoz odpadu po demolácii",
        description:
          "Špecializované služby odvozu odpadu po búracích a demolačných prácach. Zabezpečíme odvoz sutiny z kompletných demolácií budov a objektov.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Dokumentácia o likvidácii",
        description:
          "Ku každému odvozu stavebného odpadu poskytujeme kompletnú dokumentáciu o likvidácii, ktorú môžete potrebovať pre stavebný úrad alebo environmentálne kontroly.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/buranie-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/buranie-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/buranie-mascot.svg"
          desktopMascotDynamicHeight
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/buranie-mascot.svg"
          mobileMascotSrc="/images/mascot/buranie-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews />
      </div>

      <HowItWorks />

      <ServicePricing filter={["buracie-prace", "vypratavanie", "stahovanie"]} />

      <div>
        <Reviews showHeadline={true} />
      </div>

      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      <div>
        <InstagramFeed />
      </div>

      <div className="md:mb-[-100px]">
        <LocationMap
          title="Odvoz a likvidácia stavebného odpadu po celom Slovensku"
          description="Naše služby poskytujeme v nasledujúcich mestách a regiónoch."
          locations={odvozStavebnehoOdpaduLocations}
          additionalText="Poskytujeme profesionálny odvoz a ekologickú likvidáciu stavebného odpadu s kompletnou dokumentáciou."
          supporText="Odvážame stavebný odpad vo všetkých regiónoch:"
        />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      <div>
        <FAQ
          title="Často kladené otázky o odvoze a likvidácii stavebného odpadu"
          items={faqItems}
          expandableGroup={{
            label: "Všetko o odvoze stavebného odpadu",
            panels: [
              {
                title: "Druhy stavebného odpadu a ich správna likvidácia",
                content:
                  "Stavebný odpad nie je monolitná kategória — skladá sa z mnohých typov s rôznymi požiadavkami na likvidáciu. Betón, tehly a kamenivo sú inertné odpady a môžu byť recyklované na druhotné suroviny. Drevený odpad (latiny, dosky, laminát) je energeticky zhodnotiteľný. Sadrokarton, sklo a keramika putujú na špeciálne skládky.\n\nNebezpečný odpad — azbest, starý linoleum, farby a laky — si vyžaduje špeciálnu manipuláciu a likvidáciu licencovanou firmou. Náš tím pozná tieto rozdiely a likviduje každý typ odpadu v súlade so zákonom.",
              },
              {
                title: "Ekologická likvidácia — kde skončí váš odpad?",
                content:
                  "Celý odvezený stavebný odpad smeruje na zmluvné certifikované zariadenia v Bratislave a okolí. Inertné materiály (betón, tehly) spracúvajú recyklačné linky — drvením vzniká recyklovaný kamenivo pre stavebníctvo. Drevo a horľavé materiály idú do energetického zhodnotenia.\n\nNa každú zákazku vieme vystaviť doklad o likvidácii odpadu (evidenčný list), ktorý môžete potrebovať pri kolaudácii alebo predaji nehnuteľnosti. Zodpovedná ekologická likvidácia je pre nás samozrejmosťou.",
              },
              {
                title: "Kontajner vs. odvoz ťarbou — čo je výhodnejšie?",
                content:
                  "Pre menšie rekonštrukcie (jedno WC, jedna izba) je výhodnejší priamy odvoz — tím nanesie odpad z priestoru priamo do auta a odvezieme. Pre väčšie zákazky alebo keď práce prebiehajú niekoľko dní, je výhodnejšie požičanie kontajnera (5-10m³), ktorý stojí pred budovou a plníte ho priebežne.\n\nKontajner prenajímame na 3-7 dní, cena zahŕňa dovoz, prenájom aj odvoz. Pri bytových domoch je nutné zabezpečiť povolenie na zabratie verejného priestranstva — poradíme vám, ako to vybaviť.",
              },
              {
                title: "Súbežný odvoz odpadu počas rekonštrukcie",
                content:
                  "Odpad nemusíte čakať hromadiť do konca rekonštrukcie. Ponúkame pravidelné odvozy počas dlhodobých stavebných prác — napríklad raz za týždeň odvezieme vzniknutý odpad a priestor zostane čistý a bezpečný pre pracovníkov.\n\nSúbežný odvoz je obľúbený pri kompletnej rekonštrukcii bytov a rodinných domov. Pracovníci nemusia prekonávať hromady sute a rekonštrukcia prebieha plynulejšie. Cena za pravidelný odvoz je zvyčajne výhodnejšia ako jednorazové zákazky.",
              },
            ],
          }}
        />
      </div>

      <div>
        <CTA
          title="Potrebujete odviezť stavebný odpad?"
          description="Zbavte sa stavebného odpadu rýchlo, legálne a bez námahy. Náš tím zabezpečí kompletný odvoz a ekologickú likvidáciu všetkého stavebného odpadu za výhodné ceny. Šetrite svoj čas a energiu - kontaktujte nás ešte dnes!"
          buttonText="Získať cenovú ponuku"
        />
      </div>

      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Búranie a demolácia", description: "Profesionálne búranie stien, predelov a objektov.", href: "/buranie-demolacia-domov-bytov", icon: "/icons/crane_icon.svg" },
          { title: "Likvidácia nebezpečného odpadu", description: "Bezpečná likvidácia starých spotrebičov a nebezpečného odpadu.", href: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov", icon: "/icons/hazmat_icon.svg" },
          { title: "Vypratávanie bytov a domov", description: "Kompletné vypratanie bytu alebo domu.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Čistenie a vypratávanie pozemkov", description: "Kompletné čistenie a vypratávanie pozemkov.", href: "/cistenie-vypratavanie-pozemkov-nehnutelnosti", icon: "/icons/landscape_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
