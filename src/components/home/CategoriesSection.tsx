'use client'

import { useState, useRef, useEffect } from 'react'
import { useInView } from 'motion/react'
import Image from 'next/image'

const categories = [
  {
    title: 'Marketing',
    subtitle: 'Campaigns & SEO',
    type: 'video',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-background-loop-32609-large.mp4',
  },
  {
    title: 'Creation',
    subtitle: 'Visuals & Copy',
    type: 'image',
    media: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Engineering',
    subtitle: 'Web Platforms',
    type: 'video',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-and-purple-gradient-background-41617-large.mp4',
  },
  {
    title: 'Automation',
    subtitle: 'AI & Chatbots',
    type: 'image',
    media: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Identity',
    subtitle: 'Brand Positioning',
    type: 'video',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-the-water-123-large.mp4',
  }
]

function CategoryRow({ cat, i, isActive, setActiveIdx }: { cat: typeof categories[0], i: number, isActive: boolean, setActiveIdx: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Creates a 20% detection band vertically centered on the screen.
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", amount: "some" })

  useEffect(() => {
    // If it comes into the center of the viewport (mostly on mobile scrolling), snap it as active.
    if (isInView) {
      setActiveIdx(i)
    }
  }, [isInView, i, setActiveIdx])

  return (
    <div
      onMouseEnter={() => setActiveIdx(i)}
      onClick={() => setActiveIdx(i)}
      className="group flex flex-col border-b border-white/5 py-8 md:py-[12vh] cursor-pointer transition-colors hover:bg-white/[0.02]"
    >
      {/* Header Container (Targeted by intersection observer) */}
      <div ref={ref} className="flex flex-col sm:flex-row sm:items-center justify-between w-full relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
          <span className={`font-mono text-sm tracking-widest transition-colors duration-700 ease-out
                           ${isActive ? 'text-[#673DE6]' : 'text-white/20'}`}>
            0{i + 1}
          </span>
          
          <div className="flex flex-col gap-1 transition-transform duration-700 ease-[0.16,1,0.3,1] transform-gpu">
            <h3 className={`text-[clamp(2.5rem,5vw,5rem)] font-extrabold tracking-tighter leading-none transition-colors duration-700 ease-out
                           ${isActive ? 'text-white' : 'text-white/30'}`}>
              {cat.title}
            </h3>
            <p className={`text-sm tracking-widest uppercase transition-all duration-700 ease-out font-semibold transform-gpu
                          ${isActive ? 'text-white/60 translate-x-1' : 'text-white/10 translate-x-0'}`}>
              {cat.subtitle}
            </p>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className={`hidden sm:flex mt-4 sm:mt-0 w-12 h-12 rounded-full border items-center justify-center transition-all duration-700 ease-[0.16,1,0.3,1] transform-gpu
                        ${isActive ? 'border-[#673DE6] bg-[#673DE6]/10 text-[#673DE6]' : 'border-white/5 text-white/10'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
               className={`transition-transform duration-700 ease-out transform-gpu ${isActive ? 'translate-x-[2px]' : ''}`}>
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>

      {/* Mobile Inline Media Accordion (CSS Grid technique ensures no DOM tearing/jank) */}
      <div 
        className={`lg:hidden w-full transition-all duration-[700ms] ease-[0.16,1,0.3,1] grid transform-gpu will-change-transform
                   ${isActive ? 'grid-rows-[1fr] mt-8 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#040406] border border-white/5">
            {cat.type === 'image' ? (
              <Image
                src={cat.media}
                alt={cat.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={true}
              />
            ) : (
              <video
                src={cat.media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-2xl pointer-events-none z-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CategoriesSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0)

  return (
    <section id="categories" className="py-[clamp(80px,10vw,160px)] bg-[#0A0A0F]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        
        {/* Header */}
        <div className="flex items-center gap-6 mb-12 md:mb-20">
          <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">04</span>
          <div className="h-px w-16 bg-white/10" />
          <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">Core Disciplines</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          
          {/* Left Column: Large Typography List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-col border-t border-white/5">
              {categories.map((cat, i) => (
                <CategoryRow 
                  key={i} 
                  cat={cat} 
                  i={i} 
                  isActive={activeIdx === i} 
                  setActiveIdx={setActiveIdx} 
                />
              ))}
            </div>
          </div>

          {/* Right Column: Solid Sticky Media Frame (Desktop Only) */}
          {/* Constant DOM nodes to eliminate unmount jank during rapid hover sweeps */}
          <div className="hidden lg:block lg:col-span-5 relative h-full">
            <div className="sticky top-0 h-screen flex flex-col justify-center">
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-[#040406] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 transform-gpu">
                {categories.map((cat, i) => {
                  const isVisible = activeIdx === i
                  return (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-[800ms] ease-[0.16,1,0.3,1] transform-gpu will-change-transform
                                 ${isVisible ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                    >
                      {cat.type === 'image' ? (
                        <Image
                          src={cat.media}
                          alt={cat.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={true}
                        />
                      ) : (
                        <video
                          src={cat.media}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  )
                })}
                {/* Subtle rim light overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[32px] pointer-events-none z-20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
