'use client'

import React, { useState } from 'react'
import { m } from 'motion/react'
import { Send, CheckCircle2, Loader2, Phone, Mail, Building2, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing. Please check your environment variables.')
      alert('The contact form is currently under maintenance. Please try again later.')
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_name: 'RevEnComm Team',
        },
        publicKey
      )

      setIsSuccess(true)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Failed to send transmission. Please verify your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-[#0A0A0F] pt-32 pb-20 selection:bg-[#FF8A00]/30 selection:text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FF8A00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#FF8A00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#FF8A00] transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Base</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: Content */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#FF8A00] text-xs font-black tracking-[0.4em] uppercase">Strategic Access</span>
                <div className="h-px w-12 bg-[#FF8A00]/20" />
              </div>
              <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-black tracking-tighter text-white mb-10 leading-[0.9] uppercase">
                Let's <br/>
                <span className="italic font-light text-white/30">Scale</span> Your <br/>
                Vision.
              </h1>
              <p className="text-white/40 text-lg md:text-xl font-bold uppercase tracking-tight max-w-md leading-relaxed mb-16">
                Ready to deploy a high-performance growth engine? Tell us where you want to go.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all duration-500 shadow-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Electronic Transmission</p>
                    <p className="text-white font-black text-lg tracking-tight uppercase group-hover:text-[#FF8A00] transition-colors">growth@revencomm.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all duration-500 shadow-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Direct Secure Line</p>
                    <p className="text-white font-black text-lg tracking-tight uppercase group-hover:text-[#FF8A00] transition-colors">+880 17XX-XXXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="relative">
              <div className="bg-white/[0.01] backdrop-blur-3xl border border-white/5 rounded-[48px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                {isSuccess ? (
                  <m.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center space-y-8 py-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center text-[#FF8A00] shadow-2xl shadow-orange-500/20">
                      <CheckCircle2 size={48} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Transmission Success</h3>
                      <p className="text-white/40 text-sm font-bold uppercase tracking-widest leading-relaxed">
                        Your mission parameters have been received. <br/> Our strategy team will contact you shortly.
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-[#FF8A00] text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                      Send Another Transmission
                    </button>
                  </m.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="space-y-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Identity</label>
                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                          <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            placeholder="FULL NAME"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-14 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.05] transition-all uppercase text-sm font-bold tracking-widest"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Secure Terminal</label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                          <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            placeholder="EMAIL@DOMAIN.COM"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-14 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.05] transition-all uppercase text-sm font-bold tracking-widest"
                          />
                        </div>
                      </div>

                      {/* Phone & Company Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Direct Line</label>
                          <div className="relative">
                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <input
                              required
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="+880"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-14 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.05] transition-all text-sm font-bold tracking-widest"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Entity</label>
                          <div className="relative">
                            <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <input
                              type="text"
                              id="company"
                              name="company"
                              placeholder="COMPANY"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-14 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.05] transition-all uppercase text-sm font-bold tracking-widest"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Mission Parameters</label>
                        <textarea
                          required
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="BRIEF YOUR GROWTH GOALS..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-7 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.05] transition-all resize-none uppercase text-sm font-bold tracking-widest leading-relaxed"
                        />
                      </div>
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="group w-full bg-[#FF8A00] text-white font-black uppercase tracking-[0.3em] py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#FF9A20] transition-all shadow-2xl shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={24} />
                      ) : (
                        <>
                          <Send size={20} />
                          INITIATE DEPLOYMENT
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
