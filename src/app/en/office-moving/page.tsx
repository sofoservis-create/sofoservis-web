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
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Office Moving - Cheap and Professional | Sofoservis",
  description:
    "We offer professional office moving services ✅ Cheap and fair prices ✅ Free space inspection ✅ Contact us today for a smooth business relocation!",
  keywords:
    "office moving, business relocation, corporate moving, office furniture moving, commercial moving, business moving services, professional office relocation",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/office-moving",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-kancelarii-firiem",
      en: "https://www.sofoservis.sk/en/office-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-kancelarii-firiem",
      },
  },
  openGraph: {
    title: "Office Moving - Cheap and Professional | Sofoservis",
    description:
      "Professional office and business moving services with minimal downtime. We handle everything from planning to installation!",
    url: "https://www.sofoservis.sk/en/office-moving",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.sofoservis.sk/images/og-office-moving.jpg",
        width: 1200,
        height: 630,
        alt: "Sofoservis office moving services",
      },
    ],
  },
};

export default function OfficeMovingPage() {
  const faqItems = [
            {
              question: "How far in advance should I plan an office move?",
              answer:
                "For smaller offices, we recommend planning the move at least 1-2 weeks in advance, for medium-sized companies 3-4 months, and for large corporations 4-6 months. Early planning allows us to secure all necessary resources and minimize the impact on your operations.",
            },
            {
              question:
                "Can you move during weekends to avoid disrupting business operations?",
              answer:
                "Yes, we often perform office and business relocations during weekends, evenings, or holidays precisely for this reason. Our staff is available 6 days a week and we can adapt to your operational needs. This approach allows you to finish work at the old location on Friday and start at the new one on Monday.",
            },
            {
              question:
                "How do you ensure the protection of confidential documents and data?",
              answer:
                "When moving documents and archives, we follow strict security protocols. We use special lockable containers, label and organize documents according to your requirements, and ensure that only authorized personnel have access to them. Our staff is trained in handling confidential materials.",
            },
            {
              question:
                "Do you offer complete disassembly and assembly of modular furniture?",
              answer:
                "Yes, our technicians have extensive experience with disassembly and assembly of all types of modular furniture from various manufacturers. We thoroughly document the furniture layout before disassembly and ensure precise assembly at the new location according to your requirements or floor plans.",
            },
            {
              question:
                "Can you handle the relocation of IT equipment and servers?",
              answer:
                "Yes, we have experience moving sensitive IT equipment including servers, network devices, and data storage. We use special anti-static packaging and cushioned transport systems to protect electronics. Upon request, we can also arrange disconnection and reconnection of equipment through our IT partners.",
            },
          ];
  // Custom data for Features section
  const featuresData = {
    title: "Comprehensive Office Moving Solutions",
    description:
      "We offer complete solutions for every aspect of the moving process so your business can continue operating with minimal interruption.",
    features: [
      {
        image: "/icons/calendar_icon.svg", // Perfect for planning & coordination
        title: "Planning & Coordination",
        description:
          "We prepare a detailed moving schedule that minimizes your company's downtime. We coordinate the entire process including logistics and communication.",
        link: "/en/office-moving",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Office Furniture Disassembly & Assembly",
        description:
          "Our experienced team professionally disassembles and later reassembles all your office furniture. We specialize in modular furniture from all manufacturers.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/electrical_icon.svg", // Perfect for IT equipment
        title: "Secure IT Equipment Packing",
        description:
          "We use special packing materials and procedures for the safe transport of computers, servers, printers, and other sensitive technology. We can also arrange disconnection and reconnection of equipment upon request.",
        link: "/en/apartment-moving",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for after-hours moving
        title: "After-Hours Moving",
        description:
          "We perform relocations during evenings, nights, weekends, or holidays to minimize impact on your operations. Your team can continue working without interruption.",
        link: "/en/apartment-moving",
      },
      {
        image: "/icons/document_icon.svg", // Perfect for document moving
        title: "Document & Archive Moving",
        description:
          "We systematically pack, label, and organize documents and archives. We ensure all documents remain organized and easily accessible after relocation.",
        link: "/en/office-moving",
      },
      {
        image: "/icons/recycle_icon.svg", // Perfect for disposal services
        title: "Disposal of Unwanted Equipment",
        description:
          "Moving is an ideal opportunity to get rid of unnecessary equipment. We provide environmentally friendly disposal or donation of unwanted furniture and equipment.",
        link: "/en/clearance",
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
        title="Office & Business Moving Services"
        description="Professional services for complete office and business relocations. We minimize your business downtime with our experienced team that manages the efficient and safe transfer of your entire company."
        backgroundImage="/images/stahovanie-gauc.avif"
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Service available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Free site inspection",
          "High customer satisfaction",
          "Stress-free experience",
        ]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en" // Set to English
      />

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          title="Trusted by businesses across Slovakia"
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
          description="We provide our office moving services throughout these locations"
          locations={serviceLocations}
          supporText="We also operate outside Bratislava:"
          callToActionText="We move in your area too, get a quote"
          additionalText="We serve businesses all across Slovakia and can also handle international relocations. Contact us for more information about services outside these listed areas."
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
          title="What businesses say about our services"
        />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Frequently Asked Questions About Office Moving"
          subtitle="Common questions about business relocation and office moving services"
          items={[
            {
              question: "How far in advance should I plan an office move?",
              answer:
                "For smaller offices, we recommend planning the move at least 1-2 weeks in advance, for medium-sized companies 3-4 months, and for large corporations 4-6 months. Early planning allows us to secure all necessary resources and minimize the impact on your operations.",
            },
            {
              question:
                "Can you move during weekends to avoid disrupting business operations?",
              answer:
                "Yes, we often perform office and business relocations during weekends, evenings, or holidays precisely for this reason. Our staff is available 6 days a week and we can adapt to your operational needs. This approach allows you to finish work at the old location on Friday and start at the new one on Monday.",
            },
            {
              question:
                "How do you ensure the protection of confidential documents and data?",
              answer:
                "When moving documents and archives, we follow strict security protocols. We use special lockable containers, label and organize documents according to your requirements, and ensure that only authorized personnel have access to them. Our staff is trained in handling confidential materials.",
            },
            {
              question:
                "Do you offer complete disassembly and assembly of modular furniture?",
              answer:
                "Yes, our technicians have extensive experience with disassembly and assembly of all types of modular furniture from various manufacturers. We thoroughly document the furniture layout before disassembly and ensure precise assembly at the new location according to your requirements or floor plans.",
            },
            {
              question:
                "Can you handle the relocation of IT equipment and servers?",
              answer:
                "Yes, we have experience moving sensitive IT equipment including servers, network devices, and data storage. We use special anti-static packaging and cushioned transport systems to protect electronics. Upon request, we can also arrange disconnection and reconnection of equipment through our IT partners.",
            },
          ]}
          callToActionText="Have questions about your office relocation? Contact us"
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Minimize business disruption with professional moving"
          description="Let us handle your office relocation with expertise, so you can focus on what matters - running your business."
          buttonText="Request a quote"
        />
      </div>
    

      <RelatedServices
          title="Related Services"
          services={[{"title":"Apartment Moving","description":"Professional home and apartment relocation services.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"},{"title":"Furniture Assembly","description":"Expert assembly and disassembly of all furniture types.","href":"/en/furniture-assembly","icon":"/icons/wrench_icon.svg"},{"title":"Handyman Services","description":"Professional repairs, installations and maintenance for your home.","href":"/en/handyman-services","icon":"/icons/repair_icon.svg"},{"title":"Construction Waste Removal","description":"Quick removal of construction debris, rubble and building waste.","href":"/en/construction-waste-removal","icon":"/icons/recycle_icon.svg"}]}
        />
      <ServicePricing filter={["moving", "clearance", "international-moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
