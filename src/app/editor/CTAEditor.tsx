// src/app/editor/CTAEditor.tsx
import React from "react";
import TextField from "./fields/TextField";
import ImageField from "./fields/ImageField";
import { PageContent } from "./types";

interface CTAEditorProps {
  cta: PageContent["cta"];
  onChange: (cta: PageContent["cta"]) => void;
}

// Default values that satisfy the required structure
const defaultCTA: PageContent["cta"] = {
  title: "",
  description: "",
  buttonText: "",
  buttonLink: "",
  image: "",
};

export default function CTAEditor({
  cta = defaultCTA,
  onChange,
}: CTAEditorProps) {
  // Make sure cta is initialized to at least an empty object with the right structure
  const ctaData = cta || defaultCTA;

  const updateField = (field: keyof PageContent["cta"], value: string) => {
    onChange({
      ...ctaData,
      [field]: value,
    });
  };

  return (
    <div className="space-y-4">
      <TextField
        label="Title"
        value={ctaData.title || ""}
        onChange={(value) => updateField("title", value)}
      />
      <TextField
        label="Description"
        value={ctaData.description || ""}
        onChange={(value) => updateField("description", value)}
        multiline
        rows={3}
      />
      <TextField
        label="Button Text"
        value={ctaData.buttonText || ""}
        onChange={(value) => updateField("buttonText", value)}
      />
      <TextField
        label="Button Link"
        value={ctaData.buttonLink || ""}
        onChange={(value) => updateField("buttonLink", value)}
      />
      <ImageField
        label="Image"
        value={ctaData.image || ""}
        onChange={(value) => updateField("image", value)}
        previewWidth={200}
        previewHeight={200}
      />
    </div>
  );
}
