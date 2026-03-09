'use client'
// 'use client' — word swap animation, AnimatePresence, hover state

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { m, AnimatePresence } from 'motion/react'
import { MessageCircle, ArrowRight, Star } from 'lucide-react'

const WORDS = ['Digital', 'Growth', 'Creative', 'Powerful', 'Smarter'] as const

const carouselCards = [
  { label: 'Bliss Brand Campaign', tag: 'Digital Marketing', bg: '1a1a2e' },
  { label: 'Dosyi E-Commerce', tag: 'Web Development', bg: '0e1628' },
  { label: 'GenG Social Strategy', tag: 'Content Solutions', bg: '1a1428' },
  { label: 'Care First AI Chatbot', tag: 'AI Automation', bg: '0e1820' },
  { label: 'GCL Google Ads', tag: 'Digital Marketing', bg: '1a1a2e' },
  { label: 'Folafol Landing Page', tag: 'Web Development', bg: '0e1628' },
]

const avatars = [
  'https://placehold.co/40x40/673DE6/ffffff',
  'https://placehold.co/40x40/5530c4/ffffff',
  'https://placehold.co/40x40/7b52f0/ffffff',
  'https://placehold.co/40x40/4420a0/ffffff',
]

const badges = [
  { name: 'Trustpilot', rating: '4.9', label: 'Excellent' },
  { name: 'Clutch', rating: '5.0', label: '5 Star' },
  { name: 'Google', rating: '4.8', label: 'Top Rated' },
]

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [btnHovered, setBtnHovered] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0c0c12] pt-16 lg:pt-[70px]"
      aria-labelledby="hero-heading"
    >
      {/* Background glow blobs */}
      <div className="hero-glow top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-50" aria-hidden="true" />
      <div className="hero-glow bottom-0 right-0 translate-x-1/4 opacity-20" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-[25px] w-full
                      grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[30px] items-center
                      py-[clamp(70px,8.6vw,120px)]">

        {/* ── LEFT: Main content ── */}
        <div className="flex flex-col">

          {/* Stacked avatars + trust text */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 w-fit mb-[clamp(20px,3.5vw,36px)]"
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0c0c12] overflow-hidden shrink-0">
                  <Image src={src} alt={`Client ${i + 1}`} width={32} height={32} className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-[#fdc448] fill-[#fdc448]" />
                ))}
              </div>
              <span className="text-white/60 text-xs font-medium">Loved by 150+ Business Owners</span>
            </div>
          </m.div>

          {/* H1 */}
          <h1
            id="hero-heading"
            className="font-extrabold leading-[1.05] tracking-tight
                       text-[clamp(2.5rem,5.5vw,5.5rem)]
                       mb-[clamp(12px,1.5vw,20px)]"
          >
            <m.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white"
            >
              Let&apos;s Make The
            </m.span>

            <m.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-end gap-x-4 text-white"
            >
              Next{' '}
              {/* Animated word swap */}
              <span
                className="overflow-hidden inline-block align-bottom relative"
                style={{ minWidth: 'clamp(150px, 22vw, 350px)', height: '1.05em' }}
                aria-live="polite"
                aria-atomic="true"
              >
                <AnimatePresence mode="wait">
                  <m.span
                    key={WORDS[wordIndex]}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 text-gradient"
                  >
                    {WORDS[wordIndex]}
                  </m.span>
                </AnimatePresence>
              </span>{' '}Thing
            </m.span>
          </h1>

          {/* Divider */}
          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="w-full h-px bg-white/10 my-[clamp(16px,3.2vw,36px)]"
            aria-hidden="true"
          />

          {/* Social proof badges grid */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-3 mb-[clamp(20px,3.5vw,40px)] max-w-md"
          >
            {badges.map((b) => (
              <div
                key={b.name}
                className="bg-glass border border-white/[0.08] rounded-[20px] p-4 flex flex-col gap-1.5"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={9} className="text-[#fdc448] fill-[#fdc448]" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm leading-none">{b.rating}</span>
                <span className="text-white/35 text-[10px] font-medium leading-snug">{b.label} on {b.name}</span>
              </div>
            ))}
          </m.div>

          {/* CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary button */}
            <m.a
              href="#contact"
              onHoverStart={() => setBtnHovered(true)}
              onHoverEnd={() => setBtnHovered(false)}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="group relative flex items-center gap-2.5 bg-[#673DE6] text-white font-semibold
                         pl-[15px] pr-1.5 py-1.5 rounded-[12px] min-h-[50px]
                         hover:bg-[#5530c4] transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c12]"
            >
              <span className="text-[15px] overflow-hidden h-[1.2em] relative block" style={{ width: '110px' }}>
                <span className={`block transition-transform duration-[0.4s] ${btnHovered ? '-translate-y-full' : 'translate-y-0'}`}>
                  Let&apos;s Discuss
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-[0.4s]" style={{
                  transform: btnHovered ? 'translateY(-100%)' : 'translateY(0)',
                }}>
                  Let&apos;s Discuss
                </span>
              </span>
              {/* Icon badge */}
              <span className="w-9 h-9 bg-white rounded-[8px] flex items-center justify-center shrink-0">
                <MessageCircle size={16} className="text-[#673DE6]" />
              </span>
            </m.a>

            <m.a
              href="#portfolio"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="flex items-center gap-1.5 text-white/55 hover:text-white text-sm font-medium
                         transition-colors duration-200 min-h-[44px]"
            >
              View our work <ArrowRight size={14} />
            </m.a>
          </m.div>
        </div>

        {/* ── RIGHT: Vertical scroll carousel ── */}
        <m.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex flex-col h-[520px] overflow-hidden rounded-2xl
                     [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]"
          aria-hidden="true"
        >
          <div className="carousel-track flex flex-col gap-3" style={{ willChange: 'transform' }}>
            {[...carouselCards, ...carouselCards].map((card, i) => (
              <div
                key={i}
                className="shrink-0 rounded-2xl border border-white/[0.08] overflow-hidden"
                style={{ background: `#${card.bg}` }}
              >
                <div className="relative h-[120px] overflow-hidden">
                  <Image
                    src={`https://placehold.co/320x120/${card.bg}/673DE6`}
                    alt={card.label}
                    fill
                    sizes="320px"
                    className="object-cover opacity-40"
                  />
                  {/* Purple gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#673DE6]/20 to-transparent" />
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <p className="text-white font-semibold text-sm">{card.label}</p>
                  <span className="shrink-0 px-2.5 py-1 rounded-full border border-[#673DE6]/30
                                   bg-[#673DE6]/10 text-[#a78bf5] text-[11px] font-medium whitespace-nowrap">
                    {card.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}
