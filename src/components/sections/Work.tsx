import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Grid } from "lucide-react";
import { InstagramOverlay } from "./InstagramOverlay";

const projects = [
  {
    title: "TechFlow Redesign",
    category: "Brand Identity & Social",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    stats: "+240% Engagement",
    challenge: "TechFlow struggled with a fragmented brand identity across social platforms, leading to low trust and inconsistent engagement from their developer audience.",
    strategy: "We implemented a cohesive design system, launched a 'Dev-to-Dev' content series, and optimized their posting schedule using data-driven insights.",
    results: "Within 6 months, engagement tripled, and brand recall among their target demographic increased by 45%.",
    gridImages: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611162618071-b39a2dd7fdfd?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop"
    ]
  },
  {
    title: "Aura Cosmetics",
    category: "TikTok Viral Campaign",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
    stats: "15M+ Views",
    challenge: "Aura Cosmetics was a newcomer in a saturated beauty market. They needed a breakthrough moment to establish presence and drive sales without a massive traditional ad budget.",
    strategy: "We leveraged micro-influencers for authentic 'unboxing' experiences and created a viral #AuraGlow challenge that encouraged user-generated content.",
    results: "The campaign reached 15 million views in 3 weeks, leading to a complete sell-out of their initial inventory within a month.",
    gridImages: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594465919760-441fe5ad0cbf?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=500&auto=format&fit=crop"
    ]
  },
  {
    title: "Elevate Fitness",
    category: "Paid Social Scaling",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    stats: "4.2x ROAS",
    challenge: "Elevate Fitness had high member churn and was struggling to convert high-intent prospects into long-term subscribers through paid channels.",
    strategy: "We redesigned their full-funnel ad strategy, focusing on personalized video testimonials and retargeting ads that highlighted community success stories.",
    results: "ROAS increased from 1.5x up to 4.2x, while CPA (Cost Per Acquisition) dropped by 30% over the first quarter.",
    gridImages: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534258958216-38562daa39bb?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=500&auto=format&fit=crop"
    ]
  },
  {
    title: "Lumina App",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    stats: "100k+ App Installs",
    challenge: "Lumina needed to launch their productivity app in an extremely crowded market with heavy hitters like Notion and Linear.",
    strategy: "We focused on a 'Minimalist Productivity' narrative, using highly aesthetic motion design and a targeted waitlist strategy to build pre-launch hype.",
    results: "Achieved over 100,000 installs in the first month and was featured as 'App of the Day' on the iOS App Store.",
    gridImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1454165833767-0274b0596d17?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556761175-b813f57a1c14?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=500&auto=format&fit=crop"
    ]
  }
];

export function Work() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsOverlayOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[350px] md:auto-rows-[400px]">
          {projects.map((project, index) => {
            // True Interlocking Bento Grid Layout
            let spanClass = "md:col-span-1";
            if (index === 0) spanClass = "md:col-span-2";
            if (index === 1) spanClass = "md:col-span-1";
            if (index === 2) spanClass = "md:col-span-1";
            if (index === 3) spanClass = "md:col-span-2";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`group cursor-pointer block relative overflow-hidden rounded-[2rem] shadow-xl border border-border/20 bg-muted/20 ${spanClass}`}
                onClick={() => openOverlay(project)}
              >
                {/* Default Background Image */}
                <div className="absolute inset-0 z-0 opacity-100 group-hover:opacity-0 transition-opacity duration-700">
                  <img src={project.image} className="w-full h-full object-cover" alt="" />
                </div>

                {/* Instagram Style Grid Preview (Hover Reveal) */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 p-2 bg-background z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {project.gridImages.map((img, i) => (
                        <div key={i} className="relative overflow-hidden rounded-md">
                             <img 
                                src={img} 
                                alt="" 
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                            />
                        </div>
                    ))}
                </div>

                {/* Always-on Top Gradient for Tag */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
                
                {/* Top Right Tag */}
                <div className="absolute top-5 right-5 z-20 transition-transform duration-500 group-hover:scale-105 origin-right">
                  <div className="bg-background/95 backdrop-blur-md px-3 md:px-4 py-2 rounded-full text-[10px] md:text-[11px] font-black border border-border/20 shadow-2xl text-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                    <Grid className="w-3.5 h-3.5 text-primary" />
                    {project.stats}
                  </div>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none transition-opacity duration-500" />
                
                {/* Embedded Typography & Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary shadow-sm">{project.category}</p>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">{project.title}</h3>
                      </div>
                      
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl flex-shrink-0 origin-bottom-right">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <InstagramOverlay 
        isOpen={isOverlayOpen} 
        onClose={closeOverlay} 
        project={selectedProject} 
      />
    </section>
  );
}
