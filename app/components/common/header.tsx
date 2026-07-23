// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const isActive = (path: string) => pathname === path;

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  // Header background logic: transparent → solid on scroll (home only)
  const headerBgClass = isHomePage
    ? scrolled
      ? "bg-[#0a2540] shadow-md"
      : "bg-transparent"
    : "bg-[#0a2540] shadow-md";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out px-4 ${headerBgClass}`}
    >
      {/* ...rest of the component remains identical... */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-white font-bold ${
            isMediumScreen ? "text-base" : "text-lg"
          } flex items-center gap-2`}
        >
          <Image src="/logo.png" alt="Logo" width={65} height={65} className="pt-2"/>
          METABOOSTMEDIA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-8">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About Us" },
            { href: "/blog", label: "Blogs" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-white hover:text-[#00d4ff] transition-colors ${
                isActive(href) || (href === "/services" && pathname.startsWith("/services"))
                  ? "text-[#00d4ff] font-bold"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:block bg-[#00d4ff] text-[#0a2540] px-6 py-2 rounded-full font-medium hover:bg-[#00b8e0] transition-colors"
        >
          Get Started
        </Link>

        <button
          className="lg:hidden text-white"
          onClick={toggleMobileNav}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileNavOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMobileNavOpen && (
        <div className="lg:hidden bg-[#0a2540] absolute top-full left-0 right-0 shadow-lg">
          <nav className="container mx-auto p-4 flex flex-col space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/blog", label: "Blogs" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-white py-2 ${
                  isActive(href) || (href === "/services" && pathname.startsWith("/services"))
                    ? "text-[#00d4ff] font-bold"
                    : ""
                }`}
                onClick={closeMobileNav}
              >
                {label}
              </Link>
            ))}
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