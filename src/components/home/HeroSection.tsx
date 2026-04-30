'use client'

import { useState, useEffect, useRef } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { ArrowUpRight, Play, ChevronRight, Star, Globe, Zap, Bot, Megaphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// --- CONSTANTS & DESIGN TOKENS ---

const CARDS = [
  {
    id: 1,
    title: 'Content Strategy',
    client: 'EcoFlow Global',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    color: '#8B5CF6',
    tag: 'Production'
  },
  {
    id: 2,
    title: 'AI Automation',
    client: 'Nexus Systems',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    color: '#E879F9',
    tag: 'Software'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    client: 'Skyline Real Estate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    color: '#38BDF8',
    tag: 'Marketing'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    client: 'Vela Wellness',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
    color: '#2DD4BF',
    tag: 'Design'
  }
]

// Vertical offsets for the card stack
const STACK = [
  { y: 0, scale: 1, rotate: 0, opacity: 1, z: 40 },
  { y: 16, scale: 0.93, rotate: -2, opacity: 0.8, z: 30 },
  { y: 30, scale: 0.86, rotate: 1.5, opacity: 0.5, z: 20 },
  { y: 44, scale: 0.79, rotate: -1, opacity: 0.2, z: 10 },
]

// --- COMPONENTS ---

const FolderCardStack = () => {
  const [order, setOrder] = useState([0, 1, 2, 3])
  const [isExiting, setIsExiting] = useState(false)

  const cycle = () => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      setOrder(prev => {
        const newOrder = [...prev]
        const first = newOrder.shift()!
        newOrder.push(first)
        return newOrder
      })
      setIsExiting(false)
    }, 600)
  }

  useEffect(() => {
    const timer = setInterval(cycle, 5000)
    return () => clearInterval(timer)
  }, [isExiting])

  return (
    <div className="relative w-full max-w-[440px] h-[520px] mx-auto lg:ml-auto lg:mr-0">
      <AnimatePresence mode="popLayout">
        {order.map((cardIdx, stackPos) => {
          const card = CARDS[cardIdx]
          const pos = STACK[stackPos] || STACK[STACK.length - 1]
          const isFront = stackPos === 0
          
          return (
            <m.div
              key={card.id}
              layout
              initial={isFront ? { x: 0, opacity: 1 } : false}
              animate={{
                y: pos.y,
                scale: pos.scale,
                rotate: pos.rotate,
                opacity: pos.opacity,
                zIndex: pos.z,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              }}
              exit={{ 
                x: 100, 
                opacity: 0, 
                scale: 0.9, 
                rotate: 5,
                transition: { duration: 0.5, ease: 'easeInOut' } 
              }}
              className="absolute inset-0 origin-center"
            >
              <div className="relative w-full h-[460px] rounded-[32px] overflow-hidden bg-[#11111A] border border-white/10 group">
                {/* Background Image with Overlay */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-80" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span 
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border"
                      style={{ color: card.color, borderColor: `${card.color}40`, backgroundColor: `${card.color}10` }}
                    >
                      {card.tag}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-white/40 text-[11px] font-medium uppercase tracking-wider">{card.client}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                    {card.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#11111A] bg-white/10 overflow-hidden">
                          <Image src={`https://i.pravatar.cc/100?u=${card.id}${i}`} alt="User" width={32} height={32} />
                        </div>
                      ))}
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Decorative Light Streak */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </m.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default function HeroSection() {
  const [btnHovered, setBtnHovered] = useState(false)
  
  return (
    <section 
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF8A00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF8A00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 w-full relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- LEFT SIDE: THE FOLDER --- */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Folder Tab Shape */}
            <div className="relative mt-12 group">
              {/* The Tab */}
              <div className="absolute -top-[44px] left-0 h-[44px] w-[240px] bg-[#11111A]/80 backdrop-blur-xl border-l border-t border-white/10 rounded-t-[18px] flex items-center px-6 gap-3 z-20">
                <div className="w-2 h-2 rounded-full bg-[#FF8A00] shadow-[0_0_10px_#FF8A00]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Revenue Growth Engine</span>
                
                {/* Seamless curve connection */}
                <div className="absolute bottom-[-1px] left-full w-6 h-6 overflow-hidden pointer-events-none">
                  <div className="absolute bottom-0 left-[-8px] w-8 h-8 rounded-full shadow-[-4px_4px_0_4px_rgba(17,17,26,0.8)] backdrop-blur-xl" />
                </div>
              </div>

              {/* Folder Body */}
              <div className="relative bg-[#11111A]/60 backdrop-blur-2xl border border-white/10 rounded-[32px] rounded-tl-none p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
                {/* Animated Inner Grid Overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* --- REVENCOMM PRODUCTION STYLE CONTENT --- */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative z-10"
                >
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A00] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A00]"></span>
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-widest text-white/60">
                      Now accepting 2 new clients
                    </span>
                  </div>

                  <h1 className="text-[clamp(2.5rem,7vw,4.8rem)] font-black tracking-tight leading-[0.95] mb-8 text-white uppercase">
                    MANAGE <span className="text-[#FF8A00]">YOUR</span><br/>
                    <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">BUSINESS</span>
                  </h1>

                  {/* Production Subtitle with Shadows Into Light Font */}
                  <div className="flex flex-col gap-4 mb-10">
                    <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-white/50 leading-relaxed font-medium uppercase">
                      WITH THE HELP OF OUR <span className="text-[#FF8A00] font-bold" style={{ fontFamily: 'var(--font-shadows)' }}>EXPERT</span> TEAM
                    </p>
                    <div className="w-20 h-px bg-gradient-to-r from-[#FF8A00] to-transparent" />
                  </div>

                  <div className="flex flex-wrap gap-5">
                    <Link
                      href="/contact"
                      onMouseEnter={() => setBtnHovered(true)}
                      onMouseLeave={() => setBtnHovered(false)}
                      className="group relative flex items-center gap-3 bg-[#FF8A00] text-white font-bold pl-8 pr-2 py-2 rounded-full min-h-[60px] cursor-pointer shadow-lg shadow-orange-500/20"
                    >
                      <span className="text-[13px] uppercase tracking-widest overflow-hidden h-5 relative block w-32 shrink-0">
                        <m.span 
                          animate={{ y: btnHovered ? '-100%' : '0%' }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="block"
                        >
                          Consultation
                        </m.span>
                        <m.span 
                          animate={{ y: btnHovered ? '-100%' : '0%' }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 block"
                        >
                          Start Project
                        </m.span>
                      </span>
                      <span className="w-11 h-11 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight size={18} className="text-[#FF8A00]" />
                      </span>
                    </Link>

                    <button className="flex items-center gap-4 px-6 text-white/60 hover:text-white transition-colors group">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                        <Play size={16} fill="currentColor" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest">Showreel</span>
                    </button>
                  </div>
                </m.div>

                {/* Bottom Trust Indicators */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <div className="flex items-center gap-2">
                    <Globe size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">High Performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* --- RIGHT SIDE: CASE STUDY STACK --- */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative z-10"
          >
            <FolderCardStack />
          </m.div>

        </div>
      </div>
    </section>
  )
}