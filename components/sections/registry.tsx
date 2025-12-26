"use client"

import { Section } from "@/components/section"

export function Registry() {
  return (
    <Section
      id="registry"
      className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-white/60" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-white/60" />
        </div>
        
        <h2 className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-2 sm:mb-3 md:mb-4">
          Gift Guide
        </h2>
        
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed px-2">
          The biggest gift to us is your support and presence at our wedding. Please do not feel obligated to give anything else. However, should you feel inclined, we are very much looking forward to our honeymoon and any contribution towards that will always be sincerely appreciated.
        </p>
        
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
        </div>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-xs sm:text-sm text-white/90 italic">
          Thank you from the bottom of our hearts.
        </p>
      </div>
    </Section>
  )
}
