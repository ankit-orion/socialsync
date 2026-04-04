import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Simultaneous And Fast Growth",
    desc: "Multi-platform publishing at scale.",
    illustration: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto" fill="none" stroke="#0d0d0d" strokeWidth="1.5">
        <circle cx="40" cy="40" r="32" strokeOpacity="0.15" />
        <circle cx="40" cy="40" r="22" strokeOpacity="0.3" />
        <circle cx="40" cy="40" r="12" strokeOpacity="0.6" />
        <circle cx="40" cy="40" r="4" fill="#c8f03c" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Can Be Connected To All Platforms",
    desc: "Instagram, TikTok, YouTube, LinkedIn — all in one.",
    illustration: (
      <svg viewBox="0 0 80 60" className="w-16 h-12 mx-auto" fill="none">
        <rect x="4" y="8" width="44" height="16" rx="8" fill="#f0f0f0" stroke="#0d0d0d" strokeWidth="1.2" strokeOpacity="0.2"/>
        <circle cx="40" cy="16" r="7" fill="#c8f03c"/>
        <rect x="4" y="36" width="44" height="16" rx="8" fill="#f0f0f0" stroke="#0d0d0d" strokeWidth="1.2" strokeOpacity="0.2"/>
        <circle cx="14" cy="44" r="7" fill="#0d0d0d" opacity="0.15"/>
        <text x="56" y="20" fontSize="8" fill="#0d0d0d" opacity="0.4" fontWeight="bold">ON</text>
        <text x="56" y="48" fontSize="8" fill="#0d0d0d" opacity="0.4" fontWeight="bold">OFF</text>
      </svg>
    ),
  },
  {
    title: "Strong And Advanced Analytics",
    desc: "Deep-dive reports that drive decisions.",
    illustration: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto" fill="none">
        <circle cx="40" cy="40" r="28" stroke="#0d0d0d" strokeWidth="1.5" strokeOpacity="0.15"/>
        <circle cx="40" cy="40" r="18" stroke="#0d0d0d" strokeWidth="1.5" strokeOpacity="0.3"/>
        <circle cx="40" cy="18" r="4" fill="#7c3aed"/>
        <circle cx="62" cy="40" r="3" fill="#c8f03c"/>
        <circle cx="40" cy="62" r="3" fill="#0d0d0d" opacity="0.3"/>
        <line x1="40" y1="40" x2="40" y2="18" stroke="#7c3aed" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Comprehensive Content Services",
    desc: "From ideation to publishing, fully managed.",
    illustration: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto" fill="none" stroke="#0d0d0d" strokeWidth="1.5">
        <rect x="20" y="20" width="40" height="30" rx="3" strokeOpacity="0.2"/>
        <rect x="24" y="24" width="32" height="22" rx="2" fill="#f0f0f0" strokeOpacity="0"/>
        <line x1="28" y1="56" x2="52" y2="56" strokeOpacity="0.3"/>
        <circle cx="40" cy="65" r="3" strokeOpacity="0.3"/>
        <rect x="34" y="30" width="12" height="10" rx="2" fill="#c8f03c" stroke="none"/>
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#e8e8e8] py-5 px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white rounded-[32px] p-8 md:p-14"
      >
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d0d0d] leading-[1.15] tracking-tight">
              We Tried To Provide
              <br />You With All Social
              <br />Media Growth Services
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <p className="text-[#0d0d0d]/50 text-[15px] leading-relaxed font-medium">
              We Made Every Effort To Ensure That You Have Access To A Comprehensive Range Of Social Media Services. Our Aim Was To Provide You With A Seamless Growth Experience That Caters To Your Brand Needs Regardless Of Your Industry Or Location.
            </p>
            <div>
              <button className="flex items-center gap-2 h-10 px-5 rounded-full bg-[#0d0d0d] text-white font-bold text-sm hover:bg-[#333] transition-colors">
                Explore More <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0d0d0d]/[0.07] mb-12" />

        {/* Feature grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <p className="text-xs font-black text-[#0d0d0d]/60 leading-snug tracking-tight">{f.title}</p>
              <div className="flex-1 flex items-center justify-center py-2">
                {f.illustration}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
