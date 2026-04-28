'use client'

import { m } from 'motion/react'
import { Megaphone, Check, X, ArrowUpRight, Zap, TrendingUp, BarChart3, Target, Info, Palette } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const comparisonData = [
  {
    category: 'Platform Coverage',
    features: [
      { id: 'facebook', label: 'Facebook', starter: true, growth: true, tycoon: true },
      { id: 'instagram', label: 'Instagram', starter: true, growth: true, tycoon: true },
      { id: 'linkedin', label: 'LinkedIn', starter: false, growth: true, tycoon: true },
      { id: 'youtube', label: 'YouTube', starter: false, growth: false, tycoon: true },
      { id: 'tiktok', label: 'TikTok', starter: false, growth: false, tycoon: true },
    ]
  },
  {
    category: 'Content Calendar',
    features: [
      { id: 'cal_duration', label: 'Calendar Strategy', starter: '3 Months', growth: '6 Months', tycoon: '1 Year' },
      { id: 'pieces', label: 'Content Pieces / Month', starter: '8 Pieces', growth: '10 Pieces', tycoon: '15+ Pieces' },
      { id: 'posting', label: 'Posting Schedule', starter: 'Daily', growth: 'Daily', tycoon: 'Daily + Peak' },
      { id: 'realtime', label: 'Real-time Optimization', starter: false, growth: false, tycoon: true },
      { id: 'festival_cal', label: 'Festival / Event Calendar', starter: false, growth: false, tycoon: true },
      { id: 'trending_res', label: 'Trending Content Response', starter: false, growth: false, tycoon: true },
    ]
  },
  {
    category: 'Content Type',
    features: [
      { id: 'static', label: 'Static Feed Posts', starter: true, growth: true, tycoon: true },
      { id: 'dynamic', label: 'Dynamic Reels / Video', starter: true, growth: true, tycoon: true },
      { id: 'email_content', label: 'Email Campaigns', starter: false, growth: true, tycoon: true },
      { id: 'push_sms', label: 'Push & SMS Content', starter: false, growth: false, tycoon: true },
    ]
  },
  {
    category: 'Strategy & Research',
    features: [
      { id: 'competitor_res', label: 'Competitor Research', starter: true, growth: true, tycoon: true },
      { id: 'audience_seg', label: 'Audience Segmentation', starter: true, growth: true, tycoon: true },
      { id: 'pillars', label: 'Content Pillars Development', starter: false, growth: true, tycoon: true },
      { id: 'brand_book', label: 'Brand Book & Visual Identity', starter: false, growth: false, tycoon: true },
      { id: 'guidelines', label: 'Brand Guideline Development', starter: false, growth: false, tycoon: true },
    ]
  },
  {
    category: 'Campaign & Execution',
    features: [
      { id: 'campaign_vol', label: 'Campaigns per Cycle', starter: '1 Launch', growth: '2 Seasonal', tycoon: 'Unlimited' },
      { id: 'analysis', label: 'Campaign Analysis', starter: true, growth: true, tycoon: true },
      { id: 'influencer', label: 'Influencer Campaigns', starter: false, growth: false, tycoon: true },
      { id: 'multichannel', label: 'Multi-channel Execution', starter: false, growth: false, tycoon: true },
    ]
  },
  {
    category: 'Monitoring & Reporting',
    features: [
      { id: 'monthly_rep', label: 'Monthly Performance Report', starter: true, growth: true, tycoon: true },
      { id: 'basic_analytics', label: 'Basic Analytics Summary', starter: true, growth: true, tycoon: true },
      { id: 'indepth', label: 'In-depth Content Analysis', starter: false, growth: false, tycoon: true },
      { id: 'testing', label: 'Content A/B Testing', starter: false, growth: false, tycoon: true },
    ]
  },
  {
    category: 'Management & Support',
    features: [
      { id: 'community', label: 'Community Management', starter: false, growth: true, tycoon: true },
      { id: 'consultation', label: 'Consultation Calls', starter: 'Quarterly', growth: 'Monthly', tycoon: 'Weekly' },
      { id: 'trend_sug', label: 'Trend Suggestions', starter: true, growth: true, tycoon: true },
      { id: 'creative_roadmap', label: 'Creative Roadmap', starter: false, growth: false, tycoon: true },
      { id: 'strat_meeting', label: 'Strategy Review Meeting', starter: 'Bi-Quarterly', growth: 'Quarterly', tycoon: 'Monthly' },
    ]
  }
]

const packages = [
  {
    name: 'Starter',
    id: 'starter',
    price: 'Custom',
    desc: 'Foundational content for emerging brands.',
    bestFor: 'New Social Presence',
    icon: Zap,
    accent: '#E879F9',
  },
  {
    name: 'Growth',
    id: 'growth',
    price: 'Custom',
    desc: 'Advanced storytelling to drive engagement and sales.',
    bestFor: 'Growing Communities',
    icon: TrendingUp,
    accent: '#38BDF8',
    popular: true,
  },
  {
    name: 'Tycoon',
    id: 'tycoon',
    price: 'Custom',
    desc: 'Elite omnichannel content mastery for industry leaders.',
    bestFor: 'Market Domination',
    icon: BarChart3,
    accent: '#8B5CF6',
  },
]

export default function ContentSolutionPage() {
  const [activeMobileTab, setActiveMobileTab] = useState('growth')

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pt-24 pb-20 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E879F9]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#38BDF8]/10 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        {/* Breadcrumb */}
        <m.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-white/40 text-sm mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white font-medium">Content Solution</span>
        </m.div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16 lg:mb-24 text-center lg:text-left">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#E879F9]/20 flex items-center justify-center border border-[#E879F9]/30">
                <Palette size={20} className="text-[#E879F9]" />
              </div>
              <span className="text-[#E879F9] font-bold tracking-widest uppercase text-xs">Premium Content Strategy</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
              Narrative <br />
              <span className="text-white/20 italic font-light">that Converts.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Content is no longer just "posts." It's your brand's digital soul. Compare our content tiers to find the perfect narrative scale for your business.
            </p>
          </m.div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch mb-24">
          {packages.map((pkg, i) => (
            <m.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-[48px] border transition-all duration-500 group ${
                pkg.popular 
                  ? 'bg-white/[0.05] border-[#38BDF8]/40 shadow-[0_30px_100px_-20px_rgba(56,189,248,0.3)] z-20 scale-[1.03]' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              <div className="p-12 flex flex-col h-full">
                <div className="mb-10 flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${pkg.accent}20`, border: `1px solid ${pkg.accent}30` }}
                  >
                    <pkg.icon size={28} style={{ color: pkg.accent }} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black leading-none mb-1">{pkg.name}</h3>
                    <div className="text-4xl font-black mt-2">{pkg.price}</div>
                  </div>
                </div>

                <div className="space-y-12 flex-1">
                  {comparisonData.map((cat) => (
                    <div key={cat.category} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E879F9] whitespace-nowrap">
                          {cat.category}
                        </span>
                        <div className="h-[1px] w-full bg-white/5" />
                      </div>
                      <div className="grid gap-3">
                        {cat.features.map((feat) => {
                          const val = (feat as any)[pkg.id]
                          return <FeatureItem key={feat.id} label={feat.label} value={val} />
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-3 w-full py-5 rounded-[24px] font-black uppercase tracking-widest text-xs transition-all duration-300 ${
                      pkg.popular ? 'bg-white text-black' : 'bg-white/5 text-white border border-white/10'
                    }`}
                  >
                    Select Plan
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden mb-20 space-y-8">
          <div className="sticky top-20 z-50 p-1 bg-[#0A0A0F]/80 backdrop-blur-2xl border border-white/5 rounded-[24px] flex">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActiveMobileTab(pkg.id)}
                className={`flex-1 py-4 rounded-[20px] text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeMobileTab === pkg.id 
                    ? 'bg-white text-black shadow-lg scale-[1.02]' 
                    : 'text-white/40'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>

          <div className="space-y-6">
             {comparisonData.map((cat) => (
               <div key={cat.category} className="rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden">
                 <div className="px-8 py-6 bg-white/[0.03] border-b border-white/5">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E879F9]">
                     {cat.category}
                   </h3>
                 </div>
                 <div className="p-4 space-y-2">
                    {cat.features.map((feat) => {
                      const val = (feat as any)[activeMobileTab]
                      return (
                        <div key={feat.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                          <span className="text-[11px] text-white/50 pr-4 leading-snug">{feat.label}</span>
                          <div className="shrink-0">
                            <FeatureItem value={val} mobile />
                          </div>
                        </div>
                      )
                    })}
                 </div>
               </div>
             ))}
          </div>

          <div className="pt-8">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-4 w-full py-6 rounded-[32px] bg-[#E879F9] text-white font-black uppercase tracking-widest text-xs shadow-[0_20px_40px_-10px_rgba(232,121,249,0.5)]"
            >
              Get Started with {packages.find(p => p.id === activeMobileTab)?.name}
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        {/* Private Quote Section */}
        <div className="relative rounded-[40px] lg:rounded-[48px] border border-white/5 bg-white/[0.01] p-10 lg:p-20 overflow-hidden text-center lg:text-left">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#E879F9]/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-6xl font-black mb-6">Visual Identity <br className="hidden lg:block"/> Redefined.</h2>
              <p className="text-base text-white/40 leading-relaxed">
                Need a full brand rebirth? From logo design to 4K cinematic production, we offer custom visual packages that redefine your market presence.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="group flex items-center gap-6 bg-white text-black font-black pl-8 lg:pl-10 pr-3 py-3 rounded-full transition-transform hover:scale-105 active:scale-95"
            >
              <span className="text-[10px] lg:text-[12px] uppercase tracking-[0.2em]">Request Visual Quote</span>
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-black rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ label, value, mobile = false }: { label?: string, value: any, mobile?: boolean }) {
  const isIncluded = value !== false
  const isBool = typeof value === 'boolean'

  return (
    <div className={`flex items-center justify-between group/row ${isIncluded ? 'opacity-100' : 'opacity-20'}`}>
      {label && <span className="text-[12px] font-medium text-white/60 leading-tight pr-4">{label}</span>}
      
      <div className="flex items-center gap-2">
        {isBool ? (
          isIncluded ? (
            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
              <Check size={10} className="text-green-500" />
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <X size={10} className="text-white/40" />
            </div>
          )
        ) : (
          <span className={`${mobile ? 'text-[9px]' : 'text-[10px]'} font-black text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10 shadow-sm whitespace-nowrap`}>
            {value}
          </span>
        )}
      </div>
    </div>
  )
}
