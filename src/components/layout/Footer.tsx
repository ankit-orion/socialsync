import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-background/95 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-lg tracking-tight">SocialSync</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Elevating brands digitally through data-driven content and viral strategies.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Social Management</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Content Creation</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Paid Advertising</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Influencer Marketing</a></li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container mx-auto px-4 mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground"
      >
        © {new Date().getFullYear()} SocialSync Agency. All rights reserved.
      </motion.div>
    </footer>
  );
}
