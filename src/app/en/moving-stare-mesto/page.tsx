import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Moving Services Staré Mesto Bratislava | Sofoservis",
  description:
    "Professional moving services in Staré Mesto (Old Town) Bratislava. Expert handling of historic buildings and restricted access areas. Reliable and fast.",
  keywords:
    "moving stare mesto, moving services stare mesto, old town bratislava moving, apartment moving old town",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-stare-mesto",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-stare-mesto",
      en: "https://www.sofoservis.sk/en/moving-stare-mesto",
      "x-default": "https://www.sofoservis.sk/stahovanie-stare-mesto",
    },
  },
};

const faqItems = [
  {
    question: "Do you have experience moving from historic buildings in the Old Town?",
    answer:
      "Yes, we are specialists in moving from historic buildings in Staré Mesto. We are used to narrow staircases, lack of lifts, and specific architectural constraints. We handle your belongings with extra care in these sensitive environments.",
  },
  {
    question: "How do you handle access and parking in the restricted city center?",
    answer:
      "Access to parts of the Old Town requires special permits and coordination. We are familiar with the local regulations and will work with you to ensure the moving truck can get as close as possible. We recommend applying for parking reservations where applicable.",
  },
  {
    question: "What is the price for moving in Staré Mesto?",
    answer:
      "Moving in the Old Town starts from €25/hour per worker. Due to the often complex access (no lifts, long carrying distances), we recommend a consultation for a fixed price quote. Moving within Bratislava starts from €40.",
  },
  {
    question: "Can you move heavy items like pianos in the Old Town?",
    answer:
      "Yes, we have extensive experience moving heavy loads like upright pianos through the narrow corridors and staircases typical of Old Town buildings. We use specialized equipment and a highly skilled team.",
  },
];

export default function MovingStareMestoPage() {
  const mapData = {
    title: "Moving Throughout Staré Mesto and Beyond",
    description: "We provide moving services in all parts of the Bratislava city center and surrounding districts.",
    locations: [
      "Staré Mesto",
      "Palisády",
      "Hradný vrch",
      "Ružinov",
      "Nové Mesto",
      "Petržalka",
      "Karlova Ves",
    ],
    additionalText: "We also serve the wider Bratislava region and provide international moving services across Europe.",
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving Services in Staré Mesto"
        description="Expert moving for homes and offices in Bratislava's historic Old Town. We handle the unique challenges of the city center — from restricted access to buildings without lifts — with professional care."
        formTitle="Moving in Staré Mesto — free quote"
        formSubtitle="Fill out the form for a quick fixed price"
        backgroundImage="/images/stahovanie-gauc.avif"
        lang="en"
        benefits={["Historic building experts", "No hidden fees", "Fixed price upfront"]}
      />
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews showCarousel={true} />
      </div>
      <div>
        <Features
          title="Specialized Moving in the Old Town"
          description="Professional moving services optimized for the unique environment of Bratislava's historic center."
          features={[
            {
              image: "/icons/house_icon.svg",
              title: "Apartment Moving",
              description: "Moving apartments in Staré Mesto. We are experts in navigating historic buildings and narrow staircases.",
              link: "/en/apartment-moving",
            },
            {
              image: "/icons/briefcase_icon.svg",
              title: "Office Moving",
              description: "Professional relocation for businesses and embassies in the city center. Discreet and efficient service.",
              link: "/en/office-moving",
            },
            {
              image: "/icons/wrench_icon.svg",
              title: "Assembly & Disassembly",
              description: "Furniture disassembly is often essential in Old Town buildings. We handle it professionally to ensure safe passage.",
              link: "/en/furniture-assembly",
            },
            {
              image: "/icons/crane_icon.svg",
              title: "Heavy Item Moving",
              description: "Safe transport of pianos, antiques, and safes through historic spaces. Specialized care for valuable items.",
              link: "/en/moving-heavy-loads",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Clearance Services",
              description: "Emptying old apartments or cellars in the Old Town. Responsible disposal of unwanted items.",
              link: "/en/home-junk-removal",
            },
            {
              image: "/icons/globe_icon.svg",
              title: "International Moving",
              description: "Relocating from Staré Mesto abroad. Complete logistical support for international relocation.",
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
        <FAQ title="Frequently Asked Questions — Moving in Staré Mesto" items={faqItems} />
      </div>
      <div>
        <CTA />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava", description: "Professional moving across all of Bratislava.", href: "/en/moving-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Apartment Moving", description: "Reliable moving of apartments and family houses.", href: "/en/apartment-moving", icon: "/icons/house_icon.svg" },
          { title: "Home Clearance", description: "Property clearance in Staré Mesto from €25/hour.", href: "/en/home-clearance-stare-mesto", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Furniture Assembly", description: "Professional assembly and disassembly of furniture.", href: "/en/furniture-assembly", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <ServicePricing filter={["moving", "clearance", "international-moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
