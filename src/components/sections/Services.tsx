import { motion } from "framer-motion";
import { Sparkles, Search, Bell, Share2, Layers, CheckCircle2, TrendingUp, Cpu } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="bg-[#e8e8e8] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header Section */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[9px] font-black uppercase tracking-[0.3em] text-[#c8f03c] bg-[#0d0d0d] inline-block px-3 py-1 rounded-full mb-4 shadow-sm"
          >
            S T R A T E G Y
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#0d0d0d] tracking-tighter leading-none uppercase mb-6"
          >
            Distinctive <span className="text-[#0d0d0d]/20">Strategy</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#0d0d0d]/40 text-xs font-bold max-w-md mx-auto leading-tight uppercase tracking-widest"
          >
            Social media strategy engineered for the needs of modern brands.
          </motion.p>
        </div>

        {/* The Grid - Stable and Properly Proportioned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1: Audit & Analysis */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white border border-[#0d0d0d]/[0.05] rounded-[32px] overflow-hidden flex flex-col min-h-[460px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <div className="h-[260px] relative flex items-center justify-center p-6 bg-[#f9fafb]/50 overflow-hidden">
               {/* Pattern Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                  backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
                  backgroundSize: '24px 24px' 
                }} 
              />
              
              <div className="relative z-10 w-full max-w-[240px] scale-90 md:scale-100">
                <div className="bg-white rounded-2xl shadow-2xl p-5 border border-[#0d0d0d]/[0.02]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#0d0d0d]/[0.03] flex items-center justify-center">
                      <Search size={18} className="text-[#0d0d0d]/30" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                       <div className="h-1.5 w-full bg-[#0d0d0d]/[0.05] rounded-full" />
                       <div className="h-1.5 w-2/3 bg-[#0d0d0d]/[0.02] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { val: 75, color: '#0d0d0d' },
                      { val: 90, color: '#c8f03c' }
                    ].map((stat, i) => (
                      <div key={i} className="h-1.5 w-full bg-[#0d0d0d]/[0.03] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.val}%` }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                          className="h-full"
                          style={{ background: stat.color }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fixed Notification Pop-up */}
                <motion.div 
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.6 }}
                  className="absolute -right-6 top-0 bg-[#0d0d0d] rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#0d0d0d] w-60 z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#c8f03c] shrink-0">
                    <TrendingUp size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white uppercase tracking-tighter truncate">Viral Alert Detected</div>
                    <div className="text-[9px] text-white/40 font-bold uppercase truncate">Competitor scaling...</div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="p-10 pt-0">
              <h3 className="text-2xl font-black text-[#0d0d0d] mb-3 uppercase tracking-tighter leading-none">Audit & Analysis</h3>
              <p className="text-[#0d0d0d]/40 text-xs font-bold leading-relaxed uppercase tracking-widest max-w-[260px]">
                dissecting brand presence and competitor ecosystems to find untapped opportunities.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Predictive Strategy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-white border border-[#0d0d0d]/[0.05] rounded-[32px] overflow-hidden flex flex-col min-h-[460px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <div className="h-[260px] relative flex items-center justify-center p-6 bg-[#f9fafb]/50 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                  backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
                  backgroundSize: '24px 24px' 
                }} 
              />
              <div className="relative z-10 w-full max-w-[240px] scale-90 md:scale-100">
                <div className="bg-white rounded-3xl shadow-2xl p-7 w-full border border-white">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#0d0d0d] flex items-center justify-center text-[#c8f03c] shadow-lg">
                       <Cpu size={22} />
                    </div>
                    <div className="space-y-1.5 flex-1">
                       <div className="h-1.5 w-full bg-[#0d0d0d]/[0.06] rounded-full" />
                       <div className="h-1.5 w-1/2 bg-[#0d0d0d]/[0.02] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2 mb-8">
                    {[1, 2].map(i => (
                      <div key={i} className="h-1.5 bg-[#0d0d0d]/[0.04] rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ x: "-100%" }}
                           whileInView={{ x: "0%" }}
                           transition={{ duration: 1.2, delay: 0.4 + i * 0.1 }}
                           className="h-full bg-[#0d0d0d]/10"
                         />
                      </div>
                    ))}
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="w-full h-10 bg-[#0d0d0d] rounded-2xl flex items-center justify-center text-[#c8f03c] text-[10px] font-black uppercase tracking-[0.2em] shadow-lg cursor-pointer"
                  >
                    G E N E R A T E
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="p-10 pt-0">
              <h3 className="text-2xl font-black text-[#0d0d0d] mb-3 uppercase tracking-tighter leading-none">Market Strategy</h3>
              <p className="text-[#0d0d0d]/40 text-xs font-bold leading-relaxed uppercase tracking-widest max-w-[260px]">
                High-velocity data modeling designed to connect brands with loyal audiences.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Content Engine */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white border border-[#0d0d0d]/[0.05] rounded-[32px] overflow-hidden flex flex-col min-h-[460px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <div className="h-[260px] relative flex items-center justify-center p-6 bg-[#f9fafb]/50 overflow-hidden">
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                  backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
                  backgroundSize: '24px 24px' 
                }} 
              />
              <div className="flex gap-4 relative z-10 w-full justify-center scale-90 md:scale-100">
                {[1, 2].map(i => (
                  <motion.div 
                     key={i} 
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.3 + i * 0.1 }}
                     className="bg-white p-4 rounded-2xl shadow-xl w-[130px] border border-white"
                  >
                    <div className="w-full h-18 bg-[#0d0d0d]/[0.03] rounded-xl mb-4 flex items-center justify-center">
                       <Layers size={20} className="text-[#0d0d0d]/10" />
                    </div>
                    <div className="h-1 w-full bg-[#0d0d0d]/[0.04] rounded-full mb-4" />
                    <div className="flex justify-between items-center bg-[#f9fafb] p-1.5 rounded-lg border border-[#0d0d0d]/[0.02]">
                       <CheckCircle2 size={10} className="text-[#c8f03c]" />
                       <div className="w-2.5 h-2.5 rounded-full bg-[#0d0d0d]/[0.05]" />
                    </div>
                  </motion.div>
                ))}
                <motion.div 
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0d0d0d] rounded-2xl flex items-center justify-center text-[#c8f03c] shadow-2xl z-20 border-2 border-white"
                >
                   <Sparkles size={20} />
                </motion.div>
              </div>
            </div>
            <div className="p-10 pt-0">
              <h3 className="text-2xl font-black text-[#0d0d0d] mb-3 uppercase tracking-tighter leading-none">Content Engine</h3>
              <p className="text-[#0d0d0d]/40 text-xs font-bold leading-relaxed uppercase tracking-widest max-w-[260px]">
                scaling assets without compromising the unique visual soul of your brand.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-white border border-[#0d0d0d]/[0.05] rounded-[32px] overflow-hidden flex flex-col min-h-[460px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <div className="h-[260px] relative flex items-center justify-center p-6 bg-[#f9fafb]/50 overflow-hidden">
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                  backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
                  backgroundSize: '24px 24px' 
                }} 
              />
              <div className="relative z-10 w-full flex flex-col items-center scale-90 md:scale-100">
                <div className="flex flex-wrap gap-2 max-w-[260px] justify-center opacity-10 mb-6">
                  {["IG", "TIKTOK", "YT", "LI", "TWITTER", "FB"].map(t => (
                    <div key={t} className="px-3 py-1.5 bg-white rounded-full border border-[#0d0d0d]/05 text-[8px] font-black text-[#0d0d0d] tracking-widest leading-none">{t}</div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-18 h-18 bg-white rounded-3xl shadow-2xl p-2 relative z-10 border border-white">
                     <div className="w-full h-full bg-[#0d0d0d] rounded-2xl flex items-center justify-center text-[#c8f03c]">
                        <Share2 size={24} />
                     </div>
                  </div>
                  {[1, 2].map(ring => (
                    <motion.div 
                      key={ring}
                      animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: ring * 1.5, ease: "easeOut" }}
                      className="absolute w-24 h-24 border-2 border-[#c8f03c] rounded-full pointer-events-none" 
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-10 pt-0">
              <h3 className="text-2xl font-black text-[#0d0d0d] mb-3 uppercase tracking-tighter leading-none">Distribution</h3>
              <p className="text-[#0d0d0d]/40 text-xs font-bold leading-relaxed uppercase tracking-widest max-w-[260px]">
                single-source optimized publishing engine across all algorithms simultaneously.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
