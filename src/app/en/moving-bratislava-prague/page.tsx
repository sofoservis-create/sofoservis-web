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
  title: "Moving Bratislava–Prague | International Removals",
  description:
    "Professional moving from Bratislava to Prague. Approximately 330 km by road — a popular route with regular departures.",
  keywords:
    "moving bratislava prague, moving from bratislava to prague, bratislava to prague removals, moving to prague from slovakia, stahovanie bratislava praha",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-prague",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-prague",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-prague",
    },
  },
};

export default function MovingBratislavaPraguePage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Prague?",
      answer:
        "The road distance from Bratislava to Prague is approximately 330 km. The journey typically takes around 3-4 hours by truck depending on traffic and border conditions.",
    },
    {
      question: "How quickly can you move my belongings from Bratislava to Prague?",
      answer:
        "We can typically arrange collection in Bratislava and delivery in Prague within 1-2 days. Same-day service may be available for smaller loads.",
    },
    {
      question: "Are there customs requirements on the Bratislava–Prague route?",
      answer:
        "No — both Slovakia and Czech Republic are EU members. No customs formalities apply to personal household goods. We handle all transport documentation.",
    },
    {
      question: "Which areas of Prague do you deliver to?",
      answer:
        "We deliver throughout Greater Prague — all city districts, the city centre, and surrounding suburbs and towns.",
    },
    {
      question: "Can you move a single piece of furniture from Bratislava to Prague?",
      answer:
        "Yes, we handle single items and full households. For smaller shipments our groupage service is the most cost-effective option.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Prague: A Popular Neighbouring-Capital Route",
    description:
      "At 330 km, Prague is a popular destination from Bratislava. We make the move fast, affordable, and completely managed.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Fast 1-2 Day Delivery",
        description:
          "We typically deliver from Bratislava to Prague within 1-2 business days.",
        link: "/en/moving-bratislava-prague",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Prague Districts",
        description:
          "We deliver throughout Prague — all districts and the wider metropolitan area.",
        link: "/en/moving-bratislava-prague",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using quality materials for safe delivery.",
        link: "/en/moving-bratislava-prague",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Prague — all included in our full service.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured during transport between Bratislava and Prague.",
        link: "/en/moving-bratislava-prague",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork needed.",
        link: "/en/moving-bratislava-prague",
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
          title="Moving from Bratislava to Prague"
          description="Moving from Bratislava to Prague? Sofoservis provides professional door-to-door removals on this popular 330 km route. Fast 1-2 day delivery, full packing service, and furniture assembly — all handled by our experienced team."
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
          title="Moving from Bratislava to Prague"
          description="Moving from Bratislava to Prague? Sofoservis provides professional door-to-door removals on this popular 330 km route. Fast 1-2 day delivery, full packing service, and furniture assembly — all handled by our experienced team."
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
        <GoogleReviews title="Trusted for Bratislava–Prague Moves" />
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
          title="Reviews from Bratislava–Prague Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Prague"
          subtitle="Common questions about the Bratislava–Prague moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Prague? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Prague?"
          description="Get a free quote today. We deliver from Bratislava to Prague in 1-2 days."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
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
            title: "Moving Bratislava to Vienna",
            description: "The popular Bratislava–Vienna route.",
            href: "/en/moving-bratislava-vienna",
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
