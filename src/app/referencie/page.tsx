import React from "react";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
// import ReviewsShowcase from "@/components/widgets/ReviewsShowcase";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import Clients from "@/components/sections/Clients";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Referencie našich prác | Sofoservis",
  description:
    "Pozrite si referencie našich vykonaných sťahovacích prác ✅ Ohliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/referencie",
  },
  keywords:
    "referencie sťahovanie, referencie sťahovacie služby, spokojní zákazníci, recenzie sťahovanie, hodnotenie sťahovacích služieb, sťahovanie skúsenosti, recenzie sofoservis",
};

export default function ReferencePage() {
  // Data for Hero section
  const heroData = {
    title: "Referencie našich prác",
    description:
      "Pozrite si, ako naši spokojní zákazníci hodnotia naše profesionálne sťahovacie služby. Sme hrdí na kvalitu našej práce a na pozitívnu spätnú väzbu od našich klientov.",
    formTitle: "Hľadáte profesionálne sťahovanie?",
    formSubtitle: "Vyplňte formulár a získajte nezáväznú ponuku ešte dnes.",
    backgroundImage: "/images/sofo_bratislava_stahovanie.jpg",
  };

  return (
    <main>
      {/* Hero section */}
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
      />

      {/* Clients section showing corporate clients */}
      <div>
        <Clients />
      </div>

      {/* Reviews Showcase section */}
      {/* <div>
        <ReviewsShowcase variant="full" title="Hodnotenia našich klientov" />
      </div> */}

      {/* Google Reviews section */}
      <div>
        <GoogleReviews title="Google recenzie našich služieb" showCarousel={true} />
      </div>

      {/* Vimeo video reference */}
      <section className="py-10 md:py-[80px]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Sofoservis v Inkognite
          </h2>
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://player.vimeo.com/video/524477359"
              title="Sofoservis video referencia"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
        </div>
      </section>

      {/* Video Reviews section */}
      <div className="pt-10 md:pt-[100px]">
        <Reviews />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Presvedčili sme vás?"
          description="Pridajte sa k našim spokojným zákazníkom a zažite bezstarostné sťahovanie s profesionálmi. Kontaktujte nás pre nezáväznú cenovú ponuku na mieru."
          buttonText="Získať cenovú ponuku"
          imageSrc="/images/sofoservis spokojnost.jpg"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
