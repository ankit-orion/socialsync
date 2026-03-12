import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "TechFlow Redesign",
    category: "Brand Identity & Social",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    stats: "+240% Engagement"
  },
  {
    title: "Aura Cosmetics",
    category: "TikTok Viral Campaign",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop",
    stats: "15M+ Views"
  },
  {
    title: "Elevate Fitness",
    category: "Paid Social Scaling",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
    stats: "4.2x ROAS"
  },
  {
    title: "Lumina App",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    stats: "100k+ App Installs"
  }
];

export function Work() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-square lg:aspect-[4/3] mb-6 shadow-md border border-border/20">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-border/50 shadow-sm text-foreground">
                    {project.stats}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
