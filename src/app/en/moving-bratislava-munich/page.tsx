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
  title: "Moving Bratislava–Munich | International Removals",
  description:
    "Professional moving from Bratislava to Munich. Approximately 360 km — regular routes with fast 1-2 day delivery.",
  keywords:
    "moving bratislava munich, moving from bratislava to munich, bratislava to munich removals, moving to munich from slovakia, stahovanie bratislava mníchov",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-munich",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-munich",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-munich",
    },
  },
};

export default function MovingBratislavaMunichPage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Munich?",
      answer:
        "The road distance from Bratislava to Munich is approximately 360 km. The journey takes around 3.5-4.5 hours by truck.",
    },
    {
      question: "How quickly can you move my belongings from Bratislava to Munich?",
      answer:
        "For moves between Bratislava and Munich, we typically deliver within 1-2 business days.",
    },
    {
      question: "Are there any customs requirements on the Bratislava–Munich route?",
      answer:
        "No — both Slovakia and Germany are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all areas of Munich?",
      answer:
        "We deliver throughout Munich — all city districts, the city centre, and the wider metropolitan area including Schwabing, Maxvorstadt, Haidhausen, Neuhausen, and outlying suburbs.",
    },
    {
      question: "Can you move my bicycle or motorcycle along with my household?",
      answer:
        "Yes, we can include bicycles and motorcycles in your shipment from Bratislava to Munich. Please mention them when requesting your quote.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Munich: A Popular Bavaria Relocation Route",
    description:
      "Munich is a top destination for Slovaks moving to Germany. Our regular Bratislava–Munich service ensures fast, reliable delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Fast 1-2 Day Delivery to Munich",
        description:
          "Regular departures from Bratislava ensure fast delivery to Munich within 1-2 business days.",
        link: "/en/moving-bratislava-munich",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Munich Areas Covered",
        description:
          "We deliver to all Munich districts and the wider metropolitan area.",
        link: "/en/moving-bratislava-munich",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing for safe delivery on this popular route.",
        link: "/en/moving-bratislava-munich",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Munich.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured for the journey from Bratislava to Munich.",
        link: "/en/moving-bratislava-munich",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs declarations required.",
        link: "/en/moving-bratislava-munich",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving from Bratislava to Munich"
        description="Moving from Bratislava to Munich? Sofoservis provides professional door-to-door removals on this popular 360 km route. Regular departures, 1-2 day delivery, and a fully managed moving experience."
        backgroundImage="/images/stahovanie-gauc.avif"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "1-2 day delivery to Munich",
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
        <GoogleReviews title="Trusted for Bratislava–Munich Moves" />
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
          title="Reviews from Bratislava–Munich Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Munich"
          subtitle="Common questions about the Bratislava–Munich moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Munich? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Munich?"
          description="Get a free quote today. We deliver from Bratislava to Munich in 1-2 business days."
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
            title: "Moving Bratislava to Berlin",
            description: "The Bratislava–Berlin moving route.",
            href: "/en/moving-bratislava-berlin",
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
