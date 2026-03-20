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
  title: "Moving Heavy Loads - Piano, Safe and Others | Sofoservis",
  description:
    "We can help you move heavy loads such as a piano, safe or other items ✅ Specialized equipment ✅ Experienced team ✅ Cheap and fair prices ✅ Contact us today!",
  keywords:
    "piano moving, safe moving, heavy loads moving, moving heavy items, moving piano, moving safe, heavy furniture moving, bulky item transport",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-heavy-loads",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
      en: "https://www.sofoservis.sk/en/moving-heavy-loads",
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
  // Custom data for Features section
  const featuresData = {
    title: "Specialized Services for Heavy and Bulky Items",
    description:
      "We offer professional solutions for extremely heavy and dimensionally challenging items that require special procedures and equipment.",
    features: [
      {
        image: "/icons/packing_box_icon.svg", // Perfect for piano moving (musical instrument boxes)
        title: "Piano & Grand Piano Moving",
        description:
          "We safely transport your piano or grand piano using special techniques and equipment. We ensure not only protection of the instrument but also offer tuning services after relocation to your new place.",
        link: "/en/services/piano-moving",
      },
      {
        image: "/icons/safe_icon.svg", // Perfect for safes and banking equipment
        title: "Safe & Banking Equipment Transport",
        description:
          "We specialize in the safe transport of safes, ATMs, and other heavy security elements. We use special lifting equipment and secure transportation methods.",
        link: "/en/services/safe-moving",
      },
      {
        image: "/icons/heavy_machinery_icon.svg", // Perfect for industrial machinery
        title: "Manufacturing Machinery Moving",
        description:
          "We relocate industrial machines, production lines, and heavy equipment. We provide disassembly, safe transport, and reassembly at the new location with a focus on precision.",
        link: "/en/services/machinery-moving",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for specialized moving techniques
        title: "Specialized Moving Techniques",
        description:
          "For moving, we use advanced techniques such as hydraulic platforms, special jacks, pulley systems, and scaffolding constructions for the safe movement of heavy loads.",
        link: "/en/services/heavy-loads-moving",
      },
      {
        image: "/icons/hazmat_icon.svg", // Perfect for difficult access solutions
        title: "Solutions for Difficult Access",
        description:
          "We have experience with moving items in spaces with limited access. If needed, we can provide a crane, lowering items through balconies, or specialized scaffolding.",
        link: "/en/services/limited-access-moving",
      },
      {
        image: "/icons/insurance_icon.svg", // Perfect for insurance services
        title: "Oversized Item Insurance",
        description:
          "All heavy items are fully insured during transport. We prioritize maximum safety and take responsibility for secure handling and transportation.",
        link: "/en/services/heavy-loads-moving",
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
        title="Moving Heavy Loads"
        description="Specialized services for safely moving heavy and bulky items. Our professional team with years of experience and specialized equipment ensures the transport of heavy loads like pianos, safes, manufacturing machines, and other oversized items."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 1000+ satisfied customers"
        benefits={[
          "Free site inspection",
          "Specialized equipment",
          "Expert handling",
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
      <div className="pt-10 md:pt-[100px]">
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
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Need help moving heavy items?"
          description="Let our specialized team and equipment handle your heavy loads with safety and precision."
          buttonText="Get a free quote"
        />
      </div>
    
      <ContactFormSection lang="en" />
    </main>
  );
}
