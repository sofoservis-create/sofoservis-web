// src/app/en/furniture-moving-removal/page.tsx
import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import type { Metadata } from "next";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata: Metadata = {
  title: "Furniture Moving and Removal | Sofoservis",
  description:
    "We offer professional furniture moving and removal ✅ Cheap and fair prices ✅ Free space inspection ✅ Contact us today!",
  keywords:
    "furniture moving, furniture removal, furniture transportation, sofa moving, wardrobe moving, furniture assembly, furniture disassembly, large furniture moving",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/furniture-moving-removal",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-preprava-nabytku",
      en: "https://www.sofoservis.sk/en/furniture-moving-removal",
      "x-default": "https://www.sofoservis.sk/stahovanie-preprava-nabytku",
    },
  },
};

export default function FurnitureMovingRemovalPage() {
  const faqItems = [
            {
              question: "Does furniture need to be disassembled before moving?",
              answer:
                "It depends on the type of furniture and access conditions. Some pieces, like sofas and beds, often don't need to be disassembled. On the other hand, wardrobes and larger furniture pieces are best disassembled, especially if there are narrow doors or staircases. Our team will assess during the inspection which pieces need to be disassembled for safe transport.",
            },
            {
              question:
                "How do you protect my furniture during transport from damage?",
              answer:
                "Each piece of furniture is individually wrapped according to its type and needs. We use stretch films, bubble wrap, cardboard covers, protective blankets, and corner protectors. Upholstered furniture is wrapped in special covers, wooden furniture is protected from scratches. In the transport vehicle, each piece is secured against movement using straps and fixing devices.",
            },
            {
              question:
                "Is it possible to transport very large pieces of furniture, such as a piano or display cabinets?",
              answer:
                "Yes, we also specialize in transporting oversized and heavy furniture pieces. For pianos, display cabinets, safes, and similar items, we have special equipment such as moving straps, platforms, and dollies. If necessary, we also use special techniques such as lowering through balconies or using a crane. However, a preliminary inspection is always needed to assess the best way to move these items.",
            },
            {
              question:
                "How far in advance should I order furniture transport?",
              answer:
                "For standard furniture transport, we recommend ordering the service at least 3-7 days in advance. For larger quantities or specific pieces, it's better to agree on a date 1-2 weeks in advance. In case of urgent need, however, we can often provide the service within 24-48 hours, depending on our current capacity and the complexity of your request.",
            },
            {
              question:
                "Do you also offer standalone furniture assembly service?",
              answer:
                "Yes, in addition to complete moving, we also offer a standalone furniture assembly and disassembly service. Whether you need to assemble new furniture from a store, disassemble old furniture before renovation, or reassemble furniture after moving, our team will gladly help you. We have experience with furniture from various manufacturers including IKEA, Asko, Jysk, and other brands.",
            },
          ];
  // Custom data for Features section
  const featuresData = {
    title: "Comprehensive Services for Furniture Moving and Transportation",
    description:
      "We offer solutions for all types of furniture, from standard pieces to oversized and valuable items.",
    features: [
      {
        image: "/icons/sofa_icon.svg", // Perfect for sofa and couch transportation
        title: "Sofa and Couch Transportation",
        description:
          "Safe moving of sofas, couches and lounge sets. We use special protective covers and wrap your upholstered furniture to prevent any dirt or damage during transportation.",
        link: "/en/furniture-moving-removal",
      },
      {
        image: "/icons/furniture_icon.svg", // Perfect for wardrobe and cabinet moving
        title: "Wardrobe and Cabinet Moving",
        description:
          "Professional disassembly and reassembly of wardrobes, shelves, dressers, and other furniture. We carefully label all parts for trouble-free assembly at the new location.",
        link: "/en/furniture-moving-removal",
      },
      {
        image: "/icons/artwork_icon.svg", // Perfect for antique and valuable furniture
        title: "Antique and Valuable Furniture Transportation",
        description:
          "Special care for historical, antique, and valuable furniture pieces. We use extra layers of protection and special procedures for particularly valuable items.",
        link: "/en/moving-heavy-loads",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for office furniture
        title: "Office Furniture Moving",
        description:
          "Efficient moving of office furniture including system sets, conference tables, reception desks, and large office cabinets.",
        link: "/en/office-moving",
      },
      {
        image: "/icons/house_icon.svg", // Perfect for furniture rearrangement
        title: "Furniture Rearrangement Within Premises",
        description:
          "We help you rearrange furniture within apartments, houses, or offices during renovation, painting, or space reorganization.",
        link: "/en/furniture-moving-removal",
      },
      {
        image: "/icons/packing_box_icon.svg", // Perfect for packing and protection
        title: "Furniture Packing and Protection",
        description:
          "Professional furniture packing using protective films, cardboard, foam materials, and special transport packaging for maximum protection.",
        link: "/en/furniture-moving-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Hero section */}
      <Hero
        title="Furniture Moving and Removal"
        description="Professional services for safe furniture moving and transportation of any type. Our experienced team ensures careful handling and transport of your furniture without damage, focusing on protecting your valuable pieces."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill in the form for a no-obligation calculation"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Free site inspection",
          "High customer satisfaction",
          "Stress-free service",
        ]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          title="Trusted for Furniture Moving"
        />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      {/* Features section */}
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="What Our Customers Say"
        />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Frequently Asked Questions About Furniture Moving and Transportation"
          subtitle="Find answers to common questions about our furniture moving services"
          items={[
            {
              question: "Does furniture need to be disassembled before moving?",
              answer:
                "It depends on the type of furniture and access conditions. Some pieces, like sofas and beds, often don't need to be disassembled. On the other hand, wardrobes and larger furniture pieces are best disassembled, especially if there are narrow doors or staircases. Our team will assess during the inspection which pieces need to be disassembled for safe transport.",
            },
            {
              question:
                "How do you protect my furniture during transport from damage?",
              answer:
                "Each piece of furniture is individually wrapped according to its type and needs. We use stretch films, bubble wrap, cardboard covers, protective blankets, and corner protectors. Upholstered furniture is wrapped in special covers, wooden furniture is protected from scratches. In the transport vehicle, each piece is secured against movement using straps and fixing devices.",
            },
            {
              question:
                "Is it possible to transport very large pieces of furniture, such as a piano or display cabinets?",
              answer:
                "Yes, we also specialize in transporting oversized and heavy furniture pieces. For pianos, display cabinets, safes, and similar items, we have special equipment such as moving straps, platforms, and dollies. If necessary, we also use special techniques such as lowering through balconies or using a crane. However, a preliminary inspection is always needed to assess the best way to move these items.",
            },
            {
              question:
                "How far in advance should I order furniture transport?",
              answer:
                "For standard furniture transport, we recommend ordering the service at least 3-7 days in advance. For larger quantities or specific pieces, it's better to agree on a date 1-2 weeks in advance. In case of urgent need, however, we can often provide the service within 24-48 hours, depending on our current capacity and the complexity of your request.",
            },
            {
              question:
                "Do you also offer standalone furniture assembly service?",
              answer:
                "Yes, in addition to complete moving, we also offer a standalone furniture assembly and disassembly service. Whether you need to assemble new furniture from a store, disassemble old furniture before renovation, or reassemble furniture after moving, our team will gladly help you. We have experience with furniture from various manufacturers including IKEA, Asko, Jysk, and other brands.",
            },
          ]}
          callToActionText="Have more questions? Get a free quote today"
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Need help with furniture moving?"
          description="Let our professionals handle your furniture with care and expertise."
          buttonText="Get a Free Quote"
          buttonLink="/en/contact"
        />{" "}
      </div>
    

      <RelatedServices
          title="Related Services"
          services={[{"title":"Apartment Moving","description":"Professional home and apartment relocation services.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"},{"title":"Furniture Assembly","description":"Expert assembly and disassembly of all furniture types.","href":"/en/furniture-assembly","icon":"/icons/wrench_icon.svg"},{"title":"Old Furniture Removal","description":"Fast pickup and eco-friendly disposal of old furniture.","href":"/en/furniture-removal","icon":"/icons/truck_icon.svg"},{"title":"Home Clearance","description":"Complete home clearance — we remove everything you no longer need.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"}]}
        />
      <ServicePricing filter={["furniture-assembly", "handyman", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
