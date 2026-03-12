import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, suffix = "", duration = 2 }: { from: number; to: number; suffix?: string; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * (to - from) + from);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(step);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-muted/30 border-y border-border/20">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
         <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Numbers that speak louder than words.
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              We've helped modern brands scale their presence and revenue by focusing on what actually moves the needle in today's attention economy.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2 p-4 md:p-0"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter w-full overflow-hidden text-ellipsis whitespace-nowrap">
                <Counter from={0} to={250} suffix="M+" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Impressions Generated</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2 p-4 md:p-0"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 w-full overflow-hidden text-ellipsis whitespace-nowrap">
                <Counter from={0} to={50} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Brands Scaled</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-2 p-4 md:p-0"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-l from-emerald-500 to-green-400 w-full overflow-hidden text-ellipsis whitespace-nowrap">
                <Counter from={0} to={12} suffix="x" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Avg. ROI on Ads</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-2 p-4 md:p-0"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter w-full overflow-hidden text-ellipsis whitespace-nowrap">
                <Counter from={0} to={98} suffix="%" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Client Retention</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
