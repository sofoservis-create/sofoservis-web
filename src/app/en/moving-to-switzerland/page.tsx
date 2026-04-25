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
  title: "Moving to Switzerland — International Removals | Sofoservis",
  description:
    "Professional international moving from Slovakia to Switzerland. We handle Swiss customs clearance and deliver to Zurich, Geneva, Basel, and Bern.",
  keywords:
    "moving from slovakia to switzerland, moving from bratislava to zurich, slovakia to switzerland removals, international moving slovakia switzerland, moving to switzerland from slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-switzerland",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-to-switzerland",
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/svajciarsko",
      "x-default": "https://www.sofoservis.sk/en/moving-to-switzerland",
    },
  },
};

export default function MovingFromSlovakiaToSwitzerlandPage() {
  const faqItems = [
    {
      question: "Are there customs requirements when moving from Slovakia to Switzerland?",
      answer:
        "Yes — Switzerland is not an EU member state. Moving personal household goods from Slovakia to Switzerland requires Swiss customs clearance. You may qualify for customs duty relief if you are permanently relocating. Our team prepares all the required documentation.",
    },
    {
      question: "How long does the move from Slovakia to Switzerland take?",
      answer:
        "Transit from Slovakia to Switzerland typically takes 2-4 days depending on the destination city. To Zurich it is usually 2-3 days, to Geneva it may take 3-4 days.",
    },
    {
      question: "Which cities in Switzerland do you deliver to?",
      answer:
        "We deliver throughout Switzerland — Zurich, Geneva, Basel, Bern, Lausanne, Lugano, Winterthur, St. Gallen, and all other cities and municipalities.",
    },
    {
      question: "What documents do I need for the Swiss customs process?",
      answer:
        "You will typically need a detailed inventory list, proof of your change of residence, and a completed Swiss customs declaration form. Our team guides you through the entire process and prepares all paperwork.",
    },
    {
      question: "Can you move a partial household from Slovakia to Switzerland?",
      answer:
        "Yes, our groupage service allows you to send a partial load at a significantly reduced cost compared to a full truck.",
    },
  ];

  const featuresData = {
    title: "Slovakia to Switzerland — Expert Non-EU Moving",
    description:
      "Switzerland requires customs clearance — but our experienced team handles everything, making your Slovakia-to-Switzerland move smooth and straightforward.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Swiss Customs Expertise",
        description:
          "We prepare all Swiss customs documentation and guide you through the import process for a hassle-free relocation.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Door-to-Door Delivery",
        description:
          "We collect from your Slovak address and deliver directly to Zurich, Geneva, Basel, Bern, or anywhere in Switzerland.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "We use quality materials to protect all your belongings during international transport.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Swiss Destinations",
        description:
          "We deliver throughout all Swiss cantons — German, French, and Italian-speaking regions.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "Your belongings are insured for the entire journey from Slovakia to Switzerland.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture before the move and reassemble it at your new Swiss home.",
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
          title="Moving from Slovakia to Switzerland"
          description="Relocating from Slovakia to Switzerland? Sofoservis provides professional door-to-door removals from anywhere in Slovakia to all Swiss cities. Our team handles Swiss customs clearance, professional packing, and safe delivery to your new Swiss home."
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
          title="Moving from Slovakia to Switzerland"
          description="Relocating from Slovakia to Switzerland? Sofoservis provides professional door-to-door removals from anywhere in Slovakia to all Swiss cities. Our team handles Swiss customs clearance, professional packing, and safe delivery to your new Swiss home."
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
        <GoogleReviews title="Trusted for Slovakia to Switzerland Removals" />
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
          title="FAQ — Moving from Slovakia to Switzerland"
          subtitle="Common questions about relocating from Slovakia to Switzerland"
          items={faqItems}
          callToActionText="Moving from Slovakia to Switzerland? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to Switzerland?"
          description="Contact us today for a free quote. We handle Swiss customs and deliver door-to-door anywhere in Switzerland."
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
            title: "Moving Bratislava to Zurich",
            description: "City-to-city route between Bratislava and Zurich.",
            href: "/en/moving-to-zurich",
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
