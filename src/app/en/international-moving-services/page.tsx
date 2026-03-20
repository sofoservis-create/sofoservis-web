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
  title: "International Moving Services | Sofoservis",
  description:
    "We offer professional international moving services ✅ Cheap and fair prices ✅ Free site inspection ✅ Contact us today for a quote!",
  keywords:
    "international moving, international moving company, international moving services, moving austria, moving belgium, moving france, moving germany, moving italy, moving spain, moving czech republic, moving poland, moving switzerland, moving united kingdom",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/international-moving-services",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie",
    },
  },
};

export default function InternationalMovingServicesPage() {
  // Custom data for Features section
  const featuresData = {
    title: "Comprehensive International Moving Solutions",
    description:
      "We offer solutions for both personal and business relocations to and from abroad with all necessary services in one place.",
    features: [
      {
        image: "/icons/globe_icon.svg", // Perfect for EU countries moving
        title: "Moving to EU Countries",
        description:
          "We provide moving services to all European Union countries. Regular routes to Austria, Germany, Czech Republic, France, Italy, Spain, and other countries at competitive rates.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/truck_icon.svg", // Perfect for return moving
        title: "Moving from Abroad to Slovakia",
        description:
          "We help people returning to Slovakia with complete relocation of their property. We'll pick up your belongings anywhere in Europe and safely transport them to your address in Slovakia.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/furniture_icon.svg", // Perfect for individual furniture pieces
        title: "Transport of Individual Furniture Pieces",
        description:
          "We also provide transport of individual furniture pieces and smaller shipments abroad. An ideal solution when you need to move only part of your household or new furniture.",
        link: "/en/furniture-moving-removal",
      },
      {
        image: "/icons/document_icon.svg", // Perfect for customs and documentation
        title: "Customs Formalities and Documentation",
        description:
          "We'll help you prepare all necessary documents for smooth border crossing and customs clearance. Our experienced staff knows what permits and documents are required.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/packing_box_icon.svg", // Perfect for packing services
        title: "Packing and Protection for Long Routes",
        description:
          "For international moving, we use specially reinforced packaging and protective materials that ensure the safety of your belongings even on long routes across multiple countries.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/insurance_icon.svg", // Perfect for insurance coverage
        title: "Insurance for International Transport",
        description:
          "Complete insurance of your property during the entire route of international transport. We guarantee safe transport and financial coverage in case of unforeseen events.",
        link: "/en/international-moving-services",
      },
    ],
  };

  // European countries we service
  const europeanCountries = [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "United Kingdom",
  ];

  return (
    <main className="bg-white">
      {/* Hero section */}
      <Hero
        title="International Moving Services"
        description="Comprehensive services for relocating to and from abroad with minimum hassle. We ensure professional transport of your household or business anywhere in Europe with all necessary formalities handled for you."
        backgroundImage="/images/stahovanie_gauc.jpg"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 1000+ satisfied customers"
        benefits={[
          "Free consultation",
          "All documents handled",
          "Secure transport",
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
          title="Trusted International Moving Services"
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

      {/* European Countries section */}
      <div>
        <LocationMap
          title="Our European Coverage"
          description="We provide international moving services to and from these countries"
          locations={europeanCountries}
          supporText="We also operate outside Bratislava:"
          callToActionText="We move in your area too, get a quote"
          additionalText="We can also arrange moving services to other countries outside Europe. Contact us for details about your specific destination."
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
          title="Reviews from Our International Clients"
        />
      </div>

      {/* FAQ section */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Frequently Asked Questions About International Moving"
          subtitle="Important information about moving your belongings between countries"
          items={[
            {
              question:
                "How far in advance should I plan my international move?",
              answer:
                "We recommend planning international relocations at least 1-2 weeks in advance, ideally 3-4 weeks. For moves to more distant countries or outside the EU, it's advisable to start preparations even earlier. Earlier planning allows you to secure an optimal date and get a better price. In urgent cases, however, we can also arrange express international moving, especially for the closest countries such as the Czech Republic, Austria, or Germany.",
            },
            {
              question: "What documents do I need when moving abroad?",
              answer:
                "When moving within the EU, you usually need an ID card or passport and a list of transported items (inventory). For countries outside the EU, additional documents may be required such as customs declarations, certificates of origin, invoices, or purchase documents for more valuable items. In some cases, special permits may be required for transporting certain types of items. Our coordinators will prepare a precise list of documents needed for your specific destination.",
            },
            {
              question:
                "How are my belongings protected during international transport?",
              answer:
                "For international transport, we use specially reinforced cardboard boxes, bubble wrap, protective foam materials, and wooden crates for fragile items. Each piece of furniture is individually wrapped and protected. In the transport vehicle, all items are secured against movement using straps and fixation devices. Additionally, all transported property is insured throughout the entire international transport route, providing you with additional financial protection.",
            },
            {
              question: "Can you also transport vehicles abroad?",
              answer:
                "Yes, as part of our international moving services, we can also arrange transport of personal cars, motorcycles, and other vehicles. Transport takes place on special car transporters or using towing services, depending on the type of vehicle and destination. We also provide all necessary documentation and insurance for vehicle transport. This service is ideal if you're moving abroad permanently and need to relocate your vehicle as well.",
            },
            {
              question: "Are there restrictions on what I can move abroad?",
              answer:
                "Yes, individual countries have their specific restrictions and regulations. Within the EU, the transfer of personal belongings is usually without restrictions, but there are regulations for certain categories of items such as weapons, medicines, alcohol above certain quantities, artworks, antiques, and protected species of plants or animals. Countries outside the EU may have stricter rules and customs regulations. We will always provide you with up-to-date information on restrictions for your destination country and help you prepare all necessary documents for the legal transfer of your belongings.",
            },
          ]}
          callToActionText="Planning an international move? Get a free quote"
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Moving Abroad? Get a Professional Quote"
          description="Our team specializes in international relocations. Contact us today for a detailed estimate tailored to your specific needs."
          buttonText="Request a Quote"
        />
      </div>
    
      <ContactFormSection lang="en" />
    </main>
  );
}
