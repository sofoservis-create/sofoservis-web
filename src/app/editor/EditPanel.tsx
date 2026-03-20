import React from "react";
import { EditPanelProps, PageContent } from "./types";
import TextField from "./fields/TextField";
import ImageField from "./fields/ImageField";
import SectionEditor from "./SectionEditor";
import CTAEditor from "./CTAEditor";
import FAQEditor from "./FAQEditor";
import InstagramFeedEditor from "./InstagramFeedEditor";
import ReviewsEditor from "./ReviewsEditor";
import ClientsEditor from "./ClientsEditor";

export default function EditPanel({
  content,
  onChange,
  activeSection,
}: EditPanelProps & { activeSection: string | null }) {
  const updateHero = (field: string, value: string) => {
    onChange({
      ...content,
      hero: {
        ...content.hero,
        [field]: value,
      },
      lastUpdated: new Date().toISOString(),
    });
  };

  const updateFeatures = (field: string, value: string) => {
    onChange({
      ...content,
      features: {
        ...content.features,
        [field]: value,
      },
      lastUpdated: new Date().toISOString(),
    });
  };

  const updateFAQ = (updatedFAQ: PageContent["faq"]) => {
    onChange({
      ...content,
      faq: updatedFAQ,
      lastUpdated: new Date().toISOString(),
    });
  };

  // Update function for Reviews section
  const updateReviews = (updatedReviews: PageContent["reviews"]) => {
    onChange({
      ...content,
      reviews: updatedReviews,
      lastUpdated: new Date().toISOString(),
    });
  };

  // Update function for InstagramFeed section
  const updateInstagramFeed = (
    updatedInstagramFeed: PageContent["instagramFeed"]
  ) => {
    onChange({
      ...content,
      instagramFeed: updatedInstagramFeed,
      lastUpdated: new Date().toISOString(),
    });
  };

  // Update function for CTA section
  const updateCTA = (updatedCTA: PageContent["cta"]) => {
    onChange({
      ...content,
      cta: updatedCTA,
      lastUpdated: new Date().toISOString(),
    });
  };

  if (!activeSection) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center p-6 bg-gray-50 rounded-lg max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-accent-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
          <h3 className="text-xl font-bold text-primary-900 mb-2">
            Select a section to edit
          </h3>
          <p className="text-gray-600 mb-4">
            Click on the edit button for any section in the preview to start
            editing its content.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">
          Editing{" "}
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}{" "}
          Section
        </h2>
        <p className="text-gray-600">
          Make changes to this section&apos;s content. All changes are
          automatically saved.
        </p>
        {content.lastUpdated && (
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date(content.lastUpdated).toLocaleString()}
          </p>
        )}
      </div>

      {/* Hero Editor */}
      {activeSection === "hero" && (
        <SectionEditor title="Hero Section" isOpen={true}>
          <div className="space-y-4">
            <TextField
              label="Title"
              value={content.hero.title}
              onChange={(value) => updateHero("title", value)}
            />
            <TextField
              label="Description"
              value={content.hero.description}
              onChange={(value) => updateHero("description", value)}
              multiline
              rows={3}
            />
            <ImageField
              label="Background Image"
              value={content.hero.backgroundImage}
              onChange={(value) => updateHero("backgroundImage", value)}
            />
            <TextField
              label="Form Title"
              value={content.hero.formTitle}
              onChange={(value) => updateHero("formTitle", value)}
            />
            <TextField
              label="Form Subtitle"
              value={content.hero.formSubtitle}
              onChange={(value) => updateHero("formSubtitle", value)}
            />
          </div>
        </SectionEditor>
      )}

      {/* Clients Editor */}
      {activeSection === "clients" && (
        <SectionEditor title="Clients Section" isOpen={true}>
          <ClientsEditor
            clients={content.clients}
            onChange={(updatedClients) => {
              onChange({
                ...content,
                clients: updatedClients,
                lastUpdated: new Date().toISOString(),
              });
            }}
          />
        </SectionEditor>
      )}

      {/* Reviews Editor */}
      {activeSection === "reviews" && (
        <SectionEditor title="Video Reviews Section" isOpen={true}>
          <ReviewsEditor
            reviews={
              content.reviews || {
                title: "Why customers trust us",
                videoReviews: [],
              }
            }
            onChange={updateReviews}
          />
        </SectionEditor>
      )}

      {/* Reviews Showcase Editor */}
      {activeSection === "reviewsShowcase" && (
        <SectionEditor title="Reviews Showcase Section" isOpen={true}>
          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-accent-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <h3 className="text-xl font-bold text-primary-900 mb-2">
              Reviews Showcase
            </h3>
            <p className="text-gray-600 mb-6">
              This section displays customer review widgets from Google and
              Facebook.
            </p>
            <p className="text-gray-500 text-sm">
              Reviews are fetched live from the Google Places API via
              src/components/widgets/ReviewsShowcase.tsx
            </p>
          </div>
        </SectionEditor>
      )}

      {/* Features Editor */}
      {activeSection === "features" && (
        <SectionEditor title="Features Section" isOpen={true}>
          <div className="space-y-4">
            <TextField
              label="Title"
              value={content.features.title}
              onChange={(value) => updateFeatures("title", value)}
            />
            <TextField
              label="Description"
              value={content.features.description}
              onChange={(value) => updateFeatures("description", value)}
              multiline
              rows={3}
            />
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">
                To update individual feature items and icons, modify the
                features array in src/components/sections/Features.tsx
              </p>
            </div>
          </div>
        </SectionEditor>
      )}

      {/* Instagram Feed Editor */}
      {activeSection === "instagramFeed" && (
        <SectionEditor title="Instagram Feed Section" isOpen={true}>
          <InstagramFeedEditor
            instagramFeed={
              content.instagramFeed || {
                title: "Follow us on Instagram",
                username: "sofoservis",
                link: "https://instagram.com/sofoservis",
                images: [],
              }
            }
            onChange={updateInstagramFeed}
          />
        </SectionEditor>
      )}

      {/* Google Reviews Editor */}
      {activeSection === "googleReviews" && (
        <SectionEditor title="Google Reviews Section" isOpen={true}>
          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-accent-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <h3 className="text-xl font-bold text-primary-900 mb-2">
              Google Reviews Widget
            </h3>
            <p className="text-gray-600 mb-6">
              This section displays your Google Business reviews fetched live
              from the Google Places API.
            </p>
            <p className="text-gray-500 text-sm">
              Reviews are managed via src/components/widgets/GoogleReviews.tsx
            </p>
          </div>
        </SectionEditor>
      )}

      {/* FAQ Editor */}
      {activeSection === "faq" && (
        <SectionEditor title="FAQ Section" isOpen={true}>
          <FAQEditor faq={content.faq} onChange={updateFAQ} />
        </SectionEditor>
      )}

      {/* CTA Editor */}
      {activeSection === "cta" && (
        <SectionEditor title="CTA Section" isOpen={true}>
          <CTAEditor
            cta={
              content.cta || {
                title: "Need help?",
                description: "Contact us for a free quote.",
                buttonText: "Contact us",
                buttonLink: "/contact",
                image: "/images/sofo_bratislava_stahovanie.jpg",
              }
            }
            onChange={updateCTA}
          />
        </SectionEditor>
      )}
    </div>
  );
}
