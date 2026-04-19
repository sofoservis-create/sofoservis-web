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
  title: "Moving to Rome — International Removals | Sofoservis",
  description:
    "Moving to Rome from Slovakia? Approximately 1,300 km — regular routes with 4-6 day delivery. Professional door-to-door removals with packing.",
  keywords:
    "moving to rome, moving to rome from slovakia, moving to italy from slovakia, international moving rome, relocation rome italy",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-rome",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/rim",
      en: "https://www.sofoservis.sk/en/moving-to-rome",
      "x-default": "https://www.sofoservis.sk/en/moving-to-rome",
    },
  },
};

export default function MovingToRomePage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Rome?",
      answer:
        "No — Slovakia and Italy are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Rome take?",
      answer:
        "We typically deliver from Slovakia to Rome within 4-6 business days.",
    },
    {
      question: "Do you deliver to all Rome districts (municipios)?",
      answer:
        "Yes, we deliver throughout Rome — all 15 municipios and the wider Rome metropolitan area.",
    },
    {
      question: "Can I send a partial load from Slovakia to Rome?",
      answer:
        "Yes, our groupage service allows you to share transport with other Italy-bound shipments, significantly reducing the cost.",
    },
    {
      question: "Do you offer furniture assembly in Rome?",
      answer:
        "Yes, furniture disassembly at your Slovak home and reassembly in Rome is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Rome — Professional Italian Relocation",
    description:
      "Rome is a popular destination for Slovaks moving to Italy. Our regular routes ensure reliable 4-6 day delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "4-6 Day Delivery to Rome",
        description: "Regular departures ensure delivery from Slovakia to Rome within 4-6 business days.",
        link: "/en/moving-to-rome",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Rome Municipios",
        description: "We deliver throughout Rome and the wider metropolitan area.",
        link: "/en/moving-to-rome",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Expert packing for safe long-distance delivery to Rome.",
        link: "/en/moving-to-rome",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Rome.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured throughout the journey to Rome.",
        link: "/en/moving-to-rome",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description: "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-rome",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving to Rome from Slovakia"
        description="Relocating from Slovakia to Rome? Sofoservis provides professional door-to-door removals to the Eternal City. Regular routes, 4-6 day delivery, and a fully managed moving experience."
        backgroundImage="/images/stahovanie-gauc.avif"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={["4-6 day delivery to Rome", "Door-to-door service", "Fully insured"]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Rome" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div><Features title={featuresData.title} description={featuresData.description} features={featuresData.features} callToActionText="Get a Free Quote" /></div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Rome" /></div>
      <div><FAQ title="FAQ — Moving to Rome from Slovakia" subtitle="Common questions about relocating to Rome" items={faqItems} callToActionText="Moving to Rome? Get a free quote" /></div>
      <div><CTA title="Ready to Move to Rome?" description="Get a free quote today. We deliver from Slovakia to Rome in 4-6 business days." buttonText="Request a Quote" /></div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "International Moving Services", description: "All international routes and destinations.", href: "/en/international-moving-services", icon: "/icons/globe_icon.svg" },
          { title: "Moving from Slovakia", description: "Overview of all routes from Slovakia abroad.", href: "/en/moving-from-slovakia", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Barcelona", description: "Also moving to Barcelona?", href: "/en/moving-to-barcelona", icon: "/icons/truck_icon.svg" },
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
