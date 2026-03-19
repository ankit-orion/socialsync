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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer block"
              onClick={() => openOverlay(project)}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-8 shadow-xl border border-border/20 bg-muted/30">
                {/* Instagram Style Grid Preview */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-[2px] p-2 bg-background/50 backdrop-blur-sm group-hover:bg-background/20 transition-colors duration-500">
                    {project.gridImages.map((img, i) => (
                        <div key={i} className="relative overflow-hidden rounded-sm group-hover:rounded-md transition-all duration-500">
                             <img 
                                src={img} 
                                alt="" 
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    ))}
                    {/* Overlay Tag on the first grid item or elsewhere */}
                    <div className="absolute top-6 right-6 z-20">
                      <div className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black border border-border/50 shadow-lg text-foreground uppercase tracking-widest flex items-center gap-2">
                        <Grid className="w-3 h-3" />
                        {project.stats}
                      </div>
                    </div>
                </div>

                {/* Hover Effect Mask */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                
                {/* Action Reveal */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <div className="bg-background px-6 py-3 rounded-full font-bold shadow-2xl scale-90 group-hover:scale-100 transition-transform flex items-center gap-2">
                        View Profile <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-border">
                        <img src={project.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-medium">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all shadow-sm">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
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
