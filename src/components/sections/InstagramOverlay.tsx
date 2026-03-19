import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MoreHorizontal, Grid, User, Video, Tag, ChevronLeft, Bell, ArrowUpRight, Layout, BarChart } from "lucide-react";

interface InstagramOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    image: string;
    stats: string;
    category: string;
    challenge?: string;
    strategy?: string;
    results?: string;
  } | null;
}

export function InstagramOverlay({ isOpen, onClose, project }: InstagramOverlayProps) {
  const [activeView, setActiveView] = useState<'profile' | 'strategy'>('profile');
  if (!project) return null;

  // Generate some "dummy" instagram posts with random images
  const posts = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162618071-b39a2dd7fdfd?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl sm:p-4 lg:p-12"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative w-full max-w-[1240px] h-full sm:h-auto sm:max-h-[92vh] lg:h-[88vh] flex flex-col lg:flex-row bg-background sm:rounded-[4rem] sm:border-[14px] border-muted shadow-2xl overflow-hidden pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Section: Phone View / Instagram App (Active View: 'profile') */}
            <div className={`w-full lg:w-[460px] flex-shrink-0 relative h-full flex flex-col bg-background lg:border-r border-border/10 ${activeView === 'profile' ? 'flex' : 'hidden lg:flex'}`}>
                {/* Phone Notch/Speaker (Hidden on tiny mobile) */}
                <div className="hidden sm:flex absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-muted rounded-b-[2rem] z-[130] items-center justify-center">
                    <div className="w-20 h-1 bg-background/20 rounded-full" />
                </div>
                
                {/* Instagram Native Header */}
                <div className="px-5 pt-8 sm:pt-12 lg:pt-14 pb-3 flex items-center justify-between border-b border-border/10">
                    <div className="flex items-center gap-4">
                        <motion.div
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <ChevronLeft 
                                className="w-8 h-8 cursor-pointer hover:opacity-60 transition-opacity" 
                                onClick={onClose} 
                            />
                        </motion.div>
                        <div className="flex items-center gap-1.5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                            <h3 className="text-xl font-black tracking-tight">{project.title.toLowerCase().replace(/\s+/g, '')}</h3>
                            <div className="w-4 h-4 bg-[#0095f6] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Bell className="w-6 h-6 hover:opacity-60 cursor-pointer transition-opacity" />
                        <MoreHorizontal className="w-6 h-6 hover:opacity-60 cursor-pointer transition-opacity" />
                    </div>
                </div>

                {/* Profile Content (App View) */}
                <div className="flex-1 overflow-y-auto px-1 pt-6 pb-28 scrollbar-none custom-scrollbar" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                    {/* Profile Summary */}
                    <div className="px-5 mb-6">
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <div className="w-24 h-24 rounded-full border-2 border-primary/10 p-1 flex items-center justify-center relative bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                                <div className="w-full h-full bg-background rounded-full p-1.5">
                                    <img src={project.image} className="w-full h-full object-cover rounded-full" alt={project.title} />
                                </div>
                                <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#0095f6] rounded-full border-[3px] border-background flex items-center justify-center text-white text-[18px] font-bold leading-none">+</div>
                            </div>
                            
                            <div className="flex-1 flex justify-around pl-4">
                                <div className="text-center group cursor-pointer hover:opacity-70 transition-opacity">
                                    <span className="block font-black text-[20px] leading-none mb-1">124</span>
                                    <span className="text-[12px] font-medium text-foreground/70 uppercase tracking-widest leading-none">Posts</span>
                                </div>
                                <div className="text-center group cursor-pointer hover:opacity-70 transition-opacity">
                                    <span className="block font-black text-[20px] leading-none mb-1">24.5k</span>
                                    <span className="text-[12px] font-medium text-foreground/70 uppercase tracking-widest leading-none">Followers</span>
                                </div>
                                <div className="text-center group cursor-pointer hover:opacity-70 transition-opacity">
                                    <span className="block font-black text-[20px] leading-none mb-1">642</span>
                                    <span className="text-[12px] font-medium text-foreground/70 uppercase tracking-widest leading-none">Following</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <p className="text-[15px] font-black">Creative Powerhouse</p>
                            <p className="text-[13px] text-muted-foreground font-semibold uppercase tracking-wider">{project.category}</p>
                            <div className="text-[14px] leading-relaxed font-medium">
                                <p>Specializing in digital-first brand systems.</p>
                                <p>✨ {project.stats}</p>
                                <p>🚀 Winner: Digital Design Award 2024</p>
                            </div>
                            <a href="#" className="text-sm text-blue-600 font-bold hover:underline inline-block mt-2">linktr.ee/{project.title.toLowerCase().replace(/\s+/g, '')}</a>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 px-5 mb-8">
                        <button className="flex-1 bg-primary text-primary-foreground text-sm font-black py-2.5 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md">Following</button>
                        <button className="flex-1 bg-secondary text-secondary-foreground text-sm font-black py-2.5 rounded-xl hover:opacity-80 active:scale-95 transition-all border border-border/40">Message</button>
                    </div>

                    {/* Highlights Section Removed by user request */}

                    {/* Tabs */}
                    <div className="flex border-t border-border/10 sticky top-0 bg-background/90 backdrop-blur-md z-20 transition-colors">
                        <div className="flex-1 flex justify-center py-4 border-b-2 border-primary group cursor-pointer">
                            <Grid className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 flex justify-center py-4 opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
                            <Video className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 flex justify-center py-4 opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
                            <Tag className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    {/* App Post Grid - Optimized for 4:5 ratio (1080x1350) */}
                    <div className="grid grid-cols-3 gap-0.5 mt-0.5 bg-border/10">
                        {posts.map((post, i) => (
                        <div key={i} className="aspect-[4/5] bg-muted/40 relative overflow-hidden group cursor-pointer">
                            <img src={post} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-[12px] font-black">
                                <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" fill="white" /> {Math.floor(Math.random() * 800) + 100}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Native Tab Bar (Inside the profile section) */}
                <div className="w-full h-[75px] bg-background border-t border-border/40 flex justify-around items-center px-6 z-[120] mt-auto pb-2 sm:pb-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="hover:scale-110 cursor-pointer transition-transform"><path d="M12 2.099c-5.468 0-9.9 4.432-9.9 9.9 0 5.468 4.432 9.9 9.9 9.9 5.468 0 9.9-4.432 9.9-9.9 0-5.468-4.432-9.9-9.9-9.9zm0 17.8c-4.356 0-7.9-3.544-7.9-7.9s3.544-7.9 7.9-7.9 7.9 3.544 7.9 7.9-3.544 7.9-7.9 7.9z"/></svg>
                    <User className="w-6 h-6 text-muted-foreground hover:scale-110 cursor-pointer transition-transform" />
                    <div className="w-9 h-9 rounded-full border-2 border-primary/20 flex items-center justify-center p-0.5 hover:scale-110 cursor-pointer transition-transform bg-background">
                       <img src={project.image} className="w-full h-full object-cover rounded-full" alt="" />
                    </div>
                    <Heart className="w-6 h-6 text-muted-foreground hover:scale-110 cursor-pointer transition-transform" />
                    <Grid className="w-6 h-6 text-muted-foreground hover:scale-110 cursor-pointer transition-transform" />
                </div>
            </div>

            {/* Right Section: Details / Case Study (Active View: 'strategy') */}
            <div className={`flex-1 overflow-y-auto bg-muted/5 scrollbar-none flex flex-col h-full border-t lg:border-t-0 border-border/10 ${activeView === 'strategy' ? 'flex' : 'hidden lg:flex'}`}>
                <div className="p-8 md:p-12 lg:p-20 max-w-4xl mx-auto space-y-16 pb-40 lg:pb-20">
                    <header className="space-y-6">
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                           Case Study
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-foreground">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 !== 0 ? "italic font-light text-muted-foreground/50 block sm:inline" : "block sm:inline"}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-medium leading-relaxed max-w-2xl">
                            Transforming {project.title} from a fragmented social presence into a dominant market leader through engineering-led design.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 border-t border-border/40 pt-16">
                        <section className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                <h4 className="text-xs font-black uppercase tracking-[0.25em] text-foreground/50">The Challenge</h4>
                            </div>
                            <p className="text-xl leading-relaxed text-foreground font-semibold">
                                {project.challenge}
                            </p>
                        </section>

                        <section className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <h4 className="text-xs font-black uppercase tracking-[0.25em] text-foreground/50">Our Strategy</h4>
                            </div>
                            <p className="text-xl leading-relaxed text-foreground font-semibold">
                                {project.strategy}
                            </p>
                        </section>
                    </div>

                    {/* Results Card */}
                    <section className="bg-primary text-primary-foreground p-10 lg:p-14 rounded-[3rem] space-y-10 shadow-3xl relative overflow-hidden group border border-white/10">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-120 transition-all duration-1000 rotate-12">
                            <Grid className="w-64 h-64" />
                        </div>
                        
                        <div className="flex items-center gap-3 opacity-60">
                            <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                            <h4 className="text-xs font-black uppercase tracking-[0.25em]">Measurable Impact</h4>
                        </div>

                        <div className="space-y-4 relative z-10">
                             <p className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                                {project.results}
                            </p>
                            <p className="text-lg lg:text-xl text-primary-foreground/60 font-medium">Quantifiable growth delivered to the client.</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-12 lg:gap-20 pt-8 border-t border-white/10 overflow-hidden">
                             <div className="space-y-2">
                                <p className="text-4xl lg:text-5xl font-black tracking-tighter">{project.stats}</p>
                                <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-50">Engagement KPI</p>
                             </div>
                             <div className="space-y-2">
                                <p className="text-4xl lg:text-5xl font-black tracking-tighter">12.5k</p>
                                <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-50">Audience Growth</p>
                             </div>
                             <div className="space-y-2">
                                <p className="text-4xl lg:text-5xl font-black tracking-tighter">15M+</p>
                                <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-50">Total Reach</p>
                             </div>
                        </div>
                    </section>
                    
                    <footer className="pt-12 border-t border-border/40 flex flex-col sm:flex-row gap-8 justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                        <div className="flex items-center gap-4">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Project Successfully Scaled
                        </div>
                        <button 
                            onClick={onClose}
                            className="bg-foreground text-background px-8 py-4 rounded-full text-[11px] hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-3 shadow-xl active:scale-95 group/btn"
                        >
                            Next Case Study <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    </footer>
                </div>
            </div>

            {/* Mobile Navigation Toggle (Moved to the bottom) */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-xl border-t border-border/10 z-[210] pb-6 sm:pb-4">
                <div className="inline-flex bg-muted/30 p-1.5 rounded-full relative w-full shadow-inner">
                    {/* Sliding Background */}
                    <motion.div 
                        className="absolute inset-y-1.5 rounded-full bg-primary shadow-lg"
                        initial={false}
                        animate={{ x: activeView === 'profile' ? 0 : '100%' }}
                        style={{ width: 'calc(50% - 6px)' }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                    
                    <button 
                        onClick={() => setActiveView('profile')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-black uppercase tracking-widest relative z-10 transition-colors duration-300 ${activeView === 'profile' ? 'text-primary-foreground' : 'text-foreground/40'}`}
                    >
                        <Layout className="w-3.5 h-3.5" />
                        Profile
                    </button>
                    <button 
                        onClick={() => setActiveView('strategy')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-black uppercase tracking-widest relative z-10 transition-colors duration-300 ${activeView === 'strategy' ? 'text-primary-foreground' : 'text-foreground/40'}`}
                    >
                        <BarChart className="w-3.5 h-3.5" />
                        Strategy
                    </button>
                </div>
            </div>

            {/* iOS Home Bar (Visual only, sm+ sizes) */}
            <div className="hidden sm:block absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-muted/40 rounded-full z-[230]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
