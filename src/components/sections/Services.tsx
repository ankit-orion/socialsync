import { motion } from "framer-motion";
import { Megaphone, PenTool, BarChart3, Users, Zap, Target } from "lucide-react";

const services = [
  {
    title: "Social Management",
    description: "End-to-end management of your social channels. We handle the posting, engaging, and growing so you can focus on building your business.",
    icon: Users,
    colSpan: "md:col-span-2 lg:col-span-2",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-500"
  },
  {
    title: "Content Creation",
    description: "Scroll-stopping visuals and copy. From short-form video to graphics.",
    icon: PenTool,
    colSpan: "col-span-1",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500"
  },
  {
    title: "Paid Advertising",
    description: "Data-backed ad campaigns to scale your revenue.",
    icon: Target,
    colSpan: "col-span-1",
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500"
  },
  {
    title: "Influencer Collabs",
    description: "Connect with creators who align with your brand to reach authentic audiences.",
    icon: Megaphone,
    colSpan: "md:col-span-2 lg:col-span-1",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-emerald-500"
  },
  {
    title: "Analytics & Strategy",
    description: "Deep-dive reports and actionable insights. We measure what matters.",
    icon: BarChart3,
    colSpan: "col-span-1",
    gradient: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-amber-500"
  },
  {
    title: "Viral Campaigns",
    description: "Explosive growth campaigns designed to maximize reach and brand awareness quickly across networks.",
    icon: Zap,
    colSpan: "md:col-span-2 lg:col-span-2",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-500"
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-block rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm font-medium backdrop-blur-md">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">dominate</span> social.
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            We combine creative excellence with data-driven strategy.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-colors ${service.colSpan}`}
            >
              {/* Card Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-border/50`}>
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
