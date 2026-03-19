import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const dashboardData = [
  {
    name: "TechFlow",
    growth: "+148%",
    reach: "2.4M",
    followers: "+12.4K",
    engagement: "14.2%",
    path: "M 0 50 L 0 40 Q 15 35 25 38 T 50 20 T 75 25 T 100 5 L 100 50 Z",
    linePath: "M 0 40 Q 15 35 25 38 T 50 20 T 75 25 T 100 5",
    color: "hsl(var(--primary))",
    pointTop: "12%",
    impressionsData: [40, 50, 45, 60, 55, 75, 65, 90, 85, 100],
    sparkline: "M 0 50 Q 20 40 40 45 T 70 20 T 100 10",
  },
  {
    name: "Aura Beauty",
    growth: "+312%",
    reach: "5.1M",
    followers: "+48.2K",
    engagement: "18.4%",
    path: "M 0 50 L 0 45 Q 20 40 30 25 T 60 15 T 80 10 T 100 2 L 100 50 Z",
    linePath: "M 0 45 Q 20 40 30 25 T 60 15 T 80 10 T 100 2",
    color: "#ec4899",
    pointTop: "6%",
    impressionsData: [20, 35, 50, 45, 70, 85, 80, 95, 90, 100],
    sparkline: "M 0 50 Q 25 30 50 35 T 80 15 T 100 5",
  },
  {
    name: "Lumina App",
    growth: "+89%",
    reach: "1.2M",
    followers: "+5.8K",
    engagement: "9.8%",
    path: "M 0 50 L 0 45 Q 15 48 30 35 T 50 30 T 70 20 T 100 15 L 100 50 Z",
    linePath: "M 0 45 Q 15 48 30 35 T 50 30 T 70 20 T 100 15",
    color: "#8b5cf6",
    pointTop: "32%",
    impressionsData: [60, 55, 65, 50, 70, 60, 80, 75, 90, 85],
    sparkline: "M 0 40 Q 30 45 50 25 T 80 30 T 100 15",
  },
  {
    name: "Elevate Fit",
    growth: "+205%",
    reach: "3.8M",
    followers: "+24.1K",
    engagement: "22.1%",
    path: "M 0 50 L 0 30 Q 10 20 25 25 T 45 15 T 75 10 T 100 0 L 100 50 Z",
    linePath: "M 0 30 Q 10 20 25 25 T 45 15 T 75 10 T 100 0",
    color: "#10b981",
    pointTop: "2%",
    impressionsData: [30, 45, 60, 55, 80, 75, 95, 85, 100, 95],
    sparkline: "M 0 50 Q 15 20 35 25 T 65 10 T 100 0",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const activeData = dashboardData[activeTab];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetStr: string,
  ) => {
    e.preventDefault();
    const elem = document.getElementById(targetStr);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 w-full h-full bg-background z-[-1] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1.5 text-sm font-medium backdrop-blur-md mb-8 shadow-sm"
        >
          <Sparkles className="mr-2 h-4 w-4 text-primary" />
          <span>Elevating Brands Digitally in 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter max-w-5xl mb-6 relative"
        >
          We build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            viral
          </span>{" "}
          social presence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium"
        >
          Stop posting into the void. We craft data-driven content strategies
          that turn your followers into loyal customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            to="/book"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base gap-2 group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 border-0 shadow-lg shadow-purple-500/25 transition-all"
            >
              Start Your Campaign
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a
            href="#work"
            onClick={(e) => handleScroll(e, "work")}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base w-full bg-background/50 backdrop-blur-md border-border hover:bg-muted text-foreground"
            >
              View Our Work
            </Button>
          </a>
        </motion.div>

        {/* Hero Dashboard UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-12 md:mt-20 w-full max-w-6xl relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>
          <div className="relative rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl overflow-hidden text-left">
            {/* Window Controls */}
            <div className="h-10 md:h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/20">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400/80" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80" />
              <div className="mx-auto text-[10px] md:text-xs text-muted-foreground font-mono">
                dashboard.socialsync.io
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Main chart area */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-base md:text-lg">
                        Audience Growth
                      </h3>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`growth-${activeTab}`}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="text-xs md:text-sm text-muted-foreground"
                        >
                          <span className="text-primary font-medium">
                            {activeData.growth}
                          </span>{" "}
                          from last month
                        </motion.p>
                      </AnimatePresence>
                    </div>

                    {/* Profile Selector Tabs */}
                    <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl border border-border/50 overflow-x-auto no-scrollbar max-w-full sm:max-w-xs md:max-w-md">
                      {dashboardData.map((data, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveTab(idx)}
                          className={`px-3 py-1.5 text-[11px] md:text-xs font-medium rounded-lg transition-all whitespace-nowrap relative z-10 ${
                            activeTab === idx
                              ? "text-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                          }`}
                        >
                          {activeTab === idx && (
                            <motion.div
                              layoutId="activeTabBadge"
                              className="absolute inset-0 bg-background rounded-lg z-[-1]"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}
                          {data.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="h-48 md:h-80 w-full rounded-xl border border-border/50 bg-background/40 relative overflow-hidden p-4 group">
                    {/* Area Chart Background Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-[0.15]">
                      <div className="border-t border-border w-full"></div>
                      <div className="border-t border-border w-full"></div>
                      <div className="border-t border-border w-full"></div>
                      <div className="border-t border-border w-full"></div>
                      <div className="border-t border-border w-full"></div>
                    </div>

                    {/* Animated Glowing Area Chart */}
                    <div className="absolute inset-0 mt-4 md:mt-8">
                      <svg
                        viewBox="0 0 100 50"
                        preserveAspectRatio="none"
                        className="w-full h-full drop-shadow-[0_10px_10px_rgba(var(--primary),0.2)]"
                      >
                        <defs>
                          <linearGradient
                            id="glowGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor={activeData.color}
                              stopOpacity="0.4"
                            />
                            <stop
                              offset="100%"
                              stopColor={activeData.color}
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <motion.path
                          key={`fill-${activeTab}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          d={activeData.path}
                          fill="url(#glowGradient)"
                        />
                        <motion.path
                          key={`line-${activeTab}`}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          d={activeData.linePath}
                          fill="none"
                          stroke={activeData.color}
                          strokeWidth="0.4"
                          strokeLinecap="round"
                          className="transition-colors duration-500"
                        />
                      </svg>
                    </div>

                    {/* Floating Tooltip & Data Point marker */}
                    <motion.div
                      key={`tooltip-${activeTab}`}
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 1.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="absolute right-[2%] -translate-x-1/2 flex flex-col items-center"
                      style={{ top: activeData.pointTop }}
                    >
                      <div className="bg-foreground text-background font-bold text-xs px-3 py-1.5 rounded-lg shadow-2xl mb-1.5 flex items-center gap-1.5 z-20 whitespace-nowrap group-hover:-translate-y-1 transition-transform">
                        {activeData.reach}{" "}
                        <span className="opacity-70 font-normal">Reach</span>
                      </div>
                      <div
                        className="w-3.5 h-3.5 rounded-full bg-background border-[3px] shadow-[0_0_20px_rgba(var(--primary),0.8)] z-20 group-hover:scale-125 transition-transform duration-300"
                        style={{ borderColor: activeData.color }}
                      ></div>
                      <div
                        className="w-[1px] h-[300px] border-l-2 border-dashed z-10 -translate-y-1"
                        style={{ borderColor: activeData.color, opacity: 0.3 }}
                      ></div>
                    </motion.div>
                  </div>
                </div>

                {/* Sidebar cards */}
                <div className="flex sm:grid sm:grid-cols-2 lg:flex flex-col gap-4 md:gap-6">
                  <div className="flex-1 rounded-xl border border-border/50 bg-muted/20 p-4 md:p-5 flex flex-col justify-between overflow-hidden relative">
                    {/* Background color glow */}
                    <div
                      className="absolute inset-0 bg-blue-500/5 transition-colors duration-500"
                      style={{ backgroundColor: `${activeData.color}15` }}
                    ></div>

                    {/* Expanding Sonar / Pulse Rings */}
                    <div className="absolute top-[28px] md:top-[32px] right-[40px] z-0 flex items-center justify-center opacity-60">
                       <motion.div 
                          key={`pulse-1-${activeTab}`}
                          initial={{ scale: 0.8, opacity: 0.5 }}
                          animate={{ scale: 3, opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                          className="absolute w-8 h-8 rounded-full border border-current"
                          style={{ color: activeData.color }}
                       />
                       <motion.div 
                          key={`pulse-2-${activeTab}`}
                          initial={{ scale: 0.8, opacity: 0.5 }}
                          animate={{ scale: 3, opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                          className="absolute w-8 h-8 rounded-full border border-current"
                          style={{ color: activeData.color }}
                       />
                    </div>

                    <div className="flex justify-between items-start z-10 w-full relative">
                      <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center relative shadow-lg"
                        style={{ backgroundColor: `${activeData.color}25` }}
                      >
                        <div
                          className="w-4 h-4 md:w-5 md:h-5 text-center leading-none flex items-center justify-center"
                          style={{ color: activeData.color }}
                        >
                          👥
                        </div>
                      </div>

                      {/* Avatar Stack perfectly placed in top right */}
                      <div className="flex -space-x-3 opacity-90 drop-shadow-md pb-4 pr-1">
                         {[
                            "https://i.pravatar.cc/100?img=12",
                            "https://i.pravatar.cc/100?img=33",
                            "https://i.pravatar.cc/100?img=41"
                         ].map((src, i) => (
                            <motion.img 
                               key={`avatar-${activeTab}-${i}`}
                               initial={{ scale: 0, x: 20 }}
                               animate={{ scale: 1, x: 0 }}
                               transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                               className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 object-cover relative"
                               style={{ borderColor: "hsl(var(--background))", zIndex: 10 - i }}
                               src={`${src}&t=${activeTab}`}
                               alt=""
                            />
                         ))}
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto pt-6 lg:pt-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`foll-${activeTab}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-3xl md:text-4xl font-black tracking-tight"
                        >
                          {activeData.followers}
                        </motion.div>
                      </AnimatePresence>
                      <div className="text-xs md:text-sm text-foreground/70 font-medium">
                        Followers Gained
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 rounded-xl border border-border/50 bg-muted/20 p-4 md:p-5 flex flex-col justify-between relative overflow-hidden group">
                    {/* Blurred background glow */}
                    <div
                      className="absolute right-0 bottom-0 w-24 h-24 md:w-32 md:h-32 rounded-tl-full blur-2xl transition-colors duration-500"
                      style={{ backgroundColor: `${activeData.color}15` }}
                    ></div>

                    <div className="flex justify-between items-start z-10 w-full relative">
                      <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center relative shadow-lg"
                        style={{ backgroundColor: `${activeData.color}25` }}
                      >
                        <span
                          className="w-4 h-4 md:w-5 md:h-5 text-center leading-none flex items-center justify-center"
                          style={{ color: activeData.color }}
                        >
                          ⚡️
                        </span>
                      </div>

                      {/* Mini Graph Animation - rigidly placed top right */}
                      <div className="w-16 md:w-20 h-8 md:h-10 relative flex items-center shrink-0 opacity-80">
                        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible drop-shadow-sm">
                           {/* Subtle background track */}
                           <path 
                              d={activeData.sparkline}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-muted/30"
                           />
                           {/* Animated Line */}
                           <motion.path 
                              key={`mini-line-${activeTab}`}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              d={activeData.sparkline}
                              fill="none" 
                              stroke={activeData.color} 
                              strokeWidth="6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                      </div>

                      {/* Subtle Background Floating Interactions */}
                      <div className="absolute right-0 top-12 w-24 h-24 overflow-hidden pointer-events-none z-[-1] opacity-50 mix-blend-screen">
                         {[1, 2, 3].map((i) => (
                            <motion.div
                               key={`reaction-${activeTab}-${i}`}
                               initial={{ y: 50, opacity: 0, scale: 0.5 }}
                               animate={{ y: -30, opacity: [0, 1, 0], scale: [0.5, 1.2, 0.8] }}
                               transition={{ duration: 2 + i * 0.5, repeat: Infinity, repeatDelay: 1 + i, ease: "easeOut" }}
                               className="absolute text-[8px] md:text-[10px]"
                               style={{ left: `${20 + i * 20}%`, animationDelay: `${i * 0.3}s` }}
                            >
                               {i % 2 === 0 ? '❤️' : '💬'}
                            </motion.div>
                         ))}
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto pt-6 lg:pt-8 w-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`eng-${activeTab}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-3xl md:text-4xl font-black tracking-tight"
                        >
                          {activeData.engagement}
                        </motion.div>
                      </AnimatePresence>
                      <div className="text-xs md:text-sm text-foreground/70 font-medium">
                        Avg. Engagement Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
