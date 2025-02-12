import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-[72px] text-center">
      <h1 className="max-w-[800px] font-sans text-[64px] font-black leading-[1.1] tracking-[-0.02em] text-black md:text-[120px]">
        WHERE IDEAS
        <br />
        BECOME
        <br />
        DESIGNS
      </h1>
      <p className="mt-6 max-w-[540px] text-[15px] text-[#6B7280]">
        Kittl makes it simple to create professional designs — just the right tools, no unnecessary extras.
      </p>
      <a
        href="#"
        className="group mt-8 inline-flex items-center gap-2 rounded-[4px] bg-black px-5 py-3 text-[15px] font-medium text-white hover:bg-[#111827]"
      >
        Try Kittl for Free
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
      <div className="mt-16 h-[400px] w-full max-w-[1200px] bg-[#F3F4F6]"></div>
    </section>
  )
}

