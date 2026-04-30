'use client'

import Image from 'next/image'
import { m } from 'motion/react'
import { ArrowUpRight, Clock, Plus } from 'lucide-react'

const posts = [
  {
    id: '1',
    category: 'Digital Marketing',
    title: 'ফেসবুক অ্যাড থেকে আরও বেশি সেল পাওয়ার উপায়',
    excerpt: 'ফেসবুকে অ্যাড রান করছেন কিন্তু সেলস আসছে না? জানুন কীভাবে Ad Manager-এর ডাটা অ্যানালাইসিস করে আপনার ক্যাম্পেইনের পারফর্মেন্স বাড়াবেন।',
    date: 'Apr 10, 2026',
    readTime: '8 Min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/facebook-ad-data-analysis',
  },
  {
    id: '2',
    category: 'Digital Marketing',
    title: 'আপনার ব্রান্ডের জন্য Influencer Marketing: যেভাবে শুরু করবেন',
    excerpt: 'সঠিক স্ট্র্যাটেজি দিয়ে Influencer Marketing ক্যাম্পেইন রান করুন। সঠিক ইনফ্লুয়েন্সার খুঁজে বের করুন এবং তাদের সাথে প্রফেশনালি ডিল করুন।',
    date: 'Mar 28, 2026',
    readTime: '7 Min read',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/influencer-marketing-strategy',
  },
  {
    id: '3',
    category: 'Content Marketing',
    title: 'Content Marketing: আপনার বিজনেসের জন্য কেন অপরিহার্য?',
    excerpt: 'Content Marketing কেন আপনার বিজনেসের জন্য অপরিহার্য? জানুন কীভাবে কনটেন্ট দিয়ে কাস্টমার আকর্ষণ করবেন এবং দীর্ঘমেয়াদী গ্রোথ নিশ্চিত করবেন।',
    date: 'Mar 15, 2026',
    readTime: '7 Min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/content-marketing-why-important',
  },
  {
    id: '4',
    category: 'Brand Strategy',
    title: 'ইমোশনাল মার্কেটিং: কাস্টমারদের মনের দুয়ার খুলে সেলস বাড়াবেন',
    excerpt: 'ইমোশনাল মার্কেটিং কীভাবে কাস্টমারদের মনে জায়গা করে নেয়? জানুন কীভাবে আবেগের শক্তি ব্যবহার করে আপনার ব্র্যান্ডকে অপ্রতিরোধ্য করে তুলবেন।',
    date: 'Mar 01, 2026',
    readTime: '7 Min read',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/emotional-marketing-strategy',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-[clamp(80px,10vw,180px)] px-5 md:px-[40px] bg-[#0A0A0F] overflow-hidden"
      aria-labelledby="blog-heading">

      {/* Section number watermark */}
      <span className="absolute right-6 top-6 font-black text-white/[0.015] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">06</span>

      {/* Decorative vertical separator */}
      <div className="absolute left-[40px] md:left-[80px] top-0 bottom-0 w-px bg-white/[0.03]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Superior Typographic Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 ml-[20px] md:ml-[60px]">
          <div className="max-w-3xl">
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[#FF8A00] text-[11px] font-black tracking-[0.3em] uppercase">06 Strategic Intelligence</span>
              <div className="h-px w-10 bg-[#FF8A00]/20" />
            </m.div>
            <m.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              id="blog-heading"
              className="text-[clamp(2.5rem,7vw,7rem)] font-black tracking-tight leading-[0.95] text-white uppercase"
            >
              The <span className="italic font-light text-white/30">Think</span><br />
              Tank.
            </m.h2>
          </div>
          
          <m.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="text-white/45 text-lg max-w-[280px] leading-relaxed font-bold uppercase tracking-tight">
              Insights, stories, and growth strategies for the digital era.
            </p>
            <a href="/blogs"
              className="group flex items-center gap-4 text-white font-black text-xs tracking-[0.2em] uppercase hover:text-[#FF8A00] transition-colors">
              <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF8A00]/40 transition-colors">
                <Plus size={18} />
              </span>
              Intelligence Hub
            </a>
          </m.div>
        </div>

        {/* Clean, Massive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/[0.05] rounded-[48px] overflow-hidden bg-white/[0.01]">
          {posts.map((post, i) => (
            <m.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative flex flex-col p-10 border-white/[0.05] 
                         ${i % 3 !== 2 ? 'lg:border-r' : ''} 
                         ${i < 3 ? 'lg:border-b' : ''} 
                         ${i % 2 !== 1 ? 'md:border-r lg:md:border-r-inherit' : ''}
                         ${i < 4 ? 'md:border-b lg:md:border-b-inherit' : ''}
                         hover:bg-white/[0.02] transition-all duration-500`}
            >
              <a href={post.href} className="flex-1 flex flex-col gap-8 group">
                {/* Visual Reveal */}
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white/5 opacity-80 group-hover:opacity-100 transition-all duration-700">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Category overlay */}
                  <div className="absolute left-6 bottom-6 flex items-center gap-2 scale-90 origin-left translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="px-4 py-2 rounded-xl bg-[#FF8A00] text-white text-[10px] font-black uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Layer */}
                <div className="flex flex-col gap-5 flex-1">
                  <div className="flex items-center gap-2 text-[#FF8A00] text-[10px] font-black tracking-widest uppercase">
                    <Clock size={12} strokeWidth={3} />
                    {post.readTime}
                  </div>

                  <h3 className="text-white text-xl lg:text-2xl font-black leading-[1.2] tracking-tight group-hover:text-[#FF8A00] transition-colors duration-300 uppercase">
                    {post.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed line-clamp-3 font-medium">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/[0.05]">
                  <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[#FF8A00] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg]">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  )
}

