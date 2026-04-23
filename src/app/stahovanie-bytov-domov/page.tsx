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
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

const stahovanieLocations = [
  { name: "Bratislava", href: "/stahovanie-bratislava" },
  { name: "Nitra", href: "/stahovanie-nitra" },
  { name: "Trnava", href: "/stahovanie-trnava" },
  { name: "Pezinok", href: "/stahovanie-pezinok" },
  { name: "Galanta", href: "/stahovanie-galanta" },
  { name: "Levice", href: "/stahovanie-levice" },
  { name: "Piešťany", href: "/stahovanie-piestany" },
  { name: "Senec", href: "/stahovanie-senec" },
  { name: "Senica", href: "/stahovanie-senica" },
  { name: "Stupava", href: "/stahovanie-stupava" },
  { name: "Komárno", href: "/stahovanie-komarno" },
  { name: "Malacky", href: "/stahovanie-malacky" },
  { name: "Šamorín", href: "/stahovanie-samorin" },
  { name: "Hlohovec", href: "/stahovanie-hlohovec" },
];

export const metadata = {
  title: "Sťahovanie bytov a domov - rýchlo a lacno | Sofoservis",
  description:
    "Profesionálne sťahovanie bytov a domov od 25€/hod. Obhliadka priestoru zadarmo. Rýchlo, spoľahlivo, spokojnosť garantovaná. Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-bytov-domov",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-bytov-domov",
        en: "https://www.sofoservis.sk/en/apartment-moving",
        "x-default": "https://www.sofoservis.sk/stahovanie-bytov-domov",
      },
  },
  keywords:
    "stahovanie bytov, sťahovanie bytov, stahovanie bytu, stahovanie domov, stahovanie nabytku, preprava nabytku, montaz nabytku, demontaz nabytku",
  openGraph: {
    title: "Sťahovanie bytov a domov - rýchlo a lacno | Sofoservis",
    description:
      "Profesionálne sťahovanie bytov a domov od 25€/hod. Obhliadka priestoru zadarmo. Rýchlo, spoľahlivo.",
    url: "https://www.sofoservis.sk/stahovanie-bytov-domov",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Aká je aproximná cena za sťahovanie 2-izbového bytu?",
    answer:
      "Cena za sťahovanie 2-izbového bytu sa štandardne pohybuje od 200€ do 350€, v závislosti od množstva nábytku, vzdialenosti a prístupových podmienok. Hodinová sadzba začína od 25€/hod.",
  },
  {
    question: "Ako dlho trvá sťahovanie priemerného 3-izbového bytu?",
    answer:
      "Sťahovanie 3-izbového bytu zvyčajne trvá 4-6 hodín, v závislosti od objemu vecí, vzdialenosti medzi lokalitami a prístupových podmienok.",
  },
  {
    question: "Robíte sťahovanie aj cez víkendy?",
    answer:
      "Áno, naše služby poskytujeme 6 dní v týždni okrem nedele bez príplatku.",
  },
];

export default function StahovanieBytovDomovPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Sťahovanie bytov a domov",
    description:
      "Profesionálne sťahovanie bytov a domov od 25€/hod. Šetríme váš čas, energiu a nervy vďaka skúsenému tímu, ktorý sa postará o všetko od balenia.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú cenovú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby sťahovania bytov a domov",
    description:
      "Profesionálne sťahovacie služby pre domácnosti s kompletným servisom od balenia až po usporiadanie v novom domove.",
    features: [
      {
        image: "/icons/house_icon.svg", // Was: /images/icon1.webp
        title: "Sťahovanie v Bratislave a okolí",
        description:
          "Lokálne sťahovanie bytov a domov v Bratislave a priľahlých mestách. Rýchly a bezpečný presun v rámci regiónu s minimálnymi nákladmi.",
        link: "/stahovanie-bratislava",
      },
      {
        image: "/icons/wrench_icon.svg", // Was: /images/icon2.webp
        title: "Montáž a demontáž nábytku",
        description:
          "Profesionálna demontáž nábytku pred sťahovaním a následná montáž v novom domove. Zabezpečíme správne zloženie a poskladanie všetkého zariadenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Was: /images/icon3.webp
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Špecializované sťahovanie pián, trezorov, veľkých spotrebičov a iných ťažkých bremien. Používame profesionálne vybavenie pre bezpečnú manipuláciu.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/globe_icon.svg", // Was: /images/icon4.webp
        title: "Medzinárodné sťahovanie domácností",
        description:
          "Sťahovanie domácností do zahraničia alebo zo zahraničia. Komplexné riešenie s vybavením formalít a bezpečnou medzinárodnou prepravou.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Was: /images/icon5.webp
        title: "Vypratávanie pred sťahovaním",
        description:
          "Vypratanie nepotrebných vecí pred sťahovaním. Ekologická likvidácia starého nábytku a spotrebičov, ktoré už nechcete prenášať.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/recycle_icon.svg", // Was: /images/icon6.webp
        title: "Odvoz stavebného odpadu",
        description:
          "Odvoz kartónových krabíc, obalových materiálov a odpadu po sťahovaní. Kompletné upratanie po presťahovaní do nového domova.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
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
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        desktopMinHeroTextHeightPx={460}
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
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
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
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />

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

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      <div className="md:mb-[-100px]">
        <LocationMap
          title="Sťahovanie bytov a domov po celom Slovensku"
          description="Naše služby poskytujeme v nasledujúcich mestách a regiónach."
          locations={stahovanieLocations}
          additionalText="Poskytujeme profesionálne sťahovacie služby s plnou zodpovednosťou za váš majetok."
          supporText="Sťahujeme vo všetkých regiónoch:"
        />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Často kladené otázky o sťahovaní bytov a domov"
          items={[
            {
              question: "Aká je približná cena za sťahovanie 2-izbového bytu?",
              answer:
                "Cena za sťahovanie 2-izbového bytu sa štandardne pohybuje od 200€ do 350€, v závislosti od množstva nábytku, vzdialenosti, poschodia a prístupových podmienok. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára.",
            },
            {
              question: "Poskytujete obalové materiály na zabalenie vecí?",
              answer:
                "Áno, na požiadanie dodáme všetky potrebné obalové materiály ako kartónové krabice, bublinkové fólie, ochranné deky, sťahovacie pásky a ďalšie. Tieto materiály môžete buď objednať vopred, alebo ich priamo dodáme v deň sťahovania.",
            },
            {
              question: "Ako dlho trvá sťahovanie priemerného 3-izbového bytu?",
              answer:
                "Sťahovanie 3-izbového bytu zvyčajne trvá 4-6 hodín, v závislosti od objemu vecí, vzdialenosti medzi lokalitami a prístupových podmienok. Pri objednávke dostanete presnejší časový odhad podľa vašej konkrétnej situácie.",
            },
            {
              question: "Robíte sťahovanie aj cez víkendy?",
              answer:
                "Áno, naše služby poskytujeme 6 dní v týždni okrem nedele bez príplatku.",
            },
            {
              question: "Je potrebné pripraviť nábytok pred sťahovaním?",
              answer:
                "Nie je to nevyhnutné. Naši profesionáli sa postarajú o demontáž, zabalenie a následné zloženie vášho nábytku. Ak máte však citlivé osobné veci, odporúčame ich zabaliť vopred. V prípade elektroniky je vhodné si urobiť zálohu dát.",
            },
          ]}
          expandableGroup={{
            label: "Všetko o sťahovaní bytov a domov",
            panels: [
              {
                title: "Sťahovanie bytu vs. domu — kľúčové rozdiely",
                content: "Sťahovanie bytu a sťahovanie rodinného domu sa výrazne líšia v rozsahu aj logistike. Byt je zvyčajne kompaktnejší, ale môže komplikovať prístup cez poschodia alebo obmedzenia výťahu. Dom naopak ponúka priamy prístup, ale objem vecí je zvyčajne väčší — garáž, záhradné náradie, pivnica, podkrovie.\n\nPre sťahovanie bytu zvyčajne postačujú 2 pracovníci a jedno vozidlo. Pri sťahovaní väčšieho rodinného domu odporúčame 3-4 pracovníkov a niekedy aj dve jazdenie. Vopred posúdime váš konkrétny prípad a navrhneme optimálne riešenie.",
              },
              {
                title: "Príprava na sťahovanie — čo urobiť vopred",
                content: "Dobra príprava je polovica úspechu. Aspoň 2 týždne pred sťahovaním začnite triediť veci — čo si ponecháte, čo darujete a čo zlikvidujete. Menej vecí = nižšia cena za sťahovanie. Zbaliť osobné veci, oblečenie, knihy a drobnosti do krabíc môžete aj sami — ušetríte tým čas a peniaze.\n\nVätšie kusy nábytku (skrine, postele, pohovky) nechajte na nás — máme skúsenosti s demontážou a bezpečnou prepravou. Nezabudnite vopred odmerať rozmer vchodu a schodiska v novom byte, aby sme vedeli, či sa nábytok zmestí.",
              },
              {
                title: "Demontáž a montáž nábytku pri sťahovaní",
                content: "Väčšina nábytku dnes pochádza z obchodných reťazcov ako IKEA, Asko alebo Jysk a je navrhnutá tak, aby sa dala demontovať a znovu zložiť. Naši pracovníci majú skúsenosti s demontážou a montážou všetkých bežných typov nábytku.\n\nPri sťahovaní odporúčame demontovať všetky väčšie skrine, postele a rozkladacie pohovky — šetríte tým priestor vo vozidle a znižujete riziko poškodenia pri preprave. Montáž na novom mieste prebehne rýchlo a presne — naši technici vedia poskladať priemerný nábytok z IKEA 2-3× rýchlejšie ako priemerný domácich majster.",
              },
              {
                title: "Čo ovplyvňuje cenu sťahovania bytu alebo domu?",
                content: "Hodinová sadzba pri sťahovaní začína od 25€/hod pre 2 pracovníkov. Na celkovú cenu vplývajú: vzdialenosť medzi starým a novým bytom (v rámci Bratislavy účtujeme cestovné paušálne), poschodie a existencia výťahu, celkový objem vecí, požiadavka na demontáž/montáž nábytku a potreba baliaceho materiálu.\n\nPre 2-izbový byt v Bratislave s výťahom je bežná cena 200-350€. Pre 3-4-izbový byt 350-600€. Rodinné domy sa cenia individuálne podľa obsahu.",
              },
              {
                title: "Záruka a zodpovednosť za váš majetok",
                content: "Vaša spokojnosť a bezpečnosť vášho majetku sú naše priority. Pracujeme s profesionálnym baliaci materiálom — ochrannými dekami, bublinkovou fóliou, pevnými krabicami a zaväzovacími popruhmi. V prípade akéhokoľvek poškodenia škody riešime okamžite a korektne.\n\nOdporúčame pred sťahovaním odfotiť cennejšie predmety — elektroniku, umenie, starožitnosti. Ak máte predmety vyžadujúce špeciálne zaobchádzanie (piano, akvárium, trezor), informujte nás vopred a zabezpečíme správne vybavenie.",
              },
            ],
          }}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA />
      </div>
    
      <TrustBadges />
      <ContactFormSection />


            <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Sťahovanie v Bratislave", description: "Špeciálna stránka pre sťahovanie po celej Bratislave.", href: "/stahovanie-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie bytov", description: "Kompletné vypratanie vrátane odvozu odpadu.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Montáž nábytku", description: "Demontáž pred a montáž po sťahovaní.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy a práce v domácnosti.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
