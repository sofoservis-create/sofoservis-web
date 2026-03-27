// src/app/editor/ClientsEditor.tsx
import React from "react";
import TextField from "./fields/TextField";
import ImageField from "./fields/ImageField";
import { PageContent } from "./types";

// Import default logos from Clients component
const DEFAULT_LOGOS = [
  { src: "/images/sofoClient1.webp", alt: "Google", height: 32 },
  {
    src: "/images/BratislavaRuzinov.webp",
    alt: "Bratislava Ružinov",
    height: 64,
  },
  { src: "/images/sofoClient3.webp", alt: "Microsoft", height: 32 },
  { src: "/images/sofoClient4.webp", alt: "Amazon", height: 32 },
  { src: "/images/homola.webp", alt: "Homola Bratislava", height: 64 },
  { src: "/images/sofoClient6.svg", alt: "Partner", height: 48 },
  { src: "/images/tedx.webp", alt: "TedX", height: 48 },
  { src: "/images/sofoClient8.webp", alt: "Partner", height: 48 },
  { src: "/images/sofoClient9.webp", alt: "Partner", height: 48 },
];

interface ClientsEditorProps {
  clients: PageContent["clients"];
  onChange: (clients: PageContent["clients"]) => void;
}

export default function ClientsEditor({
  clients = { title: "Our Trusted Clients", logos: [] },
  onChange,
}: ClientsEditorProps) {
  // Initialize with default logos if none exist yet
  const initializedClients = {
    ...clients,
    title: clients.title || "Our Trusted Clients",
    logos: clients.logos?.length > 0 ? clients.logos : DEFAULT_LOGOS,
  };

  const updateTitle = (value: string) => {
    onChange({
      ...initializedClients,
      title: value,
    });
  };

  const updateLogo = (
    index: number,
    field: keyof PageContent["clients"]["logos"][number],
    value: string | number
  ) => {
    const updatedLogos = [...initializedClients.logos];
    updatedLogos[index] = {
      ...updatedLogos[index],
      [field]: field === "height" ? Number(value) : value,
    };

    onChange({
      ...initializedClients,
      logos: updatedLogos,
    });
  };

  const addLogo = () => {
    onChange({
      ...initializedClients,
      logos: [
        ...initializedClients.logos,
        { src: "/images/sofoClient1.png", alt: "New Client", height: 48 },
      ],
    });
  };

  const removeLogo = (index: number) => {
    const updatedLogos = [...initializedClients.logos];
    updatedLogos.splice(index, 1);

    onChange({
      ...initializedClients,
      logos: updatedLogos,
    });
  };

  const moveLogo = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === initializedClients.logos.length - 1)
    ) {
      return;
    }

    const updatedLogos = [...initializedClients.logos];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    // Swap items
    [updatedLogos[index], updatedLogos[targetIndex]] = [
      updatedLogos[targetIndex],
      updatedLogos[index],
    ];

    onChange({
      ...initializedClients,
      logos: updatedLogos,
    });
  };

  return (
    <div className="space-y-6">
      <TextField
        label="Section Title"
        value={initializedClients.title || ""}
        onChange={updateTitle}
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Client Logos</h3>
          <button
            type="button"
            onClick={addLogo}
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
            Add Logo
          </button>
        </div>

        {initializedClients.logos.map((logo, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 bg-white relative"
          >
            <div className="absolute right-2 top-2 flex space-x-1">
              <button
                type="button"
                onClick={() => moveLogo(index, "up")}
                disabled={index === 0}
                className={`p-1 rounded ${
                  index === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
                title="Move up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => moveLogo(index, "down")}
                disabled={index === initializedClients.logos.length - 1}
                className={`p-1 rounded ${
                  index === initializedClients.logos.length - 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
                title="Move down"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => removeLogo(index)}
                className="p-1 text-red-500 rounded hover:bg-red-50"
                title="Remove item"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <ImageField
                  label="Logo Image"
                  value={logo.src}
                  onChange={(value) => updateLogo(index, "src", value)}
                  previewWidth={120}
                  previewHeight={60}
                />
              </div>
              <div>
                <TextField
                  label="Alt Text"
                  value={logo.alt}
                  onChange={(value) => updateLogo(index, "alt", value)}
                />
              </div>
              <div>
                <TextField
                  label="Height (px)"
                  value={logo.height.toString()}
                  onChange={(value) => updateLogo(index, "height", value)}
                />
              </div>
            </div>
          </div>
        ))}

        {initializedClients.logos.length === 0 && (
          <div className="text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">
              No client logos yet. Add your first logo above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
