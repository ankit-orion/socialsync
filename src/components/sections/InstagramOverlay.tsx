import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, MoreHorizontal, Grid, User, Video, Tag, ChevronLeft, Bell, Bookmark } from "lucide-react";

interface InstagramOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    image: string;
    stats: string;
    category: string;
  } | null;
}

export function InstagramOverlay({ isOpen, onClose, project }: InstagramOverlayProps) {
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-0 sm:p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative w-full sm:max-w-[460px] h-full sm:h-[88vh] bg-background sm:rounded-[4rem] sm:border-[14px] border-muted shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Phone Notch/Speaker (Hidden on tiny mobile) */}
            <div className="hidden sm:flex absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-muted rounded-b-[2rem] z-[130] items-center justify-center">
                <div className="w-20 h-1 bg-background/20 rounded-full" />
            </div>
            
            {/* Instagram Native Header */}
            <div className="px-4 pt-4 sm:pt-10 pb-2 flex items-center justify-between border-b border-border/10">
                <div className="flex items-center gap-4">
                    <ChevronLeft className="w-7 h-7" onClick={onClose} />
                    <div className="flex items-center gap-1">
                        <h3 className="text-xl font-bold tracking-tight">{project.title.toLowerCase().replace(/\s+/g, '')}</h3>
                        <div className="w-3.5 h-3.5 bg-[#0095f6] rounded-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Bell className="w-6 h-6" />
                    <MoreHorizontal className="w-6 h-6" />
                </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 overflow-y-auto pt-4 pb-24 scrollbar-none">
              {/* Profile Summary Section (Pic + Stats) */}
              <div className="px-5 mb-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-24 h-24 rounded-full border-2 border-primary/10 p-1 flex items-center justify-center relative bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                        <div className="w-full h-full bg-background rounded-full p-1">
                            <img 
                                src={project.image} 
                                className="w-full h-full object-cover rounded-full"
                                alt={project.title}
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold">+</div>
                    </div>
                    
                    <div className="flex-1 flex justify-around pl-4">
                        <div className="text-center">
                            <span className="block font-bold text-lg leading-tight">124</span>
                            <span className="text-xs text-foreground/80 leading-none">Posts</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-bold text-lg leading-tight">24.5k</span>
                            <span className="text-xs text-foreground/80 leading-none">Followers</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-bold text-lg leading-tight">642</span>
                            <span className="text-xs text-foreground/80 leading-none">Following</span>
                        </div>
                    </div>
                </div>

                {/* Bio Info */}
                <div className="space-y-0.5">
                    <p className="text-sm font-bold">Creative Powerhouse</p>
                    <p className="text-[13px] text-muted-foreground font-medium">{project.category}</p>
                    <div className="text-sm leading-snug">
                        <p>Specializing in digital-first brand systems.</p>
                        <p>✨ {project.stats}</p>
                        <p>🚀 Winner: Digital Design Award 2024</p>
                    </div>
                    <a href="#" className="text-sm text-blue-600 font-bold hover:underline">linktr.ee/{project.title.toLowerCase().replace(/\s+/g, '')}</a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 px-5 mb-6">
                <button className="flex-1 bg-primary text-primary-foreground text-sm font-bold py-2 rounded-lg hover:opacity-90 transition-opacity">Following</button>
                <button className="flex-1 bg-secondary text-secondary-foreground text-sm font-bold py-2 rounded-lg hover:bg-secondary/70 transition-colors">Message</button>
                <button className="bg-secondary text-secondary-foreground p-2 rounded-lg hover:bg-secondary/70 transition-colors">
                    <User className="w-4 h-4" />
                </button>
              </div>

              {/* Highlights */}
              <div className="flex gap-4 px-5 mb-8 overflow-x-auto scrollbar-none">
                {["Inside", "Wins", "Behind", "Press", "Future"].map((h) => (
                    <div key={h} className="flex flex-col items-center gap-1.5 flex-shrink-0">
                        <div className="w-16 h-16 rounded-full border border-border bg-muted/30 p-1 flex items-center justify-center">
                            <div className="w-full h-full rounded-full bg-background border border-border flex items-center justify-center text-[20px]">
                                {h === "Inside" ? "🏗️" : h === "Wins" ? "🏆" : h === "Behind" ? "🎬" : h === "Press" ? "📰" : "💎"}
                            </div>
                        </div>
                        <span className="text-[11px] font-medium">{h}</span>
                    </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="flex border-t border-border/20">
                <div className="flex-1 flex justify-center py-3 border-b-2 border-primary">
                    <Grid className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 flex justify-center py-3 opacity-30">
                    <Video className="w-6 h-6" />
                </div>
                <div className="flex-1 flex justify-center py-3 opacity-30">
                    <Tag className="w-6 h-6" />
                </div>
              </div>

              {/* Post Grid */}
              <div className="grid grid-cols-3 gap-0.5 mt-0.5">
                {posts.map((post, i) => (
                  <div key={i} className="aspect-square bg-muted relative overflow-hidden group">
                    <img src={post} alt="" className="w-full h-full object-cover" />
                    {i === 1 && <div className="absolute top-2 right-2"><Bookmark className="w-4 h-4 text-white drop-shadow-md" fill="white" /></div>}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-xs font-bold">
                      <span className="flex items-center gap-1"><Heart className="w-4 h-4" fill="white" /> {Math.floor(Math.random() * 800) + 100}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" fill="white" /> {Math.floor(Math.random() * 40)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Native Tab Bar */}
            <div className="absolute bottom-0 w-full h-[60px] bg-background border-t border-border flex justify-around items-center px-6 z-[150]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.099c-5.468 0-9.9 4.432-9.9 9.9 0 5.468 4.432 9.9 9.9 9.9 5.468 0 9.9-4.432 9.9-9.9 0-5.468-4.432-9.9-9.9-9.9zm0 17.8c-4.356 0-7.9-3.544-7.9-7.9s3.544-7.9 7.9-7.9 7.9 3.544 7.9 7.9-3.544 7.9-7.9 7.9z"/></svg>
                <User className="w-6 h-6 text-muted-foreground" />
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center p-0.5">
                   <img src={project.image} className="w-full h-full object-cover rounded-full" alt="" />
                </div>
                <Heart className="w-6 h-6 text-muted-foreground" />
                <Grid className="w-6 h-6 text-muted-foreground" />
            </div>
            
            {/* iOS Home Bar (Hidden on tiny mobile) */}
            <div className="hidden sm:block absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-muted/40 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
