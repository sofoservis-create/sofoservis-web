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
  title: "Hodinový manžel a majster Šaľa | Sofoservis",
  description:
    "Ponúkame profesionálne služby hodinového manžela - opravy, skladanie, údržba bytov a domov v Šali ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "hodinovy manzel sala, hodinový manžel šaľa, hodinovy majster sala, hodinový manžel cena, hodinovy manzel cennik, hodinový manžel šaľa cennik, opravy v domácnosti šaľa, montáž nábytku šaľa",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/sala",
      languages: {
        sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/sala",
        en: "https://www.sofoservis.sk/en/handyman-sala",
        "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/sala",
      },
  },
};

export default function HodinovyManzelMajsterSalaPage() {
  const faqItems = [
            {
              question: "Aké služby poskytuje hodinový manžel v Šali?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Šali?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako často pôsobíte v Šali?",
              answer:
                "V Šali a okolí poskytujeme naše služby pravidelne, zvyčajne niekoľkokrát týždenne podľa dopytu. V závislosti od aktuálnej vyťaženosti dokážeme zabezpečiť výjazd do 24-48 hodín od objednávky, v niektorých prípadoch aj v ten istý deň. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Snažíme sa vychádzať v ústrety našim zákazníkom v Šali, preto ponúkame aj možnosť prác vo večerných hodinách alebo počas víkendov. Pre efektívne plánovanie odporúčame objednať služby aspoň 2-3 dni vopred, pri urgentných prípadoch sa však vždy snažíme nájsť riešenie čo najskôr.",
            },
            {
              question: "V ktorých častiach Šale a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celej Šali vrátane všetkých mestských častí, najmä centrum, mestská časť Veča a všetky sídliská. Okrem samotnej Šale pôsobíme aj v okolitých obciach ako Diakovce, Tešedíkovo, Vlčany, Neded, Selice, Trnovec nad Váhom, Dlhá nad Váhom, Kráľová nad Váhom, Horná Kráľová, Močenok, Hájske a Žihárec. Naše služby sú dostupné aj v širšom regióne vrátane miest ako Galanta, Sereď a Nové Zámky a ich okolí. Pri lokalitách mimo samotnej Šale môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question: "Poskytujete služby aj pre firmy a podniky v Šali?",
              answer:
                "Áno, okrem služieb pre domácnosti poskytujeme v Šali a okolí aj služby pre firmy, podniky a podnikateľov. Naše služby hodinového manžela využívajú mnohé obchodné prevádzky, kancelárie, výrobné podniky a iné podnikateľské subjekty v Šali a okolí. Pre firemných klientov poskytujeme flexibilné termíny vrátane možnosti realizácie prác mimo otváracích hodín, cez víkendy alebo počas sviatkov, aby sme minimalizovali vplyv na ich prevádzku. Dokážeme zabezpečiť široké spektrum služieb od montáže nábytku, inštalácie vybavenia kancelárií a prevádzok, cez opravy a údržbu technických zariadení až po drobné stavebné úpravy. Pre pravidelných firemných klientov ponúkame možnosť výhodných paušálnych zmlúv a prednostných termínov. Samozrejmosťou je vystavenie faktúry s možnosťou odpočtu DPH a poskytnutie záruky na vykonané práce.",
            },
          ];
  // Custom data for Hero section with Šaľa focus
  const heroData = {
    title: "Hodinový manžel a majster Šaľa",
    description:
      "Profesionálne služby hodinového manžela v Šali a okolí pre rýchle a spoľahlivé vyriešenie všetkých drobných opráv, montáží a údržby vo vašej domácnosti. Pôsobíme v celej Šali aj v okolitých obciach.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle:
      "Spoľahlivý hodinový manžel v Šali - vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section optimized for Šaľa
  const featuresData = {
    title: "Komplexné služby hodinového manžela v Šali",
    description:
      "Ponúkame široké spektrum služieb a prác v domácnosti, kancelárii alebo na záhrade v Šali a okolí. Od drobných opráv až po náročnejšie montáže - váš problém vyriešime rýchlo a profesionálne.",
    features: [
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž a skladanie všetkých typov nábytku, policových systémov, kuchynských liniek a domáceho vybavenia v Šali. Pomôžeme vám s nábytkom z IKEA, JYSK, Asko a ďalších predajní.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/curtain_icon.svg", // For curtains and hanging systems
        title: "Inštalácia a montáž doplnkov",
        description:
          "Profesionálna inštalácia a montáž záclon, závesov, žalúzií, svietidiel, obrazov, zrkadiel, držiakov na TV a ďalších bytových doplnkov v Šali a okolí. Spoľahlivo a precízne.",
        link: "/hodinovy-manzel-majster/sala",
      },
      {
        image: "/icons/plumbing_icon.svg", // For plumbing work
        title: "Vodoinštalačné práce v Šali",
        description:
          "Drobné vodoinštalačné opravy a výmeny - kvapkajúce kohútiky, výmena batérií, oprava splachovačov, čistenie odpadov, výmena umývadiel a ďalšie vodoinštalačné práce v Šali a okolí.",
        link: "/hodinovy-manzel-majster/sala",
      },
      {
        image: "/icons/electrical_icon.svg", // For electrical work
        title: "Elektroinštalačné práce",
        description:
          "Základné elektroinštalačné práce v Šali - výmena vypínačov a zásuviek, inštalácia svietidiel, výmena žiaroviek v ťažko dostupných miestach, kontrola elektrospotrebičov.",
        link: "/hodinovy-manzel-majster/sala",
      },
      {
        image: "/icons/paint_icon.svg", // For painting and maintenance work
        title: "Maliarske a údržbárske práce",
        description:
          "Drobné maliarske práce, oprava prasklín v stenách, tmelenie, tapetovanie, výmena podlahových krytín, základné murárske práce a ďalšie údržbárske zásahy v domácnostiach v Šali.",
        link: "/hodinovy-manzel-majster/sala",
      },
      {
        image: "/icons/garden_icon.svg", // For garden and exterior work
        title: "Záhradnícke a exteriérové práce",
        description:
          "Základná údržba záhrady, montáž záhradného nábytku, inštalácia zavlažovacích systémov, oprava plotov, montáž poštových schránok v Šali a blízkom okolí.",
        link: "/hodinovy-manzel-majster/sala",
      },
    ],
  };

  // Šaľa locations for LocationMap
  const salaLocations = [
    "Šaľa - centrum",
    "Šaľa - Veča",
    "Šaľa - sídlisko",
    "Diakovce",
    "Tešedíkovo",
    "Vlčany",
    "Neded",
    "Selice",
    "Trnovec nad Váhom",
    "Dlhá nad Váhom",
    "Kráľová nad Váhom",
    "Horná Kráľová",
    "Močenok",
    "Hájske",
    "Žihárec",
    "Diakovce",
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
          title="Recenzie našich zákazníkov v Šali a okolí"
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

      {/* Šaľa locations section */}
      <div>
        <LocationMap
          title="Služby hodinového manžela v Šali a okolí"
          description="Pôsobíme v Šali aj v okolitých obciach a mestách"
          locations={salaLocations}
          additionalText="Okrem Šale a blízkeho okolia poskytujeme naše služby aj v ďalších mestách regiónu ako Galanta, Sereď, Nové Zámky a ich okolí."
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
          title="Prečo si vybrať našu službu hodinového manžela v Šali"
        />
      </div>

      {/* FAQ section - Šaľa specific */}
      <div>
        <FAQ
          title="Často kladené otázky o službách hodinového manžela v Šali"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel v Šali?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Šali?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako často pôsobíte v Šali?",
              answer:
                "V Šali a okolí poskytujeme naše služby pravidelne, zvyčajne niekoľkokrát týždenne podľa dopytu. V závislosti od aktuálnej vyťaženosti dokážeme zabezpečiť výjazd do 24-48 hodín od objednávky, v niektorých prípadoch aj v ten istý deň. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Snažíme sa vychádzať v ústrety našim zákazníkom v Šali, preto ponúkame aj možnosť prác vo večerných hodinách alebo počas víkendov. Pre efektívne plánovanie odporúčame objednať služby aspoň 2-3 dni vopred, pri urgentných prípadoch sa však vždy snažíme nájsť riešenie čo najskôr.",
            },
            {
              question: "V ktorých častiach Šale a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celej Šali vrátane všetkých mestských častí, najmä centrum, mestská časť Veča a všetky sídliská. Okrem samotnej Šale pôsobíme aj v okolitých obciach ako Diakovce, Tešedíkovo, Vlčany, Neded, Selice, Trnovec nad Váhom, Dlhá nad Váhom, Kráľová nad Váhom, Horná Kráľová, Močenok, Hájske a Žihárec. Naše služby sú dostupné aj v širšom regióne vrátane miest ako Galanta, Sereď a Nové Zámky a ich okolí. Pri lokalitách mimo samotnej Šale môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question: "Poskytujete služby aj pre firmy a podniky v Šali?",
              answer:
                "Áno, okrem služieb pre domácnosti poskytujeme v Šali a okolí aj služby pre firmy, podniky a podnikateľov. Naše služby hodinového manžela využívajú mnohé obchodné prevádzky, kancelárie, výrobné podniky a iné podnikateľské subjekty v Šali a okolí. Pre firemných klientov poskytujeme flexibilné termíny vrátane možnosti realizácie prác mimo otváracích hodín, cez víkendy alebo počas sviatkov, aby sme minimalizovali vplyv na ich prevádzku. Dokážeme zabezpečiť široké spektrum služieb od montáže nábytku, inštalácie vybavenia kancelárií a prevádzok, cez opravy a údržbu technických zariadení až po drobné stavebné úpravy. Pre pravidelných firemných klientov ponúkame možnosť výhodných paušálnych zmlúv a prednostných termínov. Samozrejmosťou je vystavenie faktúry s možnosťou odpočtu DPH a poskytnutie záruky na vykonané práce.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete pomoc hodinového manžela v Šali?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti v Šali do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela v Šali"
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
