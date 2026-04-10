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
  title: "Moving Services Ružinov Bratislava | Sofoservis",
  description:
    "Professional moving services in Ružinov. We move apartments, houses, and offices in one of Bratislava's most popular districts. Reliable and fast.",
  keywords:
    "moving ruzinov, moving services ruzinov, apartment moving ruzinov, ruzinov bratislava moving",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-ruzinov",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-ruzinov",
      en: "https://www.sofoservis.sk/en/moving-ruzinov",
      "x-default": "https://www.sofoservis.sk/stahovanie-ruzinov",
    },
  },
};

const faqItems = [
  {
    question: "Do you move apartments in all parts of Ružinov?",
    answer:
      "Yes, we provide moving services in all areas of Ružinov, including Štrkovec, Trávniky, Ostredky, Pošeň, Prievoz, and Vlčie hrdlo. We know the district well and can handle any residential building type.",
  },
  {
    question: "What is the price for moving in Ružinov?",
    answer:
      "Our rates start from €25/hour per worker. Moving within Ružinov or to other parts of Bratislava starts from €40. For a standard 2-bedroom apartment move, 3 workers are usually the most efficient choice.",
  },
  {
    question: "Can you help with office moving in Ružinov?",
    answer:
      "Absolutely. Ružinov is home to many business centers, and we have extensive experience with office relocations in the area. We offer flexible scheduling, including weekends, to minimize business disruption.",
  },
  {
    question: "Do you offer furniture assembly in Ružinov?",
    answer:
      "Yes, we provide professional furniture disassembly and reassembly as part of our moving services. Our team is experienced with all major furniture brands.",
  },
];

export default function MovingRuzinovPage() {
  const mapData = {
    title: "Moving Throughout Ružinov and Beyond",
    description: "We provide moving services in all parts of Ružinov and surrounding Bratislava districts.",
    locations: [
      "Ružinov",
      "Prievoz",
      "Vlčie hrdlo",
      "Nivy",
      "Old Town",
      "Nové Mesto",
      "Vrakuňa",
      "Podunajské Biskupice",
    ],
    additionalText: "We also serve the wider Bratislava region and provide international moving services.",
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving Services in Ružinov"
        description="Reliable and professional moving for homes and businesses in Ružinov. Whether you're moving to a flat in Štrkovec or an office near Bajkalská, we provide top-tier service at fair prices."
        formTitle="Moving in Ružinov — free quote"
        formSubtitle="Fill out the form for a quick fixed price"
        backgroundImage="/images/stahovanie_gauc.jpg"
        lang="en"
        benefits={["Furniture insurance included", "No hidden fees", "Fixed price upfront"]}
      />
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews showCarousel={true} />
      </div>
      <div>
        <Features
          title="Professional Moving in Ružinov"
          description="Complete moving solutions tailored for the needs of one of Bratislava's most popular districts."
          features={[
            {
              image: "/icons/house_icon.svg",
              title: "Apartment Moving",
              description: "Moving apartments in Ružinov. We handle all furniture types and ensure safe transport to your new home.",
              link: "/en/apartment-moving",
            },
            {
              image: "/icons/briefcase_icon.svg",
              title: "Office Moving",
              description: "Professional relocation for businesses in Ružinov's business districts. Efficient service with minimal downtime.",
              link: "/en/office-moving",
            },
            {
              image: "/icons/wrench_icon.svg",
              title: "Assembly & Disassembly",
              description: "Expert assembly and disassembly of furniture. We save you time and protect your belongings.",
              link: "/en/furniture-assembly",
            },
            {
              image: "/icons/crane_icon.svg",
              title: "Heavy Item Moving",
              description: "Moving pianos, safes, and other heavy loads in Ružinov. Specialized equipment for safe handling.",
              link: "/en/moving-heavy-loads",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Clearance Services",
              description: "Need to empty an old flat or office in Ružinov? We handle disposal and ecological waste management.",
              link: "/en/home-junk-removal",
            },
            {
              image: "/icons/globe_icon.svg",
              title: "International Moving",
              description: "Relocating from Ružinov abroad. Complete support for your international move across Europe.",
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
        <FAQ title="Frequently Asked Questions — Moving in Ružinov" items={faqItems} />
      </div>
      <div>
        <CTA />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava", description: "Professional moving across all of Bratislava.", href: "/en/moving-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Apartment Moving", description: "Reliable moving of apartments and family houses.", href: "/en/apartment-moving", icon: "/icons/house_icon.svg" },
          { title: "Home Clearance", description: "Property clearance in Ružinov from €25/hour.", href: "/en/home-clearance-ruzinov", icon: "/icons/vypratavanie_icon.svg" },
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
