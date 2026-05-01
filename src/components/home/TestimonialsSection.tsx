'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { m, useScroll, useTransform } from 'motion/react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { id: '1', name: 'Zahid Hasan', role: 'Founder', company: 'TechNova', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'RevEnComm helped us bring structure to our marketing. The team was responsive, clear, and focused on outcomes instead of vanity metrics.' },
  { id: '2', name: 'Aisha Rahman', role: 'Director', company: 'StyleLoom', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'Their website and campaign thinking made our offer easier to understand and easier to buy from. We now have a stronger digital foundation to build on.' },
  { id: '3', name: 'David Smith', role: 'Marketing Lead', company: 'Apex Services', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'What stood out most was their balance of creativity and discipline. The team moved fast, communicated well, and kept every recommendation tied to business goals.' },
  { id: '4', name: 'Sarah Ahmed', role: 'Operations Head', company: 'FreshBites', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'We came in looking for execution, but RevEnComm also improved the way we think about positioning, messaging, and customer flow.' },
  { id: '5', name: 'Michael Chen', role: 'Co-Founder', company: 'ScaleUp Digital', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'They feel like a practical growth partner. The work is thoughtful, the delivery is solid, and the process never feels bloated.' },
]

function TestimonialCard({ t, index, scrollYProgress }: { t: typeof testimonials[0], index: number, scrollYProgress: any }) {
  const total = testimonials.length
  const step = 1 / total
  const start = index * step
  const end = (index + 1) * step
  
  // Progress of this specific card (0 to 1 as it enters and stacks)
  const y = useTransform(scrollYProgress, [start - 0.1, start], ['100vh', '0vh'])
  
  // Previous cards scale down and dim as subsequent cards emerge
  const scale = useTransform(scrollYProgress, [end, end + step], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [end, end + step], [1, 0.4])
  
  // Calculate top offset to create the "deck" look
  const topOffset = `calc(50% - 200px + ${index * 30}px)`

  return (
    <m.div
      style={{
        y,
        scale,
        opacity,
        top: topOffset,
        zIndex: index,
      }}
      className="sticky w-full max-w-[600px] mx-auto p-1 px-4 lg:px-0"
    >
      <div className="bg-[#11111a] border border-white/10 rounded-[32px] p-8 lg:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col gap-8 transition-colors duration-300 hover:border-[#FF8A00]/30 group">
        <Quote size={48} className="text-[#FF8A00] opacity-20 group-hover:opacity-40 transition-opacity" />
        
        <p className="text-white text-lg lg:text-2xl font-medium italic leading-relaxed">
          &ldquo;{t.text}&rdquo;
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10">
              <Image src={t.avatar} alt={t.name} width={56} height={56} className="object-cover" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">{t.name}</p>
              <p className="text-white/40 text-sm">{t.role} at {t.company}</p>
            </div>
          </div>
          
          <div className="flex gap-1">
            {[...Array(t.rating)].map((_, j) => (
              <Star key={j} size={14} className="text-[#FF8A00] fill-[#FF8A00]" />
            ))}
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section 
      ref={containerRef}
      id="testimonials"
      className="relative z-[50] bg-[#0A0A0F] py-24"
      style={{ height: `${testimonials.length * 100}vh` }}
    >
      {/* Background Watermark */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="font-black text-white/[0.03] select-none text-[20vw] leading-none uppercase">
          Trust
        </span>
      </div>

      {/* Title block */}
      <div className="sticky top-24 left-0 w-full px-5 md:px-10 z-20 pointer-events-none mb-24">
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1400px] mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">04</span>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-white/40 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1] text-white">
            Partners in <br /><span className="text-gradient">Growth</span>
          </h2>
        </m.div>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative z-10 px-5 md:px-0">
        {testimonials.map((t, index) => (
          <TestimonialCard 
            key={t.id} 
            t={t} 
            index={index} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>

      {/* Spacer to allow scrolling past the last card */}
      <div className="h-[20vh]" />
    </section>
  )
}
