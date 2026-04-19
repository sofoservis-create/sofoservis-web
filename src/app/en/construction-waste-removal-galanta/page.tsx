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
  title: "Construction Waste Removal Galanta | Sofoservis",
  description:
    "We offer comprehensive construction waste removal and disposal services in Galanta ✅ Affordable prices ✅ Contact us today!",
  keywords:
    "construction waste removal galanta, waste disposal galanta, rubble removal Galanta, debris removal Galanta",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/construction-waste-removal-galanta",
    languages: {
      sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/galanta",
      en: "https://www.sofoservis.sk/en/construction-waste-removal-galanta",
      "x-default": "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/galanta",
      },
  },
};

export default function ConstructionWasteRemovalGalantaPage() {
  const faqItems = [
            {
              question: "How much does construction waste removal cost in Galanta?",
              answer:
                "Prices depend on the amount and type of waste, location, accessibility, and distance to the nearest collection point. Container rental (5-7m³) typically ranges from €70 to €150, including delivery, removal, and disposal of standard construction waste.",
            },
            {
              question: "What types of construction waste do you remove?",
              answer:
                "We handle virtually all types of construction waste including rubble (bricks, concrete, plaster, tiles), drywall, insulation materials, roofing, windows, doors, sanitary ceramics, construction plastics, and more.",
            },
            {
              question: "How quickly can you arrange waste removal in Galanta?",
              answer:
                "We typically respond within 24-48 hours for standard requests. For larger volumes or special waste types, allow 2-3 days. In urgent cases, we can arrange same-day removal depending on availability.",
            },
            {
              question: "Do I need a permit for construction waste disposal?",
              answer:
                "For regular construction waste from home renovations, you typically don't need special permits when using an authorized company like ours. We hold all necessary permits for waste collection, transport, and disposal. We provide complete disposal documentation.",
            },
          ];
  const heroData = {
    title: "Construction Waste Removal in Galanta",
    description:
      "Professional and fast construction waste removal and ecological disposal services in Galanta and surrounding areas. We handle waste from renovations.",
    formTitle: "Get a free price quote",
    formSubtitle: "Fill out the form for a no-obligation estimate",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Complete Construction Waste Removal Services in Galanta",
    description:
      "Professional removal and ecological disposal of all types of construction waste with complete documentation.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Rubble Removal",
        description:
          "Fast and efficient removal of construction rubble after apartment, house, or building renovation and demolition.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ecological Waste Disposal",
        description:
          "We ensure ecological disposal of construction waste including rubble, bricks, concrete, plaster, and other building materials.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Waste Loading & Carrying",
        description:
          "Our workers handle complete loading and carrying of construction waste, including from upper floors, basements, or hard-to-reach places.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Container Delivery",
        description:
          "We offer delivery of various-sized containers for construction waste directly to your address, available for short-term and long-term rental.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Post-Demolition Waste Removal",
        description:
          "Specialized removal of waste after demolition work. We handle rubble from complete building and structure demolitions.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Disposal Documentation",
        description:
          "We provide complete disposal documentation for every construction waste removal, which you may need for building authorities or environmental inspections.",
        link: "/en/construction-waste-removal",
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
            benefits={["Furniture insurance included", "No hidden fees", "Fixed price upfront"]}
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

      <div className="py-16">
        <LocationMap
          title="Construction Waste Removal Throughout Galanta"
          description="We operate in all areas of Galanta"
          locations={["Galanta center","Sereď","Dolná Streda","Horné Saliby","Kajal","Mostová","Pata","Šintava","Tomášikovo","Váhovce","Veľká Mača"]}
          additionalText="We also serve Trnava, Senec, Dunajská Streda, and other surrounding towns."
          showCallToAction={true}
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} title="Customer Reviews" />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Construction Waste Removal in Galanta"
          items={[
            {
              question: "How much does construction waste removal cost in Galanta?",
              answer:
                "Prices depend on the amount and type of waste, location, accessibility, and distance to the nearest collection point. Container rental (5-7m³) typically ranges from €70 to €150, including delivery, removal, and disposal of standard construction waste.",
            },
            {
              question: "What types of construction waste do you remove?",
              answer:
                "We handle virtually all types of construction waste including rubble (bricks, concrete, plaster, tiles), drywall, insulation materials, roofing, windows, doors, sanitary ceramics, construction plastics, and more.",
            },
            {
              question: "How quickly can you arrange waste removal in Galanta?",
              answer:
                "We typically respond within 24-48 hours for standard requests. For larger volumes or special waste types, allow 2-3 days. In urgent cases, we can arrange same-day removal depending on availability.",
            },
            {
              question: "Do I need a permit for construction waste disposal?",
              answer:
                "For regular construction waste from home renovations, you typically don't need special permits when using an authorized company like ours. We hold all necessary permits for waste collection, transport, and disposal. We provide complete disposal documentation.",
            },
          ]}
        />
      </div>

      <div>
        <CTA
          title="Need construction waste removed in Galanta?"
          description="Get rid of construction waste quickly, legally, and effortlessly. Our team handles complete removal and ecological disposal of all construction waste at competitive prices."
          buttonText="Get a price quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Construction Waste Removal","description":"Fast removal and ecological disposal of all construction waste.","href":"/en/construction-waste-removal","icon":"/icons/container_icon.svg"},{"title":"Demolition Services","description":"Professional demolition of buildings, walls and interiors.","href":"/en/demolition-services","icon":"/icons/wrecking_ball_icon.svg"},{"title":"Hazardous Waste Disposal","description":"Safe disposal of hazardous waste and old appliances.","href":"/en/hazardous-waste-disposal","icon":"/icons/hazmat_icon.svg"},{"title":"Home Clearance","description":"Complete home clearance — we remove everything.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"}]}
      />

      <ServicePricing filter={["demolition", "clearance", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
