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
  title: "Moving to Stockholm — International Removals | Sofoservis",
  description:
    "Moving to Stockholm from Slovakia? Regular Scandinavian routes with 5-7 day delivery. Professional door-to-door removals with packing and furniture.",
  keywords:
    "moving to stockholm, moving to stockholm from slovakia, moving to sweden from slovakia, international moving stockholm, relocation stockholm sweden",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-stockholm",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/stockholm",
      en: "https://www.sofoservis.sk/en/moving-to-stockholm",
      "x-default": "https://www.sofoservis.sk/en/moving-to-stockholm",
    },
  },
};

export default function MovingToStockholmPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Stockholm?",
      answer:
        "No — Slovakia and Sweden are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Stockholm take?",
      answer:
        "We typically deliver from Slovakia to Stockholm within 5-7 business days.",
    },
    {
      question: "Do you deliver throughout Stockholm?",
      answer:
        "Yes, we deliver throughout Stockholm — all municipal districts and the wider Stockholm County area.",
    },
    {
      question: "Can I use a groupage service for my move to Stockholm?",
      answer:
        "Yes, groupage is available for smaller shipments. We consolidate with other Scandinavian-bound loads for cost efficiency.",
    },
    {
      question: "Do you offer furniture assembly in Stockholm?",
      answer:
        "Yes, furniture disassembly at your Slovak home and reassembly in Stockholm is available in our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Stockholm — Scandinavian Service",
    description:
      "Stockholm is a popular destination for Slovaks moving to Scandinavia. Our regular routes ensure reliable 5-7 day delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "5-7 Day Delivery to Stockholm",
        description: "Regular Scandinavian departures ensure delivery within 5-7 business days.",
        link: "/en/moving-to-stockholm",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Stockholm Areas",
        description: "We deliver throughout Stockholm and the wider Stockholm County.",
        link: "/en/moving-to-stockholm",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Expert packing for safe long-distance Scandinavian delivery.",
        link: "/en/moving-to-stockholm",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Stockholm.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings insured throughout the journey to Stockholm.",
        link: "/en/moving-to-stockholm",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description: "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-stockholm",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving to Stockholm from Slovakia"
        description="Relocating from Slovakia to Stockholm? Sofoservis provides professional door-to-door removals to Sweden's capital. Regular Scandinavian routes, 5-7 day delivery, and a fully managed moving experience."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={["5-7 day delivery to Stockholm", "Door-to-door service", "Fully insured"]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Stockholm" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div><Features title={featuresData.title} description={featuresData.description} features={featuresData.features} callToActionText="Get a Free Quote" /></div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Stockholm" /></div>
      <div><FAQ title="FAQ — Moving to Stockholm from Slovakia" subtitle="Common questions about relocating to Stockholm" items={faqItems} callToActionText="Moving to Stockholm? Get a free quote" /></div>
      <div><CTA title="Ready to Move to Stockholm?" description="Get a free quote today. We deliver from Slovakia to Stockholm in 5-7 business days." buttonText="Request a Quote" /></div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Sweden", description: "Full Slovakia-to-Sweden coverage.", href: "/en/moving-from-slovakia-to-sweden", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Oslo", description: "Also moving to Oslo?", href: "/en/moving-to-oslo", icon: "/icons/truck_icon.svg" },
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
