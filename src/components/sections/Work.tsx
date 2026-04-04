import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Users, LayoutGrid, Plus } from "lucide-react";

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0">
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <path d="M10 1.5l2.12 2.88 3.53-.4.4 3.53L18.93 10l-2.88 2.12.4 3.53-3.53-.4L10 18.5l-2.12-2.88-3.53.4-.4-3.53L1.07 10l2.88-2.12-.4-3.53 3.53.4L10 1.5z" fill="#22c55e"/>
        <path d="M7 10.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

interface Slide {
  bg: string;
  accent: string;
  label: string;
  headline: string;
  body: string;
  tag: string;
  image: string;
}

interface CarouselPost {
  id: number;
  topic: string;
  category: string;
  stat: string;
  slides: Slide[];
}

const carousels: CarouselPost[] = [
  {
    id: 1,
    topic: "React Hooks",
    category: "Frontend Education",
    stat: "6 slides",
    slides: [
      { bg: "#0f0f1a", accent: "#61dafb", label: "01 / 06", headline: "React Hooks\nYou Actually\nNeed to Know", body: "Stop memorising. Start understanding.", tag: "#ReactJS #Frontend", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0d1117", accent: "#61dafb", label: "02 / 06", headline: "useState", body: "The foundation of interactivity. Stores a value and triggers a re-render when it changes.", tag: "#useState", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0d1117", accent: "#f7df1e", label: "03 / 06", headline: "useEffect", body: "Sync your component with the outside world — APIs, timers, subscriptions. Always clean up.", tag: "#useEffect", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0d1117", accent: "#a855f7", label: "04 / 06", headline: "useCallback\n& useMemo", body: "Memoize functions and computed values. Use them to skip re-renders.", tag: "#Performance", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0d1117", accent: "#22d3ee", label: "05 / 06", headline: "useRef", body: "Escape the render cycle. Perfect for DOM access and mutable refs.", tag: "#useRef", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0f0f1a", accent: "#61dafb", label: "06 / 06", headline: "Save this\nfor your\nnext build.", body: "Follow for more dev deep-dives every week.", tag: "#ReactJS #WebDev", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 2,
    topic: "System Design",
    category: "Backend Engineering",
    stat: "5 slides",
    slides: [
      { bg: "#020617", accent: "#f97316", label: "01 / 05", headline: "System Design\nCheatsheet\nfor Devs", body: "The concepts that make or break your architecture.", tag: "#SystemDesign", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
      { bg: "#020617", accent: "#f97316", label: "02 / 05", headline: "Load\nBalancing", body: "Distribute traffic across servers. Round-robin, least connections, or IP hash.", tag: "#LoadBalancer", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop" },
      { bg: "#020617", accent: "#10b981", label: "03 / 05", headline: "Caching\nStrategies", body: "Read-through, write-through, cache-aside. Redis for speed, CDN for static.", tag: "#Redis", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
      { bg: "#020617", accent: "#6366f1", label: "04 / 05", headline: "Message\nQueues", body: "Decouple services with async messaging. Kafka for streams, RabbitMQ for tasks.", tag: "#Kafka", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      { bg: "#020617", accent: "#f97316", label: "05 / 05", headline: "Design for\nfailure, not\nfor success.", body: "Follow for weekly system design deep-dives.", tag: "#SystemDesign", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 3,
    topic: "Git Workflow",
    category: "Dev Productivity",
    stat: "5 slides",
    slides: [
      { bg: "#1a0a00", accent: "#f05032", label: "01 / 05", headline: "Git Commands\nEvery Dev\nMust Know", body: "Beyond add, commit, push.", tag: "#Git #DevOps", image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0d0d0d", accent: "#f05032", label: "02 / 05", headline: "git stash", body: "Shelve dirty work before switching branches.", tag: "#GitStash", image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0d0d0d", accent: "#facc15", label: "03 / 05", headline: "git rebase\n-i", body: "Rewrite history cleanly. Squash WIP commits before you push.", tag: "#GitRebase", image: "https://images.unsplash.com/photo-1610986602538-431d65df4385?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0d0d0d", accent: "#4ade80", label: "04 / 05", headline: "git bisect", body: "Binary search through commits to pinpoint the bug.", tag: "#Debugging", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop" },
      { bg: "#1a0a00", accent: "#f05032", label: "05 / 05", headline: "Your history\nis your\ndocumentation.", body: "Follow for more developer workflow tips.", tag: "#Git", image: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 4,
    topic: "TypeScript Tips",
    category: "Language Deep-Dive",
    stat: "5 slides",
    slides: [
      { bg: "#001529", accent: "#3178c6", label: "01 / 05", headline: "TypeScript\nTips That\nActually Help", body: "Level up your type game without the pain.", tag: "#TypeScript", image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=800&auto=format&fit=crop" },
      { bg: "#001529", accent: "#3178c6", label: "02 / 05", headline: "Discriminated\nUnions", body: "Model state machines cleanly — exhaustive narrowing.", tag: "#TypeScript", image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800&auto=format&fit=crop" },
      { bg: "#001529", accent: "#a78bfa", label: "03 / 05", headline: "Utility Types", body: "Partial, Pick, Omit, Record. Compose, don't duplicate.", tag: "#UtilityTypes", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" },
      { bg: "#001529", accent: "#34d399", label: "04 / 05", headline: "satisfies\nOperator", body: "Validate against a type without widening it. TS 4.9.", tag: "#TypeScript4.9", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" },
      { bg: "#001529", accent: "#3178c6", label: "05 / 05", headline: "Types are\ndocumentation\nthat never lies.", body: "Follow for weekly TypeScript breakdowns.", tag: "#TypeScript", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 5,
    topic: "CSS Mastery",
    category: "Frontend Styling",
    stat: "4 slides",
    slides: [
      { bg: "#0a001f", accent: "#e44d9c", label: "01 / 04", headline: "CSS Tricks\nPro Devs\nUse Daily", body: "Write less. Achieve more.", tag: "#CSS #Frontend", image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0a001f", accent: "#e44d9c", label: "02 / 04", headline: "clamp()\nfor Fluid\nTypography", body: "Responsive sizes with zero media queries.", tag: "#CSSClamp", image: "https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0a001f", accent: "#fb923c", label: "03 / 04", headline: ":has()\nChanges\nEverything", body: "The parent selector. Now baseline across all modern browsers.", tag: "#CSSHas", image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop" },
      { bg: "#0a001f", accent: "#e44d9c", label: "04 / 04", headline: "Good CSS\nis invisible.", body: "Follow for more CSS deep-dives.", tag: "#CSS", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop" },
    ],
  },
];

export function Work() {
  const [active, setActive] = useState<CarouselPost | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const open = (c: CarouselPost) => {
    setActive(c);
    setSlideIndex(0);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setActive(null);
    document.body.style.overflow = "auto";
  };
  const prev = () => setSlideIndex((s) => (s === 0 ? (active?.slides.length ?? 1) - 1 : s - 1));
  const next = () => setSlideIndex((s) => (s === (active?.slides.length ?? 1) - 1 ? 0 : s + 1));


  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Work that <span className="italic font-light text-muted-foreground">performs</span>.
            </h2>
            <p className="text-xl text-muted-foreground">
              We don't just make things look pretty. We engineer creative that drives measurable business impact. Check out our recent wins.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 font-medium hover:text-primary transition-colors py-2 border-b border-transparent hover:border-primary">
            View all case studies <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {carousels.map((carousel, index) => (
            <CarouselCard key={carousel.id} carousel={carousel} index={index} onClick={() => open(carousel)} />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.88, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.88, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 380 }}
              className="relative w-full max-w-sm pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Phone chrome */}
              <div className="rounded-[2.5rem] overflow-hidden border-[10px] border-zinc-800 shadow-2xl bg-zinc-800">
                <div className="bg-zinc-800 flex justify-center py-2">
                  <div className="w-20 h-1.5 bg-zinc-600 rounded-full" />
                </div>

                <div className="relative bg-black" style={{ aspectRatio: "4/5" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slideIndex}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0"
                    >
                      <LightboxSlide slide={active.slides[slideIndex]} />
                    </motion.div>
                  </AnimatePresence>
                  <button className="absolute left-0 inset-y-0 w-1/3 z-20" onClick={prev} aria-label="Previous" />
                  <button className="absolute right-0 inset-y-0 w-1/3 z-20" onClick={next} aria-label="Next" />
                </div>

                <div className="bg-zinc-900 px-5 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {active.slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        className="rounded-full transition-all duration-200"
                        style={{
                          width: i === slideIndex ? 16 : 6,
                          height: 6,
                          background: i === slideIndex ? active.slides[slideIndex].accent : "#ffffff30",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-1">
                    <button onClick={prev} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button onClick={next} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="bg-zinc-800 flex justify-center py-2">
                  <div className="w-24 h-1 bg-zinc-600 rounded-full" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="text-white font-black text-base">{active.topic}</p>
                  <p className="text-white/40 text-xs font-medium">{slideIndex + 1} / {active.slides.length}</p>
                </div>
                <button onClick={close} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Card component ── */
const reachStats = ["12.4k", "8.9k", "21.1k", "6.3k", "15.7k"];

function CarouselCard({
  carousel,
  index,
  onClick,
}: {
  carousel: CarouselPost;
  index: number;
  onClick: () => void;
}) {
  const first = carousel.slides[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-[28px] shadow-[0_4px_32px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_48px_rgba(0,0,0,0.16)] transition-shadow duration-400 overflow-hidden"
    >
      {/* ── Image area — inset with padding ── */}
      <div className="p-3 pb-0">
        <div
          className="relative rounded-[18px] overflow-hidden"
          style={{ aspectRatio: "4/3", background: first.bg }}
        >
          {/* slide image */}
          <img
            src={first.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* tinted overlay */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(145deg, ${first.bg}dd 0%, ${first.bg}66 50%, ${first.accent}20 100%)` }}
          />
          {/* accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[18px]" style={{ background: first.accent }} />

          {/* slide headline preview */}
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p
              className="text-[10px] font-black uppercase tracking-[0.2em] mb-1"
              style={{ color: first.accent }}
            >
              {first.label}
            </p>
            <h4 className="text-white font-black text-base leading-tight whitespace-pre-line drop-shadow-sm">
              {first.headline}
            </h4>
          </div>

          {/* hover: slide grid */}
          <div
            className="absolute inset-0 grid grid-cols-3 gap-[2px] p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-[18px] overflow-hidden"
            style={{ background: first.bg }}
          >
            {carousel.slides.slice(0, 6).map((slide, i) => (
              <div key={i} className="relative overflow-hidden">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-[0.65] group-hover:scale-110 transition-all duration-[1.8s] ease-out"
                />
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: slide.accent }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="px-5 pt-4 pb-5">
        {/* Name + badge */}
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="font-bold text-[17px] text-zinc-900 tracking-tight leading-snug">
            {carousel.topic}
          </h3>
          <VerifiedBadge />
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-[13px] leading-snug mb-4">
          {carousel.category}
        </p>

        {/* Stats + button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-zinc-500">
            <Users className="w-3.5 h-3.5" />
            <span className="text-[13px] font-semibold text-zinc-700">{reachStats[index]}</span>
          </div>
          <div className="flex items-center gap-1 text-zinc-500">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="text-[13px] font-semibold text-zinc-700">{carousel.slides.length}</span>
          </div>
          <button className="ml-auto flex items-center gap-1.5 bg-zinc-100 hover:bg-zinc-200 active:scale-95 transition-all duration-150 text-zinc-800 font-bold text-[13px] px-4 py-2 rounded-xl">
            View <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Lightbox slide renderer ── */
function LightboxSlide({ slide }: { slide: Slide }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: slide.bg }}>
      <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${slide.bg}ee 0%, ${slide.bg}88 60%, ${slide.accent}22 100%)` }}
      />
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: slide.accent }} />
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <span className="text-[10px] font-black tracking-[0.2em] uppercase" style={{ color: slide.accent }}>
          {slide.label}
        </span>
        <div className="space-y-3">
          <h3 className="text-2xl font-black leading-tight tracking-tight text-white whitespace-pre-line">
            {slide.headline}
          </h3>
          <p className="text-[13px] leading-relaxed text-white/70 font-medium">{slide.body}</p>
        </div>
        <span className="text-[10px] font-bold tracking-wide" style={{ color: slide.accent + "cc" }}>
          {slide.tag}
        </span>
      </div>
    </div>
  );
}
