"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  closeLabel?: string;
}

export default function Dialog({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  closeLabel,
}: DialogProps) {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") || false;
  const resolvedCloseLabel = closeLabel || (isEnglish ? "Close" : "Zavrieť");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Lock body scroll when dialog is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Focus trap inside the dialog
  useEffect(() => {
    if (!isOpen) return;

    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    // Set focus to the dialog
    dialogElement.focus();

    const focusableElements = dialogElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    dialogElement.addEventListener("keydown", handleTabKey);

    return () => {
      dialogElement.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  // Use client-side rendering for the portal
  if (typeof window === "undefined" || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div className="flex min-h-full items-center justify-center px-4 py-8 text-center">
        <div
          ref={dialogRef}
          className={`w-full ${className || 'max-w-md'} max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-6rem)] transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          tabIndex={-1}
        >
          <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <h3
              id="dialog-title"
              className="text-lg font-bold text-primary-900"
            >
              {title}
            </h3>
            <button
              type="button"
              className="p-1.5 rounded-full text-primary-600 hover:text-primary-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
              onClick={onClose}
              aria-label={resolvedCloseLabel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 min-h-0">
            {children}
          </div>

          <div className="mt-6 flex justify-end flex-shrink-0">
            <button
              type="button"
              className="bg-accent-500 hover:bg-accent-400 text-primary-900 font-medium px-4 py-2 rounded-lg transition-colors"
              onClick={onClose}
            >
              {resolvedCloseLabel}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
