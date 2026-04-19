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
  title: "Moving to Barcelona — International Removals | Sofoservis",
  description:
    "Moving to Barcelona from Slovakia? Approximately 1,800 km — regular routes with 5-7 day delivery.",
  keywords:
    "moving to barcelona, moving to barcelona from slovakia, moving to spain from slovakia, international moving barcelona, relocation barcelona",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-barcelona",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/barcelona",
      en: "https://www.sofoservis.sk/en/moving-to-barcelona",
      "x-default": "https://www.sofoservis.sk/en/moving-to-barcelona",
    },
  },
};

export default function MovingToBarcelonaPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Barcelona?",
      answer:
        "No — Slovakia and Spain are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Barcelona take?",
      answer:
        "We typically deliver from Slovakia to Barcelona within 5-7 business days using our regular routes.",
    },
    {
      question: "Do you deliver within Barcelona city and the wider area?",
      answer:
        "Yes, we deliver throughout Barcelona — all districts and the wider Barcelona metropolitan area including surrounding towns.",
    },
    {
      question: "Can I send a partial load from Slovakia to Barcelona?",
      answer:
        "Yes, our groupage service is ideal for smaller shipments. We consolidate with other Spain-bound loads for cost-effective transport.",
    },
    {
      question: "Do you offer furniture assembly in Barcelona?",
      answer:
        "Yes, furniture disassembly at your Slovak home and reassembly in Barcelona is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Barcelona — Southern European Specialists",
    description:
      "Barcelona is one of Europe's most desirable cities. Our regular Slovakia–Spain routes make the move affordable and reliable.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "5-7 Day Delivery to Barcelona",
        description:
          "Regular departures from Slovakia ensure delivery to Barcelona within 5-7 business days.",
        link: "/en/moving-to-barcelona",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Barcelona Districts",
        description:
          "We deliver to all Barcelona districts and the wider metropolitan area.",
        link: "/en/moving-to-barcelona",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Expert packing for safe long-distance delivery to Barcelona.",
        link: "/en/moving-to-barcelona",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Barcelona.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All belongings are insured throughout the journey to Barcelona.",
        link: "/en/moving-to-barcelona",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-barcelona",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving to Barcelona from Slovakia"
        description="Relocating from Slovakia to Barcelona? Sofoservis provides professional door-to-door removals to one of Europe's most vibrant cities. Regular routes, 5-7 day delivery, and a fully managed experience."
        backgroundImage="/images/stahovanie-gauc.avif"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={["5-7 day delivery to Barcelona", "Door-to-door service", "Fully insured"]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Barcelona" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div>
        <Features title={featuresData.title} description={featuresData.description} features={featuresData.features} callToActionText="Get a Free Quote" />
      </div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Barcelona" /></div>
      <div>
        <FAQ title="FAQ — Moving to Barcelona from Slovakia" subtitle="Common questions about relocating to Barcelona" items={faqItems} callToActionText="Moving to Barcelona? Get a free quote" />
      </div>
      <div>
        <CTA title="Ready to Move to Barcelona?" description="Get a free quote today. We deliver from Slovakia to Barcelona in 5-7 business days." buttonText="Request a Quote" />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "International Moving Services", description: "All international routes and destinations.", href: "/en/international-moving-services", icon: "/icons/globe_icon.svg" },
          { title: "Moving from Slovakia", description: "Overview of all routes from Slovakia abroad.", href: "/en/moving-from-slovakia", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Paris", description: "Also moving to Paris?", href: "/en/moving-to-paris", icon: "/icons/truck_icon.svg" },
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
