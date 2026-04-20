import React from "react";
import ContactHeader from "@/components/sections/ContactHeader";
import ContactInfo from "@/components/sections/ContactInfo";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import ReviewsShowcase from "@/components/widgets/ReviewsShowcase";
import Container from "@/components/ui/Container";
import QuickContactForm from "@/components/forms/QuickContactForm";

export const metadata = {
  title: "Contact Us | Sofoservis - Professional Moving Services",
  description:
    "Contact Sofoservis for affordable and professional moving services in Bratislava and throughout Slovakia. Get a free quote today!",
  keywords:
    "contact sofoservis, moving bratislava contact, moving services contact, moving quote, contact moving company",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/contact",
    languages: {
      sk: "https://www.sofoservis.sk/kontakt",
      en: "https://www.sofoservis.sk/en/contact",
      "x-default": "https://www.sofoservis.sk/kontakt",
    },
  },
  openGraph: {
    title: "Contact Us | Sofoservis - Professional Moving Services",
    description:
      "Contact Sofoservis for a free moving quote. Fast, reliable, and professional!",
    url: "https://www.sofoservis.sk/en/contact",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPageEN() {
  const faqData = {
    title: "Frequently Asked Questions About Our Services",
    items: [
      {
        question: "What is the process for ordering your services?",
        answer:
          "Just fill in the contact form, call us, or send an email. We will arrange a date, scope of work, and prepare a non-binding quote — for moving, clearance, or furniture assembly.",
      },
      {
        question: "How is the price for your services calculated?",
        answer:
          "The price depends on the type of service, volume of work, distance, and other factors. After a short consultation we will prepare an exact quote free of charge — with no obligation.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend 7–14 days in advance. In urgent cases we can react within 24–48 hours for moving, clearance, and assembly.",
      },
      {
        question: "What is included in clearance services and how do you handle waste?",
        answer:
          "We clear apartments, houses, basements, garages, and properties. Waste is sorted and taken to collection yards or recycling facilities — in line with the law.",
      },
      {
        question: "What types of assembly do you carry out?",
        answer:
          "We assemble furniture of all brands, kitchen units, and carry out minor construction work. We work fast and according to your needs.",
      },
      {
        question: "Do you provide services on weekends?",
        answer:
          "Yes, we work 6 days a week including Saturday, with no extra charge. We adapt to your schedule.",
      },
    ],
  };

  return (
    <main>
      {/* Preload mascot SVG for faster LCP on contact page (split by viewport) */}
      <link
        rel="preload"
        href="/images/mascot/mascot-on-phone-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 767px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-on-phone.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 768px)"
      />
      {/* Contact Header Section */}
      <ContactHeader lang="en" />

      {/* Contact Information Section */}
      <ContactInfo />

      {/* Contact Form Section */}
      <section className="pt-6 md:pt-10 pb-10 md:pb-14">
        <Container>
          <div className="md:hidden bg-accent-500/10 rounded-xl p-5 flex items-center gap-4 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent-500 flex-shrink-0">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <p className="text-primary-800 text-lg">
              <span className="font-bold">Free consultation:</span>{" "}
              Call us or fill in the contact form below for a quick response.
            </p>
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Write to Us
            </h2>
            <p className="text-xl text-primary-600/90 max-w-2xl mx-auto">
              Fill out the form below and we will contact you within 24
              hours
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6 md:p-8 max-w-4xl mx-auto transform transition-all duration-300 hover:shadow-2xl">
            <QuickContactForm variant="white" lang="en" />
          </div>
        </Container>
      </section>

      {/* Reviews Showcase */}
      <ReviewsShowcase variant="full" title="What our clients say about us" />

      {/* FAQ Section */}
      <FAQ
        title={faqData.title}
        items={faqData.items}
        subtitle="Found the answer to your question? If not, do not hesitate to contact us."
      />

      {/* CTA Section */}
      <section className="bg-white">
        <CTA
          title="Need help?"
          description="Our experts are ready to help you with all your needs. Contact us today for a free quote."
          buttonText="Get a free quote"
          buttonLink="/en/contact"
        />
      </section>
    </main>
  );
}
