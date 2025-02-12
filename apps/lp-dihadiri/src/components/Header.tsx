'use client'

import { ChevronDown, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#eee] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center">
            <svg width="71" height="32" viewBox="0 0 71 32" fill="currentColor">
              <path d="M8.87.64H0v30.72h8.87V.64Zm20.27 0h-8.87v30.72h8.87V.64Zm20.27 0h-8.87v30.72h8.87V.64Z" />
            </svg>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#374151] hover:text-black">
              Product
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#374151] hover:text-black">
              Templates
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#374151] hover:text-black">
              Resources
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#374151] hover:text-black">
              Company
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden items-center justify-center md:flex">
            <Search className="h-[18px] w-[18px] text-[#374151]" />
          </button>
          <a href="#" className="hidden text-[15px] font-medium text-[#374151] hover:text-black md:block">
            Plans
          </a>
          <a href="#" className="hidden text-[15px] font-medium text-[#374151] hover:text-black md:block">
            Sign In
          </a>
          <a
            href="#"
            className="rounded-[4px] bg-black px-4 py-2 text-[15px] font-medium text-white hover:bg-[#111827]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  )
}

