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
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPageEN() {
  const faqData = {
    title: "Frequently Asked Questions About Our Services",
    items: [
      {
        question: "What is the process for ordering moving services?",
        answer:
          "To order our services, simply fill out the contact form, call us, or send an email. We will then arrange a date and scope of the move, prepare a quote, and finalize all details.",
      },
      {
        question: "How far in advance should I book a move?",
        answer:
          "We recommend booking at least 7-14 days in advance to ensure availability on your preferred date. However, in urgent cases, we can arrange a move within 24-48 hours.",
      },
      {
        question: "Do you provide services on weekends?",
        answer:
          "Yes, we provide our services 6 days a week including Saturday, with no extra charge. We adapt to your schedule.",
      },
      {
        question: "How is the price for moving services calculated?",
        answer:
          "We determine the price based on the volume of items, distance, floor level, elevator availability, and other factors. For an accurate estimate, we prepare a non-binding quote after you fill out the form or speak with us by phone.",
      },
      {
        question: "Do you offer packing services before the move?",
        answer:
          "Yes, we offer comprehensive services including professional packing. Our workers know how to properly pack and protect all your belongings including fragile items, electronics, and furniture.",
      },
    ],
  };

  return (
    <main>
      <ContactHeader lang="en" />

      <ContactInfo />

      <section>
        <Container>
          <div className="text-center mb-12">
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

      <section className="bg-white">
        <ReviewsShowcase
          variant="full"
          title="What our clients say about us"
        />
      </section>

      <section>
        <FAQ
          title={faqData.title}
          items={faqData.items}
          subtitle="Found the answer to your question? If not, do not hesitate to contact us."
          callToActionText="Still have questions? Get in touch"
        />
      </section>

      <section className="py-16 bg-white">
        <CTA
          title="Need help with moving?"
          description="Our experts are ready to help you with all your moving needs. Contact us today for a free quote."
          buttonText="Get a free quote"
          buttonLink="/en/contact"
        />
      </section>
    </main>
  );
}
