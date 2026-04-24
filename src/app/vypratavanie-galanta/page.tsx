import React from "react";
  import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
  import Clients from "@/components/sections/Clients";
  import Features from "@/components/sections/Features";
  import LocationMap from "@/components/sections/LocationMap";
  import FAQ from "@/components/sections/FAQ";
  import CTA from "@/components/sections/CTA";
  import Reviews from "@/components/sections/Reviews";
  import GoogleReviews from "@/components/widgets/GoogleReviews";
  import InstagramFeed from "@/components/widgets/InstagramFeed";
  import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
  import RelatedServices from "@/components/sections/RelatedServices";
  import FAQJsonLd from "@/components/seo/FAQJsonLd";

  export const metadata = {
    title: "Vypratávanie Galanta - byty, pivnice, garáže | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, pivníc a garáží v Galante od 25€/hod. Jednoizbový byt od 200€. Odvoz odpadu zabezpečíme. Obhliadka zadarmo.",
    alternates: {
      canonical: "https://www.sofoservis.sk/vypratavanie-galanta",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-galanta",
      en: "https://www.sofoservis.sk/en/home-clearance-galanta",
      "x-default": "https://www.sofoservis.sk/vypratavanie-galanta",
    },
    },
    keywords: "vypratavanie galanta, vypratanie bytu galanta, vypratavanie pivnic galanta, odvoz nabytku galanta, vypratavanie garaz galanta",
    openGraph: {
      title: "Vypratávanie Galanta - byty, pivnice, garáže | Sofoservis",
      description:
        "Profesionálne vypratávanie bytov, pivníc a garáží v Galante od 25€/hod. Jednoizbový byt od 200€. Odvoz odpadu zabezpečíme.",
      url: "https://www.sofoservis.sk/vypratavanie-galanta",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

  export default function VypratavanieGalantaPage() {
    const heroData = {
      title: "Vypratávanie Galanta: Rýchlo a spoľahlivo",
      description:
        "Vypratávame byty, pivnice, kobky a garáže v celej Galante od 25€/hod. Odvoz a likvidácia starého nábytku, spotrebičov aj odpadu — všetko v jednej službe.",
      formTitle: "Vypratávanie v Galante — bezplatná ponuka",
      formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
      backgroundImage: "/images/stahovanie-gauc.avif",
    };

    const featuresData = {
      title: "Komplexné vypratávacie služby v Galante",
      description:
        "Postaráme sa o kompletné vypratávanie vašich priestorov v Galante — od kobky až po celý byt.",
      features: [
        {
          image: "/icons/vypratavanie_icon.svg",
          title: "Vypratávanie bytov v Galante",
          description:
            "Kompletné vypratanie jednoizbového, dvojizbového alebo väčšieho bytu v Galante. Jednoizbový byt od 200€, dvojizbový od 300€. Odvoz všetkého nepotrebného zabezpečíme.",
          link: "/vypratavanie-bytov-domov",
        },
        {
          image: "/icons/house_icon.svg",
          title: "Vypratávanie pivníc a garáží",
          description:
            "Vypratávame pivnice, kobky a garáže v Galante. Klasická kobka od 60€, garáž od 80€. Naložíme a odvezieme všetko, čo nepotrebujete.",
          link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
        },
        {
          image: "/icons/recycle_icon.svg",
          title: "Odvoz starého nábytku a spotrebičov",
          description:
            "Odvoz a ekologická likvidácia starých sedačiek, skríň, práčok a ďalších spotrebičov v Galante. Nezostane po vás nič nepotrebné — všetko odvezieme a správne zlikvidujeme.",
          link: "/vypratavanie-odvoz-stareho-nabytku",
        },
        {
          image: "/icons/truck_icon.svg",
          title: "Odvoz stavebného odpadu",
          description:
            "Po rekonštrukcii bytu v Galante rýchlo odvezieme suť, staré podlahy a stavebný materiál. Pristavíme kontajner alebo odvezieme priamo dodávkou.",
          link: "/odvoz-likvidacia-stavebneho-odpadu",
        },
        {
          image: "/icons/container_icon.svg",
          title: "Vypratávanie kancelárií a priestorov",
          description:
            "Vypratávame aj nebytové priestory, kancelárie a sklady v Galante. Rýchlo, diskrétne a bez zbytočného odpadu. Cena dohodou podľa rozsahu.",
          link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
        },
        {
          image: "/icons/briefcase_icon.svg",
          title: "Sťahovanie po vypratávaní",
          description:
            "Potrebujete po vypratávaní aj presunúť veci na nové miesto? Kombinujeme vypratávanie so sťahovaním v jednej návšteve. Ušetríte čas aj peniaze.",
          link: "/stahovanie-galanta",
        },
      ],
    };

    const mapData = {
      title: "Vypratávame po celom meste Galanta a okolí",
      description:
        "Pokrývame Galanta a okolité obce. Rýchly príjazd, spoľahlivý tím.",
      locations: ["Galanta","Nebojsa","Hody","Sereď","Šaľa","Matúškovo","Topoľnica","Čierna Voda","Jelka","Veľké Úľany","Dolné Saliby","Kráľov Brod","Kajal","Váhovce","Mostová"],
      additionalText: "Sládkovičovo, Trnava, Dunajská Streda, Šamorín a celý Trnavský kraj.",
    };

    const faqData = {
      title: "Často kladené otázky — vypratávanie v Galante",
      items: [
        {
          question: "Koľko stojí vypratávanie bytu v Galante?",
          answer:
            "Jednoizbový byt v Galante vypratáme od 200€, dvojizbový od 300€. Cena závisí od množstva vecí a poschodia bez výťahu. Obhliadka a cenová ponuka sú zadarmo.",
        },
        {
          question: "Koľko stojí vypratávanie pivnice alebo garáže v Galante?",
          answer:
            "Bežná kobka alebo malá pivnica od 60€. Garáž vypratáme od 80€. Cena zahŕňa naloženie a odvoz celého obsahu.",
        },
        {
          question: "Odvezete aj starý nábytok a spotrebiče v Galante?",
          answer:
            "Áno, odvoz starého nábytku, sedačiek, práčok, chladničiek a iných spotrebičov je súčasťou našej služby. Likvidujeme ich ekologicky a v súlade so zákonom.",
        },
        {
          question: "Ako rýchlo môžete prísť vypratať v Galante?",
          answer:
            "Väčšinou sme schopní prísť do 2–5 pracovných dní. V niektorých prípadoch vieme prísť aj skôr. Kontaktujte nás a dohodnem termín podľa vašich potrieb.",
        },
        {
          question: "Vypratávate aj byty bez výťahu v Galante?",
          answer:
            "Áno, bežne vypratávame byty na vyšších poschodiach bez výťahu. Za každé poschodie bez výťahu účtujeme 15€ navyše. Máme skúsený tím na schodiškovú vynášku.",
        },
        {
          question: "Môžem objednať vypratávanie v Galante aj so sťahovaním?",
          answer:
            "Samozrejme. Často kombinujeme vypratávanie bytu so sťahovaním nábytku na nové miesto — všetko zvládneme v jednej návšteve za zvýhodnenú cenu.",
        },
      ],
    };

  const cityIntro =
    "Galanta je okresné mesto Trnavského kraja s množstvom panelových domov z 80. rokov a staršou zástavbou rodinných domov v okolí. Pri vypratávaní v Galante sa najčastejšie stretávame s bytmi v paneliakoch na vyšších poschodiach, starými pivnicami a hospodárskymi priestormi v prímestských obciach. Naša firma pokrýva celú Galantu a okolité obce — Šaľu, Sereď, Sládkovičovo, Dunajskú Stredu aj ďalšie miesta Trnavského kraja.";

    return (
      <main className="bg-white">
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
            mobileMascotOffsetY={-44}
            mobileMascotScale={0.847}
            mobileFormOffsetY={19}
            pillsVariant="stahovanie"
          />
        </div>
        <div>
          <Clients />
        </div>
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-gray-700 text-base leading-relaxed">{cityIntro}</p>
          </div>
        </section>
        <div>
          <GoogleReviews showCarousel={true} />
        </div>
        <div>
          <Features
            title={featuresData.title}
            description={featuresData.description}
            features={featuresData.features}
          />
        </div>
        <div>
          <InstagramFeed />
        </div>
        <div>
          <LocationMap
            title={mapData.title}
            description={mapData.description}
            locations={mapData.locations}
            additionalText={mapData.additionalText}
          />
        </div>
        <div>
          <Reviews />
        </div>
        <div>
          <FAQ title={faqData.title} items={faqData.items} />
        </div>
        <div>
          <CTA />
        </div>
        <ServicePricing filter={["vypratavanie", "stahovanie", "buracie-prace"]} />
      <TrustBadges />
      <ContactFormSection />

        <RelatedServices
          title="Súvisiace služby"
          services={[
            { title: "Vypratávanie bytov a domov", description: "Kompletné vypratanie bytu alebo domu od 200€.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
            { title: "Vypratávanie pivníc a garáží", description: "Rýchle vypratanie pivníc, kobiek a garáží od 60€.", href: "/vypratavanie-pivnic-garazi-nebytovych-priestorov", icon: "/icons/house_icon.svg" },
            { title: "Odvoz starého nábytku", description: "Odvoz a ekologická likvidácia starého nábytku.", href: "/vypratavanie-odvoz-stareho-nabytku", icon: "/icons/recycle_icon.svg" },
            { title: "Sťahovanie Galanta", description: "Profesionálne sťahovanie v Galante od 25€/hod.", href: "/stahovanie-galanta", icon: "/icons/truck_icon.svg" },
          ]}
        />
        <FAQJsonLd items={faqData.items} />
      </main>
    );
  }
  