import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' }
]

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <nav
      className={`pt-6 md:pt-0 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-del-green-800 bg-opacity-95" : ""}`}
      style={{
        backgroundColor: 'rgba(75, 87, 72, 0.25)',
        WebkitBackdropFilter: 'blur(4px)',
        height: '10rem'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${isScrolled ? "h-16" : "h-20"}`}
        >
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className={`pt-4 md:pt-20 transition-all duration-300 ease-in-out ${isScrolled ? "w-1/2 h-1/2" : "w-full h-full"}`}>
              <Image
                src="/logo-white.png"
                alt="Del Villal Gardening Logo"
                width={300}
                height={150}
                className="rounded-full"
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="pt-20 ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" className="text-lg text-white hover:text-del-green-300">
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden relative">
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>

          {/* Mobile menu, show/hide based on menu state */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </nav>
  );
};