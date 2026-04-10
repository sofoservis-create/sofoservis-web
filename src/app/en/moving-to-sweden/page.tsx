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
  title: "Moving to Sweden — International Removals | Sofoservis",
  description:
    "Moving to Sweden from Slovakia? Stockholm is approximately 1,700 km from Bratislava — 4-6 day delivery.",
  keywords:
    "moving to sweden, moving to sweden from slovakia, moving to sweden from bratislava, international moving sweden, relocation stockholm gothenburg",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-sweden",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/svedsko",
      en: "https://www.sofoservis.sk/en/moving-to-sweden",
      "x-default": "https://www.sofoservis.sk/en/moving-to-sweden",
    },
  },
};

export default function MovingToSwedenPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Sweden?",
      answer: "No — both Slovakia and Sweden are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to Sweden take?",
      answer: "We typically deliver from Slovakia to Sweden within 4-6 business days. Malmö (southern Sweden) is faster than Stockholm or northern cities.",
    },
    {
      question: "Do you deliver to all Swedish cities?",
      answer: "Yes — we deliver throughout Sweden including Stockholm, Gothenburg, Malmö, Uppsala, Västerås, Örebro, Linköping, and all other cities.",
    },
    {
      question: "Can I use groupage for a smaller move to Sweden?",
      answer: "Yes, groupage is available for smaller shipments. We consolidate with other Sweden-bound loads for cost-effective delivery.",
    },
    {
      question: "Is furniture assembly available in Sweden?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Sweden is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Sweden — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Sweden. 1,700 km to Stockholm — 4-6 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "4-6 Day Delivery to Sweden",
        description: "Regular routes from Slovakia to Sweden — 4-6 day delivery to all Swedish cities.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Swedish Cities",
        description: "Stockholm, Gothenburg, Malmö, Uppsala, and all other Swedish destinations.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Sweden and Slovakia are both EU members — no customs formalities.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Quality packing for this long-distance northern European route.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items are insured throughout the full journey to Sweden.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Sweden.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving to Sweden from Slovakia"
        description="Relocating from Slovakia to Sweden? Sofoservis provides professional door-to-door removals to Stockholm, Gothenburg, Malmö, Uppsala, Västerås, and all Swedish destinations."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={["Stockholm, Gothenburg, Malmö", "4-6 day delivery to Sweden", "Door-to-door service"]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Sweden" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Sweden" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Sweden from Slovakia"
          subtitle="Common questions about relocating to Sweden"
          items={faqItems}
          callToActionText="Moving to Sweden? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Sweden?"
          description="Get a free quote today. We deliver from Slovakia to Sweden in 4-6 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Stockholm", description: "Dedicated Stockholm route page.", href: "/en/moving-to-stockholm", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Norway", description: "Also moving to Norway?", href: "/en/moving-to-norway", icon: "/icons/globe_icon.svg" },
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
