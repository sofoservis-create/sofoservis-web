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
  title: "Moving to London — International Removals | Sofoservis",
  description:
    "Moving to London from Slovakia? We handle post-Brexit UK customs, full packing, and door-to-door delivery to all London boroughs. 4-7 day transit.",
  keywords:
    "moving to london, moving to london from slovakia, moving to london from bratislava, international moving london, relocation london uk",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-london",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/londyn",
      en: "https://www.sofoservis.sk/en/moving-to-london",
      "x-default": "https://www.sofoservis.sk/en/moving-to-london",
    },
  },
};

export default function MovingToLondonPage() {
  const faqItems = [
    {
      question: "Are there customs requirements when moving from Slovakia to London?",
      answer:
        "Yes — since Brexit, the UK is no longer in the EU. Moving household goods from Slovakia to London requires UK customs clearance. You may be eligible for Transfer of Residence (ToR) relief if permanently relocating. Our team handles all documentation.",
    },
    {
      question: "How long does delivery from Slovakia to London take?",
      answer:
        "Door-to-door transit from Slovakia to London typically takes 4-7 days. The route includes a Channel crossing (Eurotunnel or ferry). We keep you updated throughout.",
    },
    {
      question: "Do you deliver to all London boroughs?",
      answer:
        "Yes, we deliver throughout Greater London — all 33 boroughs including Central, North, South, East, and West London.",
    },
    {
      question: "Is a groupage service available for the Slovakia–London route?",
      answer:
        "Yes, groupage is available for smaller shipments. Your items share a vehicle with other UK-bound loads, keeping costs manageable.",
    },
    {
      question: "Is my furniture insured during transport to London?",
      answer:
        "All items are covered by transport insurance for the full duration of the journey including the Channel crossing.",
    },
  ];

  const featuresData = {
    title: "Moving to London — Post-Brexit Specialists",
    description:
      "London is one of the most popular destinations for Slovaks moving abroad. Our team manages all post-Brexit formalities for a smooth arrival.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Post-Brexit Customs Handled",
        description:
          "We manage all UK customs documentation including Transfer of Residence relief applications.",
        link: "/en/moving-to-london",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "4-7 Day Delivery to London",
        description:
          "Regular departures ensure reliable 4-7 day delivery from Slovakia to London.",
        link: "/en/moving-to-london",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All 33 London Boroughs",
        description:
          "We deliver throughout Greater London — every borough, no exceptions.",
        link: "/en/moving-to-london",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using materials suitable for long international journeys.",
        link: "/en/moving-to-london",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All belongings are insured for the full journey including the Channel crossing.",
        link: "/en/moving-to-london",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in London.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving to London from Slovakia"
          description="Relocating from Slovakia to London? Sofoservis provides professional door-to-door removals with full post-Brexit customs handling. We manage everything from your Slovak address to delivery in London — with reliable 4-7 day transit."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Moving to London from Slovakia"
          description="Relocating from Slovakia to London? Sofoservis provides professional door-to-door removals with full post-Brexit customs handling. We manage everything from your Slovak address to delivery in London — with reliable 4-7 day transit."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to London" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Our Clients" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to London from Slovakia"
          subtitle="Common questions about relocating to London"
          items={faqItems}
          callToActionText="Moving to London? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to London?"
          description="Get a free quote today. We handle post-Brexit customs and deliver door-to-door to London."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to the UK", description: "Full Slovakia-to-UK coverage.", href: "/en/moving-to-uk", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to London", description: "Dedicated Bratislava–London route page.", href: "/en/moving-to-london", icon: "/icons/truck_icon.svg" },
          { title: "International Moving Services", description: "All international routes and destinations.", href: "/en/international-moving-services", icon: "/icons/globe_icon.svg" },
          { title: "Furniture Assembly", description: "Expert assembly and disassembly of all furniture.", href: "/en/furniture-assembly", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <ServicePricing filter={["international-moving", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
