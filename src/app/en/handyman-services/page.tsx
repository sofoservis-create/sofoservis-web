import React from "react";
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
  title: "Handyman Services — Repairs & Assembly | Sofoservis",
  description:
    "Professional handyman services - repairs, assembly, maintenance for homes and offices ✅ Cheap and fair prices ✅ Contact us today!",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/handyman-services",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster",
      en: "https://www.sofoservis.sk/en/handyman-services",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster",
      },
  },
  openGraph: {
    title: "Handyman Services - Repairs, Assembly & Maintenance | Sofoservis",
    description:
      "Professional handyman services for all household repairs and maintenance. Fast, reliable, and affordable!",
    url: "https://www.sofoservis.sk/en/handyman-services",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function HandymanServicesPage() {
  const faqItems = [
            {
              question: "What services does a handyman provide?",
              answer:
                "Our handyman provides a wide range of services including: hanging pictures, mirrors, TVs, and shelves; light fixture installation, switch and socket replacement; kitchen appliance fitting and other tasks based on individual needs. We adapt to your needs and always try to respond flexibly.",
            },
            {
              question: "How much do handyman services cost?",
              answer:
                "Handyman service pricing is based on several factors, most commonly an hourly rate. The standard hourly rate is €25 per hour of work. For some common tasks, we offer flat rates. Material costs are added if not supplied by the customer. The minimum billable time is 1 hour, then we charge in 30-minute intervals. Travel costs are charged based on distance, starting from €25 within Bratislava and nearby areas.",
            },
            {
              question: "How do I book handyman services?",
              answer:
                "Booking is simple and you can choose from several options: 1) By phone at 0952 044 363, where we will immediately discuss your issue and arrange a date. 2) By filling out the contact form on our website, after which we will contact you within 24 hours. 3) By email at montaz@sofoservis.sk with a description of the required work. When booking, it is helpful to include: a detailed description of the work needed, address and contact details, photos if possible, and your preferred date.",
            },
            {
              question:
                "In which areas do you provide handyman services?",
              answer:
                "We primarily provide our handyman services in Bratislava and cover all city districts. Beyond Bratislava, we serve the entire Bratislava and Trnava regions. For larger jobs or regular cooperation in more distant locations, please contact us to arrange individual terms.",
            },
            {
              question:
                "What tools and equipment should I prepare?",
              answer:
                "You do not need to prepare any tools or equipment. Our technicians arrive fully equipped with professional tools and basic consumables for all common types of household work. If the work requires specific materials (spare parts, fixings, etc.), you can supply them yourself or we can arrange them for you. If you have your own materials or spare parts you wish to use, please prepare them before the technician arrives.",
            },
          ];
  const featuresData = {
    title: "Comprehensive Handyman Services",
    description:
      "Professional handyman services for all small jobs around the house, office, or property with our own tools and experience.",
    features: [
      {
        image: "/icons/wrench_icon.svg",
        title: "Repairs & Maintenance",
        description:
          "Home repairs and maintenance - faucet replacement, tap repair, shelf mounting, painting, drilling holes, and other small jobs.",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Assembly of furniture from IKEA, JYSK, and other brands. Assembly of wardrobes, beds, tables, shelves, and other home furnishings with our own tools.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/electrical_icon.svg",
        title: "Electrical Work",
        description:
          "Basic electrical work: switch replacement, socket replacement, light fitting, chandelier connection, and doorbell installation.",
      },
      {
        image: "/icons/curtain_icon.svg",
        title: "Curtain Rod & Blind Installation",
        description:
          "Professional installation of curtain rods, hanging systems, roller blinds, and venetian blinds. Drilling into various wall types with appropriate fixings.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/garden_icon.svg",
        title: "Garden & Outdoor Work",
        description:
          "Garden maintenance, property cleaning, small construction work, fence installation, gazebo assembly, and other outdoor projects.",
        link: "/en/property-land-junk-removal",
      },
      {
        image: "/icons/paint_icon.svg",
        title: "Painting & Finishing Work",
        description:
          "Room painting, wood staining, post-renovation finishing work, caulking, silicone application, and other surface treatments.",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <LabHero
        narrowForm
        title="Handyman Services"
        description="Professional handyman services for fast and reliable resolution of all minor repairs, assemblies, and maintenance in your home. We help you with tasks you do not have time, tools, or skills for."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        backgroundImage="/images/stahovanie-gauc.avif"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Own professional tools",
          "Experienced technicians",
          "Fair hourly rates",
        ]}
        lang="en"
        mascotSrc="/images/mascot/montaz-mascot.svg"
        desktopMascotDynamicHeight
        desktopMinHeroTextHeightPx={466}
        desktopMascotScaleMultiplier={1.1}
        desktopMascotTopOffsetPct={-0.065}
        phoneCTAText="Call us now"
        phoneNumber="0952 044 363"
        showMascot
        mobileMascotSrc="/images/mascot/montaz-mascot.svg"
        mobileMascotOffsetY={-45}
        mobileFormOffsetY={32}
        pillsVariant="hodinovy"
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
          title="Frequently Asked Questions About Handyman Services"
          items={[
            {
              question: "What services does a handyman provide?",
              answer:
                "Our handyman provides a wide range of services including: hanging pictures, mirrors, TVs, and shelves; light fixture installation, switch and socket replacement; kitchen appliance fitting and other tasks based on individual needs. We adapt to your needs and always try to respond flexibly.",
            },
            {
              question: "How much do handyman services cost?",
              answer:
                "Handyman service pricing is based on several factors, most commonly an hourly rate. The standard hourly rate is €25 per hour of work. For some common tasks, we offer flat rates. Material costs are added if not supplied by the customer. The minimum billable time is 1 hour, then we charge in 30-minute intervals. Travel costs are charged based on distance, starting from €25 within Bratislava and nearby areas.",
            },
            {
              question: "How do I book handyman services?",
              answer:
                "Booking is simple and you can choose from several options: 1) By phone at 0952 044 363, where we will immediately discuss your issue and arrange a date. 2) By filling out the contact form on our website, after which we will contact you within 24 hours. 3) By email at montaz@sofoservis.sk with a description of the required work. When booking, it is helpful to include: a detailed description of the work needed, address and contact details, photos if possible, and your preferred date.",
            },
            {
              question:
                "In which areas do you provide handyman services?",
              answer:
                "We primarily provide our handyman services in Bratislava and cover all city districts. Beyond Bratislava, we serve the entire Bratislava and Trnava regions. For larger jobs or regular cooperation in more distant locations, please contact us to arrange individual terms.",
            },
            {
              question:
                "What tools and equipment should I prepare?",
              answer:
                "You do not need to prepare any tools or equipment. Our technicians arrive fully equipped with professional tools and basic consumables for all common types of household work. If the work requires specific materials (spare parts, fixings, etc.), you can supply them yourself or we can arrange them for you. If you have your own materials or spare parts you wish to use, please prepare them before the technician arrives.",
            },
          ]}
          callToActionText="Questions about handyman services? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Need a handyman?"
          description="Save your time and nerves. Trust minor repairs, assemblies, and maintenance of your home to professionals. One phone call and your problem will be solved quickly, professionally, and at a reasonable price."
          buttonText="Book a handyman"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Furniture Assembly","description":"Expert assembly and disassembly of all furniture types.","href":"/en/furniture-assembly","icon":"/icons/wrench_icon.svg"},{"title":"Kitchen Installation","description":"Expert kitchen assembly and installation.","href":"/en/kitchen-installation","icon":"/icons/kitchen_icon.svg"},{"title":"Apartment Moving","description":"Professional home and apartment relocation services.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"},{"title":"Demolition Services","description":"Professional interior demolition, wall removal and site clearance.","href":"/en/demolition-services","icon":"/icons/crane_icon.svg"}]}
        />
      <ServicePricing filter={["handyman", "furniture-assembly", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
