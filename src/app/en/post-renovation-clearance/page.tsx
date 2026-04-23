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
  title: "Post-Renovation Clearance & Waste Removal | Sofoservis",
  description:
    "Fast post-renovation clearance and construction waste removal in Slovakia ✅ All debris removed ✅ Ecological disposal ✅ Free quote",
  keywords:
    "post-renovation clearance, construction waste removal, builders waste, renovation cleanup, rubble removal",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/post-renovation-clearance",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-po-rekonstrukcii",
      en: "https://www.sofoservis.sk/en/post-renovation-clearance",
      "x-default": "https://www.sofoservis.sk/vypratavanie-po-rekonstrukcii",
    },
  },
};

const faqItems = [
  {
    question: "What does post-renovation clearance include?",
    answer:
      "It includes the removal of construction waste (rubble, tiles, plaster, wood), old furniture, and equipment, followed by basic cleaning to prepare the space for use.",
  },
  {
    question: "How quickly can you remove renovation waste?",
    answer:
      "Depending on the volume, we can arrange removal within 24-48 hours. We work fast to ensure your project stays on schedule.",
  },
  {
    question: "How do you charge for construction waste removal?",
    answer:
      "Pricing is based on the volume (m³) or weight of the waste. We provide a free on-site inspection and a fixed price quote.",
  },
  {
    question: "Do you handle large amounts of rubble?",
    answer:
      "Yes, we specialize in larger projects. We can remove rubble after wall demolition and large-scale renovations, including providing containers if needed.",
  },
];

export default function PostRenovationClearancePage() {
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
          title="Post-Renovation Clearance Services"
          description="Finished your renovation? We'll handle the removal of construction waste, rubble, and old fixtures. We quickly clear the space so you can move in sooner."
          formTitle="Get a free quote"
          formSubtitle="Fill out the form for a fast calculation"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Removal within 48h", "Eco-friendly disposal", "Fixed price upfront"]}
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={756}
          desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Post-Renovation Clearance Services"
          description="Finished your renovation? We'll handle the removal of construction waste, rubble, and old fixtures. We quickly clear the space so you can move in sooner."
          formTitle="Get a free quote"
          formSubtitle="Fill out the form for a fast calculation"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Removal within 48h", "Eco-friendly disposal", "Fixed price upfront"]}
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
        <GoogleReviews title="Customer reviews" />
      </div>
      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>
      <div>
        <Features
          title="Complete Post-Renovation Solutions"
          description="Professional clearing of spaces after construction and renovation works."
          features={[
            {
              image: "/icons/hammer_icon.svg",
              title: "Rubble & Construction Waste",
              description: "We remove rubble, old tiles, plaster, wood, drywall, and other debris. We charge by volume or weight.",
              link: "/en/construction-waste-removal",
            },
            {
              image: "/icons/furniture_icon.svg",
              title: "Old Furniture & Fixtures",
              description: "Before or after renovation, we remove old furniture, appliances, and fixtures that are being replaced.",
              link: "/en/furniture-removal",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Final Site Cleanup",
              description: "After waste removal, we perform basic cleanup — sweeping and removing dust and construction residue.",
              link: "/en/post-renovation-clearance",
            },
            {
              image: "/icons/truck_icon.svg",
              title: "Fast Turnaround",
              description: "We want you to enjoy your new space. We can often arrange pickup within 24-48 hours of booking.",
              link: "/en/post-renovation-clearance",
            },
            {
              image: "/icons/recycle_icon.svg",
              title: "Ecological Disposal",
              description: "Waste is sorted and taken to authorized facilities and landfills in compliance with regulations.",
              link: "/en/hazardous-waste-removal",
            },
            {
              image: "/icons/container_icon.svg",
              title: "Container Rental",
              description: "For longer renovation projects, we can arrange for container placement directly at your site.",
              link: "/en/construction-waste-removal",
            },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>
      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>
      <div>
        <FAQ
          title="Frequently Asked Questions About Renovation Clearance"
          items={faqItems}
        />
      </div>
      <div>
        <CTA
          title="Need to clear renovation waste fast?"
          description="We provide quick removal of construction waste, rubble, and old equipment. We can arrive within 24-48 hours."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Construction Waste Removal", description: "Professional removal of rubble and waste.", href: "/en/construction-waste-removal", icon: "/icons/recycle_icon.svg" },
          { title: "Demolition Services", description: "Wall and partition demolition works.", href: "/en/demolition-services", icon: "/icons/hammer_icon.svg" },
          { title: "Home Clearance", description: "Complete house and apartment clearance.", href: "/en/home-junk-removal", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Handyman Services", description: "Minor repairs and adjustments after renovation.", href: "/en/handyman-services", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <ServicePricing filter={["clearance", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
