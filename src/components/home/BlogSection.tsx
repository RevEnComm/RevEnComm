// RSC — static content, CSS hover. No 'use client' needed.

import Image from 'next/image'
import { ArrowUpRight, Clock } from 'lucide-react'

const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUHCP/EACIQAAICAQQDAQAAAAAAAAAAAAECAwQREiExBRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/9oADAMBAAIRAxEAPwB7mMivVpV3Gv20zRRxmCWOL1FTpALYA8Vr2ysF3d6YoCJJHI2yR3JP6KKA/9k='

const posts = [
  {
    id: '1',
    category: 'Content Marketing',
    title: 'Content Marketing Solutions in Bangladesh for SMEs',
    excerpt: 'Struggling to grow your small business in Bangladesh? Discover effective Content Marketing solutions to boost your brand visibility.',
    date: 'Feb 03, 2026',
    readTime: '4 Min read',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/1',
  },
  {
    id: '2',
    category: 'Content Marketing',
    title: 'Content Marketing: আপনার বিজনেসের জন্য কেন অপরিহার্য?',
    excerpt: 'Content Marketing হলো এমন একটি স্ট্র্যাটেজি যা বিজ্ঞাপন ছাড়াই কাস্টমারের বিশ্বাস তৈরি করে এবং ধীরে ধীরে তাদেরকে লয়াল কাস্টমারে রূপান্তর করে।',
    date: 'Jan 16, 2026',
    readTime: '3 Min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/2',
  },
  {
    id: '3',
    category: 'Brand Strategy',
    title: 'আপনার ব্রান্ডের জন্য Influencer Marketing: যেভাবে শুরু করবেন',
    excerpt: 'Influencer Marketing আজকের ডিজিটাল মার্কেটিংয়ের সবচেয়ে শক্তিশালী স্ট্র্যাটেজিগুলোর একটি। সঠিক ইনফ্লুয়েন্সার নির্বাচন করতে পারলে দ্রুত ব্রান্ড ভ্যালু বাড়ে।',
    date: 'Jan 09, 2026',
    readTime: '5 Min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/3',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-[clamp(70px,8.6vw,150px)] px-5 md:px-[25px]"
      aria-labelledby="blog-heading">

      <span className="absolute right-6 top-6 font-extrabold text-white/[0.025] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">05</span>

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">05</span>
              <div className="h-px w-12 bg-white/20" />
              <span className="text-white/40 text-sm font-semibold uppercase tracking-widest">Blog</span>
            </div>
            <h2 id="blog-heading"
              className="text-[clamp(1.8rem,4.3vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
              Insights, stories, and strategies<br />
              to grow with <span className="text-gradient">clarity</span>
            </h2>
          </div>
          <a href="#"
            className="inline-flex items-center gap-2 border-2 border-[#673DE6] text-white font-semibold
                       px-5 py-3 rounded-[15px] text-sm min-h-[48px] hover:bg-[#673DE6]/10 transition-colors
                       whitespace-nowrap self-start md:self-end">
            View All Blog Posts <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <article key={post.id}
              className="group bg-glass border border-white/[0.07] rounded-[20px] overflow-hidden
                         hover:border-[#673DE6]/30 transition-colors duration-300">
              <a href={post.href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur" blurDataURL={BLUR_DATA} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#673DE6]/10 border border-[#673DE6]/20
                                     text-[#a78bf5] text-[11px] font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/30 text-xs">
                      <Clock size={11} /> {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-white font-semibold leading-snug group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <span className="text-white/30 text-xs">{post.date}</span>
                    <span className="flex items-center gap-1 text-[#673DE6] text-xs group-hover:gap-2 transition-all duration-200">
                      Read more <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
