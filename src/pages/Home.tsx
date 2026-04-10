import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Work } from "@/components/sections/Work";

import { Clients } from "@/components/sections/Clients";
import { CTA } from "@/components/sections/CTA";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [hash]);

  return (
    <main className="flex-1 w-full flex flex-col bg-[#e8e8e8]">
      <Hero />
      <Services />
      <Work />
      <Clients />
      <GlobalReach />
      <Stats />

      <CTA />
    </main>
  );
}
