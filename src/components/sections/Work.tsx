import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

interface Slide {
  bg: string; accent: string; label: string; headline: string; body: string; tag: string; image: string;
}
interface CarouselPost {
  id: number; topic: string; category: string; stat: string; slides: Slide[];
  illustration: React.ReactNode;
}

const carousels: CarouselPost[] = [
  {
    id: 1, topic: "Strategy & Brand Positioning", category: "We Help You Define Your Voice And Dominate Your Niche With A Tailored Social Media Strategy Built Around Data And Audience Insights.",
    stat: "6 slides",
    illustration: (
      <div className="flex items-end justify-center gap-2 h-24">
        {[60,85,50,100,70,90].map((h, i) => (
          <div key={i} className="w-5 rounded-t-md flex-shrink-0" style={{ height: `${h}%`, background: i === 3 ? '#c8f03c' : i % 2 === 0 ? '#7c3aed' : '#0d0d0d', opacity: i === 3 ? 1 : 0.15 + i * 0.1 }} />
        ))}
      </div>
    ),
    slides: [
      { bg: "#0f0f1a", accent: "#61dafb", label: "01 / 06", headline: "React Hooks\nYou Actually\nNeed to Know", body: "Stop memorising. Start understanding.", tag: "#ReactJS", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800" },
      { bg: "#0d1117", accent: "#61dafb", label: "02 / 06", headline: "useState", body: "The foundation of interactivity.", tag: "#useState", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800" },
      { bg: "#0d1117", accent: "#f7df1e", label: "03 / 06", headline: "useEffect", body: "Sync with the outside world.", tag: "#useEffect", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800" },
      { bg: "#0d1117", accent: "#a855f7", label: "04 / 06", headline: "useCallback\n& useMemo", body: "Memoize functions and values.", tag: "#Performance", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800" },
      { bg: "#0d1117", accent: "#22d3ee", label: "05 / 06", headline: "useRef", body: "Escape the render cycle.", tag: "#useRef", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800" },
      { bg: "#0f0f1a", accent: "#61dafb", label: "06 / 06", headline: "Save this\nfor your\nnext build.", body: "Follow for more dev deep-dives.", tag: "#ReactJS", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800" },
    ],
  },
  {
    id: 2, topic: "Content Creation Engine", category: "Our Content Team Produces Scroll-Stopping Visuals, Hooks, And Short-Form Video That Drives Real Engagement And Converts Followers Into Buyers.",
    stat: "5 slides",
    illustration: (
      <div className="relative h-24 flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#0d0d0d" strokeWidth="1" strokeOpacity="0.1"/>
            <circle cx="40" cy="16" r="6" fill="#c8f03c"/>
            <circle cx="62" cy="52" r="5" fill="#7c3aed"/>
            <circle cx="18" cy="52" r="4" fill="#0d0d0d" opacity="0.2"/>
            <line x1="40" y1="22" x2="58" y2="47" stroke="#0d0d0d" strokeOpacity="0.15" strokeDasharray="3 3"/>
            <line x1="40" y1="22" x2="22" y2="47" stroke="#0d0d0d" strokeOpacity="0.15" strokeDasharray="3 3"/>
          </svg>
        </div>
      </div>
    ),
    slides: [
      { bg: "#020617", accent: "#f97316", label: "01 / 05", headline: "System Design\nCheatsheet", body: "The concepts that make or break your architecture.", tag: "#SystemDesign", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800" },
      { bg: "#020617", accent: "#f97316", label: "02 / 05", headline: "Load\nBalancing", body: "Distribute traffic across servers.", tag: "#LoadBalancer", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800" },
      { bg: "#020617", accent: "#10b981", label: "03 / 05", headline: "Caching\nStrategies", body: "Redis for speed, CDN for static.", tag: "#Redis", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
      { bg: "#020617", accent: "#6366f1", label: "04 / 05", headline: "Message\nQueues", body: "Decouple services with async messaging.", tag: "#Kafka", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
      { bg: "#020617", accent: "#f97316", label: "05 / 05", headline: "Design for\nfailure.", body: "Follow for weekly deep-dives.", tag: "#SystemDesign", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800" },
    ],
  },
  {
    id: 3, topic: "Multi-Platform Distribution", category: "We Publish And Optimise Content Across Every Channel — Instagram, TikTok, YouTube, LinkedIn — Reaching The Right Audience At The Right Time.",
    stat: "5 slides",
    illustration: (
      <div className="flex items-center justify-center h-24 gap-3">
        {[
          { w: 'w-full', h: 'h-2', bg: '#0d0d0d', op: '0.08' },
          { w: 'w-3/4', h: 'h-2', bg: '#c8f03c', op: '1' },
          { w: 'w-full', h: 'h-2', bg: '#0d0d0d', op: '0.08' },
          { w: 'w-1/2', h: 'h-2', bg: '#7c3aed', op: '0.6' },
          { w: 'w-full', h: 'h-2', bg: '#0d0d0d', op: '0.08' },
        ].map((bar, i) => (
          <div key={i} className="w-full">
            <div className={`${bar.h} rounded-full`} style={{ width: bar.w === 'w-full' ? '100%' : bar.w === 'w-3/4' ? '75%' : '50%', background: bar.bg, opacity: parseFloat(bar.op) }} />
          </div>
        ))}
      </div>
    ),
    slides: [
      { bg: "#1a0a00", accent: "#f05032", label: "01 / 05", headline: "Git Commands\nEvery Dev\nMust Know", body: "Beyond add, commit, push.", tag: "#Git", image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800" },
      { bg: "#0d0d0d", accent: "#f05032", label: "02 / 05", headline: "git stash", body: "Shelve dirty work before switching branches.", tag: "#GitStash", image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800" },
      { bg: "#0d0d0d", accent: "#facc15", label: "03 / 05", headline: "git rebase\n-i", body: "Rewrite history cleanly.", tag: "#GitRebase", image: "https://images.unsplash.com/photo-1610986602538-431d65df4385?q=80&w=800" },
      { bg: "#0d0d0d", accent: "#4ade80", label: "04 / 05", headline: "git bisect", body: "Binary search for the bug.", tag: "#Debugging", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800" },
      { bg: "#1a0a00", accent: "#f05032", label: "05 / 05", headline: "Your history\nis your\ndocumentation.", body: "Follow for more tips.", tag: "#Git", image: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=800" },
    ],
  },
  {
    id: 4, topic: "Growth Analytics & Reporting", category: "We Track Every Metric That Matters. From Reach To Revenue, You Get Clear And Actionable Reports That Show Exactly What Is Working.",
    stat: "5 slides",
    illustration: (
      <div className="h-24 flex items-end justify-center gap-1.5">
        {[30,50,40,70,55,80,65,90].map((h, i) => (
          <div key={i} className="w-4 rounded-t-sm" style={{ height: `${h}%`, background: i === 7 ? '#c8f03c' : '#0d0d0d', opacity: 0.1 + i * 0.1 }} />
        ))}
      </div>
    ),
    slides: [
      { bg: "#001529", accent: "#3178c6", label: "01 / 05", headline: "TypeScript\nTips That\nActually Help", body: "Level up your type game.", tag: "#TypeScript", image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=800" },
      { bg: "#001529", accent: "#3178c6", label: "02 / 05", headline: "Discriminated\nUnions", body: "Model state machines cleanly.", tag: "#TypeScript", image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800" },
      { bg: "#001529", accent: "#a78bfa", label: "03 / 05", headline: "Utility Types", body: "Partial, Pick, Omit, Record.", tag: "#UtilityTypes", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800" },
      { bg: "#001529", accent: "#34d399", label: "04 / 05", headline: "satisfies\nOperator", body: "Validate without widening.", tag: "#TypeScript4.9", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800" },
      { bg: "#001529", accent: "#3178c6", label: "05 / 05", headline: "Types are\ndocumentation\nthat never lies.", body: "Follow for weekly breakdowns.", tag: "#TypeScript", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800" },
    ],
  },
  {
    id: 5, topic: "Paid Social Advertising", category: "We Run Hyper-Targeted Ad Campaigns On Every Platform, Optimising For ROAS And Turning Every Rupee Of Ad Spend Into Measurable Revenue.",
    stat: "4 slides",
    illustration: (
      <div className="relative h-24 flex items-center justify-center">
        <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
          <circle cx="40" cy="40" r="30" stroke="#0d0d0d" strokeWidth="1" strokeOpacity="0.08"/>
          <circle cx="40" cy="40" r="20" stroke="#0d0d0d" strokeWidth="1" strokeOpacity="0.15"/>
          <circle cx="40" cy="40" r="10" stroke="#0d0d0d" strokeWidth="1" strokeOpacity="0.25"/>
          <circle cx="40" cy="40" r="4" fill="#c8f03c"/>
          <line x1="44" y1="36" x2="58" y2="22" stroke="#0d0d0d" strokeWidth="1.5" strokeOpacity="0.4"/>
          <circle cx="60" cy="20" r="3" fill="#0d0d0d" opacity="0.4"/>
        </svg>
      </div>
    ),
    slides: [
      { bg: "#0a001f", accent: "#e44d9c", label: "01 / 04", headline: "CSS Tricks\nPro Devs\nUse Daily", body: "Write less. Achieve more.", tag: "#CSS", image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800" },
      { bg: "#0a001f", accent: "#e44d9c", label: "02 / 04", headline: "clamp()\nfor Fluid\nTypography", body: "Zero media queries.", tag: "#CSSClamp", image: "https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=800" },
      { bg: "#0a001f", accent: "#fb923c", label: "03 / 04", headline: ":has()\nChanges\nEverything", body: "The parent selector.", tag: "#CSSHas", image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800" },
      { bg: "#0a001f", accent: "#e44d9c", label: "04 / 04", headline: "Good CSS\nis invisible.", body: "Follow for more CSS deep-dives.", tag: "#CSS", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800" },
    ],
  },
];

function LightboxSlide({ slide }: { slide: Slide }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: slide.bg }}>
      <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${slide.bg}ee 0%, ${slide.bg}88 60%, ${slide.accent}22 100%)` }} />
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: slide.accent }} />
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <span className="text-[10px] font-black tracking-[0.2em] uppercase" style={{ color: slide.accent }}>{slide.label}</span>
        <div className="space-y-3">
          <h3 className="text-2xl font-black leading-tight text-white whitespace-pre-line">{slide.headline}</h3>
          <p className="text-[13px] text-white/70 font-medium leading-relaxed">{slide.body}</p>
        </div>
        <span className="text-[10px] font-bold" style={{ color: slide.accent + 'cc' }}>{slide.tag}</span>
      </div>
    </div>
  );
}

export function Work() {
  const [start, setStart] = useState(0);
  const [active, setActive] = useState<CarouselPost | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const visible = 3;
  const canPrev = start > 0;
  const canNext = start + visible < carousels.length;
  const prev = () => canPrev && setStart(s => s - 1);
  const next = () => canNext && setStart(s => s + 1);

  const openLightbox = (c: CarouselPost) => { setActive(c); setSlideIndex(0); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setActive(null); document.body.style.overflow = 'auto'; };
  const lbPrev = () => setSlideIndex(s => s === 0 ? (active?.slides.length ?? 1) - 1 : s - 1);
  const lbNext = () => setSlideIndex(s => s === (active?.slides.length ?? 1) - 1 ? 0 : s + 1);

  return (
    <section id="work" className="bg-[#e8e8e8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header + arrows */}
        <div className="flex items-start justify-between mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0d0d0d] leading-tight tracking-tight max-w-lg">
            Up-To-Date And Fast Social
            <br />Media Services In One Place
          </h2>
          <div className="flex items-center gap-2 flex-shrink-0 mt-2">
            <button
              onClick={prev}
              disabled={!canPrev}
              className="w-10 h-10 rounded-full border-2 border-[#0d0d0d]/20 flex items-center justify-center hover:border-[#0d0d0d]/60 transition-colors disabled:opacity-30"
            >
              <ArrowLeft className="w-4 h-4 text-[#0d0d0d]" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className="w-10 h-10 rounded-full bg-[#c8f03c] flex items-center justify-center hover:bg-[#b8e02c] transition-colors disabled:opacity-30"
            >
              <ArrowRight className="w-4 h-4 text-[#0d0d0d]" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {carousels.slice(start, start + visible).map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => openLightbox(c)}
                className="bg-white rounded-[24px] p-7 cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-center font-black text-[#0d0d0d] text-base leading-snug mb-3">{c.topic}</h3>
                <p className="text-center text-[#0d0d0d]/45 text-[12px] leading-relaxed font-medium mb-6">{c.category}</p>
                <div className="mt-auto pt-4 border-t border-[#0d0d0d]/[0.06]">
                  {c.illustration}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={closeLightbox}>
            <motion.div initial={{ scale: 0.88, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.88, y: 40 }}
              transition={{ type: "spring", damping: 28, stiffness: 380 }}
              className="relative w-full max-w-sm pointer-events-auto" onClick={e => e.stopPropagation()}>
              <div className="rounded-[2.5rem] overflow-hidden border-[10px] border-zinc-800 shadow-2xl bg-zinc-800">
                <div className="bg-zinc-800 flex justify-center py-2"><div className="w-20 h-1.5 bg-zinc-600 rounded-full" /></div>
                <div className="relative bg-black" style={{ aspectRatio: '4/5' }}>
                  <AnimatePresence mode="wait">
                    <motion.div key={slideIndex} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.22 }} className="absolute inset-0">
                      <LightboxSlide slide={active.slides[slideIndex]} />
                    </motion.div>
                  </AnimatePresence>
                  <button className="absolute left-0 inset-y-0 w-1/3 z-20" onClick={lbPrev} />
                  <button className="absolute right-0 inset-y-0 w-1/3 z-20" onClick={lbNext} />
                </div>
                <div className="bg-zinc-900 px-5 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {active.slides.map((_, i) => (
                      <button key={i} onClick={() => setSlideIndex(i)} className="rounded-full transition-all duration-200"
                        style={{ width: i === slideIndex ? 16 : 6, height: 6, background: i === slideIndex ? active.slides[slideIndex].accent : '#ffffff30' }} />
                    ))}
                  </div>
                  <div className="flex gap-1">
                    <button onClick={lbPrev} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><ChevronLeft className="w-4 h-4 text-white" /></button>
                    <button onClick={lbNext} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><ChevronRight className="w-4 h-4 text-white" /></button>
                  </div>
                </div>
                <div className="bg-zinc-800 flex justify-center py-2"><div className="w-24 h-1 bg-zinc-600 rounded-full" /></div>
              </div>
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="text-white font-black text-base">{active.topic}</p>
                  <p className="text-white/40 text-xs font-medium">{slideIndex + 1} / {active.slides.length}</p>
                </div>
                <button onClick={closeLightbox} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><X className="w-4 h-4 text-white" /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
