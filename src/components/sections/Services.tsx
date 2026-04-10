import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Category tabs ── */
const CATEGORIES = [
  "For Startups",
  "For E-Commerce",
  "For Personal Brands",
  "For Enterprise",
  "For Agencies",
] as const;

type Category = (typeof CATEGORIES)[number];

/* ── Service card data per category ── */
interface ServiceCard {
  num: number;
  title: string;
  description: string;
  mock: string;
}

const SERVICES: Record<Category, ServiceCard[]> = {
  "For Startups": [
    {
      num: 1,
      title: "Social Media\nManagement",
      description:
        "We handle your entire social presence — creating posts, writing captions, and publishing daily so you can focus on building your product.",
      mock: "management",
    },
    {
      num: 2,
      title: "Content\nCreation",
      description:
        "Our team designs scroll-stopping graphics, shoots Reels, and writes copy that turns followers into loyal customers.",
      mock: "creation",
    },
    {
      num: 3,
      title: "Growth &\nEngagement",
      description:
        "We grow your audience organically through strategic hashtags, community engagement, and trend-jacking to build real traction.",
      mock: "growth",
    },
  ],
  "For E-Commerce": [
    {
      num: 1,
      title: "Product\nCampaigns",
      description:
        "We plan and execute scroll-stopping product launches across Instagram, TikTok, and Facebook — from teasers to full launch day blitz.",
      mock: "campaigns",
    },
    {
      num: 2,
      title: "Influencer\nCollaborations",
      description:
        "We find, negotiate, and manage the right creators who authentically showcase your products to their engaged audiences.",
      mock: "influencer",
    },
    {
      num: 3,
      title: "Paid Social\nAdvertising",
      description:
        "Our team runs and optimizes Meta, TikTok, and Pinterest ad campaigns to drive sales and maximize your return on ad spend.",
      mock: "ads",
    },
  ],
  "For Personal Brands": [
    {
      num: 1,
      title: "Brand Identity\n& Positioning",
      description:
        "We craft your unique voice, visual identity, and positioning strategy so you stand out in a crowded feed and attract the right audience.",
      mock: "branding",
    },
    {
      num: 2,
      title: "Content\nStrategy",
      description:
        "We plan your content pillars, build your calendar, and create a posting rhythm that keeps your audience engaged week after week.",
      mock: "creation",
    },
    {
      num: 3,
      title: "Community\nBuilding",
      description:
        "We manage your DMs, reply to comments, and nurture conversations that turn casual followers into a loyal tribe.",
      mock: "community",
    },
  ],
  "For Enterprise": [
    {
      num: 1,
      title: "Multi-Platform\nStrategy",
      description:
        "We develop a unified social strategy across LinkedIn, Instagram, X, and TikTok — tailored messaging for each platform, one cohesive brand voice.",
      mock: "management",
    },
    {
      num: 2,
      title: "Reputation\nManagement",
      description:
        "Our team monitors mentions, manages reviews, and handles crisis communications to protect and elevate your brand perception online.",
      mock: "reputation",
    },
    {
      num: 3,
      title: "Executive\nThought Leadership",
      description:
        "We ghostwrite, design, and publish LinkedIn and X content for your leadership team to establish industry authority.",
      mock: "thought",
    },
  ],
  "For Agencies": [
    {
      num: 1,
      title: "White-Label\nServices",
      description:
        "We become your invisible creative team — handling content creation, ad management, and reporting under your agency's brand.",
      mock: "whitelabel",
    },
    {
      num: 2,
      title: "Campaign\nExecution",
      description:
        "Overflow work? We execute end-to-end social campaigns for your clients — from strategy to scheduling to reporting.",
      mock: "campaigns",
    },
    {
      num: 3,
      title: "Creative\nProduction",
      description:
        "Our designers and videographers produce on-brand assets at scale — carousels, Reels, Stories, and ad creatives for your client roster.",
      mock: "creation",
    },
  ],
};

/* ────────────────────────────────────────────
   Mini visual mockups — showing RESULTS & WORK,
   not tool dashboards
   ──────────────────────────────────────────── */

/* Shows sample posts the agency created for clients */
const ManagementMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Platforms We Manage</span>
      <span className="text-[7px] font-semibold text-[#c8f03c] bg-[#c8f03c]/10 px-2 py-0.5 rounded-full">All Active</span>
    </div>
    {/* Platform results we achieved for clients */}
    {[
      { platform: "Instagram", handle: "@clientbrand", followers: "124K", growth: "+18%", color: "#E1306C" },
      { platform: "TikTok", handle: "@clientbrand", followers: "89K", growth: "+42%", color: "#000" },
      { platform: "LinkedIn", handle: "Client Brand", followers: "32K", growth: "+12%", color: "#0A66C2" },
    ].map((p, i) => (
      <motion.div
        key={i}
        initial={{ x: -15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 + i * 0.12 }}
        className="flex items-center gap-2 bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04]"
      >
        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[6.5px] font-black flex-shrink-0" style={{ background: p.color }}>
          {p.platform[0]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[8.5px] font-bold text-[#0d0d0d] truncate">{p.platform}</p>
          <p className="text-[7px] text-[#0d0d0d]/35 font-medium">{p.handle}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-[9px] font-black text-[#0d0d0d]">{p.followers}</p>
          <p className="text-[7px] font-bold text-[#c8f03c]">{p.growth}</p>
        </div>
      </motion.div>
    ))}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65 }}
      className="mt-auto bg-[#0d0d0d] rounded-xl p-2.5 flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#c8f03c] flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-white/45 font-semibold">Posts Published This Month</p>
        <p className="text-[11px] font-black text-white">186 posts <span className="text-[7px] font-bold text-[#c8f03c]">across 3 platforms</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows creative work samples the agency produces */
const CreationMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Content We Created</span>
      <span className="text-[7px] font-semibold text-[#0d0d0d]/30">This week</span>
    </div>
    {/* Sample content pieces */}
    {[
      { type: "Carousel", platform: "IG", title: "5 Growth Hacks for 2026", likes: "4.2K", color: "#E1306C" },
      { type: "Short Video", platform: "TT", title: "Product Unboxing Reel", likes: "12.8K", color: "#000" },
    ].map((c, i) => (
      <motion.div
        key={i}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.12 }}
        className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#0d0d0d]/[0.04]"
      >
        <div className="h-14 bg-gradient-to-br from-[#7c3aed] to-[#c8f03c] relative flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            {c.type === "Short Video" ? (
              <svg width="9" height="9" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            ) : (
              <svg width="9" height="9" viewBox="0 0 24 24" fill="white"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            )}
          </div>
          <span className="absolute top-1.5 right-2 text-[6.5px] font-bold text-white/80 bg-black/25 px-1.5 py-0.5 rounded-full">{c.type}</span>
        </div>
        <div className="p-2.5 flex items-center justify-between">
          <div>
            <p className="text-[8.5px] font-bold text-[#0d0d0d]">{c.title}</p>
            <p className="text-[7px] text-[#0d0d0d]/35 font-medium">♥ {c.likes} likes</p>
          </div>
          <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[5.5px] font-black" style={{ background: c.color }}>
            {c.platform}
          </div>
        </div>
      </motion.div>
    ))}
    {/* Daily output stat */}
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#7c3aed]/10 flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#7c3aed" strokeWidth="2"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-[#0d0d0d]/40 font-semibold">Assets Delivered</p>
        <p className="text-[10px] font-black text-[#0d0d0d]">48 pieces <span className="text-[7px] font-bold text-[#7c3aed]">this week</span></p>
      </div>
    </motion.div>
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.72 }}
      className="mt-auto bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#c8f03c]/15 flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#c8f03c" strokeWidth="2" strokeLinecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="#c8f03c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-[#0d0d0d]/40 font-semibold">Client Approval Rate</p>
        <p className="text-[10px] font-black text-[#0d0d0d]">96% <span className="text-[7px] font-bold text-[#c8f03c]">first-round</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows client growth results the agency achieved */
const GrowthMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Client Results</span>
      <span className="text-[7px] font-semibold text-[#0d0d0d]/30">Last 90 days</span>
    </div>
    {/* KPI cards — results we achieved */}
    <div className="grid grid-cols-2 gap-2">
      {[
        { label: "Followers Gained", val: "+84K", icon: "👥" },
        { label: "Engagement Rate", val: "8.7%", icon: "❤️" },
      ].map((kpi, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04]"
        >
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[10px]">{kpi.icon}</span>
            <p className="text-[7px] text-[#0d0d0d]/35 font-semibold">{kpi.label}</p>
          </div>
          <span className="text-[14px] font-black text-[#0d0d0d] leading-none">{kpi.val}</span>
        </motion.div>
      ))}
    </div>
    {/* Growth chart */}
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.45 }}
      className="flex-1 bg-white rounded-xl p-3 shadow-sm border border-[#0d0d0d]/[0.04]"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[8px] font-bold text-[#0d0d0d]/60">Audience Growth</span>
        <span className="text-[7px] font-bold text-[#c8f03c] bg-[#c8f03c]/10 px-1.5 py-0.5 rounded-full">+312%</span>
      </div>
      <svg viewBox="0 0 200 55" className="w-full">
        <defs>
          <linearGradient id="growthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c8f03c" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#c8f03c" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <motion.path
          d="M0,48 Q20,45 40,40 T80,32 T120,22 T160,14 T200,5"
          fill="none" stroke="#c8f03c" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.55 }}
        />
        <path d="M0,48 Q20,45 40,40 T80,32 T120,22 T160,14 T200,5 V55 H0 Z" fill="url(#growthGrad)"/>
      </svg>
    </motion.div>
    {/* Bottom stat */}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
      className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#c8f03c]/15 flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#c8f03c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-[#0d0d0d]/40 font-semibold">Organic Reach Increase</p>
        <p className="text-[10px] font-black text-[#0d0d0d]">4.2M <span className="text-[7px] font-bold text-[#c8f03c]">impressions/mo</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows campaign work the agency executes for e-commerce */
const CampaignsMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Recent Campaigns</span>
      <span className="text-[7px] font-semibold text-[#c8f03c] bg-[#c8f03c]/10 px-2 py-0.5 rounded-full">3 Live</span>
    </div>
    {[
      { name: "Summer Drop '26", client: "StyleHaus", reach: "2.1M", status: "Live", color: "#E1306C" },
      { name: "Back to School", client: "EduBrand", reach: "890K", status: "Live", color: "#0A66C2" },
      { name: "Holiday Pre-Launch", client: "LuxHome", reach: "Draft", status: "Planning", color: "#7c3aed" },
    ].map((c, i) => (
      <motion.div
        key={i}
        initial={{ x: -12, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 + i * 0.12 }}
        className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04]"
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[5.5px] font-black" style={{ background: c.color }}>{c.client[0]}</div>
            <span className="text-[8.5px] font-bold text-[#0d0d0d]">{c.name}</span>
          </div>
          <span className={`text-[6.5px] font-bold px-1.5 py-0.5 rounded-full ${c.status === 'Live' ? 'bg-[#c8f03c]/15 text-[#5a6d11]' : 'bg-[#0d0d0d]/5 text-[#0d0d0d]/30'}`}>{c.status}</span>
        </div>
        <div className="flex items-center gap-3 ml-7">
          <p className="text-[7px] text-[#0d0d0d]/35 font-medium">{c.client}</p>
          <p className="text-[7px] font-bold text-[#0d0d0d]/50">{c.reach} reach</p>
        </div>
      </motion.div>
    ))}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65 }}
      className="mt-auto bg-[#0d0d0d] rounded-xl p-2.5 flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#c8f03c] flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-white/45 font-semibold">Campaigns Delivered</p>
        <p className="text-[11px] font-black text-white">42 launches <span className="text-[7px] font-bold text-[#c8f03c]">this year</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows influencer partnerships the agency manages */
const InfluencerMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Creators We Partnered</span>
      <span className="text-[7px] font-semibold text-[#0d0d0d]/30">Active collabs</span>
    </div>
    {[
      { name: "Emma Wilson", niche: "Fashion & Lifestyle", followers: "245K", result: "3.2× ROI" },
      { name: "Raj Patel", niche: "Tech Reviews", followers: "180K", result: "2.8× ROI" },
      { name: "Mia Chen", niche: "Food & Wellness", followers: "320K", result: "4.1× ROI" },
    ].map((c, i) => (
      <motion.div
        key={i}
        initial={{ x: -12, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 + i * 0.12 }}
        className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E1306C] to-[#7c3aed] flex items-center justify-center text-white text-[7px] font-bold flex-shrink-0">
          {c.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[8.5px] font-bold text-[#0d0d0d] truncate">{c.name}</p>
          <p className="text-[7px] text-[#0d0d0d]/35 font-medium">{c.niche} · {c.followers}</p>
        </div>
        <span className="text-[8px] font-black text-[#c8f03c] flex-shrink-0">{c.result}</span>
      </motion.div>
    ))}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65 }}
      className="mt-auto bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#E1306C]/10 flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#E1306C" strokeWidth="2"/><circle cx="9" cy="7" r="4" stroke="#E1306C" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#E1306C" strokeWidth="2"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-[#0d0d0d]/40 font-semibold">Creator Partnerships</p>
        <p className="text-[10px] font-black text-[#0d0d0d]">24 active <span className="text-[7px] font-bold text-[#E1306C]">+8 this quarter</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows paid ad campaign results the agency delivers */
const AdsMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Ad Performance</span>
      <span className="text-[7px] font-semibold text-[#0d0d0d]/30">Client campaigns</span>
    </div>
    {[
      { client: "StyleHaus", spend: "$12,400", roas: "4.2×", conv: "1,840", status: "Running" },
      { client: "TechFlow", spend: "$8,900", roas: "6.1×", conv: "2,310", status: "Running" },
      { client: "FoodCo", spend: "$5,200", roas: "3.5×", conv: "890", status: "Optimizing" },
    ].map((ad, i) => (
      <motion.div
        key={i}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 + i * 0.12 }}
        className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04]"
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[8.5px] font-bold text-[#0d0d0d]">{ad.client}</span>
          <span className={`text-[6.5px] font-bold px-1.5 py-0.5 rounded-full ${ad.status === 'Running' ? 'bg-[#c8f03c]/15 text-[#5a6d11]' : 'bg-[#7c3aed]/10 text-[#7c3aed]'}`}>{ad.status}</span>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-[6.5px] text-[#0d0d0d]/30 font-medium">Spend</p>
            <p className="text-[8.5px] font-bold text-[#0d0d0d]">{ad.spend}</p>
          </div>
          <div>
            <p className="text-[6.5px] text-[#0d0d0d]/30 font-medium">ROAS</p>
            <p className="text-[8.5px] font-black text-[#c8f03c]">{ad.roas}</p>
          </div>
          <div>
            <p className="text-[6.5px] text-[#0d0d0d]/30 font-medium">Conversions</p>
            <p className="text-[8.5px] font-bold text-[#0d0d0d]">{ad.conv}</p>
          </div>
        </div>
      </motion.div>
    ))}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65 }}
      className="mt-auto bg-[#0d0d0d] rounded-xl p-2.5 flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#c8f03c] flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-white/45 font-semibold">Total Revenue Generated</p>
        <p className="text-[11px] font-black text-white">$128K <span className="text-[7px] font-bold text-[#c8f03c]">for clients this month</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows community management work */
const CommunityMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Engagement We Handle</span>
      <span className="text-[7px] font-semibold text-[#7c3aed] bg-[#7c3aed]/8 px-2 py-0.5 rounded-full">Today</span>
    </div>
    {[
      { action: "Replied to 24 comments", client: "StyleHaus", platform: "IG", color: "#E1306C", time: "2h ago" },
      { action: "Managed 8 DM conversations", client: "TechFlow", platform: "TW", color: "#000", time: "3h ago" },
      { action: "Moderated community post", client: "FoodCo", platform: "FB", color: "#1877F2", time: "5h ago" },
    ].map((a, i) => (
      <motion.div
        key={i}
        initial={{ x: 12, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 + i * 0.12 }}
        className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[5.5px] font-black flex-shrink-0" style={{ background: a.color }}>
          {a.platform}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[8px] font-bold text-[#0d0d0d] truncate">{a.action}</p>
          <p className="text-[7px] text-[#0d0d0d]/35 font-medium">{a.client} · {a.time}</p>
        </div>
      </motion.div>
    ))}
    {/* Response stat */}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65 }}
      className="mt-auto bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#7c3aed]/10 flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#7c3aed" strokeWidth="2"/><polyline points="12 6 12 12 16 14" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-[#0d0d0d]/40 font-semibold">Avg. Response Time</p>
        <p className="text-[10px] font-black text-[#0d0d0d]">&lt;15 min <span className="text-[7px] font-bold text-[#7c3aed]">across all clients</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows brand identity work */
const BrandingMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Brand Kit We Built</span>
      <span className="text-[7px] font-semibold text-[#0d0d0d]/30">Delivered</span>
    </div>
    {/* Color palette row */}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25 }}
      className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04]"
    >
      <p className="text-[7px] text-[#0d0d0d]/35 font-semibold mb-2">Color Palette</p>
      <div className="flex gap-1.5">
        {["#0d0d0d", "#7c3aed", "#c8f03c", "#E1306C", "#f5f5f5"].map((c, i) => (
          <div key={i} className="flex-1 h-6 rounded-md shadow-inner" style={{ background: c, border: c === '#f5f5f5' ? '1px solid #e0e0e0' : 'none' }} />
        ))}
      </div>
    </motion.div>
    {/* Typography */}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.37 }}
      className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04]"
    >
      <p className="text-[7px] text-[#0d0d0d]/35 font-semibold mb-1.5">Typography</p>
      <p className="text-[13px] font-black text-[#0d0d0d] leading-none mb-0.5">Inter Black</p>
      <p className="text-[8px] text-[#0d0d0d]/50" style={{ fontWeight: 400 }}>Inter Regular for body copy</p>
    </motion.div>
    {/* Voice */}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.49 }}
      className="flex-1 bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04]"
    >
      <p className="text-[7px] text-[#0d0d0d]/35 font-semibold mb-1.5">Brand Voice</p>
      <div className="flex flex-wrap gap-1">
        {["Bold", "Authentic", "Playful", "Expert", "Approachable"].map((v, i) => (
          <span key={i} className="text-[7px] font-bold bg-[#0d0d0d]/[0.04] text-[#0d0d0d]/60 px-2 py-1 rounded-full">{v}</span>
        ))}
      </div>
    </motion.div>
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="bg-[#0d0d0d] rounded-xl p-2.5 flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#c8f03c] flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-white/45 font-semibold">Brand Kits Delivered</p>
        <p className="text-[11px] font-black text-white">86 brands <span className="text-[7px] font-bold text-[#c8f03c]">& counting</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows reputation management work */
const ReputationMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Brand Sentiment</span>
      <span className="text-[7px] font-semibold text-[#c8f03c] bg-[#c8f03c]/10 px-2 py-0.5 rounded-full">Healthy</span>
    </div>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25 }}
      className="bg-white rounded-xl p-3 shadow-sm border border-[#0d0d0d]/[0.04] text-center"
    >
      <p className="text-[28px] font-black text-[#c8f03c] leading-none">94%</p>
      <p className="text-[7.5px] text-[#0d0d0d]/40 font-semibold mt-1">Positive Sentiment Score</p>
    </motion.div>
    {[
      { label: "Mentions Monitored", val: "2,400/week", icon: "🔍" },
      { label: "Reviews Responded", val: "100%", icon: "💬" },
      { label: "Crisis Prevented", val: "3 this quarter", icon: "🛡️" },
    ].map((s, i) => (
      <motion.div
        key={i}
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + i * 0.1 }}
        className="bg-white rounded-xl p-2 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
      >
        <span className="text-[11px]">{s.icon}</span>
        <div className="flex-1">
          <p className="text-[7px] text-[#0d0d0d]/35 font-medium">{s.label}</p>
          <p className="text-[9px] font-bold text-[#0d0d0d]">{s.val}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

/* Shows thought leadership work */
const ThoughtMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Content We Ghostwrote</span>
      <span className="text-[7px] font-semibold text-[#0d0d0d]/30">For leadership team</span>
    </div>
    {[
      { title: "Why AI Won't Replace Marketers", platform: "LinkedIn", impressions: "48K", engagement: "12%" },
      { title: "The Future of D2C Social", platform: "X / Twitter", impressions: "32K", engagement: "8.4%" },
    ].map((p, i) => (
      <motion.div
        key={i}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.12 }}
        className="bg-white rounded-xl p-3 shadow-sm border border-[#0d0d0d]/[0.04]"
      >
        <p className="text-[8.5px] font-bold text-[#0d0d0d] mb-1">{p.title}</p>
        <p className="text-[7px] text-[#0d0d0d]/35 font-medium mb-2">Published on {p.platform}</p>
        <div className="flex gap-3">
          <div>
            <p className="text-[6.5px] text-[#0d0d0d]/30">Impressions</p>
            <p className="text-[9px] font-black text-[#0d0d0d]">{p.impressions}</p>
          </div>
          <div>
            <p className="text-[6.5px] text-[#0d0d0d]/30">Engagement</p>
            <p className="text-[9px] font-black text-[#c8f03c]">{p.engagement}</p>
          </div>
        </div>
      </motion.div>
    ))}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="mt-auto bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#0A66C2" strokeWidth="2"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-[#0d0d0d]/40 font-semibold">Articles Published</p>
        <p className="text-[10px] font-black text-[#0d0d0d]">64 posts <span className="text-[7px] font-bold text-[#0A66C2]">for 12 executives</span></p>
      </div>
    </motion.div>
  </div>
);

/* Shows white-label agency work */
const WhitelabelMock = () => (
  <div className="w-full h-full flex flex-col gap-2.5">
    <div className="flex items-center justify-between px-0.5">
      <span className="text-[9px] font-bold text-[#0d0d0d]/60">Your Brand, Our Work</span>
      <span className="text-[7px] font-semibold text-[#0d0d0d]/30">White-label</span>
    </div>
    {[
      { agency: "Agency Alpha", clients: "12 brands", deliverables: "Content + Ads", color: "#7c3aed" },
      { agency: "MediaHive", clients: "8 brands", deliverables: "Full Management", color: "#E1306C" },
      { agency: "GrowthCo", clients: "5 brands", deliverables: "Creative Only", color: "#0A66C2" },
    ].map((a, i) => (
      <motion.div
        key={i}
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 + i * 0.12 }}
        className="bg-white rounded-xl p-2.5 shadow-sm border border-[#0d0d0d]/[0.04] flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[7px] font-black flex-shrink-0" style={{ background: a.color }}>
          {a.agency[0]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[8.5px] font-bold text-[#0d0d0d] truncate">{a.agency}</p>
          <p className="text-[7px] text-[#0d0d0d]/35 font-medium">{a.clients} · {a.deliverables}</p>
        </div>
      </motion.div>
    ))}
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65 }}
      className="mt-auto bg-[#0d0d0d] rounded-xl p-2.5 flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-[#c8f03c] flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#0d0d0d" strokeWidth="2.5"/><circle cx="9" cy="7" r="4" stroke="#0d0d0d" strokeWidth="2.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#0d0d0d" strokeWidth="2.5"/></svg>
      </div>
      <div>
        <p className="text-[7px] text-white/45 font-semibold">Agency Partners</p>
        <p className="text-[11px] font-black text-white">25 agencies <span className="text-[7px] font-bold text-[#c8f03c]">trust our team</span></p>
      </div>
    </motion.div>
  </div>
);

/* ── Mock renderer ── */
const MOCK_MAP: Record<string, () => JSX.Element> = {
  management: ManagementMock,
  creation: CreationMock,
  growth: GrowthMock,
  campaigns: CampaignsMock,
  influencer: InfluencerMock,
  ads: AdsMock,
  community: CommunityMock,
  branding: BrandingMock,
  reputation: ReputationMock,
  thought: ThoughtMock,
  whitelabel: WhitelabelMock,
};

const RenderMock = ({ type }: { type: string }) => {
  const Mock = MOCK_MAP[type];
  return Mock ? <Mock /> : null;
};

/* ════════════════════════════════════════════
   SERVICES SECTION
   ════════════════════════════════════════════ */
export function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>("For Startups");
  const cards = SERVICES[activeCategory];

  return (
    <section id="services" className="bg-[#e8e8e8] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#0d0d0d]/[0.08] rounded-full px-4 py-2 shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[11px] font-bold text-[#0d0d0d] tracking-wide uppercase">What We Do</span>
          </div>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-[#0d0d0d] leading-[1.15] tracking-tight max-w-2xl mx-auto mb-10"
        >
          We handle your{" "}
          <span className="inline-flex items-center align-middle mx-1 bg-[#c8f03c] rounded-lg px-2 py-0.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>{" "}
          social media so you don't have to
        </motion.h2>

        {/* ── Category tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Scrollable on mobile, centered on desktop */}
          <div className="w-full overflow-x-auto scrollbar-none flex justify-start sm:justify-center px-5 sm:px-0">
            <div className="inline-flex items-center gap-1 bg-white rounded-full p-1.5 border border-[#0d0d0d]/[0.06] shadow-sm flex-shrink-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#0d0d0d] text-white shadow-md"
                      : "text-[#0d0d0d]/50 hover:text-[#0d0d0d]/80 hover:bg-[#0d0d0d]/[0.03]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {cards.map((card, i) => (
              <motion.div
                key={`${activeCategory}-${card.num}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group bg-white rounded-[28px] border border-[#0d0d0d]/[0.05] overflow-hidden shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
              >
                {/* Text area */}
                <div className="p-7 pb-5">
                  <span className="text-[#0d0d0d]/10 text-5xl font-black leading-none select-none">{card.num}</span>
                  <h3 className="text-xl font-black text-[#0d0d0d] tracking-tight leading-tight mt-2 whitespace-pre-line">
                    {card.title}
                  </h3>
                  <p className="text-[#0d0d0d]/45 text-[13px] font-medium leading-relaxed mt-3 max-w-[260px]">
                    {card.description}
                  </p>
                </div>

                {/* Mock area */}
                <div className="px-5 pb-6 flex-1 min-h-[240px]">
                  <div className="w-full h-full bg-[#f7f7f8] rounded-2xl p-3.5 border border-[#0d0d0d]/[0.03]">
                    <RenderMock type={card.mock} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
