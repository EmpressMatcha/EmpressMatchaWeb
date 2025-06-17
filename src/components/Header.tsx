// src/components/Header.tsx

/**
 * Header component for Empress Matcha website.
 * - Renders the site logo centered
 * - Primary navigation on the left
 * - User utility icons (search, cart, profile) on the right
 * - Includes accessibility attributes and optimized image loading
 */

// Next.js Link for client-side navigation (prevents full page reloads)
import Link from "next/link";
// Next.js Image for optimized image loading & automatic resizing
import Image from "next/image";
// Heroicons outline icons (v2)
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    // Semantic header landmark
    <header role="banner" className="py-4 bg-white shadow-sm">
      {/* 
        Container: centers content and defines a 3-column grid:
        1) Primary nav 
        2) Logo 
        3) Utility icons
      */}
      <div className="container mx-auto grid grid-cols-3 items-center">
        
        {/** 
          LEFT COLUMN: Primary navigation 
          - aria-label identifies this as the main navigation region 
        **/}
        <nav
          aria-label="Primary navigation"
          className="flex space-x-8 font-medium text-gray-700"
        >
          {/** Home link **/}
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>

          {/** About Us dropdown **/}
          <div className="relative group">
            {/** Button that triggers the dropdown on hover **/}
            <button
              aria-haspopup="true"
              className="flex items-center hover:text-gray-900"
            >
              About Us
              {/* Chevron icon to indicate a submenu */}
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>

            {/** 
              Dropdown menu hidden by default (opacity-0) 
              and shown when parent `.group` is hovered 
            **/}
            <ul
              role="menu"
              className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded
                         opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <li role="none">
                <Link
                  href="/about/our-story"
                  role="menuitem"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  Our Story
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/about/our-mantra"
                  role="menuitem"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  Our Mantra
                </Link>
              </li>
            </ul>
          </div>

          {/** Shop link **/}
          <Link href="/shop" className="hover:text-gray-900">
            Shop
          </Link>
        </nav>

        {/** 
          CENTER COLUMN: Brand logo 
          - Links back to the homepage 
          - `priority` tells Next.js to preload this critical asset 
        **/}
        <div className="flex justify-center">
          <Link href="/" aria-label="Empress Matcha Home">
            <Image
              src="/logomatcha.webp"   // Logo file in public/ directory
              alt="Empress Matcha Logo"// Alt text for accessibility & SEO
              width={150}
              height={50}
              priority               // Preload this image for performance
            />
          </Link>
        </div>

        {/** 
          RIGHT COLUMN: Utility icons 
          - Search, cart (with badge), and user profile 
          - Each wrapped in a <button> with an aria-label for screen readers 
        **/}
        <div
          aria-label="User actions"
          className="flex justify-end items-center space-x-6 text-gray-700"
        >
          {/** Search button **/}
          <button aria-label="Search" className="hover:text-gray-900">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>

          {/** Cart button with item count badge **/}
          <button
            aria-label="View cart"
            className="relative hover:text-gray-900"
          >
            <ShoppingCartIcon className="w-6 h-6" />
            <span
              className="absolute -top-2 -right-2 bg-pink-500 text-white
                         rounded-full text-xs px-1"
            >
              1
            </span>
          </button>

          {/** User profile button **/}
          <button aria-label="User profile" className="hover:text-gray-900">
            <UserIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
