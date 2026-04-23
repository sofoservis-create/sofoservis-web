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
  title: "Moving Services Nové Mesto Bratislava | Sofoservis",
  description:
    "Professional moving services in Nové Mesto Bratislava. We move apartments, offices, and businesses. Reliable team, competitive prices. Free quote.",
  keywords:
    "moving nove mesto, moving services nove mesto, apartment moving nove mesto, nove mesto bratislava moving",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-nove-mesto",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-nove-mesto",
      en: "https://www.sofoservis.sk/en/moving-nove-mesto",
      "x-default": "https://www.sofoservis.sk/stahovanie-nove-mesto",
    },
  },
};

const faqItems = [
  {
    question: "Do you move offices in Nové Mesto?",
    answer:
      "Yes, Nové Mesto is a major business hub, and we have extensive experience moving offices and companies in this district. We offer weekend moves to ensure zero downtime for your business.",
  },
  {
    question: "What is the price for moving in Nové Mesto?",
    answer:
      "Our rates start from €25/hour per worker. A standard move within Nové Mesto or to other parts of Bratislava starts from €40. For a precise estimate, please fill out our contact form.",
  },
  {
    question: "Can you handle moving from high-rise buildings in Nové Mesto?",
    answer:
      "Absolutely. We have experience with modern high-rise residential and office buildings in Nové Mesto. We coordinate with building management for lift access and parking.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes, we can provide all necessary packing materials including boxes, bubble wrap, and tape. We also offer a complete professional packing service.",
  },
];

export default function MovingNoveMestoPage() {
  const mapData = {
    title: "Moving Throughout Nové Mesto and Beyond",
    description: "We provide moving services in all parts of Nové Mesto and surrounding Bratislava districts.",
    locations: [
      "Nové Mesto",
      "Kramáre",
      "Koliba",
      "Rača",
      "Ružinov",
      "Old Town",
      "Vajnory",
      "Lamač",
    ],
    additionalText: "We also serve the wider Bratislava region and offer international moving.",
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
          title="Moving Services in Nové Mesto"
          description="Complete moving solutions for households and businesses in Nové Mesto. Whether you are moving to a flat in Kramáre or an office near Račianske mýto, our team is ready to help."
          formTitle="Moving in Nové Mesto — free quote"
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
          title="Moving Services in Nové Mesto"
          description="Complete moving solutions for households and businesses in Nové Mesto. Whether you are moving to a flat in Kramáre or an office near Račianske mýto, our team is ready to help."
          formTitle="Moving in Nové Mesto — free quote"
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
          title="Professional Moving in Nové Mesto"
          description="High-quality moving services for the diverse needs of Nové Mesto's residents and businesses."
          features={[
            {
              image: "/icons/house_icon.svg",
              title: "Apartment Moving",
              description: "Moving apartments in Nové Mesto, from Koliba villas to Kramáre flats. Professional and safe transport.",
              link: "/en/apartment-moving",
            },
            {
              image: "/icons/briefcase_icon.svg",
              title: "Office Moving",
              description: "Expert office relocation in Nové Mesto's business centers. Efficient moves during off-hours and weekends.",
              link: "/en/office-moving",
            },
            {
              image: "/icons/wrench_icon.svg",
              title: "Furniture Assembly",
              description: "Professional disassembly and reassembly of all types of furniture. We save your time and energy.",
              link: "/en/furniture-assembly",
            },
            {
              image: "/icons/crane_icon.svg",
              title: "Heavy Load Moving",
              description: "Safe transport of pianos, safes, and server equipment. Specialized tools for heavy items.",
              link: "/en/moving-heavy-loads",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Property Clearance",
              description: "Clearing out old offices or apartments in Nové Mesto. Ecological disposal of unwanted items.",
              link: "/en/home-junk-removal",
            },
            {
              image: "/icons/globe_icon.svg",
              title: "International Moving",
              description: "Relocating from Nové Mesto to any country in Europe. Complete logistical support.",
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
        <FAQ title="Frequently Asked Questions — Moving in Nové Mesto" items={faqItems} />
      </div>
      <div>
        <CTA />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava", description: "Professional moving across all of Bratislava.", href: "/en/moving-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Office Moving", description: "Efficient office relocation with minimal downtime.", href: "/en/office-moving", icon: "/icons/briefcase_icon.svg" },
          { title: "Home Clearance", description: "Property clearance in Nové Mesto from €25/hour.", href: "/en/home-clearance-nove-mesto", icon: "/icons/vypratavanie_icon.svg" },
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
