import { motion } from "framer-motion";

/* ── Step card mini-mockups ───────────────────────────────────── */
function AuditMock() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl p-5 min-h-[13rem] flex flex-col justify-between transition-colors">
      <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-400">
        <span>Brand Audit</span>
        <span className="bg-zinc-500 dark:bg-zinc-600 text-white px-2 py-0.5 rounded-full text-xs">Active</span>
      </div>
      <div className="space-y-2">
        {["Competitor analysis", "Audience mapping", "Content gaps"].map((item, i) => (
          <div key={item} className="flex items-center justify-between bg-white dark:bg-zinc-700/50 rounded-lg px-3 py-2 shadow-sm transition-colors">
            <span className="text-slate-700 dark:text-zinc-200 text-xs">{item}</span>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${i < 2 ? "bg-zinc-500" : "bg-zinc-300 dark:bg-zinc-600"}`}>
              {i < 2 ? "✓" : "→"}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <span className="flex items-center gap-1 bg-zinc-600 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs px-3 py-1 rounded-full transition-colors">
          Build strategy →
        </span>
      </div>
    </div>
  );
}

function ScheduleMock() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const schedule = [true, true, false, true, false, true, false];
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl p-5 min-h-[13rem] shadow-sm flex flex-col justify-between transition-colors">
      <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
        <span>June 2026</span>
        <span className="text-zinc-600 dark:text-zinc-400 font-medium">7 posts/wk</span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => (
          <div key={d} className="text-center text-[9px] text-zinc-400 dark:text-zinc-500 pb-1">{d[0]}</div>
        ))}
        {schedule.map((has, i) => (
          <div key={i} className={`flex items-center justify-center h-7 rounded-lg text-[9px] font-medium transition-colors ${
            has
              ? "bg-zinc-700 dark:bg-zinc-200 text-white dark:text-zinc-900"
              : "bg-white dark:bg-zinc-700/50 text-zinc-400 dark:text-zinc-500 border border-zinc-100 dark:border-zinc-600"
          }`}>
            {has ? "●" : "○"}
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-zinc-700/50 rounded-xl p-2.5 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed shadow-sm transition-colors">
        Next: &ldquo;5 Growth Hacks for 2026&rdquo;
        <div className="mt-1 text-zinc-500 dark:text-zinc-400 font-medium">↑ Scheduled for Tue 10am</div>
      </div>
    </div>
  );
}

function GrowthMock() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl p-5 min-h-[13rem] shadow-sm flex flex-col justify-between transition-colors">
      <div className="text-xs text-zinc-400 dark:text-zinc-500">Follower growth · 90 days</div>
      <div className="flex gap-2">
        {[
          { label: "Reach",    val: "+84K", },
          { label: "Eng. Rate", val: "8.7%", },
        ].map((kpi) => (
          <div key={kpi.label} className="flex-1 bg-white dark:bg-zinc-700/50 rounded-xl p-2.5 shadow-sm border border-zinc-100 dark:border-zinc-600 transition-colors">
            <p className="text-[9px] text-zinc-400 dark:text-zinc-500 font-medium">{kpi.label}</p>
            <p className="text-[15px] font-bold text-slate-900 dark:text-white leading-tight transition-colors">{kpi.val}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white dark:bg-zinc-700/50 rounded-xl p-3 shadow-sm border border-zinc-100 dark:border-zinc-600 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400">Audience Growth</span>
          <span className="text-[9px] font-bold text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-700 px-1.5 py-0.5 rounded-full transition-colors">+312%</span>
        </div>
        <svg viewBox="0 0 200 55" className="w-full">
          <defs>
            <linearGradient id="gg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#71717a" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#71717a" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,48 Q20,45 40,40 T80,32 T120,22 T160,14 T200,5" fill="none" stroke="#71717a" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M0,48 Q20,45 40,40 T80,32 T120,22 T160,14 T200,5 V55 H0 Z" fill="url(#gg)"/>
        </svg>
      </div>
    </div>
  );
}

/* ── How We Work section ──────────────────────────────────────── */
export function Stats() {
  return (
    <section id="process" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <p className="text-center text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2 md:mb-4 transition-colors">
          How we work
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-900 dark:text-white leading-tight max-w-3xl mx-auto mb-4 md:mb-5 transition-colors"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          The social media process that&apos;s built to scale
        </h2>
        <p className="text-center text-slate-500 dark:text-zinc-400 max-w-md mx-auto mb-12 md:mb-20 text-sm leading-relaxed transition-colors px-4">
          A streamlined three-step system where you always know what&apos;s next, what&apos;s live, and what&apos;s growing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <AuditMock />
            <h3 className="text-base font-semibold text-slate-900 dark:text-white transition-colors">Audit & strategy</h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed transition-colors">
              We analyse your brand, map your competitors, and build a data-backed content strategy before a single post goes live.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <ScheduleMock />
            <h3 className="text-base font-semibold text-slate-900 dark:text-white transition-colors">Create & schedule</h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed transition-colors">
              Our team produces platform-native content and schedules it at peak engagement windows — automatically, every week.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <GrowthMock />
            <h3 className="text-base font-semibold text-slate-900 dark:text-white transition-colors">Analyze & optimize</h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed transition-colors">
              Real-time analytics feed back into the strategy. What works gets amplified; what doesn't gets replaced — fast.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
