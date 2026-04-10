import React from "react";
import { PagePreviewProps } from "./types";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ReviewsShowcase from "@/components/widgets/ReviewsShowcase";

export default function PagePreview({
  content,
  onEditSection,
}: PagePreviewProps & { onEditSection: (section: string) => void }) {
  // Function to create edit button
  const EditButton = ({ section }: { section: string }) => (
    <div className="absolute top-4 right-4 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        onClick={() => onEditSection(section)}
        className="bg-accent-500 hover:bg-accent-600 text-primary-900 p-2 rounded-full shadow-lg transition-all"
        title={`Edit ${
          section.charAt(0).toUpperCase() + section.slice(1)
        } Section`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </button>
    </div>
  );

  return (
    <div className="preview-container">
      <div className="bg-primary-900 py-4 px-6 sticky top-0 z-50 mb-4 shadow-md">
        <h2 className="text-white text-xl font-bold">Page Preview</h2>
        <p className="text-white/70 text-sm">
          Hover over any section and click the edit button to modify its content
        </p>
      </div>

      <div className="preview-scale-wrapper">
        {/* Hero Section Preview */}
        <div className="preview-section relative group">
          <EditButton section="hero" />
          <Hero
            title={content.hero.title}
            description={content.hero.description}
            backgroundImage={content.hero.backgroundImage}
            formTitle={content.hero.formTitle}
            formSubtitle={content.hero.formSubtitle}
          />
        </div>

        {/* Clients Section Preview */}
        {/* Clients Section Preview */}
        {/* Clients Section Preview */}
        <div className="preview-section relative group">
          <EditButton section="clients" />
          <Clients
            logos={content.clients?.logos}
            title={content.clients?.title}
          />
        </div>

        {/* Reviews Showcase Section */}
        <div className="preview-section relative group py-8">
          <EditButton section="reviewsShowcase" />
          <ReviewsShowcase />
        </div>

        {/* Reviews Section Preview */}
        <div className="preview-section relative group py-8">
          <EditButton section="reviews" />
          <Reviews />
        </div>

        {/* Features Section Preview */}
        <div className="preview-section py-8 relative group">
          <EditButton section="features" />
          <Features
            title={content.features.title}
            description={content.features.description}
          />
        </div>

        {/* Instagram Feed Section */}
        <div className="preview-section relative group py-8">
          <EditButton section="instagramFeed" />
          <InstagramFeed />
        </div>

        {/* Google Reviews Section */}
        <div className="preview-section relative group py-8">
          <EditButton section="googleReviews" />
          <GoogleReviews />
        </div>

        {/* FAQ Section Preview */}
        <div className="preview-section py-8 relative group">
          <EditButton section="faq" />
          <FAQ title={content.faq.title} items={content.faq.items} />
        </div>

        {/* CTA Section Preview */}
        <div className="preview-section py-8 pb-28 relative group">
          <EditButton section="cta" />
          <CTA />
        </div>
      </div>

      {/* Custom styles for preview */}
      <style jsx>{`
        .preview-container {
          min-height: 100%;
          background: #f9fafb;
        }
        .preview-scale-wrapper {
          transform-origin: top center;
          transition: transform 0.3s ease;
        }
        .preview-section {
          position: relative;
        }
        .preview-section:nth-child(odd) {
          background-color: #ffffff;
        }
        .preview-section:nth-child(even) {
          background-color: #f9fafb;
        }
      `}</style>
    </div>
  );
}
