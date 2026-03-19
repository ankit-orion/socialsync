import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Work } from "@/components/sections/Work";
import { CTA } from "@/components/sections/CTA";
import { ThemeProvider } from "@/components/theme-provider";

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]" 
        style={{ scaleX }} 
      />
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 scroll-smooth">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Services />
          <Work />
          <Stats />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
