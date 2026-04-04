import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
        setIsOpen(false);
        return;
      }
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="fixed top-0 w-full z-50 bg-white border-b border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="flex gap-0.5">
            <div className="w-4 h-4 bg-[#0d0d0d] rounded-sm" />
            <div className="w-4 h-4 border-2 border-[#0d0d0d] rounded-sm" />
          </div>
          <span className="font-black text-[17px] text-[#0d0d0d] tracking-tight">SocialSync</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="flex items-center gap-1.5 text-sm font-medium text-[#0d0d0d]/60 hover:text-[#0d0d0d] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8f03c] flex-shrink-0" />
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="w-8 h-8 flex items-center justify-center text-[#0d0d0d]/50 hover:text-[#0d0d0d] transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <Link to="/book">
            <button className="h-9 px-5 rounded-full border-2 border-[#0d0d0d] text-[#0d0d0d] text-sm font-bold hover:bg-[#0d0d0d] hover:text-white transition-all duration-200">
              Get Started
            </button>
          </Link>
        </div>

        <button className="md:hidden p-2 text-[#0d0d0d]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/[0.06] overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={(e) => handleNav(e, link.href)}
                  className="flex items-center gap-2 text-base font-semibold text-[#0d0d0d]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8f03c]" />
                  {link.label}
                </a>
              ))}
              <Link to="/book" onClick={() => setIsOpen(false)}>
                <button className="w-full h-11 rounded-full bg-[#0d0d0d] text-white text-sm font-bold mt-2">Get Started</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
