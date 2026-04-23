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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import Link from "next/link";

export const metadata = {
  title: "Medzinárodné sťahovanie do Európy | Sofoservis",
  description:
    "Profesionálne medzinárodné sťahovanie do 16 európskych krajín a 15 hlavných miest. Rakúsko, Nemecko, Česko, Anglicko a ďalšie. Obhliadka zadarmo, férové.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie",
      languages: {
        sk: "https://www.sofoservis.sk/medzinarodne-stahovanie",
        en: "https://www.sofoservis.sk/en/international-moving-services",
        "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie",
      },
  },
  keywords:
    "medzinárodné sťahovanie, sťahovanie do zahraničia, sťahovanie zo zahraničia, sťahovanie do Európy, zahraničné sťahovanie, preprava vecí do zahraničia, sťahovanie z ČR, sťahovanie do Rakúska, sťahovanie do Nemecka",
  openGraph: {
      title: "Medzinárodné sťahovanie do Európy | Sofoservis",
      description: "Profesionálne medzinárodné sťahovanie do 16 európskych krajín a 15 hlavných miest. Komplexné riešenie s bezpečnou prepravou. Obhliadka zadarmo.",
      url: "https://www.sofoservis.sk/medzinarodne-stahovanie",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

const countries = [
  { name: "Rakúsko", nameGen: "Rakúska", href: "/medzinarodne-stahovanie/rakusko", distance: "60 km" },
  { name: "Maďarsko", nameGen: "Maďarska", href: "/medzinarodne-stahovanie/madarsko", distance: "200 km" },
  { name: "Česká republika", nameGen: "Českej republiky", href: "/medzinarodne-stahovanie/ceska-republika", distance: "130–330 km" },
  { name: "Poľsko", nameGen: "Poľska", href: "/medzinarodne-stahovanie/polsko", distance: "280–650 km" },
  { name: "Nemecko", nameGen: "Nemecka", href: "/medzinarodne-stahovanie/nemecko", distance: "620–1 100 km" },
  { name: "Taliansko", nameGen: "Talianska", href: "/medzinarodne-stahovanie/taliansko", distance: "850–1 350 km" },
  { name: "Švajčiarsko", nameGen: "Švajčiarska", href: "/medzinarodne-stahovanie/svajciarsko", distance: "950–1 200 km" },
  { name: "Holandsko", nameGen: "Holandska", href: "/medzinarodne-stahovanie/holandsko", distance: "1 250 km" },
  { name: "Belgicko", nameGen: "Belgicka", href: "/medzinarodne-stahovanie/belgicko", distance: "1 350 km" },
  { name: "Dánsko", nameGen: "Dánska", href: "/medzinarodne-stahovanie/dansko", distance: "1 350 km" },
  { name: "Francúzsko", nameGen: "Francúzska", href: "/medzinarodne-stahovanie/francuzsko", distance: "1 200–1 400 km" },
  { name: "Anglicko (UK)", nameGen: "Anglicka (UK)", href: "/medzinarodne-stahovanie/anglicko", distance: "1 500 km" },
  { name: "Švédsko", nameGen: "Švédska", href: "/medzinarodne-stahovanie/svedsko", distance: "1 650–1 700 km" },
  { name: "Španielsko", nameGen: "Španielska", href: "/medzinarodne-stahovanie/spanielsko", distance: "1 700–2 100 km" },
  { name: "Nórsko", nameGen: "Nórska", href: "/medzinarodne-stahovanie/norsko", distance: "1 800 km" },
  { name: "Írsko", nameGen: "Írska", href: "/medzinarodne-stahovanie/irsko", distance: "1 900 km + loď" },
];

const cities = [
  { name: "Viedeň", nameGen: "Viedne", href: "/medzinarodne-stahovanie/vieden", country: "Rakúsko", distance: "60 km" },
  { name: "Brno", nameGen: "Brna", href: "/medzinarodne-stahovanie/brno", country: "Česká republika", distance: "130 km" },
  { name: "Budapešť", nameGen: "Budapešti", href: "/medzinarodne-stahovanie/budapest", country: "Maďarsko", distance: "200 km" },
  { name: "Praha", nameGen: "Prahy", href: "/medzinarodne-stahovanie/praha", country: "Česká republika", distance: "330 km" },
  { name: "Varšava", nameGen: "Varšavy", href: "/medzinarodne-stahovanie/varsava", country: "Poľsko", distance: "650 km" },
  { name: "Mníchov", nameGen: "Mníchova", href: "/medzinarodne-stahovanie/mnichov", country: "Nemecko", distance: "620 km" },
  { name: "Zürich", nameGen: "Zürichu", href: "/medzinarodne-stahovanie/zurich", country: "Švajčiarsko", distance: "950 km" },
  { name: "Berlín", nameGen: "Berlína", href: "/medzinarodne-stahovanie/berlin", country: "Nemecko", distance: "900 km" },
  { name: "Frankfurt", nameGen: "Frankfurtu", href: "/medzinarodne-stahovanie/frankfurt", country: "Nemecko", distance: "900 km" },
  { name: "Amsterdam", nameGen: "Amsterdamu", href: "/medzinarodne-stahovanie/amsterdam", country: "Holandsko", distance: "1 250 km" },
  { name: "Brusel", nameGen: "Bruselu", href: "/medzinarodne-stahovanie/brusel", country: "Belgicko", distance: "1 350 km" },
  { name: "Hamburg", nameGen: "Hamburgu", href: "/medzinarodne-stahovanie/hamburg", country: "Nemecko", distance: "1 100 km" },
  { name: "Paríž", nameGen: "Paríža", href: "/medzinarodne-stahovanie/pariz", country: "Francúzsko", distance: "1 400 km" },
  { name: "Dublin", nameGen: "Dublinu", href: "/medzinarodne-stahovanie/dublin", country: "Írsko", distance: "1 900 km + loď" },
  { name: "Londýn", nameGen: "Londýna", href: "/medzinarodne-stahovanie/londyn", country: "UK", distance: "1 500 km" },
];

export default function MedzinarodneStahovaniePage() {
  const heroData = {
    title: "Medzinárodné sťahovanie",
    description:
      "Komplexné služby pre sťahovanie do a zo zahraničia s minimom starostí. Zabezpečíme profesionálny presun vašej domácnosti alebo firmy kamkoľvek v Európe — do 16 krajín a 15 hlavných miest.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby pre medzinárodné sťahovanie",
    description:
      "Ponúkame riešenia pre sťahovanie osôb aj firiem do a zo zahraničia so všetkými potrebnými službami na jednom mieste.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov a domov",
        description:
          "Profesionálne medzinárodné sťahovanie domácností. Kompletné balenie, transport a rozbalenie vašej domácnosti v novej krajine s colnými formalitami.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií a firiem",
        description:
          "Medzinárodné sťahovanie firiem a kancelárií s minimálnym prestojom. Presun celej firmy do novej krajiny s profesionálnou koordináciou a dokumentáciou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie po celej Európe",
        description:
          "Poskytujeme služby sťahovania do všetkých krajín Európskej únie aj mimo nej. Špecializujeme sa na trasy do Česka, Rakúska, Nemecka a ďalších krajín.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Colné a právne formality",
        description:
          "Zabezpečujeme všetky potrebné dokumenty, colné vyhlásenia a povolenia pre medzinárodný presun. Poradíme s právnymi požiadavkami cieľovej krajiny.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Špecializované balenie pre dlhé trasy",
        description:
          "Používame zosilnené balenie a ochranu pre medzinárodné trasy. Každý predmet je individuálne chránený proti poškodeniu počas dlhej prepravy.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie a bezpečnosť",
        description:
          "Komplexné poistenie prepravovaného majetku počas celej medzinárodnej prepravy. Poskytujeme finančnú ochranu a záruky bezpečnosti.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
            {
              question:
                "Ako dlho vopred treba naplánovať medzinárodné sťahovanie?",
              answer:
                "Medzinárodné sťahovanie odporúčame plánovať aspoň 1-2 týždne vopred, ideálne však 3-4 týždne. Pri presunoch do vzdialenejších krajín alebo mimo EÚ je vhodné začať s prípravami ešte skôr. Skoršie plánovanie vám umožní zabezpečiť optimálny termín a získať lepšiu cenu. V urgentných prípadoch však vieme zabezpečiť aj expresné medzinárodné sťahovanie, najmä pre najbližšie krajiny ako Česko, Rakúsko či Nemecko.",
            },
            {
              question: "Aké dokumenty potrebujem pri sťahovaní do zahraničia?",
              answer:
                "Pri sťahovaní v rámci EÚ zvyčajne stačí občiansky preukaz alebo cestovný pas a zoznam prepravovaných vecí (inventár). Pre krajiny mimo EÚ môžu byť potrebné dodatočné dokumenty ako colné vyhlásenia, potvrdenia o pôvode vecí, faktúry alebo doklady o kúpe pre hodnotnejšie predmety. Naši koordinátori vám pripravia presný zoznam dokumentov potrebných pre vašu konkrétnu destináciu.",
            },
            {
              question:
                "Ako sú moje veci chránené počas medzinárodnej prepravy?",
              answer:
                "Pre medzinárodnú prepravu používame špeciálne zosilnené kartónové krabice, bublinkové fólie, ochranné penové materiály a drevené debny pre krehké predmety. Každý kus nábytku je individuálne zabalený a chránený. V prepravnom vozidle sú všetky veci zabezpečené proti pohybu pomocou popruhov a fixačných prostriedkov. Navyše, všetok prepravovaný majetok je poistený počas celej trasy medzinárodnej prepravy.",
            },
            {
              question: "Prepravujete aj automobily do zahraničia?",
              answer:
                "Áno, v rámci našich služieb medzinárodného sťahovania vieme zabezpečiť aj prepravu osobných automobilov, motocyklov a iných vozidiel. Preprava prebieha na špeciálnych autotransportéroch alebo pomocou odťahovej služby, v závislosti od typu vozidla a destinácie.",
            },
            {
              question:
                "Existujú obmedzenia na to, čo môžem presťahovať do zahraničia?",
              answer:
                "Áno, jednotlivé krajiny majú svoje špecifické obmedzenia a regulácie. V rámci EÚ je presun osobných vecí zvyčajne bez obmedzení, ale existujú regulácie pre určité kategórie predmetov ako zbrane, lieky, alkohol nad určité množstvo, umelecké diela, starožitnosti a chránené druhy rastlín či zvierat. Vždy vám poskytneme aktuálne informácie o obmedzeniach pre vašu cieľovú krajinu.",
            },
          ];
  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
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
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
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

      <div><Clients /></div>
      <div><GoogleReviews /></div>
      <HowItWorks />
      <ServicePricing filter={["medzinarodne-stahovanie", "stahovanie", "vypratavanie"]} />

      <div><Reviews showHeadline={true} /></div>

      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      {/* Hub sekcia — krajiny */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Sťahovanie podľa krajiny</h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Vyberte krajinu, do ktorej sa sťahujete, a získajte podrobné informácie o trase, cenách a formalitách.
          </p>
          <div className="max-w-2xl mx-auto">
            <details className="group bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all open:shadow-md open:border-blue-500">
              <summary className="relative cursor-pointer list-none p-5 pr-14 font-semibold text-gray-900 text-lg sm:text-xl text-center">
                <span>Sťahovanie do — vyber krajinu</span>
                <svg
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="border-t border-gray-200 divide-y divide-gray-100">
                {countries.map((country) => (
                  <li key={country.href}>
                    <Link
                      href={country.href}
                      className="flex items-baseline justify-between gap-4 px-5 py-3 hover:bg-gray-50 transition-colors group/item"
                    >
                      <span className="font-medium text-gray-900 group-hover/item:text-blue-600">
                        Sťahovanie do {country.nameGen}
                      </span>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        z Bratislavy: {country.distance}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Hub sekcia — mestá */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Sťahovanie podľa mesta</h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Máte konkrétne cieľové mesto? Kliknite na dané mesto a zistite viac o trase, vzdialenosti a cenách zo Slovenska.
          </p>
          <div className="max-w-2xl mx-auto">
            <details className="group bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all open:shadow-md open:border-blue-500">
              <summary className="relative cursor-pointer list-none p-5 pr-14 font-semibold text-gray-900 text-lg sm:text-xl text-center">
                <span>Sťahovanie do — vyber mesto</span>
                <svg
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="border-t border-gray-200 divide-y divide-gray-100">
                {cities.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="flex items-baseline justify-between gap-4 px-5 py-3 hover:bg-gray-50 transition-colors group/item"
                    >
                      <span className="font-medium text-gray-900 group-hover/item:text-blue-600">
                        Sťahovanie do {city.nameGen}
                      </span>
                      <span className="text-sm text-gray-400 whitespace-nowrap">
                        {city.country} · {city.distance}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </section>

      <div><InstagramFeed /></div>
      <div><GoogleReviews showReviewsShowcase={false} /></div>

      <div>
        <FAQ
          title="Často kladené otázky o medzinárodnom sťahovaní"
          items={faqItems}
          expandableGroup={{
            label: "Všetko o medzinárodnom sťahovaní",
            panels: [
              {
                title: "Sťahovanie v rámci EÚ vs. sťahovanie mimo EÚ",
                content:
                  "Sťahovanie v rámci Európskej únie je administratívne jednoduchšie — voľný pohyb tovaru znamená, že domáce veci nepodliehajú clu. Napriek tomu treba mať pri sťahovaní k dispozícii doklady o pobyte a pracovnom povolení v cieľovej krajine.\n\nSťahovanie mimo EÚ (Švajčiarsko, UK, Nórsko) si vyžaduje colné vyhlásenie a dôkaz o zmene trvalého pobytu. Zvyčajne je potrebný zoznam všetkých prepravovaných predmetov s hodnotami. Náš tím vás prevedie celým colným procesom a pripraví potrebnú dokumentáciu.",
              },
              {
                title: "Balenie a ochrana vecí pri medzinárodnom transporte",
                content:
                  "Medzinárodný transport je náročnejší na balenie ako lokálne sťahovanie — veci cestujú stovky až tisíce kilometrov, prechádzajú celnicami a sú niekoľkokrát prekladané. Preto používame dvojitú bublinkovú fóliu pre sklo a keramiku, pevné kartónové krabice pre knihy a oblečenie a drevené debny pre hodnotné predmety.\n\nElektroniku balíme do pôvodných obalov alebo do ESD antistatickej fólie. Nábytok demontujeme a každý diel fóliujeme zvlášť. Používame výhradne profesionálne sťahovacie blankets (deky) na ochranu povrchov.",
              },
              {
                title: "Poistenie vecí pri medzinárodnom sťahovaní",
                content:
                  "Štandardná zodpovednosť prepravcu je obmedzená zákonom na niekoľko EUR za kilogram — to je pri poškodení hodnotného nábytku alebo elektroniky úplne nedostatočné. Preto odporúčame uzatvoriť špeciálne sťahovacie poistenie, ktoré kryje skutočnú hodnotu vecí.\n\nPonúkame sprostredkovanie all-risk poistenia priamo pre vašu zákazku. Cena poistenia sa pohybuje okolo 1-2% z udanej hodnoty prepravovaného majetku.",
              },
              {
                title: "Čas prepravy a sledovanie zásielky",
                content:
                  "Čas prepravy závisí od cieľovej destinácie a zvoleného spôsobu prepravy. Pre krajiny v dosahu 200 km (Rakúsko, Česko-Brno, Maďarsko) ide o 1 deň. Pre stredné vzdialenosti (Nemecko, Poľsko) počítajte 1–2 dni. Pre vzdialenejšie destinácie (UK, Nórsko, Írsko) záleží na spôsobe prepravy.\n\nZákazník dostane potvrdenie naloženia s odhadovaným termínom doručenia.",
              },
            ],
          }}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      <div><CTA /></div>
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          {"title":"Sťahovanie na Slovensko","description":"Vraciate sa na Slovensko zo zahraničia? Prehľad všetkých trás.","href":"/stahovanie-na-slovensko","icon":"/icons/globe_icon.svg"},
          {"title":"Sťahovanie zo Slovenska","description":"Odchádzate zo Slovenska do zahraničia? Pozrite všetky trasy.","href":"/stahovanie-zo-slovenska","icon":"/icons/globe_icon.svg"},
          {"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},
          {"title":"Sťahovanie kancelárií","description":"Rýchle sťahovanie firiem s minimálnym prestojom.","href":"/stahovanie-kancelarii-firiem","icon":"/icons/briefcase_icon.svg"},
        ]}
      />
    </main>
  );
}
