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
  
  // Track the scroll of the entire section to drive the cards' animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={containerRef} id="services" className="relative py-[clamp(70px,8.6vw,150px)] px-5 md:px-[25px] bg-[#0c0c12]"
      aria-labelledby="services-heading">

      <span className="absolute right-6 top-6 font-extrabold text-white/[0.025] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">03</span>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Left — sticky heading */}
          <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} className="lg:sticky lg:top-24 self-start">

            <m.div variants={staggerItem} className="flex items-center gap-4 mb-6">
              <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">03</span>
              <div className="h-px w-12 bg-white/20" />
              <span className="text-white/40 text-sm font-semibold uppercase tracking-widest">Our Services</span>
            </m.div>

            <m.h2 variants={staggerItem} id="services-heading"
              className="text-[clamp(1.8rem,4.3vw,3.5rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              What Can RevEnComm Do For You
            </m.h2>

            <m.p variants={staggerItem} className="text-white/45 leading-relaxed mb-8 text-base">
              We build practical digital systems for businesses that want stronger visibility, better conversion, and measurable growth.
            </m.p>

            <m.a variants={staggerItem} href="#contact"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2.5 bg-[#673DE6] text-white font-semibold
                         px-5 py-3 rounded-xl text-sm min-h-[48px]
                         hover:bg-[#5530c4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]">
              <MessageCircle size={15} />
              Let&apos;s Talk
            </m.a>
          </m.div>

          {/* Right — Stacking Cards with 3D Parallax */}
          <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-[70vh] md:gap-[80vh] pb-[30vh] lg:pb-[40vh] relative"
          >
            {services.map((service, i) => (
              <ServiceCard 
                key={service.number} 
                service={service} 
                i={i} 
                progress={scrollYProgress} 
                total={services.length} 
              />
            ))}
          </m.div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, i, progress, total }: { service: any, i: number, progress: MotionValue<number>, total: number }) {
  const isLast = i === total - 1
  const targetScale = 1 - ((total - i) * 0.04)
  const startProgress = i / total

  const scale = useTransform(progress, [startProgress, 1], [1, targetScale])

  return (
    <m.div
      variants={staggerItem}
      className="sticky w-full rounded-[24px] lg:rounded-[32px] border border-white/[0.08] p-6 lg:p-8 bg-[#0d0d14]
                 shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.6)]"
      style={{
        top: `calc(90px + ${i * 75}px)`,
        zIndex: i + 1,
        transformOrigin: 'top center',
        scale: isLast ? 1 : scale
      }}
    >
      <div className="flex items-center gap-4 mb-5 lg:mb-6">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#673DE6]/10 flex items-center justify-center shrink-0 border border-[#673DE6]/20">
          <service.icon size={20} className="text-[#673DE6]" />
        </div>
        <h3 className="text-white font-extrabold text-xl lg:text-2xl tracking-tight flex items-center gap-3">
          <span className="text-white/30 font-mono text-sm lg:text-base font-bold">{service.number}.</span>
          {service.title}
        </h3>
      </div>

      <p className="text-white/60 leading-relaxed mb-5 lg:mb-7 text-sm lg:text-base">
        {service.description}
      </p>

      <div className="mb-5 lg:mb-7">
        <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-3 lg:mb-4">What's Included</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
          {service.subServices.map((sub: string) => (
            <li key={sub} className="flex items-start gap-2.5 text-xs lg:text-sm text-white/70 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#673DE6] shrink-0 mt-[6px]" aria-hidden="true" />
              {sub}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
        {service.tags.map((tag: string) => (
          <span key={tag}
            className="px-3 py-1 rounded-full border border-[#673DE6]/20 bg-[#673DE6]/5
                       text-[#a78bf5] text-[11px] lg:text-xs font-semibold tracking-wide">
            {tag}
          </span>
        ))}
      </div>
    </m.div>
  )
}
