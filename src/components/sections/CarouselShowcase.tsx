import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Copy } from "lucide-react";

// Stack-of-squares icon (Instagram carousel indicator)
function CarouselIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v12h12V6H4zm15-2a1 1 0 011 1v13a1 1 0 01-1 1h-1v-2h.01V5H6V4h13z" />
    </svg>
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
  slides: Slide[];
}

const carousels: CarouselPost[] = [
  {
    id: 1,
    topic: "React Hooks",
    slides: [
      {
        bg: "#0f0f1a",
        accent: "#61dafb",
        label: "01 / 06",
        headline: "React Hooks\nYou Actually\nNeed to Know",
        body: "Stop memorising. Start understanding.",
        tag: "#ReactJS #Frontend",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0d1117",
        accent: "#61dafb",
        label: "02 / 06",
        headline: "useState",
        body: "The foundation of interactivity. Stores a value and triggers a re-render when it changes. Keep it colocated with the component that owns it.",
        tag: "#useState",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0d1117",
        accent: "#f7df1e",
        label: "03 / 06",
        headline: "useEffect",
        body: "Sync your component with the outside world — APIs, timers, subscriptions. Always clean up after yourself.",
        tag: "#useEffect",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0d1117",
        accent: "#a855f7",
        label: "04 / 06",
        headline: "useCallback\n& useMemo",
        body: "Memoize functions and computed values. Use them to skip re-renders — but only when profiling proves it's worth it.",
        tag: "#Performance",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0d1117",
        accent: "#22d3ee",
        label: "05 / 06",
        headline: "useRef",
        body: "Escape the render cycle. Perfect for DOM access, storing previous values, or keeping mutable refs that don't drive the UI.",
        tag: "#useRef",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0f0f1a",
        accent: "#61dafb",
        label: "06 / 06",
        headline: "Save this\nfor your\nnext build.",
        body: "Follow for more dev deep-dives every week.",
        tag: "#ReactJS #WebDev",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 2,
    topic: "System Design",
    slides: [
      {
        bg: "#020617",
        accent: "#f97316",
        label: "01 / 05",
        headline: "System Design\nCheatsheet\nfor Devs",
        body: "The concepts that make or break your architecture.",
        tag: "#SystemDesign #Engineering",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#020617",
        accent: "#f97316",
        label: "02 / 05",
        headline: "Load\nBalancing",
        body: "Distribute traffic across servers to eliminate single points of failure. Round-robin, least connections, or IP hash — pick what fits your use case.",
        tag: "#LoadBalancer",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#020617",
        accent: "#10b981",
        label: "03 / 05",
        headline: "Caching\nStrategies",
        body: "Read-through, write-through, write-behind, cache-aside. Redis for speed, CDN for static. Cache invalidation is the real hard part.",
        tag: "#Redis #Caching",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#020617",
        accent: "#6366f1",
        label: "04 / 05",
        headline: "Message\nQueues",
        body: "Decouple services with async messaging. Kafka for high throughput streams, RabbitMQ for task queues. Never block the critical path.",
        tag: "#Kafka #MessageQueue",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#020617",
        accent: "#f97316",
        label: "05 / 05",
        headline: "Design for\nfailure, not\nfor success.",
        body: "Follow for weekly system design deep-dives.",
        tag: "#SystemDesign #Tech",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 3,
    topic: "Git Workflow",
    slides: [
      {
        bg: "#1a0a00",
        accent: "#f05032",
        label: "01 / 05",
        headline: "Git Commands\nEvery Dev\nMust Know",
        body: "Beyond add, commit, push.",
        tag: "#Git #DevOps",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0d0d0d",
        accent: "#f05032",
        label: "02 / 05",
        headline: "git stash",
        body: "Shelve dirty work before switching branches. Use `git stash pop` to bring it back. Name your stashes — future you will thank present you.",
        tag: "#GitStash",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0d0d0d",
        accent: "#facc15",
        label: "03 / 05",
        headline: "git rebase\n-i",
        body: "Rewrite history cleanly. Squash WIP commits, reorder, edit messages. Never rebase shared branches — only clean up before you push.",
        tag: "#GitRebase",
        image: "https://images.unsplash.com/photo-1610986602538-431d65df4385?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0d0d0d",
        accent: "#4ade80",
        label: "04 / 05",
        headline: "git bisect",
        body: "Binary search through commits to find the exact one that introduced a bug. Massive repos, zero guessing.",
        tag: "#Debugging #Git",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#1a0a00",
        accent: "#f05032",
        label: "05 / 05",
        headline: "Your history\nis your\ndocumentation.",
        body: "Follow for more developer workflow tips.",
        tag: "#Git #Programming",
        image: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 4,
    topic: "TypeScript Tips",
    slides: [
      {
        bg: "#001529",
        accent: "#3178c6",
        label: "01 / 05",
        headline: "TypeScript\nTips That\nActually Help",
        body: "Level up your type game without the pain.",
        tag: "#TypeScript #JavaScript",
        image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#001529",
        accent: "#3178c6",
        label: "02 / 05",
        headline: "Discriminated\nUnions",
        body: "Model state machines cleanly. A `type` field on each variant lets TypeScript narrow exhaustively — no more `any` hacks for API responses.",
        tag: "#TypeScript",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#001529",
        accent: "#a78bfa",
        label: "03 / 05",
        headline: "Utility Types",
        body: "Partial<T>, Pick<T,K>, Omit<T,K>, Record<K,V>. Stop duplicating type definitions. Compose from what you already have.",
        tag: "#UtilityTypes",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#001529",
        accent: "#34d399",
        label: "04 / 05",
        headline: "satisfies\nOperator",
        body: "Validate a value against a type without widening it. Get autocomplete AND keep the literal type. Added in TS 4.9 — still underused.",
        tag: "#TypeScript4.9",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#001529",
        accent: "#3178c6",
        label: "05 / 05",
        headline: "Types are\ndocumentation\nthat never lies.",
        body: "Follow for weekly TypeScript breakdowns.",
        tag: "#TypeScript #WebDev",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 5,
    topic: "CSS Mastery",
    slides: [
      {
        bg: "#0a001f",
        accent: "#e44d9c",
        label: "01 / 04",
        headline: "CSS Tricks\nPro Devs\nUse Daily",
        body: "Write less. Achieve more.",
        tag: "#CSS #Frontend",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0a001f",
        accent: "#e44d9c",
        label: "02 / 04",
        headline: "clamp()\nfor Fluid\nTypography",
        body: "clamp(min, preferred, max) — responsive font sizes with zero media queries. One line replaces an entire breakpoint system.",
        tag: "#CSSClamp",
        image: "https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0a001f",
        accent: "#fb923c",
        label: "03 / 04",
        headline: ":has()\nChanges\nEverything",
        body: "The parent selector CSS never had. Style a container based on what's inside it. Now baseline across all modern browsers.",
        tag: "#CSSHas",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
      },
      {
        bg: "#0a001f",
        accent: "#e44d9c",
        label: "04 / 04",
        headline: "Good CSS\nis invisible.\nBad CSS\nis everywhere.",
        body: "Follow for more CSS deep-dives.",
        tag: "#CSS #WebDesign",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
];

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: slide.bg }}>
      {/* Background image with dark overlay */}
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${slide.bg}ee 0%, ${slide.bg}88 60%, ${slide.accent}22 100%)`,
        }}
      />
      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: slide.accent }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-5">
        {/* Label */}
        <span
          className="text-[10px] font-black tracking-[0.2em] uppercase"
          style={{ color: slide.accent }}
        >
          {slide.label}
        </span>

        {/* Main text */}
        <div className="space-y-3">
          <h3
            className="text-2xl font-black leading-tight tracking-tight text-white whitespace-pre-line"
          >
            {slide.headline}
          </h3>
          <p className="text-[12px] leading-relaxed text-white/70 font-medium">
            {slide.body}
          </p>
        </div>

        {/* Tag */}
        <span
          className="text-[10px] font-bold tracking-wide"
          style={{ color: slide.accent + "cc" }}
        >
          {slide.tag}
        </span>
      </div>
    </div>
  );
}

export function CarouselShowcase() {
  const [activeCarousel, setActiveCarousel] = useState<CarouselPost | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const openCarousel = (carousel: CarouselPost) => {
    setActiveCarousel(carousel);
    setActiveSlide(0);
    document.body.style.overflow = "hidden";
  };

  const closeCarousel = () => {
    setActiveCarousel(null);
    document.body.style.overflow = "auto";
  };

  const prev = () =>
    setActiveSlide((s) =>
      s === 0 ? (activeCarousel?.slides.length ?? 1) - 1 : s - 1
    );
  const next = () =>
    setActiveSlide((s) =>
      s === (activeCarousel?.slides.length ?? 1) - 1 ? 0 : s + 1
    );

  return (
    <>
      {/* ── Strip ── */}
      <div className="mt-6 md:mt-8">
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">
            From Our Feed
          </p>
          <Copy className="w-3.5 h-3.5 text-muted-foreground/40" />
        </div>

        <div
          ref={stripRef}
          className="flex gap-3 overflow-x-auto scrollbar-none pb-1"
        >
          {carousels.map((carousel) => {
            const first = carousel.slides[0];
            return (
              <motion.div
                key={carousel.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() => openCarousel(carousel)}
                className="relative flex-shrink-0 w-[140px] h-[175px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-xl"
              >
                <SlideCard slide={first} />

                {/* Carousel indicator */}
                <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm rounded-md p-1">
                  <CarouselIcon className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Slide count pill */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1">
                  {carousel.slides.map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-white/60"
                      style={{ opacity: i === 0 ? 1 : 0.35 }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {activeCarousel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={closeCarousel}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 380 }}
              className="relative w-full max-w-sm pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Phone chrome */}
              <div className="rounded-[2.5rem] overflow-hidden border-[10px] border-zinc-800 shadow-2xl bg-zinc-800">
                {/* Notch */}
                <div className="bg-zinc-800 flex justify-center py-2">
                  <div className="w-20 h-1.5 bg-zinc-600 rounded-full" />
                </div>

                {/* Slide */}
                <div className="relative bg-black" style={{ aspectRatio: "4/5" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <SlideCard slide={activeCarousel.slides[activeSlide]} />
                    </motion.div>
                  </AnimatePresence>

                  {/* Prev / Next hit areas */}
                  <button
                    className="absolute left-0 inset-y-0 w-1/3 z-20"
                    onClick={prev}
                    aria-label="Previous slide"
                  />
                  <button
                    className="absolute right-0 inset-y-0 w-1/3 z-20"
                    onClick={next}
                    aria-label="Next slide"
                  />
                </div>

                {/* Bottom bar */}
                <div className="bg-zinc-900 px-5 py-3 flex items-center justify-between">
                  {/* Dots */}
                  <div className="flex gap-1.5">
                    {activeCarousel.slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className="transition-all duration-200 rounded-full"
                        style={{
                          width: i === activeSlide ? 16 : 6,
                          height: 6,
                          background:
                            i === activeSlide
                              ? activeCarousel.slides[activeSlide].accent
                              : "#ffffff40",
                        }}
                      />
                    ))}
                  </div>

                  {/* Arrows */}
                  <div className="flex gap-1">
                    <button
                      onClick={prev}
                      className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={next}
                      className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Home bar */}
                <div className="bg-zinc-800 flex justify-center py-2">
                  <div className="w-24 h-1 bg-zinc-600 rounded-full" />
                </div>
              </div>

              {/* Topic label + close */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="text-white font-black text-base">{activeCarousel.topic}</p>
                  <p className="text-white/40 text-xs font-medium">
                    {activeSlide + 1} / {activeCarousel.slides.length}
                  </p>
                </div>
                <button
                  onClick={closeCarousel}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
