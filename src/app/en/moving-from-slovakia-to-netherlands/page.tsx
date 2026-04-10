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
  title: "Moving to Netherlands — International Removals | Sofoservis",
  description:
    "Professional international moving from Slovakia to the Netherlands. Regular routes to Amsterdam, Rotterdam, The Hague, and all Dutch cities.",
  keywords:
    "moving from slovakia to netherlands, moving from bratislava to amsterdam, slovakia to netherlands removals, international moving slovakia netherlands, moving to holland from slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-slovakia-to-netherlands",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-netherlands",
      "x-default": "https://www.sofoservis.sk/en/moving-from-slovakia-to-netherlands",
    },
  },
};

export default function MovingFromSlovakiaToNetherlandsPage() {
  const faqItems = [
    {
      question: "How long does it take to move from Slovakia to the Netherlands?",
      answer:
        "Transit from Slovakia to the Netherlands typically takes 3-5 days. We operate regular scheduled routes to minimise waiting times.",
    },
    {
      question: "Are there customs requirements between Slovakia and the Netherlands?",
      answer:
        "No — both countries are EU members. There are no customs formalities for moving personal household goods between Slovakia and the Netherlands. We handle all standard transport documentation.",
    },
    {
      question: "Which cities in the Netherlands do you deliver to?",
      answer:
        "We deliver throughout the Netherlands — Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Tilburg, Groningen, Breda, and all other cities and towns.",
    },
    {
      question: "Do you offer a groupage (part-load) service?",
      answer:
        "Yes, if you have less than a full truck load, we consolidate your shipment with others on the same route, significantly reducing the cost.",
    },
    {
      question: "What packing services do you offer for Slovakia to Netherlands moves?",
      answer:
        "We offer a full professional packing service as well as supply of materials (boxes, tape, bubble wrap) for self-packing. Our team uses materials suited for long international transit.",
    },
  ];

  const featuresData = {
    title: "Slovakia to Netherlands — Reliable Long-Distance Service",
    description:
      "Regular routes between Slovakia and the Netherlands mean competitive prices and short transit times for your international move.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Regular Slovakia–Netherlands Routes",
        description:
          "We run scheduled services between Slovakia and the Netherlands, keeping transit times short and prices low.",
        link: "/en/moving-from-slovakia-to-netherlands",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Nationwide Dutch Delivery",
        description:
          "We deliver to Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, and all Dutch cities.",
        link: "/en/moving-from-slovakia-to-netherlands",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing Service",
        description:
          "Expert packing using materials designed for long-distance international transport.",
        link: "/en/moving-from-slovakia-to-netherlands",
      },
      {
        image: "/icons/document_icon.svg",
        title: "All Documentation Managed",
        description:
          "We handle all transport paperwork so your move proceeds smoothly.",
        link: "/en/moving-from-slovakia-to-netherlands",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "Your belongings are insured throughout the entire journey from Slovakia to the Netherlands.",
        link: "/en/moving-from-slovakia-to-netherlands",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture before loading and reassemble it at your new Dutch address.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving from Slovakia to the Netherlands"
        description="Relocating from Slovakia to the Netherlands? Sofoservis provides professional door-to-door international removals from anywhere in Slovakia to Amsterdam, Rotterdam, and all Dutch cities. Regular routes, competitive prices, and a fully managed experience."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Regular routes to the Netherlands",
          "Door-to-door delivery",
          "Fully insured transport",
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
        <GoogleReviews title="Trusted for Slovakia to Netherlands Removals" />
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
          title="Reviews from Customers Who Moved from Slovakia to the Netherlands"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Slovakia to the Netherlands"
          subtitle="Common questions about relocating from Slovakia to the Netherlands"
          items={faqItems}
          callToActionText="Moving from Slovakia to the Netherlands? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to the Netherlands?"
          description="Contact us today for a free, detailed quote. Our team is ready to help you relocate to the Netherlands."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia",
            description: "Overview of all routes from Slovakia abroad.",
            href: "/en/moving-from-slovakia",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving Bratislava to Amsterdam",
            description: "City-to-city route between Bratislava and Amsterdam.",
            href: "/en/moving-bratislava-amsterdam",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
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
