// src/components/sections/HeroFormWrapper.tsx
"use client";

import React from "react";
import QuickContactForm from "@/components/forms/QuickContactForm";

export default function HeroFormWrapper() {
  return (
    <div className="w-full">
      <QuickContactForm variant="primary" />
    </div>
  );
}
