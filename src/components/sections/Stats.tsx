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
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0d0d0d]/40">From 2020</span>
              <div className="w-10 h-5 bg-[#0d0d0d] rounded-full flex items-center px-1">
                <div className="w-3 h-3 rounded-full bg-[#c8f03c] ml-auto" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight tracking-tight">
              What Makes Our
              <br />
              Social Strategy{" "}
              <span className="text-[#c8f03c] [-webkit-text-stroke:2px_#0d0d0d]">Distinctive</span>
              <br />
              And{" "}
              <span className="text-[#c8f03c] [-webkit-text-stroke:2px_#0d0d0d]">Effective</span>?
            </h2>
            <p className="text-[#0d0d0d]/55 text-base leading-relaxed font-medium max-w-md">
              According to the needs of modern brands, we have provided a social media strategy that can be the answer to all your growth needs.
            </p>
          </div>

          <div className="space-y-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4"
              >
                <div className="w-7 h-7 rounded-full bg-[#0d0d0d] flex items-center justify-center flex-shrink-0">
                  <span className="text-[11px] font-black text-white">{i + 1}</span>
                </div>
                <span className="text-[#0d0d0d] font-semibold text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: stats visual */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative dot grid */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-8 gap-3 p-4 pointer-events-none">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i % 7 === 0 ? "#c8f03c" : "#0d0d0d", opacity: 0.12 + (i % 5) * 0.05 }}
              />
            ))}
          </div>

          {/* Central stats card */}
          <div className="relative bg-white rounded-[28px] p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: "250M+", label: "Impressions", color: "#c8f03c" },
                { value: "50+", label: "Brands Scaled", color: "#0d0d0d" },
                { value: "12x", label: "Avg. ROI on Ads", color: "#0d0d0d" },
                { value: "98%", label: "Client Retention", color: "#c8f03c" },
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-4xl font-black text-[#0d0d0d] tracking-tighter">{s.value}</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                    <p className="text-xs font-bold text-[#0d0d0d]/40 uppercase tracking-wider">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#0d0d0d]/[0.06] pt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#0d0d0d]/40">Overall Growth</span>
                <span className="text-xs font-black text-[#0d0d0d]">+312%</span>
              </div>
              <div className="h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "82%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className="h-full bg-[#c8f03c] rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
