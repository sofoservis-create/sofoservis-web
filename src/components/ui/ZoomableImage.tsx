"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

export default function ZoomableImage({ src, alt, width, height, className, sizes, priority, style }: Props) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-zoom-in w-full h-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
          priority={priority}
          style={style}
        />
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Zavrieť"
            className="absolute top-4 right-5 text-white/70 hover:text-white text-5xl leading-none font-light transition-colors"
          >
            ×
          </button>
          <div
            className="relative max-w-5xl max-h-[92vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[92vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-xs">
            ESC alebo kliknutie mimo zatvoriť
          </p>
        </div>
      )}
    </>
  );
}
