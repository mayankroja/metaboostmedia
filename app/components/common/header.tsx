// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isActive = (path: string) => pathname === path;

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <header className="sticky top-0 bg-[#0a2540] px-4 py-2 z-50 w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={`text-white font-bold ${isMediumScreen ? 'text-base' : 'text-lg'} flex items-center gap-2`}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          METABOOSTMEDIA
        </Link>

        {/* Desktop Navigation - Show on large screens only */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-8">
          <Link
            href="/"
            className={`text-white hover:text-[#00d4ff] transition-colors ${
              isActive("/") ? "text-[#00d4ff] font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-white hover:text-[#00d4ff] transition-colors ${
              isActive("/services") || pathname.startsWith("/services") 
                ? "text-[#00d4ff] font-bold" 
                : ""
            }`}
          >
            Services
          </Link>

          <Link
            href="/about"
            className={`text-white hover:text-[#00d4ff] transition-colors ${
              isActive("/about") ? "text-[#00d4ff] font-bold" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className={`text-white hover:text-[#00d4ff] transition-colors ${
              isActive("/blog") ? "text-[#00d4ff] font-bold" : ""
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`text-white hover:text-[#00d4ff] transition-colors ${
              isActive("/contact") ? "text-[#00d4ff] font-bold" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button - Show on large screens */}
        <Link
          href="/contact"
          className="hidden lg:block bg-[#00d4ff] text-[#0a2540] px-6 py-2 rounded-full font-medium hover:bg-[#00b8e0] transition-colors"
        >
          Get Started
        </Link>


        {/* Mobile Menu Button - Show on medium and small screens */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMobileNav}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <div className="lg:hidden bg-[#0a2540] absolute top-full left-0 right-0 shadow-lg">
          <nav className="container mx-auto p-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-white py-2 ${
                isActive("/") ? "text-[#00d4ff] font-bold" : ""
              }`}
              onClick={closeMobileNav}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-white py-2 ${
                isActive("/services") || pathname.startsWith("/services") 
                  ? "text-[#00d4ff] font-bold" 
                  : ""
              }`}
              onClick={closeMobileNav}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-white py-2 ${
                isActive("/about") ? "text-[#00d4ff] font-bold" : ""
              }`}
              onClick={closeMobileNav}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className={`text-white py-2 ${
                isActive("/blog") ? "text-[#00d4ff] font-bold" : ""
              }`}
              onClick={closeMobileNav}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`text-white py-2 ${
                isActive("/contact") ? "text-[#00d4ff] font-bold" : ""
              }`}
              onClick={closeMobileNav}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#00d4ff] text-[#0a2540] px-6 py-2 rounded-full font-medium text-center mt-4"
              onClick={closeMobileNav}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;