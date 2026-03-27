"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import EditPanel from "./EditPanel";
import PagePreview from "./PagePreview";
import initialPageContent from "./initialPageContent";
import { PageContent } from "./types";

export default function EditorPage() {
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // Try to load from localStorage first
    const savedContent = localStorage.getItem("page-editor-content");
    if (savedContent) {
      try {
        setPageContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Failed to parse saved content", e);
        setPageContent(initialPageContent);
      }
    } else {
      // Use initial content as fallback
      setPageContent(initialPageContent);
    }
  }, []);

  const handleContentChange = (newContent: PageContent) => {
    setPageContent(newContent);
    setIsSaved(false);
  };

  const handleEditSection = (section: string) => {
    setActiveSection(section);
  };

  const handleSave = () => {
    if (!pageContent) return;

    localStorage.setItem("page-editor-content", JSON.stringify(pageContent));
    setIsSaved(true);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleExport = () => {
    if (!pageContent) return;

    // Format the content into an actual TSX component
    const exportContent = `import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ReviewsShowcase from "@/components/widgets/ReviewsShowcase";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <Hero 
        title="${pageContent.hero.title}" 
        description="${pageContent.hero.description}"
        backgroundImage="${pageContent.hero.backgroundImage}"
        formTitle="${pageContent.hero.formTitle}"
        formSubtitle="${pageContent.hero.formSubtitle}"
      />

      {/* Clients section */}
      <div className="">
        <Clients />
      </div>

      {/* Reviews showcase section */}
      <div className="pt-8">
        <ReviewsShowcase />
      </div>

      {/* Reviews section */}
      <div className="pb-8">
        <Reviews />
      </div>

      {/* Features section */}
      <div >
        <Features 
          title="${pageContent.features.title}"
          description="${pageContent.features.description}"
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews />
      </div>

      {/* FAQ section */}
      <div >
        <FAQ
          title="${pageContent.faq.title}"
          items={[
            ${pageContent.faq.items
              .map(
                (item) => `{
              question: "${item.question}",
              answer: "${item.answer}"
            }`
              )
              .join(",\n            ")}
          ]}
        />
      </div>

      {/* CTA section */}
      <div className=" pb-28">
        <CTA />
      </div>
    </main>
  );
}
`;

    // Create a blob and download
    const blob = new Blob([exportContent], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page.tsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all changes to the default content?"
      )
    ) {
      setPageContent(initialPageContent);
      localStorage.removeItem("page-editor-content");
      setIsSaved(true);
    }
  };

  if (!pageContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">SofoServis Page Editor</h1>
          <div className="flex space-x-3">
            {activeSection && (
              <button
                onClick={() => setActiveSection(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              >
                Back to Preview
              </button>
            )}
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors"
            >
              Export TSX
            </button>
            <button
              onClick={handleSave}
              disabled={isSaved}
              className={`px-4 py-2 rounded transition-colors ${
                isSaved
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-accent-500 hover:bg-accent-600 text-primary-900"
              }`}
            >
              {isSaved ? "Saved" : "Save Changes"}
            </button>
            <Link
              href="/"
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Exit Editor
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Preview Panel */}
        <div
          className={`${
            activeSection ? "hidden md:block md:w-1/2" : "w-full"
          } h-full overflow-auto border-r border-gray-300`}
        >
          <PagePreview
            content={pageContent}
            onEditSection={handleEditSection}
          />
        </div>

        {/* Edit Panel */}
        <div
          className={`${
            activeSection ? "w-full md:w-1/2" : "hidden"
          } h-full overflow-auto bg-white p-6`}
        >
          <EditPanel
            content={pageContent}
            onChange={handleContentChange}
            activeSection={activeSection}
          />
        </div>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Changes saved successfully!
        </div>
      )}
    </div>
  );
}
