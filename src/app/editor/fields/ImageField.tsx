import React, { useState } from "react";
import Image from "next/image";
import { ImageFieldEditorProps } from "../types";

export default function ImageField({
  label,
  value,
  onChange,
  previewWidth = 100,
  previewHeight = 100,
}: ImageFieldEditorProps) {
  const [previewError, setPreviewError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setPreviewError(false);
  };

  // List of available images for quick selection
  const availableImages = [
    "/images/sofoservis-zamestnanci-hero.avif",
    "/images/sofo-bratislava-stahovanie.avif",
    "/images/stahovanie-gauc.avif",
    "/images/404.webp",
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <div className="flex flex-col space-y-2">
        <input
          type="text"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-500 focus:border-accent-500"
          value={value}
          onChange={handleChange}
          placeholder="/path/to/image.jpg"
        />

        <div className="text-xs text-gray-500 mb-2">
          Enter image path or select from available images below
        </div>

        {/* Quick select buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {availableImages.map((img) => (
            <button
              key={img}
              onClick={() => {
                onChange(img);
                setPreviewError(false);
              }}
              className={`px-2 py-1 text-xs rounded border ${
                value === img
                  ? "bg-accent-500 text-primary-900 border-accent-600"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
              type="button"
            >
              {img.split("/").pop()}
            </button>
          ))}
        </div>

        {/* Image preview */}
        {value && !previewError ? (
          <div className="mt-2 border rounded p-2 bg-gray-50">
            <p className="text-xs text-gray-500 mb-1">Preview:</p>
            <div
              className="relative"
              style={{ height: previewHeight, width: previewWidth }}
            >
              <Image
                src={value}
                alt="Preview"
                fill
                className="object-cover rounded"
                onError={() => setPreviewError(true)}
              />
            </div>
          </div>
        ) : value && previewError ? (
          <div className="mt-2 text-red-500 text-sm">
            Image could not be loaded. Please check the path.
          </div>
        ) : null}
      </div>
    </div>
  );
}
