"use client";

import { useRef, useMemo, memo } from "react";
import {
  m,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { Megaphone, Palette, Globe, Bot, LucideIcon } from "lucide-react";

interface Service {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  subServices: string[];
  tags: string[];
}

interface ServiceCardWrapperProps {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const SERVICES: Service[] = [
  {
    number: "01",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "We create strategic campaigns, engaging content, and targeted ads that make your brand memorable and influential. If you want more visibility, more customers, and faster growth, we're ready to deliver results.",
    subServices: [
      "Brand Promotion",
      "Facebook Ads",
      "Google Ads",
      "TikTok Ads",
      "LinkedIn Ads",
      "Copywriting",
      "Social Media Marketing",
      "Email Marketing",
    ],
    tags: ["Campaigns", "Social Media", "Data-Driven", "Ads"],
  },
  {
    number: "02",
    icon: Palette,
    title: "Content Solution",
    description:
      "We believe your brand is more than a logo. We design strategic visual identities, high-impact social media visuals, and professional communication materials that build authority and credibility.",
    subServices: [
      "Logo & Brand Design",
      "Social Media & Ad Design",
      "Business & Marketing Materials",
    ],
    tags: ["Brand Identity", "Social Creatives", "Marketing Assets"],
  },
  {
    number: "03",
    icon: Globe,
    title: "Website & Software",
    description:
      "Create responsive, conversion-focused websites and portfolios that support your campaigns, showcase your offer clearly, and make it easy for customers to take action.",
    subServices: [
      "E-commerce Website Development",
      "Landing Page Design",
      "Portfolio Website",
      "Custom Web Applications",
    ],
    tags: ["E-Commerce", "Landing Pages", "UX", "Conversion"],
  },
  {
    number: "04",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Our solutions act as your 24/7 smart team\u2014deploying intelligent chatbots, automating lead collection, and creating content efficiently so you can focus on scaling.",
    subServices: [
      "Social Media Automation",
      "AI Chatbot & RAG Solutions",
      "Personal AI Agent",
    ],
    tags: ["Automation", "RAG", "AI Agent", "Efficiency"],
  },
];

const STACK_END = 0.85;
const ENTRANCE_OVERLAP = 0.06;

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const SCROLL_VH_PER_CARD = 120;
  const sectionHeight = `${SERVICES.length * SCROLL_VH_PER_CARD + 100}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  const contentExitY = useTransform(smoothProgress, [0.97, 1], ["0%", "-80%"]);

  return (
    <section
      ref={containerRef}
      id="services"
      style={{ height: sectionHeight }}
      className="relative z-30 pt-[clamp(80px,10vw,180px)] pb-24 px-5 md:px-10"
      aria-labelledby="services-heading"
    >
      <span
        className="absolute right-10 top-10 font-black text-white/[0.01] select-none pointer-events-none leading-none text-[clamp(100px,15vw,250px)]"
        aria-hidden="true"
      >
        03
      </span>

      <div className="absolute left-[40px] md:left-[80px] top-0 bottom-0 w-px bg-white/[0.03] z-0" />

      <m.div
        style={{ y: contentExitY }}
        className="max-w-[1400px] mx-auto relative z-10 h-full will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start h-full">
          <div className="lg:sticky lg:top-32 self-start ml-4 md:ml-12">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#FF8A00] text-[11px] font-black tracking-[0.3em] uppercase">
                  03 Strategic Services
                </span>
                <div className="h-px w-10 bg-[#FF8A00]/20" />
              </div>

              <h2
                id="services-heading"
                className="text-[clamp(2.5rem,5.5vw,5rem)] font-black tracking-tighter leading-[0.95] mb-8 text-white uppercase"
              >
                Systems{" "}
                <span className="italic font-light text-white/30">Built</span>{" "}
                <br />
                For <span className="text-gradient">Growth.</span>
              </h2>

              <p className="text-[clamp(1rem,1.2vw,1.15rem)] text-white/40 leading-relaxed mb-12 max-w-sm font-bold uppercase tracking-tight">
                We build practical digital systems for businesses that want
                stronger visibility, better conversion, and measurable growth.
              </p>

              <div className="flex flex-col gap-8">
                <m.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-6 bg-white text-black font-black pl-8 pr-2 py-2 rounded-full min-h-[64px] cursor-pointer w-fit"
                >
                  <span className="text-[12px] uppercase tracking-[0.2em]">
                    Book Strategy Call
                  </span>
                  <span className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-45">
                    <Megaphone size={18} className="text-white" />
                  </span>
                </m.a>

                <div className="flex items-center gap-4 text-[#FF8A00] font-black text-[10px] uppercase tracking-[0.3em]">
                  <span>Explore Our Pillars</span>
                  <m.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-px bg-[#FF8A00]"
                  />
                </div>
              </div>
            </m.div>
          </div>

          <div className="relative space-y-0 h-full">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={i}
                total={SERVICES.length}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </m.div>
    </section>
  );
}

const ServiceCard = memo(function ServiceCard({
  service,
  index,
  total,
  progress,
}: ServiceCardWrapperProps) {
  const isLast = index === total - 1;

  const { entranceStart, entranceEnd, exitStart, exitEnd } = useMemo(() => {
    const step = STACK_END / total;
    const slotStart = index * step;
    const slotEnd = slotStart + step;

    const entranceStart =
      index === 0 ? 0 : Math.max(0, slotStart - ENTRANCE_OVERLAP);
    const entranceEnd = slotEnd;

    const exitStart = slotEnd;
    const exitEnd = isLast ? 1 : slotEnd + step;

    return { entranceStart, entranceEnd, exitStart, exitEnd };
  }, [index, total, isLast]);

  const y = useTransform(
    progress,
    [entranceStart, entranceEnd],
    ["75vh", "0vh"],
  );

  const scale = useTransform(
    progress,
    [exitStart, exitEnd],
    [1, 0.92],
  );
  const opacity = useTransform(progress, [exitStart, exitEnd], [1, 0.35]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center pointer-events-none px-4 md:px-0">
      <m.div
        style={{
          y,
          scale: isLast ? undefined : scale,
          opacity: isLast ? undefined : opacity,
          zIndex: index,
        }}
        className="w-full pointer-events-auto rounded-[32px] md:rounded-[48px] border border-white/[0.08] p-6 md:p-12 lg:p-16
                   bg-[#0F0F16]/98 shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.8)]
                   origin-top relative overflow-hidden group/card will-change-[transform,opacity]"
      >
        <span
          className="absolute -right-4 -bottom-10 font-black text-white/[0.015] select-none pointer-events-none leading-none
                     text-[clamp(120px,20vw,300px)] transition-colors duration-700 group-hover/card:text-[#FF8A00]/[0.03]"
          aria-hidden="true"
        >
          {service.number}
        </span>

        <div className="flex flex-col h-full justify-between relative z-10">
          <div>
            <div className="flex items-center gap-5 md:gap-8 mb-6 md:mb-10">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-[20px] md:rounded-[28px] bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center shrink-0 transition-all duration-500 group-hover/card:bg-[#FF8A00]/20 group-hover/card:scale-110">
                <service.icon size={32} className="text-[#FF8A00]" />
              </div>
              <div>
                <span className="text-[#FF8A00] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                  Capabilities {service.number}
                </span>
                <h3 className="text-white font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-white/50 leading-relaxed mb-8 md:mb-12 text-base md:text-xl font-medium max-w-2xl">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-4">
              {service.subServices.map((sub) => (
                <div
                  key={sub}
                  className="flex items-center gap-3 text-[11px] md:text-xs text-white/40 font-black uppercase tracking-[0.15em] group/item"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]/30 group-hover/item:bg-[#FF8A00] transition-all duration-300" />
                  {sub}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-2 md:gap-3">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.03]
                           text-white/20 text-[9px] font-black tracking-widest uppercase hover:border-[#FF8A00]/30 hover:text-white/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </m.div>
    </div>
  );
});
