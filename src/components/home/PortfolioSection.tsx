"use client";
// 'use client' — dynamically imported. Spring hover, gradient border card trick.

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { m, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight, TrendingUp, PhoneCall, PlayCircle } from "lucide-react";

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUHCP/EACIQAAICAQQDAQAAAAAAAAAAAAECAwQREiExBRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/9oD6BAAALYA8Vr2ysF3d6YoCJJHI2yR3JP6KKA/9k=";

const projects = [
  {
    id: "01",
    client: "Genesis Web3",
    year: "2024",
    impact: "+240% ROI",
    title: "Grow Maker NFT Ecosystem",
    category: "Digital Marketing",
    tags: ["Web3", "Growth"],
    description:
      "Architecting a high-conversion Web3 ecosystem for the next generation of digital assets.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    href: "/case-studies/grow-maker-nft",
  },
  {
    id: "02",
    client: "EcoMarket Inc.",
    year: "2024",
    impact: "1.2M+ Reach",
    title: "Organic E-commerce Growth",
    category: "Website Solution",
    tags: ["UI/UX", "Conversion"],
    description:
      "Scaling organic traffic and conversion rates through data-driven user experience design.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
    href: "/case-studies",
  },
  {
    id: "03",
    client: "Stellar Content",
    year: "2023",
    impact: "45% CR Up",
    title: "Content Solution Strategy",
    category: "Content Solution",
    tags: ["Creative", "Copy"],
    description:
      "Developing high-impact content strategies that cut through the noise and drive engagement.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    href: "/case-studies",
  },
  {
    id: "04",
    client: "Nexus AI",
    year: "2024",
    impact: "Automated 80%",
    title: "AI Automation Prototype",
    category: "AI & Automation",
    tags: ["Workflow", "RAG"],
    description:
      "Leveraging Large Language Models to automate complex enterprise workflows and decision-making.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    href: "/case-studies",
  },
  {
    id: "05",
    client: "Velocity Ads",
    year: "2024",
    impact: "$2.5M Revenue",
    title: "Performance Marketing Sprint",
    category: "Digital Marketing",
    tags: ["ROI", "Ads"],
    description:
      "Aggressive multi-channel performance marketing to achieve rapid ROI and market penetration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    href: "/case-studies",
  },
  {
    id: "06",
    client: "LeadForge",
    year: "2023",
    impact: "+65% Leads",
    title: "Strategic Landing System",
    category: "Website Solution",
    tags: ["Lead Gen", "Optimization"],
    description:
      "Engineering landing pages that convert cold traffic into loyal brand advocates.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    href: "/case-studies",
  },
];

const CARD_SHAPES = [
  "rounded-tl-[60px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[15px]",
  "rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[15px] rounded-br-[15px]",
  "rounded-t-[80px] rounded-b-[15px]",
  "rounded-tl-[60px] rounded-br-[60px] rounded-tr-[15px] rounded-bl-[15px]",
  "rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[60px]",
  "rounded-[40px]",
];

export default function PortfolioSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  // RESPONSIVE STOP POINTS
  // Mobile needs a much further scroll (-85%) because the track is
  // dominated by the project cards relative to the CTA.
  const xValue = isMobile ? "-85.5%" : "-71%";
  const x = useTransform(smoothProgress, [0.3, 0.75], ["0%", xValue]);

  const trackY = useTransform(smoothProgress, [0.9, 1], ["0%", "-100%"]);

  const headerOpacity = useTransform(smoothProgress, [0.22, 0.35], [1, 0]);
  const headerY = useTransform(smoothProgress, [0.22, 0.35], [0, -40]);

  const contentOpacity = useTransform(smoothProgress, [0, 0.25], [0, 1]);
  const contentY = useTransform(smoothProgress, [0, 0.25], ["20%", "0%"]);
  const contentBlur = useTransform(
    smoothProgress,
    [0, 0.25],
    ["blur(15px)", "blur(0px)"],
  );
  const rotateX = useTransform(smoothProgress, [0, 0.25], [10, 0]);
  const contentScale = useTransform(smoothProgress, [0, 0.25], [0.95, 1]);

  return (
    <section
      id="portfolio"
      ref={targetRef}
      className="relative h-[500vh] md:h-[600vh] z-20 bg-transparent"
      aria-labelledby="portfolio-heading"
      style={{ perspective: "2000px" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden px-5 md:px-[25px]">
        {/* Watermark */}
        <m.span
          style={{ opacity: headerOpacity }}
          className="absolute left-6 top-32 font-black text-white/[0.015] select-none pointer-events-none leading-none
                       text-[clamp(60px,12vw,160px)] z-10"
          aria-hidden="true"
        >
          02
        </m.span>

        {/* --- EDITORIAL HEADER --- */}
        <m.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-20 md:top-32 left-0 right-0 max-w-[1400px] w-full mx-auto px-5 md:px-[25px] z-50 pointer-events-none"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 pointer-events-auto">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-[#FF8A00] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
                  02 Success Matrices
                </span>
                <div className="h-px w-8 md:w-12 bg-[#FF8A00]/20" />
              </div>

              <h2
                id="portfolio-heading"
                className="text-[clamp(2rem,5vw,5rem)] font-black tracking-tighter leading-[1.1] text-white uppercase mb-4 md:mb-6"
              >
                Selected <br />{" "}
                <span className="italic font-light text-white/30">
                  Strategic
                </span>{" "}
                Works.
              </h2>
            </div>

            <div className="max-w-md md:text-right flex flex-col md:items-end">
              <p className="text-white/40 text-xs md:text-base font-medium leading-relaxed mb-4 md:mb-6">
                From high-conversion e-commerce systems to bleeding-edge AI
                automation, we build digital assets that dominate their niche.
              </p>
              <div className="flex items-center gap-4 text-[#FF8A00] font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
                <span>Scroll to Explore</span>
                <m.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-8 md:w-12 h-px bg-[#FF8A00]"
                />
              </div>
            </div>
          </div>
        </m.div>

        {/* --- MAIN CARDS TRACK --- */}
        <m.div
          style={{
            opacity: contentOpacity,
            y: trackY,
            filter: contentBlur,
            rotateX,
            scale: contentScale,
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 flex flex-col justify-center overflow-visible px-5 md:px-[25px] py-12 md:py-24 z-30"
        >
          <div className="max-w-[1400px] w-full mx-auto">
            <m.div
              style={{ x, y: contentY }}
              className="flex gap-6 md:gap-10 w-max items-center"
            >
              {projects.map((project, index) => {
                const shapeClass = CARD_SHAPES[index % CARD_SHAPES.length];
                return (
                  <m.div
                    key={project.id}
                    whileHover="hover"
                    className={`group cursor-pointer w-[80vw] sm:w-[480px] shrink-0 bg-[#0A0A0F] border border-white/5 transition-all duration-500 hover:border-[#FF8A00]/40 overflow-hidden ${shapeClass}`}
                  >
                    <a
                      href={project.href}
                      className="flex flex-col h-full focus:outline-none relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A00]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                      <div className="relative overflow-hidden w-full aspect-[4/3] rounded-b-[30px] md:rounded-b-[40px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 80vw, 480px"
                          className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                          placeholder="blur"
                          blurDataURL={BLUR_DATA}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-90 transition-opacity duration-300" />

                        <div className="absolute top-6 md:top-8 left-6 md:left-8 right-6 md:right-8 z-20 flex justify-between items-start">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#FF8A00] animate-pulse" />
                            <span className="text-[#FF8A00] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                              {project.category}
                            </span>
                          </div>

                          <m.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="px-3 md:px-4 py-1.5 md:py-2 bg-[#FF8A00] text-white rounded-lg md:rounded-xl flex items-center gap-2 shadow-xl"
                          >
                            <TrendingUp
                              size={12}
                              className="md:w-[14px]"
                              strokeWidth={3}
                            />
                            <span className="text-[8px] md:text-[10px] font-black uppercase">
                              {project.impact}
                            </span>
                          </m.div>
                        </div>

                        <m.div
                          variants={{
                            hover: { scale: 1, opacity: 1, x: 0, y: 0 },
                          }}
                          initial={{ scale: 0.8, opacity: 0, x: 20, y: -20 }}
                          className="absolute top-16 md:top-20 right-6 md:right-8 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full flex items-center justify-center z-20 shadow-2xl"
                        >
                          <ArrowUpRight size={18} className="text-black" />
                        </m.div>
                      </div>

                      <div className="px-6 md:px-10 py-8 md:py-12 flex-1 flex flex-col justify-between relative z-20 group-hover:bg-white/[0.02] transition-colors duration-500">
                        <div className="absolute right-4 md:right-6 bottom-4 flex flex-col items-end pointer-events-none select-none">
                          <span className="text-white/[0.05] font-black text-[10px] uppercase tracking-widest mb-1 md:mb-2 group-hover:text-[#FF8A00]/20 transition-colors">
                            {project.year}
                          </span>
                          <span className="text-[60px] md:text-[120px] font-black text-white/[0.02] group-hover:text-[#FF8A00]/[0.05] transition-colors duration-500 leading-none">
                            {project.id}
                          </span>
                        </div>

                        <div className="relative">
                          <span className="text-white/20 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-1 md:mb-2 block group-hover:text-[#FF8A00]/60 transition-colors">
                            {project.client}
                          </span>
                          <h3 className="text-white font-black text-xl md:text-3xl leading-[1.1] tracking-tight group-hover:text-[#FF8A00] transition-all duration-500 uppercase mb-3 md:mb-4">
                            {project.title}
                          </h3>
                          <p className="text-white/30 text-[10px] md:text-xs font-medium leading-relaxed max-w-[90%] md:max-w-[80%] md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
                          {project.tags
                            .slice(0, isMobile ? 2 : 10)
                            .map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-lg border border-white/5 bg-white/[0.03] text-white/40 text-[8px] font-black uppercase tracking-[0.1em] group-hover:border-[#FF8A00]/20 group-hover:text-white transition-all"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      </div>
                    </a>
                  </m.div>
                );
              })}

              {/* --- FINAL CTA SCREEN (Mobile Stacked) --- */}
              <div className="w-[100vw] flex shrink-0 items-center justify-center px-6 md:px-10 relative overflow-visible">
                <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF8A00]/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

                <div className="flex flex-col items-center text-center relative z-10 max-w-[1400px]">
                  <div className="mb-8 md:mb-10">
                    <span className="text-[#FF8A00] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase block mb-4 md:mb-6">
                      Ready for the next level?
                    </span>
                    <h2 className="text-white font-black text-[clamp(1.8rem,8vw,6rem)] leading-tight md:leading-none tracking-tighter uppercase mb-6">
                      Your Strategy. <br />
                      <span className="text-white/20 italic font-light">
                        Absolute Growth.
                      </span>
                    </h2>
                    <div className="flex items-center justify-center gap-3 text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-4 md:mt-6">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-[#0A0A0F] bg-white/10"
                          />
                        ))}
                      </div>
                      <span>Trusted by 20+ Digital Pioneers</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <m.a
                      href="/case-studies"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex items-center justify-center gap-4 md:gap-6 bg-white text-black font-black w-full md:w-auto px-8 md:px-12 py-5 md:py-6 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300"
                    >
                      <PlayCircle
                        size={18}
                        className="md:w-5 group-hover:rotate-12 transition-transform"
                      />
                      Witness The Proof
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                        <ArrowUpRight size={14} className="md:w-4 text-white" />
                      </div>
                    </m.a>

                    <m.a
                      href="/contact"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex items-center justify-center gap-4 md:gap-6 border-2 border-white/10 hover:border-[#FF8A00] text-white font-black w-full md:w-auto px-8 md:px-12 py-5 md:py-6 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-md"
                    >
                      <PhoneCall
                        size={18}
                        className="md:w-5 group-hover:text-[#FF8A00] transition-colors"
                      />
                      Book Strategy Call
                      <m.div
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#FF8A00] rounded-full shadow-[0_0_10px_#FF8A00]"
                      />
                    </m.a>
                  </div>

                  <p className="mt-8 md:mt-12 text-white/10 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] max-w-[200px] md:max-w-xs leading-loose">
                    Limited intake for Q3. Secure your strategic audit today.
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
