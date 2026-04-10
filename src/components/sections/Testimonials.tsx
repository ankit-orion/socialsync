import { motion } from "framer-motion";

export function Testimonials() {
  const reviews = [
    { name: "Sarah Jenkins", role: "CMO at Lumina", text: "We went from 2,000 monthly impressions to 4.5M in under 90 days. I've worked with three agencies before this — none of them came close." },
    { name: "Michael Torres", role: "Founder, Volt Fitness", text: "The hooks they wrote for our short-form content drove $120K in trackable revenue last Q4. Worth every penny and then some." },
    { name: "Elena Rostova", role: "Head of Growth, Nexus", text: "We handed over our entire social operation and they treated it like it was their own brand. The engagement numbers speak for themselves." },
    { name: "David Chen", role: "CEO, Aura Beauty", text: "Three weeks in and our TikTok engagement was up 8×. I was skeptical at first — now I tell every founder I know to call them." },
    { name: "Marcus Webb", role: "Director, Hyperion", text: "We were wasting budget on ads that weren't converting. They shifted the strategy to organic-first and our ROAS went from 1.2× to 5.8×." },
  ];
  const duplicated = [...reviews, ...reviews];

  return (
    <section className="bg-[#e8e8e8] py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-14">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0d0d0d]/60 mb-3">Unmatched Results</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0d0d0d] tracking-tight">
          Don't take our word for it.
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#e8e8e8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#e8e8e8] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex w-max space-x-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {duplicated.map((review, i) => (
            <div key={i} className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 p-5 sm:p-7 rounded-[24px] bg-white border border-[#0d0d0d]/[0.06] hover:shadow-md transition-shadow duration-300">
              <p className="text-[#0d0d0d]/70 text-[14px] leading-relaxed italic mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2c5270] flex items-center justify-center font-black text-white text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-[#0d0d0d] text-sm">{review.name}</p>
                  <p className="text-[#0d0d0d]/70 text-xs font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
