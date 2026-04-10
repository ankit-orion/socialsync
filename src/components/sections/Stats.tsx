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

        {/* Right: orbit/dot illustration */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center justify-center">
          <svg viewBox="0 0 440 440" className="w-full max-w-md" fill="none">
            {/* Scattered background dots */}
            {[
              [30,80],[80,30],[400,60],[420,160],[370,30],[50,380],[20,200],[100,400],[420,380],[380,400],
              [160,20],[280,15],[340,420],[60,300],[400,300],[200,420],[140,380],[300,50],
            ].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#0d0d0d" opacity="0.15"/>
            ))}

            {/* Dotted arc paths */}
            <path d="M 120 80 Q 280 20 380 160" stroke="#0d0d0d" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.2" fill="none"/>
            <path d="M 60 300 Q 100 400 240 420" stroke="#0d0d0d" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.15" fill="none"/>
            <path d="M 380 160 Q 420 280 360 380" stroke="#0d0d0d" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.15" fill="none"/>

            {/* Main large black circle */}
            <circle cx="260" cy="230" r="95" fill="#0d0d0d"/>

            {/* Orbiting circles */}
            <circle cx="110" cy="130" r="22" fill="#60516f"/>
            <circle cx="380" cy="120" r="14" fill="#2c5270"/>
            <circle cx="130" cy="340" r="10" fill="white" fillOpacity="0.7"/>
            <circle cx="390" cy="320" r="18" fill="#60516f" fillOpacity="0.5"/>
            <circle cx="300" cy="390" r="8" fill="#2c5270" fillOpacity="0.7"/>

            {/* Connector lines */}
            <line x1="132" y1="148" x2="180" y2="185" stroke="#0d0d0d" strokeOpacity="0.2" strokeDasharray="3 4"/>
            <line x1="366" y1="128" x2="330" y2="175" stroke="#0d0d0d" strokeOpacity="0.2" strokeDasharray="3 4"/>
            <line x1="140" y1="330" x2="175" y2="295" stroke="#0d0d0d" strokeOpacity="0.15" strokeDasharray="3 4"/>

            {/* Small accent dots near main circle */}
            <circle cx="175" cy="195" r="5" fill="#2c5270" opacity="0.6"/>
            <circle cx="340" cy="175" r="4" fill="#60516f" opacity="0.5"/>
            <circle cx="175" cy="290" r="4" fill="white" opacity="0.5"/>
            <circle cx="350" cy="320" r="5" fill="#2c5270" opacity="0.4"/>
          </svg>
        </motion.div>

      </div>
    </section>
  );
}
