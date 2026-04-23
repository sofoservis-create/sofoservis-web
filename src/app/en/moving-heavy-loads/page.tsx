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
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Moving Heavy Loads - Piano, Safe and Others | Sofoservis",
  description:
    "We can help you move heavy loads such as a piano, safe or other items ✅ Specialized equipment ✅ Experienced team ✅ Cheap and fair prices ✅ Contact us.",
  keywords:
    "piano moving, safe moving, heavy loads moving, moving heavy items, moving piano, moving safe, heavy furniture moving, bulky item transport",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-heavy-loads",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
      en: "https://www.sofoservis.sk/en/moving-heavy-loads",
      "x-default": "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
      },
  },
  openGraph: {
    title: "Moving Heavy Loads - Piano, Safe and Others | Sofoservis",
    description:
      "Professional moving of pianos, safes, and other heavy items. Specialized equipment and expert team for safety and reliability!",
    url: "https://www.sofoservis.sk/en/moving-heavy-loads",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.sofoservis.sk/images/og-heavy-loads-moving.jpg",
        width: 1200,
        height: 630,
        alt: "Sofoservis heavy loads moving services",
      },
    ],
  },
};

export default function HeavyLoadsMovingPage() {
  const faqItems = [
            {
              question: "What is the heaviest item you can move?",
              answer:
                "Our company has experience with items weighing up to several tons. We have transported industrial machines, large safes, and other heavy objects weighing more than 3 tons. Each heavy load move requires individual assessment, so we recommend an on-site inspection based on which we'll propose the optimal solution for your specific case.",
            },
            {
              question: "How does piano moving work?",
              answer:
                "Piano moving requires a specialized approach. First, we secure it against shocks and damage using special covers. Then we use a piano dolly and moving straps for safe handling. In narrow spaces, we might use piano skids. A team of trained workers ensures transfer to the vehicle and unloading at the new location. Upon request, we can also arrange piano tuning after the move.",
            },
            {
              question: "Do I need special permits for moving a safe?",
              answer:
                "In most cases, special permits are not required for moving a safe unless it's an exceptionally heavy safe (over 1000 kg) that would require using a crane in a public space. In such cases, a permit for temporary occupation of public space might be needed from the local authority. We can handle this administrative work for you as part of our comprehensive services.",
            },
            {
              question:
                "Can a manufacturing machine be moved without interrupting production?",
              answer:
                "Yes, with proper planning it's possible to minimize production downtime. We carefully plan the entire moving process, prepare the new location in advance, secure power supplies and other necessary requirements. The actual machine moving is scheduled during weekends or planned shutdowns, giving your technical team enough time to connect and test the equipment before resuming operations.",
            },
            {
              question:
                "What if a heavy item doesn't fit through doors or stairways?",
              answer:
                "In such cases, we have several alternative solutions. We can use techniques like lowering through a balcony or window using a crane, hydraulic platforms from the building exterior, or in extreme cases, temporary construction modifications (widening openings). Our technicians will assess all options during inspection and propose the most suitable and least invasive solution for your specific case.",
            },
          ];
  // Custom data for Features section
  const featuresData = {
    title: "Specialized Services for Heavy and Bulky Items",
    description:
      "We offer professional solutions for extremely heavy and dimensionally challenging items that require special procedures and equipment.",
    features: [
      {
        image: "/icons/crane_icon.svg",
        title: "Piano & Grand Piano Moving",
        description:
          "We safely transport your piano or grand piano using specialist piano dollies, skids and protective materials. We also cover upright piano moves up and down staircases or through windows.",
        link: "/en/piano-moving",
      },
      {
        image: "/icons/safe_icon.svg",
        title: "Safe & Vault Moving",
        description:
          "We specialise in moving safes and vaults of all weights — from small wall safes to bank vaults. Hydraulic jacks, motor platforms and discreet service.",
        link: "/en/safe-moving",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Industrial Machinery Moving",
        description:
          "We relocate CNC machines, production lines, ATMs and other heavy industrial equipment. Every job is planned to minimise your production downtime.",
        link: "/en/machinery-moving",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for specialized moving techniques
        title: "Specialized Moving Techniques",
        description:
          "For moving, we use advanced techniques such as hydraulic platforms, special jacks, pulley systems, and scaffolding constructions for the safe movement of heavy loads.",
        link: "/en/moving-heavy-loads",
      },
      {
        image: "/icons/hazmat_icon.svg", // Perfect for difficult access solutions
        title: "Solutions for Difficult Access",
        description:
          "We have experience with moving items in spaces with limited access. If needed, we can provide a crane, lowering items through balconies, or specialized scaffolding.",
        link: "/en/moving-heavy-loads",
      },
      {
        image: "/icons/insurance_icon.svg", // Perfect for insurance services
        title: "Oversized Item Insurance",
        description:
          "All heavy items are fully insured during transport. We prioritize maximum safety and take responsibility for secure handling and transportation.",
        link: "/en/moving-heavy-loads",
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
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving Heavy Loads"
          description="Specialized services for safely moving heavy and bulky items. Our professional team with years of experience and specialized equipment ensures the transport of heavy loads like pianos, safes, manufacturing machines, and other oversized items."
          formTitle="Get a free price quote"
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
          title="Moving Heavy Loads"
          description="Specialized services for safely moving heavy and bulky items. Our professional team with years of experience and specialized equipment ensures the transport of heavy loads like pianos, safes, manufacturing machines, and other oversized items."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          title="Trusted for handling valuable heavy items"
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
          description="We provide our heavy item moving services throughout these locations"
          locations={serviceLocations}
          supporText="We also operate outside Bratislava:"
          callToActionText="We move in your area too, get a quote"
          additionalText="Our specialized heavy item moving services are available nationwide. We have the equipment and expertise to transport heavy loads safely across Slovakia and even to neighboring countries."
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
          title="What customers say about our heavy item moving services"
        />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Frequently Asked Questions About Moving Heavy Loads"
          subtitle="Common questions about piano, safe, and other heavy item moving"
          items={[
            {
              question: "What is the heaviest item you can move?",
              answer:
                "Our company has experience with items weighing up to several tons. We have transported industrial machines, large safes, and other heavy objects weighing more than 3 tons. Each heavy load move requires individual assessment, so we recommend an on-site inspection based on which we'll propose the optimal solution for your specific case.",
            },
            {
              question: "How does piano moving work?",
              answer:
                "Piano moving requires a specialized approach. First, we secure it against shocks and damage using special covers. Then we use a piano dolly and moving straps for safe handling. In narrow spaces, we might use piano skids. A team of trained workers ensures transfer to the vehicle and unloading at the new location. Upon request, we can also arrange piano tuning after the move.",
            },
            {
              question: "Do I need special permits for moving a safe?",
              answer:
                "In most cases, special permits are not required for moving a safe unless it's an exceptionally heavy safe (over 1000 kg) that would require using a crane in a public space. In such cases, a permit for temporary occupation of public space might be needed from the local authority. We can handle this administrative work for you as part of our comprehensive services.",
            },
            {
              question:
                "Can a manufacturing machine be moved without interrupting production?",
              answer:
                "Yes, with proper planning it's possible to minimize production downtime. We carefully plan the entire moving process, prepare the new location in advance, secure power supplies and other necessary requirements. The actual machine moving is scheduled during weekends or planned shutdowns, giving your technical team enough time to connect and test the equipment before resuming operations.",
            },
            {
              question:
                "What if a heavy item doesn't fit through doors or stairways?",
              answer:
                "In such cases, we have several alternative solutions. We can use techniques like lowering through a balcony or window using a crane, hydraulic platforms from the building exterior, or in extreme cases, temporary construction modifications (widening openings). Our technicians will assess all options during inspection and propose the most suitable and least invasive solution for your specific case.",
            },
          ]}
          callToActionText="Need help with heavy item moving? Contact us"
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Need help moving heavy items?"
          description="Let our specialized team and equipment handle your heavy loads with safety and precision."
          buttonText="Get a free quote"
        />
      </div>
    

      <RelatedServices
          title="Specialist Heavy Item Moving Services"
          services={[
            { title: "Piano & Grand Piano Moving", description: "Specialist transport of pianos, uprights and grands.", href: "/en/piano-moving", icon: "/icons/crane_icon.svg" },
            { title: "Upright Piano Moving", description: "Dedicated page for upright piano (pianino) moving.", href: "/en/upright-piano-moving", icon: "/icons/crane_icon.svg" },
            { title: "Safe & Vault Moving", description: "Professional moving of safes and vaults of all weights.", href: "/en/safe-moving", icon: "/icons/safe_icon.svg" },
            { title: "Industrial Machinery Moving", description: "CNC machines, production lines, ATMs and more.", href: "/en/machinery-moving", icon: "/icons/heavy_machinery_icon.svg" },
          ]}
        />
      <ServicePricing filter={["moving", "clearance", "international-moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
