import React from "react";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import ServicePriceTable from "@/components/sections/ServicePriceTable";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Odvoz a vypratávanie starého nábytku | Sofoservis",
  description:
    "Odvoz a vypratávanie starého nábytku od 30€/hod ✅ Odvoz starých skríň, postelí, sedačiek ✅ Obhliadka zadarmo ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie/odvoz-stareho-nabytku",
      languages: {
        sk: "https://www.sofoservis.sk/vypratavanie/odvoz-stareho-nabytku",
        en: "https://www.sofoservis.sk/en/furniture-removal",
        "x-default": "https://www.sofoservis.sk/vypratavanie/odvoz-stareho-nabytku",
      },
  },
  openGraph: {
    title: "Odvoz a vypratávanie starého nábytku | Sofoservis",
    description: "Odvoz a vypratávanie starého nábytku od 30€/hod. Odvoz pohoviek, skríň, postelí a ďalšieho nábytku. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie/odvoz-stareho-nabytku",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function OdvozStarehoNabytku() {
  const heroData = {
    title: "Odvoz a vypratávanie starého nábytku",
    description:
      "Profesionálny odvoz starého nábytku od 30€/hod. Zbavíme vás starých skríň, sedačiek, postelí a akéhokoľvek iného nábytku. Ekologicky a rýchlo.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Kompletný odvoz a likvidácia starého nábytku",
    description:
      "Rýchly a efektívny odvoz starého nábytku a spotrebičov s ekologickou likvidáciou. Zbavíme vás akéhokoľvek nábytku bez stresu.",
    features: [
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz starého nábytku",
        description:
          "Odveziemy staré skrine, postele, gauče, stoly, stoličky a akýkoľvek iný nábytok. Rozoberieme veľké kusy priamo u vás a odnesieme ich.",
        link: "/vypratavanie/odvoz-stareho-nabytku",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia",
        description:
          "Všetok odvezený nábytok a spotrebiče spracovávame ekologicky. Funkčné kusy darujeme, ostatné recyklujeme podľa platných predpisov.",
        link: "/vypratavanie/odvoz-stareho-nabytku",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie bytu",
        description:
          "Okrem samotného nábytku vieme vypratať aj celý byt alebo dom. Komplexná služba od triedenia vecí až po finálne upratanie priestoru.",
        link: "/vypratavanie/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratanie pivníc a garáží",
        description:
          "Vyčistíme pivnicu, garáž alebo sklad od starého nábytku, spotrebičov a ďalšieho odpadu. Rýchlo a efektívne.",
        link: "/vypratavanie/vypratavanie-pivnic-a-garazi",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Po rekonštrukcii zabezpečíme aj odvoz stavebného odpadu, podláh, obkladov a ostatného materiálu. Kompletná služba na jednom mieste.",
        link: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Búranie stien a predelov",
        description:
          "Búrame priečky, sádrokartónové steny a iné konštrukcie v rámci rekonštrukcie. Skúsený tím s potrebným vybavením.",
        link: "/buranie-stien-priecok",
      },
    ],
  };

  const faqItems = [
            {
              question: "Koľko stojí odvoz starého nábytku?",
              answer:
                "Cena za odvoz starého nábytku závisí od množstva a veľkosti kusov, dostupnosti (poschodie, výťah) a vzdialenosti od skládky. Hodinová sadzba je od 30€/hod (minimálne 1 hodina). Pre jednotlivé kusy sa ceny pohybujú od 20€ za malý kus (stolička, nočný stolík) do 80€ za veľké kusy (skriňa, rohová sedačka). Pri väčšom množstve nábytku (celé zariadenie bytu) môžeme dohodnúť paušálnu cenu. Kontaktujte nás pre presný cenový odhad.",
            },
            {
              question: "Ako rýchlo viete prísť po starý nábytok?",
              answer:
                "V Bratislave a okolí sme schopní prísť po starý nábytok do 24-48 hodín od zavolania. V iných častiach Slovenska zvyčajne do 2-4 pracovných dní. V naliehavých prípadoch sa snažíme prispôsobiť vašim potrebám. Kontaktujte nás telefonicky a dohodneme termín čo najrýchlejšie.",
            },
            {
              question: "Musím nábytok rozobrať pred odvozom?",
              answer:
                "Nie, nábytok nemusíte rozoberať pred odvozom. Naši pracovníci sú skúsení v rozoberaní a prenášaní veľkých kusov nábytku. Disponujeme potrebným náradím na rozoberanie nábytku (skrutkovače, kliešte, píly), aby sme ho mohli vyniesť aj cez úzke dvere a schodiská. Samozrejme, ak je nábytok už rozobraný, urýchli to celý proces.",
            },
            {
              question: "Čo sa stane s funkčným nábytkom?",
              answer:
                "Funkčný nábytok, ktorý je ešte použiteľný, sa snažíme darovať charitám alebo sociálne slabším rodinám. Spolupracujeme s viacerými organizáciami v Bratislave, ktoré pomáhajú rodinám v núdzi. Nábytok, ktorý nie je vhodný na ďalšie použitie, odovzdávame do recyklačných centier, kde sa materiály (drevo, kov, čalúnenie) spracovávajú ekologicky.",
            },
          ];

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
        showMascot
        mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
        mobileMascotOffsetY={-57}
        mobileMascotOffsetX={-32}
        mobileMascotScale={1.02}
        mobileFormOffsetY={19}
        pillsVariant="stahovanie"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews />
      </div>

      <HowItWorks />

      <div>
        <Reviews showHeadline={true} />
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
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      <div>
        <FAQ
          title="Často kladené otázky o odvoze starého nábytku"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      <div>
        <CTA
          title="Zbavte sa starého nábytku bez stresu"
          description="Neváhajte sa na nás obrátiť, keď potrebujete rýchlo a jednoducho odviezť starý nábytok. Postaráme sa o všetko od vynášania cez naloženie po ekologickú likvidáciu alebo darovanie funkčných kusov. Kontaktujte nás ešte dnes!"
          buttonText="Objednať odvoz nábytku"
        />
      </div>

      <ServicePriceTable variant="vypratavanie" title="Cenník odvozu starého nábytku" />
      <ServicePricing filter={["vypratavanie", "stahovanie", "buracie-prace"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          {"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},
          {"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie/vypratavanie-pivnic-a-garazi","icon":"/icons/house_icon.svg"},
          {"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/vypratavanie/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},
          {"title":"Sťahovanie bytov","description":"Profesionálne sťahovanie bytov a domov.","href":"/stahovanie/stahovanie-bytov-domov","icon":"/icons/truck_icon.svg"}
        ]}
      />
    </main>
  );
}
