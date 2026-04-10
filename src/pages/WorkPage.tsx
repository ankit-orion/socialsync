import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

/* ── Case study data ── */
interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  description: string;
  results: { label: string; value: string; delta: string }[];
  platforms: string[];
  color: string;
  accent: string;
  services: string[];
  testimonial?: { quote: string; name: string; role: string };
  slides: { headline: string; body: string; bg: string; accent: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    client: "StyleHaus",
    industry: "Fashion & E-Commerce",
    description:
      "We took StyleHaus from zero social presence to a dominating force in fashion e-commerce. Full content strategy, influencer partnerships, and paid social campaigns.",
    results: [
      { label: "Followers", value: "240K", delta: "from 0" },
      { label: "Monthly Sales", value: "$180K", delta: "+420%" },
      { label: "Engagement", value: "9.2%", delta: "+6.8%" },
    ],
    platforms: ["Instagram", "TikTok", "Pinterest"],
    color: "#E1306C",
    accent: "#E1306C",
    services: ["Content Creation", "Influencer Campaigns", "Paid Ads"],
    testimonial: {
      quote: "SquareSocial didn't just grow our following — they built a community that actually buys.",
      name: "Sarah Chen",
      role: "Founder, StyleHaus",
    },
    slides: [
      { headline: "The\nChallenge", body: "StyleHaus had great products but zero social presence. No content strategy, no brand voice, no community.", bg: "#1a0a12", accent: "#E1306C" },
      { headline: "Our\nApproach", body: "Built a visual-first content engine: daily Reels, weekly carousels, and strategic influencer seeding to 15 micro-creators.", bg: "#1a0a12", accent: "#E1306C" },
      { headline: "Content\nStrategy", body: "3 content pillars — styling tips, behind-the-scenes, and user-generated content. Posted 5× daily across IG and TikTok.", bg: "#1a0a12", accent: "#ff6b9d" },
      { headline: "Paid Social\nBlitz", body: "Launched retargeting funnels on Meta and TikTok Ads. $8K/month budget, 4.2× ROAS within 60 days.", bg: "#1a0a12", accent: "#E1306C" },
      { headline: "The\nResults", body: "240K followers. $180K monthly revenue via social. 9.2% engagement rate — 3× the industry average.", bg: "#1a0a12", accent: "#c8f03c" },
    ],
  },
  {
    id: 2,
    client: "TechFlow",
    industry: "B2B SaaS",
    description:
      "We positioned TechFlow's leadership team as industry thought leaders on LinkedIn and X, driving inbound leads through organic content alone.",
    results: [
      { label: "LinkedIn Reach", value: "4.8M", delta: "/month" },
      { label: "Inbound Leads", value: "320", delta: "+280%" },
      { label: "Demo Bookings", value: "89", delta: "/month" },
    ],
    platforms: ["LinkedIn", "X / Twitter"],
    color: "#0A66C2",
    accent: "#0A66C2",
    services: ["Thought Leadership", "Content Strategy", "Community"],
    testimonial: {
      quote: "Our CEO's LinkedIn went from 500 views to 500K views per post. The inbound pipeline exploded.",
      name: "Marcus Hall",
      role: "CMO, TechFlow",
    },
    slides: [
      { headline: "The\nChallenge", body: "TechFlow's marketing relied entirely on paid ads. Zero organic presence. Leadership team had dormant LinkedIn profiles.", bg: "#001529", accent: "#0A66C2" },
      { headline: "Thought\nLeadership", body: "We ghostwrote 3 posts/week for the CEO and CTO. Data-driven takes on industry trends with authentic voice.", bg: "#001529", accent: "#0A66C2" },
      { headline: "Engagement\nEngine", body: "Our team engaged with 50+ relevant posts daily, building genuine connections that drove profile visits.", bg: "#001529", accent: "#3b82f6" },
      { headline: "The\nResults", body: "4.8M monthly impressions. 320 inbound leads/month. 89 demo bookings — all organic, zero ad spend.", bg: "#001529", accent: "#c8f03c" },
    ],
  },
  {
    id: 3,
    client: "FreshBowl",
    industry: "Food & Beverage",
    description:
      "We launched FreshBowl's social presence from scratch, creating a TikTok-first strategy that turned a local brand into a nationwide sensation.",
    results: [
      { label: "TikTok Views", value: "28M", delta: "total" },
      { label: "Store Visits", value: "+340%", delta: "increase" },
      { label: "Revenue", value: "$420K", delta: "+380%" },
    ],
    platforms: ["TikTok", "Instagram", "YouTube"],
    color: "#000000",
    accent: "#00f2ea",
    services: ["Video Production", "Social Management", "Influencer Collabs"],
    testimonial: {
      quote: "One TikTok they made got 8 million views and we sold out for 3 weeks straight.",
      name: "Priya Patel",
      role: "Owner, FreshBowl",
    },
    slides: [
      { headline: "The\nChallenge", body: "A local food brand with 1 location. No social media. Wanted to scale regionally without massive ad budgets.", bg: "#0a0f0a", accent: "#00f2ea" },
      { headline: "TikTok-First\nStrategy", body: "Created daily short-form content: satisfying food prep, customer reactions, and behind-the-kitchen-counter storytelling.", bg: "#0a0f0a", accent: "#00f2ea" },
      { headline: "Creator\nPartnerships", body: "Partnered with 12 local food creators for authentic reviews. Cost: $3K. Result: 28M views and 3 viral moments.", bg: "#0a0f0a", accent: "#ff6b6b" },
      { headline: "The\nResults", body: "28M TikTok views. 340% increase in store visits. Expanded to 4 locations in 8 months.", bg: "#0a0f0a", accent: "#c8f03c" },
    ],
  },
  {
    id: 4,
    client: "LuxHome",
    industry: "Real Estate & Interior",
    description:
      "We elevated LuxHome's digital presence with a premium content strategy on Instagram and Pinterest, driving high-net-worth leads.",
    results: [
      { label: "Qualified Leads", value: "145", delta: "/month" },
      { label: "Avg Deal Value", value: "$48K", delta: "+35%" },
      { label: "Brand Awareness", value: "12M", delta: "reach" },
    ],
    platforms: ["Instagram", "Pinterest", "LinkedIn"],
    color: "#7c3aed",
    accent: "#7c3aed",
    services: ["Brand Identity", "Content Creation", "Paid Social"],
    slides: [
      { headline: "The\nChallenge", body: "LuxHome had a premium product but generic social content that didn't match their positioning.", bg: "#0d0520", accent: "#7c3aed" },
      { headline: "Premium\nAesthetic", body: "Redesigned their entire visual identity: warm tones, architectural photography, and aspirational lifestyle content.", bg: "#0d0520", accent: "#a78bfa" },
      { headline: "Targeted\nDistribution", body: "Pinterest for discovery, Instagram for community, LinkedIn for B2B partnerships. Each platform, unique content.", bg: "#0d0520", accent: "#7c3aed" },
      { headline: "The\nResults", body: "145 qualified leads/month. Average deal value up 35%. 12M monthly reach across all platforms.", bg: "#0d0520", accent: "#c8f03c" },
    ],
  },
  {
    id: 5,
    client: "CoreFit",
    industry: "Fitness & Wellness",
    description:
      "We built CoreFit's online community from the ground up, creating a content ecosystem that drove memberships and product sales.",
    results: [
      { label: "Community", value: "180K", delta: "members" },
      { label: "Memberships", value: "+260%", delta: "growth" },
      { label: "Product Sales", value: "$95K", delta: "/month" },
    ],
    platforms: ["Instagram", "TikTok", "YouTube"],
    color: "#c8f03c",
    accent: "#c8f03c",
    services: ["Community Building", "Video Production", "Growth Strategy"],
    slides: [
      { headline: "The\nChallenge", body: "A new fitness brand competing against established players. Needed to build trust and community fast.", bg: "#0d0d0d", accent: "#c8f03c" },
      { headline: "Community\nFirst", body: "Built a private Facebook group + Discord. Daily workout challenges, weekly Q&As with trainers, and member spotlights.", bg: "#0d0d0d", accent: "#c8f03c" },
      { headline: "Content\nEcosystem", body: "YouTube for long-form tutorials, TikTok for quick tips, Instagram for transformations. 12 pieces of content daily.", bg: "#0d0d0d", accent: "#a3cc30" },
      { headline: "The\nResults", body: "180K community members. 260% membership growth. $95K/month in supplement and merch sales via social.", bg: "#0d0d0d", accent: "#c8f03c" },
    ],
  },
  {
    id: 6,
    client: "EduSpark",
    industry: "EdTech",
    description:
      "We managed EduSpark's multi-platform presence, creating educational content that grew their user base and reduced acquisition costs.",
    results: [
      { label: "Sign-ups", value: "12K", delta: "/month" },
      { label: "CAC Reduction", value: "-62%", delta: "savings" },
      { label: "Organic Traffic", value: "+480%", delta: "growth" },
    ],
    platforms: ["LinkedIn", "Instagram", "YouTube"],
    color: "#FF4500",
    accent: "#FF4500",
    services: ["Social Management", "Paid Ads", "Content Strategy"],
    slides: [
      { headline: "The\nChallenge", body: "High customer acquisition costs. Relying entirely on Google Ads with $45 CPA. Needed organic channels.", bg: "#1a0800", accent: "#FF4500" },
      { headline: "Educational\nContent", body: "Created bite-sized learning tips, infographics, and mini-tutorials. Positioned EduSpark as the go-to learning resource.", bg: "#1a0800", accent: "#FF4500" },
      { headline: "Funnel\nOptimization", body: "Social content fed into free webinars, which converted to paid plans. Cut CPA from $45 to $17.", bg: "#1a0800", accent: "#ff8c00" },
      { headline: "The\nResults", body: "12K sign-ups/month via social. 62% lower acquisition cost. 480% organic traffic growth.", bg: "#1a0800", accent: "#c8f03c" },
    ],
  },
];

/* ── Lightbox slide ── */
function LightboxSlide({ slide }: { slide: CaseStudy["slides"][0] }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: slide.bg }}>
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 30% 80%, ${slide.accent}15 0%, transparent 70%)` }}
      />
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: slide.accent }} />
      <div className="relative z-10 h-full flex flex-col justify-between p-7">
        <span className="text-[10px] font-black tracking-[0.2em] uppercase" style={{ color: slide.accent }}>
          Case Study
        </span>
        <div className="space-y-3">
          <h3 className="text-3xl font-black leading-tight text-white whitespace-pre-line">{slide.headline}</h3>
          <p className="text-[14px] text-white/60 font-medium leading-relaxed max-w-[280px]">{slide.body}</p>
        </div>
        <div />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   WORK PAGE
   ════════════════════════════════════════ */
export function WorkPage() {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "E-Commerce", "B2B / SaaS", "Food & Bev", "Lifestyle"];

  const filtered = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => {
    if (filter === "E-Commerce") return c.industry.includes("Commerce");
    if (filter === "B2B / SaaS") return c.industry.includes("SaaS") || c.industry.includes("EdTech");
    if (filter === "Food & Bev") return c.industry.includes("Food");
    if (filter === "Lifestyle") return c.industry.includes("Fitness") || c.industry.includes("Real Estate");
    return true;
  });

  const openLightbox = (c: CaseStudy) => { setActive(c); setSlideIndex(0); document.body.style.overflow = "hidden"; };
  const closeLightbox = () => { setActive(null); document.body.style.overflow = "auto"; };
  const lbPrev = () => setSlideIndex((s) => (s === 0 ? (active?.slides.length ?? 1) - 1 : s - 1));
  const lbNext = () => setSlideIndex((s) => (s === (active?.slides.length ?? 1) - 1 ? 0 : s + 1));

  return (
    <main className="flex-1 w-full bg-[#e8e8e8] pt-28 pb-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
          <Link
            to="/"
            className="text-[#0d0d0d]/40 hover:text-[#0d0d0d] inline-flex items-center text-sm font-bold transition-colors bg-white px-4 py-2 rounded-full border border-[#0d0d0d]/[0.06] shadow-sm"
          >
            ← Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14">
          <div className="flex justify-start mb-5">
            <div className="inline-flex items-center gap-2 bg-white border border-[#0d0d0d]/[0.08] rounded-full px-4 py-2 shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="#0d0d0d" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="#0d0d0d" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="#0d0d0d" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="#0d0d0d" strokeWidth="2" />
              </svg>
              <span className="text-[11px] font-bold text-[#0d0d0d] tracking-wide uppercase">Our Work</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d0d0d] tracking-tight leading-[1.05] mb-5 max-w-2xl">
            Real results for
            <br />
            real brands.
          </h1>
          <p className="text-[#0d0d0d]/45 text-base md:text-lg font-medium leading-relaxed max-w-lg">
            Every campaign we run is built to deliver measurable growth. Here's what we've done for our clients.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-1 bg-white rounded-full p-1.5 border border-[#0d0d0d]/[0.06] shadow-sm flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === f
                    ? "bg-[#0d0d0d] text-white shadow-md"
                    : "text-[#0d0d0d]/45 hover:text-[#0d0d0d]/70 hover:bg-[#0d0d0d]/[0.03]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Case study grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => openLightbox(study)}
                className="group bg-white rounded-[28px] border border-[#0d0d0d]/[0.05] overflow-hidden shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer"
              >
                {/* Top gradient bar */}
                <div className="h-32 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${study.color}18 0%, ${study.color}08 100%)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-6">
                      {study.results.map((r, j) => (
                        <div key={j} className="text-center">
                          <p className="text-2xl font-black text-[#0d0d0d] leading-none">{r.value}</p>
                          <p className="text-[9px] font-bold text-[#0d0d0d]/30 mt-1 uppercase tracking-wider">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Client badge */}
                  <div
                    className="absolute top-4 left-5 px-3 py-1.5 rounded-full text-white text-[10px] font-black"
                    style={{ background: study.color }}
                  >
                    {study.client}
                  </div>
                  <div className="absolute top-4 right-5 text-[10px] font-bold text-[#0d0d0d]/25 uppercase tracking-wider">
                    {study.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-[#0d0d0d]/50 text-[13px] font-medium leading-relaxed mb-5">
                    {study.description}
                  </p>

                  {/* Platform + service tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {study.platforms.map((p) => (
                      <span key={p} className="text-[9px] font-bold bg-[#0d0d0d]/[0.04] text-[#0d0d0d]/45 px-2.5 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                    {study.services.map((s) => (
                      <span key={s} className="text-[9px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${study.color}10`, color: study.color }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial */}
                  {study.testimonial && (
                    <div className="bg-[#f7f7f8] rounded-2xl p-4 border border-[#0d0d0d]/[0.03]">
                      <p className="text-[12px] text-[#0d0d0d]/60 font-medium italic leading-relaxed mb-2">
                        "{study.testimonial.quote}"
                      </p>
                      <p className="text-[10px] font-bold text-[#0d0d0d]">
                        {study.testimonial.name}{" "}
                        <span className="text-[#0d0d0d]/30 font-medium">— {study.testimonial.role}</span>
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex items-center gap-2 mt-5 text-[#0d0d0d] group-hover:gap-3 transition-all">
                    <span className="text-xs font-black">View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#0d0d0d] rounded-[28px] p-10 md:p-14 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
            Ready to be our next success story?
          </h2>
          <p className="text-white/40 font-medium text-sm mb-8 max-w-lg mx-auto leading-relaxed">
            Book a free 30-minute call and we'll show you exactly how we'd grow your brand.
          </p>
          <Link to="/book">
            <button className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#c8f03c] text-[#0d0d0d] font-bold text-sm hover:bg-[#b8e02c] transition-colors">
              Book a Free Call <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.88, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 40 }}
              transition={{ type: "spring", damping: 28, stiffness: 380 }}
              className="relative w-full max-w-sm pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
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
                  <button className="absolute left-0 inset-y-0 w-1/3 z-20" onClick={lbPrev} />
                  <button className="absolute right-0 inset-y-0 w-1/3 z-20" onClick={lbNext} />
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
                          background: i === slideIndex ? active.accent : "#ffffff30",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-1">
                    <button onClick={lbPrev} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button onClick={lbNext} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
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
                  <p className="text-white font-black text-base">{active.client}</p>
                  <p className="text-white/40 text-xs font-medium">
                    {slideIndex + 1} / {active.slides.length}
                  </p>
                </div>
                <button
                  onClick={closeLightbox}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
