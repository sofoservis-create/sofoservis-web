import React from "react";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
// import ReviewsShowcase from "@/components/widgets/ReviewsShowcase";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import Clients from "@/components/sections/Clients";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Referencie a recenzie zákazníkov | Sofoservis",
  description:
    "Pozrite si referencie a recenzie od spokojných zákazníkov. 3500+ úspešných sťahovaní, vypratávaní a montáží nábytku v Bratislave a okolí.",
  alternates: {
    canonical: "https://www.sofoservis.sk/referencie",
      languages: {
        sk: "https://www.sofoservis.sk/referencie",
        en: "https://www.sofoservis.sk/en/reviews",
        "x-default": "https://www.sofoservis.sk/referencie",
      },
  },
  keywords:
    "referencie sťahovanie, referencie sťahovacie služby, spokojní zákazníci, recenzie sťahovanie, hodnotenie sťahovacích služieb, sťahovanie skúsenosti, recenzie sofoservis",
  openGraph: {
      title: "Referencie a recenzie zákazníkov | Sofoservis",
      description: "Pozrite si referencie a recenzie od spokojných zákazníkov Sofoservis. Sťahovanie, vypratávanie, montáž nábytku — tisíce spokojných zákazníkov.",
      url: "https://www.sofoservis.sk/referencie",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function ReferencePage() {
  // Data for Hero section
  const heroData = {
    title: "Referencie našich prác",
    description:
      "Pozrite si, ako naši spokojní zákazníci hodnotia naše profesionálne sťahovacie služby. Sme hrdí na kvalitu našej práce a na pozitívnu spätnú väzbu.",
    formTitle: "Hľadáte profesionálne sťahovanie?",
    formSubtitle: "Vyplňte formulár a získajte nezáväznú ponuku ešte dnes.",
    backgroundImage: "/images/sofo-bratislava-stahovanie.avif",
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

      {/* Clients — trust strip, sits flush under hero */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews */}
      <div>
        <GoogleReviews title="Google recenzie našich služieb" showCarousel={true} />
      </div>

      {/* Instagram gallery — real job photos, builds visual trust */}
      <div>
        <InstagramFeed title="Naše práce na Instagrame" />
      </div>

      {/* Vimeo video reference */}
      <section className="pt-10 md:pt-[100px] pb-10 md:pb-[100px]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
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

      {/* Written Reviews */}
      <div className="pt-10 md:pt-[100px]">
        <Reviews />
      </div>

      {/* CTA */}
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
