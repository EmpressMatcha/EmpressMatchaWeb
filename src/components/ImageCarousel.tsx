// src/components/ImageCarousel.tsx

/**
 * Responsive image carousel for desktop
 * - Shows 3 images at a time
 * - Provides Prev/Next buttons to scroll through images
 * - Smooth transition with Tailwind CSS
 */

import { useState } from 'react';
import Image from 'next/image';

// Replace these with your actual image paths in /public
const images = [
  '/image1.webp',
  '/image1.webp',
  '/image1.webp',
  '/image1.webp',
  '/image1.webp',
];

export default function ImageCarousel() {
  // index tracks the first visible slide
  const [index, setIndex] = useState(0);

  // number of slides visible at once
  const visibleCount = 3;

  // handlers for Prev/Next
  const handlePrev = () => setIndex(i => Math.max(0, i - 1));
  const handleNext = () => setIndex(i => Math.min(images.length - visibleCount, i + 1));

  return (
    <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
      {/* Slides container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(index * 100) / visibleCount}%)` }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-1/3 px-2"
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={400}
                height={400}
                className="rounded-lg object-cover"
                priority={idx < visibleCount} // preload first slides for performance
              />
            </div>
          ))}
        </div>
      </div>

      {/** Navigation buttons */}
      <button
        onClick={handlePrev}
        disabled={index === 0}
        aria-label="Previous slides"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        disabled={index >= images.length - visibleCount}
        aria-label="Next slides"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
      >
        ›
      </button>
    </div>
  );
}
