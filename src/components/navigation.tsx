import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Gallery', href: '/gallery' },
]

export const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-white.png"
            alt="Del Villal Gardening Logo"
            width={300}
            height={150}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button variant="ghost" className="text-white hover:text-del-green-300">
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <Button variant="ghost" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};