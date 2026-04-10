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
  title: "Moving Bratislava to Amsterdam — International | Sofoservis",
  description:
    "Professional moving from Bratislava to Amsterdam. Approximately 1,200 km — regular routes with 3-5 day delivery.",
  keywords:
    "moving bratislava amsterdam, moving from bratislava to amsterdam, bratislava to amsterdam removals, moving to amsterdam from slovakia, stahovanie bratislava amsterdam",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-amsterdam",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-amsterdam",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-amsterdam",
    },
  },
};

export default function MovingBratislavaAmsterdamPage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Amsterdam?",
      answer:
        "The road distance from Bratislava to Amsterdam is approximately 1,200 km. The journey by truck takes around 11-12 hours.",
    },
    {
      question: "How long does the Bratislava to Amsterdam move take?",
      answer:
        "We typically deliver from Bratislava to Amsterdam within 3-5 business days using our regular scheduled routes.",
    },
    {
      question: "Are there customs requirements for moving from Bratislava to Amsterdam?",
      answer:
        "No — both Slovakia and the Netherlands are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all areas of Amsterdam?",
      answer:
        "Yes, we deliver throughout Amsterdam — all city districts and the Amsterdam Metropolitan Area (Groot-Amsterdam).",
    },
    {
      question: "Can you move a partial household from Bratislava to Amsterdam?",
      answer:
        "Yes, our groupage service is ideal for smaller quantities. We consolidate with other Netherlands-bound shipments for cost efficiency.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Amsterdam: Reliable Long-Distance Service",
    description:
      "Regular routes between Bratislava and Amsterdam provide competitive prices and consistent 3-5 day delivery times.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-5 Day Delivery to Amsterdam",
        description:
          "Scheduled departures from Bratislava ensure reliable delivery to Amsterdam within 3-5 business days.",
        link: "/en/moving-bratislava-amsterdam",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Amsterdam Areas",
        description:
          "We deliver throughout Amsterdam city and the wider metropolitan region.",
        link: "/en/moving-bratislava-amsterdam",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Quality packing materials and expert techniques for long-distance delivery.",
        link: "/en/moving-bratislava-amsterdam",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Amsterdam.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured throughout the journey from Bratislava to Amsterdam.",
        link: "/en/moving-bratislava-amsterdam",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs formalities required.",
        link: "/en/moving-bratislava-amsterdam",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving from Bratislava to Amsterdam"
        description="Moving from Bratislava to Amsterdam? Sofoservis provides professional door-to-door removals on this popular 1,200 km route. Regular departures, 3-5 day delivery, and a fully managed moving service."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "3-5 day delivery to Amsterdam",
          "Door-to-door service",
          "Fully insured",
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
        <GoogleReviews title="Trusted for Bratislava–Amsterdam Moves" />
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
          title="Reviews from Bratislava–Amsterdam Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Amsterdam"
          subtitle="Common questions about the Bratislava–Amsterdam moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Amsterdam? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Amsterdam?"
          description="Get a free quote today. We deliver from Bratislava to Amsterdam in 3-5 business days."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia to Netherlands",
            description: "Full country-to-country coverage for Slovakia to Netherlands.",
            href: "/en/moving-from-slovakia-to-netherlands",
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
