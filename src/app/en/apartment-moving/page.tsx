import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Apartment Moving - Cheap and Professional | Sofoservis",
  description:
    "We offer professional apartment moving services ✅ Cheap and fair prices ✅ Free space inspection ✅ Contact us today for a stress-free move!",
  keywords:
    "apartment moving, move apartments, residential moving, home relocation, furniture transport, furniture assembly, furniture disassembly",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/apartment-moving",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-bytov-domov",
      en: "https://www.sofoservis.sk/en/apartment-moving",
    },
  },
  openGraph: {
    title: "Apartment Moving - Cheap and Professional | Sofoservis",
    description:
      "Professional apartment moving services with free estimates. Fast, reliable, and stress-free relocation!",
    url: "https://www.sofoservis.sk/en/apartment-moving",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.sofoservis.sk/images/og-apartment-moving.jpg",
        width: 1200,
        height: 630,
        alt: "Sofoservis apartment moving services",
      },
    ],
  },
};

export default function ApartmentMovingPage() {
  // Custom data for Features section
  const featuresData = {
    title: "Comprehensive Apartment Moving Services",
    description:
      "We offer solutions for every part of the moving process so you can focus on settling into your new home.",
    features: [
      {
        image: "/icons/packing_box_icon.svg", // Perfect for property packing
        title: "Property Packing & Protection",
        description:
          "We professionally pack your belongings using quality packing materials. Sensitive items receive special protection to prevent damage during transport.",
        link: "/en/services/packing-services",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Furniture Disassembly & Assembly",
        description:
          "Our experienced team will disassemble and later reassemble all your furniture. We have experience with all furniture types including IKEA, Asko, Jysk, and other brands.",
        link: "/en/services/furniture-assembly",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy item transport
        title: "Heavy Item Transport",
        description:
          "We safely move pianos, safes, heavy cabinets, couches, and other bulky items. We use specialized techniques and equipment for safe handling.",
        link: "/en/services/heavy-item-moving",
      },
      {
        image: "/icons/calendar_icon.svg", // Perfect for express moving (24 hours)
        title: "Express Moving Within 24 Hours",
        description:
          "Need to move quickly? We offer express moving services with implementation within 24 hours of ordering, including weekends and holidays.",
        link: "/en/services/express-moving",
      },
      {
        image: "/icons/house_icon.svg", // Perfect for apartment building specialists
        title: "Apartment Building Specialists",
        description:
          "We specialize in moving within apartment buildings. We efficiently handle narrow staircases, small elevators, and other obstacles typical for apartment buildings.",
        link: "/en/services/apartment-building-moving",
      },
      {
        image: "/icons/broom_icon.svg", // Perfect for furniture disposal
        title: "Old Furniture Disposal",
        description:
          "Don't want to take old furniture to your new home? We'll take care of environmentally friendly disposal or removal of unwanted furniture and equipment.",
        link: "/en/services/furniture-disposal",
      },
    ],
  };

  // Location service areas
  const serviceLocations = [
    { name: "Bratislava", href: "/en/moving-bratislava" },
    { name: "Trnava", href: "/en/moving-trnava" },
    { name: "Pezinok", href: "/en/moving-pezinok" },
    { name: "Senec", href: "/en/moving-senec" },
    { name: "Malacky", href: "/en/moving-malacky" },
    { name: "Stupava", href: "/en/moving-stupava" },
    { name: "Šamorín", href: "/en/moving-samorin" },
    "Modra",
    { name: "Galanta", href: "/en/moving-galanta" },
    "Dunajská Streda",
    { name: "Nitra", href: "/en/moving-nitra" },
    "Nové Zámky",
    { name: "Levice", href: "/en/moving-levice" },
    { name: "Komárno", href: "/en/moving-komarno" },
    { name: "Piešťany", href: "/en/moving-piestany" },
    { name: "Hlohovec", href: "/en/moving-hlohovec" },
    { name: "Senica", href: "/en/moving-senica" },
    "Skalica",
    "Trenčín",
    "Žilina",
  ];

  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <Hero
        title="Apartment Moving Services"
        description="Professional services for complete apartment and house relocations. We save your time, energy, and nerves with our experienced team that handles everything from packing to unpacking at your new place."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation price calculation"
        badgeText="Services available 6 days a week"
        ratingText="Over 1000+ satisfied customers"
        benefits={[
          "Free site inspection",
          "High customer satisfaction",
          "Stress-free experience",
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
          title="Join our satisfied customers"
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

      {/* Location Map */}
      <div>
        <LocationMap
          title="Service Areas"
          description="We provide our apartment moving services in these locations"
          locations={serviceLocations}
          supporText="We also operate outside Bratislava:"
          callToActionText="We move in your area too, get a quote"
          additionalText="We operate throughout Slovakia and can also handle international moves to neighboring countries. Contact us for more information about services outside these areas."
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
          title="What our customers say about us"
        />
      </div>

      {/* FAQ section */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Frequently Asked Questions About Apartment Moving"
          subtitle="Answers to frequently asked questions about our residential moving services"
          items={[
            {
              question:
                "What's the approximate price for moving a 2-bedroom apartment?",
              answer:
                "The price for moving a 2-bedroom apartment typically ranges from €200 to €350, depending on the amount of furniture, distance, floor level, and access conditions. For an accurate price estimate, we'll gladly prepare a free quote after you fill out our contact form.",
            },
            {
              question: "Do you provide packing materials for wrapping items?",
              answer:
                "Yes, upon request we supply all necessary packing materials such as cardboard boxes, bubble wrap, protective blankets, moving tape, and more. You can either order these materials in advance, or we can deliver them on moving day.",
            },
            {
              question:
                "How long does it take to move an average 3-bedroom apartment?",
              answer:
                "Moving a 3-bedroom apartment usually takes 4-6 hours, depending on the volume of belongings, distance between locations, and access conditions. When you place an order, you'll receive a more accurate time estimate based on your specific situation.",
            },
            {
              question: "Do you offer weekend moving services?",
              answer:
                "Yes, we provide our services 6 days a week except Sunday with no additional charge for Saturdays.",
            },
            {
              question: "Do I need to prepare furniture before moving?",
              answer:
                "It's not necessary. Our professionals will take care of disassembling, packing, and later reassembling your furniture. However, if you have sensitive personal items, we recommend packing those in advance. For electronics, it's advisable to back up your data.",
            },
          ]}
          callToActionText="Questions about your apartment move? Get in touch"
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Ready for a stress-free move?"
          description="Let us handle your apartment moving with professional care and attention to detail. Contact us today to get started."
          buttonText="Get a free quote"
        />
      </div>
    
      <ContactFormSection lang="en" />
    </main>
  );
}
