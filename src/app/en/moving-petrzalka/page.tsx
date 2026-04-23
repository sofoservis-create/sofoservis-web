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
  title: "Moving Services Petržalka Bratislava | Sofoservis",
  description:
    "Professional moving services in Petržalka. Specialist in moving from panel houses and high-rise buildings. Fast, reliable and affordable. Free quote.",
  keywords:
    "moving petrzalka, moving services petrzalka, apartment moving petrzalka, petrzalka bratislava moving",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-petrzalka",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-petrzalka",
      en: "https://www.sofoservis.sk/en/moving-petrzalka",
      "x-default": "https://www.sofoservis.sk/stahovanie-petrzalka",
    },
  },
};

const faqItems = [
  {
    question: "Do you specialize in moving from panel houses in Petržalka?",
    answer:
      "Yes, Petržalka is the largest residential district in Slovakia, dominated by panel blocks. We are specialists in moving from these buildings, including handling small lifts and coordination of walk-ups when items don't fit in the elevator.",
  },
  {
    question: "What is the cost of moving in Petržalka?",
    answer:
      "Our hourly rates start from €25 per worker. Moving within Petržalka or to other parts of Bratislava starts from €40. For a standard 2-bedroom flat move, we usually recommend 3 workers.",
  },
  {
    question: "How do you handle parking for the moving truck in Petržalka?",
    answer:
      "Parking in Petržalka can be challenging. We recommend that clients try to reserve a space with their own car if possible. Our drivers are experienced in navigating tight parking lots and will find the best possible spot to minimize carrying distance.",
  },
  {
    question: "Can you move heavy items like safes or large appliances in Petržalka?",
    answer:
      "Yes, we have specialized equipment for heavy loads. Whether it's a large American fridge or a safe, we can handle it safely even in buildings with limited access.",
  },
];

export default function MovingPetrzalkaPage() {
  const mapData = {
    title: "Moving Throughout Petržalka and Beyond",
    description: "We provide moving services in all parts of Petržalka, the largest residential area in Central Europe.",
    locations: [
      "Petržalka",
      "Old Town",
      "Ružinov",
      "Jarovce",
      "Rusovce",
      "Čunovo",
      "Karlova Ves",
      "Nové Mesto",
    ],
    additionalText: "We also serve surrounding areas in Austria and Hungary, and move customers internationally.",
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
          title="Moving Services in Petržalka"
          description="Professional and efficient moving for apartments and houses in Petržalka. We know every street and every type of panel block in this district. Reliable service at fair prices."
          formTitle="Moving in Petržalka — free quote"
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
          title="Moving Services in Petržalka"
          description="Professional and efficient moving for apartments and houses in Petržalka. We know every street and every type of panel block in this district. Reliable service at fair prices."
          formTitle="Moving in Petržalka — free quote"
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
          title="Expert Moving in Petržalka"
          description="Reliable moving services optimized for the largest residential district in Slovakia."
          features={[
            {
              image: "/icons/house_icon.svg",
              title: "Apartment Moving",
              description: "Complete apartment moving in Petržalka. We are experts in panel house logistics and efficient furniture transport.",
              link: "/en/apartment-moving",
            },
            {
              image: "/icons/briefcase_icon.svg",
              title: "Office Moving",
              description: "Moving businesses and offices in Petržalka's commercial areas. Weekend service available.",
              link: "/en/office-moving",
            },
            {
              image: "/icons/wrench_icon.svg",
              title: "Assembly & Disassembly",
              description: "We take care of your furniture. Professional assembly ensures your items are rebuilt correctly in your new home.",
              link: "/en/furniture-assembly",
            },
            {
              image: "/icons/crane_icon.svg",
              title: "Heavy Item Moving",
              description: "Safe transport of pianos, safes, and large appliances. Specialized equipment for Petržalka's buildings.",
              link: "/en/moving-heavy-loads",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Clearance Services",
              description: "Need to empty a flat or cellar in Petržalka? We remove old furniture and ensure ecological disposal.",
              link: "/en/home-junk-removal",
            },
            {
              image: "/icons/globe_icon.svg",
              title: "International Moving",
              description: "Relocating from Petržalka abroad. We offer complete support for moves across Europe.",
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
        <FAQ title="Frequently Asked Questions — Moving in Petržalka" items={faqItems} />
      </div>
      <div>
        <CTA />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava", description: "Professional moving across all of Bratislava.", href: "/en/moving-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Apartment Moving", description: "Reliable moving of apartments and family houses.", href: "/en/apartment-moving", icon: "/icons/house_icon.svg" },
          { title: "Home Clearance", description: "Property clearance in Petržalka from €25/hour.", href: "/en/home-clearance-petrzalka", icon: "/icons/vypratavanie_icon.svg" },
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
