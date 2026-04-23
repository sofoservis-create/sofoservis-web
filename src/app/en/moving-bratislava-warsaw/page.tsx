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
  title: "Moving Bratislava–Warsaw | International Removals",
  description:
    "Professional moving from Bratislava to Warsaw. Approximately 660 km — regular routes with 2-3 day delivery.",
  keywords:
    "moving bratislava warsaw, moving from bratislava to warsaw, bratislava to warsaw removals, moving to warsaw from slovakia, stahovanie bratislava varšava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-warsaw",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/varsava",
      en: "https://www.sofoservis.sk/en/moving-bratislava-warsaw",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-warsaw",
    },
  },
};

export default function MovingBratislavaWarsawPage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Warsaw?",
      answer:
        "The road distance from Bratislava to Warsaw is approximately 660 km. The journey by truck takes around 6-7 hours.",
    },
    {
      question: "How long does the Bratislava to Warsaw move take?",
      answer:
        "We typically deliver from Bratislava to Warsaw within 2-3 business days using our regular scheduled routes.",
    },
    {
      question: "Are there customs requirements for moving from Bratislava to Warsaw?",
      answer:
        "No — both Slovakia and Poland are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all Warsaw districts?",
      answer:
        "Yes, we deliver throughout Warsaw — all city districts and the wider Warsaw metropolitan area including Praga, Mokotów, Ursynów, Wola, and outlying municipalities.",
    },
    {
      question: "Can I use a groupage service for my Bratislava to Warsaw move?",
      answer:
        "Yes, groupage is available for smaller shipments. We consolidate your items with other Poland-bound loads for cost efficiency.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Warsaw: Connecting Two EU Capitals",
    description:
      "Regular routes between Bratislava and Warsaw ensure reliable 2-3 day delivery to the Polish capital.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "2-3 Day Delivery to Warsaw",
        description:
          "Regular scheduled departures from Bratislava deliver to Warsaw within 2-3 business days.",
        link: "/en/moving-bratislava-warsaw",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Warsaw Districts",
        description:
          "We deliver to all Warsaw districts and the greater Warsaw metropolitan area.",
        link: "/en/moving-bratislava-warsaw",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Expert packing for safe delivery on this popular cross-border route.",
        link: "/en/moving-bratislava-warsaw",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Warsaw.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured throughout the journey from Bratislava to Warsaw.",
        link: "/en/moving-bratislava-warsaw",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs formalities required.",
        link: "/en/moving-bratislava-warsaw",
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
          title="Moving from Bratislava to Warsaw"
          description="Moving from Bratislava to Warsaw? Sofoservis provides professional door-to-door removals on this 660 km EU-to-EU route. Regular departures, 2-3 day delivery, and a fully managed moving experience to the Polish capital."
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
          title="Moving from Bratislava to Warsaw"
          description="Moving from Bratislava to Warsaw? Sofoservis provides professional door-to-door removals on this 660 km EU-to-EU route. Regular departures, 2-3 day delivery, and a fully managed moving experience to the Polish capital."
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
        <GoogleReviews title="Trusted for Bratislava–Warsaw Moves" />
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
          title="Reviews from Bratislava–Warsaw Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Warsaw"
          subtitle="Common questions about the Bratislava–Warsaw moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Warsaw? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Warsaw?"
          description="Get a free quote today. We deliver from Bratislava to Warsaw in 2-3 business days."
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
            title: "Moving Bratislava to Berlin",
            description: "The Bratislava–Berlin moving route.",
            href: "/en/moving-bratislava-berlin",
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
