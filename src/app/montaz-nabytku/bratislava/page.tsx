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
  title: "Montáž a skladanie nábytku Bratislava | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti montáže a skladania nábytku v Bratislave ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "montaz nabytku bratislava, montáž nábytku bratislava, montáž garniže bratislava, skladanie nabytku bratislava, skladanie nábytku bratislava, poskladanie nábytku bratislava, montáž kuchynskej linky bratislava, montáž postele bratislava, montáž skrine bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/montaz-nabytku/bratislava",
      languages: {
        sk: "https://www.sofoservis.sk/montaz-nabytku/bratislava",
        en: "https://www.sofoservis.sk/en/furniture-assembly-bratislava",
        "x-default": "https://www.sofoservis.sk/montaz-nabytku/bratislava",
      },
  },
};

export default function MontazNabytkuBratislavaPage() {
  const faqItems = [
            {
              question:
                "Ako rýchlo viete zabezpečiť montáž nábytku v Bratislave?",
              answer:
                "V Bratislave a okolí dokážeme vo väčšine prípadov zabezpečiť montáž nábytku do 24-48 hodín od objednania služby. V urgentných prípadoch sa snažíme poskytnúť služby ešte v ten istý deň, v závislosti od aktuálnej vyťaženosti našich montážnych tímov. Najrýchlejšie vybavenie zaručíme pri objednávke cez telefón na čísle 0952 044 363.",
            },
            {
              question: "Aké sú ceny za montáž nábytku v Bratislave?",
              answer:
                "Cena za montáž nábytku v Bratislave závisí od viacerých faktorov: typu a zložitosti nábytku, množstva častí, času potrebného na montáž a konkrétnej lokality v Bratislave. Naše orientačné ceny sú: menšie kusy nábytku (stolík, polica): 20-40€; stredne veľký nábytok (posteľ, komoda): 40-70€; kuchynská linka: od 120€/m (vrátane osadenia spotrebičov, bez zapojenia). Pre väčšie projekty alebo montáž viacerých kusov nábytku v Bratislave ponúkame výhodnejšie balíkové ceny. Presná cena vám bude stanovená po bezplatnej konzultácii alebo na základe fotografií a popisu, ktoré nám pošlete.",
            },
            {
              question:
                "Dokážete zabezpečiť montáž nábytku v celej Bratislave a okolí?",
              answer:
                "Áno, naše služby montáže nábytku poskytujeme vo všetkých mestských častiach Bratislavy (Staré Mesto, Ružinov, Nové Mesto, Petržalka, Karlova Ves, Dúbravka, Rača a ďalšie), ako aj v okolitých mestách a obciach (Senec, Pezinok, Stupava, Malacky, Šamorín a iné). V závislosti od vzdialenosti mimo Bratislavy môže byť účtovaný príplatok za dopravu, o ktorom vás vopred informujeme.",
            },
            {
              question: "Aké typy nábytku v Bratislave montujete?",
              answer:
                "V Bratislave montujeme všetky typy nábytku bez ohľadu na výrobcu alebo značku. Cena montáže sa odvíja od množstva práce a času potrebného na poskladanie, nie od ceny samotného nábytku. Montujeme: postele a spálňový nábytok, skrine a šatníky, komody a zásuvkové systémy, kuchynské linky a jednotlivé skrinky, pracovné a jedálenské stoly a stoličky, obývacie steny a TV stojany, garniže a závesné systémy, detský a študentský nábytok, regály a knižnice, záhradný nábytok, kancelársky nábytok. Každý kus nábytku poskladáme podľa priloženého návodu s dôrazom na kvalitu a presnosť.",
            },
            {
              question: "Poskytujete aj montáž garniží v Bratislave?",
              answer:
                "Áno, v Bratislave poskytujeme profesionálnu montáž všetkých typov garniží vrátane stropných, nástenných a napínaných. Zabezpečíme správne ukotvenie do rôznych materiálov stien (sadrokartón, betón, tehla) s použitím vhodných kotviacich prvkov. Disponujeme potrebným náradím vrátane výkonných vŕtačiek, detektorov vedení a presných vodováh. Okrem garniží montujeme aj okenné žalúzie, rolety a závesné systémy. Pre komplexné riešenie vám vieme zabezpečiť aj vŕtanie a montáž obrazov či poličiek.",
            },
          ];
  // Custom data for Hero section
  const heroData = {
    title: "Montáž a skladanie nábytku Bratislava",
    description:
      "Profesionálne služby v oblasti montáže a skladania nábytku v Bratislave a okolí. Naši skúsení odborníci sa postarajú o poskladanie nového nábytku alebo demontáž a presun existujúceho zariadenia rýchlo, precízne a za výhodné ceny v celej Bratislave.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Bratislave",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby montáže nábytku",
    description:
      "Profesionálna montáž nábytku všetkých značiek s vlastným náradím a skúseným tímom. Rýchla a kvalitná montáž pre váš domov.",
    features: [
      {
        image: "/icons/wrench_icon.svg", // Perfect for assembly and tools
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž nábytku z IKEA, JYSK, Asko a iných značiek. Poskladáme akýkoľvek typ nábytku podľa návodu rýchlo a presne s vlastným náradím.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/kitchen_icon.svg", // NEW ICON - For kitchen assembly
        title: "Montáž kuchynských liniek",
        description:
          "Kompletná montáž kuchynských liniek vrátane spotrebičov. Presná inštalácia podľa projektu s funkčným výsledkom.",
        link: "/montaz-kuchyne",
      },
      {
        image: "/icons/furniture_icon.svg", // For furniture moving services
        title: "Sťahovanie nábytku",
        description:
          "Profesionálna demontáž nábytku pred sťahovaním a následná montáž na novom mieste. Bezpečná preprava a inštalácia.",
        link: "/stahovanie-preprava-nabytku",
      },
      {
        image: "/icons/truck_icon.svg", // For moving services
        title: "Sťahovanie bytov a domov",
        description:
          "Kompletné sťahovacie služby vrátane demontáže a montáže nábytku. Presťahujeme váš domov s kompletným servisom.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/curtain_icon.svg", // NEW ICON - For curtains and blinds
        title: "Montáž garniží a závesných systémov",
        description:
          "Profesionálna montáž garniží, závesných systémov a roliet. Zabezpečíme správne upevnenie do rôznych typov stien so všetkými kotviacimi prvkami.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/repair_icon.svg", // NEW ICON - For repairs and adjustments
        title: "Opravy a úpravy nábytku",
        description:
          "Drobné opravy, úpravy a dokončovacie práce na vašom nábytku. Odstránime nedostatky, vŕtame otvory pre káble a zabezpečíme perfektný vzhľad.",
        link: "/hodinovy-manzel-majster",
      },
    ],
  };

  // Bratislava city districts for location map
  const bratislavaDistricts = [
    "Staré Mesto",
    "Ružinov",
    "Nové Mesto",
    "Petržalka",
    "Karlova Ves",
    "Dúbravka",
    "Lamač",
    "Devín",
    "Devínska Nová Ves",
    "Záhorská Bystrica",
    "Rača",
    "Vajnory",
    "Vrakuňa",
    "Podunajské Biskupice",
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

      {/* Location Map - Bratislava districts */}
      <div className="-mb-[50px]">
        <LocationMap
          title="Poskytované služby v celej Bratislave"
          description="Naše služby montáže nábytku poskytujeme vo všetkých mestských častiach Bratislavy"
          locations={bratislavaDistricts}
          additionalText="Okrem Bratislavy poskytujeme služby montáže nábytku aj v okolitých mestách a dedinách ako Senec, Pezinok, Stupava, Malacky, Šamorín a ďalšie. Neváhajte nás kontaktovať pre bližšie informácie o službách vo vašom regióne."
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          title="Spokojní zákazníci v Bratislave"
          showReviewsShowcase={false}
        />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Často kladené otázky o montáži nábytku v Bratislave"
          items={[
            {
              question:
                "Ako rýchlo viete zabezpečiť montáž nábytku v Bratislave?",
              answer:
                "V Bratislave a okolí dokážeme vo väčšine prípadov zabezpečiť montáž nábytku do 24-48 hodín od objednania služby. V urgentných prípadoch sa snažíme poskytnúť služby ešte v ten istý deň, v závislosti od aktuálnej vyťaženosti našich montážnych tímov. Najrýchlejšie vybavenie zaručíme pri objednávke cez telefón na čísle 0952 044 363.",
            },
            {
              question: "Aké sú ceny za montáž nábytku v Bratislave?",
              answer:
                "Cena za montáž nábytku v Bratislave závisí od viacerých faktorov: typu a zložitosti nábytku, množstva častí, času potrebného na montáž a konkrétnej lokality v Bratislave. Naše orientačné ceny sú: menšie kusy nábytku (stolík, polica): 20-40€; stredne veľký nábytok (posteľ, komoda): 40-70€; kuchynská linka: od 120€/m (vrátane osadenia spotrebičov, bez zapojenia). Pre väčšie projekty alebo montáž viacerých kusov nábytku v Bratislave ponúkame výhodnejšie balíkové ceny. Presná cena vám bude stanovená po bezplatnej konzultácii alebo na základe fotografií a popisu, ktoré nám pošlete.",
            },
            {
              question:
                "Dokážete zabezpečiť montáž nábytku v celej Bratislave a okolí?",
              answer:
                "Áno, naše služby montáže nábytku poskytujeme vo všetkých mestských častiach Bratislavy (Staré Mesto, Ružinov, Nové Mesto, Petržalka, Karlova Ves, Dúbravka, Rača a ďalšie), ako aj v okolitých mestách a obciach (Senec, Pezinok, Stupava, Malacky, Šamorín a iné). V závislosti od vzdialenosti mimo Bratislavy môže byť účtovaný príplatok za dopravu, o ktorom vás vopred informujeme.",
            },
            {
              question: "Aké typy nábytku v Bratislave montujete?",
              answer:
                "V Bratislave montujeme všetky typy nábytku bez ohľadu na výrobcu alebo značku. Cena montáže sa odvíja od množstva práce a času potrebného na poskladanie, nie od ceny samotného nábytku. Montujeme: postele a spálňový nábytok, skrine a šatníky, komody a zásuvkové systémy, kuchynské linky a jednotlivé skrinky, pracovné a jedálenské stoly a stoličky, obývacie steny a TV stojany, garniže a závesné systémy, detský a študentský nábytok, regály a knižnice, záhradný nábytok, kancelársky nábytok. Každý kus nábytku poskladáme podľa priloženého návodu s dôrazom na kvalitu a presnosť.",
            },
            {
              question: "Poskytujete aj montáž garniží v Bratislave?",
              answer:
                "Áno, v Bratislave poskytujeme profesionálnu montáž všetkých typov garniží vrátane stropných, nástenných a napínaných. Zabezpečíme správne ukotvenie do rôznych materiálov stien (sadrokartón, betón, tehla) s použitím vhodných kotviacich prvkov. Disponujeme potrebným náradím vrátane výkonných vŕtačiek, detektorov vedení a presných vodováh. Okrem garniží montujeme aj okenné žalúzie, rolety a závesné systémy. Pre komplexné riešenie vám vieme zabezpečiť aj vŕtanie a montáž obrazov či poličiek.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Profesionálna montáž nábytku v Bratislave"
          description="Ušetrite si čas a nervy pri skladaní nábytku v Bratislave. Naši odborníci poskladajú váš nábytok rýchlo, precízne a bez poškodenia. Získajte bezplatnú cenovú ponuku ešte dnes!"
          buttonText="Objednať montáž nábytku v Bratislave"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
    
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Hodinový manžel","description":"Drobné opravy, inštalácie a domáce práce.","href":"/hodinovy-manzel-majster","icon":"/icons/repair_icon.svg"},{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/broom_icon.svg"},{"title":"Búranie a demolácia","description":"Profesionálne búranie stien, predelov a objektov.","href":"/buranie-demolacia-domov-bytov","icon":"/icons/crane_icon.svg"}]}
      />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
