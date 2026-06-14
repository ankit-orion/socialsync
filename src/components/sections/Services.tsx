/* ── Dark mockup cards (like ai-roadmap feature cards) ─────────── */
function ContentMock() {
  const posts = [
    { handle: "@clientbrand", platform: "Instagram", likes: "4.2K", type: "Reel", color: "#E1306C" },
    { handle: "@clientbrand", platform: "TikTok",    likes: "12.8K",type: "Video",color: "#000"    },
    { handle: "@clientbrand", platform: "LinkedIn",  likes: "1.4K", type: "Post", color: "#0A66C2" },
  ];
  return (
    <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-6 transition-colors">
      <div className="flex items-center justify-between text-xs text-zinc-400 mb-4">
        <span>Content published</span>
        <span>This month</span>
      </div>
      <div className="space-y-2">
        {posts.map((p) => (
          <div key={p.platform} className="flex items-center justify-between bg-zinc-800 dark:bg-zinc-700/50 rounded-lg px-3 py-2.5 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[6px] font-black" style={{ background: p.color }}>{p.platform[0]}</div>
              <div>
                <div className="text-white text-xs font-medium">{p.platform}</div>
                <div className="text-zinc-500 text-xs">{p.handle}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-xs">{p.type}</span>
              <span className="text-zinc-300 text-xs font-semibold">♥ {p.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SchedulingMock() {
  const slots = [
    { time: "9:00 AM",  day: "Mon", post: "Product Reel",    eng: "Peak",  active: true  },
    { time: "12:00 PM", day: "Wed", post: "Case Study",      eng: "High",  active: false },
    { time: "6:00 PM",  day: "Thu", post: "Behind the Scenes",eng: "Peak", active: false },
    { time: "7:00 PM",  day: "Fri", post: "Industry Tip",    eng: "Good",  active: false },
  ];
  return (
    <div className="bg-zinc-700 dark:bg-zinc-800 rounded-2xl p-6 transition-colors">
      <div className="flex items-center justify-between text-xs text-white/70 mb-4">
        <span>Optimal schedule · June</span>
        <span>AI-optimised</span>
      </div>
      <div className="space-y-2">
        {slots.map((s) => (
          <div key={s.day + s.time} className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${s.active ? "bg-white/20" : "bg-white/10"}`}>
            <div>
              <div className="text-white text-xs font-medium">{s.post}</div>
              <div className="text-white/60 text-xs">{s.day} · {s.time}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              s.eng === "Peak" ? "bg-white text-zinc-700" : "bg-white/20 text-white"
            }`}>{s.eng}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsMock() {
  const kpis = [
    { label: "Total Followers", val: "2.4M",  done: true  },
    { label: "Monthly Reach",   val: "12.1M", done: true  },
    { label: "Avg Eng. Rate",   val: "8.7%",  done: true  },
    { label: "Posts This Month",val: "186",   done: false },
    { label: "Campaigns Live",  val: "3",     done: false },
  ];
  return (
    <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-6 transition-colors">
      <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
        <span>Dashboard</span>
        <span className="text-zinc-400">Live</span>
      </div>
      <div className="w-full bg-zinc-800 dark:bg-zinc-700 rounded-full h-1.5 mb-4 transition-colors">
        <div className="bg-zinc-400 h-1.5 rounded-full w-3/5" />
      </div>
      <div className="space-y-2">
        {kpis.map((k) => (
          <div key={k.label} className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${k.done ? "bg-zinc-800 dark:bg-zinc-700/80" : "bg-zinc-900/50 dark:bg-zinc-700/30"}`}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-xs shrink-0 transition-colors ${k.done ? "bg-zinc-500 text-white" : "border border-zinc-600"}`}>
              {k.done && "✓"}
            </div>
            <span className={`text-xs flex-1 transition-colors ${k.done ? "text-zinc-500 line-through" : "text-white"}`}>{k.label}</span>
            <span className="text-xs font-semibold text-zinc-400">{k.val}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 bg-zinc-900/30 border border-zinc-800/40 rounded-lg px-3 py-2 text-xs text-zinc-400 transition-colors">
        ↻ Report refreshed · 5 min ago
      </div>
    </div>
  );
}

/* ── Services / Results section ───────────────────────────────── */
export function Services() {
  return (
    <section id="results" className="py-16 md:py-24 bg-white/50 dark:bg-transparent border-t border-zinc-100 dark:border-zinc-800/50 transition-colors duration-500 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <p className="text-center text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2 md:mb-4 transition-colors">
          Our results
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-900 dark:text-white leading-tight max-w-2xl mx-auto mb-4 transition-colors"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Powerful strategies built for <em className="not-italic font-bold" style={{ fontStyle: "italic" }}>real growth</em>
        </h2>
        <p className="text-center text-slate-500 dark:text-zinc-400 max-w-md mx-auto mb-12 md:mb-20 text-sm transition-colors">
          Every tactic we use is tied to a number. Here&apos;s what we deliver.
        </p>

        {/* Feature 1 — Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
              Platform-native content
            </h3>
            <p className="text-slate-500 dark:text-zinc-400 mb-8 leading-relaxed transition-colors">
              We produce scroll-stopping Reels, carousels, threads, and articles — each one tailored to how that platform&apos;s algorithm rewards content.
            </p>
            <div className="text-6xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">186</div>
            <div className="text-sm text-slate-400 dark:text-zinc-500 transition-colors">pieces of content published per month</div>
          </div>
          <ContentMock />
        </div>

        {/* Feature 2 — Scheduling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div className="order-2 md:order-1">
            <SchedulingMock />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
              Data-backed scheduling
            </h3>
            <p className="text-slate-500 dark:text-zinc-400 mb-8 leading-relaxed transition-colors">
              We post when your specific audience is most active — not when a generic "best practice" guide says to. Every post hits at peak engagement windows.
            </p>
            <div className="text-6xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">2.5×</div>
            <div className="text-sm text-slate-400 dark:text-zinc-500 transition-colors">more reach vs. manual random posting</div>
          </div>
        </div>

        {/* Feature 3 — Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
              Growth that compounds
            </h3>
            <p className="text-slate-500 dark:text-zinc-400 mb-8 leading-relaxed transition-colors">
              Every metric is tracked in real time. We cut what underperforms and double down on what works — so results accelerate the longer we run.
            </p>
            <div className="text-6xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">8.7%</div>
            <div className="text-sm text-slate-400 dark:text-zinc-500 transition-colors">average engagement rate across all clients</div>
          </div>
          <AnalyticsMock />
        </div>

      </div>
    </section>
  );
}
