import { motion } from "framer-motion";

const clients = [
  { name: "TATA Power", tagline: "" },
  { name: "Surya", tagline: "" },
  { name: "Malabar Gold", tagline: "Celebrate the Beauty of Life" },
  { name: "AmritCem", tagline: "Cementing Performance" },
  { name: "Stābilis", tagline: "" },
  { name: "Mapsko", tagline: "Inspiring Development" },
  { name: "Clifftop Group", tagline: "" },
  { name: "Enernew", tagline: "New energy for a better tomorrow" },
  { name: "Daiwa", tagline: "" },
  { name: "Stryder", tagline: "A TATA Product" },
  { name: "Videotex", tagline: "India's Most Trusted ODM/OEM" },
  { name: "The Grand", tagline: "New Delhi" },
  { name: "TCG London", tagline: "" },
  { name: "Moghal Caterers", tagline: "Serving Excellence Since 1983" },
  { name: "National Retail Solutions", tagline: "" },
  { name: "IFFCO", tagline: "Urban Gardens" },
  { name: "Keha Casa", tagline: "" },
  { name: "Le.Mirch", tagline: "Modern Indian" },
  { name: "Momo King", tagline: "" },
  { name: "Tivoli", tagline: "Hospitality Group" },
  { name: "Jubilant Biosys", tagline: "" },
  { name: "aROQA", tagline: "" },
  { name: "Tamarind Tribeca", tagline: "" },
  { name: "Daiwik Hotels", tagline: "" },
];

export function Clients() {
  return (
    <section className="py-24 bg-background border-y border-border/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Our Precious Clients
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Our integrated result leads to the efficiency & transparency of our work.
            <br />
            Below are some of our remarkable clients.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-l border-t border-border/40 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="border-r border-b border-border/40 flex flex-col items-center justify-center p-6 min-h-[120px] group hover:bg-secondary/10 transition-colors duration-300"
            >
              <span className="text-sm font-bold text-foreground/60 group-hover:text-foreground/90 text-center leading-tight tracking-wide uppercase transition-colors duration-300">
                {client.name}
              </span>
              {client.tagline && (
                <span className="text-[9px] text-muted-foreground/50 group-hover:text-muted-foreground text-center mt-1 leading-tight transition-colors duration-300">
                  {client.tagline}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
