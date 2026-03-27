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
  title: "Hodinový manžel a majster Nitra | Sofoservis",
  description:
    "Ponúkame profesionálne služby hodinového manžela - opravy, skladanie, údržba bytov a domov v Nitre ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "hodinovy manzel nitra, hodinový manžel nitra, hodinovy majster nitra, hodinový manžel cena, hodinovy manzel cennik, hodinový manžel nitra cennik, domáce opravy nitra, montáž nábytku nitra",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/nitra",
      languages: {
        sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/nitra",
        en: "https://www.sofoservis.sk/en/handyman-nitra",
        "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/nitra",
      },
  },
};

export default function HodinovyManzelMajsterNitraPage() {
  const faqItems = [
            {
              question: "Aké služby poskytuje hodinový manžel v Nitre?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Nitre?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako rýchlo viete prísť na obhliadku v Nitre?",
              answer:
                "V Nitre a okolí sa snažíme reagovať flexibilne podľa našich kapacít. Štandardne zabezpečujeme výjazd do 24-48 hodín od objednávky, v prípade voľných kapacít aj v ten istý deň. Naša dostupnosť závisí od aktuálnej vyťaženosti, presnej lokality v rámci Nitry a typu požadovanej služby. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Pre zákazníkov v Nitre ponúkame flexibilné časové bloky vrátane možností vo večerných hodinách alebo počas víkendov. V prípade havarijných situácií (napr. pretekajúci radiátor, zaseknutý zámok) sa snažíme poskytnúť prioritný servis.",
            },
            {
              question: "V ktorých častiach Nitry a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celej Nitre vrátane všetkých mestských častí: Staré Mesto, Chrenová, Klokočina, Čermáň, Zobor, Diely, Mlynárce, Párovské Háje, Kynek, Dražovce a Janíkovce. Okrem toho pôsobíme aj v okolitých obciach ako Lužianky, Ivanka pri Nitre, Lehota, Jelšovce, Cabaj-Čápor a ďalšie. Naše služby sú dostupné aj v širšom regióne vrátane miest ako Vráble, Zlaté Moravce, Topoľčany a priľahlých obcí. Pri lokalitách mimo samotnej Nitry môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question: "Pracujete aj v bytových domoch a panelákoch v Nitre?",
              answer:
                "Áno, veľká časť našich zákaziek v Nitre prebieha práve v bytových domoch a na panelákových sídliskách ako Klokočina, Chrenová či Diely. Naši hodinoví majstri majú rozsiahle skúsenosti s prácami v bytoch, kde často riešia špecifické výzvy spojené s panelovými konštrukciami. Ovládame techniky vŕtania do panelových stien bez poškodenia rozvodov, montáž nábytku v obmedzených priestoroch a ďalšie špecifické činnosti. Pri práci v bytových domoch sme vždy ohľaduplní k susedom - dodržiavame domový poriadok, pracujeme v povolených hodinách a minimalizujeme hluk a neporiadok. Okrem toho máme skúsenosti aj s administratívnymi postupmi potrebnými pri väčších úpravách v bytových domoch v Nitre a vieme poradiť, ktoré práce vyžadujú súhlas správcu alebo spoločenstva vlastníkov.",
            },
          ];
  // Custom data for Hero section with Nitra focus
  const heroData = {
    title: "Hodinový manžel a majster Nitra",
    description:
      "Profesionálne služby hodinového manžela v Nitre a okolí pre rýchle a spoľahlivé vyriešenie všetkých drobných opráv, montáží a údržby vo vašej domácnosti. Pôsobíme v celej Nitre, vrátane všetkých mestských častí.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle:
      "Najrýchlejší hodinový manžel v Nitre - vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section optimized for Nitra
  const featuresData = {
    title: "Komplexné služby hodinového manžela v Nitre",
    description:
      "Ponúkame široké spektrum služieb a prác v domácnosti, kancelárii alebo na záhrade v Nitre a okolí. Od drobných opráv až po náročnejšie montáže - váš problém vyriešime rýchlo a profesionálne.",
    features: [
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž a skladanie všetkých typov nábytku, policových systémov, kuchynských liniek a domáceho vybavenia v Nitre. Pomôžeme vám s nábytkom z IKEA, JYSK, Asko a ďalších predajní.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/curtain_icon.svg", // For curtains and hanging systems
        title: "Inštalácia a montáž doplnkov",
        description:
          "Profesionálna inštalácia a montáž záclon, závesov, žalúzií, svietidiel, obrazov, zrkadiel, držiakov na TV a ďalších bytových doplnkov v Nitre a okolí. Spoľahlivo a precízne.",
        link: "/hodinovy-manzel-majster/nitra",
      },
      {
        image: "/icons/plumbing_icon.svg", // For plumbing work
        title: "Vodoinštalačné práce v Nitre",
        description:
          "Drobné vodoinštalačné opravy a výmeny - kvapkajúce kohútiky, výmena batérií, oprava splachovačov, čistenie odpadov, výmena umývadiel a ďalšie vodoinštalačné práce v Nitre a okolí.",
        link: "/hodinovy-manzel-majster/nitra",
      },
      {
        image: "/icons/electrical_icon.svg", // For electrical work
        title: "Elektroinštalačné práce",
        description:
          "Základné elektroinštalačné práce v Nitre - výmena vypínačov a zásuviek, inštalácia svietidiel, výmena žiaroviek v ťažko dostupných miestach, kontrola elektrospotrebičov.",
        link: "/hodinovy-manzel-majster/nitra",
      },
      {
        image: "/icons/paint_icon.svg", // For painting and maintenance work
        title: "Maliarske a údržbárske práce",
        description:
          "Drobné maliarske práce, oprava prasklín v stenách, tmelenie, tapetovanie, výmena podlahových krytín, základné murárske práce a ďalšie údržbárske zásahy v domácnostiach v Nitre.",
        link: "/hodinovy-manzel-majster/nitra",
      },
      {
        image: "/icons/garden_icon.svg", // For garden and exterior work
        title: "Záhradnícke a exteriérové práce",
        description:
          "Základná údržba záhrady, montáž záhradného nábytku, inštalácia zavlažovacích systémov, oprava plotov, montáž poštových schránok v Nitre a blízkom okolí.",
        link: "/hodinovy-manzel-majster/nitra",
      },
    ],
  };

  // Nitra locations for LocationMap
  const nitraLocations = [
    "Nitra - Staré Mesto",
    "Nitra - Chrenová",
    "Nitra - Klokočina",
    "Nitra - Čermáň",
    "Nitra - Zobor",
    "Nitra - Diely",
    "Nitra - Mlynárce",
    "Nitra - Párovské Háje",
    "Nitra - Kynek",
    "Nitra - Dražovce",
    "Nitra - Janíkovce",
    "Lužianky",
    "Ivanka pri Nitre",
    "Lehota",
    "Jelšovce",
    "Cabaj-Čápor",
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
          title="Recenzie našich zákazníkov v Nitre a okolí"
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

      {/* Nitra locations section */}
      <div>
        <LocationMap
          title="Služby hodinového manžela v Nitre a okolí"
          description="Pôsobíme v Nitre a vo všetkých mestských častiach a priľahlých obciach"
          locations={nitraLocations}
          additionalText="Okrem Nitry a blízkeho okolia poskytujeme naše služby aj v ďalších mestách regiónu ako Vráble, Zlaté Moravce, Topoľčany a ich okolí."
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
          title="Prečo si vybrať našu službu hodinového manžela v Nitre"
        />
      </div>

      {/* FAQ section - Nitra specific */}
      <div>
        <FAQ
          title="Často kladené otázky o službách hodinového manžela v Nitre"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel v Nitre?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Nitre?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako rýchlo viete prísť na obhliadku v Nitre?",
              answer:
                "V Nitre a okolí sa snažíme reagovať flexibilne podľa našich kapacít. Štandardne zabezpečujeme výjazd do 24-48 hodín od objednávky, v prípade voľných kapacít aj v ten istý deň. Naša dostupnosť závisí od aktuálnej vyťaženosti, presnej lokality v rámci Nitry a typu požadovanej služby. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Pre zákazníkov v Nitre ponúkame flexibilné časové bloky vrátane možností vo večerných hodinách alebo počas víkendov. V prípade havarijných situácií (napr. pretekajúci radiátor, zaseknutý zámok) sa snažíme poskytnúť prioritný servis.",
            },
            {
              question: "V ktorých častiach Nitry a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celej Nitre vrátane všetkých mestských častí: Staré Mesto, Chrenová, Klokočina, Čermáň, Zobor, Diely, Mlynárce, Párovské Háje, Kynek, Dražovce a Janíkovce. Okrem toho pôsobíme aj v okolitých obciach ako Lužianky, Ivanka pri Nitre, Lehota, Jelšovce, Cabaj-Čápor a ďalšie. Naše služby sú dostupné aj v širšom regióne vrátane miest ako Vráble, Zlaté Moravce, Topoľčany a priľahlých obcí. Pri lokalitách mimo samotnej Nitry môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question: "Pracujete aj v bytových domoch a panelákoch v Nitre?",
              answer:
                "Áno, veľká časť našich zákaziek v Nitre prebieha práve v bytových domoch a na panelákových sídliskách ako Klokočina, Chrenová či Diely. Naši hodinoví majstri majú rozsiahle skúsenosti s prácami v bytoch, kde často riešia špecifické výzvy spojené s panelovými konštrukciami. Ovládame techniky vŕtania do panelových stien bez poškodenia rozvodov, montáž nábytku v obmedzených priestoroch a ďalšie špecifické činnosti. Pri práci v bytových domoch sme vždy ohľaduplní k susedom - dodržiavame domový poriadok, pracujeme v povolených hodinách a minimalizujeme hluk a neporiadok. Okrem toho máme skúsenosti aj s administratívnymi postupmi potrebnými pri väčších úpravách v bytových domoch v Nitre a vieme poradiť, ktoré práce vyžadujú súhlas správcu alebo spoločenstva vlastníkov.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete pomoc hodinového manžela v Nitre?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti v Nitre do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela v Nitre"
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
