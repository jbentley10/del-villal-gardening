import type React from "react"
import Image from "next/image"

interface HeadingProps {
  heading: string
  backgroundImage: {
    title: string;
    description: string;
    url: string;
  };
}

export const Heading: React.FC<HeadingProps> = ({ heading, backgroundImage }) => {
  return (
    <section className="h-dvh md:h-auto mt-0 sm:pt-10 md:pt-32 relative w-full flex">
      <Image
        src={backgroundImage.url}
        alt={backgroundImage.description}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="w-full md:w-1/2 relative z-20 text-left p-8">
        <div className="mb-16 max-w-md">
          <h1 className="pt-40 md:pt-0 pb-7 text-white font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl">{heading}</h1>
        </div>
      </div>
    </section>
  )
}