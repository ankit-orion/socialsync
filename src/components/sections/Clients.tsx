import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Linkedin } from "lucide-react";

const testimonials = [
  {
    company: "SQUIRE",
    quote: "SocialSync consistently delivers clean, intuitive strategies that strike the perfect balance between brand aesthetic and viral growth. Whether it's for a complex campaign or daily content, the results always feel effortless and refined.",
    author: "Dave Salvant",
    role: "Co-founder of Squire",
    avatar: "DS",
    linkedIn: true
  },
  {
    company: "PRECISION",
    quote: "Their team doesn't just post content; they engineer attention. We saw a 300% increase in lead generation within the first month of partnering with them. A truly data-driven agency.",
    author: "Sarah Jenkins",
    role: "CEO at Precision",
    avatar: "SJ",
    linkedIn: true
  },
  {
    company: "STRYDER",
    quote: "The creative vision SocialSync brought to our brand was transformative. They captured our voice perfectly and scaled our community faster than we ever thought possible.",
    author: "Marcus Webb",
    role: "Marketing Director",
    avatar: "MW",
    linkedIn: true
  }
];

export function Clients() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-[#e8e8e8] py-16 md:py-24 px-5 md:px-8 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c8f03c] mb-4 bg-[#0d0d0d] inline-block px-3 py-1 rounded-full"
          >
            T E S T I M O N I A L S
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d0d0d] tracking-tighter leading-none mb-6 uppercase"
          >
            TRUSTED BY FOUNDERS<br />
            <span className="text-[#0d0d0d]/40">BACKED BY RESULTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#0d0d0d]/40 text-sm font-medium"
          >
            Results that speak through founder voices.
          </motion.p>
        </div>

        <div className="relative h-[520px] sm:h-[460px] md:h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20, rotate: 2 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute w-full max-w-2xl bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-white"
            >
              {/* Virtual Badge Header Detail */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-12 bg-gradient-to-b from-[#f0f0f0] to-white rounded-t-xl border-x border-t border-[#000]/5 flex items-center justify-center">
                  <div className="w-12 h-2 bg-[#000]/5 rounded-full" />
              </div>

              <div className="flex justify-between items-start mb-8">
                <span className="text-2xl font-black tracking-tighter text-[#0d0d0d] italic">
                  {current.company}
                </span>
                <div className="flex gap-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d]/10" />
                  ))}
                </div>
              </div>

              <div className="relative mb-10">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-[#c8f03c] opacity-40 rotate-180" strokeWidth={3} />
                <p className="text-[#0d0d0d]/70 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed tracking-tight relative z-10">
                  {current.quote}
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-[#0d0d0d]/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0d0d0d] flex items-center justify-center text-[#c8f03c] font-black text-sm border-2 border-[#c8f03c]/20">
                    {current.avatar}
                  </div>
                  <div>
                    <h4 className="font-black text-[#0d0d0d] text-base leading-tight uppercase tracking-tight">{current.author}</h4>
                    <p className="text-[#0d0d0d]/40 text-xs font-bold uppercase tracking-wider">{current.role}</p>
                  </div>
                </div>
                
                {current.linkedIn && (
                  <div className="w-10 h-10 rounded-xl border border-[#0d0d0d]/5 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2]/5 transition-colors cursor-pointer group">
                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Decorative Ghost Cards */}
          <div className="absolute inset-x-0 top-4 bottom-0 -z-10 bg-white/40 rounded-[32px] scale-[0.98] blur-sm translate-y-4" />
          <div className="absolute inset-x-0 top-8 bottom-0 -z-20 bg-white/20 rounded-[32px] scale-[0.95] blur-md translate-y-8" />
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-[#0d0d0d]" : "w-1.5 bg-[#0d0d0d]/10 hover:bg-[#0d0d0d]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
