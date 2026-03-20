import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Handyman Services Bratislava | Sofoservis",
  description:
    "Professional handyman services in Bratislava - repairs, assembly, maintenance for homes and offices ✅ Affordable prices ✅ Contact us today!",
  keywords:
    "handyman bratislava, handyman services bratislava, home repairs Bratislava, furniture assembly Bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/handyman-bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/bratislava",
      en: "https://www.sofoservis.sk/en/handyman-bratislava",
    },
  },
};

export default function HandymanBratislavaPage() {
  const heroData = {
    title: "Handyman Services in Bratislava",
    description:
      "Professional handyman services in Bratislava and surrounding areas for quick and reliable repairs, assembly, and home maintenance. We cover all of Bratislava and nearby towns.",
    formTitle: "Get a free price quote",
    formSubtitle: "The fastest handyman in Bratislava - fill out the form for a no-obligation estimate",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Complete Handyman Services in Bratislava",
    description:
      "We offer a wide range of home repair, assembly, and maintenance services in Bratislava and surrounding areas.",
    features: [
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Expert assembly of all types of furniture, shelving systems, kitchen units, and home equipment in Bratislava. We work with IKEA, JYSK, Asko, and other brands.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/curtain_icon.svg",
        title: "Installation & Mounting",
        description:
          "Professional installation of curtains, blinds, light fixtures, mirrors, TV brackets, and other home accessories in Bratislava.",
        link: "/en/handyman-services",
      },
      {
        image: "/icons/plumbing_icon.svg",
        title: "Plumbing Work",
        description:
          "Minor plumbing repairs and replacements - dripping faucets, tap replacement, drain cleaning, sink replacement, and more in Bratislava.",
        link: "/en/handyman-services",
      },
      {
        image: "/icons/electrical_icon.svg",
        title: "Electrical Work",
        description:
          "Basic electrical work in Bratislava - switch and outlet replacement, light fixture installation, appliance checks.",
        link: "/en/handyman-services",
      },
      {
        image: "/icons/paint_icon.svg",
        title: "Painting & Maintenance",
        description:
          "Minor painting work, crack repair, filling, wallpapering, floor covering replacement, and other maintenance tasks in Bratislava.",
        link: "/en/handyman-services",
      },
      {
        image: "/icons/garden_icon.svg",
        title: "Garden & Exterior Work",
        description:
          "Basic garden maintenance, outdoor furniture assembly, irrigation system installation, fence repairs in Bratislava and nearby areas.",
        link: "/en/handyman-services",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        lang="en"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="What our customers say" />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <LocationMap
          title="Handyman Services Throughout Bratislava"
          description="We operate in all areas of Bratislava"
          locations={["Staré Mesto","Ružinov","Nové Mesto","Petržalka","Dúbravka","Karlova Ves","Rača","Vrakuňa","Podunajské Biskupice","Devínska Nová Ves","Lamač","Vajnory","Záhorská Bystrica","Devín","Jarovce","Rusovce","Čunovo"]}
          additionalText="We also serve nearby towns such as Stupava, Svätý Jur, Ivanka pri Dunaji, Most pri Bratislave, Chorvátsky Grob, Bernolákovo, Malinovo, and Rovinka."
          showCallToAction={true}
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="Customer Reviews"
        />
      </div>

      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Frequently Asked Questions About Handyman Services in Bratislava"
          items={[
            {
              question: "What services does your handyman provide in Bratislava?",
              answer:
                "Our handyman provides a wide range of services including minor repairs, furniture assembly, hanging pictures and mirrors, TV mounting, light fixture installation, switch and outlet replacement, and other household maintenance tasks.",
            },
            {
              question: "How much does a handyman cost in Bratislava?",
              answer:
                "Our standard hourly rate is €25 per hour. For some common tasks, we offer flat-rate prices. The minimum charge is 1 hour, then billed in 30-minute intervals. Transport costs are charged based on distance.",
            },
            {
              question: "How quickly can you come for an inspection in Bratislava?",
              answer:
                "We can usually respond very flexibly. In urgent cases, we try to arrange a visit the same day; standard response is within 24-48 hours. Call us at 0952 044 363 for immediate availability.",
            },
            {
              question: "Do you provide a warranty on completed work?",
              answer:
                "Yes, we provide a standard 6-month warranty on all work performed by our handymen. For supplied materials, the warranty follows legal requirements (typically 24 months).",
            },
          ]}
        />
      </div>

      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Need a handyman in Bratislava?"
          description="Save your time and energy. Let our professionals handle your home repairs, assembly, and maintenance in Bratislava. One call and your problem will be solved quickly and affordably."
          buttonText="Book a handyman"
          buttonLink="/en/contact"
        />
      </div>

      <ContactFormSection lang="en" />
    </main>
  );
}
