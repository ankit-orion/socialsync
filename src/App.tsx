import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { motion, useScroll, useSpring } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { BookCall } from "@/pages/BookCall";
import { Contact } from "@/pages/Contact";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]" 
          style={{ scaleX }} 
        />
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 scroll-smooth">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookCall />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
