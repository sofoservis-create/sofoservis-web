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
  title: "Hodinový manžel a majster Levice | Sofoservis",
  description:
    "Ponúkame profesionálne služby hodinového manžela - opravy, skladanie, údržba bytov a domov v Leviciach ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "hodinovy manzel levice, hodinový manžel levice, hodinovy majster levice, hodinový manžel cena, hodinovy manzel cennik, hodinový manžel cenník, hodinový manžel levice cennik, opravy v domácnosti levice",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/levice",
      languages: {
        sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/levice",
        en: "https://www.sofoservis.sk/en/handyman-levice",
        "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/levice",
      },
  },
};

export default function HodinovyManzelMajsterLevicePage() {
  const faqItems = [
            {
              question: "Aké služby poskytuje hodinový manžel v Leviciach?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Leviciach?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako často pôsobíte v Leviciach?",
              answer:
                "V Leviciach a okolí poskytujeme naše služby pravidelne, zvyčajne niekoľkokrát týždenne podľa dopytu. Presný termín realizácie závisí od aktuálnej vyťaženosti a rozsahu požadovaných prác. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Snažíme sa vychádzať v ústrety našim zákazníkom v Leviciach, preto ponúkame aj možnosť prác vo večerných hodinách alebo počas víkendov. Pre efektívne plánovanie odporúčame objednať služby aspoň 2-3 dni vopred, pri urgentných prípadoch sa však vždy snažíme nájsť riešenie čo najskôr.",
            },
            {
              question: "V ktorých častiach Levíc a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celých Leviciach vrátane všetkých mestských častí, sídlisk a okrajových lokalít. Pôsobíme aj v širšom okolí Levíc, konkrétne v obciach a mestách ako: Jur nad Hronom, Horná Seč, Dolná Seč, Kalná nad Hronom, Tekovské Lužany, Mýtne Ludany, Pukanec, Tlmače, Rybník, Šarovce, Kozárovce, Želiezovce, Nový Tekov, Žemberovce a Plášťovce. Okrem toho pokrývame aj ďalšie lokality v levickom okrese, ale aj susedné oblasti. V prípade lokalít mimo samotných Levíc môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question:
                "Aké materiály a náradie používate pri prácach v Leviciach?",
              answer:
                "Pri prácach v Leviciach a okolí používame profesionálne náradie a kvalitné materiály, ktoré zaručujú dlhú životnosť a spoľahlivosť opráv. Naši hodinoví manželi sú vybavení kompletným sortimentom elektrického náradia (vŕtačky, akumulátorové skrutkovače, brúsky, píly), ručného náradia (skrutkovače, kliešte, kladivá, pilníky), meracích prístrojov a špecializovaných nástrojov pre vodoinštalačné a elektroinštalačné práce. Ak ide o spotrebný materiál (upevňovacie prvky, tesnenia, spojky), používame výrobky renomovaných značiek, ktoré spĺňajú aktuálne normy. V prípade špeciálnych požiadaviek na konkrétne značky alebo typy materiálov sa vieme prispôsobiť vašim preferenciám alebo vám poradiť najvhodnejšie riešenie pre vaše potreby. Zákazníci v Leviciach oceňujú našu profesionalitu a kvalitné prevedenie prác.",
            },
          ];
  // Custom data for Hero section with Levice focus
  const heroData = {
    title: "Hodinový manžel a majster Levice",
    description:
      "Profesionálne služby hodinového manžela v Leviciach a okolí pre rýchle a spoľahlivé vyriešenie všetkých drobných opráv, montáží a údržby vo vašej domácnosti. Pôsobíme v celých Leviciach aj v okolitých obciach.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle:
      "Najrýchlejší hodinový manžel v Leviciach - vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section optimized for Levice
  const featuresData = {
    title: "Komplexné služby hodinového manžela v Leviciach",
    description:
      "Ponúkame široké spektrum služieb a prác v domácnosti, kancelárii alebo na záhrade v Leviciach a okolí. Od drobných opráv až po náročnejšie montáže - váš problém vyriešime rýchlo a profesionálne.",
    features: [
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž a skladanie všetkých typov nábytku, policových systémov, kuchynských liniek a domáceho vybavenia v Leviciach. Pomôžeme vám s nábytkom z IKEA, JYSK, Asko a ďalších predajní.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/curtain_icon.svg", // For curtains and hanging systems
        title: "Inštalácia a montáž doplnkov",
        description:
          "Profesionálna inštalácia a montáž záclon, závesov, žalúzií, svietidiel, obrazov, zrkadiel, držiakov na TV a ďalších bytových doplnkov v Leviciach a okolí. Spoľahlivo a precízne.",
        link: "/hodinovy-manzel-majster/levice",
      },
      {
        image: "/icons/plumbing_icon.svg", // For plumbing work
        title: "Vodoinštalačné práce v Leviciach",
        description:
          "Drobné vodoinštalačné opravy a výmeny - kvapkajúce kohútiky, výmena batérií, oprava splachovačov, čistenie odpadov, výmena umývadiel a ďalšie vodoinštalačné práce v Leviciach a okolí.",
        link: "/hodinovy-manzel-majster/levice",
      },
      {
        image: "/icons/electrical_icon.svg", // For electrical work
        title: "Elektroinštalačné práce",
        description:
          "Základné elektroinštalačné práce v Leviciach - výmena vypínačov a zásuviek, inštalácia svietidiel, výmena žiaroviek v ťažko dostupných miestach, kontrola elektrospotrebičov.",
        link: "/hodinovy-manzel-majster/levice",
      },
      {
        image: "/icons/paint_icon.svg", // For painting and maintenance work
        title: "Maliarske a údržbárske práce",
        description:
          "Drobné maliarske práce, oprava prasklín v stenách, tmelenie, tapetovanie, výmena podlahových krytín, základné murárske práce a ďalšie údržbárske zásahy v domácnostiach v Leviciach.",
        link: "/hodinovy-manzel-majster/levice",
      },
      {
        image: "/icons/garden_icon.svg", // For garden and exterior work
        title: "Záhradnícke a exteriérové práce",
        description:
          "Základná údržba záhrady, montáž záhradného nábytku, inštalácia zavlažovacích systémov, oprava plotov, montáž poštových schránok v Leviciach a blízkom okolí.",
        link: "/hodinovy-manzel-majster/levice",
      },
    ],
  };

  // Levice locations for LocationMap
  const leviceLocations = [
    "Levice",
    "Jur nad Hronom",
    "Horná Seč",
    "Kalná nad Hronom",
    "Tekovské Lužany",
    "Mýtne Ludany",
    "Pukanec",
    "Tlmače",
    "Rybník",
    "Šarovce",
    "Kozárovce",
    "Želiezovce",
    "Nový Tekov",
    "Žemberovce",
    "Dolná Seč",
    "Plášťovce",
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
          title="Recenzie našich zákazníkov v Leviciach a okolí"
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

      {/* Levice locations section */}
      <div>
        <LocationMap
          title="Služby hodinového manžela v Leviciach a okolí"
          description="Pôsobíme v Leviciach a vo všetkých okolitých obciach"
          locations={leviceLocations}
          additionalText="Okrem Levíc a blízkeho okolia poskytujeme naše služby aj v ďalších mestách regiónu ako Šahy, Vráble, Tlmače, Želiezovce a ich okolí."
          showCallToAction={true}
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section with full display */}
      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="Prečo si vybrať našu službu hodinového manžela v Leviciach"
        />
      </div>

      {/* FAQ section - Levice specific */}
      <div>
        <FAQ
          title="Často kladené otázky o službách hodinového manžela v Leviciach"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel v Leviciach?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Leviciach?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako často pôsobíte v Leviciach?",
              answer:
                "V Leviciach a okolí poskytujeme naše služby pravidelne, zvyčajne niekoľkokrát týždenne podľa dopytu. Presný termín realizácie závisí od aktuálnej vyťaženosti a rozsahu požadovaných prác. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Snažíme sa vychádzať v ústrety našim zákazníkom v Leviciach, preto ponúkame aj možnosť prác vo večerných hodinách alebo počas víkendov. Pre efektívne plánovanie odporúčame objednať služby aspoň 2-3 dni vopred, pri urgentných prípadoch sa však vždy snažíme nájsť riešenie čo najskôr.",
            },
            {
              question: "V ktorých častiach Levíc a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celých Leviciach vrátane všetkých mestských častí, sídlisk a okrajových lokalít. Pôsobíme aj v širšom okolí Levíc, konkrétne v obciach a mestách ako: Jur nad Hronom, Horná Seč, Dolná Seč, Kalná nad Hronom, Tekovské Lužany, Mýtne Ludany, Pukanec, Tlmače, Rybník, Šarovce, Kozárovce, Želiezovce, Nový Tekov, Žemberovce a Plášťovce. Okrem toho pokrývame aj ďalšie lokality v levickom okrese, ale aj susedné oblasti. V prípade lokalít mimo samotných Levíc môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question:
                "Aké materiály a náradie používate pri prácach v Leviciach?",
              answer:
                "Pri prácach v Leviciach a okolí používame profesionálne náradie a kvalitné materiály, ktoré zaručujú dlhú životnosť a spoľahlivosť opráv. Naši hodinoví manželi sú vybavení kompletným sortimentom elektrického náradia (vŕtačky, akumulátorové skrutkovače, brúsky, píly), ručného náradia (skrutkovače, kliešte, kladivá, pilníky), meracích prístrojov a špecializovaných nástrojov pre vodoinštalačné a elektroinštalačné práce. Ak ide o spotrebný materiál (upevňovacie prvky, tesnenia, spojky), používame výrobky renomovaných značiek, ktoré spĺňajú aktuálne normy. V prípade špeciálnych požiadaviek na konkrétne značky alebo typy materiálov sa vieme prispôsobiť vašim preferenciám alebo vám poradiť najvhodnejšie riešenie pre vaše potreby. Zákazníci v Leviciach oceňujú našu profesionalitu a kvalitné prevedenie prác.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete pomoc hodinového manžela v Leviciach?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti v Leviciach do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela v Leviciach"
          buttonLink="/kontakt"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
    
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"},{"title":"Búranie a demolácia","description":"Profesionálne búranie stien, predelov a objektov.","href":"/buranie-demolacia-domov-bytov","icon":"/icons/crane_icon.svg"},{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/broom_icon.svg"}]}
      />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
