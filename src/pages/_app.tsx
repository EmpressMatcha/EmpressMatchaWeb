// src/pages/_app.tsx

/**
 * Custom App component for Next.js (Pages Router).
 * Initializes all pages and injects global <Head> tags for SEO,
 * responsive design, and favicon setup.
 */

// Global CSS import
import "@/styles/globals.css";
// Next.js type for App component props
import type { AppProps } from "next/app";
// Next.js Head component for populating <head>
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*
        Document head tags:
        - Title & meta description for search engines
        - Viewport & charset for responsive and correct rendering
        - Favicon link for browser tabs
        - Open Graph & Twitter Card tags for social sharing
      */}
      <Head>
        {/* Primary page title */}
        <title>Empress Matcha</title>

        {/* Meta description for SEO snippet */}
        <meta
          name="description"
          content="Empress Matcha offers premium ceremonial grade matcha crafted for unmatched flavor and quality. Elevate Your Matcha Experience."
        />

        {/* Responsive viewport settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Character encoding */}
        <meta charSet="UTF-8" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#F5E6C9" />

        {/* Favicon served from /public/logomatcha.webp */}
        <link rel="icon" href="/logomatcha.webp" type="image/webp" />

        {/* Open Graph tags for link previews */}
        <meta
          property="og:title"
          content="Empress Matcha | Royalty in Every Cup"
        />
        <meta
          property="og:description"
          content="Empress Matcha offers premium ceremonial grade matcha crafted for unmatched flavor and quality. Elevate your daily ritual with our sustainably sourced blends."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.empressmatcha.com"
        />
        <meta
          property="og:image"
          content="https://www.empressmatcha.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Cup of premium ceremonial matcha"
        />

        {/* Twitter Card tags for rich Twitter embeds */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Empress Matcha | Royalty in Every Cup"
        />
        <meta
          name="twitter:description"
          content="Empress Matcha offers premium ceremonial grade matcha crafted for unmatched flavor and quality. Elevate your daily ritual with our sustainably sourced blends."
        />
        <meta
          name="twitter:image"
          content="https://www.empressmatcha.com/og-image.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Cup of premium ceremonial matcha"
        />
      </Head>

      {/* Page content */}
      <Component {...pageProps} />
    </>
  );
}
