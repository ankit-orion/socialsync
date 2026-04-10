import { motion } from "framer-motion";


const features = [
  "Brand Audit & Competitive Analysis",
  "Data-Driven Content Strategy",
  "High-Converting Content Engine",
  "Multi-Platform Distribution",
  "Real-Time Analytics & Reporting",
];

export function Stats() {
  return (
    <section id="about" className="bg-[#e8e8e8] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-[#0d0d0d]/15 rounded-full px-3 py-1">
                <span className="text-xs font-bold text-[#0d0d0d]/70">From 2020</span>
                <div className="w-8 h-4 bg-[#0d0d0d] rounded-full flex items-center px-0.5">
                  <div className="w-3 h-3 rounded-full bg-[#2c5270] ml-auto" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d0d0d] leading-[1.1] tracking-tight">
              Everything your brand
              <br />needs to{" "}
              <span style={{ color: '#2c5270' }}>grow faster</span>
              <br />on{" "}
              <span style={{ color: '#2c5270' }}>social.</span>
            </h2>
            <p className="text-[#0d0d0d]/70 text-[15px] leading-relaxed font-medium max-w-md">
              We've refined our process across 50+ brands since 2020. Here's what's inside every engagement we run.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3">
            <div className="space-y-3">
              {features.slice(0, 3).map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2c5270] flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-black text-white">{i + 1}</span>
                  </div>
                  <span className="text-[#0d0d0d] font-semibold text-sm leading-snug">{f}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-3">
              {features.slice(3).map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i + 3) * 0.07 }} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2c5270] flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-black text-white">{i + 4}</span>
                  </div>
                  <span className="text-[#0d0d0d] font-semibold text-sm leading-snug">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: The Engine Blueprint */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="relative w-full h-[400px] sm:h-[480px] bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl p-6 md:p-8 flex items-center justify-center border border-[#0d0d0d]/[0.06] dark:border-white/10"
        >
           {/* Blueprint Grid Lines */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(13,13,13,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
           
           {/* Circular Diagram representing the "Engine" */}
           <div className="relative w-full max-w-[260px] sm:max-w-[320px] aspect-square">
              {/* Spinning Rings */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute inset-0">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-2 sm:inset-0 rounded-full border-[1.5px] border-[#0d0d0d]/10 dark:border-white/15 border-dashed" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }} className="absolute inset-8 sm:inset-10 rounded-full border border-[#0d0d0d]/[0.05] dark:border-white/10" />
              </motion.div>
              
              {/* Radar Scanner Sweep */}
              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
                animate={{ rotate: 360 }} 
                className="absolute inset-2 sm:inset-0 rounded-full overflow-hidden"
              >
                 <motion.div 
                   animate={{ rotate: 360 }} 
                   transition={{ duration: 5, repeat: Infinity, ease: "linear" }} 
                   className="w-full h-full rounded-full"
                   style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(44,82,112,0.1) 90%, rgba(44,82,112,0.4) 100%)' }}
                 />
              </motion.div>

              {/* Center Engine Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                   initial={{ scale: 0, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
                   className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#f8f9fa] dark:from-[#0a0a0a] to-[#2c5270] shadow-[0_10px_30px_rgba(44,82,112,0.15)] dark:shadow-[0_0_50px_rgba(44,82,112,0.5)] border border-[#2c5270]/20 dark:border-[#2c5270]/50 flex items-center justify-center z-20 relative overflow-hidden"
                >
                   {/* Core Pulse */}
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-[#2c5270]/10 dark:bg-[#2c5270]/20 rounded-full blur-md" />
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="relative z-10 w-6 h-6 sm:w-8 sm:h-8"><path d="M12 2L2 22l10-4 10 4-10-20z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.div>
              </div>

              {/* 5 Process Nodes Positioning */}
              {[
                { label: "1. Audit", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                { label: "2. Strategy", icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
                { label: "3. Engine", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
                { label: "4. Scale", icon: "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4" },
                { label: "5. Analyze", icon: "M18 20V10M12 20V4M6 20v-6" },
              ].map((node, i) => {
                const totalNodes = 5;
                const angle = (i * (360 / totalNodes)) - 90; // Start from top
                const angleRad = angle * (Math.PI / 180);
                
                // 38% radius ensures they don't clip the edges of the parent div.
                const x = 50 + Math.cos(angleRad) * 38;
                const y = 50 + Math.sin(angleRad) * 38;
                
                // Directional label pushing away from core
                const getLabelStyle = (idx: number) => {
                  if (idx === 0) return "bottom-[115%] left-1/2 -translate-x-1/2"; // Top (Audit) -> Push UP
                  if (idx === 1) return "top-1/2 left-[115%] -translate-y-1/2 hidden sm:block"; // Top Right -> Push RIGHT
                  if (idx === 2) return "top-[115%] left-1/2 -translate-x-1/2"; // Bottom Right -> Push DOWN
                  if (idx === 3) return "top-[115%] left-1/2 -translate-x-1/2"; // Bottom Left -> Push DOWN
                  return "top-1/2 right-[115%] -translate-y-1/2 hidden sm:block"; // Top Left -> Push LEFT
                };
                
                return (
                  <motion.div 
                    key={i} 
                    className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-[#1a1c23] rounded-xl sm:rounded-2xl border border-[#0d0d0d]/[0.06] dark:border-white/20 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] z-30 transition-colors"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                    whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                    whileHover={{ scale: 1.1, x: "-50%", y: "-50%", borderColor: "rgba(44,82,112,0.6)" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 + (i * 0.15) }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 stroke-[#0d0d0d]/70 dark:stroke-white/90"><path d={node.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.2 + (i * 0.1) }}
                      className={`absolute ${getLabelStyle(i)} whitespace-nowrap text-[9px] sm:text-[10px] font-black text-[#0d0d0d]/80 dark:text-white/70 bg-white/95 dark:bg-black/80 px-2.5 py-1.5 rounded-full backdrop-blur-sm border border-[#0d0d0d]/5 dark:border-white/10 uppercase tracking-[0.05em] shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-xl`}
                    >
                      {node.label}
                    </motion.div>
                  </motion.div>
                );
              })}
           </div>

           {/* Bottom Status Badge */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8 }}
             className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-white/5 border border-[#0d0d0d]/[0.05] dark:border-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-lg"
           >
              <div className="w-2 h-2 rounded-full bg-[#14bf96] shadow-[0_0_10px_rgba(20,191,150,0.4)] dark:shadow-[0_0_10px_#14bf96]" style={{ animation: "pulse 2s infinite" }} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0d0d0d]/80 dark:text-white">System Active</span>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
