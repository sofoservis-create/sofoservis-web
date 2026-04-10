import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
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
  title: "Moving to the UK — International Removals | Sofoservis",
  description:
    "Moving to the UK from Slovakia? We manage post-Brexit customs documentation and provide door-to-door removals to all major UK cities. 5-7 day delivery.",
  keywords:
    "moving to uk, moving to uk from slovakia, moving to uk from bratislava, international moving uk, relocation united kingdom, moving to england from slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-uk",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/anglicko",
      en: "https://www.sofoservis.sk/en/moving-to-uk",
      "x-default": "https://www.sofoservis.sk/en/moving-to-uk",
    },
  },
};

export default function MovingToUkPage() {
  const faqItems = [
    {
      question: "Are there customs requirements when moving from Slovakia to the UK?",
      answer: "Yes — since Brexit, the UK is no longer in the EU. Household goods moving from Slovakia to the UK require UK customs clearance. You may qualify for Transfer of Residence (ToR) relief if you are permanently relocating. Our team handles all documentation.",
    },
    {
      question: "How long does delivery from Slovakia to the UK take?",
      answer: "Door-to-door transit from Slovakia to the UK typically takes 5-7 business days. Transit time includes the Channel crossing (Eurotunnel or ferry) and UK customs processing.",
    },
    {
      question: "Do you deliver to all parts of the UK?",
      answer: "Yes — we deliver throughout England, Scotland, Wales, and Northern Ireland. London, Birmingham, Manchester, Glasgow, Edinburgh, and all other cities are covered.",
    },
    {
      question: "Is a groupage service available for Slovakia–UK moves?",
      answer: "Yes, groupage is available for smaller shipments. Your items share a truck with other UK-bound loads, keeping costs manageable while ensuring safe delivery.",
    },
    {
      question: "Is my furniture insured during transport to the UK?",
      answer: "All items are covered by transport insurance for the full duration of the journey, including the Channel crossing.",
    },
  ];

  const featuresData = {
    title: "Moving to the UK — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to the UK. 1,500 km — 5-7 days.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Post-Brexit Customs Handled",
        description: "We manage all UK customs documentation including Transfer of Residence (ToR) relief applications for permanent moves.",
        link: "/en/moving-to-uk",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "5-7 Day Delivery to the UK",
        description: "Regular departures ensure reliable 5-7 day delivery from Slovakia to any UK destination.",
        link: "/en/moving-to-uk",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All UK Regions Covered",
        description: "London, Birmingham, Manchester, Glasgow, Edinburgh, and all other UK cities and regions.",
        link: "/en/moving-to-uk",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Professional packing using materials suitable for this long international journey.",
        link: "/en/moving-to-uk",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description: "All belongings are insured for the full journey including the Channel crossing.",
        link: "/en/moving-to-uk",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly at your UK destination.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving to the UK from Slovakia"
        description="Relocating from Slovakia to the UK? Sofoservis handles post-Brexit customs and provides professional door-to-door removals to London, Birmingham, Manchester, Edinburgh, and all UK cities."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={["Post-Brexit customs handled", "5-7 day delivery to the UK", "Door-to-door service"]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to the UK" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to the UK" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to the UK from Slovakia"
          subtitle="Common questions about relocating to the UK"
          items={faqItems}
          callToActionText="Moving to the UK? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to the UK?"
          description="Get a free quote today. We handle all post-Brexit customs and deliver door-to-door across the UK."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to London", description: "Dedicated London route page.", href: "/en/moving-to-london", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to London", description: "Bratislava–London moving route.", href: "/en/moving-bratislava-london", icon: "/icons/truck_icon.svg" },
          { title: "International Moving Services", description: "All international routes and destinations.", href: "/en/international-moving-services", icon: "/icons/globe_icon.svg" },
          { title: "Furniture Assembly", description: "Expert assembly and disassembly of all furniture.", href: "/en/furniture-assembly", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <ServicePricing filter={["international-moving", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
