import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="bg-[#e8e8e8] py-8 px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-[#0d0d0d] rounded-[24px] sm:rounded-[32px] px-6 sm:px-10 md:px-16 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
            Ready to scale your brand?
          </h2>
          <p className="text-white/45 text-base font-medium max-w-md">
            Join 50+ modern brands who trust us to handle their social presence and drive measurable revenue.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link to="/book">
            <button className="flex items-center gap-2 h-12 px-7 rounded-full bg-[#c8f03c] text-[#0d0d0d] font-bold text-sm hover:bg-[#b8e02c] transition-colors whitespace-nowrap">
              Book a Free Call <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
          <Link to="/contact">
            <button className="h-12 px-7 rounded-full border-2 border-white/20 text-white font-bold text-sm hover:border-white/50 transition-colors whitespace-nowrap">
              Send Us an Email
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
