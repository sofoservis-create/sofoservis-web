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
  title: "Hodinový manžel Bratislava — opravy, montáž | Sofoservis",
  description:
    "Profesionálny hodinový manžel v Bratislave — montáž nábytku, vešanie obrazov, drobné opravy ✅ Od 25€/hod ✅ Dostupný do 24h",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/bratislava",
      en: "https://www.sofoservis.sk/en/handyman-bratislava",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/bratislava",
    },
  },
};

export default function HodinovyManzelMajsterBratislavaPage() {
  const faqItems = [
    {
      question: "Aké služby poskytuje hodinový manžel v Bratislave?",
      answer:
        "Náš hodinový manžel v Bratislave zabezpečuje drobné opravy v domácnosti, montáž nábytku (IKEA, JYSK, Asko), vešanie obrazov, zrkadiel, vŕtanie do panelu aj tehly, výmenu batérií či opravu pretekajúcich toaliet.",
    },
    {
      question: "Koľko stojí hodinový manžel v Bratislave?",
      answer:
        "Cena začína od 25€ za hodinu práce. Minimálna objednávka je 1 hodina, následne účtujeme v 30-minútových intervaloch. Doprava v rámci Bratislavy je od 20€.",
    },
    {
      question: "Ako rýchlo príde hodinový manžel v Bratislave?",
      answer:
        "Väčšinu požiadaviek v Bratislave vybavujeme do 24 hodín. V urgentných prípadoch sa snažíme prísť ešte v ten istý deň.",
    },
    {
      question: "Máte vlastné náradie?",
      answer:
        "Áno, náš majster prichádza plne vybavený profesionálnym náradím (vŕtačky, skrutkovače, vodováhy). Vy nemusíte pripravovať nič, okrem samotného nábytku či doplnkov na montáž.",
    },
  ];

  const features = [
    {
      image: "/icons/wrench_icon.svg",
      title: "Montáž nábytku",
      description: "Skladanie skríň, komôd a postelí z IKEA, JYSK a iných predajní rýchlo a precízne.",
      link: "/montaz-nabytku",
    },
    {
      image: "/icons/kitchen_icon.svg",
      title: "Montáž kuchyne",
      description: "Kompletná inštalácia kuchynských liniek vrátane osadenia spotrebičov a drezu.",
      link: "/montaz-kuchyne",
    },
    {
      image: "/icons/repair_icon.svg",
      title: "Drobné opravy",
      description: "Oprava kvapkajúcich kohútikov, výmena žiaroviek, vypínačov a iné drobnosti.",
      link: "/hodinovy-manzel-majster",
    },
  ];

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Hodinový manžel v Bratislave"
          description="Profesionálne služby hodinového manžela v Bratislave a okolí. Opravy, montáže a údržba vašej domácnosti rýchlo, kvalitne a za férovú cenu."
          formTitle="Získajte cenovú ponuku"
          formSubtitle="Ozveme sa vám do 30 minút"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/montaz-mascot.svg"
          desktopMascotDynamicHeight
          desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Hodinový manžel v Bratislave"
          description="Profesionálne služby hodinového manžela v Bratislave a okolí. Opravy, montáže a údržba vašej domácnosti rýchlo, kvalitne a za férovú cenu."
          formTitle="Získajte cenovú ponuku"
          formSubtitle="Ozveme sa vám do 30 minút"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotOffsetY={-45}
          mobileFormOffsetY={32}
          pillsVariant="hodinovy"
          phoneNumber="421952044363"
        />
      </div>
      <Clients />
      <GoogleReviews title="Recenzie našich klientov" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["hodinovy-manzel", "montaz-nabytku", "montaz-kuchyne"]} />
      <Features title="Čo všetko vybaví náš majster?" description="Široká škála služieb pre vašu domácnosť v Bratislave." features={features} />
      <LocationMap
        title="Hodinový manžel pôsobí v celej Bratislave"
        description="Pokrývame všetky mestské časti a blízke okolie."
        locations={["Staré Mesto", "Ružinov", "Nové Mesto", "Petržalka", "Dúbravka", "Karlova Ves", "Rača", "Vrakuňa", "Podunajské Biskupice", "Devínska Nová Ves", "Lamač", "Vajnory", "Záhorská Bystrica", "Devín", "Jarovce", "Rusovce", "Čunovo"]}
        additionalText="Prídeme za vami aj do okolitých obcí ako Stupava, Ivanka pri Dunaji či Dunajská Lužná."
      />
      <InstagramFeed />
      <GoogleReviews showReviewsShowcase={false} />
      <FAQ title="Často kladené otázky — Bratislava" items={faqItems} />
      <CTA
        title="Potrebujete pomocníka v Bratislave?"
        description="Nečakajte týždne na remeselníka. Náš hodinový manžel je pripravený pomôcť vám s akoukoľvek drobnosťou už zajtra."
        buttonText="Objednať majstra"
        imageSrc="/images/sofoservis montaz.jpg"
      />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Montáž nábytku", description: "Profesionálne skladanie nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
          { title: "Montáž kuchyne", description: "Montáž kuchynských liniek na mieru.", href: "/montaz-kuchyne", icon: "/icons/kitchen_icon.svg" },
          { title: "Hodinový manžel", description: "Všetky naše handyman služby.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
