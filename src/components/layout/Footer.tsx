import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#e8e8e8] pt-4 px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#0d0d0d] rounded-t-[40px] px-8 md:px-16 pt-14 pb-8"
      >
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5">
                <div className="w-4 h-4 bg-white rounded-sm" />
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
              </div>
              <span className="font-black text-[17px] text-white tracking-tight">SocialSync</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-medium max-w-xs">
              A modern social media agency for modern brands. Measurable growth, guaranteed results.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-1">
            <div className="space-y-3">
              <p className="text-white/30 text-xs font-black uppercase tracking-[0.2em] mb-4">Quick Access</p>
              {["About Us", "Services", "Careers", "Learn"].map((l) => (
                <a key={l} href="#" className="block text-white/60 text-sm font-medium hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-white/30 text-xs font-black uppercase tracking-[0.2em] mb-4">&nbsp;</p>
              {["Branches", "FAQ", "Blog", "Contact"].map((l) => (
                <a key={l} href="#" className="block text-white/60 text-sm font-medium hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 md:col-span-1">
            <p className="text-white/70 text-sm font-medium leading-relaxed">
              To know the latest news and updates, enter your email so that we can contact you.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 h-11 px-4 rounded-full bg-white/[0.08] border border-white/10 text-white text-sm placeholder:text-white/30 outline-none focus:border-[#c8f03c]/60"
              />
              <button className="h-11 px-5 rounded-full bg-[#c8f03c] text-[#0d0d0d] font-bold text-sm flex items-center gap-1.5 hover:bg-[#b8e02c] transition-colors flex-shrink-0">
                Subscribe <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-white/30 text-xs font-medium">Contact Us:</span>
              {["telegram", "whatsapp", "twitter", "instagram", "linkedin"].map((s) => (
                <a key={s} href="#" className="w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="text-[9px] font-black text-white/40 uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-medium">
            Copyright © {new Date().getFullYear()} SocialSync Agency. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms"].map((l) => (
              <a key={l} href="#" className="text-white/30 text-xs font-medium hover:text-white/60 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
