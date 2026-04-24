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
  title: "Moving — International Relocation Services | Sofoservis",
  description:
    "Moving from Slovakia abroad? Professional international moving services to Austria, Germany, UK, Switzerland, Netherlands, France, Ireland and Sweden.",
  keywords:
    "moving from slovakia, moving abroad from slovakia, international moving from slovakia, moving from bratislava abroad",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-slovakia",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-zo-slovenska",
      en: "https://www.sofoservis.sk/en/moving-from-slovakia",
      "x-default": "https://www.sofoservis.sk/en/moving-from-slovakia",
    },
  },
};

export default function MovingFromSlovakiaPage() {
  const faqItems = [
    {
      question: "How early should I book my move from Slovakia?",
      answer:
        "We recommend booking 2-4 weeks in advance to secure your preferred moving date. For peak periods (summer months, end of month), earlier booking is advisable. For urgent situations, we can sometimes arrange moves within a few days, particularly to nearby countries like Austria and Czech Republic.",
    },
    {
      question: "Do I need to pay customs duties when moving from Slovakia to another EU country?",
      answer:
        "No customs duties apply when moving personal household goods between EU member states. For moves to non-EU countries like Switzerland, Norway, or the UK, customs declarations will be required. Our team prepares all necessary documentation.",
    },
    {
      question: "Can I ship just a few items from Slovakia, not an entire household?",
      answer:
        "Yes, we offer groupage (part-load) services for smaller shipments. This is a cost-effective option if you only have a few boxes or individual furniture pieces to move from Slovakia.",
    },
    {
      question: "What is included in your international moving service?",
      answer:
        "Our full-service move includes packing and wrapping of all items, loading, international transport with a professional driver, unloading at your new address, and furniture reassembly if required. Transport insurance is included.",
    },
    {
      question: "How do you calculate the cost of moving from Slovakia?",
      answer:
        "Pricing depends on the volume of your belongings, the destination country, access conditions at both addresses, and any additional services like packing or storage. We provide a free, no-obligation quote after a quick consultation.",
    },
  ];

  const featuresData = {
    title: "Moving from Slovakia — We Cover All Major Destinations",
    description:
      "Leaving Slovakia for a new chapter abroad? We provide reliable, professional international moving to all major European destinations.",
    features: [
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to Austria",
        description:
          "Fast and affordable moves from Slovakia to Austria. Vienna is just 60 km from Bratislava — ideal for quick, efficient relocations.",
        link: "/en/moving-to-austria",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to Germany",
        description:
          "Regular routes to Munich, Berlin, Hamburg, Frankfurt, and all German cities. Competitive group-load pricing available.",
        link: "/en/moving-to-germany",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to the UK",
        description:
          "Post-Brexit moves to England, Scotland, and Wales. We handle all UK customs documentation and Border Force requirements.",
        link: "/en/moving-to-uk",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to Switzerland",
        description:
          "Professional moves from Slovakia to Zurich, Geneva, Basel, and Bern. Swiss customs clearance handled by our experienced team.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to the Netherlands",
        description:
          "Efficient relocation from Slovakia to Amsterdam, Rotterdam, The Hague, and all Dutch cities with regular scheduled departures.",
        link: "/en/moving-to-netherlands",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to France",
        description:
          "Long-distance moves from Slovakia to Paris, Lyon, Marseille, and across France. Full-load and groupage options available.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to Ireland",
        description:
          "Specialist moves from Slovakia to Dublin, Cork, Galway, and beyond. Sea freight options for larger volumes.",
        link: "/en/moving-to-ireland",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to Sweden",
        description:
          "Reliable Scandinavian route from Slovakia to Stockholm, Gothenburg, and Malmö. Full customs support included.",
        link: "/en/moving-to-sweden",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Slovakia to Norway",
        description:
          "Expert moves from Slovakia to Oslo, Bergen, and Stavanger. Norwegian customs formalities handled professionally.",
        link: "/en/moving-to-norway",
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
          title="Moving from Slovakia"
          description="Relocating from Slovakia to another country? Sofoservis provides complete international moving services for residents leaving Slovakia. We handle packing, transport, customs paperwork, and delivery to your new address abroad."
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
          title="Moving from Slovakia"
          description="Relocating from Slovakia to another country? Sofoservis provides complete international moving services for residents leaving Slovakia. We handle packing, transport, customs paperwork, and delivery to your new address abroad."
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
        <GoogleReviews title="Trusted for International Moves from Slovakia" />
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
          title="Frequently Asked Questions About Moving from Slovakia"
          subtitle="Everything you need to know about relocating from Slovakia to another country"
          items={faqItems}
          callToActionText="Ready to move from Slovakia? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia? Get a Professional Quote"
          description="Our team specialises in international removals from Slovakia. Contact us today for a detailed, personalised estimate."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving to Slovakia",
            description: "Moving to Slovakia from abroad? We can help.",
            href: "/en/moving-to-slovakia",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "International Moving Services",
            description: "Overview of all our international moving routes.",
            href: "/en/international-moving-services",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "Apartment Moving",
            description: "Professional home and apartment relocation services.",
            href: "/en/apartment-moving",
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
