import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import LocationMap from "@/components/sections/LocationMap";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Moving Services Karlova Ves Bratislava | Sofoservis",
  description:
    "Professional moving services in Karlova Ves. We move apartments, family houses, and offices. Experience with steep terrain and complex access. Free quote.",
  keywords:
    "moving karlova ves, moving services karlova ves, apartment moving karlova ves, karlova ves moving company",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-karlova-ves",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-karlova-ves",
      en: "https://www.sofoservis.sk/en/moving-karlova-ves",
      "x-default": "https://www.sofoservis.sk/stahovanie-karlova-ves",
    },
  },
};

const faqItems = [
  {
    question: "Do you have experience with the complex access in Karlova Ves?",
    answer:
      "Yes, we are familiar with the steep streets and specific access conditions in Karlova Ves (Dlhé Diely). We use appropriate vehicles and techniques to ensure a smooth move regardless of the terrain.",
  },
  {
    question: "What is the cost of moving in Karlova Ves?",
    answer:
      "Moving in Karlova Ves starts from €25/hour per worker. A standard move with 3 workers costs €67/hour. Moving within Bratislava starts from €40. Contact us for a free fixed price quote.",
  },
  {
    question: "Do you move apartments in Dlhé Diely?",
    answer:
      "Yes, we frequently move apartments in Dlhé Diely. We have experience with large panel blocks as well as newer residential complexes. We can handle walk-ups without lifts if necessary.",
  },
  {
    question: "How far in advance should I book my move in Karlova Ves?",
    answer:
      "We recommend booking 1-2 weeks in advance, especially for weekends. However, for urgent cases, we can often arrange an express move within 24-48 hours.",
  },
];

export default function MovingKarlovaVesPage() {
  const mapData = {
    title: "Moving Throughout Karlova Ves and Beyond",
    description: "We provide services in all parts of Karlova Ves, including Dlhé Diely and surrounding districts.",
    locations: [
      "Karlova Ves",
      "Dlhé Diely",
      "Dúbravka",
      "Old Town",
      "Petržalka",
      "Devín",
      "Mlynská dolina",
      "Lamač",
    ],
    additionalText: "We also serve the entire Bratislava region and move customers abroad.",
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving Services in Karlova Ves"
          description="Professional moving for homes and offices in Karlova Ves. We handle the specific terrain and access conditions of this district with ease. Reliable team, transparent pricing."
          formTitle="Moving in Karlova Ves — free quote"
          formSubtitle="Fill out the form for a quick fixed price"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Moving Services in Karlova Ves"
          description="Professional moving for homes and offices in Karlova Ves. We handle the specific terrain and access conditions of this district with ease. Reliable team, transparent pricing."
          formTitle="Moving in Karlova Ves — free quote"
          formSubtitle="Fill out the form for a quick fixed price"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews showCarousel={true} />
      </div>
      <div>
        <Features
          title="Expert Moving in Karlova Ves"
          description="Complete moving solutions tailored for the specific needs of Karlova Ves residents."
          features={[
            {
              image: "/icons/house_icon.svg",
              title: "Apartment Moving",
              description: "Moving apartments in Karlova Ves and Dlhé Diely. We handle all furniture types and ensure safe transport.",
              link: "/en/apartment-moving",
            },
            {
              image: "/icons/briefcase_icon.svg",
              title: "Office Moving",
              description: "Professional relocation for businesses in Karlova Ves. Efficient service with minimal disruption.",
              link: "/en/office-moving",
            },
            {
              image: "/icons/wrench_icon.svg",
              title: "Assembly & Disassembly",
              description: "We take apart and rebuild your furniture. Essential for large pieces and narrow corridors.",
              link: "/en/furniture-assembly",
            },
            {
              image: "/icons/crane_icon.svg",
              title: "Heavy Item Moving",
              description: "Moving pianos, safes, and other heavy loads in Karlova Ves. Specialized equipment and techniques used.",
              link: "/en/moving-heavy-loads",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Clearance Services",
              description: "Need to clear out an old apartment or basement? We handle disposal and ecological waste management.",
              link: "/en/home-junk-removal",
            },
            {
              image: "/icons/globe_icon.svg",
              title: "International Relocation",
              description: "Moving from Karlova Ves to anywhere in Europe. Stress-free international moving services.",
              link: "/en/international-moving-services",
            },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>
      <div>
        <InstagramFeed />
      </div>
      <div>
        <LocationMap
          title={mapData.title}
          description={mapData.description}
          locations={mapData.locations}
          additionalText={mapData.additionalText}
        />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <FAQ title="Frequently Asked Questions — Moving in Karlova Ves" items={faqItems} />
      </div>
      <div>
        <CTA />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava", description: "Professional moving across all of Bratislava.", href: "/en/moving-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Apartment Moving", description: "Reliable moving of apartments and family houses.", href: "/en/apartment-moving", icon: "/icons/house_icon.svg" },
          { title: "Home Clearance", description: "Property clearance in Karlova Ves from €25/hour.", href: "/en/home-clearance-karlova-ves", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Furniture Removal", description: "Old furniture pickup and ecological disposal.", href: "/en/furniture-removal", icon: "/icons/recycle_icon.svg" },
        ]}
      />
      <ServicePricing filter={["moving", "clearance", "international-moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
