import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-xl leading-none">S</span>
          </div>
          <span className="font-bold text-lg tracking-tight">SocialSync</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" onClick={handleScroll} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Services</a>
          <a href="#work" onClick={handleScroll} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Work</a>
          <a href="#about" onClick={handleScroll} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</a>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <a href="#cta" onClick={handleScroll}>
              <Button className="rounded-full px-6 transition-transform hover:scale-105 active:scale-95">Book a Call</Button>
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <button className="p-2 -mr-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md absolute w-full left-0 overflow-hidden"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <a href="#services" className="text-lg font-medium text-muted-foreground hover:text-foreground" onClick={handleScroll}>Services</a>
            <a href="#work" className="text-lg font-medium text-muted-foreground hover:text-foreground" onClick={handleScroll}>Work</a>
            <a href="#about" className="text-lg font-medium text-muted-foreground hover:text-foreground" onClick={handleScroll}>About</a>
            <a href="#cta" onClick={handleScroll}>
              <Button size="lg" className="w-full rounded-full mt-2">Book a Call</Button>
            </a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
}
