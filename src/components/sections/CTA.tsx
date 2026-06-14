import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-8 px-4 sm:px-6 mb-12 bg-[#fafafa] dark:bg-zinc-950 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-zinc-900 dark:bg-zinc-900 border border-zinc-900/20 dark:border-zinc-700 shadow-xl shadow-zinc-900/10 py-20 md:py-32"
      >
        <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-sm"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to scale your brand?
          </h2>
          <p className="text-zinc-400 mb-8 md:mb-10 text-sm md:text-base leading-relaxed">
            Over 50 brands trust us with their social presence. Most see measurable results within the first 30 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/book">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 font-medium px-8 py-4 rounded-full transition-colors text-sm shadow-lg shadow-zinc-900/10">
                Book a Free Call <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-8 py-4 rounded-full transition-colors text-sm">
                Send Us an Email
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
