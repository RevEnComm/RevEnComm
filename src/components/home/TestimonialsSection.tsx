'use client'
// 'use client' — dynamically imported. Drag carousel with useMotionValue (no re-renders during drag).

import { useRef, useState } from 'react'
import Image from 'next/image'
import { m, useMotionValue } from 'motion/react'
import { Star, Quote, ChevronDown } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUHCP/EACIQAAICAQQDAQAAAAAAAAAAAAECAwQREiExBRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/9oADAMBAAIRAxEAPwB7mMivVpV3Gv20zRRxmCWOL1FTpALYA8Vr2ysF3d6YoCJJHI2yR3JP6KKA/9k='

const testimonials = [
  { id: '1', name: 'Zahid Hasan', role: 'Founder', company: 'TechNova', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'RevEnComm helped us bring structure to our marketing. The team was responsive, clear, and focused on outcomes instead of vanity metrics.' },
  { id: '2', name: 'Aisha Rahman', role: 'Director', company: 'StyleLoom', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'Their website and campaign thinking made our offer easier to understand and easier to buy from. We now have a stronger digital foundation to build on.' },
  { id: '3', name: 'David Smith', role: 'Marketing Lead', company: 'Apex Services', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'What stood out most was their balance of creativity and discipline. The team moved fast, communicated well, and kept every recommendation tied to business goals.' },
  { id: '4', name: 'Sarah Ahmed', role: 'Operations Head', company: 'FreshBites', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'We came in looking for execution, but RevEnComm also improved the way we think about positioning, messaging, and customer flow.' },
  { id: '5', name: 'Michael Chen', role: 'Co-Founder', company: 'ScaleUp Digital', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100', rating: 5, text: 'They feel like a practical growth partner. The work is thoughtful, the delivery is solid, and the process never feels bloated.' },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const x = useMotionValue(0)
  const dragRef = useRef<HTMLDivElement>(null)

  return (
    <section id="testimonials"
      className="relative py-[clamp(70px,8.6vw,150px)] px-5 md:px-[25px] bg-[#0a0a10]"
      aria-labelledby="testimonials-heading">

      <span className="absolute left-6 top-6 font-extrabold text-white/[0.025] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">04</span>

      <div className="max-w-[1400px] mx-auto">
        <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} className="mb-14">

          <m.div variants={staggerItem} className="flex items-center gap-4 mb-6">
            <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">04</span>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-white/40 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          </m.div>

          <m.h2 variants={staggerItem} id="testimonials-heading"
            className="text-[clamp(1.8rem,4.3vw,3.5rem)] font-extrabold tracking-tight leading-[1.1] max-w-2xl">
            Building Trust With{' '}
            <span className="text-gradient">Real Partnerships</span>
          </m.h2>
        </m.div>

        {/* Drag carousel */}
        <div ref={dragRef} className="overflow-hidden cursor-grab active:cursor-grabbing"
          aria-roledescription="carousel" aria-label="Client testimonials">
          <m.div
            drag="x"
            dragConstraints={dragRef}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            style={{ x }}
            className="flex gap-5 select-none w-max"
          >
            {testimonials.map((t, i) => (
              <m.div key={t.id} onClick={() => setActive(i)}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className={`w-[340px] md:w-[420px] bg-glass rounded-[20px] lg:rounded-[30px] p-7 shrink-0
                            border transition-colors duration-300 cursor-pointer
                            ${active === i ? 'border-[#673DE6]/40' : 'border-white/[0.07] hover:border-white/[0.12]'}`}
                aria-label={`Testimonial from ${t.name}`}
              >
                <Quote size={28} className="text-[#673DE6]/30 mb-5" aria-hidden="true" />
                <p className="text-white/65 leading-relaxed text-sm mb-7">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#1a1a2e] shrink-0 border border-white/10">
                    <Image src={t.avatar} alt={t.name} width={40} height={40} className="object-cover"
                      placeholder="blur" blurDataURL={BLUR_DATA} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{t.name}</p>
                    <p className="text-white/40 text-xs truncate">{t.role}, {t.company}</p>
                  </div>
                  <div className="flex gap-0.5" aria-label={`${t.rating} stars`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={11} className="text-[#fdc448] fill-[#fdc448]" />
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>

        {/* Keep Scrolling indicator */}
        <div className="flex flex-col items-center gap-1.5 mt-10" aria-hidden="true">
          <span className="text-white/25 text-xs tracking-widest uppercase">Keep Scrolling</span>
          <div style={{ animation: 'bounce-y 1.4s ease-in-out infinite' }} className="text-white/25">
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <m.button key={i} role="tab" aria-selected={active === i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              animate={{ scale: active === i ? 1.4 : 1, opacity: active === i ? 1 : 0.3 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-1.5 h-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]"
              style={{ background: active === i ? '#673DE6' : 'rgba(255,255,255,0.4)' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
