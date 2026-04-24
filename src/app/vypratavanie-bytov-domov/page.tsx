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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata = {
  title: "Vypratávanie bytov a domov | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov od 25€/hod. Jednoizbový byt od 200€. Obhliadka zadarmo. Rýchlo, spoľahlivo, spokojnosť garantovaná.",
  keywords:
    "vypratanie bytov, vypratavanie domov, vypratavanie, vypratanie bytu cena, vypratavanie bytov, vypratávanie bytov, vypratavanie domov po starych rodicoch, vypratávanie starých domov, vypratávanie, vypratávanie domov, ponukam vypratavanie",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov",
      languages: {
        sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov",
        en: "https://www.sofoservis.sk/en/home-junk-removal",
        "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov",
      },
  },
  openGraph: {
    title: "Vypratávanie bytov a domov | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov a domov od 25€/hod. Jednoizbový byt od 200€. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie-bytov-domov",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Aká je cena za vypratanie bytu alebo domu?",
    answer:
      "Cena závisí od veľkosti priestoru a množstva vecí. Pre štandardný jednoizbový byt ceny začínajú od 200€. Hodinová sadzba je od 25€/hod. Poskytujeme nezáväznú cenovú ponuku po bezplatnej obhliadke.",
  },
  {
    question: "Ako dlho trvá vypratanie bytu alebo domu?",
    answer:
      "Štandardný 2-izbový byt zvyčajne vypraceme za 1 deň (4-8 hodín). Väčšie domy alebo byty s množstvom vecí môžu vyžadovať 2-3 dni.",
  },
  {
    question: "Zabezpečujete aj vypratávanie po zosnulých?",
    answer:
      "Áno, špecializujeme sa aj na citlivé a diskrétne vypratávanie nehnuteľností po zosnulých, s maximálnou empatiou a rešpektom.",
  },
];

export default function VypratavanieBytovDomovPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Vypratávanie bytov a domov",
    description:
      "Komplexné služby pre rýchle a efektívne vypratávanie bytov, domov a nehnuteľností. Náš profesionálny tím sa postará o všetko od triedenia vecí po odvoz.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby vypratávania bytov a domov",
    description:
      "Profesionálne vypratávanie nehnuteľností s následným odvozom a likvidáciou nepotrebných vecí. Ušetríme vám čas a energiu.",
    features: [
      {
        image: "/icons/house_icon.svg", // Was: /images/icon1.webp
        title: "Kompletné vypratanie bytu alebo domu",
        description:
          "Vypratáme celý byt alebo dom vrátane všetkých miestností, pivnice a podkrovia. Postaráme sa o triedenie vecí a ich následné zneškodnenie alebo darovanie.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Was: /images/icon2.webp
        title: "Vypratávanie pivníc a garáží",
        description:
          "Špecializujeme sa na vypratávanie pivničných priestorov, garáží a skladov. Odstránime všetky nepotrebné veci a zabezpečíme čistotu priestorov.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/furniture_icon.svg", // Was: /images/icon3.webp
        title: "Odvoz a likvidácia starého nábytku",
        description:
          "Profesionálny odvoz starého nábytku, spotrebičov a iného zariadenia. Zabezpečujeme environmentálne zodpovednú likvidáciu všetkých materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/",
      },
      {
        image: "/icons/landscape_icon.svg", // Was: /images/icon4.webp - **NEW ICON**
        title: "Čistenie a vypratávanie pozemkov",
        description:
          "Vyčistíme a vypratáme vaše pozemky od nepotrebných vecí, stavebného odpadu a rastlinných zvyškov. Pripravíme pozemok na ďalšie využitie.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/recycle_icon.svg", // Was: /images/icon5.webp
        title: "Likvidácia nebezpečného odpadu",
        description:
          "Bezpečne zlikvidujeme nebezpečný odpad, staré spotrebiče, batérie, farby a chemikálie podľa platných predpisov a noriem.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg", // Was: /images/icon6.webp
        title: "Odvoz stavebného odpadu",
        description:
          "Po vypratávaní zabezpečíme aj odvoz stavebného odpadu, sute a demolačných materiálov. Kompletná služba na jednom mieste.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotFixedHeightPx={756}
          desktopMascotTopOffsetPct={-0.01}
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-57}
          mobileMascotOffsetX={-32}
          mobileMascotScale={1.02}
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

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Často kladené otázky o vypratávaní bytov a domov"
          items={[
            {
              question: "Ako prebieha proces vypratávania?",
              answer:
                "Proces začína bezplatnou obhliadkou priestoru, počas ktorej odhadneme rozsah prác a pripravíme cenovú ponuku. Po dohode stanovíme termín vypratávania. V dohodnutý deň náš tím príde vybavený všetkým potrebným materiálom a technikou. Postupujeme systematicky: najprv vytriedime veci podľa vašich požiadaviek (čo zachovať, čo darovať, čo zlikvidovať), následne zabalíme a odvezieme všetok nepotrebný materiál a nakoniec priestor vyčistíme. Celý proces je efektívny a rýchly, pričom minimalizujeme narušenie vášho denného režimu.",
            },
            {
              question: "Aká je cena za vypratanie bytu alebo domu?",
              answer:
                "Cena závisí od viacerých faktorov: veľkosť priestoru, množstvo vecí na vypratanie, dostupnosť (poschodie, výťah), typ odpadu (bežný, stavebný, nebezpečný) a potrebné doplnkové služby (čistenie, dezinfekcia). Pre štandardný 2-izbový byt sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme však nezáväznú cenovú ponuku po bezplatnej obhliadke, takže presne budete vedieť, s akými nákladmi môžete počítať.",
            },
            {
              question: "Ako dlho trvá vypratanie bytu alebo domu?",
              answer:
                "Doba vypratávania závisí od veľkosti priestoru a množstva vecí. Štandardný 2-izbový byt zvyčajne vypraceme za 1 deň (4-8 hodín). Väčšie domy alebo byty s množstvom vecí môžu vyžadovať 2-3 dni. Pri obzvlášť veľkých objektoch ako sú staré rodinné domy s množstvom nahromadených vecí môže vypratávanie trvať aj viac dní. Pri obhliadke vám vieme poskytnúť presnejší časový odhad pre vašu konkrétnu situáciu.",
            },
            {
              question: "Ako naložíte s funkčnými vecami a nábytkom?",
              answer:
                "S funkčným nábytkom a použiteľnými vecami nakladáme podľa vašich požiadaviek. Ponúkame niekoľko možností: 1) Zachovanie a presun na miesto podľa vašich potrieb, 2) Darovanie charitám alebo sociálne slabším rodinám, alebo 3) Ekologická likvidácia. Snažíme sa minimalizovať množstvo odpadu a uprednostňujeme ďalšie využitie vecí, ktoré sú ešte v dobrom stave.",
            },
            {
              question: "Zabezpečujete aj vypratávanie po zosnulých?",
              answer:
                "Áno, špecializujeme sa aj na citlivé a diskrétne vypratávanie nehnuteľností po zosnulých. Chápeme, že ide o emocionálne náročnú situáciu, preto k tejto službe pristupujeme s maximálnou empatiou a rešpektom. Pomôžeme vám roztriediť osobné veci, dokumenty a cennosti od nepotrebných vecí. Zabezpečíme šetrné a dôstojné vypratanie priestoru vrátane prípadného vyčistenia a dezinfekcie. Všetko prebieha podľa vašich predstáv a v súlade s pietou voči zosnulému.",
            },
          ]}
          expandableGroup={{
            label: "Všetko o vypratávaní bytov a domov",
            panels: [
              {
                title: "Čo je profesionálne vypratávanie a kedy ho potrebujete?",
                content: "Vypratávanie bytu alebo domu je proces systematického vyčistenia priestoru od nábytku, spotrebičov, osobných vecí a odpadu. Potrebujete ho pri: sťahovaní z prenajatého bytu, predaji nehnuteľnosti, vypratávaní po zosnulom príbuznom, čistení po rekonštrukcii, vypratávaní pivnice alebo garáže alebo pri príprave priestoru na prenájom.\n\nProfesionálna firma zabezpečí nielen odvoz vecí, ale aj triedenie, ekologickú likvidáciu odpadu a prípadne aj záverečné čistenie priestoru. Ušetríte čas a predídete problémom s nesprávnou likvidáciou odpadu.",
              },
              {
                title: "Ako prebieha vypratávanie — proces krok za krokom",
                content: "Celý proces začína bezplatnou obhliadkou, pri ktorej odhadneme rozsah prác a pripravíme cenovú ponuku. Po odsúhlasení termínu príde náš tím vybavený všetkým potrebným.\n\nNajprv vytriedime veci podľa vašich pokynov — čo zachovať, čo darovať a čo zlikvidovať. Potom systematicky vyprázdnime priestor a odvezieme odpad na príslušné zberné miesta. Na záver môžeme vykonať aj základné upratanie priestoru. Celý proces pri štandardnom 2-izbovom byte zvyčajne trvá jeden pracovný deň.",
              },
              {
                title: "Cena vypratávania — čo ovplyvňuje sumu?",
                content: "Cena vypratávania závisí od viacerých faktorov: veľkosť priestoru, množstvo a typ vecí, prístupnosť (poschodie, výťah), typ odpadu a požiadavky na doplnkové služby ako upratovanie alebo dezinfekcia.\n\nOrientačné ceny: jednoizbový byt od 200€, dvojizbový byt 350-500€, rodinný dom 600-1500€. Cena zahŕňa prácu, odvoz a ekologickú likvidáciu bežného domového odpadu. Stavebný alebo nebezpečný odpad sa účtuje zvlášť. Bezplatnú cenovú ponuku vám pripravíme po obhliadke.",
              },
              {
                title: "Vypratávanie po zosnulých — diskrétna a citlivá služba",
                content: "Vypratávanie nehnuteľnosti po zosnulom príbuznom je emocionálne náročná situácia. Pristupujeme k nej s maximálnou empatiou, diskréciou a rešpektom. Pomôžeme vám roztriediť osobné veci, dokumenty, fotografie a cennosti od vecí určených na likvidáciu.\n\nNepretekáme, dávame vám priestor na rozhodnutia. Zachováme všetky predmety, ktoré si chcete ponechať, a ostatné zlikvidujeme ekologicky a dôstojne. Služba zahŕňa aj záverečné čistenie priestoru podľa vašich požiadaviek.",
              },
              {
                title: "Ekologická likvidácia odpadu — čo s vecami po vypratávaní?",
                content: "Snažíme sa minimalizovať množstvo odpadu, ktorý skončí na skládke. Funkčný nábytok a spotrebiče darujeme sociálne slabším rodinám alebo charitám. Použiteľné oblečenie odovzdávame do zbierok. Elektroniku odovzdávame na autorizované zberné miesta.\n\nOdpad, ktorý nie je možné ďalej využiť, separujeme a odvážame na príslušné zberné dvory podľa druhu materiálu. Nebezpečný odpad (farby, chemikálie, batérie) spracovávame podľa platnej legislatívy. Po vypratávaní dostanete prehľad, ako bolo s jednotlivými vecami naložené.",
              },
            ],
          }}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie?"
          description="Zbavte sa starostí s vypratávaním. Náš skúsený tím sa postará o všetko - od triedenia vecí až po finálne vyčistenie priestoru. Kontaktujte nás ešte dnes pre bezplatnú konzultáciu."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
    
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
            Vypratávanie bytov a domov v mestách
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Pôsobíme v týchto mestách na západnom Slovensku
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              { name: "Bratislava", slug: "bratislava" },
              { name: "Nitra", slug: "nitra" },
              { name: "Trnava", slug: "trnava" },
              { name: "Pezinok", slug: "pezinok" },
              { name: "Senec", slug: "senec" },
              { name: "Malacky", slug: "malacky" },
              { name: "Stupava", slug: "stupava" },
              { name: "Galanta", slug: "galanta" },
              { name: "Komárno", slug: "komarno" },
              { name: "Levice", slug: "levice" },
              { name: "Piešťany", slug: "piestany" },
              { name: "Šaľa", slug: "sala" },
              { name: "Šamorín", slug: "samorin" },
              { name: "Senica", slug: "senica" },
              { name: "Hlohovec", slug: "hlohovec" },
            ].map((c) => (
              <a
                key={c.slug}
                href={`/vypratavanie-bytov-domov/${c.slug}`}
                className="block px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-accent-500 hover:shadow-sm transition text-center text-sm font-medium text-primary-900 hover:text-accent-600"
              >
                Vypratávanie {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ServicePricing filter={["vypratavanie", "stahovanie", "buracie-prace"]} />
      <TrustBadges />
      <ContactFormSection />


            <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Sťahovanie bytov a domov", description: "Presťahujeme vás spoľahlivo a rýchlo.", href: "/stahovanie-bytov-domov", icon: "/icons/truck_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy a úpravy po vypratávní.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
          { title: "Montáž nábytku", description: "Skladanie nového nábytku do vyprataného priestoru.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
