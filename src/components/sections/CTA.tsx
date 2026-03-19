import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/40 via-primary/40 to-transparent z-0 opacity-80" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] z-10"></div>
      </div>
      
      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-4xl"
        >
          Ready to scale your brand?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl px-2"
        >
          Join 50+ modern brands who trust us to handle their social presence and drive measurable top-line revenue.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link to="/book" className="w-full sm:w-auto">
            <Button size="lg" className="h-14 w-full px-8 text-base rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium group">
              Book your free discovery call
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="h-14 w-full px-8 text-base rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent text-primary-foreground transition-all">
              Shoot us an email
            </Button>
          </Link>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-sm opacity-60"
        >
          No commitment. Just a 30-minute chat to see if we're a fit.
        </motion.p>
      </div>
    </section>
  );
}
