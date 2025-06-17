// src/pages/index.tsx

import Head from "next/head";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Empress Matcha | Royalty in Every Cup</title>
        {/* (other SEO tags omitted for brevity) */}
      </Head>

      {/** Full-screen Hero banner */}
      <Hero />

      {/** Image carousel showcasing your Instagram-style shots */}
      <section aria-label="Product gallery" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-8 lg:px-16">
          <ImageCarousel />
        </div>
      </section>
    </>
  );
}
