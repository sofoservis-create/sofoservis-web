"use client";

import { useEffect } from "react";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

// interface InstagramImage {
//   url: string;
//   alt: string;
//   link?: string;
// }

interface InstagramFeedProps {
  // images?: InstagramImage[];
  instagramUsername?: string;
  instagramLink?: string;
  title?: string;
}

export default function InstagramFeed({
  // images: externalImages,
  instagramUsername = "sofoservis",
  instagramLink = "https://instagram.com/sofoservis",
  title = "Sledujte nás na Instagrame",
}: InstagramFeedProps) {
  // // Default images if none provided
  // const defaultImages = [
  //   {
  //     url: "/images/ig1.webp",
  //     alt: "Sťahovací tím v akcii",
  //     link: `${instagramLink}/post1`,
  //   },
  //   {
  //     url: "/images/ig2.webp",
  //     alt: "Usmievajúci sa členovia tímu Sofo",
  //     link: `${instagramLink}/post2`,
  //   },
  //   {
  //     url: "/images/ig1.webp",
  //     alt: "Sťahovacie auto naložené nábytkom",
  //     link: `${instagramLink}/post3`,
  //   },
  //   {
  //     url: "/images/ig2.webp",
  //     alt: "Selfie člena tímu",
  //     link: `${instagramLink}/post4`,
  //   },
  //   {
  //     url: "/images/ig1.webp",
  //     alt: "Zákazník so zabalenými krabicami",
  //     link: `${instagramLink}/post5`,
  //   },
  //   {
  //     url: "/images/ig2.webp",
  //     alt: "Sťahovacia dodávka s logom",
  //     link: `${instagramLink}/post6`,
  //   },
  // ];

  // // Use external images if provided, otherwise use defaults
  // const images = externalImages || defaultImages;
  // const carouselRef = useRef<HTMLDivElement>(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // // Mouse/touch dragging for carousel
  // const handleMouseDown = (e: React.MouseEvent) => {
  //   if (!carouselRef.current) return;

  //   setIsDragging(true);
  //   setStartX(e.pageX - carouselRef.current.offsetLeft);
  //   setScrollLeft(carouselRef.current.scrollLeft);

  //   // Change cursor while dragging
  //   if (carouselRef.current) {
  //     carouselRef.current.style.cursor = "grabbing";
  //   }
  // };

  // const handleTouchStart = (e: React.TouchEvent) => {
  //   if (!carouselRef.current) return;

  //   setIsDragging(true);
  //   setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
  //   setScrollLeft(carouselRef.current.scrollLeft);
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   if (!isDragging || !carouselRef.current) return;

  //   e.preventDefault();
  //   const x = e.pageX - carouselRef.current.offsetLeft;
  //   const walk = (x - startX) * 2; // Scrolling speed multiplier
  //   carouselRef.current.scrollLeft = scrollLeft - walk;
  // };

  // const handleTouchMove = (e: React.TouchEvent) => {
  //   if (!isDragging || !carouselRef.current) return;

  //   const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
  //   const walk = (x - startX) * 2;
  //   carouselRef.current.scrollLeft = scrollLeft - walk;
  // };

  // const handleDragEnd = () => {
  //   setIsDragging(false);

  //   // Reset cursor
  //   if (carouselRef.current) {
  //     carouselRef.current.style.cursor = "grab";
  //   }
  // };

  // // Scroll functions
  // const handleScrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // const handleScrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  // // Initialize grab cursor on mount
  // useEffect(() => {
  //   if (carouselRef.current) {
  //     carouselRef.current.style.cursor = "grab";
  //   }
  // }, []);

  // Load Elfsight script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="pt-10 md:pt-[100px] bg-white" id="instagram-feed">
      <Container>
        {/* Centered header */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="bg-accent-500 rounded-full p-2 shadow-sm mb-4">
            <InstagramIcon className="w-6 h-6 text-primary-900" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-primary-900 mb-2">
            {title}
          </h2>
          <Link
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-500 hover:text-accent-600 font-medium text-lg flex items-center transition-colors"
          >
            <span>@{instagramUsername}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </div>

        {/* Elfsight Instagram Feed */}
        <div
          className="elfsight-app-39ae6fac-439f-495a-957a-44ffbc43b9ae"
          data-elfsight-app-lazy
        ></div>

        {/* Image carousel */}
        {/* <div className="relative">
          Navigation buttons - only on desktop
          <button
            onClick={handleScrollLeft}
            className="absolute hidden md:flex left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-accent-500 hover:text-accent-600 transition-all duration-200 hover:scale-110 focus:outline-none"
            aria-label="Predchádzajúce obrázky"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>

          Image grid/carousel
          <div
            ref={carouselRef}
            className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[23%] gap-4 overflow-x-auto hide-scrollbar  snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            {images.map((image, index) => (
              <Link
                key={index}
                href={image.link || instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-start aspect-square rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-1"
              >
                <div className="relative w-full h-full group">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-colors duration-300"
                    aria-hidden="true"
                  ></div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={handleScrollRight}
            className="absolute hidden md:flex right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-accent-500 hover:text-accent-600 transition-all duration-200 hover:scale-110 focus:outline-none"
            aria-label="Nasledujúce obrázky"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div> */}
      </Container>

      {/* <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
    </section>
  );
}

// Instagram icon component
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}
