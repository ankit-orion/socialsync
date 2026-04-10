import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, LayoutGrid, ShoppingBag, Briefcase, GraduationCap, Sparkles } from "lucide-react";

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
  {
    id: 10,
    client: "W3Schools",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=w3schools.com",
    industry: "EdTech",
    description: "We revitalized W3Schools's developer community presence by transforming technical documentation into highly-shareable, bite-sized social learning content across platforms.",
    results: [
      { label: "Community Growth", value: "+840K", delta: "developers" },
      { label: "Social Traffic", value: "2.4M", delta: "to tutorials" },
      { label: "Engagement", value: "11%", delta: "avg rate" },
    ],
    platforms: ["YouTube", "LinkedIn", "X / Twitter"],
    color: "#04AA6D",
    accent: "#04AA6D",
    services: ["Content Repurposing", "Developer Advocacy", "Social SEO"],
    testimonial: {
      quote: "They turned static code tutorials into dynamic, engaging content that developers actually want to share and discuss.",
      name: "Hege Refsnes",
      role: "Co-Founder, W3Schools",
    },
    slides: [
      { headline: "The\nChallenge", body: "W3Schools had enormous search traffic but lacked a strong, interactive community presence on modern social platforms.", bg: "#022014", accent: "#04AA6D" },
      { headline: "Bite-Sized\nLearning", body: "Transformed dry textbook tutorials into 60-second code snippets, interactive quizzes, and visual 'cheat sheets'.", bg: "#022014", accent: "#06e693" },
      { headline: "Developer\nHumor", body: "Injected relatable developer struggles and memes into the content strategy, exponentially increasing shareability.", bg: "#022014", accent: "#04AA6D" },
      { headline: "The\nResults", body: "840K new followers across platforms. 2.4 million direct click-throughs to technical tutorials. Revitalized brand sentiment.", bg: "#022014", accent: "#2c5270" },
    ],
  },
];



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
            className="text-[#0d0d0d]/60 hover:text-[#0d0d0d] dark:text-white/60 dark:hover:text-white inline-flex items-center text-sm font-bold transition-colors bg-white dark:bg-white/5 px-4 py-2 rounded-full border border-[#0d0d0d]/[0.06] dark:border-white/10 shadow-sm"
          >
            ← Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14">
          <div className="flex justify-start mb-5">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-[#0d0d0d]/[0.08] dark:border-white/10 rounded-full px-4 py-2 shadow-sm text-[#0d0d0d] dark:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-[11px] font-bold tracking-wide uppercase">Our Work</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d0d0d] dark:text-white tracking-tight leading-[1.05] mb-5 max-w-2xl">
            Real results for
            <br />
            real brands.
          </h1>
          <p className="text-[#0d0d0d]/70 dark:text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-lg">
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
            <div className="inline-flex items-center gap-1 bg-white dark:bg-white/5 rounded-full p-1.5 border border-[#0d0d0d]/[0.06] dark:border-white/10 shadow-sm">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  title={f}
                  className={`flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    filter === f
                      ? "bg-[#0d0d0d] text-white dark:bg-white dark:text-[#0d0d0d] shadow-md"
                      : "text-[#0d0d0d]/70 dark:text-white/60 hover:text-[#0d0d0d] dark:hover:text-white hover:bg-[#0d0d0d]/[0.03] dark:hover:bg-white/10"
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
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            {filtered.map((study, i) => {
              const gridSpan = i % 3 === 0 ? "md:col-span-12 h-[460px] md:h-[500px]" : "md:col-span-6 h-[460px]";

              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => openLightbox(study)}
                  className={`group relative rounded-[32px] overflow-hidden bg-[#0a0a0a] border border-[#222] shadow-2xl transition-all duration-700 cursor-pointer ${gridSpan}`}
                >
                  {/* Subtle Background Glow Based on Brand Color */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 80% 80%, ${study.color} 0%, transparent 60%)` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />

                  {/* Content Wrappers */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                    {/* Header: Client & Industry */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                          <img src={study.logo} alt={study.client} className="w-7 h-7 object-contain rounded-sm" />
                        </div>
                        <div>
                          <h4 className="text-white font-black text-lg tracking-tight">{study.client}</h4>
                          <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                      
                      {/* Interactive View Button */}
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0a0a0a] text-white transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Middle: Big Metric */}
                    <div className="mt-auto transition-transform duration-500">
                      <h3 
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-2" 
                        style={{ color: study.accent }}
                      >
                        {study.results[0].value}
                      </h3>
                      <p className="text-sm md:text-base font-bold text-white/80 uppercase tracking-widest pl-1">
                        {study.results[0].label}
                      </p>

                      {/* Bottom Description & Tags - Always visible */}
                      <div className="mt-6 md:mt-8 transition-all duration-500">
                        <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-2xl mb-6 line-clamp-2">
                          {study.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.platforms.map((p) => (
                            <span key={p} className="text-[10px] font-bold bg-white/10 text-white px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl mx-auto h-[85vh] pointer-events-auto bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_-20px_rgba(0,0,0,1)] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* --- Left Sidebar Info Panel --- */}
              <div className="w-full md:w-[35%] h-[40%] md:h-full bg-[#121212] p-8 md:p-12 flex flex-col border-b md:border-b-0 md:border-r border-white/5 overflow-y-auto scrollbar-none relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center">
                        <img src={active.logo} alt={active.client} className="w-7 h-7 object-contain" />
                     </div>
                     <div>
                        <h2 className="text-2xl font-black text-white leading-tight">{active.client}</h2>
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{active.industry}</span>
                     </div>
                  </div>
                  
                  <p className="text-white/60 text-sm font-medium leading-relaxed mb-10">
                    {active.description}
                  </p>
                  
                  {/* Vertical Results Grid */}
                  <div className="space-y-6 mb-10">
                    {active.results.map((r, idx) => (
                       <div key={idx} className="border-l-[3px] pl-5" style={{ borderColor: active.accent }}>
                          <div className="text-3xl font-black text-white tracking-tighter mb-1">{r.value}</div>
                          <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{r.label}</div>
                       </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Testimonial */}
                {active.testimonial && (
                  <div className="mt-8 bg-white/5 p-5 rounded-2xl border border-white/5 relative">
                     <div className="absolute -top-3 -left-2 text-4xl text-white/10 font-serif">"</div>
                     <p className="text-sm font-medium text-white/80 italic mb-4 relative z-10">
                       {active.testimonial.quote}
                     </p>
                     <div className="text-xs font-bold text-white">{active.testimonial.name}</div>
                     <div className="text-[10px] uppercase tracking-wider text-white/40">{active.testimonial.role}</div>
                  </div>
                )}
              </div>

              {/* --- Right Cinematic Slide Presentation --- */}
              <div className="relative w-full md:w-[65%] h-[60%] md:h-full bg-black overflow-hidden flex flex-col object-cover">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideIndex}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <div className="w-full h-full p-8 md:p-20 flex flex-col justify-center relative" style={{ backgroundColor: active.slides[slideIndex].bg }}>
                        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 80% 20%, ${active.slides[slideIndex].accent} 0%, transparent 70%)` }} />
                        <div className="relative z-10 max-w-2xl">
                           <span className="inline-block px-3 py-1 mb-6 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border border-white/20 text-white/80" style={{ backgroundColor: active.slides[slideIndex].accent + '40' }}>
                             {slideIndex === 0 ? "The Challenge" : slideIndex === active.slides.length - 1 ? "The Results" : "The Strategy"}
                           </span>
                           <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight whitespace-pre-line drop-shadow-lg">
                             {active.slides[slideIndex].headline}
                           </h3>
                           <p className="text-lg md:text-2xl text-white/80 font-medium leading-relaxed max-w-xl">
                             {active.slides[slideIndex].body}
                           </p>
                        </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Click Zones */}
                <button className="absolute left-0 inset-y-0 w-[40%] z-20 cursor-w-resize" onClick={lbPrev} />
                <button className="absolute right-0 inset-y-0 w-[60%] z-20 cursor-e-resize" onClick={lbNext} />

                {/* Navigation Overlays */}
                <div className="absolute bottom-6 md:bottom-12 left-8 md:left-12 right-8 md:right-12 z-30 flex items-center justify-between">
                  {/* Nav Dots */}
                  <div className="flex gap-2 md:gap-3 bg-black/20 backdrop-blur-md px-5 py-3 rounded-full border border-white/10">
                    {active.slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setSlideIndex(i); }}
                        className="rounded-full transition-all duration-500 hover:scale-150"
                        style={{
                          width: i === slideIndex ? 36 : 8,
                          height: 8,
                          background: i === slideIndex ? active.accent : "rgba(255,255,255,0.4)",
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pointer-events-none">
                    <span className="text-[11px] font-black text-white bg-black/40 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 tracking-widest uppercase">
                       {slideIndex + 1} / {active.slides.length}
                    </span>
                  </div>
                </div>

                {/* Close Button Top Right */}
                <button
                   onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                   className="absolute top-6 md:top-8 right-6 md:right-8 z-50 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                >
                   <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
