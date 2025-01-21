import React from "react";
import { Button } from "./ui/button";
import { Navigation } from "./navigation";
import Image from "next/image";
import Link from "next/link";

export interface HeroProps {
  image: {
    title: string;
    description: string;
    url: string;
  };
  heading: string;
  buttonLink: string;
  buttonText: string;
}

export const Hero: React.FC<HeroProps> = ({
  image,
  heading,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image.url}
        alt={image.description}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Darkening Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
          {heading}
        </h1>
        <Link href={buttonLink}>
          <Button
            size="lg"
            className="bg-white text-del-green-800 hover:bg-del-green-100 font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full border-2 border-del-green-500"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};