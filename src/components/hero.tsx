import React from "react";
import { Button } from "./ui/button";
import { Navigation } from "./navigation";
import Image from "next/image";

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
          {heading}
        </h1>
        <Button 
          size="lg" 
          className="bg-del-green-500 hover:bg-del-green-600 text-white font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};