"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/ui/Container";

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  caption?: string;
}

interface InstagramFeedProps {
  instagramUsername?: string;
  instagramLink?: string;
  title?: string;
}

const INITIAL_VISIBLE = 12;
const LOAD_MORE_COUNT = 12;

export default function InstagramFeed({
  instagramUsername = "sofoservis",
  instagramLink = "https://www.instagram.com/sofoservis/",
  title = "Sledujte nás na Instagrame",
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (shouldFetch) return;
    const el = sectionRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShouldFetch(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldFetch(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldFetch]);

  useEffect(() => {
    if (!shouldFetch) return;
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data) => {
        if (data.posts && Array.isArray(data.posts)) {
          setPosts(data.posts);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [shouldFetch]);

  return (
    <section ref={sectionRef} className="pt-10 md:pt-[100px] bg-white" id="instagram-feed">
      <Container>
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h3 className="text-2xl md:text-4xl font-bold text-primary-900 mb-6">
            {title}
          </h3>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="rounded-xl p-2 flex-shrink-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              >
                <InstagramIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-base font-bold text-primary-900">
                @{instagramUsername}
              </span>
            </div>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              Sledovať na Instagrame
            </a>
          </div>

          <div className="p-1 sm:p-2 bg-white">
            {loading ? (
              <SkeletonGrid />
            ) : error ? (
              <div className="text-center py-16 text-primary-600 px-4">
                <InstagramIcon className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="mb-2 font-medium">Feed sa momentálne nedá načítať.</p>
                <p className="text-sm text-gray-500">
                  Pozrite si nás priamo na{" "}
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 underline"
                  >
                    Instagrame
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-0.5 sm:gap-1">
                  {posts.slice(0, visible).map((post) => (
                    <PostThumbnail key={post.id} post={post} />
                  ))}
                </div>
                {visible < posts.length && (
                  <div className="flex justify-center py-5">
                    <button
                      onClick={() => setVisible((v) => v + LOAD_MORE_COUNT)}
                      className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white font-semibold px-8 py-2.5 rounded-full transition-colors text-sm"
                    >
                      Načítať viac
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PostThumbnail({ post }: { post: InstagramPost }) {
  const isVideo = post.media_type === "VIDEO";
  const src = isVideo
    ? (post.thumbnail_url ?? post.media_url)
    : post.media_url;
  const altText = post.caption
    ? post.caption.slice(0, 100)
    : "Instagram príspevok";

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden bg-gray-100"
      style={{ aspectRatio: "1 / 1" }}
      aria-label={altText}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={altText}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
        {isVideo ? (
          <PlayIcon className="w-10 h-10 text-white drop-shadow-lg" />
        ) : (
          <HeartIcon className="w-10 h-10 text-white drop-shadow-lg" />
        )}
      </div>

      {isVideo && (
        <div className="absolute bottom-2 left-2 pointer-events-none">
          <div className="bg-black/50 rounded-full p-1">
            <PlayIcon className="w-3 h-3 text-white" />
          </div>
        </div>
      )}
    </a>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0.5 sm:gap-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 animate-pulse"
          style={{ aspectRatio: "1 / 1" }}
        />
      ))}
    </div>
  );
}

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

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function HeartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
