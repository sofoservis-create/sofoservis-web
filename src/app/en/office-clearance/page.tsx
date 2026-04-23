import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Office Clearance Services | Sofoservis Slovakia",
  description:
    "Professional office clearance services in Slovakia ✅ Fast, discreet, eco-friendly ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "office clearance, office junk removal, commercial clearance, office furniture removal, office equipment disposal",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/office-clearance",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-kancelarii",
      en: "https://www.sofoservis.sk/en/office-clearance",
      "x-default": "https://www.sofoservis.sk/vypratavanie-kancelarii",
    },
  },
};

const faqItems = [
  {
    question: "What does office clearance include?",
    answer:
      "It includes removal of office furniture (desks, chairs, cabinets), electronics (computers, monitors, printers), archive materials, and other equipment. We also provide final cleaning of the space.",
  },
  {
    question: "How quickly can you clear an office?",
    answer:
      "Depending on the size, we can clear a standard office (100-200 m²) in one working day. We can also organize work during weekends and holidays for minimal disruption to your operations.",
  },
  {
    question: "How do you handle office electronics?",
    answer:
      "Office electronics are taken to authorized e-waste collection points. If interested, we can also ensure secure data destruction from hard drives before disposal.",
  },
  {
    question: "Do you provide a waste transfer note?",
    answer:
      "Yes, we provide documentation for the legal and ecological disposal of all materials removed from your office.",
  },
];

export default function OfficeClearancePage() {
  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Professional Office Clearance Services"
          description="Fast and efficient clearance of offices, open-space areas, and administrative buildings. We minimize downtime by working during weekends and holidays."
          formTitle="Get a free quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Weekend work", "Eco-friendly disposal", "Fixed price upfront"]}
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={800}
          desktopMinHeroTextHeightPx={500}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Professional Office Clearance Services"
          description="Fast and efficient clearance of offices, open-space areas, and administrative buildings. We minimize downtime by working during weekends and holidays."
          formTitle="Get a free quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Weekend work", "Eco-friendly disposal", "Fixed price upfront"]}
          showMascot
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews title="What our clients say" />
      </div>
      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>
      <div>
        <Features
          title="What our office clearance includes"
          description="Complete solution for clearing office spaces — from furniture to electronics."
          features={[
            {
              image: "/icons/briefcase_icon.svg",
              title: "Office Furniture & Equipment",
              description: "We remove desks, chairs, cabinets, and shelving. We ensure ecological disposal or donation of functional pieces.",
              link: "/en/office-clearance",
            },
            {
              image: "/icons/recycle_icon.svg",
              title: "Office Electronics",
              description: "Computers, monitors, printers, and servers are taken to authorized e-waste collection points in compliance with legislation.",
              link: "/en/hazardous-waste-removal",
            },
            {
              image: "/icons/house_icon.svg",
              title: "Archives & Documents",
              description: "We help with removal of archive materials. On request, we can arrange secure document shredding.",
              link: "/en/office-clearance",
            },
            {
              image: "/icons/truck_icon.svg",
              title: "Fast & Flexible Scheduling",
              description: "We work during weekends and holidays to minimize disruption. We plan the project according to your business needs.",
              link: "/en/office-clearance",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Final Cleaning",
              description: "After clearance, we perform final cleaning so the space is ready for the next tenant or renovation.",
              link: "/en/office-clearance",
            },
            {
              image: "/icons/landscape_icon.svg",
              title: "Whole Building Clearance",
              description: "We clear not just offices, but also warehouses, meeting rooms, kitchens, and other areas in administrative buildings.",
              link: "/en/property-land-junk-removal",
            },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>
      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>
      <div>
        <GoogleReviews showReviewsShowcase={false} title="Customer Reviews" />
      </div>
      <div>
        <FAQ
          title="Frequently Asked Questions About Office Clearance"
          items={faqItems}
        />
      </div>
      <div>
        <CTA
          title="Need fast office clearance?"
          description="We provide professional office clearance with minimal downtime for your business. We work weekends."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Office Moving", description: "Professional office and business relocation.", href: "/en/office-moving", icon: "/icons/briefcase_icon.svg" },
          { title: "Home Clearance", description: "Complete home and apartment clearance.", href: "/en/home-junk-removal", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Construction Waste Removal", description: "Fast removal of renovation waste and rubble.", href: "/en/construction-waste-removal", icon: "/icons/recycle_icon.svg" },
          { title: "Furniture Assembly", description: "Assembly of new furniture in your new office.", href: "/en/furniture-assembly", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <ServicePricing filter={["clearance", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
