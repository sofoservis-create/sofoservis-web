import type { Metadata } from "next";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const faqItems = [
  {
    question: "Aké služby ponúkate?",
    answer: "Ponúkame tri hlavné kategórie služieb: sťahovanie, vypratávanie a montáž nábytku.",
  },
  {
    question: "V ktorých lokalitách poskytujete vaše služby?",
    answer: "Naše služby poskytujeme predovšetkým v Bratislave a okolí, ale pôsobíme aj po celom Slovensku.",
  },
  {
    question: "Koľko stojí sťahovanie?",
    answer: "Cena závisí od mnohých faktorov. Pre presný odhad vyplňte náš kontaktný formulár alebo nám zavolajte.",
  },
  {
    question: "Sťahujete aj počas víkendov?",
    answer: "Áno, naše služby poskytujeme 6 dní v týždni vrátane soboty od 8:00 do 17:00.",
  },
];

export default function Lab2Page() {
  return (
    <main>
      <LabHero
        narrowForm
        badgeText="Poskytujeme služby 6 dní v týždni"
        title="Sťahovanie, vypratávanie a montáž nábytku – s najlepším hodnotením"
        description="Sofoservis je najlepšie hodnotená spoločnosť svojho druhu. Viac ako 3500 spokojných zákazníkov a stovky 5-hviezdičkových recenzií."
        benefits={["Sťahovanie", "Vypratávanie", "Montáž nábytku"]}
      />
      <Clients />
      <Features />
      <Reviews />
      <FAQ items={faqItems} />
      <CTA />
      <ContactFormSection />
    </main>
  );
}
