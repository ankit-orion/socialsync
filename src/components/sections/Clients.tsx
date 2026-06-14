import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";

const testimonials = [
  {
    company: "SQUIRE",
    quote: "Working with SocialSync was the first time an agency actually got our brand without us having to explain it twice. Our follower count doubled in 8 weeks, and the quality of engagement went up with it.",
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
    <section className="bg-white/50 dark:bg-transparent border-t border-zinc-100 dark:border-zinc-800/50 py-16 md:py-24 px-5 md:px-8 relative overflow-hidden transition-colors duration-500 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-3 uppercase tracking-widest transition-colors"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight max-w-2xl mx-auto mb-4 transition-colors"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Trusted by founders,{" "}
            <em className="not-italic font-bold" style={{ fontStyle: "italic" }}>backed by results</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 text-sm font-medium transition-colors"
          >
            Results that speak through founder voices.
          </motion.p>
        </div>

        <div className="relative h-[520px] sm:h-[460px] md:h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="absolute w-full max-w-2xl bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 md:p-12 border border-zinc-100 dark:border-zinc-800 shadow-sm transition-colors"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {current.company}
                </span>
                <div className="flex gap-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  ))}
                </div>
              </div>

              <div className="relative mb-10">
                <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed transition-colors">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-zinc-100 dark:border-zinc-800 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-900 font-bold text-sm">
                    {current.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight transition-colors">{current.author}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs transition-colors">{current.role}</p>
                  </div>
                </div>

                {current.linkedIn && (
                  <div className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-pointer">
                    <Linkedin size={16} />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Ghost cards */}
          <div className="absolute inset-x-0 top-4 bottom-0 -z-10 bg-zinc-100/60 dark:bg-zinc-800/40 rounded-2xl scale-[0.98] translate-y-3" />
          <div className="absolute inset-x-0 top-8 bottom-0 -z-20 bg-zinc-100/30 dark:bg-zinc-800/20 rounded-2xl scale-[0.95] translate-y-6" />
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-zinc-900 dark:bg-white" : "w-1.5 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
