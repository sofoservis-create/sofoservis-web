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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Kitchen Installation & Assembly Services | Sofoservis",
  description:
    "Professional kitchen installation and assembly services ✅ Cheap and fair prices ✅ Contact us today!",
  keywords:
    "kitchen installation, kitchen assembly, IKEA kitchen assembly, kitchen fitting, worktop installation, kitchen cabinet assembly, kitchen unit installation",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/kitchen-installation",
    languages: {
      sk: "https://www.sofoservis.sk/montaz-kuchyne",
      en: "https://www.sofoservis.sk/en/kitchen-installation",
      "x-default": "https://www.sofoservis.sk/montaz-kuchyne",
      },
  },
  openGraph: {
    title: "Kitchen Installation & Assembly Services | Sofoservis",
    description:
      "Professional kitchen installation services for all brands. Precise and affordable!",
    url: "https://www.sofoservis.sk/en/kitchen-installation",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function KitchenInstallationPage() {
  const faqItems = [
            {
              question:
                "How long does a complete kitchen installation take?",
              answer:
                "Installation time depends on the kitchen size, complexity, and number of components. For a standard kitchen of 3-4 running meters (6-8 cabinets), expect 1-2 working days. Larger kitchen sets with many cabinets, an island, and built-in appliances may require 2-3 days. If old kitchen removal is included, add another working day.",
            },
            {
              question: "How much does kitchen installation cost?",
              answer:
                "The price depends on the scope, complexity, and number of components. We use flat rates starting from €120 per running meter. For a standard kitchen of 3-4 running meters, prices range approximately from €350 to €600. Larger kitchen sets with an island and many appliances can cost €700-€1,200 for installation. An exact price will be determined after a free inspection or based on kitchen plans and specifications.",
            },
            {
              question:
                "Do you install kitchens from all manufacturers?",
              answer:
                "Yes, our installation technicians have experience with kitchen units from all major manufacturers and retailers. We regularly work with kitchens from IKEA, Sykora, Oresi, Decodom, Asko, Mobelix, Sconto, and also custom kitchens from local carpenters. Each manufacturer has specific assembly systems that our technicians are familiar with.",
            },
            {
              question:
                "Do you also handle appliance connection?",
              answer:
                "No, we do not handle appliance connections as part of our services. Our technicians only handle mechanical fitting of appliances into prepared openings in kitchen cabinets. For electrical connection and plumbing/drainage connections, we recommend using a certified electrician and plumber.",
            },
            {
              question:
                "What do I need to prepare before kitchen installation?",
              answer:
                "For smooth installation, please prepare: 1) All kitchen components unpacked from transport packaging (not protective films) and sorted by type. 2) Assembly plans and instructions from the kitchen retailer. 3) Clear and clean kitchen space with sufficient working room. 4) Prepared electrical, water, and drainage connections in correct positions. 5) Finished floors and walls - completed tiles and painted walls. 6) All appliances physically present in the space. 7) Information about any specific requirements.",
            },
          ];
  const featuresData = {
    title: "Comprehensive Kitchen Installation Services",
    description:
      "Professional kitchen installation for all brands with precise results and functional solutions for your home.",
    features: [
      {
        image: "/icons/kitchen_icon.svg",
        title: "Kitchen Unit Installation",
        description:
          "Complete kitchen unit installation including cabinets, worktops, sink, and all components. Precise installation according to the supplied plan.",
        link: "/en/kitchen-installation",
      },
      {
        image: "/icons/appliance_icon.svg",
        title: "Appliance Fitting",
        description:
          "Expert fitting of built-in ovens, hobs, extractor hoods, dishwashers, and fridges into prepared openings in kitchen cabinets.",
        link: "/en/kitchen-installation",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Old Kitchen Clearance",
        description:
          "Disassembly and clearance of your old kitchen before installing the new one. Eco-friendly disposal of old appliances and furniture.",
        link: "/en/home-junk-removal",
      },
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Wall Removal for Renovation",
        description:
          "Removal of partitions and space modification for a new kitchen. Professional demolition with consideration for utilities and safety.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Waste Removal",
        description:
          "Removal of rubble and construction waste after demolition work and kitchen renovation. Complete site clean-up.",
        link: "/en/construction-waste-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Kitchen Installation & Assembly"
        description="Professional kitchen installation, assembly, and fitting services. Our experts ensure precise assembly of your new kitchen from cabinets to worktops and appliances."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        backgroundImage="/images/stahovanie-gauc.avif"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "All kitchen brands",
          "Precise installation",
          "Complete service",
        ]}
        phoneCTAText="Call us now"
        phoneNumber="0952 044 363"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews
          title="Join our satisfied customers"
        />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
          centerLastRow={true}
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="What our customers say about us"
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Kitchen Installation"
          items={[
            {
              question:
                "How long does a complete kitchen installation take?",
              answer:
                "Installation time depends on the kitchen size, complexity, and number of components. For a standard kitchen of 3-4 running meters (6-8 cabinets), expect 1-2 working days. Larger kitchen sets with many cabinets, an island, and built-in appliances may require 2-3 days. If old kitchen removal is included, add another working day.",
            },
            {
              question: "How much does kitchen installation cost?",
              answer:
                "The price depends on the scope, complexity, and number of components. We use flat rates starting from €120 per running meter. For a standard kitchen of 3-4 running meters, prices range approximately from €350 to €600. Larger kitchen sets with an island and many appliances can cost €700-€1,200 for installation. An exact price will be determined after a free inspection or based on kitchen plans and specifications.",
            },
            {
              question:
                "Do you install kitchens from all manufacturers?",
              answer:
                "Yes, our installation technicians have experience with kitchen units from all major manufacturers and retailers. We regularly work with kitchens from IKEA, Sykora, Oresi, Decodom, Asko, Mobelix, Sconto, and also custom kitchens from local carpenters. Each manufacturer has specific assembly systems that our technicians are familiar with.",
            },
            {
              question:
                "Do you also handle appliance connection?",
              answer:
                "No, we do not handle appliance connections as part of our services. Our technicians only handle mechanical fitting of appliances into prepared openings in kitchen cabinets. For electrical connection and plumbing/drainage connections, we recommend using a certified electrician and plumber.",
            },
            {
              question:
                "What do I need to prepare before kitchen installation?",
              answer:
                "For smooth installation, please prepare: 1) All kitchen components unpacked from transport packaging (not protective films) and sorted by type. 2) Assembly plans and instructions from the kitchen retailer. 3) Clear and clean kitchen space with sufficient working room. 4) Prepared electrical, water, and drainage connections in correct positions. 5) Finished floors and walls - completed tiles and painted walls. 6) All appliances physically present in the space. 7) Information about any specific requirements.",
            },
          ]}
          callToActionText="Questions about kitchen installation? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Need professional kitchen installation?"
          description="Trust your kitchen installation to the experts. We ensure precise assembly of cabinets, worktops, and all components with emphasis on quality and long-term satisfaction."
          buttonText="Order kitchen installation"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Furniture Assembly","description":"Expert assembly and disassembly of all furniture types.","href":"/en/furniture-assembly","icon":"/icons/wrench_icon.svg"},{"title":"Handyman Services","description":"Professional repairs, installations and maintenance for your home.","href":"/en/handyman-services","icon":"/icons/repair_icon.svg"},{"title":"Apartment Moving","description":"Professional home and apartment relocation services.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"},{"title":"Demolition Services","description":"Professional interior demolition, wall removal and site clearance.","href":"/en/demolition-services","icon":"/icons/crane_icon.svg"}]}
        />
      <ServicePricing filter={["kitchen-installation", "furniture-assembly", "handyman"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
