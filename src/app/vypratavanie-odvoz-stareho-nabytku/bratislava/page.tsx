import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

export const metadata = {
  title: "Odvoz starého nábytku Bratislava — rýchlo | Sofoservis",
  description:
    "Rýchly odvoz a likvidácia starého nábytku v Bratislave ✅ Garáže, pivnice, byty ✅ Od 50€ ✅ Obhliadka zadarmo",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku/bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku/bratislava",
      en: "https://www.sofoservis.sk/en/old-furniture-removal-bratislava",
      "x-default": "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku/bratislava",
    },
  },
};

export default function OdvozNabytkuBratislavaPage() {
  const faqItems = [
    {
      question: "Koľko stojí odvoz starého nábytku v Bratislave?",
      answer:
        "Cena začína od 50€ za menšie množstvo nábytku. Konečná suma závisí od objemu, hmotnosti, poschodia a dostupnosti výťahu.",
    },
    {
      question: "Odveziete aj starú sedačku z bytu v Bratislave?",
      answer:
        "Áno, zabezpečujeme kompletný servis – vynesenie sedačky z bytu, naloženie a ekologickú likvidáciu v zbernom dvore.",
    },
    {
      question: "Ako rýchlo viete prísť v rámci Bratislavy?",
      answer:
        "Zvyčajne vieme odvoz zrealizovať do 24 až 48 hodín. V niektorých lokalitách Bratislavy vieme prísť aj v deň objednávky.",
    },
    {
      question: "Likvidujete nábytok ekologicky?",
      answer:
        "Áno, všetok nábytok odvážame na certifikované zberné dvory v Bratislave, kde prebieha jeho ďalšie zhodnotenie alebo ekologická likvidácia.",
    },
  ];

  const features = [
    {
      image: "/icons/truck_icon.svg",
      title: "Odvoz nábytku",
      description: "Rýchly odvoz starých skríň, postelí, sedačiek a iného zariadenia.",
      link: "/vypratavanie-odvoz-stareho-nabytku",
    },
    {
      image: "/icons/vypratavanie_icon.svg",
      title: "Vypratávanie",
      description: "Kompletné vypratanie bytov, pivníc, garáží a podkroví v Bratislave.",
      link: "/vypratavanie-bytov-domov",
    },
    {
      image: "/icons/recycle_icon.svg",
      title: "Likvidácia",
      description: "Zabezpečíme ekologickú likvidáciu odpadu na oficiálnych skládkach.",
      link: "/vypratavanie-odvoz-stareho-nabytku",
    },
  ];

  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Odvoz starého nábytku Bratislava"
          description="Zbavte sa starého nábytku bez námahy. Zabezpečíme vynesenie, odvoz a ekologickú likvidáciu vašich starých vecí v celej Bratislave a okolí."
          formTitle="Získať ponuku odvozu"
          backgroundImage="/images/stahovanie-gauc.avif"
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={756}
          desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Odvoz starého nábytku Bratislava"
          description="Zbavte sa starého nábytku bez námahy. Zabezpečíme vynesenie, odvoz a ekologickú likvidáciu vašich starých vecí v celej Bratislave a okolí."
          formTitle="Získať ponuku odvozu"
          backgroundImage="/images/stahovanie-gauc.avif"
          phoneNumber="421951735130"
          showMascot
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <Clients />
      <GoogleReviews title="Recenzie odvozu — Bratislava" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["vypratavanie"]} />
      <Features title="Odvoz a likvidácia v Bratislave" description="Profesionálny prístup k vypratávaniu vašich priestorov." features={features} />
      <LocationMap
        title="Odvoz nábytku v celej Bratislave"
        locations={["Petržalka", "Ružinov", "Staré Mesto", "Dúbravka", "Karlova Ves", "Nové Mesto", "Rača", "Vrakuňa", "Podunajské Biskupice"]}
        additionalText="Prídeme do ktorejkoľvek mestskej časti Bratislavy a blízkych obcí."
      />
      <InstagramFeed />
      <FAQ title="Často kladené otázky — Bratislava" items={faqItems} />
      <CTA
        title="Potrebujete sa zbaviť starého nábytku v Bratislave?"
        description="Neťahajte sa s ťažkým nábytkom sami. Naši pracovníci ho vynesú a odvezú za vás."
        buttonText="Objednať odvoz"
        imageSrc="/images/sofoservis spokojnost.jpg"
      />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov", description: "Kompletné vypratanie priestorov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Odvoz odpadu", description: "Odvoz stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Sťahovanie nábytku", description: "Prevoz a manipulácia s nábytkom.", href: "/stahovanie-preprava-nabytku", icon: "/icons/truck_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
