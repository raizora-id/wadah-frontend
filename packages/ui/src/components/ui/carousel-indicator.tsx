"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface Item {
  name: string
  icon: React.ComponentType<{ className?: string }>
  content: React.ReactNode
}

interface CarouselIndicatorProps {
  items: Item[]
  autoPlayInterval?: number
  className?: string
}

export function CarouselIndicator({ items, autoPlayInterval = 5000, className }: CarouselIndicatorProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const progressInterval = 50

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + (progressInterval / autoPlayInterval) * 100
      })
    }, progressInterval)

    const slideTimer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length)
      setProgress(0)
    }, autoPlayInterval)

    return () => {
      clearInterval(progressTimer)
      clearInterval(slideTimer)
    }
  }, [items.length, autoPlayInterval])

  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={item.name}
              className="w-full flex-shrink-0"
              style={{ opacity: activeIndex === index ? 1 : 0.3 }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {/* Feature indicators */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-20 mt-8 sm:mt-12 lg:mt-20">
        {items.map((item, index) => (
          <div key={item.name} className="flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-4">
            <button
              onClick={() => {
                setActiveIndex(index)
                setProgress(0)
              }}
              className="relative"
            >
              {/* Icon with circular background */}
              <div
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300",
                  activeIndex === index ? "bg-[#6366F1]/10 text-[#6366F1]" : "bg-gray-100 text-gray-400",
                )}
              >
                <item.icon className="w-4 h-4" />
              </div>
            </button>

            <div className="flex flex-col items-center flex-1 sm:flex-initial min-w-[100px]">
              {/* Label */}
              <span
                className={cn(
                  "text-[14px] font-normal transition-colors duration-300 whitespace-nowrap",
                  activeIndex === index ? "text-[#6366F1]" : "text-gray-400",
                )}
              >
                {item.name}
              </span>

              {/* Progress line container */}
              <div className="h-[2px] w-full bg-gray-100 mt-2 relative overflow-hidden">
                {/* Animated progress line */}
                {activeIndex === index && (
                  <div
                    className="absolute inset-0 bg-[#6366F1] transition-transform duration-100 ease-linear origin-left"
                    style={{ transform: `scaleX(${progress / 100})` }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

