// src/app/editor/ReviewsEditor.tsx
import React from "react";
import TextField from "./fields/TextField";
import ImageField from "./fields/ImageField";
import { PageContent } from "./types";

interface VideoReview {
  id: string;
  thumbnail: string;
  videoUrl: string;
}

interface ReviewsEditorProps {
  reviews: {
    title: string;
    videoReviews: VideoReview[];
  };
  onChange: (reviews: PageContent["reviews"]) => void;
}

export default function ReviewsEditor({
  reviews,
  onChange,
}: ReviewsEditorProps) {
  const updateTitle = (value: string) => {
    onChange({
      ...reviews,
      title: value,
    });
  };

  const updateVideoReview = (
    index: number,
    field: keyof VideoReview,
    value: string
  ) => {
    const updatedReviews = [...(reviews.videoReviews || [])];
    if (!updatedReviews[index]) {
      updatedReviews[index] = {
        id: `video-${Date.now()}`,
        thumbnail: "",
        videoUrl: "",
      };
    }
    updatedReviews[index] = {
      ...updatedReviews[index],
      [field]: value,
    };

    onChange({
      ...reviews,
      videoReviews: updatedReviews,
    });
  };

  const addVideoReview = () => {
    const updatedReviews = [...(reviews.videoReviews || [])];
    updatedReviews.push({
      id: `video-${Date.now()}`,
      thumbnail: "/images/video1.webp",
      videoUrl: "https://www.youtube.com/embed/cNtLIAon9HM?autoplay=1",
    });

    onChange({
      ...reviews,
      videoReviews: updatedReviews,
    });
  };

  const removeVideoReview = (index: number) => {
    const updatedReviews = [...(reviews.videoReviews || [])];
    updatedReviews.splice(index, 1);

    onChange({
      ...reviews,
      videoReviews: updatedReviews,
    });
  };

  return (
    <div className="space-y-6">
      <TextField
        label="Section Title"
        value={reviews.title || ""}
        onChange={updateTitle}
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Video Reviews</h3>
          <button
            type="button"
            onClick={addVideoReview}
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
            Add Video Review
          </button>
        </div>

        {(reviews.videoReviews || []).map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 bg-white relative"
          >
            <div className="absolute right-2 top-2">
              <button
                type="button"
                onClick={() => removeVideoReview(index)}
                className="p-1 text-red-500 rounded hover:bg-red-50"
                title="Remove video"
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
                  label="Thumbnail"
                  value={review.thumbnail}
                  onChange={(value) =>
                    updateVideoReview(index, "thumbnail", value)
                  }
                  previewWidth={150}
                  previewHeight={150}
                />
              </div>
              <div className="space-y-4">
                <TextField
                  label="Video URL (YouTube Embed)"
                  value={review.videoUrl}
                  onChange={(value) =>
                    updateVideoReview(index, "videoUrl", value)
                  }
                />
                <p className="text-xs text-gray-500">
                  Format: https://www.youtube.com/embed/VIDEO_ID?autoplay=1
                </p>
              </div>
            </div>
          </div>
        ))}

        {!(reviews.videoReviews || []).length && (
          <div className="text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">
              No video reviews yet. Add your first review above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
