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
  title: "Moving to Slovakia — International Relocation | Sofoservis",
  description:
    "Relocating to Slovakia? We offer professional international moving services for expats moving from the UK, Germany, Austria, Netherlands and France.",
  keywords:
    "moving to slovakia, relocating to slovakia, international moving to slovakia, expat moving slovakia, move to bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-slovakia",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-to-slovakia",
      "x-default": "https://www.sofoservis.sk/en/moving-to-slovakia",
    },
  },
};

export default function MovingToSlovakiaPage() {
  const faqItems = [
    {
      question: "How long does it take to move to Slovakia from Western Europe?",
      answer:
        "Transit times vary by origin. From Austria or Czech Republic, delivery typically takes 1-2 days. From Germany, Netherlands, or France it takes 2-4 days. From the UK it usually takes 3-5 days. We will confirm exact timelines during your free consultation.",
    },
    {
      question: "Do I need to declare my belongings when moving to Slovakia?",
      answer:
        "For moves within the EU, no customs declaration is required for personal household goods. If you are moving from outside the EU (e.g., USA), you will need to complete import customs documentation. Our team handles all paperwork and guides you through the process.",
    },
    {
      question: "Can you help me move my car to Slovakia?",
      answer:
        "Yes, we can arrange vehicle transport to Slovakia alongside your household goods. We use covered car transporters for safe delivery. Re-registration requirements in Slovakia will also be explained during consultation.",
    },
    {
      question: "What areas of Slovakia do you deliver to?",
      answer:
        "We deliver throughout Slovakia — Bratislava, Trnava, Nitra, Trenčín, Žilina, Banská Bystrica, Prešov, Košice, and all smaller towns and villages.",
    },
    {
      question: "How do I get a quote for moving to Slovakia?",
      answer:
        "Fill out the contact form on this page or call us directly. We will ask for details about your current location, volume of items, and destination in Slovakia. Most quotes are provided within a few hours.",
    },
  ];

  const featuresData = {
    title: "Moving to Slovakia — Trusted by Expats",
    description:
      "Whether you are relocating for work, family, or lifestyle, we make your move to Slovakia smooth and stress-free.",
    features: [
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from the UK to Slovakia",
        description:
          "Post-Brexit relocation specialists. We handle all customs paperwork and ensure your belongings arrive safely in Slovakia from anywhere in the United Kingdom.",
        link: "/en/moving-from-uk-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Germany to Slovakia",
        description:
          "Regular weekly routes between Germany and Slovakia. Efficient, affordable, and fully insured household relocation from any German city.",
        link: "/en/moving-from-germany-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from Austria to Slovakia",
        description:
          "Fast and affordable moves from Austria to Slovakia. The short distance means we can often arrange delivery within 24-48 hours.",
        link: "/en/moving-from-austria-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from the Netherlands to Slovakia",
        description:
          "Long-distance relocation from the Netherlands handled with care. We consolidate loads to offer competitive prices on this popular route.",
        link: "/en/moving-from-netherlands-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from France to Slovakia",
        description:
          "Professional relocation service from France to Slovakia. We cover Paris, Lyon, Marseille, and all major French cities.",
        link: "/en/moving-from-france-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Moving from the USA to Slovakia",
        description:
          "Intercontinental moving from the United States to Slovakia. We coordinate sea freight and final delivery with full customs handling.",
        link: "/en/moving-from-usa-to-slovakia",
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
          title="Moving to Slovakia"
          description="Relocating to Slovakia from abroad? Sofoservis provides complete international moving services for expats arriving in Slovakia. We handle packing, transport, customs formalities, and delivery to your new Slovak address — all in one place."
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
          title="Moving to Slovakia"
          description="Relocating to Slovakia from abroad? Sofoservis provides complete international moving services for expats arriving in Slovakia. We handle packing, transport, customs formalities, and delivery to your new Slovak address — all in one place."
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
        <GoogleReviews title="Trusted by Expats Moving to Slovakia" />
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
          title="Reviews from Expats Who Moved to Slovakia"
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Moving to Slovakia"
          subtitle="Everything you need to know about relocating to Slovakia from abroad"
          items={faqItems}
          callToActionText="Planning a move to Slovakia? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Ready to Move to Slovakia?"
          description="Our team specialises in helping expats relocate to Slovakia. Contact us today for a personalised quote."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia",
            description: "Leaving Slovakia? We cover all major destinations.",
            href: "/en/moving-from-slovakia",
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
