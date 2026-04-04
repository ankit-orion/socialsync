import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const brands = [
  { name: "Precision", icon: "⚙" },
  { name: "MIT", icon: "|||" },
  { name: "ArsenalBio", icon: "-A-" },
  { name: "Stretch", icon: "S" },
  { name: "Stryder", icon: "S" },
];

// Static pixel grid for card illustration — 'p'=purple, 'y'=lime, 'b'=dark, ''=transparent
const pixelRows = [
  ['','p','','y','','b','p','','y',''],
  ['p','','b','p','','','','y','','p'],
  ['','b','','','y','p','b','','','y'],
  ['y','p','','b','','y','','p','',''],
  ['','','p','y','b','','p','','y','b'],
  ['b','y','','','p','','','b','y',''],
];
const colorMap: Record<string, string> = {
  p: '#7c3aed', y: '#c8f03c', b: '#ffffff18', '': 'transparent',
};

export function Hero() {
  return (
    <section className="min-h-screen bg-[#e8e8e8] pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start">

          {/* ── Left: text ── */}
          <div className="space-y-8 lg:pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black text-[#0d0d0d] leading-[1.02] tracking-tight"
            >
              A Modern Social
              <br />Agency For A
              <br />Modern Brand.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-[#0d0d0d]/55 text-base leading-relaxed font-medium max-w-sm"
            >
              This Modern Social Agency Embraces The Era Of Data-Driven Content, Enabling Swift And Effortless Growth. No More Guessing Or Struggling With Outdated Marketing Methods.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <Link to="/book">
                <button className="flex items-center gap-2 h-12 px-7 rounded-full bg-[#c8f03c] text-[#0d0d0d] font-bold text-sm hover:bg-[#b8e02c] transition-colors">
                  Explore More <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            {/* Brand logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8 pt-2 flex-wrap"
            >
              {brands.map((b) => (
                <div key={b.name} className="flex items-center gap-1.5 text-[#0d0d0d]/35">
                  <span className="text-sm font-mono font-bold">{b.icon}</span>
                  <span className="text-sm font-bold tracking-tight">{b.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: card illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]"
          >
            {/* Floating lime square top-right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-10 w-14 h-14 bg-[#c8f03c] rounded-xl z-20 shadow-lg"
            />

            {/* Small dark square */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-12 right-4 w-5 h-5 bg-[#0d0d0d] rounded-sm z-20 opacity-60"
            />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-8 w-4 h-4 border-2 border-[#0d0d0d] rounded-sm opacity-40"
            />
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute bottom-28 left-6 w-3 h-3 bg-[#c8f03c] rounded-sm opacity-70"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-24 left-16 w-2.5 h-2.5 bg-[#7c3aed] rounded-sm opacity-60"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-1/3 right-2 w-2 h-2 bg-[#c8f03c] rounded-sm opacity-80"
            />

            {/* Main dark card — rotated */}
            <motion.div
              animate={{ rotate: [8, 10, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] md:w-[340px] h-[180px] md:h-[210px] bg-[#12102a] rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Pixel grid on card */}
              <div className="absolute inset-0 grid p-5 gap-1" style={{ gridTemplateColumns: 'repeat(10, 1fr)', gridTemplateRows: 'repeat(6, 1fr)' }}>
                {pixelRows.flat().map((code, i) => (
                  <div
                    key={i}
                    className="rounded-[2px]"
                    style={{ background: colorMap[code] }}
                  />
                ))}
              </div>

              {/* Card chip */}
              <div className="absolute top-5 left-5 w-8 h-6 bg-[#c8f03c]/80 rounded-md" />

              {/* Card details at bottom */}
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/40 text-[9px] font-bold tracking-widest uppercase mb-0.5">Card Holder</p>
                    <p className="text-white text-xs font-bold">Megan Lee</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-[9px] mb-0.5">07/26</p>
                    <div className="flex gap-0.5">
                      <div className="w-4 h-4 rounded-full bg-[#7c3aed] opacity-80" />
                      <div className="w-4 h-4 rounded-full bg-[#c8f03c] opacity-80 -ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scattered small pixel squares below/around card */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 opacity-50">
              {['#7c3aed','#c8f03c','#0d0d0d','#7c3aed','#c8f03c'].map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c, transform: `rotate(${i * 15}deg)` }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
