/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uZWnofwD6qr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Navigation } from "./navigation";

export interface HeroProps {
  heading: string;
  subheading: string;
  buttonLink: string;
  buttonText: string;
}

export const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      {/* <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230206_093815-18ZdedTBOlfsrAG1zA0nO7LYE5vZdZ.webp"
        alt="Well-maintained putting green with yellow flags"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      /> */}

      {/* Darkening Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
          Transform Your Desert into an Oasis
        </h1>
        <Button 
          size="lg" 
          className="bg-del-green-500 hover:bg-del-green-600 text-white font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Start Your Garden Journey
        </Button>
      </div>
    </div>
  );
};