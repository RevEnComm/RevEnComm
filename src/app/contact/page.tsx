"use client";

import React, { useState, useRef } from "react";
import { m, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  Loader2,
  Mail,
  User,
  Phone,
  ArrowLeft,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

// --- Types ---
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// --- Components ---

const MagneticButton = ({ children, className, disabled, type }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <m.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      disabled={disabled}
      type={type}
      className={className}
    >
      {children}
    </m.button>
  );
};

const InputField = ({ label, id, icon: Icon, error, ...props }: any) => (
  <div className="space-y-4 group/field">
    <div className="flex items-center justify-between">
      <label
        htmlFor={id}
        className="text-[11px] font-black tracking-[0.2em] text-white/40 group-focus-within/field:text-[#FF8A00] transition-colors ml-1 uppercase"
      >
        {label}
      </label>
      <Icon
        size={14}
        className={
          error
            ? "text-red-500"
            : "text-white/10 group-focus-within/field:text-[#FF8A00] transition-colors"
        }
      />
    </div>
    <div className="relative">
      <input
        id={id}
        {...props}
        className={`w-full bg-white/[0.03] border ${error ? "border-red-500/50" : "border-white/5"} rounded-[24px] px-8 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[#FF8A00]/30 focus:bg-white/[0.05] transition-all text-base font-medium`}
      />
      {/* Animated glow on focus */}
      <div
        className={`absolute inset-0 rounded-[24px] border border-[#FF8A00]/0 ${!error && "group-focus-within/field:border-[#FF8A00]/20"} pointer-events-none transition-all duration-500 shadow-[0_0_40px_rgba(255,138,0,0)] group-focus-within/field:shadow-[0_0_40px_rgba(255,138,0,0.05)]`}
      />
    </div>
    <AnimatePresence>
      {error && (
        <m.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1"
        >
          {error}
        </m.p>
      )}
    </AnimatePresence>
  </div>
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 2) newErrors.name = "Name is too short";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!phoneRegex.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Invalid phone number";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Please provide more details";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing.");
      alert("We are experiencing technical issues. Please try again later.");
      return;
    }

    setIsSubmitting(true);

    try {
      const combinedMessage = `${formData.message}\n\n***Customer's Contact***\nPhone: ${formData.phone}\nEmail: ${formData.email}`;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: combinedMessage,
          to_name: "RevEnComm Team",
          from_name: formData.name,
          from_email: formData.email,
        },
        publicKey,
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      alert(
        `Oops! Something went wrong: ${error?.text || "Connection unstable"}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] pt-20 pb-20 selection:bg-[#FF8A00]/30 selection:text-white relative overflow-hidden">
      {/* Project-wide Decorative Elements */}
      <div className="absolute left-[40px] md:left-[80px] top-0 bottom-0 w-px bg-white/[0.03] z-0" />
      <span
        className="absolute right-10 top-24 font-black text-white/[0.015] select-none pointer-events-none leading-none text-[clamp(100px,15vw,250px)]"
        aria-hidden="true"
      >
        CONTACT
      </span>

      {/* Soft Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FF8A00]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF8A00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        {/* Navigation */}
        <div className="mb-20 ml-4 md:ml-12">
          <Link href="/" className="inline-flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF8A00]/50 group-hover:bg-[#FF8A00]/5 transition-all duration-500">
              <ArrowLeft
                size={16}
                className="text-white/40 group-hover:text-[#FF8A00] group-hover:-translate-x-1 transition-all"
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-white transition-colors">
              Return to Base
            </span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 items-start">
          {/* Left Side: Eye-soothing Typography & Content */}
          <div className="lg:sticky lg:top-32 self-start ml-4 md:ml-12">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#FF8A00] text-[11px] font-black tracking-[0.3em] uppercase">
                  04 Connection
                </span>
                <div className="h-px w-10 bg-[#FF8A00]/20" />
              </div>

              <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-black tracking-tighter leading-[0.95] mb-10 text-white uppercase">
                Let's{" "}
                <span className="italic font-light text-white/30">Start</span>{" "}
                <br />
                Something <span className="text-[#FF8A00]">Impactful.</span>
              </h1>

              <p className="text-[clamp(1.1rem,1.4vw,1.3rem)] text-white/40 leading-relaxed mb-16 max-w-sm font-bold uppercase tracking-tight">
                Ready to transform your vision into a high-performance digital
                engine? We're here to listen.
              </p>

              <div className="space-y-8">
                <a
                  href="mailto:info@revencomm.com"
                  className="flex items-center gap-6 group w-fit"
                >
                  <div className="w-14 h-14 rounded-[20px] bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#FF8A00] transition-all duration-500 group-hover:bg-[#FF8A00]/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg tracking-tight transition-colors group-hover:text-[#FF8A00]">
                      info@revencomm.com
                    </p>
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
                      Official Inquiry
                    </p>
                  </div>
                </a>

                <a
                  href="tel:01806673304"
                  className="flex items-center gap-6 group w-fit"
                >
                  <div className="w-14 h-14 rounded-[20px] bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#FF8A00] transition-all duration-500 group-hover:bg-[#FF8A00]/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg tracking-tight transition-colors group-hover:text-[#FF8A00]">
                      01806 673304
                    </p>
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
                      Direct Hotline
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-[#FF8A00] font-black text-[10px] uppercase tracking-[0.3em] pt-8">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>Available for new projects</span>
                </div>
              </div>
            </m.div>
          </div>

          {/* Right Side: Modernised Glassmorphic Form */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-[#0F0F16]/60 backdrop-blur-3xl border border-white/[0.05] rounded-[40px] p-6 md:p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group/form">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <m.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="flex flex-col items-center justify-center text-center space-y-10 py-12"
                  >
                    <div className="relative">
                      <m.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute inset-0 bg-[#FF8A00] blur-3xl rounded-full opacity-20"
                      />
                      <div className="w-24 h-24 rounded-[32px] bg-[#FF8A00] flex items-center justify-center text-white shadow-2xl relative z-10">
                        <CheckCircle2 size={48} strokeWidth={2.5} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-4xl font-black text-white uppercase tracking-tighter">
                        Thank You!
                      </h3>
                      <p className="text-white/40 text-lg font-bold uppercase tracking-tight max-w-xs mx-auto">
                        Your message has been received. Our team will contact
                        you shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="group flex items-center gap-3 text-[#FF8A00] text-[10px] font-black uppercase tracking-[0.4em] hover:text-white transition-all"
                    >
                      <ArrowLeft
                        size={14}
                        className="group-hover:-translate-x-1 transition-transform"
                      />
                      Send Another Message
                    </button>
                  </m.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10"
                  >
                    <InputField
                      label="NAME"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      icon={User}
                      error={errors.name}
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <InputField
                      label="EMAIL"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      icon={Mail}
                      error={errors.email}
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <InputField
                      label="PHONE"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+880 / International"
                      icon={Phone}
                      error={errors.phone}
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    <div className="space-y-4 group/field">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="message"
                          className="text-[11px] font-black tracking-[0.2em] text-white/40 group-focus-within/field:text-[#FF8A00] transition-colors ml-1 uppercase"
                        >
                          QUERY/MESSAGE
                        </label>
                        <MessageSquare
                          size={14}
                          className="text-white/10 group-focus-within/field:text-[#FF8A00] transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your goals and vision..."
                          value={formData.message}
                          onChange={(e) => {
                            handleChange(e);
                            e.target.style.height = "auto";
                            e.target.style.height = `${e.target.scrollHeight}px`;
                          }}
                          className={`w-full bg-white/[0.03] border ${errors.message ? "border-red-500/50" : "border-white/5"} rounded-[24px] px-8 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-[#FF8A00]/30 focus:bg-white/[0.05] transition-all resize-none text-base font-medium leading-relaxed min-h-[120px] overflow-hidden`}
                        />
                        <div
                          className={`absolute inset-0 rounded-[24px] border border-[#FF8A00]/0 ${!errors.message && "group-focus-within/field:border-[#FF8A00]/20"} pointer-events-none transition-all duration-500 shadow-[0_0_40px_rgba(255,138,0,0)] group-focus-within/field:shadow-[0_0_40px_rgba(255,138,0,0.05)]`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.message && (
                          <m.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1"
                          >
                            {errors.message}
                          </m.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-4">
                      <MagneticButton
                        disabled={isSubmitting}
                        type="submit"
                        className="group w-full relative overflow-hidden rounded-[24px] shadow-2xl shadow-orange-500/10"
                      >
                        <div className="absolute inset-0 bg-white group-hover:bg-[#FF8A00] transition-colors duration-500" />
                        <div className="relative z-10 flex items-center justify-center gap-4 py-5 text-black group-hover:text-white font-black uppercase tracking-[0.4em] text-xs transition-colors duration-500">
                          {isSubmitting ? (
                            <Loader2 className="animate-spin" size={20} />
                          ) : (
                            <>
                              <span>Send Message</span>
                              <ArrowUpRight
                                size={18}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                              />
                            </>
                          )}
                        </div>
                      </MagneticButton>
                    </div>

                    <p className="text-center text-white/10 text-[9px] font-black uppercase tracking-[0.3em]">
                      Secure transmission enabled &bull; Usually responds within
                      24 hours
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </m.div>
        </div>
      </div>
    </main>
  );
}
