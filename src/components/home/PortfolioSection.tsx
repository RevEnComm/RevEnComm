'use client'
// 'use client' — dynamically imported. Spring hover, gradient border card trick.

import { useState, useRef } from 'react'
import Image from 'next/image'
import { m, useScroll, useTransform, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUHCP/EACIQAAICAQQDAQAAAAAAAAAAAAECAwQREiExBRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/9oADAMBAAIRAxEAPwB7mMivVpV3Gv20zRRxmCWOL1FTpALYA8Vr2ysF3d6YoCJJHI2yR3JP6KKA/9k='

const projects = [
  { id: '1', title: 'Chileghuri Growth Campaign', category: 'Digital Marketing', tags: ['Brand Promotion', 'Social Media'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', href: '/case-studies/chileghuri' },
  { id: '2', title: 'Organic Business Website', category: 'Website Solution', tags: ['Landing Page', 'Conversion'], image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800', href: '/case-studies/organic' },
  { id: '3', title: 'eSolution Content Refresh', category: 'Content Solution', tags: ['Creative', 'Messaging'], image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', href: '/case-studies/esolution' },
  { id: '4', title: 'Automation System Prototype', category: 'AI & Automation', tags: ['Automation', 'Workflow'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', href: '/case-studies/automation' },
  { id: '5', title: 'Performance Marketing Sprint', category: 'Digital Marketing', tags: ['Analytics', 'Campaigns'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', href: '/case-studies/performance' },
  { id: '6', title: 'Revenue-Focused Landing Build', category: 'Website Solution', tags: ['UX', 'Lead Gen'], image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800', href: '/case-studies/revenue-landing' },
]

const FILTERS = ['All', 'Digital Marketing', 'Website Solution', 'Content Solution', 'AI & Automation']

// Playful shapes array for cards
const CARD_SHAPES = [
  // 1: Folder Tab
  "rounded-tl-[60px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[15px]",
  // 2: Leaf shape
  "rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[15px] rounded-br-[15px]",
  // 3: Arch
  "rounded-t-[80px] rounded-b-[15px]",
  // 4: Reverse Leaf
  "rounded-tl-[60px] rounded-br-[60px] rounded-tr-[15px] rounded-bl-[15px]",
  // 5: Cut Corner
  "rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[60px]",
  // 6: Pill Ticket
  "rounded-[30px]",
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Add inertia and smoothness to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 0.5
  })

  // Transform smooth scroll progress into horizontal translation.
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-65%"])

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" ref={targetRef} className="relative h-[300vh]" aria-labelledby="portfolio-heading">
      {/* Sticky container that locks into place as you scroll */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-5 md:px-[25px]">
        
        <span className="absolute left-6 top-6 font-extrabold text-white/[0.025] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">02</span>

        <div className="max-w-[1400px] w-full mx-auto relative z-10 pt-16">
          {/* Header */}
          <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.15 }} className="mb-12">

            <m.div variants={staggerItem} className="flex items-center gap-4 mb-4">
              <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">02</span>
              <div className="h-px w-12 bg-white/20" />
              <span className="text-white/40 text-sm font-semibold uppercase tracking-widest">Our Portfolio</span>
            </m.div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <m.h2 variants={staggerItem} id="portfolio-heading"
                className="text-[clamp(1.8rem,4.3vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
                Selected Work And Demo Direction
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
        </div>

        {/* Scrollable Track Wrapper */}
        <div className="relative z-10 flex overflow-visible">
          {/* Horizontally Moving Cards Track */}
          <m.div style={{ x }} className="flex gap-6 w-max">
            {filtered.map((project, index) => {
              const shapeClass = CARD_SHAPES[index % CARD_SHAPES.length]
              
              return (
              <m.div
                key={project.id}
                whileHover="hover"
                className={`group cursor-pointer w-[85vw] sm:w-[450px] shrink-0 bg-[#13131f] border border-white/[0.08] transition-colors hover:border-[#673DE6]/50 overflow-hidden ${shapeClass}`}
              >
                <a href={project.href} className="flex flex-col h-full focus:outline-none relative">
                  
                  {/* Subtle top-left highlight inside folder tab or card */}
                  <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none z-10" />

                  {/* Image Container */}
                  <div className="relative overflow-hidden w-full aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA}
                    />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] via-[#13131f]/20 to-transparent
                                    opacity-70 transition-opacity duration-300" />

                    {/* Category tag */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-3 py-1.5 rounded-full border border-white/20 bg-black/30
                                       text-white/80 text-xs font-medium backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Fun animated arrow */}
                    <m.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      variants={{ hover: { scale: 1, opacity: 1 } }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute top-6 right-6 w-10 h-10 bg-[#673DE6] rounded-full flex items-center justify-center z-20 shadow-lg shadow-[#673DE6]/30"
                    >
                      <ArrowUpRight size={18} className="text-white" />
                    </m.div>
                  </div>

                  {/* Footer content taking remaining space */}
                  <div className="px-6 py-6 flex-1 flex flex-col justify-between gap-4 z-20 bg-[#13131f]">
                    <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-[#673DE6] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag}
                          className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02]
                                     text-white/40 text-[11px] font-medium whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </m.div>
            )})}
          </m.div>
        </div>

        {/* Explore CTA */}
        <div className="max-w-[1400px] w-full mx-auto relative z-10 mt-12 flex justify-start pl-2">
            <m.a href="#contact"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 border-2 border-[#673DE6] text-white font-semibold
                         px-5 py-3 rounded-[15px] text-sm min-h-[50px] hover:bg-[#673DE6]/10 transition-colors
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]">
              Explore More Work <ArrowUpRight size={15} />
            </m.a>
        </div>

      </div>
    </section>
  )
}
