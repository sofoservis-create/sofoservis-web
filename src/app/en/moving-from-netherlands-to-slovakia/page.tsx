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
  title: "Moving from Netherlands to Slovakia — | Sofoservis",
  description:
    "Professional international moving from the Netherlands to Slovakia. We cover Amsterdam, Rotterdam, The Hague, and all Dutch cities.",
  keywords:
    "moving from netherlands to slovakia, moving from amsterdam to slovakia, netherlands to slovakia removals, dutch to slovakia moving, international moving netherlands slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-netherlands-to-slovakia",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-holandska-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-netherlands-to-slovakia",
      "x-default": "https://www.sofoservis.sk/en/moving-from-netherlands-to-slovakia",
    },
  },
};

export default function MovingFromNetherlandsToSlovakiaPage() {
  const faqItems = [
    {
      question: "How long does shipping from the Netherlands to Slovakia take?",
      answer:
        "Transit from the Netherlands to Slovakia typically takes 3-5 days. We operate regular routes that keep waiting times short and costs competitive.",
    },
    {
      question: "Are there customs requirements for moving from the Netherlands to Slovakia?",
      answer:
        "Both the Netherlands and Slovakia are EU members, so no customs formalities apply to personal household goods. We handle all standard transport documentation.",
    },
    {
      question: "What Dutch cities do you collect from?",
      answer:
        "We collect from anywhere in the Netherlands — Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Tilburg, Groningen, and all other cities and towns.",
    },
    {
      question: "Can I send just a few boxes from the Netherlands to Slovakia?",
      answer:
        "Yes, our groupage service is perfect for smaller shipments. Your items are consolidated with other shipments on the same route, keeping costs affordable.",
    },
    {
      question: "Do you provide packing materials for the move?",
      answer:
        "Yes, we can supply packing boxes, tape, bubble wrap, and protective materials. We also offer a full professional packing service if preferred.",
    },
  ];

  const featuresData = {
    title: "Netherlands to Slovakia — Reliable Long-Distance Removals",
    description:
      "Regular routes between the Netherlands and Slovakia mean competitive prices and short lead times for your international move.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Regular Netherlands–Slovakia Routes",
        description:
          "We run scheduled services between the Netherlands and Slovakia, keeping transit times short and prices competitive.",
        link: "/en/moving-from-netherlands-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Nationwide Dutch Collection",
        description:
          "We collect from Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, and all Dutch cities.",
        link: "/en/moving-from-netherlands-to-slovakia",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using materials suited for long-distance international transport.",
        link: "/en/moving-from-netherlands-to-slovakia",
      },
      {
        image: "/icons/document_icon.svg",
        title: "All Documentation Managed",
        description:
          "We handle all transport paperwork so your move proceeds without delays.",
        link: "/en/moving-from-netherlands-to-slovakia",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "Your belongings are covered by transport insurance throughout the entire journey.",
        link: "/en/moving-from-netherlands-to-slovakia",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture before the move and reassemble it at your new Slovak address.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving from the Netherlands to Slovakia"
        description="Relocating from the Netherlands to Slovakia? Sofoservis provides professional door-to-door international removals from all Dutch cities to any address in Slovakia. Regular routes, affordable prices, and a fully managed moving experience."
        backgroundImage="/images/stahovanie-gauc.avif"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Regular routes from the Netherlands",
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
        <GoogleReviews title="Trusted for Netherlands to Slovakia Removals" />
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
          title="Reviews from Customers Who Moved from the Netherlands"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from the Netherlands to Slovakia"
          subtitle="Common questions about relocating from the Netherlands to Slovakia"
          items={faqItems}
          callToActionText="Moving from the Netherlands to Slovakia? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from the Netherlands to Slovakia?"
          description="Contact us today for a free, detailed quote. Our team is ready to help you relocate from the Netherlands to Slovakia."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving to Slovakia",
            description: "Overview of all routes to Slovakia from abroad.",
            href: "/en/moving-to-slovakia",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving from Slovakia to Netherlands",
            description: "Moving the other direction? We cover that too.",
            href: "/en/moving-from-slovakia-to-netherlands",
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
