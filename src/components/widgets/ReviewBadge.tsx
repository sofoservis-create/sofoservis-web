"use client";
import React from "react";

interface ReviewBadgeProps {
  platform: "google" | "facebook";
  rating: number;
  reviewCount: string;
}

function GoogleLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#4285F4"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.0 24.0 0 0 0 0 21.56l7.98-6.19z"
      />
      <path
        fill="#EA4335"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function FacebookLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#1877F2"
        d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
      />
      <path
        fill="#FFFFFF"
        d="M33.342 30.938L34.406 24H27.75v-4.5c0-1.9.93-3.75 3.911-3.75h3.026V9.844s-2.747-.469-5.372-.469c-5.482 0-9.065 3.323-9.065 9.337V24h-6.094v6.938h6.094v16.77a24.2 24.2 0 0 0 7.5 0v-16.77h5.592z"
      />
    </svg>
  );
}

function StarIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#F4B400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function ReviewBadge({
  platform,
  rating,
  reviewCount,
}: ReviewBadgeProps) {
  const platformLabel = platform === "google" ? "Google" : "Facebook";

  return (
    <div
      className="flex flex-col items-center bg-white rounded-lg shadow-md border border-gray-100"
      style={{ padding: "11.5px 18.4px", minWidth: "161px" }}
    >
      <div className="flex items-center gap-1.5 mb-1">
        {platform === "google" ? (
          <GoogleLogo size={23} />
        ) : (
          <FacebookLogo size={23} />
        )}
        <span className="text-[16.1px] font-semibold text-gray-800">
          {platformLabel}
        </span>
      </div>
      <div className="flex items-center gap-1 mb-0.5 text-[25px]">
        <span className="text-[16.1px] font-bold text-gray-900">
          {rating.toFixed(1)}
        </span>
        <div className="flex items-center" style={{ gap: "1px" }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} size={16} />
          ))}
        </div>
      </div>
      <span className="text-[12.5px] text-gray-500 whitespace-nowrap">
        {reviewCount}
      </span>
    </div>
  );
}
