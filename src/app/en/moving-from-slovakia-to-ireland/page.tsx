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
  title: "Moving to Ireland — International Removals | Sofoservis",
  description:
    "Professional international moving from Slovakia to Ireland. We deliver to Dublin, Cork, Galway, Limerick, and all of Ireland. Sea freight options.",
  keywords:
    "moving from slovakia to ireland, moving from bratislava to dublin, slovakia to ireland removals, international moving slovakia ireland, moving to dublin from slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-slovakia-to-ireland",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-ireland",
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/irsko",
      "x-default": "https://www.sofoservis.sk/en/moving-from-slovakia-to-ireland",
    },
  },
};

export default function MovingFromSlovakiaToIrelandPage() {
  const faqItems = [
    {
      question: "How long does a move from Slovakia to Ireland take?",
      answer:
        "Transit from Slovakia to Ireland typically takes 5-8 days. Ireland's island geography means the route includes a sea crossing, usually via the UK or direct ferry from France. We keep you updated throughout the process.",
    },
    {
      question: "Do I need customs documents to move from Slovakia to Ireland?",
      answer:
        "Both Slovakia and Ireland are EU member states, so no customs formalities apply to personal household goods. We handle all standard transport documentation.",
    },
    {
      question: "Which Irish cities do you deliver to?",
      answer:
        "We deliver throughout Ireland — Dublin, Cork, Galway, Limerick, Waterford, Kilkenny, Sligo, and all other cities, towns, and rural areas.",
    },
    {
      question: "Do you offer sea freight options for moves to Ireland?",
      answer:
        "Yes, for larger volumes we can arrange sea freight via container or RoRo shipping. This is particularly cost-effective for full household moves. Contact us to discuss the best option for your volume.",
    },
    {
      question: "Can I send a partial load from Slovakia to Ireland?",
      answer:
        "Yes, our groupage service is ideal for partial loads. Your items share space with other shipments going to Ireland, keeping costs affordable.",
    },
  ];

  const featuresData = {
    title: "Slovakia to Ireland — Specialist Removals Service",
    description:
      "Despite the distance and sea crossing, we make moving from Slovakia to Ireland smooth and affordable with regular scheduled services.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Regular Slovakia–Ireland Service",
        description:
          "We operate scheduled departures between Slovakia and Ireland including the sea crossing, keeping the process seamless.",
        link: "/en/moving-from-slovakia-to-ireland",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Delivery Throughout Ireland",
        description:
          "We deliver to Dublin, Cork, Galway, Limerick, and all other Irish destinations.",
        link: "/en/moving-from-slovakia-to-ireland",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Expert packing using materials suited for long international journeys including sea transit.",
        link: "/en/moving-from-slovakia-to-ireland",
      },
      {
        image: "/icons/document_icon.svg",
        title: "All Documentation Handled",
        description:
          "We manage all transport and ferry documentation for a hassle-free move.",
        link: "/en/moving-from-slovakia-to-ireland",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All belongings are insured throughout the entire journey including the sea crossing.",
        link: "/en/moving-from-slovakia-to-ireland",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture before the move and reassemble it at your new Irish address.",
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
          title="Moving from Slovakia to Ireland"
          description="Relocating from Slovakia to Ireland? Sofoservis provides professional door-to-door removals from anywhere in Slovakia to Dublin, Cork, Galway, and all of Ireland. We handle everything — packing, road transport, sea crossing, and final delivery."
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
          title="Moving from Slovakia to Ireland"
          description="Relocating from Slovakia to Ireland? Sofoservis provides professional door-to-door removals from anywhere in Slovakia to Dublin, Cork, Galway, and all of Ireland. We handle everything — packing, road transport, sea crossing, and final delivery."
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
        <GoogleReviews title="Trusted for Slovakia to Ireland Removals" />
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
          title="Reviews from Customers Who Moved from Slovakia to Ireland"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Slovakia to Ireland"
          subtitle="Common questions about relocating from Slovakia to Ireland"
          items={faqItems}
          callToActionText="Moving from Slovakia to Ireland? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to Ireland?"
          description="Contact us today for a free, detailed quote on your Slovakia-to-Ireland relocation."
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
            title: "Moving Bratislava to Dublin",
            description: "City-to-city route between Bratislava and Dublin.",
            href: "/en/moving-bratislava-dublin",
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
