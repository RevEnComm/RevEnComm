'use client'
// 'use client' — accordion open state, AnimatePresence height animation

import { useState } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { Plus, MessageCircle, Megaphone, FileText, Globe, Bot } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

const services = [
  {
    number: '01',
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven ad campaigns across Facebook, Google, TikTok, and LinkedIn. We build full-funnel strategies that convert — from awareness to purchase — backed by real analytics.',
    subServices: ['Facebook & Instagram Ads', 'Google Ads (Search/Display)', 'TikTok Advertising', 'LinkedIn Ads', 'Email Marketing', 'Social Media Management'],
    tags: ['Meta Ads', 'Google Ads', 'TikTok', 'LinkedIn', 'Analytics'],
  },
  {
    number: '02',
    icon: FileText,
    title: 'Content Solutions',
    description: 'Bold visual identity and scroll-stopping creative. From brand logos to social media assets and ad creatives, we produce content that resonates with your audience.',
    subServices: ['Logo & Brand Identity', 'Social Media Design', 'Ad Creative Production', 'Copywriting & Messaging', 'Video Ad Scripts'],
    tags: ['Figma', 'Brand Design', 'Social Assets', 'Copywriting'],
  },
  {
    number: '03',
    icon: Globe,
    title: 'Website & Software',
    description: 'High-converting websites and web apps built for speed and results. E-commerce stores, landing pages, and custom platforms — all performance-first.',
    subServices: ['E-Commerce Development', 'Landing Page Design', 'Portfolio Websites', 'Web Application Development', 'Conversion Rate Optimization'],
    tags: ['Next.js', 'Shopify', 'React', 'CRO', 'Performance'],
  },
  {
    number: '04',
    icon: Bot,
    title: 'AI & Automation',
    description: 'Automate repetitive workflows and launch intelligent AI solutions. From social media scheduling bots to custom RAG-powered chatbots that understand your business.',
    subServices: ['Social Media Automation', 'AI Chatbot & RAG Systems', 'Personal AI Agents', 'Workflow Automation', 'CRM Integration'],
    tags: ['OpenAI', 'RAG', 'Automation', 'LangChain', 'n8n'],
  },
]

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="services" className="relative py-[clamp(70px,8.6vw,150px)] px-5 md:px-[25px] bg-[#0c0c12]"
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
              What We Do Best
            </m.h2>

            <m.p variants={staggerItem} className="text-white/45 leading-relaxed mb-8 text-base">
              We offer end-to-end digital solutions tailored to your business stage and growth goals. No cookie-cutter packages — only strategies that work.
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

          {/* Right — accordion */}
          <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}>
            {services.map((service, i) => (
              <m.div key={service.number} variants={staggerItem} className="relative">

                {/* Active left indicator */}
                <m.div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#673DE6] origin-top rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                />

                <m.button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full text-left flex items-center justify-between py-6 pl-5
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]
                             rounded-sm group min-h-[70px] border-b border-white/[0.07]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white/25 text-sm font-mono tabular-nums">{service.number}</span>
                    <service.icon size={16}
                      className={`shrink-0 transition-colors duration-200 ${open === i ? 'text-[#673DE6]' : 'text-white/30 group-hover:text-white/60'}`}
                    />
                    <span className={`font-semibold text-lg transition-colors duration-200 ${open === i ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                      {service.title}
                    </span>
                  </div>
                  <m.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 ml-4">
                    <Plus size={18} className="text-white/40" />
                  </m.div>
                </m.button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <m.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="pl-5 pb-6 pr-2 pt-4">
                        <p className="text-white/50 leading-relaxed mb-5 text-sm">{service.description}</p>

                        <ul className="flex flex-col gap-2 mb-5">
                          {service.subServices.map((sub) => (
                            <li key={sub} className="flex items-center gap-2.5 text-sm text-white/60">
                              <span className="w-1 h-1 rounded-full bg-[#673DE6] shrink-0" aria-hidden="true" />
                              {sub}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span key={tag}
                              className="px-3 py-1 rounded-full border border-[#673DE6]/25 bg-[#673DE6]/8
                                         text-[#a78bf5] text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  )
}
