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
  title: "Moving Bratislava–Berlin | International Removals",
  description:
    "Professional moving from Bratislava to Berlin. Approximately 690 km — regular routes with 2-3 day delivery.",
  keywords:
    "moving bratislava berlin, moving from bratislava to berlin, bratislava to berlin removals, moving to berlin from slovakia, stahovanie bratislava berlín",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-berlin",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-berlin",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-berlin",
    },
  },
};

export default function MovingBratislavaBerlinPage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Berlin?",
      answer:
        "The road distance from Bratislava to Berlin is approximately 690 km. The journey takes around 6-7 hours by truck.",
    },
    {
      question: "How quickly can you deliver from Bratislava to Berlin?",
      answer:
        "We typically deliver from Bratislava to Berlin within 2-3 business days. For urgent moves, contact us to discuss express options.",
    },
    {
      question: "Are there any customs requirements for moving to Berlin?",
      answer:
        "No — Slovakia and Germany are both EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all Berlin districts?",
      answer:
        "Yes, we deliver throughout Berlin — all 12 boroughs including Mitte, Prenzlauer Berg, Kreuzberg, Charlottenburg, Neukölln, Schöneberg, and all other areas.",
    },
    {
      question: "Can I use a groupage (part-load) service for my Bratislava to Berlin move?",
      answer:
        "Yes, groupage is available if you have a partial household. We consolidate your shipment with others going to Berlin, keeping the cost affordable.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Berlin: Connecting Slovakia to the German Capital",
    description:
      "Berlin is a popular destination for Slovaks moving to Germany. Our regular Bratislava–Berlin service provides reliable 2-3 day delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "2-3 Day Delivery to Berlin",
        description:
          "Regular scheduled departures from Bratislava to Berlin for consistent, fast delivery.",
        link: "/en/moving-bratislava-berlin",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Berlin Boroughs Covered",
        description:
          "We deliver to all Berlin districts — city centre and outer areas alike.",
        link: "/en/moving-bratislava-berlin",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Quality packing materials and expert techniques for safe long-distance delivery.",
        link: "/en/moving-bratislava-berlin",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Berlin.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured throughout the journey from Bratislava to Berlin.",
        link: "/en/moving-bratislava-berlin",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-bratislava-berlin",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving from Bratislava to Berlin"
          description="Moving from Bratislava to Berlin? Sofoservis provides professional door-to-door removals on this popular 690 km route. Regular departures, 2-3 day delivery, and a fully managed experience from Bratislava to the German capital."
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
          title="Moving from Bratislava to Berlin"
          description="Moving from Bratislava to Berlin? Sofoservis provides professional door-to-door removals on this popular 690 km route. Regular departures, 2-3 day delivery, and a fully managed experience from Bratislava to the German capital."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted for Bratislava–Berlin Moves" />
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
          title="Reviews from Bratislava–Berlin Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Berlin"
          subtitle="Common questions about the Bratislava–Berlin moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Berlin? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Berlin?"
          description="Get a free quote today. We deliver from Bratislava to Berlin in 2-3 business days."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia to Germany",
            description: "Full country-to-country coverage for Slovakia to Germany.",
            href: "/en/moving-from-slovakia-to-germany",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving Bratislava to Munich",
            description: "The Bratislava–Munich moving route.",
            href: "/en/moving-bratislava-munich",
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
