"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface BeforeAfterSliderProps {
  beforeImage: {
    title: string;
    description: string;
    url: string;
    width: number;
    height: number;
  };
  afterImage: {
    title: string;
    description: string;
    url: string;
    width: number;
    height: number;
  };
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, beforeAlt, afterAlt }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseLeave = () => setIsDragging(false)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    }

    const handleTouchStart = () => setIsDragging(true)
    const handleTouchEnd = () => setIsDragging(false)
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    }

    container.addEventListener("mousedown", handleMouseDown)
    container.addEventListener("mouseup", handleMouseUp)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("mousemove", handleMouseMove)

    container.addEventListener("touchstart", handleTouchStart)
    container.addEventListener("touchend", handleTouchEnd)
    container.addEventListener("touchmove", handleTouchMove)

    return () => {
      container.removeEventListener("mousedown", handleMouseDown)
      container.removeEventListener("mouseup", handleMouseUp)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("mousemove", handleMouseMove)

      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchend", handleTouchEnd)
      container.removeEventListener("touchmove", handleTouchMove)
    }
  }, [isDragging])

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex justify-between px-4 py-2 bg-gray-100">
        <h2 className="text-lg font-semibold">Before</h2>
        <h2 className="text-lg font-semibold">After</h2>
      </div>
      <div
        ref={containerRef}
        className="relative w-full aspect-square max-w-3xl cursor-ew-resize touch-none"
        role="slider"
        aria-valuenow={sliderPosition}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after image comparison slider"
      >
        <div className="absolute inset-0">
          <Image src={afterImage.url || "/placeholder.svg"} alt={afterImage.description} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image src={beforeImage.url || "/placeholder.svg"} alt={beforeImage.description} fill className="object-cover" />
        </div>
        <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M21 12H3M3 12l9-9M3 12l9 9M21 12l-9-9M21 12l-9 9" />
            </svg>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BeforeAfterSlider