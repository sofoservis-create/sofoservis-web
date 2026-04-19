import React, { useState } from "react";
import { SectionEditorProps } from "./types";

export default function SectionEditor({
  title,
  isOpen = false,
  children,
}: SectionEditorProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <svg
          className={`h-5 w-5 text-gray-500 transform transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-4 py-3 border-t border-gray-200">{children}</div>
      )}
    </div>
  );
}
