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
  title: "Hodinový manžel a majster Galanta | Sofoservis",
  description:
    "Ponúkame profesionálne služby hodinového manžela - opravy, skladanie, údržba bytov a domov v Galante ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "hodinový manžel galanta, hodinovy manzel galanta, hodinový manžel cena, hodinovy manzel cena, hodinovy manzel cennik, hodinový manžel cenník, hodinový manžel galanta cennik, hodinovy manzel galanta cena",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/galanta",
      languages: {
        sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/galanta",
        en: "https://www.sofoservis.sk/en/handyman-galanta",
        "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/galanta",
      },
  },
};

export default function HodinovyManzelMajsterGalantaPage() {
  const faqItems = [
            {
              question: "Aké služby poskytuje hodinový manžel v Galante?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Galante?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako rýchlo viete prísť na obhliadku v Galante?",
              answer:
                "V Galante a okolí sa snažíme reagovať flexibilne podľa našich kapacít. Štandardne zabezpečujeme výjazd do 24-48 hodín od objednávky, v prípade voľných kapacít aj v ten istý deň. Naša dostupnosť závisí od aktuálnej vyťaženosti, presnej lokality v rámci Galanty alebo okolia a typu požadovanej služby. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Pre zákazníkov v Galante ponúkame flexibilné časové bloky vrátane možností vo večerných hodinách alebo počas víkendov. V prípade havarijných situácií (napr. pretekajúci radiátor, porucha elektriny) sa snažíme poskytnúť prioritný servis.",
            },
            {
              question:
                "V ktorých častiach Galanty a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celej Galante a širokom okolí. Konkrétne pokrývame tieto oblasti: mesto Galanta so všetkými časťami, Matúškovo, Gáň, Veľký Grob, Pusté Úľany, Čierna Voda, Košúty, Mostová, Vozokany, Tomášikovo, Dolné Saliby, Horné Saliby, Veľké Úľany, Jelka, Váhovce, Kajal a ďalšie blízke obce. Okrem toho poskytujeme služby aj v ďalších mestách regiónu ako Sereď, Sládkovičovo, Šaľa a Trnava. Pri lokalitách mimo samotnej Galanty môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question: "Poskytujete záruku na vykonané práce v Galante?",
              answer:
                "Áno, na všetky vykonané práce našich hodinových manželov v Galante poskytujeme štandardnú záruku 6 mesiacov. Táto záruka sa vzťahuje na kvalitu odvedenej práce a prípadné skryté vady. Na dodaný materiál sa vzťahuje záruka podľa zákonných podmienok (zvyčajne 24 mesiacov). V prípade reklamácie nás stačí kontaktovať telefonicky alebo emailom, a problém vyriešime v čo najkratšom čase bezplatnou opravou alebo náhradou. Naším cieľom je spokojnosť zákazníkov v Galante a okolí, preto sa vždy snažíme nájsť riešenie aj v prípadoch, ktoré priamo nespadajú pod záručné podmienky. Všetky naše práce vykonávame s maximálnou starostlivosťou a profesionalitou, aby k reklamáciám nedochádzalo.",
            },
          ];
  // Custom data for Hero section with Galanta focus
  const heroData = {
    title: "Hodinový manžel a majster Galanta",
    description:
      "Profesionálne služby hodinového manžela v Galante a okolí pre rýchle a spoľahlivé vyriešenie všetkých drobných opráv, montáží a údržby vo vašej domácnosti. Pôsobíme v Galante aj v okolitých obciach a mestách.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle:
      "Najrýchlejší hodinový manžel v Galante - vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section optimized for Galanta
  const featuresData = {
    title: "Komplexné služby hodinového manžela v Galante",
    description:
      "Ponúkame široké spektrum služieb a prác v domácnosti, kancelárii alebo na záhrade v Galante a okolí. Od drobných opráv až po náročnejšie montáže - váš problém vyriešime rýchlo a profesionálne.",
    features: [
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž a skladanie všetkých typov nábytku, policových systémov, kuchynských liniek a domáceho vybavenia v Galante. Pomôžeme vám s nábytkom z IKEA, JYSK, Asko a ďalších predajní.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/curtain_icon.svg", // For curtains and hanging systems
        title: "Inštalácia a montáž doplnkov",
        description:
          "Profesionálna inštalácia a montáž záclon, závesov, žalúzií, svietidiel, obrazov, zrkadiel, držiakov na TV a ďalších bytových doplnkov v Galante a okolí. Spoľahlivo a precízne.",
        link: "/hodinovy-manzel-majster/galanta",
      },
      {
        image: "/icons/plumbing_icon.svg", // For plumbing work
        title: "Vodoinštalačné práce v Galante",
        description:
          "Drobné vodoinštalačné opravy a výmeny - kvapkajúce kohútiky, výmena batérií, oprava splachovačov, čistenie odpadov, výmena umývadiel a ďalšie vodoinštalačné práce v Galante a okolí.",
        link: "/hodinovy-manzel-majster/galanta",
      },
      {
        image: "/icons/electrical_icon.svg", // For electrical work
        title: "Elektroinštalačné práce",
        description:
          "Základné elektroinštalačné práce v Galante - výmena vypínačov a zásuviek, inštalácia svietidiel, výmena žiaroviek v ťažko dostupných miestach, kontrola elektrospotrebičov.",
        link: "/hodinovy-manzel-majster/galanta",
      },
      {
        image: "/icons/paint_icon.svg", // For painting and maintenance work
        title: "Maliarske a údržbárske práce",
        description:
          "Drobné maliarske práce, oprava prasklín v stenách, tmelenie, tapetovanie, výmena podlahových krytín, základné murárske práce a ďalšie údržbárske zásahy v domácnostiach v Galante.",
        link: "/hodinovy-manzel-majster/galanta",
      },
      {
        image: "/icons/garden_icon.svg", // For garden and exterior work
        title: "Záhradnícke a exteriérové práce",
        description:
          "Základná údržba záhrady, montáž záhradného nábytku, inštalácia zavlažovacích systémov, oprava plotov, montáž poštových schránok v Galante a blízkom okolí.",
        link: "/hodinovy-manzel-majster/galanta",
      },
    ],
  };

  // Galanta locations for LocationMap
  const galantaLocations = [
    "Galanta",
    "Matúškovo",
    "Gáň",
    "Veľký Grob",
    "Pusté Úľany",
    "Čierna Voda",
    "Košúty",
    "Mostová",
    "Vozokany",
    "Tomášikovo",
    "Dolné Saliby",
    "Horné Saliby",
    "Veľké Úľany",
    "Jelka",
    "Váhovce",
    "Kajal",
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
          title="Recenzie našich zákazníkov v Galante a okolí"
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

      {/* Galanta locations section */}
      <div>
        <LocationMap
          title="Služby hodinového manžela v Galante a okolí"
          description="Pôsobíme v Galante a vo všetkých okolitých obciach"
          locations={galantaLocations}
          additionalText="Okrem Galanty a blízkeho okolia poskytujeme naše služby aj v ďalších mestách ako Sereď, Sládkovičovo, Trnava a Šaľa."
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
          title="Prečo si vybrať našu službu hodinového manžela v Galante"
        />
      </div>

      {/* FAQ section - Galanta specific */}
      <div>
        <FAQ
          title="Často kladené otázky o službách hodinového manžela v Galante"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel v Galante?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Galante?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako rýchlo viete prísť na obhliadku v Galante?",
              answer:
                "V Galante a okolí sa snažíme reagovať flexibilne podľa našich kapacít. Štandardne zabezpečujeme výjazd do 24-48 hodín od objednávky, v prípade voľných kapacít aj v ten istý deň. Naša dostupnosť závisí od aktuálnej vyťaženosti, presnej lokality v rámci Galanty alebo okolia a typu požadovanej služby. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Pre zákazníkov v Galante ponúkame flexibilné časové bloky vrátane možností vo večerných hodinách alebo počas víkendov. V prípade havarijných situácií (napr. pretekajúci radiátor, porucha elektriny) sa snažíme poskytnúť prioritný servis.",
            },
            {
              question:
                "V ktorých častiach Galanty a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celej Galante a širokom okolí. Konkrétne pokrývame tieto oblasti: mesto Galanta so všetkými časťami, Matúškovo, Gáň, Veľký Grob, Pusté Úľany, Čierna Voda, Košúty, Mostová, Vozokany, Tomášikovo, Dolné Saliby, Horné Saliby, Veľké Úľany, Jelka, Váhovce, Kajal a ďalšie blízke obce. Okrem toho poskytujeme služby aj v ďalších mestách regiónu ako Sereď, Sládkovičovo, Šaľa a Trnava. Pri lokalitách mimo samotnej Galanty môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question: "Poskytujete záruku na vykonané práce v Galante?",
              answer:
                "Áno, na všetky vykonané práce našich hodinových manželov v Galante poskytujeme štandardnú záruku 6 mesiacov. Táto záruka sa vzťahuje na kvalitu odvedenej práce a prípadné skryté vady. Na dodaný materiál sa vzťahuje záruka podľa zákonných podmienok (zvyčajne 24 mesiacov). V prípade reklamácie nás stačí kontaktovať telefonicky alebo emailom, a problém vyriešime v čo najkratšom čase bezplatnou opravou alebo náhradou. Naším cieľom je spokojnosť zákazníkov v Galante a okolí, preto sa vždy snažíme nájsť riešenie aj v prípadoch, ktoré priamo nespadajú pod záručné podmienky. Všetky naše práce vykonávame s maximálnou starostlivosťou a profesionalitou, aby k reklamáciám nedochádzalo.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete pomoc hodinového manžela v Galante?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti v Galante do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela v Galante"
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
