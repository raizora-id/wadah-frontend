'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const features = [
  {
    id: 'intuitive-designing',
    title: 'Intuitive Designing',
    image: '/placeholder.svg?height=600&width=800',
    interface: (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#111] p-4">
        <div className="absolute left-4 top-4 md:left-8 md:top-8 flex flex-col md:flex-row gap-4">
          <div className="rounded-lg bg-white p-3">
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 w-6 md:h-8 md:w-8 rounded bg-gray-100" />
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-3">
            <div className="space-y-2">
              <div className="h-3 w-24 md:h-4 md:w-32 rounded bg-gray-100" />
              <div className="h-3 w-20 md:h-4 md:w-24 rounded bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'premium-content',
    title: 'Premium Content Libraries',
    image: '/placeholder.svg?height=600&width=800',
    interface: (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-4 md:p-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-white shadow-lg" />
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'infinite-canvas',
    title: 'Infinite Canvas',
    image: '/placeholder.svg?height=600&width=800',
    interface: (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#111] p-4">
        <div className="grid h-full grid-cols-4 md:grid-cols-12 gap-2 md:gap-4 rounded-lg border border-gray-800 bg-gray-900 p-2 md:p-4">
          <div className="col-span-1 md:col-span-2 space-y-2 md:space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-6 md:h-8 rounded bg-gray-800" />
            ))}
          </div>
          <div className="col-span-3 md:col-span-10 rounded-lg bg-gray-800" />
        </div>
      </div>
    )
  },
  {
    id: 'mockups',
    title: 'Mockups',
    image: '/placeholder.svg?height=600&width=800',
    interface: (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-white p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] rounded-lg bg-white shadow-xl" />
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    image: '/placeholder.svg?height=600&width=800',
    interface: (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-4">
        <div className="absolute left-1/2 top-1/2 w-5/6 md:w-2/3 -translate-x-1/2 -translate-y-1/2 space-y-4 md:space-y-6 text-center">
          <div className="mx-auto h-12 w-12 md:h-16 md:w-16 rounded-full bg-white shadow-lg" />
          <div className="space-y-2">
            <div className="h-3 md:h-4 w-full rounded bg-white" />
            <div className="h-3 md:h-4 w-2/3 rounded bg-white mx-auto" />
          </div>
        </div>
      </div>
    )
  }
]

export function Features() {
  const [activeTab, setActiveTab] = useState('intuitive-designing')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    setIsDropdownOpen(false)
  }

  const activeFeature = features.find(feature => feature.id === activeTab)

  return (
    <section className="px-4 py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-3xl md:text-[40px] font-bold leading-tight tracking-tight text-black">
          Everything You Need to Create,
          <br className="hidden md:inline" />
          All in One Place.
        </h2>
        <div className="mt-8 md:mt-12">
          {isMobile ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full rounded-full bg-[#F3F4F6] px-4 py-2 text-left text-sm font-medium text-black"
              >
                <span>{activeFeature?.title}</span>
                <ChevronDown className={`absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => handleTabChange(feature.id)}
                      className={`block w-full px-4 py-2 text-left text-sm ${
                        activeTab === feature.id ? 'bg-[#F3F4F6] font-medium' : 'text-[#6B7280] hover:bg-gray-50'
                      }`}
                    >
                      {feature.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="mx-auto inline-flex rounded-full bg-[#F3F4F6] p-1.5">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`relative rounded-full px-6 py-2 text-[15px] font-medium transition-colors ${
                    activeTab === feature.id
                      ? 'bg-white text-black shadow-sm'
                      : 'text-[#6B7280] hover:text-black'
                  }`}
                >
                  {feature.title}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 md:mt-12 overflow-hidden rounded-2xl bg-[#F9FAFB] p-2 md:p-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`transition-opacity duration-200 ${
                activeTab === feature.id ? 'opacity-100' : 'hidden opacity-0'
              }`}
            >
              {feature.interface}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm md:text-[15px] text-[#6B7280]">
          Create complex designs easily with powerful, drag-and-drop tools.
        </p>
      </div>
    </section>
  )
}

