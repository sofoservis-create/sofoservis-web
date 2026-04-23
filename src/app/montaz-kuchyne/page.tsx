import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

export const metadata = {
  title: "Montáž kuchýň a skladanie kuchyne | Sofoservis",
  description:
    "Profesionálna montáž kuchyne od 120€/m. Demontáž od 60€/m. Výjazd od 20€. Všetky typy kuchynských liniek. Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/montaz-kuchyne",
      languages: {
        sk: "https://www.sofoservis.sk/montaz-kuchyne",
        en: "https://www.sofoservis.sk/en/kitchen-installation",
        "x-default": "https://www.sofoservis.sk/montaz-kuchyne",
      },
  },
  keywords:
    "montáž kuchyne, montáž kuchynskej linky, skladanie kuchyne, inštalácia kuchyne, montáž pracovnej dosky, pripojenie drezu, montáž kuchynských skriniek, montáž kuchynskej linky ikea, montáž kuchyne sykora, montáž drezov, montáž doplnkov do kuchyne",
  openGraph: {
    title: "Montáž kuchýň a skladanie kuchyne | Sofoservis",
    description:
      "Profesionálna montáž kuchyne od 120€/m. Demontáž od 60€/m. Výjazd od 20€. Všetky typy kuchynských liniek.",
    url: "https://www.sofoservis.sk/montaz-kuchyne",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Aká je cena za montáž kuchyne?",
    answer:
      "Montáž kuchyne stojí od 120€/bežný meter. Demontáž od 60€/m. Výjazd od 20€. Cena závisí od dĺžky kuchyne a zložitosti montáže.",
  },
  {
    question: "Ako dlho trvá montáž kuchyne?",
    answer:
      "Montáž štandardnej kuchyne zvyčajne trvá 1-2 dni. Pri väčších kuchyniach alebo zložitejšej konfigurácii môže montáž trvať dlhšie.",
  },
  {
    question: "Čo potrebujem mať pripravené pred montážou kuchyne?",
    answer:
      "Pre hladký priebeh montáže je potrebné mať: všetky komponenty kuchyne vybalené, montážne plány a návody, voľný priestor v kuchyni, dokončené elektrické a vodovodné prípojky, hotové podlahy a obklady.",
  },
];

export default function MontazKuchynePage() {
  // Custom data for Hero section
  const heroData = {
    title: "Montáž a skladanie kuchyne",
    description:
      "Profesionálne služby v oblasti montáže, skladania a inštalácie kuchynských liniek a kuchynského nábytku.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby montáže kuchyne",
    description:
      "Profesionálna montáž kuchynských liniek všetkých značiek s presným výsledkom a funkčným riešením pre váš domov.",
    features: [
      {
        image: "/icons/kitchen_icon.svg", // NEW ICON - For kitchen assembly
        title: "Montáž kuchynských liniek",
        description:
          "Kompletná montáž kuchynských liniek vrátane skriniek, pracovných dosiek, drezu a všetkých komponentov. Presná inštalácia podľa dodaného plánu s funkčným výsledkom.",
        link: "/montaz-kuchyne",
      },
      {
        image: "/icons/appliance_icon.svg", // For appliance installation
        title: "Inštalácia kuchynských spotrebičov",
        description:
          "Odborné osadenie vstavaných rúr, varných dosiek, digestorov, umývačiek riadu a chladničiek do pripravených otvorov v kuchynských skrinkách.",
        link: "/montaz-kuchyne",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // For clearing out old kitchen
        title: "Vypratávanie starej kuchyne",
        description:
          "Demontáž a vypratanie starej kuchyne pred inštaláciou novej. Ekologická likvidácia starých spotrebičov a nábytku.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/wrecking_ball_icon.svg", // For demolition work
        title: "Búranie stien pri rekonštrukcii",
        description:
          "Búranie priečok a úprava priestoru pre novú kuchyňu. Profesionálne búranie s ohľadom na rozvody a bezpečnosť.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/truck_icon.svg", // For waste removal
        title: "Odvoz stavebného odpadu",
        description:
          "Odvoz sutiny a stavebného odpadu po búracích prácach a rekonštrukcii kuchyne. Kompletné upratanie stavby.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/montaz-mascot.svg"
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
          mascotSrc="/images/mascot/montaz-mascot.svg"
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
          mascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotOffsetY={-45}
          mobileFormOffsetY={13}
          pillsVariant="stahovanie"
        />
      </div>

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews />
      </div>

      {/* Ako to funguje section */}
      <HowItWorks />

      {/* Service Pricing section */}
      <ServicePricing filter={["montaz-kuchyne", "montaz-nabytku", "hodinovy-manzel"]} />

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
          centerLastRow={true}
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
          title="Často kladené otázky o montáži kuchyne"
          items={[
            {
              question: "Ako dlho trvá montáž kompletnej kuchynskej linky?",
              answer:
                "Doba montáže kuchynskej linky závisí od jej veľkosti, komplexnosti a množstva komponentov. Pre štandardnú kuchynskú linku v rozsahu 3-4 bežných metrov (6-8 skriniek) je potrebné počítať s 1-2 pracovnými dňami. Väčšie kuchynské zostavy s množstvom skriniek, ostrovčekom a vstavanými spotrebičmi môžu vyžadovať 2-3 dni. Do celkového času je potrebné zahrnúť montáž skriniek, inštaláciu pracovnej dosky s výrezmi, osadenie drezu, batérie a spotrebičov, montáž úchytiek a vnútorného vybavenia. Ak je súčasťou služby aj demontáž starej kuchyne, pridajte ďalší pracovný deň. Pre presnejší odhad času potrebujeme vidieť pôdorys kuchyne a zoznam/nákresy jednotlivých komponentov.",
            },
            {
              question: "Koľko stojí montáž kuchynskej linky?",
              answer:
                "Cena za montáž kuchynskej linky závisí od jej rozsahu, náročnosti a množstva komponentov. Používame paušálne ceny od 120€/bežný meter. Pre štandardnú kuchynskú linku v rozsahu 3-4 bežných metrov sa ceny pohybujú približne od 350€ do 600€. Väčšie kuchynské zostavy s ostrovčekom a množstvom spotrebičov môžu stáť 700€-1200€ za montáž. Presná cena vám bude stanovená po bezplatnej obhliadke alebo na základe nákresov a špecifikácie kuchyne.",
            },
            {
              question: "Montujete kuchyne od všetkých výrobcov?",
              answer:
                "Áno, naši montážni technici majú skúsenosti s montážou kuchynských liniek od všetkých významných výrobcov a predajcov. Pravidelne pracujeme s kuchyňami z IKEA, Sykora, Oresi, Decodom, Asko, Möbelix, Sconto, Kika, Gorenje, ale aj s kuchyňami na mieru od lokálnych stolárov a výrobcov. Každý výrobca má svoje špecifické montážne systémy a postupy, ktoré naši technici dobre poznajú. Pri IKEA kuchyniach sme zvyknutí na ich modulárny systém METOD/SEKTION a ich špeciálne závesné lišty. Pri kuchyniach na mieru spolupracujeme priamo so stolármi na zabezpečenie presnej montáže podľa ich špecifikácií. Bez ohľadu na značku alebo výrobcu, vždy zabezpečíme profesionálnu montáž s dôrazom na kvalitu a dlhodobú funkčnosť.",
            },
            {
              question: "Zabezpečujete aj pripojenie spotrebičov?",
              answer:
                "Nie, v rámci našich služieb nezabezpečujeme pripojenie spotrebičov. Naši technici zabezpečia len mechanické osadenie spotrebičov do pripravených otvorov v kuchynských skrinkách. Pre elektrické pripojenie a pripojenie na vodovodné a odpadové rozvody odporúčame využiť služby certifikovaného elektrikára a vodoinštalatéra.",
            },
            {
              question: "Čo potrebujem mať pripravené pred montážou kuchyne?",
              answer:
                "Pre hladký priebeh montáže kuchyne je potrebné mať pripravené: 1) Všetky komponenty kuchyne vybalené z prepravných obalov (nie z ochranných fólií) a roztriedené podľa typu v miestnosti montáže. 2) Montážne plány, nákresy a návody, ktoré ste dostali od predajcu kuchyne. 3) Priestor na montáž - vyprataný a vyčistený priestor kuchyne s dostatočným manipulačným priestorom. 4) Pripravené elektrické, vodovodné a odpadové prípojky na správnych miestach podľa plánu kuchyne. 5) Hotové podlahy a steny - dokončené obklady, dlažby a vymaľované steny. 6) Všetky spotrebiče, ktoré majú byť inštalované, fyzicky prítomné v priestore. 7) Informácie o špecifických požiadavkách na montáž alebo atypických riešeniach. Pred montážou odporúčame konzultáciu, pri ktorej vám povieme presne, čo a ako pripraviť pre vašu konkrétnu situáciu.",
            },
          ]}
          expandableGroup={{
            label: "Všetko o montáži kuchyne",
            panels: [
              {
                title: "Krok za krokom: čo zahŕňa profesionálna montáž kuchyne",
                content:
                  "Profesionálna montáž kuchyne začína kontrolou dodaného materiálu — skontrolujeme, či sú všetky skrinky, dvierka, závesy a príslušenstvo v poriadku a kompletné. Následne premerujeme priestor a vyznačíme polohu horných a dolných skriniek.\n\nMontáž prebieha v logickom poradí: najprv spodné skrinky, potom pracovná doska s výrezmi pre drez a varič, ďalej horné skrinky a nakoniec dvierka, zásuvky a vnútorné vybavenie. Na záver nastavíme všetky dvierka a zásuvky do rovín a odovzdáme kuchyňu v perfektnom stave.",
              },
              {
                title: "Inštalácia pracovnej dosky a drezu",
                content:
                  "Pracovná doska je kľúčovým elementom kuchyne — jej presné osadenie a tesnenie určuje dlhodobú funkčnosť. Výrezy pre drez a varič robíme priamo na mieste podľa presných rozmerov. Pri laminátových doskách používame špeciálnu frézku, pri kamenných doskách (granit, mramor) ide o prácu kamenára.\n\nDrez osádzame s vodoodolným tmelom a upevňovacími sponkami. Sifonové napojenie na odpad zabezpečujeme mechanicky — elektrické a vodovodné pripojenia realizuje certifikovaný inštalatér.",
              },
              {
                title: "Príprava priestoru pred montážou kuchyne",
                content:
                  "Pred príchodom nášho tímu musia byť hotové všetky stavebné práce: obklady, dlažba, elektrické a vodovodné rozvody na správnych miestach podľa plánu kuchyne. Vymaľované steny je ideálne mať pred montážou — po montáži horných skriniek je maľovanie komplikované.\n\nVšetky krabice s kuchyňou vyložte do kuchyne alebo priľahlého priestoru. Skontrolujte, či žiadna krabica nie je poškodená — v prípade poškodenia reklamujte u dodávateľa pred montážou, nie po nej.",
              },
              {
                title: "Odovzdanie kuchyne a záručný servis",
                content:
                  "Po dokončení montáže prejdeme kuchyňu spoločne so zákazníkom — skontrolujeme otváranie dvierok, funkčnosť zásuviek a správne zarovnanie všetkých prvkov. Na montážne práce poskytujeme záruku 12 mesiacov.\n\nV rámci záručného servisu bezplatne nastavíme závesy alebo zásuvky, ak by sa po čase uvoľnili alebo vychýlili. Kuchyňa je dlhodobá investícia — preto dbáme na precízne odvedenie každého detailu.",
              },
            ],
          }}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete profesionálne namontovať kuchyňu?"
          description="Zverte montáž svojej kuchyne do rúk odborníkov. Zabezpečíme precíznu montáž skriniek, pracovných dosiek a všetkých komponentov s dôrazom na kvalitu a dlhodobú spokojnosť. Získajte kuchyňu, ktorá vyzerá a funguje presne podľa vašich predstáv."
          buttonText="Objednať montáž kuchyne"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
    
      <TrustBadges />
      <ContactFormSection />


            <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Montáž nábytku", description: "Skladanie a montáž nábytku všetkých značiek.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy a práce v domácnosti.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Profesionálne sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/truck_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
