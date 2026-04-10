import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { motion, useScroll, useSpring } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { BookCall } from "@/pages/BookCall";
import { WorkPage } from "@/pages/WorkPage";
import { Contact } from "@/pages/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

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
        <ScrollToTop />
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-[#2c5270] origin-left z-[100]" 
          style={{ scaleX }} 
        />
        <div className="min-h-screen flex flex-col font-sans selection:bg-[#2c5270]/30">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookCall />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
