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
  title: "Moving Bratislava–Zurich | International Removals",
  description:
    "Professional moving from Bratislava to Zurich. Approximately 800 km — we handle Swiss customs clearance, full packing, and door-to-door delivery to Zurich.",
  keywords:
    "moving bratislava zurich, moving from bratislava to zurich, bratislava to zurich removals, moving to zurich from slovakia, stahovanie bratislava zürich",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-zurich",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-zurich",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-zurich",
    },
  },
};

export default function MovingBratislavaZurichPage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Zurich?",
      answer:
        "The road distance from Bratislava to Zurich is approximately 800 km. The journey takes around 7-8 hours by truck.",
    },
    {
      question: "Are there customs requirements for moving from Bratislava to Zurich?",
      answer:
        "Yes — Switzerland is not an EU member state. Moving personal household goods from Slovakia to Switzerland requires Swiss customs clearance. Our team prepares all necessary documentation and manages the full customs process.",
    },
    {
      question: "How long does the Bratislava to Zurich move take?",
      answer:
        "Including customs clearance, we typically deliver from Bratislava to Zurich within 2-4 business days.",
    },
    {
      question: "Do you deliver within Zurich city as well as the wider canton?",
      answer:
        "Yes, we deliver throughout Zurich city, all Zurich canton districts, and the greater metropolitan area.",
    },
    {
      question: "Do you offer a groupage service for smaller Bratislava–Zurich shipments?",
      answer:
        "Yes, groupage is available for partial loads. This is ideal if you have a few boxes or smaller items rather than a full household.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Zurich: Professional Non-EU Route",
    description:
      "Zurich is one of the most popular non-EU destinations from Bratislava. Our team handles Swiss customs so you don't have to.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Swiss Customs Managed",
        description:
          "We handle all Swiss customs documentation so your belongings clear smoothly.",
        link: "/en/moving-bratislava-zurich",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "2-4 Day Delivery",
        description:
          "Regular departures ensure we deliver from Bratislava to Zurich within 2-4 business days.",
        link: "/en/moving-bratislava-zurich",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using quality materials for safe delivery.",
        link: "/en/moving-bratislava-zurich",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Zurich.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All belongings are insured throughout the journey from Bratislava to Zurich.",
        link: "/en/moving-bratislava-zurich",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Zurich Areas",
        description:
          "We deliver throughout Zurich city and the wider canton.",
        link: "/en/moving-bratislava-zurich",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving from Bratislava to Zurich"
        description="Moving from Bratislava to Zurich? Sofoservis provides professional door-to-door removals with full Swiss customs handling. We make this non-EU move as simple as a domestic relocation — with 2-4 day delivery and a completely managed experience."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Swiss customs fully handled",
          "2-4 day delivery",
          "Door-to-door to Zurich",
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
        <GoogleReviews title="Trusted for Bratislava–Zurich Moves" />
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
          title="Reviews from Bratislava–Zurich Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Zurich"
          subtitle="Common questions about the Bratislava–Zurich moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Zurich? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Zurich?"
          description="Get a free quote today. We handle Swiss customs and deliver door-to-door to Zurich."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia to Switzerland",
            description: "Full country-to-country coverage for Slovakia to Switzerland.",
            href: "/en/moving-from-slovakia-to-switzerland",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving Bratislava",
            description: "Local moving services in Bratislava.",
            href: "/en/moving-bratislava",
            icon: "/icons/house_icon.svg",
          },
          {
            title: "Furniture Assembly",
            description: "Expert assembly and disassembly of all furniture types.",
            href: "/en/furniture-assembly",
            icon: "/icons/wrench_icon.svg",
          },
        ]}
      />

      <ServicePricing filter={["international-moving", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
