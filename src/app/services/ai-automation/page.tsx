'use client'

import { m } from 'motion/react'
import { Megaphone, Check, X, ArrowUpRight, Zap, TrendingUp, BarChart3, Bot, Sparkles, Brain, Cpu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const comparisonData = [
  {
    category: 'Social Media Automation',
    features: [
      { id: 'fb_ig', label: 'FB & Instagram Integration', social: true, rag: false, personal: false },
      { id: 'linkedin', label: 'LinkedIn Company Automation', social: true, rag: false, personal: false },
      { id: 'twitter', label: 'Twitter/X API Integration', social: true, rag: false, personal: false },
      { id: 'scheduling', label: 'Scheduled Content Publishing', social: true, rag: false, personal: false },
      { id: 'multi_post', label: 'Multi-Platform Cross Posting', social: true, rag: false, personal: false },
      { id: 'auto_reply', label: 'Auto-Reply to Comments & DMs', social: true, rag: true, personal: false },
      { id: 'lead_handle', label: 'Lead Capture & Automated Handling', social: true, rag: true, personal: true },
    ]
  },
  {
    category: 'AI Chatbot & RAG Solutions',
    features: [
      { id: 'docs', label: 'Document Upload & Processing', social: false, rag: true, personal: true },
      { id: 'indexing', label: 'Website Content Indexing', social: false, rag: true, personal: true },
      { id: 'db_conn', label: 'Database & API Connection', social: false, rag: true, personal: true },
      { id: 'rag_impl', label: 'Full RAG (Retrieval Augmented Gen)', social: false, rag: true, personal: true },
      { id: 'vector_db', label: 'Pinecone Vector Database Setup', social: false, rag: true, personal: true },
      { id: 'multilingual', label: 'Multi-Language Global Support', social: true, rag: true, personal: true },
      { id: 'auto_suite', label: 'Full Business Automation Suite', social: false, rag: true, personal: true },
    ]
  },
  {
    category: 'Personal AI Agent',
    features: [
      { id: 'gmail', label: 'Gmail Inbox Management', social: false, rag: false, personal: true },
      { id: 'categorization', label: 'Smart Email Categorization', social: false, rag: false, personal: true },
      { id: 'drafting', label: 'AI Auto-Draft Responses', social: false, rag: true, personal: true },
      { id: 'calendar', label: 'Calendar Event Scheduling', social: false, rag: false, personal: true },
      { id: 'conflict', label: 'Meeting Conflict Resolution', social: false, rag: false, personal: true },
      { id: 'crm_sync', label: 'CRM Synchronization', social: true, rag: true, personal: true },
      { id: 'secretary', label: 'Personal AI Executive Secretary', social: false, rag: false, personal: true },
    ]
  }
]

const packages = [
  {
    name: 'Social Auto',
    id: 'social',
    price: 'Custom',
    desc: 'Autonomous social presence and engagement.',
    bestFor: 'Brand Engagement',
    icon: Sparkles,
    accent: '#2DD4BF',
  },
  {
    name: 'AI & RAG',
    id: 'rag',
    price: 'Custom',
    desc: 'Enterprise knowledge-base and advanced chatbots.',
    bestFor: 'Data Mastery',
    icon: Brain,
    accent: '#8B5CF6',
    popular: true,
  },
  {
    name: 'Personal Agent',
    id: 'personal',
    price: 'Custom',
    desc: 'Bespoke AI secretary for executive productivity.',
    bestFor: 'Elite Efficiency',
    icon: Cpu,
    accent: '#E879F9',
  },
]

export default function AiAutomationPage() {
  const [activeMobileTab, setActiveMobileTab] = useState('rag')

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pt-24 pb-20 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#2DD4BF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#8B5CF6]/10 rounded-full blur-[120px]" />
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
          <span className="text-white font-medium">AI & Automation</span>
        </m.div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16 lg:mb-24 text-center lg:text-left">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/20 flex items-center justify-center border border-[#2DD4BF]/30">
                <Bot size={20} className="text-[#2DD4BF]" />
              </div>
              <span className="text-[#2DD4BF] font-bold tracking-widest uppercase text-xs">Intelligence at Scale</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
              Future <br />
              <span className="text-white/20 italic font-light">is Autonomous.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop managing tasks. Start managing systems. Our AI tiers bring enterprise-grade intelligence to your daily workflows.
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
                  ? 'bg-white/[0.05] border-[#8B5CF6]/40 shadow-[0_30px_100px_-20px_rgba(139,92,246,0.3)] z-20 scale-[1.03]' 
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
                    <h3 className="text-2xl font-black leading-none mb-1">{pkg.name}</h3>
                    <div className="text-4xl font-black mt-2">{pkg.price}</div>
                  </div>
                </div>

                <div className="space-y-12 flex-1">
                  {comparisonData.map((cat) => (
                    <div key={cat.category} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2DD4BF] whitespace-nowrap">
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
                    Deploy Intelligence
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
                   <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2DD4BF]">
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
              className="flex items-center justify-center gap-4 w-full py-6 rounded-[32px] bg-[#2DD4BF] text-white font-black uppercase tracking-widest text-xs shadow-[0_20px_40px_-10px_rgba(45,212,191,0.5)]"
            >
              Get Started with {packages.find(p => p.id === activeMobileTab)?.name}
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        {/* AI Consultation Section */}
        <div className="relative rounded-[40px] lg:rounded-[48px] border border-white/5 bg-white/[0.01] p-10 lg:p-20 overflow-hidden text-center lg:text-left">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#2DD4BF]/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-6xl font-black mb-6">AI Strategy <br className="hidden lg:block"/> Audit.</h2>
              <p className="text-base text-white/40 leading-relaxed">
                Not sure where to start? We provide a comprehensive AI Audit to identify automation bottlenecks and efficiency opportunities within your current organization.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="group flex items-center gap-6 bg-white text-black font-black pl-8 lg:pl-10 pr-3 py-3 rounded-full transition-transform hover:scale-105 active:scale-95"
            >
              <span className="text-[10px] lg:text-[12px] uppercase tracking-[0.2em]">Request AI Audit</span>
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
