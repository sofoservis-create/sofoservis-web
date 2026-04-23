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
  title: "Moving from Austria to Slovakia — Fast, | Sofoservis",
  description:
    "Professional moving from Austria to Slovakia. Vienna to Bratislava in under 1 hour.",
  keywords:
    "moving from austria to slovakia, moving from vienna to slovakia, moving from vienna to bratislava, austria to slovakia removals, international moving austria slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-austria-to-slovakia",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-rakuska-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-austria-to-slovakia",
      "x-default": "https://www.sofoservis.sk/en/moving-from-austria-to-slovakia",
    },
  },
};

export default function MovingFromAustriaToSlovakiaPage() {
  const faqItems = [
    {
      question: "How quickly can you move my belongings from Vienna to Bratislava?",
      answer:
        "Vienna and Bratislava are just 60 km apart, making this one of the fastest international moves we handle. We can often arrange same-day or next-day collection and delivery for moves between Vienna and Bratislava.",
    },
    {
      question: "Are there any customs requirements for moving from Austria to Slovakia?",
      answer:
        "No — both Austria and Slovakia are EU members, so there are no customs formalities when moving personal household goods between the two countries. We handle all standard transport documentation.",
    },
    {
      question: "Do you cover all of Austria or just Vienna?",
      answer:
        "We collect from anywhere in Austria — Vienna, Graz, Linz, Salzburg, Innsbruck, Klagenfurt, and all other cities and towns.",
    },
    {
      question: "Can you move a single piece of furniture from Austria to Slovakia?",
      answer:
        "Yes, we offer transport of individual items as well as full household moves. For smaller shipments we use our groupage service to keep costs down.",
    },
    {
      question: "Do you reassemble furniture at my new Slovak home?",
      answer:
        "Yes, furniture disassembly and reassembly is available as part of our full-service move. Our team will have everything set up at your new address.",
    },
  ];

  const featuresData = {
    title: "Austria to Slovakia — The Short Move Done Right",
    description:
      "With Vienna just 60 km from Bratislava, this is one of the most popular international routes we serve. Fast, affordable, and professional.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Same-Day Vienna to Bratislava Moves",
        description:
          "The proximity of Vienna and Bratislava allows us to offer extremely fast turnaround times. Often same-day or next-day delivery.",
        link: "/en/moving-from-austria-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Austrian Cities Covered",
        description:
          "We collect from Vienna, Graz, Linz, Salzburg, Innsbruck, Klagenfurt, and all other Austrian cities.",
        link: "/en/moving-from-austria-to-slovakia",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "We professionally pack your belongings using high-quality materials to ensure everything arrives safely.",
        link: "/en/moving-from-austria-to-slovakia",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Disassembly & Assembly",
        description:
          "We handle disassembly before the move and reassembly at your new Slovak address.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "Your belongings are covered by transport insurance for the entire journey.",
        link: "/en/moving-from-austria-to-slovakia",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs Hassle",
        description:
          "EU-to-EU move means no customs declarations — a smooth, straightforward relocation.",
        link: "/en/moving-from-austria-to-slovakia",
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
          title="Moving from Austria to Slovakia"
          description="Moving from Austria to Slovakia? With Vienna just 60 km from Bratislava, this is one of the fastest international routes we serve. Sofoservis provides professional door-to-door removals from anywhere in Austria to any address in Slovakia — often within 24 hours."
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
          title="Moving from Austria to Slovakia"
          description="Moving from Austria to Slovakia? With Vienna just 60 km from Bratislava, this is one of the fastest international routes we serve. Sofoservis provides professional door-to-door removals from anywhere in Austria to any address in Slovakia — often within 24 hours."
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
        <GoogleReviews title="Trusted for Austria to Slovakia Removals" />
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
          title="Reviews from Customers Who Moved from Austria"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Austria to Slovakia"
          subtitle="Common questions about relocating from Austria to Slovakia"
          items={faqItems}
          callToActionText="Moving from Austria to Slovakia? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Austria to Slovakia?"
          description="Get in touch today for a quick, free quote. We can often arrange your Austria-to-Slovakia move within 24 hours."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving to Slovakia",
            description: "Overview of all routes to Slovakia from abroad.",
            href: "/en/moving-to-slovakia",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving Bratislava to Vienna",
            description: "Moving from Bratislava to Vienna? We cover that too.",
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
