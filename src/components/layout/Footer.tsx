import { motion } from "framer-motion";
import { ArrowUpRight, Send, MessageCircle, Twitter, Instagram, Linkedin } from "lucide-react";

const leftLinks = ["About Us", "Services", "Careers", "Learn"];
const rightLinks = ["Branches", "Faq", "Blog"];

const socialIcons = [
  { icon: Send,          bg: "#60516f", color: "#fff" },
  { icon: MessageCircle, bg: "transparent", color: "#fff" },
  { icon: Twitter,       bg: "transparent", color: "#fff" },
  { icon: Instagram,     bg: "transparent", color: "#fff" },
  { icon: Linkedin,      bg: "transparent", color: "#fff" },
];

// Pixel checkerboard pattern data — pairs of [width, height, color]

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d]">

      {/* Dark section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#0d0d0d] overflow-hidden"
      >
        {/* Content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-16 sm:pt-20 pb-0">
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
                        <span className="w-2 h-2 rounded-full bg-[#60516f] flex-shrink-0" />
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
                <button className="h-9 px-3 sm:px-5 rounded-full bg-[#2c5270] text-white font-bold text-xs sm:text-sm flex items-center gap-1 hover:bg-[#1e3d54] transition-colors flex-shrink-0 whitespace-nowrap">
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
      </motion.div>

      {/* Copyright bar */}
      <div className="bg-[#0d0d0d] border-t border-white/[0.05] py-6 text-center">
        <p className="text-white/40 text-sm font-medium">
          Copyright © {new Date().getFullYear()} SocialSync Agency. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
