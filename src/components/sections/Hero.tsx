import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetStr: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetStr);
    elem?.scrollIntoView({ behavior: 'smooth' });
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
          We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">viral</span> social presence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium"
        >
          Stop posting into the void. We craft data-driven content strategies that turn your followers into loyal customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#cta" onClick={(e) => handleScroll(e, 'cta')} className="w-full sm:w-auto">
            <Button size="lg" className="rounded-full h-14 px-8 text-base gap-2 group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 border-0 shadow-lg shadow-purple-500/25 transition-all">
              Start Your Campaign
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base w-full bg-background/50 backdrop-blur-md border-border hover:bg-muted text-foreground">
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
                <div className="mx-auto text-[10px] md:text-xs text-muted-foreground font-mono">dashboard.socialsync.io</div>
             </div>

             {/* Dashboard Content */}
             <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                   {/* Main chart area */}
                   <div className="lg:col-span-2 space-y-4">
                     <div className="flex items-center justify-between">
                       <div className="space-y-1">
                         <h3 className="font-semibold text-base md:text-lg">Audience Growth</h3>
                         <p className="text-xs md:text-sm text-muted-foreground">+148% from last month</p>
                       </div>
                       <div className="h-6 w-16 md:h-8 md:w-24 rounded-full bg-primary/10 border border-primary/20"></div>
                     </div>
                     <div className="h-48 md:h-80 w-full rounded-xl border border-border/50 bg-muted/20 relative overflow-hidden flex items-end p-2 md:p-4 gap-1 md:gap-2">
                        {/* Fake chart bars */}
                        {[40, 30, 60, 50, 80, 70, 100].map((h, i) => (
                           <div key={i} className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                     </div>
                   </div>

                   {/* Sidebar cards */}
                   <div className="flex sm:grid sm:grid-cols-2 lg:flex flex-col gap-4 md:gap-6">
                     <div className="flex-1 rounded-xl border border-border/50 bg-muted/20 p-4 md:p-5 flex flex-col justify-between">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 mb-3 md:mb-4 flex items-center justify-center">
                          <div className="w-4 h-4 md:w-5 md:h-5 text-blue-500">📈</div>
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold">2.4M</div>
                          <div className="text-xs md:text-sm text-muted-foreground">Total Impressions</div>
                        </div>
                     </div>
                     <div className="flex-1 rounded-xl border border-border/50 bg-muted/20 p-4 md:p-5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute right-0 bottom-0 w-24 h-24 md:w-32 md:h-32 bg-purple-500/10 rounded-tl-full blur-2xl"></div>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 mb-3 md:mb-4 flex items-center justify-center relative z-10">
                          <div className="w-4 h-4 md:w-5 md:h-5 text-purple-500">✨</div>
                        </div>
                        <div className="relative z-10">
                          <div className="text-2xl md:text-3xl font-bold">14.2%</div>
                          <div className="text-xs md:text-sm text-muted-foreground">Avg. Engagement Rate</div>
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
