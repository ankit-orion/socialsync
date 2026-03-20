import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border/20 py-8 bg-background/95">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 lg:px-8 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-base tracking-tight text-foreground">SocialSync</span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="mailto:hello@socialsync.io" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        <div className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} SocialSync Agency. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
