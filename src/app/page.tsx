import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";
// import ReviewsShowcase from "@/components/widgets/ReviewsShowcase";

export const metadata = {
  title: "Sofoservis | Sťahovacie služby - lacné a profesionálne",
  description:
    "Ponúkame profesionálne sťahovacie služby pre súkromné osoby aj firmy ✅ Lacné a férové ceny ✅ Ohliadka priestoru zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk", // ← SELF-CANONICAL TAG
  },
  robots: "index, follow",
};

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <Hero />

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      {/* <div>
        <GoogleReviews />
      </div> */}

      {/* Google Reviews section with Reviews subsection */}
      <div>
        <GoogleReviews />
        {/* Reviews subsection - logically under Google Reviews */}
        <Reviews showHeadline={true} />
      </div>

      {/* Features section */}
      <div className="">
        <Features />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section */}
      <div className="pt-10 md:pt-[100px] pb-0 md:pb-[40px]">
        <GoogleReviews
          title="Overené recenzie od skutočných zákazníkov"
          showReviewsShowcase={false}
          showCarousel={true}
        />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Často kladené otázky o sťahovaní"
          items={[
            {
              question: "Aké sťahovacie služby ponúkate?",
              answer:
                "Ponúkame kompletné sťahovacie služby vrátane sťahovania bytov, domov, kancelárií a firiem, montáže a demontáže nábytku, balenia a vybaľovania vecí, a prepravy ťažkých bremien.",
            },
            {
              question: "V ktorých lokalitách poskytujete vaše služby?",
              answer:
                "Naše služby poskytujeme predovšetkým v Bratislave a okolí, ale pôsobíme aj v ďalších mestách ako Trnava, Senec, Pezinok a po celom Slovensku.",
            },
            {
              question: "Koľko stojí sťahovanie?",
              answer:
                "Cena závisí od mnohých faktorov, ako sú objem vecí, vzdialenosť, poschodie a ďalšie špecifiká. Pre presný odhad vyplňte náš kontaktný formulár alebo nám zavolajte a my vám pripravíme bezplatnú cenovú ponuku.",
            },
            {
              question: "Sťahujete aj počas víkendov a sviatkov?",
              answer:
                "Áno, naše služby poskytujeme 6 dní v týždni vrátane soboty od 8:00 do 17:00. Nedeľa je podľa dohody. Za prácu počas soboty neúčtujeme žiadny príplatok.",
            },
            {
              question: "Poskytujete aj balenie vecí?",
              answer:
                "Áno, ponúkame profesionálne balenie vecí vrátane dodania všetkých potrebných obalových materiálov. Naši skúsení pracovníci vedia správne zabaliť a ochrániť všetok váš majetok.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <CTA />

      <ContactFormSection />
    </main>
  );
}
