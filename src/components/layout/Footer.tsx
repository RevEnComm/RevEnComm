'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function IconTiktok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook',  Icon: IconFacebook,  href: 'https://www.facebook.com/revencomm' },
  { label: 'Instagram', Icon: IconInstagram, href: 'https://www.instagram.com/revencomm' },
  { label: 'LinkedIn',  Icon: IconLinkedin,  href: 'https://www.linkedin.com/company/revencomm' },
  { label: 'TikTok',   Icon: IconTiktok,    href: 'https://www.tiktok.com/@revencomm' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms/conditions' },
  { label: 'Privacy Policy',     href: '/privacy/policy' },
  { label: 'Contact Us',         href: '/contact' },
]

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/5 pt-24 pb-12 overflow-hidden bg-white/[0.01]"
      role="contentinfo"
    >
      {/* Footer Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF8A00]/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="flex flex-col gap-20 md:flex-row md:items-start md:justify-between">

          {/* Brand & Office */}
          <div className="flex flex-col gap-8 max-w-sm">
             <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#FF8A00] transition-transform group-hover:rotate-12">
                <ArrowUpRight size={16} className="text-white" />
              </div>
              <span className="font-black text-xl text-white uppercase italic tracking-tighter">
                RevEn<span className="text-[#FF8A00] not-italic">Comm</span>
              </span>
            </Link>
            
            <div className="flex flex-col gap-4">
              <p className="text-[#FF8A00] text-[10px] font-black tracking-[0.4em] uppercase">
                Strategic Base
              </p>
              <a
                href="https://maps.google.com/?q=Square+Road,+GP+Ja,+Mohakhali,+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-white/40 hover:text-white text-sm font-medium transition-all group"
              >
                <MapPin size={18} className="text-[#FF8A00] shrink-0" />
                <span className="leading-relaxed">Square Road, GP Ja, Mohakhali, Dhaka, Bangladesh</span>
              </a>
              <div className="flex flex-col gap-3 mt-2">
                <a href="tel:+8801806673304" className="flex items-center gap-4 text-white/40 hover:text-[#FF8A00] transition-colors group">
                  <Phone size={16} className="shrink-0" />
                  <span className="font-bold tracking-tight">01806673304</span>
                </a>
                <a href="mailto:info@revencomm.com" className="flex items-center gap-4 text-white/40 hover:text-[#FF8A00] transition-colors group">
                  <Mail size={16} className="shrink-0" />
                  <span className="font-bold tracking-tight">info@revencomm.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-8">
            <p className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
              Legal Governance
            </p>
            <ul className="flex flex-col gap-4">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-[#FF8A00] text-xs font-black transition-all uppercase tracking-widest hover:pl-2"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials & Copyright */}
          <div className="flex flex-col gap-8">
            <p className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
              Digital Presence
            </p>
            <div className="flex gap-3" role="list">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/5 bg-white/[0.03] flex items-center justify-center
                             text-white/20 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] rounded-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <div className="mt-12">
               <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.3em] leading-relaxed">
                © {new Date().getFullYear()} RevEnComm Media & Tech. <br/>
                Engineered for continuous growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
