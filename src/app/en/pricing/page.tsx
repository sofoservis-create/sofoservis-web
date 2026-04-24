import React from "react";
import LabHero from "@/components/sections/LabHero";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import Container from "@/components/ui/Container";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Service Pricing - Moving, Clearance, Assembly | Sofoservis",
  description:
    "Transparent prices for our services. Moving from €25/hr, clearance from €25/hr, furniture assembly from €20. Free inspection!",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/pricing",
    languages: {
      sk: "https://www.sofoservis.sk/cennik",
      en: "https://www.sofoservis.sk/en/pricing",
      "x-default": "https://www.sofoservis.sk/cennik",
      },
  },
  openGraph: {
    title: "Service Pricing - Moving, Clearance, Assembly | Sofoservis",
    description:
      "Transparent and fair prices for professional moving, clearance, and assembly services.",
    url: "https://www.sofoservis.sk/en/pricing",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
  keywords:
    "moving prices, moving cost, clearance pricing, furniture assembly cost, sofoservis pricing, service prices bratislava",
};

interface PricingCardProps {
  title: string;
  items: Array<{
    label: string;
    price: string;
    isHighlighted?: boolean;
  }>;
  buttonText: string;
}

function PricingCard({ title, items, buttonText }: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold text-primary-900 text-center mb-6">
        {title}
      </h3>

      <div className="flex-grow space-y-3 mb-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-2 px-3 rounded-lg ${
              item.isHighlighted
                ? "bg-accent-100 font-semibold text-accent-700"
                : "text-primary-700"
            }`}
          >
            <span className="text-sm">{item.label}</span>
            <span className="text-sm font-bold">{item.price}</span>
          </div>
        ))}
      </div>

      <a
        href="/en/contact"
        className="w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-sm text-center block"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default function PricingPageEN() {
  const pricingData = {
    moving: {
      title: "MOVING",
      items: [
        { label: "Site inspection", price: "free" },
        { label: "1 worker", price: "€25/hr" },
        { label: "2 workers", price: "€50/hr" },
        {
          label: "3 workers - PROMO",
          price: "€67/hr",
          isHighlighted: true,
        },
        { label: "Each additional", price: "€17/hr" },
        { label: "Carry without elevator", price: "€15/floor" },
        { label: "Moving within city", price: "from €40" },
        { label: "Moving outside city", price: "€0.70/km" },
        { label: "International moving", price: "by agreement" },
        { label: "Heavy item moving", price: "from €80" },
        { label: "Warehouse moving", price: "by agreement" },
        { label: "Office moving", price: "by agreement" },
      ],
      buttonText: "GET A FREE INSPECTION",
    },
    clearance: {
      title: "CLEARANCE",
      items: [
        { label: "Site inspection", price: "free" },
        { label: "1 worker", price: "€25/hr" },
        { label: "2 workers", price: "€50/hr" },
        {
          label: "3 workers - PROMO",
          price: "€67/hr",
          isHighlighted: true,
        },
        { label: "Full van 17 m²", price: "€200" },
        { label: "Standard cellar", price: "from €60" },
        { label: "Larger cellar", price: "by agreement" },
        { label: "Garage", price: "from €70" },
        { label: "Studio apartment", price: "from €200" },
        { label: "Each additional room", price: "€60" },
      ],
      buttonText: "GET A FREE INSPECTION",
    },
    furnitureAssembly: {
      title: "FURNITURE ASSEMBLY",
      items: [
        { label: "Assembly/disassembly", price: "by furniture type" },
        { label: "Call-out fee", price: "from €20" },
      ],
      buttonText: "BOOK FOR FREE",
    },
    kitchenAssembly: {
      title: "KITCHEN INSTALLATION",
      items: [
        { label: "Installation", price: "from €120/m" },
        { label: "Removal", price: "from €60/m" },
        { label: "Call-out fee", price: "from €20" },
      ],
      buttonText: "BOOK FOR FREE",
    },
  };

  return (
    <main className="bg-white">
      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Our Service Pricing"
          description="Transparent and fair prices for professional moving services, clearance, and furniture assembly. All prices are final with no hidden fees."
          backgroundImage="/images/stahovanie-gauc.avif"
          formTitle="Get an accurate price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          badgeText="Free site inspection"
          ratingText="Over 3500+ satisfied customers"
          benefits={[
            "Transparent prices",
            "No hidden fees",
            "Free inspection",
          ]}
          desktopMascotDynamicHeight
          lang="en"
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Our Service Pricing"
          description="Transparent and fair prices for professional moving services, clearance, and furniture assembly. All prices are final with no hidden fees."
          backgroundImage="/images/stahovanie-gauc.avif"
          formTitle="Get an accurate price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          badgeText="Free site inspection"
          ratingText="Over 3500+ satisfied customers"
          benefits={[
            "Transparent prices",
            "No hidden fees",
            "Free inspection",
          ]}
          phoneCTAText="Call us now"
          phoneNumber="0951 735 130"
          hoursText="6 days a week 8:00-17:00"
          lang="en"
          showMascot
          pillsVariant="home"
        />
      </div>

      <div>
        <Clients />
      </div>

      <section className="pt-10 md:pt-[100px] bg-white overflow-hidden" id="pricing">
        <Container>
          <div className="text-center mx-auto max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Service Pricing
            </h2>
            <p className="text-lg text-primary-600/90 mx-auto">
              The final price depends on the scope of work and specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title={pricingData.moving.title}
              items={pricingData.moving.items}
              buttonText={pricingData.moving.buttonText}
            />
            <PricingCard
              title={pricingData.clearance.title}
              items={pricingData.clearance.items}
              buttonText={pricingData.clearance.buttonText}
            />
            <PricingCard
              title={pricingData.furnitureAssembly.title}
              items={pricingData.furnitureAssembly.items}
              buttonText={pricingData.furnitureAssembly.buttonText}
            />
            <PricingCard
              title={pricingData.kitchenAssembly.title}
              items={pricingData.kitchenAssembly.items}
              buttonText={pricingData.kitchenAssembly.buttonText}
            />
          </div>
        </Container>
      </section>

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
          title="Frequently Asked Questions About Pricing"
          items={[
            {
              question: "Are the prices listed in the pricing table final?",
              answer:
                "The final price depends on the scope of work, which we determine precisely during a free site inspection.",
            },
            {
              question: "How does the free inspection work?",
              answer:
                "The free inspection is a service we provide completely free of charge and with no obligations. Our expert will review the premises, assess the scope of work, and prepare an accurate quote tailored to your needs.",
            },
            {
              question: "Do you provide services on weekends?",
              answer:
                "Yes, we provide our services 6 days a week including Saturday from 8:00 to 17:00. Sunday is available by arrangement. There is no extra charge for Saturday work.",
            },
            {
              question: "What does the promotional price for 3 workers include?",
              answer:
                "The promotional price of €67/hr for 3 workers is our most popular option, offering excellent value for money. At standard rates, 3 workers would cost €75/hr (3 × €25), so you save €8 for every hour.",
            },
            {
              question: "How are travel costs calculated?",
              answer:
                "For moves within the city, we charge a flat rate from €40. For longer distances, we charge €0.70 per kilometer. The exact travel cost is determined during the inspection based on the specific route.",
            },
          ]}
          callToActionText="Have questions about pricing? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Ready to get a quote?"
          description="Contact us today for a free, no-obligation price quote tailored to your specific needs."
          buttonText="Get a free quote"
        />
      </div>

      <ContactFormSection lang="en" />

      <RelatedServices
        title="Our Services"
        services={[
          {
            title: "Apartment & House Moving",
            description: "Professional moving services for apartments, houses and villas across Slovakia.",
            href: "/en/moving-bratislava",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "Home Clearance",
            description: "Full property clearance including furniture, appliances and junk removal.",
            href: "/en/home-junk-removal-bratislava",
            icon: "/icons/vypratavanie_icon.svg",
          },
          {
            title: "Furniture Assembly",
            description: "Expert assembly of IKEA, kitchens and all furniture brands.",
            href: "/en/furniture-assembly-bratislava",
            icon: "/icons/hammer_icon.svg",
          },
          {
            title: "International Moving",
            description: "Moving to and from Slovakia — affordable, reliable, and stress-free.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
          },
        ]}
      />
    </main>
  );
}
