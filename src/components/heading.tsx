import type React from "react"
import Image from "next/image"

export interface HeadingProps {
  heading: string
  backgroundImage: {
    title: string
    description: string
    url: string
  }
}

export const Heading: React.FC<HeadingProps> = ({ heading, backgroundImage }) => {
  return (
    <section className="relative w-full mt-0 pt-32 sm:pt-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage.url || "/placeholder.svg"}
          alt={backgroundImage.description}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-10 lg:px-24 relative z-10">
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-36 lg:pt-40 lg:pb-44">
          <div className="max-w-4xl">
            <h1 className="text-white font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}