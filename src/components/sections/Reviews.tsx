"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CallToAction from "@/components/elements/CallToAction";
import Container from "@/components/ui/Container";

interface ReviewsProps {
  showHeadline?: boolean;
  callToActionText?: string;
}

export default function Reviews({
  showHeadline = true,
  callToActionText = "Získajte cenovú ponuku",
}: ReviewsProps) {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const slidesRef = useRef<HTMLDivElement>(null);
  const desktopSlidesRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);

  // Reviews data - REMOVED autoplay=1 from URLs to prevent automatic double play
  const reviews = [
    {
      id: "video-6",
      thumbnail: "/images/video6.png",
      videoId: "1131871889",
    },
    {
      id: "video-8",
      thumbnail: "/images/video7.png",
      videoId: "1131872495",
    },
    {
      id: "video-1",
      thumbnail: "/images/video1.webp",
      videoId: "1088791961",
    },
    {
      id: "video-2",
      thumbnail: "/images/video2.webp",
      videoId: "1088790985",
    },
    {
      id: "video-3",
      thumbnail: "/images/video3.webp",
      videoId: "1088789973",
    },
    {
      id: "video-4",
      thumbnail: "/images/video4.webp",
      videoId: "1096496239",
    },
    {
      id: "video-review-1738248932338",
      thumbnail: "/images/video5.webp",
      videoId: "1107065256",
    },
  ];

  // Generate video URL with autoplay only when needed
  const getVideoUrl = useCallback((videoId: string) => {
    return `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1&autopause=0`;
  }, []);

  // FIX: Better video toggle with drag detection
  const toggleVideo = useCallback(
    (reviewId: string, event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      // Prevent toggle if dragging occurred
      if (isDraggingRef.current || dragDistanceRef.current > 10) {
        return;
      }

      if (activeVideo === reviewId) {
        // Close video
        setActiveVideo(null);
        setLoadedVideos((prev) => {
          const newSet = new Set(prev);
          newSet.delete(reviewId);
          return newSet;
        });
      } else {
        // Close any other video first
        setActiveVideo(null);
        setLoadedVideos(new Set());

        // Small delay to ensure previous video is unmounted
        setTimeout(() => {
          setActiveVideo(reviewId);
          setLoadedVideos(new Set([reviewId]));
        }, 100);
      }
    },
    [activeVideo]
  );

  // Mouse/touch dragging for carousel
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    if (!target) return;

    isDraggingRef.current = false; // Start as false
    dragDistanceRef.current = 0;
    startXRef.current = e.pageX - target.offsetLeft;
    scrollLeftRef.current = target.scrollLeft;

    target.style.cursor = "grabbing";
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    if (!target) return;

    isDraggingRef.current = false; // Start as false
    dragDistanceRef.current = 0;
    startXRef.current = e.touches[0].pageX - target.offsetLeft;
    scrollLeftRef.current = target.scrollLeft;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    if (!target) return;

    const x = e.pageX - target.offsetLeft;
    const distance = Math.abs(x - startXRef.current);

    if (distance > 5) {
      isDraggingRef.current = true;
      dragDistanceRef.current = distance;

      e.preventDefault();
      const walk = (x - startXRef.current) * 2;
      target.scrollLeft = scrollLeftRef.current - walk;
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    if (!target) return;

    const x = e.touches[0].pageX - target.offsetLeft;
    const distance = Math.abs(x - startXRef.current);

    if (distance > 5) {
      isDraggingRef.current = true;
      dragDistanceRef.current = distance;

      const walk = (x - startXRef.current) * 2;
      target.scrollLeft = scrollLeftRef.current - walk;
    }
  }, []);

  const handleDragEnd = useCallback(() => {
    // Keep dragging state for a short time to prevent immediate clicks
    setTimeout(() => {
      isDraggingRef.current = false;
      dragDistanceRef.current = 0;
    }, 150);

    if (slidesRef.current) {
      slidesRef.current.style.cursor = "grab";
    }
  }, []);

  // Event listeners setup
  useEffect(() => {
    const slider = slidesRef.current;
    const desktopSlider = desktopSlidesRef.current;

    if (slider) {
      slider.style.cursor = "grab";
    }
    if (desktopSlider) {
      desktopSlider.style.cursor = "auto"; // Disable grab cursor on desktop
    }

    const handleMouseUp = () => handleDragEnd();
    const handleTouchEnd = () => handleDragEnd();

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleDragEnd]);

  // Enable mouse wheel scrolling on desktop carousel

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setActiveVideo(null);
      setLoadedVideos(new Set());
    };
  }, []);

  // Video component to prevent re-renders
  const VideoPlayer = React.memo(
    ({ videoId, isActive }: { videoId: string; isActive: boolean }) => {
      if (!isActive) return null;

      return (
        <div className="w-full h-full">
          <iframe
            key={`video-${videoId}`}
            src={getVideoUrl(videoId)}
            title="Video Review"
            className="w-full h-full border-0"
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            loading="lazy"
          />
        </div>
      );
    }
  );

  VideoPlayer.displayName = "VideoPlayer";

  return (
    <section className=" bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--primary-200)_10%,transparent_40%)] opacity-30 pointer-events-none"></div>
      <Container>
        {showHeadline && (
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="text-3xl md:text-4xl font-bold text-primary-900">
              {isEnglish ? "Why customers trust us" : "Prečo nám zákazníci dôverujú"}
            </p>
          </div>
        )}

        {/* Desktop view for larger screens */}
        <div className="hidden lg:block relative">
          {/* Navigation button - Left */}
          <button
            onClick={() => {
              if (desktopSlidesRef.current) {
                desktopSlidesRef.current.scrollBy({
                  left: -320,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-lg text-accent-500 hover:text-accent-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            aria-label="Predchádzajúce videá"
            type="button"
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
              className="w-6 h-6"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>

          <div
            className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory px-12"
            ref={desktopSlidesRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="relative flex-shrink-0 w-64 snap-center"
              >
                <div
                  className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={(e) => toggleVideo(review.id, e)}
                >
                  {activeVideo === review.id && loadedVideos.has(review.id) ? (
                    <VideoPlayer videoId={review.videoId} isActive={true} />
                  ) : (
                    <div className="card-content h-full">
                      <Image
                        src={review.thumbnail}
                        alt="Video thumbnail"
                        width={256}
                        height={456}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Play/Close button in top right corner */}
                  <button
                    className="absolute top-4 right-4 bg-accent-500 rounded-full p-3 transition-all duration-200 hover:bg-accent-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 z-10 shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVideo(review.id, e);
                    }}
                    aria-label={
                      activeVideo === review.id
                        ? "Close video"
                        : "Play video review"
                    }
                    type="button"
                  >
                    {activeVideo === review.id ? (
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
                        className="w-5 h-5 text-white"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    ) : (
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
                        className="w-5 h-5 text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    )}
                  </button>

                  {/* Caption overlay - only on thumbnail */}
                  {activeVideo !== review.id && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-white font-bold flex items-center gap-2"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation button - Right */}
          <button
            onClick={() => {
              if (desktopSlidesRef.current) {
                desktopSlidesRef.current.scrollBy({
                  left: 320,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-lg text-accent-500 hover:text-accent-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            aria-label="Nasledujúce videá"
            type="button"
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
              className="w-6 h-6"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>

        {/* Mobile view for smaller screens */}
        <div className="block lg:hidden">
          <div
            className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
            ref={slidesRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`relative flex-shrink-0 w-[75vw] max-w-[320px] snap-center ${
                  index === 0 ? "ml-6" : ""
                } ${index === reviews.length - 1 ? "mr-6" : ""}`}
              >
                <div
                  className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-white shadow-xl active:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={(e) => toggleVideo(review.id, e)}
                >
                  {activeVideo === review.id && loadedVideos.has(review.id) ? (
                    <VideoPlayer videoId={review.videoId} isActive={true} />
                  ) : (
                    <div className="card-content h-full">
                      <Image
                        src={review.thumbnail}
                        alt="Video thumbnail"
                        width={320}
                        height={568}
                        sizes="320px"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Play/Close button in top right corner */}
                  <button
                    className="absolute top-4 right-4 bg-accent-500 rounded-full p-3 transition-all duration-200 active:bg-accent-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 z-10 shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVideo(review.id, e);
                    }}
                    aria-label={
                      activeVideo === review.id
                        ? "Close video"
                        : "Play video review"
                    }
                    type="button"
                  >
                    {activeVideo === review.id ? (
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
                        className="w-5 h-5 text-white"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    ) : (
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
                        className="w-5 h-5 text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    )}
                  </button>

                  {/* Caption overlay - only on thumbnail */}
                  {activeVideo !== review.id && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-white font-bold flex items-center gap-2"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <CallToAction text={callToActionText} className="mt-10" />
      </Container>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
