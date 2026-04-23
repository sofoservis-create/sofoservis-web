import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import LocationMap from "@/components/sections/LocationMap";
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
  title: "Moving Services Malacky | Sofoservis",
  description:
    "Professional moving services in Malacky and surrounding areas. Fast, reliable, and affordable. We move apartments, houses, offices, and businesses.",
  keywords:
    "moving malacky, moving services malacky, apartment moving malacky, house moving malacky, office moving malacky",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-malacky",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-malacky",
      en: "https://www.sofoservis.sk/en/moving-malacky",
      "x-default": "https://www.sofoservis.sk/stahovanie-malacky",
      },
  },
};

export default function MovingMalackyPage() {
  const heroData = {
    title: "Moving Services in Malacky",
    description:
      "Complete moving services in Malacky and surrounding areas. Professional team, competitive prices, satisfaction guaranteed. We move apartments, houses.",
    formTitle: "Hassle-free moving in Malacky with a free quote",
    formSubtitle: "Fill out the form below for a quick fixed price",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Professional Moving Services in Malacky",
    description:
      "Complete moving solutions for homes and businesses in Malacky and surrounding areas.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Apartment & House Moving in Malacky",
        description:
          "Complete apartment and house moving services in Malacky. We safely transport your furniture and personal belongings to your new home.",
        link: "/en/apartment-moving",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Office & Business Moving",
        description:
          "Professional office and business relocation in Malacky. We minimize downtime by moving during weekends and holidays.",
        link: "/en/office-moving",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Furniture Assembly & Disassembly",
        description:
          "Expert assembly and disassembly of any furniture during your move in Malacky. We save your time and energy.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Heavy Item Moving",
        description:
          "We specialize in moving heavy items such as pianos, safes, and large furniture pieces in Malacky.",
        link: "/en/moving-heavy-loads",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "International Moving from Malacky",
        description:
          "Moving from Malacky abroad or vice versa. Complete solution for international relocation with minimum hassle.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Property Clearance",
        description:
          "Complete property clearance services in Malacky. Ideal for property sales, renovations, or estate settlements.",
        link: "/en/home-junk-removal",
      },
    ],
  };

  const mapData = {
    title: "We Move Throughout Malacky",
    description:
      "Our services are available throughout Malacky and surrounding areas for complete home and business relocations.",
    locations: [
          "Malacky center",
          "Stupava",
          "Gajary",
          "Jakubov",
          "Kostolište",
          "Láb",
          "Marianka",
          "Plavecký Mikuláš",
          "Plavecký Štvrtok",
          "Rohožník",
          "Suchohrad",
          "Záhorská Ves"
    ],
    additionalText: "Bratislava, Senica, Pezinok, and other surrounding towns.",
  };

  const faqData = {
    title: "Frequently Asked Questions About Moving in Malacky",
    items: [
      {
        question: "Which areas of Malacky do you cover?",
        answer:
          "We provide our services throughout Malacky and all surrounding towns and villages. Contact us for details about service in your specific location.",
      },
      {
        question: "What is the cost of moving in Malacky?",
        answer:
          "The cost depends on several factors such as volume of items, distance, access conditions, and required services. For an accurate estimate, we'll prepare a free quote after you fill out the contact form or call us.",
      },
      {
        question: "How far in advance should I book a move in Malacky?",
        answer:
          "We recommend booking at least 7-14 days in advance to secure your preferred date. For urgent needs, we can arrange express moving within 24-48 hours.",
      },
      {
        question: "Do you provide furniture assembly and disassembly in Malacky?",
        answer:
          "Yes, our services include complete furniture disassembly at your old place and reassembly at your new location. Our team has experience with all furniture types including IKEA, Asko, Jysk, and other brands.",
      },
      {
        question: "Can you move heavy items like pianos or safes in Malacky?",
        answer:
          "Yes, we specialize in moving heavy and bulky items such as pianos, safes, pool tables, and antique furniture. We use specialized equipment and techniques for safe handling.",
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
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
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
        <GoogleReviews title="What our customers say" showCarousel={true} />
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
        <LocationMap
          title={mapData.title}
          description={mapData.description}
          locations={mapData.locations}
          additionalText={mapData.additionalText}
        />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <FAQ title={faqData.title} items={faqData.items} />
      </div>

      <div>
        <CTA
          title="Ready for a stress-free move?"
          description="Let us handle your move in Malacky with professional care. Contact us today for a free quote."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Apartment Moving","description":"Professional apartment and home relocation.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"},{"title":"Office Moving","description":"Efficient office relocation with minimal downtime.","href":"/en/office-moving","icon":"/icons/briefcase_icon.svg"},{"title":"Home Clearance","description":"Complete home clearance — we remove everything.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Furniture Moving & Removal","description":"Safe transport and removal of all furniture.","href":"/en/furniture-moving-removal","icon":"/icons/truck_icon.svg"}]}
      />

      <ServicePricing filter={["moving", "clearance", "international-moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqData.items} />
    </main>
  );
}
