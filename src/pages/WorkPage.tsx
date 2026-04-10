import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, LayoutGrid, ShoppingBag, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const FILTER_ICONS: Record<string, React.ReactNode> = {
  "All":         <LayoutGrid className="w-4 h-4" />,
  "E-Commerce":  <ShoppingBag className="w-4 h-4" />,
  "B2B / SaaS":  <Briefcase className="w-4 h-4" />,
  "EdTech":      <GraduationCap className="w-4 h-4" />,
  "Lifestyle":   <Sparkles className="w-4 h-4" />,
};
import { Link } from "react-router-dom";

/* ── Case study data ── */
interface CaseStudy {
  id: number;
  client: string;
  logo: string;
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
    client: "Gymshark",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=gymshark.com",
    industry: "E-Commerce & Fitness",
    description:
      "We supercharged Gymshark's social media engine with a TikTok-first content strategy, influencer partnerships with 40+ fitness creators, and paid campaigns that drove record-breaking product launches.",
    results: [
      { label: "Followers Gained", value: "1.2M", delta: "in 6 months" },
      { label: "Revenue via Social", value: "$3.8M", delta: "+340%" },
      { label: "Engagement Rate", value: "11.4%", delta: "+7.2%" },
    ],
    platforms: ["TikTok", "Instagram", "YouTube"],
    color: "#E1306C",
    accent: "#E1306C",
    services: ["Content Creation", "Influencer Campaigns", "Paid Ads"],
    testimonial: {
      quote: "They didn't just grow numbers — they built a movement. Our community engagement has never been this strong.",
      name: "Ben Francis",
      role: "CEO, Gymshark",
    },
    slides: [
      { headline: "The\nChallenge", body: "Gymshark needed to cut through a saturated fitness market and re-engage Gen Z audiences who were drifting to newer brands.", bg: "#1a0a12", accent: "#E1306C" },
      { headline: "Creator\nArmy", body: "We onboarded 40+ micro and mid-tier fitness creators across TikTok and Instagram with performance-based partnerships.", bg: "#1a0a12", accent: "#E1306C" },
      { headline: "Content\nMachine", body: "3 content pillars — workout challenges, athlete transformations, and behind-the-scenes product drops. 8 posts daily across platforms.", bg: "#1a0a12", accent: "#ff6b9d" },
      { headline: "Launch\nBlitz", body: "Orchestrated a 72-hour social blitz for their summer collection. $15K ad spend, $375K in attributed launch revenue. 25× ROAS.", bg: "#1a0a12", accent: "#E1306C" },
      { headline: "The\nResults", body: "1.2M new followers in 6 months. $3.8M revenue via social across the full quarter. 11.4% engagement — well above the 2.7% industry average.", bg: "#1a0a12", accent: "#2c5270" },
    ],
  },
  {
    id: 2,
    client: "Notion",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=notion.so",
    industry: "B2B SaaS",
    description:
      "We positioned Notion's leadership as thought leaders on LinkedIn and X while building a cult-like community of power users through organic content and template marketing.",
    results: [
      { label: "LinkedIn Reach", value: "8.2M", delta: "/month" },
      { label: "Inbound Leads", value: "1,200", delta: "+310%" },
      { label: "Community", value: "85K", delta: "members" },
    ],
    platforms: ["LinkedIn", "X / Twitter", "YouTube"],
    color: "#0A66C2",
    accent: "#0A66C2",
    services: ["Thought Leadership", "Community Building", "Content Strategy"],
    testimonial: {
      quote: "Our LinkedIn went from an afterthought to our #1 inbound channel. The ROI has been extraordinary.",
      name: "Camille Ricketts",
      role: "Head of Marketing, Notion",
    },
    slides: [
      { headline: "The\nChallenge", body: "Notion had massive product love but low social presence. Leadership had dormant LinkedIn profiles. Needed organic growth.", bg: "#001529", accent: "#0A66C2" },
      { headline: "Thought\nLeadership", body: "Ghostwrote 4 posts/week for the founding team. Hot takes on productivity, remote work, and AI — authentic voice, data-backed.", bg: "#001529", accent: "#0A66C2" },
      { headline: "Template\nMarketing", body: "Created 50+ free Notion templates promoted via social. Each template drove thousands of sign-ups and massive shareability.", bg: "#001529", accent: "#3b82f6" },
      { headline: "The\nResults", body: "8.2M monthly LinkedIn impressions. 1,200 inbound leads/month. 85K-member community of power users and advocates.", bg: "#001529", accent: "#2c5270" },
    ],
  },
  {
    id: 3,
    client: "Glossier",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=glossier.com",
    industry: "Beauty & E-Commerce",
    description:
      "We revitalized Glossier's Instagram and TikTok presence with a UGC-first strategy, driving a 280% increase in social-attributed sales through authentic community content.",
    results: [
      { label: "UGC Posts", value: "12K+", delta: "/month" },
      { label: "Social Sales", value: "$2.1M", delta: "+280%" },
      { label: "Followers", value: "+680K", delta: "gained" },
    ],
    platforms: ["Instagram", "TikTok", "Pinterest"],
    color: "#F5A4B8",
    accent: "#F5A4B8",
    services: ["UGC Strategy", "Social Management", "Influencer Collabs"],
    testimonial: {
      quote: "They turned our customers into our best marketers. The UGC engine they built is self-sustaining.",
      name: "Kyle Leahy",
      role: "CEO, Glossier",
    },
    slides: [
      { headline: "The\nChallenge", body: "Glossier's social felt overly polished and disconnected from the community-first brand DNA that made them iconic.", bg: "#1a0a12", accent: "#F5A4B8" },
      { headline: "UGC\nRevolution", body: "Built a UGC machine: branded hashtag campaigns, customer spotlight series, and a creator rewards program for authentic content.", bg: "#1a0a12", accent: "#F5A4B8" },
      { headline: "TikTok\nStrategy", body: "GRWM content, ingredient deep-dives, and 'Glossier vs. dupe' content. Raw, authentic, and highly shareable.", bg: "#1a0a12", accent: "#ff6b9d" },
      { headline: "The\nResults", body: "12K+ UGC posts per month. $2.1M in social-attributed sales. 680K new followers across platforms.", bg: "#1a0a12", accent: "#2c5270" },
    ],
  },
  {
    id: 4,
    client: "WeWork",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=wework.com",
    industry: "B2B & Workspace",
    description:
      "We repositioned WeWork's social narrative from corporate real estate to community-driven workspace culture, rebuilding brand perception through storytelling.",
    results: [
      { label: "Brand Sentiment", value: "+64%", delta: "improvement" },
      { label: "Lead Gen", value: "890", delta: "/month" },
      { label: "Monthly Reach", value: "15M", delta: "impressions" },
    ],
    platforms: ["LinkedIn", "Instagram", "X / Twitter"],
    color: "#60516f",
    accent: "#60516f",
    services: ["Brand Repositioning", "Content Creation", "Reputation Mgmt"],
    slides: [
      { headline: "The\nChallenge", body: "Post-controversy, WeWork needed to rebuild trust and shift perception from corporate excess to thriving workspace community.", bg: "#0d0520", accent: "#60516f" },
      { headline: "Story\nOverhaul", body: "Shifted content from polished office tours to real member stories, founder spotlights, and behind-the-scenes community moments.", bg: "#0d0520", accent: "#a78bfa" },
      { headline: "Reputation\nRecovery", body: "Proactive sentiment monitoring, strategic response framework, and a LinkedIn thought leadership series on the future of work.", bg: "#0d0520", accent: "#60516f" },
      { headline: "The\nResults", body: "Brand sentiment up 64%. 890 qualified leads per month. 15M monthly impressions across all social channels.", bg: "#0d0520", accent: "#2c5270" },
    ],
  },
  {
    id: 5,
    client: "Duolingo",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=duolingo.com",
    industry: "EdTech",
    description:
      "We helped Duolingo dominate TikTok with a chaotic, meme-driven content strategy starring Duo the owl — turning a language app into a cultural phenomenon.",
    results: [
      { label: "TikTok Followers", value: "1.6M", delta: "gained" },
      { label: "Viral Videos", value: "47", delta: "1M+ views each" },
      { label: "App Downloads", value: "+94%", delta: "from social" },
    ],
    platforms: ["TikTok", "Instagram", "X / Twitter"],
    color: "#58CC02",
    accent: "#58CC02",
    services: ["Viral Content", "Social Management", "Community Building"],
    testimonial: {
      quote: "They understood that being unhinged was our brand. TikTok went from experiment to our biggest growth channel.",
      name: "Zaria Parvez",
      role: "Social Media Lead, Duolingo",
    },
    slides: [
      { headline: "The\nChallenge", body: "Duolingo wanted to reach Gen Z. Traditional educational marketing wasn't cutting it. They needed to be culturally relevant.", bg: "#0a1a00", accent: "#58CC02" },
      { headline: "Unhinged\nStrategy", body: "We leaned into chaotic humor: Duo the owl stalking users, pop culture commentary, and trend-jacking at lightning speed.", bg: "#0a1a00", accent: "#58CC02" },
      { headline: "Community\nCult", body: "Built a fandom around Duo's personality. Users started creating their own memes, driving organic reach beyond anything paid could achieve.", bg: "#0a1a00", accent: "#7ce839" },
      { headline: "The\nResults", body: "1.6M new TikTok followers. 47 videos crossing 1M views. 94% increase in app downloads attributed directly to social.", bg: "#0a1a00", accent: "#2c5270" },
    ],
  },
  {
    id: 6,
    client: "Coursera",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=coursera.org",
    industry: "EdTech",
    description:
      "We managed Coursera's multi-platform social strategy, creating educational content that drove sign-ups, reduced acquisition costs, and positioned them as the go-to learning platform.",
    results: [
      { label: "Sign-ups", value: "45K", delta: "/month" },
      { label: "CAC Reduction", value: "-58%", delta: "savings" },
      { label: "Organic Reach", value: "+520%", delta: "growth" },
    ],
    platforms: ["LinkedIn", "Instagram", "YouTube"],
    color: "#0056D2",
    accent: "#0056D2",
    services: ["Social Management", "Paid Ads", "Content Strategy"],
    testimonial: {
      quote: "They turned our social channels into our most cost-effective acquisition funnel. The CAC reduction alone was worth 10× their fee.",
      name: "Jeff Maggioncalda",
      role: "CEO, Coursera",
    },
    slides: [
      { headline: "The\nChallenge", body: "High customer acquisition cost at $52 per sign-up. Over-reliance on Google Ads. Social was an afterthought.", bg: "#001535", accent: "#0056D2" },
      { headline: "Educational\nContent", body: "Created bite-sized learning tips, career advice carousels, and 'day in the life' stories from real learners across LinkedIn and IG.", bg: "#001535", accent: "#0056D2" },
      { headline: "Funnel\nInnovation", body: "Social content drove free trial sign-ups → email nurture → paid conversions. Cut CPA from $52 to $22 in 90 days.", bg: "#001535", accent: "#3b82f6" },
      { headline: "The\nResults", body: "45K sign-ups/month from social. 58% lower acquisition cost. 520% organic reach growth across all platforms.", bg: "#001535", accent: "#2c5270" },
    ],
  },
  {
    id: 7,
    client: "Lululemon",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=lululemon.com",
    industry: "Lifestyle & Retail",
    description:
      "We amplified Lululemon's community-driven brand with a social strategy centered on ambassador content, local event promotion, and aspirational lifestyle storytelling.",
    results: [
      { label: "Engagement", value: "6.4%", delta: "avg rate" },
      { label: "Store Traffic", value: "+68%", delta: "from social" },
      { label: "Brand Mentions", value: "840K", delta: "/month" },
    ],
    platforms: ["Instagram", "TikTok", "Pinterest"],
    color: "#2c5270",
    accent: "#2c5270",
    services: ["Community Strategy", "Content Creation", "Event Marketing"],
    slides: [
      { headline: "The\nChallenge", body: "Lululemon wanted to deepen community ties and drive foot traffic to local stores through authentic social storytelling.", bg: "#0d0d0d", accent: "#2c5270" },
      { headline: "Ambassador\nNetwork", body: "Activated 200+ local ambassadors — yoga instructors, runners, and wellness coaches — as authentic content creators.", bg: "#0d0d0d", accent: "#2c5270" },
      { headline: "Local\nActivation", body: "Hyper-local social campaigns promoting free community classes, run clubs, and in-store events. Each post geo-targeted.", bg: "#0d0d0d", accent: "#2c5270" },
      { headline: "The\nResults", body: "6.4% average engagement rate across ambassador content. 68% increase in social-driven store traffic. 840K brand mentions monthly.", bg: "#0d0d0d", accent: "#2c5270" },
    ],
  },
  {
    id: 8,
    client: "Shopify",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=shopify.com",
    industry: "B2B SaaS & E-Commerce",
    description:
      "We built Shopify's organic social presence into a powerhouse of entrepreneurial content, driving merchant sign-ups through founder stories and e-commerce education.",
    results: [
      { label: "Follower Growth", value: "+920K", delta: "in 8 months" },
      { label: "Merchant Sign-ups", value: "8.4K", delta: "/month" },
      { label: "Content Reach", value: "22M", delta: "/month" },
    ],
    platforms: ["LinkedIn", "Instagram", "TikTok", "YouTube"],
    color: "#96BF48",
    accent: "#96BF48",
    services: ["Content Strategy", "Video Production", "Thought Leadership"],
    testimonial: {
      quote: "They captured the entrepreneurial spirit in every piece of content. Our social became a destination, not just a channel.",
      name: "Harley Finkelstein",
      role: "President, Shopify",
    },
    slides: [
      { headline: "The\nChallenge", body: "Shopify needed to stand out in a sea of SaaS B2B content and connect emotionally with aspiring entrepreneurs worldwide.", bg: "#0a1500", accent: "#96BF48" },
      { headline: "Founder\nStories", body: "We produced a weekly 'Built on Shopify' video series featuring real merchants — their struggles, pivots, and wins.", bg: "#0a1500", accent: "#96BF48" },
      { headline: "Education\nEngine", body: "Daily e-commerce tips, trend analyses, and 'how to start a store' content that positioned Shopify as the entrepreneur's best friend.", bg: "#0a1500", accent: "#7da83a" },
      { headline: "The\nResults", body: "920K new followers. 8,400 merchant sign-ups/month via social. 22M monthly content reach across 4 platforms.", bg: "#0a1500", accent: "#2c5270" },
    ],
  },
  {
    id: 9,
    client: "Khan Academy",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=khanacademy.org",
    industry: "EdTech",
    description:
      "We amplified Khan Academy's mission-driven social presence, creating relatable educational content that drove massive awareness and student sign-ups across underserved communities.",
    results: [
      { label: "Video Views", value: "18M", delta: "on social" },
      { label: "New Learners", value: "52K", delta: "/month" },
      { label: "Brand Awareness", value: "+138%", delta: "increase" },
    ],
    platforms: ["YouTube", "Instagram", "TikTok"],
    color: "#14BF96",
    accent: "#14BF96",
    services: ["Video Production", "Social Management", "Growth Strategy"],
    testimonial: {
      quote: "They helped us reach millions of students who had never heard of Khan Academy. Social became our most impactful outreach channel.",
      name: "Sal Khan",
      role: "Founder & CEO, Khan Academy",
    },
    slides: [
      { headline: "The\nMission", body: "Khan Academy needed to reach students in underserved communities who weren't finding them through traditional channels.", bg: "#041f15", accent: "#14BF96" },
      { headline: "Relatable\nContent", body: "We created 'study with me' TikToks, exam prep Reels, and relatable student memes that made learning feel accessible and cool.", bg: "#041f15", accent: "#14BF96" },
      { headline: "Creator\nCollabs", body: "Partnered with 30+ student creators and educators on TikTok and YouTube. Authentic voices sharing real study wins with Khan Academy.", bg: "#041f15", accent: "#20e6b4" },
      { headline: "The\nResults", body: "18M social video views. 52K new learner sign-ups per month from social. 138% increase in brand awareness among 13-24 year olds.", bg: "#041f15", accent: "#2c5270" },
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

  const filters = ["All", "E-Commerce", "B2B / SaaS", "EdTech", "Lifestyle"];

  const filtered = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => {
    if (filter === "E-Commerce") return c.industry.includes("Commerce") || c.industry.includes("Retail") || c.industry.includes("Beauty");
    if (filter === "B2B / SaaS") return c.industry.includes("SaaS") || c.industry.includes("B2B");
    if (filter === "EdTech") return c.industry.includes("EdTech");
    if (filter === "Lifestyle") return c.industry.includes("Fitness") || c.industry.includes("Lifestyle");
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
          <div className="overflow-x-auto scrollbar-none text-center">
            <div className="inline-flex items-center gap-1 bg-white rounded-full p-1.5 border border-[#0d0d0d]/[0.06] shadow-sm">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  title={f}
                  className={`flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    filter === f
                      ? "bg-[#0d0d0d] text-white shadow-md"
                      : "text-[#0d0d0d]/45 hover:text-[#0d0d0d]/70 hover:bg-[#0d0d0d]/[0.03]"
                  }`}
                >
                  <span className="md:hidden">{FILTER_ICONS[f]}</span>
                  <span className="hidden md:inline">{f}</span>
                </button>
              ))}
            </div>
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
                    className="absolute top-4 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-[#0d0d0d]/[0.06] shadow-sm"
                  >
                    <img src={study.logo} alt={study.client} className="w-4 h-4 rounded-sm object-contain" />
                    <span className="text-[10px] font-black text-[#0d0d0d]">{study.client}</span>
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
            <button className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#2c5270] text-white font-bold text-sm hover:bg-[#1e3d54] transition-colors">
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
