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
  title: "Moving Bratislava to Vienna — Fast | Sofoservis",
  description:
    "Moving from Bratislava to Vienna? Just 60 km apart — one of Europe's fastest cross-border moves. Professional door-to-door service, often same-day.",
  keywords:
    "moving bratislava vienna, moving from bratislava to vienna, bratislava to vienna removals, stahovanie bratislava vieden, moving to vienna from bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-vienna",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-vienna",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-vienna",
    },
  },
};

export default function MovingBratislavaViennaPage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Vienna?",
      answer:
        "Bratislava and Vienna are approximately 60 km apart, making this one of the shortest capital-to-capital distances in the world. The drive takes around 45-60 minutes depending on border and traffic conditions.",
    },
    {
      question: "How quickly can you move my belongings from Bratislava to Vienna?",
      answer:
        "Thanks to the short distance, we can often arrange same-day or next-day collection and delivery between Bratislava and Vienna. Contact us and we will confirm the earliest available slot.",
    },
    {
      question: "Are there customs requirements for the Bratislava–Vienna route?",
      answer:
        "Both Slovakia and Austria are EU members. No customs formalities apply to personal household goods on this route. We handle all transport documentation.",
    },
    {
      question: "What areas of Vienna do you cover?",
      answer:
        "We deliver throughout all 23 Vienna districts — from the 1st district (Innere Stadt) to outer districts like Floridsdorf, Donaustadt, and Liesing.",
    },
    {
      question: "Do you move single items like a sofa or wardrobe from Bratislava to Vienna?",
      answer:
        "Yes, we move individual pieces of furniture as well as full households. For single items or a few pieces, we use our cost-effective groupage service.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Vienna: Europe's Most Convenient International Move",
    description:
      "At just 60 km, the Bratislava-to-Vienna route is one of Europe's fastest cross-border moves. We make it as easy as a local move.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Same-Day Service Available",
        description:
          "The short 60 km distance means we can often provide same-day or next-day moving service between Bratislava and Vienna.",
        link: "/en/moving-bratislava-vienna",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Vienna Districts Covered",
        description:
          "We deliver to every part of Vienna — all 23 districts, from the city centre to the outer residential areas.",
        link: "/en/moving-bratislava-vienna",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "We professionally pack and wrap all your belongings so they arrive safely at your new Vienna address.",
        link: "/en/moving-bratislava-vienna",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture in Bratislava and fully reassemble it in your Vienna home.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All your items are insured during transport for complete peace of mind.",
        link: "/en/moving-bratislava-vienna",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs Hassle",
        description:
          "EU-to-EU move — no customs declarations. A smooth, straightforward relocation.",
        link: "/en/moving-bratislava-vienna",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving from Bratislava to Vienna"
        description="Moving from Bratislava to Vienna? With just 60 km between the two capitals, this is one of Europe's easiest international moves. Sofoservis provides fast, professional door-to-door removals — often same-day or next-day. No customs, no hassle."
        backgroundImage="/images/stahovanie-gauc.avif"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Just 60 km — often same day",
          "Door-to-door delivery",
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
        <GoogleReviews title="Trusted for Bratislava–Vienna Moves" />
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
          title="Reviews from Bratislava–Vienna Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Vienna"
          subtitle="Common questions about the Bratislava–Vienna moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Vienna? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Vienna?"
          description="Get in touch today. We can often arrange your Bratislava-to-Vienna move within 24 hours."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia to Austria",
            description: "Full country-to-country route coverage.",
            href: "/en/moving-from-slovakia-to-austria",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/truck_icon.svg",
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
