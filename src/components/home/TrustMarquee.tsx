// RSC — no 'use client'. Pure CSS animation, zero JS overhead.
// CSS marquee runs on the compositor thread (transform-based).

const brands = [
  'Chileghuri',
  'Organic',
  'eSolution',
  'RevEnComm',
  'Brand Promotion',
  'Social Media',
  'Website Solution',
  'Landing Pages',
  'Data-Driven Marketing',
  'Creative Strategy',
  'AI & Automation',
  'Business Growth',
]

function BrandList({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex gap-12 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      style={{ willChange: 'transform' }}
    >
      {brands.map((brand) => (
        <span
          key={brand}
          className="text-white/25 text-sm font-semibold tracking-widest uppercase whitespace-nowrap
                     hover:text-white/50 transition-colors duration-300 cursor-default"
        >
          {brand}
        </span>
      ))}
    </div>
  )
}

export default function TrustMarquee() {
  return (
    <section className="py-12 border-y border-white/[0.06] overflow-hidden" aria-label="Trusted by leading companies">
      <div className="mb-3">
        <p className="text-center text-white/25 text-xs tracking-[0.25em] uppercase mb-8">
          Our Happy Partners
        </p>
        {/* Row 1 — left to right */}
        <div
          className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-hidden="true"
        >
          <BrandList />
          {/* Duplicate for seamless loop */}
          <BrandList />
        </div>
      </div>
    </section>
  )
}
