import { Hero }        from "@/components/sections/Hero";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { Stats }       from "@/components/sections/Stats";
import { Services }    from "@/components/sections/Services";
import { Clients }     from "@/components/sections/Clients";
import { CTA }         from "@/components/sections/CTA";
import { useEffect }   from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [hash]);

  return (
    <main className="flex-1 w-full flex flex-col bg-[#fafafa] dark:bg-zinc-950 transition-colors">
      <Hero />
      <GlobalReach />
      <Stats />
      <Services />
      <Clients />
      <CTA />
    </main>
  );
}
