import { motion } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <main className="flex-1 w-full flex justify-center pt-28 pb-20 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] -z-10 rounded-full mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] -z-10 rounded-full mix-blend-screen"></div>
      
      <div className="container px-4 md:px-6 max-w-6xl relative z-10 w-full">
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-8"
        >
          <Link to="/" className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm font-medium transition-colors mb-4 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
            &larr; Back to home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 text-balance">
                Shoot us an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">email.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Have a question or want to discuss a custom campaign? Drop us a line and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email us</h3>
                  <p className="text-muted-foreground text-sm mt-1">Our friendly team is here to help.</p>
                  <a href="mailto:hello@socialsync.io" className="text-primary font-medium mt-2 inline-block hover:underline">hello@socialsync.io</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Visit our studio</h3>
                  <p className="text-muted-foreground text-sm mt-1">Come say hello at our HQ.</p>
                  <p className="text-foreground font-medium mt-2">100 Broadway, Suite 4B<br/>New York, NY 10005</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First name</label>
                  <input type="text" id="firstName" placeholder="Jane" className="w-full bg-background border border-border/50 focus:border-primary/50 text-foreground px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last name</label>
                  <input type="text" id="lastName" placeholder="Smith" className="w-full bg-background border border-border/50 focus:border-primary/50 text-foreground px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email address</label>
                <input type="email" id="email" placeholder="jane@company.com" className="w-full bg-background border border-border/50 focus:border-primary/50 text-foreground px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company (optional)</label>
                <input type="text" id="company" placeholder="Acme Inc." className="w-full bg-background border border-border/50 focus:border-primary/50 text-foreground px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your brand and goals..." className="w-full bg-background border border-border/50 focus:border-primary/50 text-foreground px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
              </div>

              <div className="pt-2">
                <Button size="lg" className="w-full h-14 rounded-xl text-base font-semibold group bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 border-0 shadow-xl shadow-pink-500/20 transition-all">
                  Send Message
                  <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
