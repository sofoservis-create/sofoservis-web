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
  title: "Moving to Sweden — International Removals | Sofoservis",
  description:
    "Professional international moving from Slovakia to Sweden. Door-to-door delivery to Stockholm, Gothenburg, Malmö, and all of Sweden.",
  keywords:
    "moving from slovakia to sweden, moving from bratislava to stockholm, slovakia to sweden removals, international moving slovakia sweden, moving to stockholm from slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-sweden",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-to-sweden",
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/svedsko",
      "x-default": "https://www.sofoservis.sk/en/moving-to-sweden",
    },
  },
};

export default function MovingFromSlovakiaToSwedenPage() {
  const faqItems = [
    {
      question: "How long does a move from Slovakia to Sweden take?",
      answer:
        "Transit from Slovakia to Sweden typically takes 4-7 days. To Stockholm it is usually 5-6 days. To Malmö in southern Sweden it may be slightly shorter at 4-5 days. We keep you informed throughout.",
    },
    {
      question: "Are there customs requirements for moving from Slovakia to Sweden?",
      answer:
        "Both Slovakia and Sweden are EU members. No customs formalities apply to personal household goods moved between EU countries. We handle all standard transport documentation.",
    },
    {
      question: "Which Swedish cities do you deliver to?",
      answer:
        "We deliver throughout Sweden — Stockholm, Gothenburg, Malmö, Uppsala, Västerås, Örebro, Linköping, Helsingborg, and all other Swedish cities and towns.",
    },
    {
      question: "Can I send just a few items from Slovakia to Sweden?",
      answer:
        "Yes, our groupage (part-load) service is perfect for smaller quantities. Your items share a vehicle with other Scandinavian shipments, keeping costs affordable.",
    },
    {
      question: "Is furniture assembly available in Sweden?",
      answer:
        "Yes, furniture disassembly before the move and reassembly at your new Swedish address is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Slovakia to Sweden — Scandinavian Moving Specialists",
    description:
      "Reliable scheduled services between Slovakia and Sweden for a smooth, professionally managed Scandinavian relocation.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Regular Slovakia–Sweden Routes",
        description:
          "We operate scheduled departures to Sweden, ensuring consistent transit times and competitive pricing.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Delivery Throughout Sweden",
        description:
          "We deliver to Stockholm, Gothenburg, Malmö, Uppsala, and all other Swedish destinations.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "We pack all your items using materials suited for long Scandinavian routes.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/document_icon.svg",
        title: "All Documentation Handled",
        description:
          "We manage all transport paperwork for a seamless relocation.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All belongings are insured throughout the entire journey to Sweden.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly before the move and full reassembly at your new Swedish home.",
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
          title="Moving from Slovakia to Sweden"
          description="Relocating from Slovakia to Sweden? Sofoservis provides professional door-to-door international removals from anywhere in Slovakia to Stockholm, Gothenburg, Malmö, and all Swedish cities. Competitive prices and a managed, stress-free experience."
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
          title="Moving from Slovakia to Sweden"
          description="Relocating from Slovakia to Sweden? Sofoservis provides professional door-to-door international removals from anywhere in Slovakia to Stockholm, Gothenburg, Malmö, and all Swedish cities. Competitive prices and a managed, stress-free experience."
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
        <GoogleReviews title="Trusted for Slovakia to Sweden Removals" />
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
          title="Reviews from Customers Who Moved from Slovakia to Sweden"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Slovakia to Sweden"
          subtitle="Common questions about relocating from Slovakia to Sweden"
          items={faqItems}
          callToActionText="Moving from Slovakia to Sweden? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to Sweden?"
          description="Contact us today for a free quote on your Slovakia-to-Sweden relocation."
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
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving from Slovakia to Norway",
            description: "Also moving to Norway? We cover that route too.",
            href: "/en/moving-to-norway",
            icon: "/icons/truck_icon.svg",
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
