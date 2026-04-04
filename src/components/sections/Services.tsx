import { motion } from "framer-motion";
import { ArrowUpRight, Users, PenTool, Target, BarChart3 } from "lucide-react";

const features = [
  { icon: Users, title: "Social Management", desc: "End-to-end channel management across every platform." },
  { icon: PenTool, title: "Content Creation", desc: "Scroll-stopping visuals, copy, and short-form video." },
  { icon: Target, title: "Paid Advertising", desc: "Data-backed ad campaigns built to scale revenue." },
  { icon: BarChart3, title: "Analytics & Strategy", desc: "Deep-dive reports and actionable growth insights." },
];

export function Services() {
  return (
    <section id="services" className="bg-[#e8e8e8] py-8 px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white rounded-[32px] p-8 md:p-12"
      >
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d0d0d] leading-tight tracking-tight">
              We Tried To Provide You
              <br />
              With All Social Media
              <br />
              Growth Services
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <p className="text-[#0d0d0d]/55 text-base leading-relaxed font-medium">
              We made every effort to ensure you have access to a comprehensive range of social media services. Our aim was to provide you with a seamless growth experience that caters to your brand's needs regardless of your industry.
            </p>
            <div>
              <button className="flex items-center gap-2 h-11 px-6 rounded-full bg-[#c8f03c] text-[#0d0d0d] font-bold text-sm hover:bg-[#b8e02c] transition-colors">
                Explore More <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0d0d0d]/[0.07] mb-10" />

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="space-y-4"
            >
              {/* Icon illustration area */}
              <div className="h-28 bg-[#f5f5f5] rounded-2xl flex items-center justify-center relative overflow-hidden group hover:bg-[#c8f03c]/10 transition-colors duration-300">
                <f.icon className="w-10 h-10 text-[#0d0d0d]/20 group-hover:text-[#0d0d0d]/50 transition-colors duration-300" strokeWidth={1.5} />
                <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#c8f03c]" />
              </div>
              <div>
                <h4 className="font-black text-[#0d0d0d] text-sm tracking-tight mb-1">{f.title}</h4>
                <p className="text-[#0d0d0d]/50 text-xs leading-relaxed font-medium">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
