import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  // Track scroll direction to auto-hide/show
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > prev && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`
            flex items-center justify-between w-full max-w-4xl
            h-14 px-2.5 rounded-full
            border transition-all duration-500
            ${scrolled
              ? "bg-white/80 dark:bg-[#1d2030]/80 backdrop-blur-xl border-[#0d0d0d]/[0.06] dark:border-white/[0.06] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]"
              : "bg-white/60 dark:bg-[#1d2030]/60 backdrop-blur-lg border-[#0d0d0d]/[0.04] dark:border-white/[0.04] shadow-sm"
            }
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 pl-3 flex-shrink-0">
            <div className="flex gap-[3px]">
              <div className="w-3.5 h-3.5 bg-[#0d0d0d] rounded-[4px]" />
              <div className="w-3.5 h-3.5 bg-[#2c5270] rounded-[4px]" />
            </div>
            <span className="font-black text-[15px] text-[#0d0d0d] tracking-tight">
              SocialSync
            </span>
          </Link>

          {/* Center nav links — desktop */}
          <div className="hidden md:flex items-center gap-1 bg-[#0d0d0d]/[0.03] rounded-full px-1.5 py-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? location.pathname === "/"
                  : link.href.startsWith("#")
                    ? false
                    : location.pathname === link.href;

              return link.href.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="px-4 py-1.5 rounded-full text-[13px] font-bold text-[#0d0d0d]/70 hover:text-[#0d0d0d] hover:bg-white/70 transition-all duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#0d0d0d] shadow-sm"
                      : "text-[#0d0d0d]/70 hover:text-[#0d0d0d] hover:bg-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side — CTA + theme toggle + mobile toggle */}
          <div className="flex items-center gap-2 pr-1">
            <Link to="/book" className="hidden md:block">
              <button className="h-9 px-5 rounded-full bg-[#0d0d0d] dark:bg-[#2c5270] text-white text-[12px] font-bold flex items-center gap-1.5 hover:bg-[#222] dark:hover:bg-[#1e3d54] transition-colors">
                Get Started
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <ModeToggle />

            <button
              className="md:hidden w-9 h-9 rounded-full bg-[#0d0d0d]/[0.05] dark:bg-white/[0.06] flex items-center justify-center text-[#0d0d0d] dark:text-[#e2e4eb] hover:bg-[#0d0d0d]/[0.1] dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#e8e8e8]/95 dark:bg-[#12141a]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-2 w-full max-w-xs"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="w-full"
                >
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="flex items-center justify-center w-full py-4 rounded-2xl text-lg font-black text-[#0d0d0d] hover:bg-white/50 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center w-full py-4 rounded-2xl text-lg font-black text-[#0d0d0d] hover:bg-white/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + navLinks.length * 0.06 }}
                className="w-full pt-4"
              >
                <Link to="/book" onClick={() => setIsOpen(false)}>
                  <button className="w-full h-14 rounded-2xl bg-[#0d0d0d] text-white text-base font-bold flex items-center justify-center gap-2 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.3)]">
                    Get Started <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
