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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Demolition & Building Removal Services | Sofoservis",
  description:
    "Professional demolition services for old houses, buildings, and structures ✅ Cheap and fair prices ✅ Contact us today!",
  keywords:
    "demolition services, building demolition, house demolition, structure removal, demolition contractor, wall removal, selective demolition",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/demolition-services",
    languages: {
      sk: "https://www.sofoservis.sk/buranie-demolacia-domov-bytov",
      en: "https://www.sofoservis.sk/en/demolition-services",
      "x-default": "https://www.sofoservis.sk/buranie-demolacia-domov-bytov",
      },
  },
  openGraph: {
    title: "Demolition & Building Removal Services | Sofoservis",
    description:
      "Professional demolition services with full permits and eco-friendly waste disposal!",
    url: "https://www.sofoservis.sk/en/demolition-services",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function DemolitionServicesPage() {
  const faqItems = [
            {
              question:
                "What permits are needed for building demolition?",
              answer:
                "Building demolition typically requires a demolition permit issued by the local building authority. The application must include: property ownership documents, cadastral map, demolition project prepared by an authorized person, statements from relevant bodies (gas, water, electricity companies), and in some cases a structural assessment. Our company can help with preparing the necessary documentation and communication with authorities.",
            },
            {
              question:
                "How much does demolishing a house or building cost?",
              answer:
                "The demolition cost depends on several factors: size and type of building, construction materials used, accessibility and location, need for special procedures, amount and type of waste, and other specific requirements. For smaller structures like garages, prices range from €2,000 to €5,000. Family houses typically cost €5,000 to €15,000, while larger commercial buildings may exceed €20,000. The price includes waste removal and disposal.",
            },
            {
              question:
                "How long does it take to demolish a typical family house?",
              answer:
                "The time needed to demolish a typical family house (approximately 100-150m²) is 2 to 5 days, depending on the construction materials, access conditions, and need for special procedures. The process includes several phases: preparation (disconnecting utilities, securing the site, removing hazardous materials), main demolition, material sorting, and subsequent removal and disposal of waste.",
            },
            {
              question:
                "Do you also demolish parts of buildings, not just complete structures?",
              answer:
                "Yes, we also perform selective demolition of building sections, not just complete demolition. We can professionally remove extensions, terraces, garages, outbuildings, or just internal non-load-bearing partitions while preserving the main structure. This type of selective demolition is ideal for renovations where you need to change the layout or remove problematic parts of a building.",
            },
            {
              question:
                "How do you handle demolition in densely populated areas?",
              answer:
                "For demolitions in densely populated areas, we follow strict safety and environmental procedures. We prepare a detailed demolition plan, inform neighbors and local authorities, secure the site with protective barriers, and use dust reduction techniques (water spraying) and noise barriers. We use appropriate machinery that minimizes vibrations that could damage surrounding structures.",
            },
          ];
  const featuresData = {
    title: "Comprehensive Demolition & Removal Services",
    description:
      "We offer solutions for all types of demolition work with emphasis on safety and professionalism.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Complete Building Demolition",
        description:
          "Complete demolition of family houses, apartment buildings, and industrial structures. We use modern technologies and procedures for controlled demolition.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Wall & Partition Removal",
        description:
          "Professional removal of load-bearing and non-load-bearing walls in apartments and houses. We arrange all necessary permits and structural assessments.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/broom_icon.svg",
        title: "Pre-Demolition Clearance",
        description:
          "Complete clearance of buildings before demolition. We dispose of all movable property and waste according to current regulations.",
        link: "/en/home-junk-removal",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Waste Removal",
        description:
          "We handle removal and disposal of all construction waste from demolition work. We have containers of various sizes.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/safety_icon.svg",
        title: "Permits & Safety",
        description:
          "We arrange all necessary building permits, structural assessments, and follow strict safety protocols for all demolition work.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Eco-Friendly Material Disposal",
        description:
          "We care for the environment - construction waste is thoroughly sorted, recycled, and eco-friendly disposed of in compliance with environmental regulations.",
        link: "/en/construction-waste-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Demolition & Building Removal Services"
        description="Professional demolition services for old houses, buildings, barns, and other structures. We handle the complete process from preparation through safe demolition to removal and eco-friendly disposal of construction waste."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        backgroundImage="/images/stahovanie_gauc.jpg"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Full permits handled",
          "Safe demolition",
          "Complete waste removal",
        ]}
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
          title="Join our satisfied customers"
        />
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
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="What our customers say about us"
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Demolition Services"
          items={[
            {
              question:
                "What permits are needed for building demolition?",
              answer:
                "Building demolition typically requires a demolition permit issued by the local building authority. The application must include: property ownership documents, cadastral map, demolition project prepared by an authorized person, statements from relevant bodies (gas, water, electricity companies), and in some cases a structural assessment. Our company can help with preparing the necessary documentation and communication with authorities.",
            },
            {
              question:
                "How much does demolishing a house or building cost?",
              answer:
                "The demolition cost depends on several factors: size and type of building, construction materials used, accessibility and location, need for special procedures, amount and type of waste, and other specific requirements. For smaller structures like garages, prices range from €2,000 to €5,000. Family houses typically cost €5,000 to €15,000, while larger commercial buildings may exceed €20,000. The price includes waste removal and disposal.",
            },
            {
              question:
                "How long does it take to demolish a typical family house?",
              answer:
                "The time needed to demolish a typical family house (approximately 100-150m²) is 2 to 5 days, depending on the construction materials, access conditions, and need for special procedures. The process includes several phases: preparation (disconnecting utilities, securing the site, removing hazardous materials), main demolition, material sorting, and subsequent removal and disposal of waste.",
            },
            {
              question:
                "Do you also demolish parts of buildings, not just complete structures?",
              answer:
                "Yes, we also perform selective demolition of building sections, not just complete demolition. We can professionally remove extensions, terraces, garages, outbuildings, or just internal non-load-bearing partitions while preserving the main structure. This type of selective demolition is ideal for renovations where you need to change the layout or remove problematic parts of a building.",
            },
            {
              question:
                "How do you handle demolition in densely populated areas?",
              answer:
                "For demolitions in densely populated areas, we follow strict safety and environmental procedures. We prepare a detailed demolition plan, inform neighbors and local authorities, secure the site with protective barriers, and use dust reduction techniques (water spraying) and noise barriers. We use appropriate machinery that minimizes vibrations that could damage surrounding structures.",
            },
          ]}
          callToActionText="Questions about demolition? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Need to demolish an old building?"
          description="Trust demolition to experienced professionals. We handle all necessary permits, safe demolition, waste removal, and eco-friendly disposal. Take advantage of our free site inspection and no-obligation quote."
          buttonText="Get a free quote"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Construction Waste Removal","description":"Quick removal of construction debris, rubble and building waste.","href":"/en/construction-waste-removal","icon":"/icons/recycle_icon.svg"},{"title":"Handyman Services","description":"Professional repairs, installations and maintenance for your home.","href":"/en/handyman-services","icon":"/icons/repair_icon.svg"},{"title":"Home Clearance","description":"Complete home clearance — we remove everything you no longer need.","href":"/en/home-clearance","icon":"/icons/broom_icon.svg"},{"title":"Hazardous Waste Removal","description":"Safe and legal disposal of hazardous materials and old appliances.","href":"/en/hazardous-waste-removal","icon":"/icons/hazmat_icon.svg"}]}
        />
      <ServicePricing filter={["demolition", "clearance", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
