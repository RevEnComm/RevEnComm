'use client'

import { useRef } from 'react'
import { m, useScroll, useTransform, MotionValue } from 'motion/react'
import { MessageCircle, Megaphone, Palette, Globe, Bot } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

const services = [
  {
    number: '01',
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'We create strategic campaigns, engaging content, and targeted ads that make your brand memorable and influential. If you want more visibility, more customers, and faster growth, we’re ready to deliver results.',
    subServices: ['Brand Promotion', 'Facebook Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'Copywriting', 'Social Media Marketing', 'Email Marketing'],
    tags: ['Campaigns', 'Social Media', 'Data-Driven', 'Ads'],
  },
  {
    number: '02',
    icon: Palette,
    title: 'Content Solution',
    description: 'We believe your brand is more than a logo. We design strategic visual identities, high-impact social media visuals, and professional communication materials that build authority and credibility.',
    subServices: ['Logo & Brand Design', 'Social Media & Ad Design', 'Business & Marketing Materials'],
    tags: ['Brand Identity', 'Social Creatives', 'Marketing Assets'],
  },
  {
    number: '03',
    icon: Globe,
    title: 'Website & Software',
    description: 'Create responsive, conversion-focused websites and portfolios that support your campaigns, showcase your offer clearly, and make it easy for customers to take action.',
    subServices: ['E-commerce Website Development', 'Landing Page Design', 'Portfolio Website', 'Custom Web Applications'],
    tags: ['E-Commerce', 'Landing Pages', 'UX', 'Conversion'],
  },
  {
    number: '04',
    icon: Bot,
    title: 'AI & Automation',
    description: 'Our solutions act as your 24/7 smart team—deploying intelligent chatbots, automating lead collection, and creating content efficiently so you can focus on scaling.',
    subServices: ['Social Media Automation', 'AI Chatbot & RAG Solutions', 'Personal AI Agent'],
    tags: ['Automation', 'RAG', 'AI Agent', 'Efficiency'],
  },
]

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={containerRef} id="services" className="relative h-[400vh] z-30 pt-[clamp(80px,10vw,180px)] pb-24 px-5 md:px-10"
      aria-labelledby="services-heading">

      {/* Section number watermark */}
      <span className="absolute right-10 top-10 font-black text-white/[0.015] select-none pointer-events-none leading-none
                       text-[clamp(100px,15vw,250px)]" aria-hidden="true">03</span>

      {/* Decorative vertical separator (consistent with Blog/Portfolio) */}
      <div className="absolute left-[40px] md:left-[80px] top-0 bottom-0 w-px bg-white/[0.03] z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start h-full">

          {/* Left — sticky heading (Superior Typographic Style) */}
          <div className="lg:sticky lg:top-32 self-start ml-4 md:ml-12">
            <m.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#FF8A00] text-[11px] font-black tracking-[0.3em] uppercase">03 Strategic Services</span>
                <div className="h-px w-10 bg-[#FF8A00]/20" />
              </div>

              <h2 id="services-heading"
                className="text-[clamp(2.5rem,5.5vw,5rem)] font-black tracking-tighter leading-[0.95] mb-8 text-white uppercase">
                Systems <span className="italic font-light text-white/30">Built</span> <br/>
                For <span className="text-gradient">Growth.</span>
              </h2>

              <p className="text-[clamp(1rem,1.2vw,1.15rem)] text-white/40 leading-relaxed mb-12 max-w-sm font-bold uppercase tracking-tight">
                We build practical digital systems for businesses that want stronger visibility, better conversion, and measurable growth.
              </p>

              <div className="flex flex-col gap-8">
                <m.a href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-6 bg-white text-black font-black pl-8 pr-2 py-2 rounded-full min-h-[64px] cursor-pointer w-fit"
                >
                  <span className="text-[12px] uppercase tracking-[0.2em]">Book Strategy Call</span>
                  <span className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-45">
                    <Megaphone size={18} className="text-white" />
                  </span>
                </m.a>

                <div className="flex items-center gap-4 text-[#FF8A00] font-black text-[10px] uppercase tracking-[0.3em]">
                  <span>Scroll to Explore</span>
                  <m.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-px bg-[#FF8A00]"
                  />
                </div>
              </div>
            </m.div>
          </div>

          {/* Right — The Stacking Cards Container */}
          <div className="relative space-y-0 lg:pt-12 h-full">
            {services.map((service, i) => (
              <ServiceCardWrapper 
                key={service.number} 
                service={service} 
                index={i} 
                total={services.length} 
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCardWrapper({ service, index, total, scrollYProgress }: { service: any, index: number, total: number, scrollYProgress: any }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Logic for section-based stacking
  const step = 1 / total
  const start = index * step
  const end = (index + 1) * step

  // Entrance from bottom (sliding up)
  const y = useTransform(scrollYProgress, [start - 0.15, start], ['100vh', '0vh'])
  
  // Scale down and fade as the next card emerges
  const scale = useTransform(scrollYProgress, [end, end + step], [1, 0.85 + (index * 0.02)])
  const opacity = useTransform(scrollYProgress, [end, end + step], [1, 0.3])

  return (
    <div ref={containerRef} className="h-screen sticky top-0 flex items-center justify-center pointer-events-none px-4 md:px-0">
      <m.div
        style={{ 
          y,
          scale: index === total - 1 ? 1 : scale, 
          opacity: index === total - 1 ? 1 : opacity,
          zIndex: index,
          marginTop: `${index * 40}px`, // Visual offset for the deck
        }}
        className="w-full pointer-events-auto rounded-[40px] border border-white/[0.08] p-8 lg:p-16 bg-[#0F0F16]/90 backdrop-blur-3xl
                   shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.8)] origin-top relative overflow-hidden group/card"
      >
        {/* Card Watermark */}
        <span className="absolute -right-4 -bottom-10 font-black text-white/[0.02] select-none pointer-events-none leading-none
                         text-[clamp(150px,25vw,350px)] transition-colors duration-700 group-hover/card:text-[#FF8A00]/[0.03]" aria-hidden="true">
          {service.number}
        </span>

        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-[24px] bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center shrink-0 transition-all duration-500 group-hover/card:bg-[#FF8A00]/20">
                <service.icon size={28} className="text-[#FF8A00]" />
              </div>
              <div>
                <span className="text-[#FF8A00] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Capabilities {service.number}</span>
                <h3 className="text-white font-black text-3xl lg:text-5xl tracking-tighter uppercase leading-none">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-white/40 leading-relaxed mb-10 text-lg font-bold uppercase tracking-tight max-w-2xl">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
              {service.subServices.map((sub: string) => (
                <div key={sub} className="flex items-center gap-4 text-xs text-white/60 font-black uppercase tracking-widest group/item">
                  <div className="w-2 h-2 rounded-full border border-[#FF8A00]/40 group-hover/item:bg-[#FF8A00] transition-all duration-300" />
                  {sub}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-3 shrink-0 pt-2">
            {service.tags.map((tag: string) => (
              <span key={tag}
                className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.03]
                           text-white/20 text-[9px] font-black tracking-widest uppercase hover:border-[#FF8A00]/30 hover:text-white/40 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </m.div>
    </div>
  )
}
