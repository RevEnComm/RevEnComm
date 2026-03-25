'use client'
// 'use client' — dynamically imported. Spring hover, gradient border card trick.

import { useState } from 'react'
import Image from 'next/image'
import { m } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUHCP/EACIQAAICAQQDAQAAAAAAAAAAAAECAwQREiExBRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/9oADAMBAAIRAxEAPwB7mMivVpV3Gv20zRRxmCWOL1FTpALYA8Vr2ysF3d6YoCJJHI2yR3JP6KKA/9k='

const projects = [
  { id: '1', title: 'Bliss Brand Campaign', category: 'Digital Marketing', tags: ['Facebook Ads', 'Brand Strategy'], image: 'https://placehold.co/800x600/1a1a2e/673DE6/png', href: '#' },
  { id: '2', title: 'Dosyi E-Commerce Store', category: 'Web Development', tags: ['E-Commerce', 'Shopify'], image: 'https://placehold.co/800x600/0e1628/5530c4/png', href: '#' },
  { id: '3', title: 'GenG Social Growth', category: 'Content Solutions', tags: ['Social Media', 'Content'], image: 'https://placehold.co/800x600/1a1428/7b52f0/png', href: '#' },
  { id: '4', title: 'Care First AI Chatbot', category: 'AI Automation', tags: ['AI Chatbot', 'RAG'], image: 'https://placehold.co/800x600/0e1820/4420a0/png', href: '#' },
  { id: '5', title: 'GCL Google Ads Strategy', category: 'Digital Marketing', tags: ['Google Ads', 'Analytics'], image: 'https://placehold.co/800x600/1a1a2e/673DE6/png', href: '#' },
  { id: '6', title: 'Folafol Landing Page', category: 'Web Development', tags: ['Landing Page', 'Conversion'], image: 'https://placehold.co/800x600/0e1628/5530c4/png', href: '#' },
]

const FILTERS = ['All', 'Digital Marketing', 'Web Development', 'Content Solutions', 'AI Automation']

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-[clamp(70px,8.6vw,150px)] px-5 md:px-[25px] overflow-hidden"
      aria-labelledby="portfolio-heading">

      <span className="absolute left-6 top-6 font-extrabold text-white/[0.025] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">02</span>

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} className="mb-14">

          <m.div variants={staggerItem} className="flex items-center gap-4 mb-6">
            <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">02</span>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-white/40 text-sm font-semibold uppercase tracking-widest">Our Portfolio</span>
          </m.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <m.h2 variants={staggerItem} id="portfolio-heading"
              className="text-[clamp(1.8rem,4.3vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
              Our Works
            </m.h2>

            {/* Filter pills */}
            <m.div variants={staggerItem} className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <m.button key={f} onClick={() => setActiveFilter(f)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  aria-pressed={activeFilter === f}
                  className={`px-4 py-2 rounded-[15px] text-xs font-semibold border-2 transition-colors duration-200 min-h-[40px]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]
                    ${activeFilter === f
                      ? 'border-[#673DE6] text-white bg-[#673DE6]/10'
                      : 'border-white/[0.12] text-white/50 hover:border-[#673DE6]/40 hover:text-white'}`}
                >
                  {f}
                </m.button>
              ))}
            </m.div>
          </div>
        </m.div>

        {/* Cards grid — DeveloperLook p-[3px] gradient border trick */}
        <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <m.div
              key={project.id}
              variants={staggerItem}
              whileHover="hover"
              className="gradient-border-card group cursor-pointer"
            >
              <a href={project.href} className="block focus:outline-none">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-[20px]" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA}
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5
                                     text-white/80 text-xs font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <m.div
                    initial={{ x: 8, y: -8, opacity: 0 }}
                    variants={{ hover: { x: 0, y: 0, opacity: 1 } }}
                    className="absolute top-4 right-4 w-9 h-9 bg-[#673DE6] rounded-xl flex items-center justify-center"
                  >
                    <ArrowUpRight size={16} className="text-white" />
                  </m.div>
                </div>

                {/* Footer */}
                <div className="px-5 py-4 flex items-center justify-between gap-3">
                  <h3 className="text-white font-semibold text-base group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 shrink-0">
                    {project.tags.map((tag) => (
                      <span key={tag}
                        className="px-2.5 py-1 rounded-full border border-white/[0.1] bg-white/[0.04]
                                   text-white/40 text-[11px] font-medium whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </m.div>
          ))}
        </m.div>

        {/* Explore CTA */}
        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-10">
          <m.a href="#contact"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="flex items-center gap-2 border-2 border-[#673DE6] text-white font-semibold
                       px-5 py-3 rounded-[15px] text-sm min-h-[50px] hover:bg-[#673DE6]/10 transition-colors
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]">
            Explore Full Portfolio <ArrowUpRight size={15} />
          </m.a>
        </m.div>
      </div>
    </section>
  )
}
