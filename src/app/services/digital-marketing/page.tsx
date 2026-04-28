'use client'

import { m, AnimatePresence } from 'motion/react'
import { Megaphone, Check, X, ArrowUpRight, Zap, TrendingUp, BarChart3, Target, Info, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const comparisonData = [
  {
    category: 'Campaign Planning & Strategy',
    features: [
      { id: 'audience', label: 'Audience Research, Market & Analysis', starter: true, growth: true, premium: true },
      { id: 'budget', label: 'Budget Allocation (based on platform)', starter: true, growth: true, premium: true },
      { id: 'funnel', label: 'Funnel Mapping', starter: true, growth: true, premium: true },
      { id: 'planning', label: 'Campaign Planning', starter: true, growth: true, premium: true },
      { id: 'competitor_anal', label: 'Competitor Analysis', starter: false, growth: true, premium: true },
      { id: 'scaling_plan', label: 'Scaling Plan', starter: false, growth: false, premium: true },
    ]
  },
  {
    category: 'Ad Setup & Execution',
    features: [
      { id: 'volume', label: 'Ad Volume', starter: 'Up to 10 Campaign (15 ads)', growth: 'Up to 15 Campaign (20 ads)', premium: 'Up to 20 Campaign (25 ads)' },
    ]
  },
  {
    category: 'Campaign Types',
    features: [
      { id: 'awareness', label: 'Awareness', starter: true, growth: true, premium: true },
      { id: 'traffic', label: 'Traffic', starter: true, growth: true, premium: true },
      { id: 'engagement', label: 'Engagement', starter: true, growth: true, premium: true },
      { id: 'leads', label: 'Leads', starter: true, growth: true, premium: true },
      { id: 'app_promo', label: 'App Promotion', starter: false, growth: false, premium: true },
      { id: 'sales', label: 'Sales', starter: false, growth: true, premium: true },
    ]
  },
  {
    category: 'Tracking',
    features: [
      { id: 'pixel_ga4', label: 'Pixel, GTM & GA4 Tracking Integration', starter: false, growth: true, premium: true },
      { id: 'capi', label: 'Conversion API (CAPI) Setup', starter: false, growth: false, premium: true },
      { id: 'segmentation', label: 'Data Segmentation & Optimization', starter: false, growth: false, premium: true },
      { id: 'retargeting', label: 'Full Retargeting & Remarketing Setup', starter: true, growth: true, premium: true },
    ]
  },
  {
    category: 'Optimization & Reporting',
    features: [
      { id: 'reports', label: 'Ad Performance Reports (Monthly)', starter: true, growth: true, premium: true },
      { id: 'insight', label: 'Basic Audience Insight Analysis', starter: true, growth: true, premium: true },
      { id: 'weekly_review', label: 'Weekly Performance Review', starter: false, growth: false, premium: true },
      { id: 'ab_testing', label: 'A/B Testing', starter: false, growth: true, premium: true },
    ]
  },
  {
    category: 'Creative & Consultation Support',
    features: [
      { id: 'creative_sug', label: 'Creative Suggestions', starter: true, growth: true, premium: true },
      { id: 'consultation', label: 'Monthly Consultation Call', starter: false, growth: true, premium: true },
      { id: 'roadmap', label: 'Creative Content Roadmap', starter: false, growth: false, premium: true },
      { id: 'feedback', label: 'Basic Feedback on Contents', starter: true, growth: true, premium: true },
      { id: 'competitor_creative', label: 'Competitor Creative Analysis', starter: false, growth: true, premium: true },
    ]
  },
  {
    category: 'Additional Responsibilities',
    features: [
      { id: 'breakdown', label: 'Monthly Lead & Sale Breakdown', starter: true, growth: true, premium: true },
      { id: 'pitching', label: 'Idea Pitching Support', starter: false, growth: false, premium: true },
      { id: 'festival', label: 'Festival Campaign Planning', starter: false, growth: false, premium: true },
      { id: 'trend', label: 'Trend Integration Plan', starter: false, growth: true, premium: true },
      { id: 'landing_audit', label: 'Landing Page Audit Support', starter: false, growth: false, premium: true },
      { id: 'roas_mon', label: 'ROAS Monitoring & Budget Recommendation', starter: false, growth: true, premium: true },
      { id: 'growth_audit', label: 'Quarterly Growth Audit', starter: false, growth: false, premium: true },
    ]
  }
]

const packages = [
  {
    name: 'Starter',
    id: 'starter',
    price: 'Custom',
    desc: 'Building awareness.',
    icon: Zap,
    accent: '#8B5CF6',
  },
  {
    name: 'Growth',
    id: 'growth',
    price: 'Custom',
    desc: 'Scaling ROI.',
    icon: TrendingUp,
    accent: '#38BDF8',
    popular: true,
  },
  {
    name: 'Premium',
    id: 'premium',
    price: 'Custom',
    desc: 'Market Domination.',
    icon: BarChart3,
    accent: '#E879F9',
  },
]

export default function DigitalMarketingPage() {
  const [activeMobileTab, setActiveMobileTab] = useState('growth')

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pt-24 pb-20 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#8B5CF6]/10 rounded-full blur-[120px]" />
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
          <span className="text-white font-medium">Digital Marketing</span>
        </m.div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12 lg:mb-24 text-center lg:text-left">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center border border-[#8B5CF6]/30">
                <Megaphone size={20} className="text-[#8B5CF6]" />
              </div>
              <span className="text-[#8B5CF6] font-bold tracking-widest uppercase text-xs">Strategy Matrix</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
              Performance <br />
              <span className="text-white/20 italic font-light">Comparison.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Detailed breakdown of our media buying strategy. Compare plans to find your perfect growth trajectory.
            </p>
          </m.div>
        </div>

        {/* Desktop View (Standard Grid) - Hidden on Mobile */}
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
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B5CF6] whitespace-nowrap">
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

        {/* Mobile Comparative Optimization */}
        <div className="lg:hidden mb-20 space-y-8">
          {/* Mobile Tab Switcher */}
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

          {/* Feature Comparison (Accordion Style for Categories) */}
          <div className="space-y-6">
             {comparisonData.map((cat) => (
               <div key={cat.category} className="rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden">
                 <div className="px-8 py-6 bg-white/[0.03] border-b border-white/5">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B5CF6]">
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

          {/* Final Call to Action */}
          <div className="pt-8">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-4 w-full py-6 rounded-[32px] bg-[#8B5CF6] text-white font-black uppercase tracking-widest text-xs shadow-[0_20px_40px_-10px_rgba(139,92,246,0.5)]"
            >
              Get Started with {packages.find(p => p.id === activeMobileTab)?.name}
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        {/* Global Strategy Footer */}
        <div className="relative rounded-[40px] lg:rounded-[48px] border border-white/5 bg-white/[0.01] p-10 lg:p-20 overflow-hidden text-center lg:text-left">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#8B5CF6]/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-6xl font-black mb-6">Strategy Beyond <br className="hidden lg:block"/> Packages.</h2>
              <p className="text-base text-white/40 leading-relaxed">
                If your business requires a multi-million dollar scale or highly specific omnichannel integration, we craft dedicated private strategies.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="group flex items-center gap-6 bg-white text-black font-black pl-8 lg:pl-10 pr-3 py-3 rounded-full transition-transform hover:scale-105 active:scale-95"
            >
              <span className="text-[10px] lg:text-[12px] uppercase tracking-[0.2em]">Request Private Quote</span>
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
            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
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
