import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import LocationMap from "@/components/sections/LocationMap";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Moving Services Levice - Apartments, Houses & Offices | Sofoservis",
  description:
    "Professional moving services in Levice and surrounding areas. Fast, reliable, and affordable. We move apartments, houses, offices, and businesses.",
  keywords:
    "moving levice, moving services levice, apartment moving levice, house moving levice, office moving levice",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-levice",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-levice",
      en: "https://www.sofoservis.sk/en/moving-levice",
    },
  },
};

export default function MovingLevicePage() {
  const heroData = {
    title: "Moving Services in Levice",
    description:
      "Complete moving services in Levice and surrounding areas. Professional team, competitive prices, satisfaction guaranteed. We move apartments, houses, offices, and businesses throughout Levice.",
    formTitle: "Hassle-free moving in Levice with a free quote",
    formSubtitle: "Fill out the form below for a quick fixed price",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Professional Moving Services in Levice",
    description:
      "Complete moving solutions for homes and businesses in Levice and surrounding areas.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Apartment & House Moving in Levice",
        description:
          "Complete apartment and house moving services in Levice. We safely transport your furniture and personal belongings to your new home.",
        link: "/en/apartment-moving",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Office & Business Moving",
        description:
          "Professional office and business relocation in Levice. We minimize downtime by moving during weekends and holidays.",
        link: "/en/office-moving",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Furniture Assembly & Disassembly",
        description:
          "Expert assembly and disassembly of any furniture during your move in Levice. We save your time and energy.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Heavy Item Moving",
        description:
          "We specialize in moving heavy items such as pianos, safes, and large furniture pieces in Levice.",
        link: "/en/moving-heavy-loads",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "International Moving from Levice",
        description:
          "Moving from Levice abroad or vice versa. Complete solution for international relocation with minimum hassle.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/broom_icon.svg",
        title: "Property Clearance",
        description:
          "Complete property clearance services in Levice. Ideal for property sales, renovations, or estate settlements.",
        link: "/en/home-junk-removal",
      },
    ],
  };

  const mapData = {
    title: "We Move Throughout Levice",
    description:
      "Our services are available throughout Levice and surrounding areas for complete home and business relocations.",
    locations: [
          "Levice center",
          "Géňa",
          "Kalinčiakovo",
          "Krškany",
          "Tlmače",
          "Pukanec",
          "Podlužany",
          "Kalná nad Hronom",
          "Kozárovce",
          "Nový Tekov",
          "Bátovce"
    ],
    additionalText: "Nitra, Zlaté Moravce, Nové Zámky, and other surrounding towns.",
  };

  const faqData = {
    title: "Frequently Asked Questions About Moving in Levice",
    items: [
      {
        question: "Which areas of Levice do you cover?",
        answer:
          "We provide our services throughout Levice and all surrounding towns and villages. Contact us for details about service in your specific location.",
      },
      {
        question: "What is the cost of moving in Levice?",
        answer:
          "The cost depends on several factors such as volume of items, distance, access conditions, and required services. For an accurate estimate, we'll prepare a free quote after you fill out the contact form or call us.",
      },
      {
        question: "How far in advance should I book a move in Levice?",
        answer:
          "We recommend booking at least 7-14 days in advance to secure your preferred date. For urgent needs, we can arrange express moving within 24-48 hours.",
      },
      {
        question: "Do you provide furniture assembly and disassembly in Levice?",
        answer:
          "Yes, our services include complete furniture disassembly at your old place and reassembly at your new location. Our team has experience with all furniture types including IKEA, Asko, Jysk, and other brands.",
      },
      {
        question: "Can you move heavy items like pianos or safes in Levice?",
        answer:
          "Yes, we specialize in moving heavy and bulky items such as pianos, safes, pool tables, and antique furniture. We use specialized equipment and techniques for safe handling.",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        lang="en"
      />

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

      <div className="pt-10 md:pt-[100px]">
        <FAQ title={faqData.title} items={faqData.items} />
      </div>

      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Ready for a stress-free move?"
          description="Let us handle your move in Levice with professional care. Contact us today for a free quote."
          buttonText="Get a free quote"
        />
      </div>

      <ContactFormSection lang="en" />
    </main>
  );
}
