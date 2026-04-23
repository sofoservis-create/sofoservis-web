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
  title: "Moving to Warsaw — International Removals | Sofoservis",
  description:
    "Moving to Warsaw from Slovakia? Approximately 660 km from Bratislava — regular routes with 2-3 day delivery.",
  keywords:
    "moving to warsaw, moving to warsaw from slovakia, moving to warsaw from bratislava, international moving warsaw, relocation warsaw poland",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-warsaw",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/varsava",
      en: "https://www.sofoservis.sk/en/moving-to-warsaw",
      "x-default": "https://www.sofoservis.sk/en/moving-to-warsaw",
    },
  },
};

export default function MovingToWarsawPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Warsaw?",
      answer:
        "No — Slovakia and Poland are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Warsaw take?",
      answer:
        "We typically deliver from Slovakia to Warsaw within 2-3 business days using our regular routes.",
    },
    {
      question: "Do you deliver to all Warsaw districts?",
      answer:
        "Yes, we deliver to all Warsaw districts and the wider Warsaw metropolitan area including Praga, Mokotów, Ursynów, Wola, Targówek, and surrounding municipalities.",
    },
    {
      question: "Can I send a partial load from Slovakia to Warsaw?",
      answer:
        "Yes, our groupage service is ideal for smaller shipments. We consolidate with other Poland-bound loads for cost-effective transport.",
    },
    {
      question: "Do you offer furniture assembly in Warsaw?",
      answer:
        "Yes, furniture disassembly at your Slovak home and reassembly in Warsaw is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Warsaw — Reliable Slovakia–Poland Service",
    description:
      "Regular routes between Slovakia and Warsaw ensure consistent 2-3 day delivery at competitive prices.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "2-3 Day Delivery to Warsaw",
        description:
          "Scheduled departures ensure reliable delivery from Slovakia to Warsaw within 2-3 business days.",
        link: "/en/moving-to-warsaw",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Warsaw Districts",
        description:
          "We deliver throughout Warsaw and the greater metropolitan area.",
        link: "/en/moving-to-warsaw",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using quality materials for safe delivery.",
        link: "/en/moving-to-warsaw",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Warsaw.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All belongings are insured throughout the journey to Warsaw.",
        link: "/en/moving-to-warsaw",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs formalities required.",
        link: "/en/moving-to-warsaw",
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
          title="Moving to Warsaw from Slovakia"
          description="Relocating from Slovakia to Warsaw? Sofoservis provides professional door-to-door removals on this popular route. Regular departures, 2-3 day delivery, and a fully managed moving experience to Poland's capital."
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
          title="Moving to Warsaw from Slovakia"
          description="Relocating from Slovakia to Warsaw? Sofoservis provides professional door-to-door removals on this popular route. Regular departures, 2-3 day delivery, and a fully managed moving experience to Poland's capital."
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
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Warsaw" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Warsaw" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Warsaw from Slovakia"
          subtitle="Common questions about relocating to Warsaw"
          items={faqItems}
          callToActionText="Moving to Warsaw? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Warsaw?"
          description="Get a free quote today. We deliver from Slovakia to Warsaw in 2-3 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava to Warsaw", description: "Dedicated Bratislava–Warsaw route page.", href: "/en/moving-bratislava-warsaw", icon: "/icons/truck_icon.svg" },
          { title: "International Moving Services", description: "All international routes and destinations.", href: "/en/international-moving-services", icon: "/icons/globe_icon.svg" },
          { title: "Moving from Slovakia", description: "Overview of all routes from Slovakia abroad.", href: "/en/moving-from-slovakia", icon: "/icons/globe_icon.svg" },
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
