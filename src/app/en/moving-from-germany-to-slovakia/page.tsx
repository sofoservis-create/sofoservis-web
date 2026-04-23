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
  title: "Moving from Germany to Slovakia — | Sofoservis",
  description:
    "Professional international moving from Germany to Slovakia. Regular routes from Munich, Berlin, Frankfurt, Hamburg, and all German cities.",
  keywords:
    "moving from germany to slovakia, moving from munich to slovakia, moving from berlin to slovakia, germany to slovakia removals, international moving germany slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-germany-to-slovakia",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-nemecka-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-germany-to-slovakia",
      "x-default": "https://www.sofoservis.sk/en/moving-from-germany-to-slovakia",
    },
  },
};

export default function MovingFromGermanyToSlovakiaPage() {
  const faqItems = [
    {
      question: "How long does it take to move from Germany to Slovakia?",
      answer:
        "Transit from Germany to Slovakia typically takes 2-4 days depending on the origin city. From Munich it is usually 1-2 days. From northern Germany (Hamburg, Berlin) it takes 3-4 days. We operate regular routes so your goods are never waiting long.",
    },
    {
      question: "Do I need any special permits to move from Germany to Slovakia?",
      answer:
        "Both Germany and Slovakia are EU member states, so no customs formalities are required for moving personal household goods between the two countries. We handle all transport documentation.",
    },
    {
      question: "What cities in Germany do you collect from?",
      answer:
        "We collect from anywhere in Germany — Munich, Berlin, Hamburg, Frankfurt, Cologne, Stuttgart, Düsseldorf, Leipzig, Dresden, and all other cities and towns.",
    },
    {
      question: "Can I move just a few items from Germany to Slovakia?",
      answer:
        "Yes, we offer groupage (part-load) services for smaller quantities. This is a cost-effective solution if you have a few boxes or individual furniture pieces rather than a full household.",
    },
    {
      question: "Is transport insurance included in the price?",
      answer:
        "Yes, basic transport insurance is included in the standard moving price. Additional insurance for high-value or fragile items can be arranged at your request.",
    },
  ];

  const featuresData = {
    title: "Why Choose Sofoservis for Your Germany to Slovakia Move?",
    description:
      "With regular routes between Germany and Slovakia, we offer fast, reliable, and competitively priced international removals.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Regular Routes from Germany",
        description:
          "We run regular scheduled services between Germany and Slovakia, minimising waiting times and keeping costs low.",
        link: "/en/moving-from-germany-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Nationwide German Collection",
        description:
          "We collect from Munich, Berlin, Hamburg, Frankfurt, Cologne, Stuttgart, and everywhere else in Germany.",
        link: "/en/moving-from-germany-to-slovakia",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing Service",
        description:
          "Our team can professionally pack your entire household using materials designed for long-distance moves.",
        link: "/en/moving-from-germany-to-slovakia",
      },
      {
        image: "/icons/document_icon.svg",
        title: "All Documentation Handled",
        description:
          "We manage all transport documentation so you can focus on settling into your new Slovak home.",
        link: "/en/moving-from-germany-to-slovakia",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All belongings are insured throughout the entire journey from Germany to Slovakia.",
        link: "/en/moving-from-germany-to-slovakia",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Disassembly & Assembly",
        description:
          "We disassemble furniture before loading and reassemble it at your new Slovak address.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving from Germany to Slovakia"
          description="Relocating from Germany to Slovakia? Sofoservis offers professional door-to-door international removals from all German cities to any address in Slovakia. Competitive prices, regular routes, and a hassle-free experience from start to finish."
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
          title="Moving from Germany to Slovakia"
          description="Relocating from Germany to Slovakia? Sofoservis offers professional door-to-door international removals from all German cities to any address in Slovakia. Competitive prices, regular routes, and a hassle-free experience from start to finish."
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
        <GoogleReviews title="Trusted for Germany to Slovakia Removals" />
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
          title="Reviews from Customers Who Moved from Germany"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Germany to Slovakia"
          subtitle="Common questions about relocating from Germany to Slovakia"
          items={faqItems}
          callToActionText="Moving from Germany to Slovakia? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Germany to Slovakia?"
          description="Contact us today for a fast, free quote on your Germany-to-Slovakia relocation. We are ready to help."
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
            title: "Moving from Slovakia to Germany",
            description: "Moving the other direction? We cover that too.",
            href: "/en/moving-from-slovakia-to-germany",
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
