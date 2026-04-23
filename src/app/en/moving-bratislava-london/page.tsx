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
  title: "Moving Bratislava to London — International Removals | Sofoservis",
  description:
    "Professional moving from Bratislava to London. Post-Brexit customs handled, door-to-door delivery across all London boroughs. 4-7 day transit.",
  keywords:
    "moving bratislava london, moving from bratislava to london, bratislava to london removals, moving to london from slovakia, stahovanie bratislava londýn",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-london",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/londyn",
      en: "https://www.sofoservis.sk/en/moving-bratislava-london",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-london",
    },
  },
};

export default function MovingBratislavaLondonPage() {
  const faqItems = [
    {
      question: "How long does moving from Bratislava to London take?",
      answer:
        "Door-to-door transit from Bratislava to London typically takes 4-7 days. The route includes a Channel crossing (via Eurotunnel or ferry). We keep you updated throughout.",
    },
    {
      question: "What customs documents are needed for moving from Bratislava to London?",
      answer:
        "Since Brexit, UK customs clearance is required for all goods entering from the EU. You may be eligible for Transfer of Residence (ToR) relief if you are permanently relocating to the UK. Our team handles all customs paperwork.",
    },
    {
      question: "Do you deliver to all London boroughs?",
      answer:
        "Yes, we deliver throughout Greater London — all 33 boroughs including Central London, North London, South London, East London, and West London.",
    },
    {
      question: "Can I send a partial load from Bratislava to London?",
      answer:
        "Yes, our groupage service is ideal for smaller shipments. Your items share a vehicle with others going to the UK, keeping costs manageable.",
    },
    {
      question: "Is my furniture insured during transport from Bratislava to London?",
      answer:
        "All items are covered by transport insurance throughout the entire Bratislava-to-London journey.",
    },
  ];

  const featuresData = {
    title: "Bratislava–London: Post-Brexit Moving Specialists",
    description:
      "The Bratislava–London route is one of our most popular. Our team manages all post-Brexit customs formalities for a smooth arrival in the UK.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Post-Brexit Customs Handled",
        description:
          "We manage all UK customs documentation including Transfer of Residence relief applications.",
        link: "/en/moving-bratislava-london",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "4-7 Day Delivery to London",
        description:
          "Regular departures ensure reliable 4-7 day delivery from Bratislava to London.",
        link: "/en/moving-bratislava-london",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using materials suitable for long international journeys.",
        link: "/en/moving-bratislava-london",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All London Boroughs",
        description:
          "We deliver throughout Greater London — all 33 boroughs.",
        link: "/en/moving-bratislava-london",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All belongings are insured for the full journey including the Channel crossing.",
        link: "/en/moving-bratislava-london",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in London.",
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
          title="Moving from Bratislava to London"
          description="Moving from Bratislava to London? Sofoservis provides professional door-to-door removals with full post-Brexit customs handling. We manage everything from Bratislava to your London address — with reliable 4-7 day delivery."
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
          title="Moving from Bratislava to London"
          description="Moving from Bratislava to London? Sofoservis provides professional door-to-door removals with full post-Brexit customs handling. We manage everything from Bratislava to your London address — with reliable 4-7 day delivery."
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
        <GoogleReviews title="Trusted for Bratislava–London Moves" />
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
          title="Reviews from Bratislava–London Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to London"
          subtitle="Common questions about the Bratislava–London moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to London? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to London?"
          description="Get a free quote today. We handle all post-Brexit customs and deliver door-to-door to London."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia to the UK",
            description: "Full country-to-country coverage for Slovakia to the UK.",
            href: "/en/moving-from-slovakia-to-uk",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving Bratislava",
            description: "Local moving services in Bratislava.",
            href: "/en/moving-bratislava",
            icon: "/icons/house_icon.svg",
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
