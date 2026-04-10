import { motion } from "framer-motion";
import { ArrowUpRight, Send, MessageCircle, Twitter, Instagram, Linkedin } from "lucide-react";

const leftLinks = ["About Us", "Services", "Careers", "Learn"];
const rightLinks = ["Branches", "Faq", "Blog"];

const socialIcons = [
  { icon: Send,          bg: "#7c3aed", color: "#fff" },
  { icon: MessageCircle, bg: "transparent", color: "#fff" },
  { icon: Twitter,       bg: "transparent", color: "#fff" },
  { icon: Instagram,     bg: "transparent", color: "#fff" },
  { icon: Linkedin,      bg: "transparent", color: "#fff" },
];

// Pixel checkerboard pattern data — pairs of [width, height, color]
const pixels = [
  [56,56,"#e8e8e8"],[28,28,"#0d0d0d"],[28,28,"#0d0d0d"],[56,56,"#e8e8e8"],[28,28,"#0d0d0d"],
  [56,28,"#e8e8e8"],[28,56,"#0d0d0d"],[56,56,"#e8e8e8"],[28,28,"#0d0d0d"],[28,28,"#0d0d0d"],
  [56,56,"#e8e8e8"],[28,56,"#0d0d0d"],[56,28,"#e8e8e8"],[28,28,"#0d0d0d"],[56,56,"#e8e8e8"],
  [28,28,"#0d0d0d"],[56,28,"#e8e8e8"],[28,56,"#0d0d0d"],[28,28,"#0d0d0d"],[56,56,"#e8e8e8"],
  [28,28,"#0d0d0d"],[56,28,"#e8e8e8"],[28,56,"#0d0d0d"],[56,56,"#e8e8e8"],[28,28,"#0d0d0d"],
];

export function Footer() {
  return (
    <footer className="bg-[#e8e8e8]">

      {/* Dark section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#0d0d0d] overflow-hidden"
      >
        {/* ── Double arch cutout at top ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex pointer-events-none z-10">
          <div className="w-24 h-14 sm:w-40 sm:h-20 bg-[#e8e8e8] rounded-b-[100%]" />
          <div className="w-24 h-14 sm:w-40 sm:h-20 bg-[#e8e8e8] rounded-b-[100%]" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-20 sm:pt-28 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">

            {/* Brand */}
            <div className="space-y-5">
              <div className="flex gap-1">
                <div className="w-8 h-8 bg-white rounded-md" />
                <div className="w-8 h-8 border-2 border-white rounded-md" />
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-medium max-w-[200px]">
                A Modern Social Agency For A Modern Brand And Advanced And Up-To-Date Services For Your Convenience
              </p>
            </div>

            {/* Quick Access */}
            <div>
              <p className="text-white font-bold text-base mb-6">Quick Access</p>
              <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                <div className="space-y-3">
                  {leftLinks.map((l) => (
                    <a
                      key={l}
                      href="#"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                        l === "Services" ? "text-white" : "text-white/50 hover:text-white"
                      }`}
                    >
                      {l === "Services" && (
                        <span className="w-2 h-2 rounded-full bg-[#7c3aed] flex-shrink-0" />
                      )}
                      {l}
                    </a>
                  ))}
                </div>
                <div className="space-y-3">
                  {rightLinks.map((l) => (
                    <a key={l} href="#" className="block text-white/50 text-sm font-medium hover:text-white transition-colors">
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-5">
              <p className="text-white/70 text-sm font-medium leading-relaxed">
                To Know The Latest News And Updates, Enter Your Email So That We Can Contact You
              </p>

              {/* Email input */}
              <div className="flex bg-white rounded-full overflow-hidden pr-1 py-1 pl-4 items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="flex-1 bg-transparent text-[#0d0d0d] text-sm placeholder:text-[#0d0d0d]/30 outline-none min-w-0 w-0"
                />
                <button className="h-9 px-3 sm:px-5 rounded-full bg-[#c8f03c] text-[#0d0d0d] font-bold text-xs sm:text-sm flex items-center gap-1 hover:bg-[#b8e02c] transition-colors flex-shrink-0 whitespace-nowrap">
                  Subscribe <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white/40 text-sm font-medium">Contact Us :</span>
                {socialIcons.map(({ icon: Icon, bg, color }, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{ background: bg !== "transparent" ? bg : "rgba(255,255,255,0.08)" }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Pixel checkerboard border ── */}
        <div className="flex items-end overflow-hidden h-16">
          {pixels.map(([w, h, c], i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: w, height: h, background: c }}
            />
          ))}
          {/* repeat to fill width */}
          {pixels.map(([w, h, c], i) => (
            <div
              key={`r-${i}`}
              className="flex-shrink-0"
              style={{ width: w, height: h, background: c }}
            />
          ))}
        </div>
      </motion.div>

      {/* Copyright bar */}
      <div className="bg-[#e8e8e8] py-5 text-center">
        <p className="text-[#0d0d0d]/40 text-sm font-medium">
          Copyright © {new Date().getFullYear()} SocialSync Agency. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
