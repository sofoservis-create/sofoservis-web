import React from "react";
import TextField from "./fields/TextField";
import { PageContent } from "./types";

interface FAQEditorProps {
  faq: PageContent["faq"];
  onChange: (faq: PageContent["faq"]) => void;
}

export default function FAQEditor({ faq, onChange }: FAQEditorProps) {
  const updateTitle = (value: string) => {
    onChange({
      ...faq,
      title: value,
    });
  };

  const updateFAQItem = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const updatedItems = [...faq.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    onChange({
      ...faq,
      items: updatedItems,
    });
  };

  const addFAQItem = () => {
    onChange({
      ...faq,
      items: [
        ...faq.items,
        {
          question: "New Question",
          answer: "New Answer",
        },
      ],
    });
  };

  const removeFAQItem = (index: number) => {
    const updatedItems = [...faq.items];
    updatedItems.splice(index, 1);

    onChange({
      ...faq,
      items: updatedItems,
    });
  };

  const moveFAQItem = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === faq.items.length - 1)
    ) {
      return; // Can't move further
    }

    const updatedItems = [...faq.items];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    // Swap items
    [updatedItems[index], updatedItems[targetIndex]] = [
      updatedItems[targetIndex],
      updatedItems[index],
    ];

    onChange({
      ...faq,
      items: updatedItems,
    });
  };

  return (
    <div className="space-y-6">
      <TextField
        label="FAQ Section Title"
        value={faq.title}
        onChange={updateTitle}
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">FAQ Items</h3>
          <button
            type="button"
            onClick={addFAQItem}
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
            Add FAQ
          </button>
        </div>

        {faq.items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 bg-white relative"
          >
            <div className="absolute right-2 top-2 flex space-x-1">
              <button
                type="button"
                onClick={() => moveFAQItem(index, "up")}
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
                onClick={() => moveFAQItem(index, "down")}
                disabled={index === faq.items.length - 1}
                className={`p-1 rounded ${
                  index === faq.items.length - 1
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
                onClick={() => removeFAQItem(index)}
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

            <div className="space-y-3 pt-2">
              <TextField
                label={`Question ${index + 1}`}
                value={item.question}
                onChange={(value) => updateFAQItem(index, "question", value)}
              />
              <TextField
                label="Answer"
                value={item.answer}
                onChange={(value) => updateFAQItem(index, "answer", value)}
                multiline
                rows={3}
              />
            </div>
          </div>
        ))}

        {faq.items.length === 0 && (
          <div className="text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">
              No FAQ items yet. Add your first item above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
