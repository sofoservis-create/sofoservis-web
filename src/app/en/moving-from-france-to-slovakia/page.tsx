import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
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
  title: "Moving from France to Slovakia — International | Sofoservis",
  description:
    "Professional international moving from France to Slovakia. We cover Paris, Lyon, Marseille, Toulouse, and all French cities.",
  keywords:
    "moving from france to slovakia, moving from paris to slovakia, france to slovakia removals, international moving france slovakia, paris to bratislava moving",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-france-to-slovakia",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-francuzska-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-france-to-slovakia",
      "x-default": "https://www.sofoservis.sk/en/moving-from-france-to-slovakia",
    },
  },
};

export default function MovingFromFranceToSlovakiaPage() {
  const faqItems = [
    {
      question: "How long does moving from France to Slovakia take?",
      answer:
        "Transit from France to Slovakia typically takes 4-7 days depending on the origin city. From Paris it is usually 4-5 days. From the south of France (Marseille, Nice, Toulouse) it may take slightly longer. We keep you informed at every stage.",
    },
    {
      question: "Do I need customs documents to move from France to Slovakia?",
      answer:
        "No — France and Slovakia are both EU member states. There are no customs requirements for moving personal household goods between EU countries. We handle all standard transport documentation.",
    },
    {
      question: "Which cities in France do you collect from?",
      answer:
        "We collect from anywhere in France — Paris, Lyon, Marseille, Toulouse, Nice, Nantes, Strasbourg, Bordeaux, Lille, and all other cities, towns, and regions.",
    },
    {
      question: "What is groupage and is it suitable for my France to Slovakia move?",
      answer:
        "Groupage (part-load) means your items share a vehicle with other shipments going in the same direction. It is ideal if you have a partial household or fewer than a full truckload of items. It is more affordable than a dedicated vehicle.",
    },
    {
      question: "Can you store my belongings if I'm not ready to receive them in Slovakia?",
      answer:
        "Yes, we offer short-term storage options if your new address in Slovakia is not yet ready. Contact us to discuss your storage requirements.",
    },
  ];

  const featuresData = {
    title: "France to Slovakia — Long-Distance Moving Experts",
    description:
      "Covering all of France with reliable scheduled departures to Slovakia. Full-service moves and part-load options for every budget.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "France–Slovakia Route Specialists",
        description:
          "We operate regular departures between France and Slovakia, offering consistent transit times and competitive pricing.",
        link: "/en/moving-from-france-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Nationwide French Collection",
        description:
          "We collect from Paris, Lyon, Marseille, Bordeaux, Lille, Strasbourg, and all other French cities.",
        link: "/en/moving-from-france-to-slovakia",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing Service",
        description:
          "Expert packing using materials suited for long international journeys to keep your belongings safe.",
        link: "/en/moving-from-france-to-slovakia",
      },
      {
        image: "/icons/document_icon.svg",
        title: "All Documentation Handled",
        description:
          "We manage all transport paperwork so your relocation runs smoothly.",
        link: "/en/moving-from-france-to-slovakia",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured during transport for peace of mind.",
        link: "/en/moving-from-france-to-slovakia",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble before the move and reassemble your furniture at your new Slovak home.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving from France to Slovakia"
          description="Relocating from France to Slovakia? Sofoservis provides professional long-distance international removals from Paris, Lyon, Marseille, and all French cities to any address in Slovakia. Regular routes, affordable prices, and a stress-free experience."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Moving from France to Slovakia"
          description="Relocating from France to Slovakia? Sofoservis provides professional long-distance international removals from Paris, Lyon, Marseille, and all French cities to any address in Slovakia. Regular routes, affordable prices, and a stress-free experience."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted for France to Slovakia Removals" />
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
          title="Reviews from Customers Who Moved from France"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from France to Slovakia"
          subtitle="Common questions about relocating from France to Slovakia"
          items={faqItems}
          callToActionText="Moving from France to Slovakia? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from France to Slovakia?"
          description="Contact us today for a free, detailed quote. Our team is ready to help you relocate from France to Slovakia."
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
            title: "Moving from Slovakia to France",
            description: "Moving the other direction? We cover that too.",
            href: "/en/moving-from-slovakia-to-france",
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
