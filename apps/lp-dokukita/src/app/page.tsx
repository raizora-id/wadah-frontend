"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@packages/ui/components/base/button"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TemplatesSection from "@/components/templates-section"
import CategoriesSection from "@/components/categories-section"
import StatsSection from "@/components/stats-section"
import PricingSection from "@/components/pricing-section"

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="p-2">
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
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col items-center gap-6 p-8">
        <Link href="/templates" className="text-lg font-medium" onClick={onClose}>
          Templates
        </Link>
        <Link href="/categories" className="text-lg font-medium" onClick={onClose}>
          Categories
        </Link>
        <Link href="/pricing" className="text-lg font-medium" onClick={onClose}>
          Pricing
        </Link>
        <Link href="#faq" className="text-lg font-medium" onClick={onClose}>
          FAQ
        </Link>
        <div className="flex flex-col gap-3 w-full mt-4">
          <Button variant="outline" size="lg" asChild className="w-full">
            <Link href="/login" onClick={onClose}>
              Login
            </Link>
          </Button>
          <Button size="lg" asChild className="w-full">
            <Link href="/signup" onClick={onClose}>
              Sign Up
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">

      <div className="pt-24 md:pt-32 pb-16">
        <HeroSection />

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1082px] border-t border-dashed border-black/10 mx-4 md:mx-12"></div>
        </div>

        <FeaturesSection />

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1082px] border-t border-dashed border-black/10 mx-4 md:mx-12"></div>
        </div>

        <TemplatesSection />

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1082px] border-t border-dashed border-black/10 mx-4 md:mx-12"></div>
        </div>

        <CategoriesSection />

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1082px] border-t border-dashed border-black/10 mx-4 md:mx-12"></div>
        </div>

        <StatsSection />

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1082px] border-t border-dashed border-black/10 mx-4 md:mx-12"></div>
        </div>

        <PricingSection />
      </div>
    </main>
  )
}

