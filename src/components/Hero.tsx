// src/components/Hero.tsx

/**
 * Hero component for Empress Matcha homepage.
 * - Full-screen background image (no dark overlay)
 * - Overlaid Header/navigation at the top
 * - Central <h1> and CTA button
 * - Semantic roles and ARIA attributes for accessibility & SEO
 */

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Hero() {
  return (
    // Landmark region labelled for assistive tech
    <section
      id="hero"
      role="region"
      aria-labelledby="hero-heading"
      className="relative h-screen w-full"
    >
      {/**
        Background image
        - `fill` makes it cover the entire section
        - `priority` hints Next.js to preload for LCP
      **/}
      <Image
        src="/hero-bg.jpg"
        alt="Close-up of vibrant green matcha cup"
        fill
        className="object-cover"
        priority
      />

      {/** Overlaid Header/navigation **/}
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>

      {/**
        Central content
        - flex to center both axes
        - padding for small screens
      **/}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/** Primary page heading for SEO **/}
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-semibold text-white mb-4"
        >
          Be Royal. Drink Empress Matcha.
        </h1>

        {/** Call-to-action button driving conversions **/}
        <Link
          href="/shop"
          className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded hover:bg-gray-100 transition"
          aria-label="Shop our premium matcha collection"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
