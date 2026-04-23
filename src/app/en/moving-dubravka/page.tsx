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
  title: "Moving Services Dúbravka Bratislava | Sofoservis",
  description:
    "Professional moving services in Dúbravka. We move apartments from panel houses as well as family houses. Experience with walk-ups without lifts.",
  keywords:
    "moving dubravka, moving services dubravka, apartment moving dubravka, dubravka moving company",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-dubravka",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-dubravka",
      en: "https://www.sofoservis.sk/en/moving-dubravka",
      "x-default": "https://www.sofoservis.sk/stahovanie-dubravka",
    },
  },
};

const faqItems = [
  {
    question: "Do you move from high-floor apartments in Dúbravka?",
    answer:
      "Yes, this is our daily job. We have extensive experience moving furniture from any floor, even in buildings without lifts. We charge a transparent fee of €15 per floor for walk-ups.",
  },
  {
    question: "What is the cost of moving in Dúbravka?",
    answer:
      "Moving in Dúbravka starts from €25/hour per worker. Our most popular option is 3 workers for €67/hour. Moving within Bratislava starts from €40. Fill out the form for a free estimate.",
  },
  {
    question: "How long does it take to move an apartment in Dúbravka?",
    answer:
      "A 1-bedroom apartment usually takes 2–4 hours, a 2-bedroom 4–6 hours. It depends on the floor, amount of furniture, and distance to the new location.",
  },
  {
    question: "Do you help with furniture assembly?",
    answer:
      "Yes, as part of our moving service, we offer complete furniture disassembly at your old place and reassembly at your new home. We save you time and ensure your furniture's safety.",
  },
];

export default function MovingDubravkaPage() {
  const mapData = {
    title: "Moving Throughout Dúbravka and Beyond",
    description: "We cover all of Dúbravka, including all residential areas, streets, and adjacent districts.",
    locations: [
      "Dúbravka",
      "Karlova Ves",
      "Devínska Nová Ves",
      "Záhorská Bystrica",
      "Lamač",
      "Old Town",
      "Nové Mesto",
      "Rača",
    ],
    additionalText: "We also move to surrounding towns like Stupava, Malacky, and others.",
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
          title="Moving Services in Dúbravka"
          description="We move apartments and households throughout Dúbravka. We have experience with panel blocks, including carrying furniture up stairs without a lift. Professional team, fair prices."
          formTitle="Moving in Dúbravka — free quote"
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
          title="Moving Services in Dúbravka"
          description="We move apartments and households throughout Dúbravka. We have experience with panel blocks, including carrying furniture up stairs without a lift. Professional team, fair prices."
          formTitle="Moving in Dúbravka — free quote"
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
          title="Professional Moving in Dúbravka"
          description="Complete moving services for Dúbravka residents — apartments, houses, and walk-up service."
          features={[
            {
              image: "/icons/house_icon.svg",
              title: "Apartment Moving",
              description: "Complete apartment moving in Dúbravka, including panel houses. We safely transport your furniture to your new home.",
              link: "/en/apartment-moving",
            },
            {
              image: "/icons/briefcase_icon.svg",
              title: "Office Moving",
              description: "We move offices and small businesses in Dúbravka and surrounding areas. Weekend moves available at no extra cost.",
              link: "/en/office-moving",
            },
            {
              image: "/icons/wrench_icon.svg",
              title: "Assembly & Disassembly",
              description: "Expert assembly and disassembly of furniture during your move. Fast, precise, and without damage.",
              link: "/en/furniture-assembly",
            },
            {
              image: "/icons/crane_icon.svg",
              title: "Walk-up Service",
              description: "Carrying furniture up stairs without a lift in Dúbravka's panel blocks. Transparent fee of €15 per floor.",
              link: "/en/moving-heavy-loads",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Clearance Services",
              description: "Clearing apartments, basements, and garages in Dúbravka. Removal of old furniture and waste disposal.",
              link: "/en/home-junk-removal",
            },
            {
              image: "/icons/globe_icon.svg",
              title: "International Moving",
              description: "Moving from Dúbravka abroad or vice versa. Complete solution for your international relocation.",
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
        <FAQ title="Frequently Asked Questions — Moving in Dúbravka" items={faqItems} />
      </div>
      <div>
        <CTA />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava", description: "Professional moving across all of Bratislava.", href: "/en/moving-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Apartment Moving", description: "Reliable moving of apartments and family houses.", href: "/en/apartment-moving", icon: "/icons/house_icon.svg" },
          { title: "Home Clearance", description: "Property clearance in Dúbravka from €25/hour.", href: "/en/home-clearance-dubravka", icon: "/icons/vypratavanie_icon.svg" },
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
