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
  title: "Moving to France — International Removals | Sofoservis",
  description:
    "Professional international moving from Slovakia to France. We cover Paris, Lyon, Marseille, Bordeaux, and all French cities.",
  keywords:
    "moving from slovakia to france, moving from bratislava to paris, slovakia to france removals, international moving slovakia france, moving to paris from slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-france",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-to-france",
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/francuzsko",
      "x-default": "https://www.sofoservis.sk/en/moving-to-france",
    },
  },
};

export default function MovingFromSlovakiaToFrancePage() {
  const faqItems = [
    {
      question: "How long does moving from Slovakia to France take?",
      answer:
        "Transit from Slovakia to France typically takes 4-7 days. From Bratislava to Paris it is usually 4-5 days. Destinations in the south of France may take slightly longer. We provide regular updates throughout your move.",
    },
    {
      question: "Are there customs formalities for moving from Slovakia to France?",
      answer:
        "No — both Slovakia and France are EU member states. No customs declarations are required for moving personal household goods between EU countries. We handle all standard transport documentation.",
    },
    {
      question: "Which cities in France do you deliver to?",
      answer:
        "We deliver throughout France — Paris, Lyon, Marseille, Toulouse, Nice, Bordeaux, Strasbourg, Nantes, Lille, Rennes, and all other cities, towns, and regions.",
    },
    {
      question: "Can I use a groupage service for my Slovakia to France move?",
      answer:
        "Yes, if you have a partial household or fewer items, our groupage (part-load) service allows you to share a vehicle with other shipments, significantly reducing the cost.",
    },
    {
      question: "Do you assemble furniture at my new French address?",
      answer:
        "Yes, furniture disassembly and reassembly is available as part of our full-service move.",
    },
  ];

  const featuresData = {
    title: "Slovakia to France — Long-Distance Moving Professionals",
    description:
      "Regular departures between Slovakia and France ensure competitive prices and reliable transit times for your international relocation.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Regular Slovakia–France Departures",
        description:
          "We operate scheduled services between Slovakia and France, keeping transit times and prices competitive.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Delivery Throughout France",
        description:
          "We deliver to Paris, Lyon, Marseille, Bordeaux, Toulouse, Strasbourg, Lille, and all French cities.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "We use quality materials suited for long international journeys to keep your items safe.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/document_icon.svg",
        title: "All Documentation Handled",
        description:
          "We manage all transport paperwork so your relocation runs without delays.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured during transport for complete peace of mind.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble before the move and reassemble your furniture at your new French home.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving from Slovakia to France"
          description="Relocating from Slovakia to France? Sofoservis provides professional long-distance international removals from anywhere in Slovakia to Paris, Lyon, Marseille, and all French cities. Regular routes, affordable prices, and a stress-free experience."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Moving from Slovakia to France"
          description="Relocating from Slovakia to France? Sofoservis provides professional long-distance international removals from anywhere in Slovakia to Paris, Lyon, Marseille, and all French cities. Regular routes, affordable prices, and a stress-free experience."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted for Slovakia to France Removals" />
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
          title="Reviews from Our Clients"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Slovakia to France"
          subtitle="Common questions about relocating from Slovakia to France"
          items={faqItems}
          callToActionText="Moving from Slovakia to France? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to France?"
          description="Contact us today for a free, detailed quote. Our team is ready to help you relocate to France."
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
            title: "Moving Bratislava to Paris",
            description: "City-to-city route between Bratislava and Paris.",
            href: "/en/moving-to-paris",
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
