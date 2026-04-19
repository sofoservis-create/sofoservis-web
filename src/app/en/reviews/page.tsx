import React from "react";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import Clients from "@/components/sections/Clients";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Reviews & References | Sofoservis",
  description:
    "See reviews and references from our completed moving projects ✅ Free site inspection ✅ Contact us today!",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/reviews",
    languages: {
      sk: "https://www.sofoservis.sk/referencie",
      en: "https://www.sofoservis.sk/en/reviews",
      "x-default": "https://www.sofoservis.sk/referencie",
      },
  },
  openGraph: {
    title: "Reviews & References | Sofoservis",
    description:
      "See what our customers say about our professional moving services.",
    url: "https://www.sofoservis.sk/en/reviews",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
  keywords:
    "moving reviews, moving references, satisfied customers, moving service reviews, sofoservis reviews, moving testimonials",
};

export default function ReviewsPageEN() {
  const heroData = {
    title: "Reviews & References",
    description:
      "See how our satisfied customers rate our professional moving services. We are proud of the quality of our work and the positive feedback from our clients.",
    formTitle: "Looking for professional moving?",
    formSubtitle: "Fill out the form and get a no-obligation quote today.",
    backgroundImage: "/images/sofo-bratislava-stahovanie.avif",
  };

  return (
    <main>
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews
          title="Google reviews of our services"
          showCarousel={true}
        />
      </div>

      <section className="py-[80px]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Sofoservis on TV
          </h2>
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://player.vimeo.com/video/524477359"
              title="Sofoservis video reference"
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

      <div className="pt-10 md:pt-[100px]">
        <Reviews callToActionText="Get a Quote" />
      </div>

      <div>
        <CTA
          title="Convinced by our work?"
          description="Join our satisfied customers and experience stress-free moving with professionals. Contact us for a no-obligation quote tailored to your needs."
          buttonText="Get a free quote"
          imageSrc="/images/sofoservis spokojnost.jpg"
        />
      </div>

      <ContactFormSection lang="en" />
    </main>
  );
}
