import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Handyman Services Levice | Sofoservis",
  description:
    "Professional handyman services in Levice - repairs, assembly, maintenance for homes and offices ✅ Affordable prices ✅ Contact us today!",
  keywords:
    "handyman levice, handyman services levice, home repairs Levice, furniture assembly Levice",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/handyman-levice",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/levice",
      en: "https://www.sofoservis.sk/en/handyman-levice",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/levice",
      },
  },
};

export default function HandymanLevicePage() {
  const faqItems = [
            {
              question: "What services does your handyman provide in Levice?",
              answer:
                "Our handyman provides a wide range of services including minor repairs, furniture assembly, hanging pictures and mirrors, TV mounting, light fixture installation, switch and outlet replacement, and other household maintenance tasks.",
            },
            {
              question: "How much does a handyman cost in Levice?",
              answer:
                "Our standard hourly rate is €25 per hour. For some common tasks, we offer flat-rate prices. The minimum charge is 1 hour, then billed in 30-minute intervals. Transport costs are charged based on distance.",
            },
            {
              question: "How quickly can you come for an inspection in Levice?",
              answer:
                "We can usually respond very flexibly. In urgent cases, we try to arrange a visit the same day; standard response is within 24-48 hours. Call us at 0952 044 363 for immediate availability.",
            },
            {
              question: "Do you provide a warranty on completed work?",
              answer:
                "Yes, we provide a standard 6-month warranty on all work performed by our handymen. For supplied materials, the warranty follows legal requirements (typically 24 months).",
            },
          ];
  const heroData = {
    title: "Handyman Services in Levice",
    description:
      "Professional handyman services in Levice and surrounding areas for quick and reliable repairs, assembly, and home maintenance. We cover all of Levice.",
    formTitle: "Get a free price quote",
    formSubtitle: "The fastest handyman in Levice - fill out the form for a no-obligation estimate",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Complete Handyman Services in Levice",
    description:
      "We offer a wide range of home repair, assembly, and maintenance services in Levice and surrounding areas.",
    features: [
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Expert assembly of all types of furniture, shelving systems, kitchen units, and home equipment in Levice. We work with IKEA, JYSK, Asko, and other brands.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/curtain_icon.svg",
        title: "Installation & Mounting",
        description:
          "Professional installation of curtains, blinds, light fixtures, mirrors, TV brackets, and other home accessories in Levice.",
        link: "/en/handyman-services",
      },
      {
        image: "/icons/plumbing_icon.svg",
        title: "Plumbing Work",
        description:
          "Minor plumbing repairs and replacements - dripping faucets, tap replacement, drain cleaning, sink replacement, and more in Levice.",
        link: "/en/handyman-services",
      },
      {
        image: "/icons/electrical_icon.svg",
        title: "Electrical Work",
        description:
          "Basic electrical work in Levice - switch and outlet replacement, light fixture installation, appliance checks.",
        link: "/en/handyman-services",
      },
      {
        image: "/icons/paint_icon.svg",
        title: "Painting & Maintenance",
        description:
          "Minor painting work, crack repair, filling, wallpapering, floor covering replacement, and other maintenance tasks in Levice.",
        link: "/en/handyman-services",
      },
      {
        image: "/icons/garden_icon.svg",
        title: "Garden & Exterior Work",
        description:
          "Basic garden maintenance, outdoor furniture assembly, irrigation system installation, fence repairs in Levice and nearby areas.",
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
            benefits={["Insurance included", "No hidden fees", "Fixed price upfront"]}
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
          title="Handyman Services Throughout Levice"
          description="We operate in all areas of Levice"
          locations={["Levice center","Géňa","Kalinčiakovo","Krškany","Tlmače","Pukanec","Podlužany","Kalná nad Hronom","Kozárovce","Nový Tekov"]}
          additionalText="We also serve Nitra, Zlaté Moravce, Nové Zámky, and other surrounding towns."
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

      <div>
        <FAQ
          title="Frequently Asked Questions About Handyman Services in Levice"
          items={[
            {
              question: "What services does your handyman provide in Levice?",
              answer:
                "Our handyman provides a wide range of services including minor repairs, furniture assembly, hanging pictures and mirrors, TV mounting, light fixture installation, switch and outlet replacement, and other household maintenance tasks.",
            },
            {
              question: "How much does a handyman cost in Levice?",
              answer:
                "Our standard hourly rate is €25 per hour. For some common tasks, we offer flat-rate prices. The minimum charge is 1 hour, then billed in 30-minute intervals. Transport costs are charged based on distance.",
            },
            {
              question: "How quickly can you come for an inspection in Levice?",
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

      <div>
        <CTA
          title="Need a handyman in Levice?"
          description="Save your time and energy. Let our professionals handle your home repairs, assembly, and maintenance in Levice. One call and your problem will be solved quickly and affordably."
          buttonText="Book a handyman"
          buttonLink="/en/contact"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Handyman Services","description":"Professional repairs, assembly and home maintenance.","href":"/en/handyman-services","icon":"/icons/repair_icon.svg"},{"title":"Furniture Assembly","description":"Expert assembly and disassembly of all furniture types.","href":"/en/furniture-assembly","icon":"/icons/wrench_icon.svg"},{"title":"Kitchen Installation","description":"Professional kitchen fitting and installation.","href":"/en/kitchen-installation","icon":"/icons/plumbing_icon.svg"},{"title":"Apartment Moving","description":"Professional apartment and home relocation.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"}]}
      />

      <ServicePricing filter={["handyman", "furniture-assembly", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
