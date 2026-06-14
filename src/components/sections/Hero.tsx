import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* ── Typewriter badge ─────────────────────────────────────────── */
const TEXT = "Award-winning social media agency";
const TYPING_SPEED = 48;
const START_DELAY = 400;

function AgencyBadge() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(TEXT.slice(0, i));
        if (i === TEXT.length) { clearInterval(interval); setDone(true); }
      }, TYPING_SPEED);
      return () => clearInterval(interval);
    }, START_DELAY);
    return () => clearTimeout(start);
  }, []);

  return (
    <div className="hero-badge inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full px-3 py-1.5 md:px-4 mb-6 md:mb-8">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500" />
      </span>
      <span className="text-[10px] md:text-xs font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 flex items-center">
        <span className="relative">
          <span className="invisible select-none" aria-hidden="true">{TEXT}</span>
          <span className="absolute inset-0">{displayed}</span>
        </span>
        <span className={`ml-0.5 inline-block w-[1.5px] h-[11px] bg-zinc-600 dark:bg-zinc-300 rounded-sm align-middle ${done ? "cursor-blink" : ""}`} />
      </span>
    </div>
  );
}

/* ── Social Dashboard Mockup ──────────────────────────────────── */
const PLATFORMS = [
  { label: "Instagram", color: "bg-zinc-800 dark:bg-zinc-200", dot: "bg-pink-400", active: true  },
  { label: "TikTok",    color: "bg-zinc-500",                   dot: "bg-zinc-400", active: false },
  { label: "LinkedIn",  color: "bg-zinc-500",                   dot: "bg-blue-400", active: false },
  { label: "Twitter",   color: "bg-zinc-500",                   dot: "bg-zinc-400", active: false },
];

const NAV_ITEMS = [
  { label: "Overview",   active: false,
    icon: <><rect x="1" y="1" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.1" fill="none"/><rect x="5" y="1" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.1" fill="none"/><rect x="1" y="5" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.1" fill="none"/><rect x="5" y="5" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.1" fill="none"/></> },
  { label: "Content",    active: false,
    icon: <><rect x="1" y="2" width="7" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.1" fill="none"/><path d="M1 4.5h7M3 1v2M6 1v2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></> },
  { label: "Analytics",  active: true,
    icon: <><path d="M1 7l2-2.5 2 1.5 3-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M6.5 2h2v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/></> },
  { label: "Campaigns",  active: false,
    icon: <path d="M1.5 4.5L4.5 2l3 2.5v5H1.5z M3 8v-2h3v2" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" fill="none"/> },
  { label: "Schedule",   active: false,
    icon: <><rect x="1" y="2" width="7" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.1" fill="none"/><path d="M1 4.5h7M3 1v2M6 1v2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></> },
];

const METRICS = [
  { label: "Total Reach",  value: "2.4M",  change: "+18%", idx: 0 },
  { label: "Eng. Rate",    value: "8.7%",  change: "+3.2%", idx: 1 },
  { label: "Followers",    value: "124K",  change: "+12%", idx: 2 },
  { label: "Posts / Mo",   value: "186",   change: "3 platforms", idx: 3 },
];

const WEEKS = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"];

/* Simple bar data — heights as % */
const BARS = [
  { label: "Instagram Stories",  top: "8%",  left: "0%",  width: "30%", bg: "bg-zinc-900 dark:bg-zinc-100", text: "text-white dark:text-zinc-900" },
  { label: "Reels",              top: "23%", left: "8%",  width: "22%", bg: "bg-zinc-600 dark:bg-zinc-400", text: "text-white dark:text-zinc-900" },
  { label: "LinkedIn Articles",  top: "38%", left: "22%", width: "26%", bg: "bg-zinc-800 dark:bg-zinc-200", text: "text-white dark:text-zinc-900" },
  { label: "TikToks",            top: "53%", left: "36%", width: "18%", bg: "bg-zinc-500 dark:bg-zinc-500", text: "text-white"                   },
  { label: "Twitter Threads",    top: "68%", left: "46%", width: "24%", bg: "bg-zinc-700 dark:bg-zinc-300", text: "text-white dark:text-zinc-900" },
  { label: "Campaigns",          top: "83%", left: "62%", width: "14%", bg: "bg-zinc-400 dark:bg-zinc-600", text: "text-zinc-900 dark:text-zinc-100" },
];

const RECENT_POSTS = [
  { platform: "Instagram", type: "Reel",     reach: "48K",  eng: "9.2%", status: "Published" },
  { platform: "LinkedIn",  type: "Article",  reach: "12K",  eng: "6.8%", status: "Scheduled" },
  { platform: "TikTok",    type: "Video",    reach: "91K",  eng: "14.1%", status: "Published" },
];

function SocialDashboardMockup() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="overflow-x-auto rounded-2xl shadow-2xl shadow-slate-200/80 dark:shadow-black/60">
        <div className="bg-white dark:bg-zinc-950 rounded-2xl border border-slate-100 dark:border-zinc-800 overflow-hidden min-w-[340px] transition-colors">

          {/* Top navbar */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 border-b border-slate-100 dark:border-zinc-800 transition-colors">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-[3px]">
                <div className="w-2.5 h-2.5 rounded-[3px] bg-zinc-900 dark:bg-white" />
                <div className="w-2.5 h-2.5 rounded-[3px] bg-zinc-400 dark:bg-zinc-500" />
              </div>
              <span className="text-[11px] font-bold text-zinc-900 dark:text-white">SocialSync</span>
            </div>
            <div className="hidden sm:flex items-center gap-5">
              {["Overview", "Content", "Analytics", "Campaigns", "Schedule", "Reports"].map((item, i) => (
                <span key={item} className={`text-[11px] cursor-default select-none transition-colors ${
                  i === 2
                    ? "text-slate-900 dark:text-white font-semibold border-b border-slate-800 dark:border-white pb-0.5"
                    : "text-slate-400 dark:text-zinc-500"
                }`}>{item}</span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-slate-100 dark:bg-zinc-800 rounded-full flex items-center justify-center transition-colors">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><circle cx="4" cy="4" r="2.5" stroke="currentColor" className="text-slate-400 dark:text-zinc-500" strokeWidth="1.2"/><path d="M6 6l2 2" stroke="currentColor" className="text-slate-400 dark:text-zinc-500" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
              <div className="w-5 h-5 bg-slate-100 dark:bg-zinc-800 rounded-full flex items-center justify-center relative transition-colors">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M4.5 1a2.5 2.5 0 012.5 2.5C7 5.5 8 6 8 7H1c0-1 1-1.5 1-3.5A2.5 2.5 0 014.5 1z" stroke="currentColor" className="text-slate-400 dark:text-zinc-500" strokeWidth="1.1"/><path d="M3.5 7.5a1 1 0 002 0" stroke="currentColor" className="text-slate-400 dark:text-zinc-500" strokeWidth="1.1"/></svg>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-zinc-500 rounded-full border border-white dark:border-zinc-950 transition-colors" />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-[9px] font-bold flex items-center justify-center transition-colors">S</div>
                <div className="hidden sm:block">
                  <p className="text-[10px] font-semibold text-slate-800 dark:text-zinc-200 leading-none transition-colors">StyleBrand</p>
                  <p className="text-[9px] text-slate-400 dark:text-zinc-500 leading-none transition-colors">style@brand.co</p>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex min-h-[420px]">

            {/* Left sidebar */}
            <aside className="hidden sm:flex flex-col w-44 bg-slate-50 dark:bg-zinc-900 border-r border-slate-100 dark:border-zinc-800 p-3 shrink-0 self-stretch transition-colors">
              <div className="flex items-center gap-1.5 px-1.5 mb-5">
                <div className="flex gap-[3px]">
                  <div className="w-2.5 h-2.5 rounded-[3px] bg-zinc-900 dark:bg-white" />
                  <div className="w-2.5 h-2.5 rounded-[3px] bg-zinc-400 dark:bg-zinc-500" />
                </div>
                <span className="text-[10px] font-bold text-zinc-800 dark:text-zinc-200">SocialSync</span>
              </div>

              {/* Nav */}
              <div className="space-y-0.5 mb-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-default select-none transition-colors ${
                    item.active
                      ? "bg-white dark:bg-zinc-800 shadow-sm border border-slate-200/70 dark:border-zinc-700 text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-zinc-400"
                  }`}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="shrink-0">{item.icon}</svg>
                    <span className="text-[10px] font-medium flex-1">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Platforms */}
              <p className="text-[9px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider px-2 mb-1.5 select-none transition-colors">Channels</p>
              <div className="space-y-0.5 mb-auto">
                {PLATFORMS.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 px-2 py-1 rounded-lg cursor-default select-none text-slate-500 dark:text-zinc-400 transition-colors">
                    <span className={`w-2 h-2 rounded-sm shrink-0 ${p.dot}`} />
                    <span className="text-[10px] flex-1">{p.label}</span>
                  </div>
                ))}
              </div>

              {/* Workspace */}
              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 mt-3 transition-colors">
                <p className="text-[9px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider px-2 mb-2 select-none transition-colors">Workspaces</p>
                {["StyleBrand", "TechCo"].map((w, i) => (
                  <div key={w} className="flex items-center gap-2 px-2 py-1 cursor-default select-none">
                    <div className={`w-5 h-5 rounded-full ${i === 0 ? "bg-zinc-400 dark:bg-zinc-600" : "bg-slate-300 dark:bg-zinc-600"} flex items-center justify-center text-white text-[7px] font-bold`}>{w[0]}</div>
                    <p className="text-[9px] font-medium text-slate-700 dark:text-zinc-300 leading-none transition-colors">{w}</p>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 p-4 flex flex-col overflow-hidden">
              <div className="flex items-start justify-between mb-2.5">
                <h3 className="text-sm font-bold text-slate-800 dark:text-zinc-100 transition-colors">Content Performance</h3>
                <div className="flex items-center gap-1.5">
                  <div className="border border-slate-200 dark:border-zinc-700 rounded px-2 py-0.5 flex items-center gap-1 text-[10px] text-slate-500 dark:text-zinc-400 cursor-default transition-colors">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 2h6M2 4h4M3 6h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </div>
                  <div className="border border-slate-200 dark:border-zinc-700 rounded px-2 py-0.5 flex items-center gap-1 text-[10px] text-slate-500 dark:text-zinc-400 cursor-default transition-colors">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.1"/><path d="M1 3h6" stroke="currentColor" strokeWidth="1.1"/></svg>
                    June
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none"><path d="M1 2l2 2 2-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
                  </div>
                </div>
              </div>

              {/* Chart toolbar */}
              <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                <div className="w-6 h-6 flex items-center justify-center rounded bg-zinc-50 dark:bg-zinc-800 cursor-default transition-colors">
                  <svg width="10" height="10" viewBox="0 0 8 8" fill="none" className="text-zinc-600 dark:text-zinc-400 transition-colors">
                    <path d="M1 6l2-2 2 2 2-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex items-center gap-0.5 ml-2 border border-slate-200 dark:border-zinc-700 rounded-md px-1 py-0.5 transition-colors">
                  {["D", "W", "M", "Q", "All"].map((t, i) => (
                    <span key={t} className={`text-[9px] px-1.5 py-0.5 rounded cursor-default select-none transition-colors ${
                      i === 2 ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900" : "text-slate-400 dark:text-zinc-500"
                    }`}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Gantt-style content schedule */}
              <div className="relative" style={{ height: "155px" }}>
                <div className="absolute left-0 top-0 bottom-5 flex flex-col justify-between text-[8px] text-slate-400 dark:text-zinc-500 w-7 pointer-events-none transition-colors">
                  {["5×", "4×", "3×", "2×", "1×", "0"].map((l) => <span key={l}>{l}</span>)}
                </div>
                <div className="gantt-bg absolute left-8 right-0 top-0 bottom-5 overflow-hidden">
                  {[0,1,2,3,4,5].map((i) => (
                    <div key={i} className="absolute left-0 right-0 border-t border-[#c8bfae]/50 dark:border-[#3a2f1e]/60 transition-colors" style={{ top: `${(i/5)*100}%` }} />
                  ))}
                  {BARS.map((bar) => (
                    <div key={bar.label} className={`absolute ${bar.bg} rounded flex items-center px-2 overflow-hidden transition-colors`}
                      style={{ top: bar.top, left: bar.left, width: ready ? bar.width : "0%", height: "13%", transition: `width 600ms cubic-bezier(0.4, 0, 0.2, 1) ${BARS.indexOf(bar) * 150}ms` }}>
                      <span className={`text-[8px] ${bar.text} font-medium whitespace-nowrap transition-colors`}>{bar.label}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[8px] text-slate-400 dark:text-zinc-500 select-none transition-colors">
                  {WEEKS.map((l) => <span key={l}>{l}</span>)}
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 pb-3 border-b border-slate-100 dark:border-zinc-800 transition-colors">
                {[
                  { c: "bg-zinc-300 dark:bg-zinc-600", l: "Instagram" },
                  { c: "bg-zinc-300 dark:bg-zinc-600", l: "TikTok"    },
                  { c: "bg-zinc-300 dark:bg-zinc-500", l: "LinkedIn"  },
                  { c: "bg-zinc-300 dark:bg-zinc-600", l: "Twitter"   },
                  { c: "bg-zinc-300 dark:bg-zinc-500", l: "Campaigns" },
                ].map((item) => (
                  <div key={item.l} className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${item.c} transition-colors`} />
                    <span className="text-[9px] text-slate-500 dark:text-zinc-400 select-none transition-colors">{item.l}</span>
                  </div>
                ))}
              </div>

              {/* Recent posts table */}
              <div className="mt-3 flex-1 overflow-x-auto">
                <div className="min-w-[280px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 transition-colors">Recent posts</span>
                    <div className="flex items-center gap-0.5 border border-slate-200 dark:border-zinc-700 rounded px-2 py-0.5 text-[9px] text-slate-500 dark:text-zinc-400 cursor-default select-none transition-colors">
                      All Platforms
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="ml-0.5"><path d="M1 2l2 2 2-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                  <div className="text-[9px]">
                    <div className="grid grid-cols-4 text-slate-400 dark:text-zinc-500 pb-1.5 border-b border-slate-200 dark:border-zinc-700 transition-colors">
                      <span>Platform</span><span>Type</span><span className="text-right">Reach</span><span className="text-right">Eng.</span>
                    </div>
                    {RECENT_POSTS.map((p) => (
                      <div key={p.platform + p.type} className="grid grid-cols-4 py-1.5 border-b border-slate-50 dark:border-zinc-800/50 transition-colors">
                        <span className="font-semibold text-zinc-600 dark:text-zinc-300 transition-colors">{p.platform}</span>
                        <span className="text-slate-500 dark:text-zinc-400">{p.type}</span>
                        <span className="text-right text-slate-600 dark:text-zinc-300">{p.reach}</span>
                        <span className="text-right text-zinc-600 dark:text-zinc-300">{p.eng}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right stats panel */}
            <div className="hidden md:flex flex-col w-40 border-l border-slate-100 dark:border-zinc-800 p-4 shrink-0 self-stretch transition-colors">
              <p className="text-[9px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5 select-none transition-colors">Avg Engagement</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">8.7%</p>
              <div className="w-full bg-slate-100 dark:bg-zinc-800 rounded-full h-1 mb-4 overflow-hidden transition-colors">
                <div className="h-1 bg-zinc-500 dark:bg-zinc-400 rounded-full"
                  style={{ width: ready ? "87%" : "0%", transition: "width 800ms cubic-bezier(0.4, 0, 0.2, 1) 200ms" }} />
              </div>
              <div className="border-t border-slate-100 dark:border-zinc-800 transition-colors" />
              <div className="space-y-0 flex-1">
                {METRICS.map((m, idx) => (
                  <div key={m.label} className="py-3 border-b border-slate-100 dark:border-zinc-800 transition-colors">
                    <p className="text-[9px] text-slate-400 dark:text-zinc-500 mb-1 select-none transition-colors">{m.label}</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-zinc-100 mb-1.5 transition-colors">
                      {m.value}{" "}
                      <span className="text-[9px] font-normal text-zinc-500 dark:text-zinc-400">{m.change}</span>
                    </p>
                    <div className="w-full bg-slate-100 dark:bg-zinc-800 rounded-full h-0.5 overflow-hidden transition-colors">
                      <div className="h-0.5 bg-slate-300 dark:bg-zinc-600 rounded-full transition-colors"
                        style={{ width: ready ? `${[72, 87, 60, 45][idx]}%` : "0%", transition: `width 600ms cubic-bezier(0.4, 0, 0.2, 1) ${300 + idx * 150}ms` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      <div className="grid-bg absolute inset-0 z-0 pointer-events-none" />

      {/* Text */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-10 md:pb-14 text-center">
        <AgencyBadge />

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6 transition-colors">
          Grow your brand and
          <br />
          dominate{" "}
          <em
            className="not-italic font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            social media.
          </em>
        </h1>

        <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed transition-colors">
          We build content that stops the scroll, grows real audiences, and turns followers into revenue — backed by data, not guesswork.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
          <Link
            to="/book"
            className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-700 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 font-medium px-7 py-3 rounded-full transition-colors text-sm shadow-lg shadow-zinc-900/10"
          >
            Book a Free Call
          </Link>
          <Link
            to="/work"
            className="w-full sm:w-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 text-slate-700 dark:text-zinc-300 font-medium px-7 py-3 rounded-full transition-colors text-sm shadow-sm"
          >
            See our work
          </Link>
        </div>
      </div>

      {/* Dashboard mockup */}
      <SocialDashboardMockup />
    </section>
  );
}
