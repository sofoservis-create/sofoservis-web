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
  title: "Moving to Brussels — International Removals | Sofoservis",
  description:
    "Moving to Brussels from Slovakia? Regular routes with 3-4 day delivery to all Brussels communes.",
  keywords:
    "moving to brussels, moving to brussels from slovakia, moving to brussels from bratislava, international moving brussels, relocation brussels belgium",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-brussels",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/brusel",
      en: "https://www.sofoservis.sk/en/moving-to-brussels",
      "x-default": "https://www.sofoservis.sk/en/moving-to-brussels",
    },
  },
};

export default function MovingToBrusselsPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Brussels?",
      answer:
        "No — Slovakia and Belgium are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Brussels take?",
      answer:
        "We typically deliver from Slovakia to Brussels within 3-4 business days.",
    },
    {
      question: "Do you deliver to all Brussels communes?",
      answer:
        "Yes, we deliver to all 19 Brussels Capital Region communes as well as the wider Brussels metropolitan area including Flemish and Walloon suburbs.",
    },
    {
      question: "Is Brussels a popular destination for Slovaks?",
      answer:
        "Yes — Brussels is home to many EU institutions and attracts professionals from across Europe, including many Slovaks working in the EU sector.",
    },
    {
      question: "Can I send a partial load from Slovakia to Brussels?",
      answer:
        "Yes, our groupage service is cost-effective for smaller shipments. We consolidate with other Belgium-bound loads.",
    },
  ];

  const featuresData = {
    title: "Moving to Brussels — The EU Capital",
    description:
      "Brussels is a major destination for Slovak professionals moving abroad. Our regular routes ensure 3-4 day delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-4 Day Delivery to Brussels",
        description:
          "Regular departures ensure consistent 3-4 day delivery from Slovakia to Brussels.",
        link: "/en/moving-to-brussels",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Brussels Communes",
        description:
          "We deliver to all 19 Brussels communes and the wider metropolitan area.",
        link: "/en/moving-to-brussels",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Expert packing for safe long-distance delivery to Brussels.",
        link: "/en/moving-to-brussels",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Brussels.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured throughout the journey to Brussels.",
        link: "/en/moving-to-brussels",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-brussels",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving to Brussels from Slovakia"
        description="Relocating from Slovakia to Brussels? Sofoservis provides professional door-to-door removals to the EU capital. Regular routes, 3-4 day delivery, and a fully managed moving experience for all Brussels communes."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={["3-4 day delivery", "Door-to-door service", "Fully insured"]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Brussels" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Brussels" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Brussels from Slovakia"
          subtitle="Common questions about relocating to Brussels"
          items={faqItems}
          callToActionText="Moving to Brussels? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Brussels?"
          description="Get a free quote today. We deliver from Slovakia to Brussels in 3-4 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava to Brussels", description: "Dedicated Bratislava–Brussels route page.", href: "/en/moving-bratislava-brussels", icon: "/icons/truck_icon.svg" },
          { title: "Moving to Amsterdam", description: "Also moving to Amsterdam?", href: "/en/moving-to-amsterdam", icon: "/icons/globe_icon.svg" },
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
