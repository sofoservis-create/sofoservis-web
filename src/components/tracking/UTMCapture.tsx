"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { captureUTMParams } from "@/lib/utm";

export default function UTMCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    captureUTMParams();
  }, [searchParams]);

  return null;
}
