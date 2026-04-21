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
  title: "Moving to Austria — Fast, Affordable Removals | Sofoservis",
  description:
    "Professional moving from Slovakia to Austria. Bratislava to Vienna in under 1 hour. Expert international removals with door-to-door delivery.",
  keywords:
    "moving from slovakia to austria, moving from bratislava to vienna, slovakia to austria removals, international moving slovakia austria, moving bratislava vienna",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-slovakia-to-austria",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-austria",
      "x-default": "https://www.sofoservis.sk/en/moving-from-slovakia-to-austria",
    },
  },
};

export default function MovingFromSlovakiaToAustriaPage() {
  const faqItems = [
    {
      question: "How quickly can you move my belongings from Bratislava to Vienna?",
      answer:
        "Bratislava and Vienna are just 60 km apart, making this one of the quickest international moves possible. For moves between Bratislava and Vienna, we can often arrange same-day or next-day service.",
    },
    {
      question: "Are there any customs requirements for moving from Slovakia to Austria?",
      answer:
        "No — both Slovakia and Austria are EU members. There are no customs formalities for moving personal household goods between the two countries. We handle all standard transport documentation.",
    },
    {
      question: "Do you cover destinations in Austria beyond Vienna?",
      answer:
        "Yes, we deliver throughout Austria — Vienna, Graz, Linz, Salzburg, Innsbruck, Klagenfurt, and all other cities, towns, and regions.",
    },
    {
      question: "Can you move just one or two pieces of furniture to Austria?",
      answer:
        "Yes, we handle single-item transport as well as full household moves. For smaller shipments we use our groupage service to keep the cost affordable.",
    },
    {
      question: "Do you offer furniture assembly at my new Austrian address?",
      answer:
        "Yes, furniture disassembly and reassembly is available as part of our full-service move. Our team will have everything set up at your new home in Austria.",
    },
  ];

  const featuresData = {
    title: "Slovakia to Austria — The Convenient Cross-Border Move",
    description:
      "With Bratislava and Vienna just 60 km apart, this is one of the most popular and convenient international moves we serve.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Fast Bratislava–Vienna Service",
        description:
          "The short distance between Bratislava and Vienna allows for very fast turnaround, often same-day or next-day.",
        link: "/en/moving-from-slovakia-to-austria",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Delivery Throughout Austria",
        description:
          "We deliver to Vienna, Graz, Linz, Salzburg, Innsbruck, Klagenfurt, and all other Austrian destinations.",
        link: "/en/moving-from-slovakia-to-austria",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "We professionally pack your belongings to ensure everything arrives safely at your new Austrian home.",
        link: "/en/moving-from-slovakia-to-austria",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Disassembly & Assembly",
        description:
          "We handle disassembly before the move and reassembly at your new Austrian address.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "Your belongings are covered by transport insurance for the entire journey.",
        link: "/en/moving-from-slovakia-to-austria",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs Hassle",
        description:
          "EU-to-EU move — no customs declarations required. A smooth, straightforward relocation.",
        link: "/en/moving-from-slovakia-to-austria",
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
          title="Moving from Slovakia to Austria"
          description="Moving from Slovakia to Austria? With Bratislava just 60 km from Vienna, this is one of the fastest cross-border moves available. Sofoservis provides professional door-to-door removals from anywhere in Slovakia to any address in Austria — often within 24 hours."
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
          title="Moving from Slovakia to Austria"
          description="Moving from Slovakia to Austria? With Bratislava just 60 km from Vienna, this is one of the fastest cross-border moves available. Sofoservis provides professional door-to-door removals from anywhere in Slovakia to any address in Austria — often within 24 hours."
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
        <GoogleReviews title="Trusted for Slovakia to Austria Removals" />
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
          title="Reviews from Customers Who Moved from Slovakia to Austria"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Slovakia to Austria"
          subtitle="Common questions about relocating from Slovakia to Austria"
          items={faqItems}
          callToActionText="Moving from Slovakia to Austria? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to Austria?"
          description="Get in touch today for a quick, free quote. We can often arrange your Slovakia-to-Austria move within 24 hours."
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
            title: "Moving Bratislava to Vienna",
            description: "City-to-city route between Bratislava and Vienna.",
            href: "/en/moving-bratislava-vienna",
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
