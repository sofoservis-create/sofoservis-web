import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Industrial Machinery Moving | CNC, Production | Sofoservis",
  description:
    "Professional industrial machinery moving ✅ CNC machines, production lines, ATMs ✅ Hydraulic equipment ✅ Minimal production downtime ✅ Free quote!",
  keywords:
    "machinery moving, CNC machine relocation, industrial equipment moving, ATM moving, production line relocation, factory machinery transport, machine movers Bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/machinery-moving",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-strojov-zariadeni",
      en: "https://www.sofoservis.sk/en/machinery-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-strojov-zariadeni",
    },
  },
  openGraph: {
    title: "Industrial Machinery Moving | Sofoservis",
    description:
      "Professional industrial machinery moving. CNC machines, production lines, ATMs. Experienced team, hydraulic equipment.",
    url: "https://www.sofoservis.sk/en/machinery-moving",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function MachineryMovingPage() {
  const featuresData = {
    title: "Types of machinery we relocate",
    description:
      "From single production machines to entire production lines — every job is planned individually with a focus on safety and minimal downtime.",
    features: [
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "CNC Machines & Machining Centres",
        description:
          "CNC machines are sensitive to shocks and improper handling. Before disassembly we document the machine's condition and lock all moving parts securely.",
        link: "/en/machinery-moving",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Production Lines & Automated Equipment",
        description:
          "Relocating a production line requires coordination with your technicians and electricians. We plan the job so the line is back in operation at the new site as quickly as possible — including weekend and shutdown moves.",
        link: "/en/machinery-moving",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "ATMs & Financial Equipment",
        description:
          "ATM relocation demands discretion, security measures and coordination with the bank or leasing company. We have experience moving ATMs into spaces with restricted access.",
        link: "/en/machinery-moving",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Printing & Reprographic Machines",
        description:
          "Offset printing presses, cutters and other reprographic equipment can weigh several tonnes and have tight geometric alignment requirements. After relocation we can arrange levelling and re-calibration.",
        link: "/en/machinery-moving",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Industrial Presses & Hydraulic Equipment",
        description:
          "Hydraulic presses, press brakes and other heavy industrial machinery are relocated using hydraulic cylinders and heavy-duty platforms. Loads of several tens of tonnes are within our capability.",
        link: "/en/machinery-moving",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Industrial HVAC & Air Handling Units",
        description:
          "Large industrial air conditioning and air handling units on rooftops or in plant rooms are another area where we assist with safe disassembly and relocation.",
        link: "/en/machinery-moving",
      },
    ],
  };

  const faqItems = [
    {
      question: "How do you plan an industrial machine relocation?",
      answer:
        "We start with a consultation and site survey. We assess the machine's weight and dimensions, access routes, floor load capacity and manufacturer requirements. We then produce a detailed relocation plan including a schedule, required equipment and crew size. The plan is reviewed with the client before any work begins.",
    },
    {
      question: "Can a production machine be moved without stopping production?",
      answer:
        "With careful planning, downtime can be kept to a minimum. We schedule moves during weekends or planned maintenance shutdowns. We also prepare the new site in advance — including power connections — so your engineers can reconnect and test the machine as soon as possible after the move.",
    },
    {
      question: "Do you handle disassembly and reassembly of the equipment?",
      answer:
        "We provide mechanical disassembly and reassembly of machinery. Electrical and pneumatic reconnection is coordinated with the client's technicians or the equipment supplier — depending on the specific project.",
    },
    {
      question: "What if the machine is anchor-bolted to a concrete floor?",
      answer:
        "Anchor bolts and chemical anchors are removed as part of the pre-move preparation. Where necessary we work with contractors to core-drill or repair the floor.",
    },
    {
      question: "What is your maximum lifting capacity?",
      answer:
        "Our hydraulic equipment handles loads up to 20 tonnes. For heavier machinery we work with specialist partners who have heavy-lift cranes and low-loader trailers.",
    },
    {
      question: "Do you move machinery outside Bratislava?",
      answer:
        "Yes, we carry out jobs across Slovakia. For larger projects such as full production line relocations we provide comprehensive logistics including transport to the new site.",
    },
  ];

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
          title="Industrial Machinery Moving"
          description="Relocating production machines, CNC equipment, production lines or ATMs requires professional expertise and specialist equipment. Our team has extensive experience in industrial machinery relocation with minimal impact on your operations — including weekend and night-shift moves planned around your schedule."
          formTitle="Get a free price quote"
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
          title="Industrial Machinery Moving"
          description="Relocating production machines, CNC equipment, production lines or ATMs requires professional expertise and specialist equipment. Our team has extensive experience in industrial machinery relocation with minimal impact on your operations — including weekend and night-shift moves planned around your schedule."
          formTitle="Get a free price quote"
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

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted by businesses across Slovakia" />
      </div>

      <HowItWorks lang="en" />

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
          title="What customers say about our machinery moving service"
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Machinery Moving"
          items={faqItems}
          expandableGroup={{
            label: "Everything about industrial machinery moving",
            panels: [
              {
                title: "Step-by-step: how an industrial machine relocation works",
                content:
                  "1. Consultation & site survey — we establish type, weight, dimensions and access conditions.\n2. Relocation plan — we prepare a schedule, required equipment and crew requirements.\n3. Destination site preparation — floor load verification, utility connections.\n4. Disassembly — mechanical removal of anchor bolts and guards.\n5. Relocation — hydraulic platforms and trolleys, loading onto transport.\n6. Transport to new site.\n7. Installation — positioning, levelling, mechanical assembly.\n8. Handover — machine ready for electrical connection and commissioning.",
              },
              {
                title: "Technical equipment for machinery moving",
                content:
                  "For safe relocation of industrial equipment we use: hydraulic jacks and cylinders (capacity up to 20 t), powered flat-bed trolleys and platforms, steel rollers for sliding on concrete, skate systems for rotational movement, ratchet straps and load chains, tilting jigs for lowering and seating. For jobs requiring heavy machinery we partner with specialists who have mobile cranes and heavy-duty low-loaders.",
              },
              {
                title: "When is the best time to relocate production equipment?",
                content:
                  "The ideal time for moving a production machine is during a planned maintenance shutdown, holiday closure or other scheduled stoppage. For clients who cannot interrupt production we plan moves during weekends or night shifts. We always recommend sufficient contingency time for any complications that may arise.",
              },
            ],
          }}
          callToActionText="Need help moving industrial machinery? Contact us"
        />
      </div>

      <div>
        <CTA
          title="Need to relocate industrial machinery?"
          description="Let our specialist team plan and execute the move safely with minimal impact on your operations."
          buttonText="Get a free quote"
        />
      </div>

      <ServicePricing filter={["moving", "clearance", "international-moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Piano Moving",
            description: "Specialist transport of pianos, uprights and grand pianos.",
            href: "/en/piano-moving",
            icon: "/icons/crane_icon.svg",
          },
          {
            title: "Safe Moving",
            description: "Professional moving of safes and vaults of all weights.",
            href: "/en/safe-moving",
            icon: "/icons/safe_icon.svg",
          },
          {
            title: "Moving Heavy Loads",
            description: "All heavy item moving services in one place.",
            href: "/en/moving-heavy-loads",
            icon: "/icons/crane_icon.svg",
          },
          {
            title: "Office Moving",
            description: "Professional office and business relocation services.",
            href: "/en/office-moving",
            icon: "/icons/briefcase_icon.svg",
          },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
