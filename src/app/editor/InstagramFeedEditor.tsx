// src/app/editor/InstagramFeedEditor.tsx
import React from "react";
import TextField from "./fields/TextField";
import ImageField from "./fields/ImageField";
import { PageContent } from "./types";

interface InstagramFeedEditorProps {
  instagramFeed: PageContent["instagramFeed"];
  onChange: (instagramFeed: PageContent["instagramFeed"]) => void;
}

export default function InstagramFeedEditor({
  instagramFeed,
  onChange,
}: InstagramFeedEditorProps) {
  const updateField = (
    field: keyof PageContent["instagramFeed"],
    value: string
  ) => {
    onChange({
      ...instagramFeed,
      [field]: value,
    });
  };

  const updateImage = (
    index: number,
    field: keyof PageContent["instagramFeed"]["images"][number],
    value: string
  ) => {
    const updatedImages = [...(instagramFeed.images || [])];
    if (!updatedImages[index]) {
      updatedImages[index] = { url: "", alt: "", link: "" };
    }
    updatedImages[index] = {
      ...updatedImages[index],
      [field]: value,
    };

    onChange({
      ...instagramFeed,
      images: updatedImages,
    });
  };

  const addImage = () => {
    const updatedImages = [...(instagramFeed.images || [])];
    updatedImages.push({ url: "/images/ig1.webp", alt: "New image", link: "" });

    onChange({
      ...instagramFeed,
      images: updatedImages,
    });
  };

  const removeImage = (index: number) => {
    const updatedImages = [...(instagramFeed.images || [])];
    updatedImages.splice(index, 1);

    onChange({
      ...instagramFeed,
      images: updatedImages,
    });
  };

  return (
    <div className="space-y-6">
      <TextField
        label="Title"
        value={instagramFeed.title || ""}
        onChange={(value) => updateField("title", value)}
      />
      <TextField
        label="Instagram Username"
        value={instagramFeed.username || ""}
        onChange={(value) => updateField("username", value)}
      />
      <TextField
        label="Instagram Link"
        value={instagramFeed.link || ""}
        onChange={(value) => updateField("link", value)}
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">
            Instagram Images
          </h3>
          <button
            type="button"
            onClick={addImage}
            className="px-3 py-1 bg-accent-500 text-primary-900 rounded hover:bg-accent-600 transition-colors text-sm font-medium flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Image
          </button>
        </div>

        {(instagramFeed.images || []).map((image, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 bg-white relative"
          >
            <div className="absolute right-2 top-2">
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="p-1 text-red-500 rounded hover:bg-red-50"
                title="Remove image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ImageField
                  label="Image URL"
                  value={image.url}
                  onChange={(value) => updateImage(index, "url", value)}
                  previewWidth={150}
                  previewHeight={150}
                />
              </div>
              <div className="space-y-4">
                <TextField
                  label="Alt Text"
                  value={image.alt}
                  onChange={(value) => updateImage(index, "alt", value)}
                />
                <TextField
                  label="Link (optional)"
                  value={image.link || ""}
                  onChange={(value) => updateImage(index, "link", value)}
                />
              </div>
            </div>
          </div>
        ))}

        {!(instagramFeed.images || []).length && (
          <div className="text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">
              No images yet. Add your first image above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
