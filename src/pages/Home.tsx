import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure component has mounted
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [hash]);

  return (
    <main className="flex-1 w-full flex flex-col items-center">
      <div className="w-full">
        <Hero />
        <Services />
        <Work />
        <Stats />
        <Testimonials />
        <CTA />
      </div>
    </main>
  );
}
