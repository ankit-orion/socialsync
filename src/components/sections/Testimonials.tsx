import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    { name: "Sarah Jenkins", role: "CMO at Lumina", text: "SocialSync completely rebuilt our presence. We went from 2,000 monthly impressions to over 4.5 Million in under 90 days. Their data-driven approach is terrifyingly effective." },
    { name: "Michael Torres", role: "Founder, Volt Fitness", text: "The viral hooks they wrote for our short-form content generated $120k in direct trackable revenue in Q4 alone. I've never seen an agency move this aggressively." },
    { name: "Elena Rostova", role: "Head of Growth, Nexus", text: "They don't just post content, they engineer attention. We fired our entire internal social team and handed them the keys. Easily the best decision of the year." },
    { name: "David Chen", role: "CEO, Aura Beauty", text: "Within 3 weeks, our TikTok engagement skyrocketed by 800%. The mathematical precision behind their creative strategy is unmatched." },
    { name: "Marcus Webb", role: "Director, Hyperion", text: "We were burning thousands on useless ad spend. SocialSync reallocated it into organic viral engineering and generated 5x the ROAS." }
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-32 bg-background relative overflow-hidden border-y border-border/20">
      
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">
          Unmatched Results
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Don't take our word for it.
        </h3>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Sleek fade gradients on the edges so it blurs out */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex w-max space-x-6 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 // Adjust speed here
          }}
        >
          {duplicatedReviews.map((review, i) => (
            <div 
               key={i}
               className="w-[300px] sm:w-[350px] md:w-[450px] shrink-0 p-6 md:p-8 rounded-3xl md:rounded-[2rem] bg-secondary/10 backdrop-blur-sm border border-border/40 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-base md:text-lg leading-relaxed mb-8 text-foreground/80 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center font-bold text-white shadow-md">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
