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
  title: "Hodinový manžel a majster Piešťany | Sofoservis",
  description:
    "Ponúkame profesionálne služby hodinového manžela - opravy, skladanie, údržba bytov a domov v Piešťanoch ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "hodinovy manzel piestany, hodinový manžel piešťany, hodinovy majster piestany, hodinový manžel cena, hodinovy manzel cennik, hodinový manžel piešťany cennik, opravy v domácnosti piešťany, montáž nábytku piešťany",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/piestany",
      languages: {
        sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/piestany",
        en: "https://www.sofoservis.sk/en/handyman-piestany",
        "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/piestany",
      },
  },
};

export default function HodinovyManzelMajsterPiestanyPage() {
  const faqItems = [
            {
              question: "Aké služby poskytuje hodinový manžel v Piešťanoch?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Piešťanoch?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question:
                "Poskytujete služby pre apartmány a kúpeľné domy v Piešťanoch?",
              answer:
                "Áno, v Piešťanoch máme bohaté skúsenosti s poskytovaním služieb hodinového manžela pre apartmánové domy, penzióny a kúpeľné zariadenia. Vieme, že v kúpeľnom meste ako sú Piešťany je veľa apartmánov a ubytovacích zariadení, ktoré potrebujú pravidelnú údržbu a drobné opravy. Pre majiteľov apartmánov a prevádzkovateľov ubytovacích zariadení ponúkame flexibilné termíny, diskrétny prístup a možnosť pravidelného servisu. Dokážeme zabezpečiť aj urgentné opravy medzi pobytmi hostí. Naši hodinoví manželi vedia efektívne riešiť bežné problémy v ubytovacích zariadeniach ako opravy vodovodných batérií, montáž nábytku, opravy elektrických spotrebičov, výmenu svietidiel, inštaláciu doplnkov (zrkadlá, vešiaky, držiaky), ako aj drobné stavebné úpravy. Pre pravidelných klientov z oblasti ubytovacích služieb máme k dispozícii aj výhodné balíčky služieb.",
            },
            {
              question:
                "V ktorých častiach Piešťan a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celých Piešťanoch vrátane všetkých mestských častí: centrum mesta, sídlisko Adam Trajan, Kanada, Floreát, Kocurice a ďalšie lokality. Okrem samotných Piešťan pôsobíme aj v okolitých obciach ako Moravany nad Váhom, Banka, Ratnovce, Sokolovce, Hubina, Ducové, Drahovce, Veľké Orvište, Trebatice, Krakovany a Vrbové. Služby poskytujeme aj v ďalších mestách v regióne vrátane Hlohovca, Trnavy a Nového Mesta nad Váhom. Pri lokalitách mimo Piešťan môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question:
                "Aké sú platobné možnosti za služby hodinového manžela v Piešťanoch?",
              answer:
                "V Piešťanoch a okolí ponúkame viaceré platobné možnosti pre maximálne pohodlie našich klientov. Primárne prijímame platby v hotovosti po dokončení práce, čo je najobľúbenejší spôsob platby medzi našimi zákazníkmi v Piešťanoch. Pre väčšie zákazky akceptujeme aj bezhotovostné platby prevodom na účet - v takom prípade vystavíme faktúru s potrebnými údajmi. Pre firmy a podnikateľov poskytujeme samozrejme riadne doklady s možnosťou odpočtu DPH. V prípade väčších projektov môže byť dohodnutá záloha vopred, zvyčajne vo výške 30-50% z celkovej sumy. Pre stálych klientov ponúkame aj možnosť platby na faktúru so splatnosťou. Všetky finančné záležitosti vždy jasne komunikujeme pred začiatkom prác, aby nevznikli žiadne nejasnosti.",
            },
          ];
  // Custom data for Hero section with Piešťany focus
  const heroData = {
    title: "Hodinový manžel a majster Piešťany",
    description:
      "Profesionálne služby hodinového manžela v Piešťanoch a okolí pre rýchle a spoľahlivé vyriešenie všetkých drobných opráv, montáží a údržby vo vašej domácnosti. Pôsobíme v celých Piešťanoch aj v okolitých obciach.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle:
      "Spoľahlivý hodinový manžel v Piešťanoch - vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section optimized for Piešťany
  const featuresData = {
    title: "Komplexné služby hodinového manžela v Piešťanoch",
    description:
      "Ponúkame široké spektrum služieb a prác v domácnosti, kancelárii alebo na záhrade v Piešťanoch a okolí. Od drobných opráv až po náročnejšie montáže - váš problém vyriešime rýchlo a profesionálne.",
    features: [
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž a skladanie všetkých typov nábytku, policových systémov, kuchynských liniek a domáceho vybavenia v Piešťanoch. Pomôžeme vám s nábytkom z IKEA, JYSK, Asko a ďalších predajní.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/curtain_icon.svg", // For curtains and hanging systems
        title: "Inštalácia a montáž doplnkov",
        description:
          "Profesionálna inštalácia a montáž záclon, závesov, žalúzií, svietidiel, obrazov, zrkadiel, držiakov na TV a ďalších bytových doplnkov v Piešťanoch a okolí. Spoľahlivo a precízne.",
        link: "/hodinovy-manzel-majster/piestany",
      },
      {
        image: "/icons/plumbing_icon.svg", // For plumbing work
        title: "Vodoinštalačné práce v Piešťanoch",
        description:
          "Drobné vodoinštalačné opravy a výmeny - kvapkajúce kohútiky, výmena batérií, oprava splachovačov, čistenie odpadov, výmena umývadiel a ďalšie vodoinštalačné práce v Piešťanoch a okolí.",
        link: "/hodinovy-manzel-majster/piestany",
      },
      {
        image: "/icons/electrical_icon.svg", // For electrical work
        title: "Elektroinštalačné práce",
        description:
          "Základné elektroinštalačné práce v Piešťanoch - výmena vypínačov a zásuviek, inštalácia svietidiel, výmena žiaroviek v ťažko dostupných miestach, kontrola elektrospotrebičov.",
        link: "/hodinovy-manzel-majster/piestany",
      },
      {
        image: "/icons/paint_icon.svg", // For painting and maintenance work
        title: "Maliarske a údržbárske práce",
        description:
          "Drobné maliarske práce, oprava prasklín v stenách, tmelenie, tapetovanie, výmena podlahových krytín, základné murárske práce a ďalšie údržbárske zásahy v domácnostiach v Piešťanoch.",
        link: "/hodinovy-manzel-majster/piestany",
      },
      {
        image: "/icons/garden_icon.svg", // For garden and exterior work
        title: "Záhradnícke a exteriérové práce",
        description:
          "Základná údržba záhrady, montáž záhradného nábytku, inštalácia zavlažovacích systémov, oprava plotov, montáž poštových schránok v Piešťanoch a blízkom okolí.",
        link: "/hodinovy-manzel-majster/piestany",
      },
    ],
  };

  // Piešťany locations for LocationMap
  const piestanyLocations = [
    "Piešťany - centrum",
    "Piešťany - sídlisko Adam Trajan",
    "Piešťany - Kanada",
    "Piešťany - Floreát",
    "Piešťany - Kocurice",
    "Moravany nad Váhom",
    "Banka",
    "Ratnovce",
    "Sokolovce",
    "Hubina",
    "Ducové",
    "Drahovce",
    "Veľké Orvište",
    "Trebatice",
    "Krakovany",
    "Vrbové",
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
          title="Recenzie našich zákazníkov v Piešťanoch a okolí"
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

      {/* Piešťany locations section */}
      <div>
        <LocationMap
          title="Služby hodinového manžela v Piešťanoch a okolí"
          description="Pôsobíme v Piešťanoch aj v okolitých obciach a mestách"
          locations={piestanyLocations}
          additionalText="Okrem Piešťan a blízkeho okolia poskytujeme naše služby aj v ďalších mestách regiónu ako Hlohovec, Trnava, Nové Mesto nad Váhom a ich okolí."
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
          title="Prečo si vybrať našu službu hodinového manžela v Piešťanoch"
        />
      </div>

      {/* FAQ section - Piešťany specific */}
      <div>
        <FAQ
          title="Často kladené otázky o službách hodinového manžela v Piešťanoch"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel v Piešťanoch?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Piešťanoch?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question:
                "Poskytujete služby pre apartmány a kúpeľné domy v Piešťanoch?",
              answer:
                "Áno, v Piešťanoch máme bohaté skúsenosti s poskytovaním služieb hodinového manžela pre apartmánové domy, penzióny a kúpeľné zariadenia. Vieme, že v kúpeľnom meste ako sú Piešťany je veľa apartmánov a ubytovacích zariadení, ktoré potrebujú pravidelnú údržbu a drobné opravy. Pre majiteľov apartmánov a prevádzkovateľov ubytovacích zariadení ponúkame flexibilné termíny, diskrétny prístup a možnosť pravidelného servisu. Dokážeme zabezpečiť aj urgentné opravy medzi pobytmi hostí. Naši hodinoví manželi vedia efektívne riešiť bežné problémy v ubytovacích zariadeniach ako opravy vodovodných batérií, montáž nábytku, opravy elektrických spotrebičov, výmenu svietidiel, inštaláciu doplnkov (zrkadlá, vešiaky, držiaky), ako aj drobné stavebné úpravy. Pre pravidelných klientov z oblasti ubytovacích služieb máme k dispozícii aj výhodné balíčky služieb.",
            },
            {
              question:
                "V ktorých častiach Piešťan a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celých Piešťanoch vrátane všetkých mestských častí: centrum mesta, sídlisko Adam Trajan, Kanada, Floreát, Kocurice a ďalšie lokality. Okrem samotných Piešťan pôsobíme aj v okolitých obciach ako Moravany nad Váhom, Banka, Ratnovce, Sokolovce, Hubina, Ducové, Drahovce, Veľké Orvište, Trebatice, Krakovany a Vrbové. Služby poskytujeme aj v ďalších mestách v regióne vrátane Hlohovca, Trnavy a Nového Mesta nad Váhom. Pri lokalitách mimo Piešťan môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question:
                "Aké sú platobné možnosti za služby hodinového manžela v Piešťanoch?",
              answer:
                "V Piešťanoch a okolí ponúkame viaceré platobné možnosti pre maximálne pohodlie našich klientov. Primárne prijímame platby v hotovosti po dokončení práce, čo je najobľúbenejší spôsob platby medzi našimi zákazníkmi v Piešťanoch. Pre väčšie zákazky akceptujeme aj bezhotovostné platby prevodom na účet - v takom prípade vystavíme faktúru s potrebnými údajmi. Pre firmy a podnikateľov poskytujeme samozrejme riadne doklady s možnosťou odpočtu DPH. V prípade väčších projektov môže byť dohodnutá záloha vopred, zvyčajne vo výške 30-50% z celkovej sumy. Pre stálych klientov ponúkame aj možnosť platby na faktúru so splatnosťou. Všetky finančné záležitosti vždy jasne komunikujeme pred začiatkom prác, aby nevznikli žiadne nejasnosti.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete pomoc hodinového manžela v Piešťanoch?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti v Piešťanoch do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela v Piešťanoch"
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
