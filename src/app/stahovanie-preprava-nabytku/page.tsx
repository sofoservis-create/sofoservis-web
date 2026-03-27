import React from "react";
import Hero from "@/components/sections/Hero";
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

export const metadata = {
  title: "Sťahovanie a preprava nábytku - rýchlo a lacno | Sofoservis",
  description:
    "Ponúkame profesionálne sťahovanie a prepravu nábytku ✅ Lacné a férové ceny ✅ Bezpečná manipulácia ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "stahovanie nabytku, preprava nabytku, preprava nábytku, sťahovanie sedačky, sťahovanie skrine, doprava nábytku, montáž nábytku, demontáž nábytku, preprava veľkých kusov nábytku",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-preprava-nabytku",
  },
  openGraph: {
      title: "Sťahovanie a preprava nábytku - rýchlo a lacno | Sofoservis",
      description: "Profesionálne sťahovanie a preprava nábytku od 25€/hod. Lacné ceny, bezpečná manipulácia. Obhliadka priestoru zadarmo. Kontaktujte nás ešte dnes!",
      url: "https://www.sofoservis.sk/stahovanie-preprava-nabytku",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovaniePrepravaNabytkuPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Sťahovanie a preprava nábytku",
    description:
      "Profesionálne služby pre bezpečné sťahovanie a prepravu nábytku akéhokoľvek typu. Náš skúsený tím zabezpečí šetrnú manipuláciu a prepravu vášho nábytku bez poškodenia s dôrazom na ochranu vašich cenných kusov.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby sťahovania a prepravy nábytku",
    description:
      "Profesionálne sťahovanie nábytku s bezpečnou prepravou, demontážou a montážou. Špecializujeme sa na preprave všetkých typov nábytku a zariadenia.",
    features: [
      {
        image: "/icons/wrench_icon.svg", // Was: /images/icon1.webp
        title: "Demontáž a montáž nábytku",
        description:
          "Profesionálna demontáž nábytku pred prepravou a následná montáž na novom mieste. Zabezpečíme správne rozloženie a poskladanie všetkých typov nábytku.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/house_icon.svg", // Was: /images/icon2.webp
        title: "Sťahovanie bytov a domov",
        description:
          "Kompletné sťahovanie domácností vrátane prepravy všetkého nábytku a zariadenia. Bezpečný presun z bytu do bytu alebo z domu do domu.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/crane_icon.svg", // Was: /images/icon3.webp
        title: "Preprava ťažkého nábytku",
        description:
          "Špecializovaná preprava ťažkých kusov nábytku ako sú klavíry, veľké skrine, trezory a masívne stoly s profesionálnym vybavením.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/briefcase_icon.svg", // Was: /images/icon4.webp
        title: "Sťahovanie kancelárskeho nábytku",
        description:
          "Profesionálna preprava kancelárskeho nábytku a vybavenia. Sťahovanie pracovných stolov, skríň, modulárnych systémov a IT techniky.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg", // Was: /images/icon5.webp
        title: "Medzinárodná preprava nábytku",
        description:
          "Preprava nábytku do zahraničia a zo zahraničia. Bezpečná medzinárodná preprava s profesionálnym balením a ochranou pred poškodením.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/broom_icon.svg", // Was: /images/icon6.webp
        title: "Odvoz starého nábytku",
        description:
          "Odvoz a ekologická likvidácia starého nábytku, ktorý už nepotrebujete. Kompletné vypratanie priestoru od nepotrebného zariadenia.",
        link: "/vypratavanie-bytov-domov",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
            benefits={["Poistenie nábytku zahrnuté", "Bez skrytých poplatkov", "Záväzná cena vopred"]}
      />

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
          title="Často kladené otázky o sťahovaní a preprave nábytku"
          items={[
            {
              question: "Potrebuje sa nábytok pred sťahovaním rozobrať?",
              answer:
                "Závisí to od typu nábytku a prístupových podmienok. Niektoré kusy, ako sedačky a postele, sa často nepotrebujú rozoberať. Naopak, skrine a väčšie kusy nábytku je vhodné rozobrať, najmä ak sú úzke dvere alebo schodisko. Náš tím pri obhliadke posúdi, ktoré kusy je potrebné demontovať pre bezpečnú prepravu.",
            },
            {
              question:
                "Ako ochránite môj nábytok počas prepravy pred poškodením?",
              answer:
                "Každý kus nábytku je individuálne zabalený podľa jeho typu a potrieb. Používame štrečové fólie, bublinové fólie, kartónové obaly, ochranné deky a rohové chrániče. Čalúnený nábytok balíme do špeciálnych obalov, drevený nábytok chránime pred poškriabaním. V prepravnom vozidle je každý kus zabezpečený proti pohybu pomocou popruhov a fixačných prostriedkov.",
            },
            {
              question:
                "Je možné prepraviť aj veľmi veľké kusy nábytku, ako je klavír alebo vitríny?",
              answer:
                "Áno, špecializujeme sa aj na prepravu nadrozmerných a ťažkých kusov nábytku. Pre klavíry, vitríny, trezory a podobné predmety máme špeciálne vybavenie ako sťahovacie popruhy, plošiny a vozíky. V prípade potreby využívame aj špeciálne techniky ako spúšťanie cez balkón alebo pomocou žeriavu. Vždy je však potrebná predbežná obhliadka na posúdenie najlepšieho spôsobu sťahovania.",
            },
            {
              question: "Ako dlho dopredu treba objednať prepravu nábytku?",
              answer:
                "Pre štandardnú prepravu nábytku odporúčame objednať službu aspoň 3-7 dní vopred. Pri väčšom množstve alebo špecifických kusoch je lepšie termín dohodnúť 1-2 týždne dopredu. V prípade urgentnej potreby však často dokážeme zabezpečiť službu aj do 24-48 hodín, v závislosti od našej aktuálnej kapacity a náročnosti vašej požiadavky.",
            },
            {
              question: "Ponúkate aj samostatnú službu montáže nábytku?",
              answer:
                "Áno, okrem kompletného sťahovania ponúkame aj samostatnú službu montáže a demontáže nábytku. Či už potrebujete poskladať nový nábytok z obchodu, rozobrať starý pred rekonštrukciou, alebo znova zložiť nábytok po presťahovaní, náš tím vám s tým ochotne pomôže. Máme skúsenosti s nábytkom od rôznych výrobcov vrátane IKEA, Asko, Jysk a ďalších značiek.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA />
      </div>
    
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie kancelárií","description":"Rýchle sťahovanie firiem s minimálnym prestojom.","href":"/stahovanie-kancelarii-firiem","icon":"/icons/briefcase_icon.svg"},{"title":"Sťahovanie Bratislava","description":"Profesionálne sťahovanie v celej Bratislave.","href":"/stahovanie-bratislava","icon":"/icons/truck_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
    </main>
  );
}
