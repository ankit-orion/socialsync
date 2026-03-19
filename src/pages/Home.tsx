import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Work } from "@/components/sections/Work";
import { CTA } from "@/components/sections/CTA";

export function Home() {
  return (
    <main className="flex-1 w-full flex flex-col items-center">
      <div className="w-full">
        <Hero />
        <Services />
        <Work />
        <Stats />
        <CTA />
      </div>
    </main>
  );
}
