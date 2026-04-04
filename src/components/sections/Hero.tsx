import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const brands = ["Tata Power", "Malabar Gold", "Stryder", "IFFCO", "Jubilant"];

export function Hero() {
  return (
    <section className="min-h-screen bg-[#e8e8e8] pt-16 flex items-center relative overflow-hidden">
      {/* Decorative floating squares */}
      <div className="absolute top-24 right-[12%] w-5 h-5 bg-[#c8f03c] rounded-sm rotate-12 opacity-80" />
      <div className="absolute top-40 right-[8%] w-3 h-3 bg-[#0d0d0d] rounded-sm -rotate-6 opacity-40" />
      <div className="absolute bottom-32 right-[18%] w-4 h-4 border-2 border-[#0d0d0d] rounded-sm rotate-45 opacity-30" />
      <div className="absolute top-1/3 right-[6%] w-2.5 h-2.5 bg-[#c8f03c] rounded-sm rotate-3 opacity-60" />
      <div className="absolute bottom-1/4 left-[5%] w-3 h-3 bg-[#c8f03c] rounded-sm -rotate-12 opacity-50" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full py-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-[#0d0d0d] leading-[1.02] tracking-tight">
                A Modern Social
                <br />
                Agency For A
                <br />
                <span className="relative inline-block">
                  Modern Brand.
                  <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-[#c8f03c] -z-10 translate-y-1" />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#0d0d0d]/60 text-lg leading-relaxed max-w-md font-medium"
            >
              We engineer data-driven social content that turns followers into
              loyal customers. No guesswork — just measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <Link to="/book">
                <button className="flex items-center gap-2 h-12 px-7 rounded-full bg-[#c8f03c] text-[#0d0d0d] font-bold text-sm hover:bg-[#b8e02c] transition-colors shadow-sm">
                  Explore More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="#work" onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}>
                <button className="h-12 px-7 rounded-full border-2 border-[#0d0d0d]/20 text-[#0d0d0d] font-bold text-sm hover:border-[#0d0d0d]/60 transition-colors">
                  View Work
                </button>
              </a>
            </motion.div>

            {/* Brand strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-[#0d0d0d]/10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d0d0d]/40 mb-4">Trusted By</p>
              <div className="flex items-center gap-6 flex-wrap">
                {brands.map((b) => (
                  <span key={b} className="text-sm font-black text-[#0d0d0d]/30 tracking-tight uppercase">{b}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: floating analytics card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Pixel art background grid (decorative) */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-1.5 opacity-[0.07] pointer-events-none p-4">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="rounded-sm bg-[#0d0d0d]" style={{ opacity: Math.random() > 0.5 ? 1 : 0 }} />
              ))}
            </div>

            {/* Main analytics card */}
            <div className="relative bg-white rounded-[28px] shadow-xl p-6 w-full max-w-sm">
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0d0d0d]/40">Dashboard</p>
                  <h3 className="text-lg font-black text-[#0d0d0d]">Campaign Overview</h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#c8f03c] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#0d0d0d]" />
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Followers", value: "+48.2K", icon: Users, color: "#c8f03c" },
                  { label: "Engagement", value: "18.4%", icon: Zap, color: "#0d0d0d" },
                ].map((m) => (
                  <div key={m.label} className="bg-[#f5f5f5] rounded-2xl p-4">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center mb-2" style={{ background: m.color }}>
                      <m.icon className="w-3.5 h-3.5" style={{ color: m.color === "#0d0d0d" ? "#fff" : "#0d0d0d" }} />
                    </div>
                    <p className="text-xl font-black text-[#0d0d0d]">{m.value}</p>
                    <p className="text-xs text-[#0d0d0d]/50 font-medium">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-[11px] font-bold text-[#0d0d0d]/40">
                  <span>Monthly Reach</span>
                  <span>5.1M</span>
                </div>
                <div className="flex items-end gap-1 h-14">
                  {[40, 60, 45, 75, 55, 90, 70, 100, 85, 95, 80, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.04 }}
                      className="flex-1"
                      style={{ height: `${h}%`, originY: 1 }}
                    >
                      <div
                        className="w-full rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 11 ? "#c8f03c" : "#0d0d0d",
                          opacity: i === 11 ? 1 : 0.08 + i * 0.07,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-[#0d0d0d]/[0.06]">
                <div className="flex -space-x-2">
                  {["12", "33", "41"].map((id) => (
                    <img key={id} src={`https://i.pravatar.cc/40?img=${id}`} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#0d0d0d]/40">50+ brands scaled</span>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#c8f03c] rounded-2xl p-4 shadow-lg"
            >
              <p className="text-[11px] font-black text-[#0d0d0d]/60 uppercase tracking-wider">Growth</p>
              <p className="text-2xl font-black text-[#0d0d0d]">+312%</p>
            </motion.div>

            {/* Floating dark card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-[#0d0d0d] rounded-2xl p-4 shadow-lg"
            >
              <p className="text-[11px] font-black text-white/40 uppercase tracking-wider">ROAS</p>
              <p className="text-2xl font-black text-white">4.2x</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
