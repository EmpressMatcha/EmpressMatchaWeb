// src/components/ImageCarousel.tsx

/**
 * Responsive image carousel for desktop
 * - Shows up to all images at once (5 visible)
 * - Provides Prev/Next buttons to scroll through images
 * - Autoplay: advances every 3 seconds, loops back to start
 * - Smooth transition and proper spacing with Tailwind CSS
 */

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Replace these with your actual image paths in /public
const images = [
  "/image1.webp",
  "/image2.webp",
  "/image3.webp",
  "/image4.webp",
  "/image5.webp",
];

export default function ImageCarousel() {
  // index tracks the first visible slide
  const [index, setIndex] = useState(0);
  // Show all slides at once
  const visibleCount = images.length;

  // wrap-around next
  const handleNext = () => {
    setIndex((i) =>
      i >= images.length - visibleCount ? 0 : i + 1
    );
  };

  // wrap-around prev
  const handlePrev = () => {
    setIndex((i) =>
      i <= 0 ? images.length - visibleCount : i - 1
    );
  };

  // autoplay with interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 3000); // every 3s
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
      {/* Slides container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / visibleCount}%)`,
            width: `${(images.length * 100) / visibleCount}%`,
          }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={400}
                height={400}
                className="h-64 w-full rounded-lg object-cover"
                priority={idx < visibleCount} // preload all for desktop
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={() => {
          handlePrev();
          // reset autoplay timer
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = setInterval(handleNext, 3000);
        }}
        aria-label="Previous slides"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
      >
        ‹
      </button>
      <button
        onClick={() => {
          handleNext();
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = setInterval(handleNext, 3000);
        }}
        aria-label="Next slides"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
      >
        ›
      </button>
    </div>
  );
}
