// RSC — static. No 'use client' needed.
// Social brand icons (Facebook, Instagram, etc.) are all deprecated in lucide-react v0.577.
// Using inline SVG paths for RevEnComm's actual socials instead.

import Link from 'next/link'
import { BarChart2, Mail, Phone, MapPin } from 'lucide-react'

// Inline SVG social icons — avoids deprecated lucide-react brand icons entirely
function IconFacebook() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function IconLinkedin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function IconTiktok() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', Icon: IconFacebook, href: '#' },
  { label: 'Instagram', Icon: IconInstagram, href: '#' },
  { label: 'LinkedIn', Icon: IconLinkedin, href: '#' },
  { label: 'TikTok', Icon: IconTiktok, href: '#' },
]

const links = {
  Services: [
    { label: 'Digital Marketing', href: '#services' },
    { label: 'Content Solutions', href: '#services' },
    { label: 'Website & Software', href: '#services' },
    { label: 'AI & Automation', href: '#services' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#' },
  ],
  Resources: [
    { label: 'Case Studies', href: '#' },
    { label: 'Free Consultation', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/6 pt-16 pb-8 px-5 md:px-6.25" role="contentinfo">
      <div className="max-w-350 mx-auto">

        {/* Newsletter bar */}
        <div className="bg-glass border border-white/8 rounded-[20px] px-8 py-6 flex flex-col md:flex-row
                        items-center justify-between gap-6 mb-16">
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Stay ahead of the curve</h3>
            <p className="text-white/45 text-sm">Get marketing insights and agency updates.</p>
          </div>
          <form className="flex gap-3 w-full md:w-auto" aria-label="Newsletter signup">
            <input type="email" placeholder="your@email.com" aria-label="Email address"
              className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5
                         text-white text-sm placeholder:text-white/30 outline-none
                         focus:border-primary/50 transition-colors min-h-11" />
            <button type="submit"
              className="bg-primary text-white font-semibold px-5 py-2.5 rounded-xl text-sm
                         hover:bg-primary-dark transition-colors min-h-11 whitespace-nowrap
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/"
              className="flex items-center gap-2.5 mb-5 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <BarChart2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-base">RevEn<span className="text-primary">Comm</span></span>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Transforming businesses through data-driven digital marketing, bold content,
              high-performance websites, and intelligent AI solutions.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5 mb-6">
              <a href="mailto:info@revencomm.com"
                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
                <Mail size={13} className="text-primary shrink-0" />
                info@revencomm.com
              </a>
              <a href="tel:+8801806673304"
                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
                <Phone size={13} className="text-primary shrink-0" />
                +880 1806 673304
              </a>
              <div className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin size={13} className="text-primary shrink-0 mt-0.5" />
                Square Road, GP Ja, Mohakhali, Dhaka
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5" role="list" aria-label="Social media links">
              {socials.map(({ label, Icon, href }) => (
                <a key={label} href={href} role="listitem" aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-glass flex items-center justify-center
                             text-white/40 hover:text-white hover:border-primary/40 transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">{category}</h3>
              <ul className="flex flex-col gap-3" role="list">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/6">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} RevEnComm Media & Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Terms & Conditions', 'Privacy Policy', 'Manage Cookies'].map((l) => (
              <a key={l} href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
