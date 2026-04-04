import { motion } from "framer-motion";

const clients = [
  { name: "TATA Power" }, { name: "Surya" }, { name: "Malabar Gold" },
  { name: "AmritCem" }, { name: "Stābilis" }, { name: "Mapsko" },
  { name: "Clifftop Group" }, { name: "Enernew" }, { name: "Daiwa" },
  { name: "Stryder" }, { name: "Videotex" }, { name: "The Grand" },
  { name: "TCG London" }, { name: "Moghal Caterers" }, { name: "National Retail Solutions" },
  { name: "IFFCO" }, { name: "Keha Casa" }, { name: "Le.Mirch" },
  { name: "Momo King" }, { name: "Tivoli" }, { name: "Jubilant Biosys" },
  { name: "aROQA" }, { name: "Tamarind Tribeca" }, { name: "Daiwik Hotels" },
];

export function Clients() {
  return (
    <section className="bg-[#e8e8e8] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#0d0d0d] tracking-tight mb-3">Our Precious Clients</h2>
          <p className="text-[#0d0d0d]/45 text-base font-medium">Below are some of our remarkable clients.</p>
        </motion.div>

        <div className="border border-[#0d0d0d]/[0.08] rounded-[24px] overflow-hidden bg-white">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-y divide-[#0d0d0d]/[0.06]">
            {clients.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.02 }}
                className="flex items-center justify-center py-6 px-4 hover:bg-[#f8f8f8] transition-colors">
                <span className="text-xs font-black text-[#0d0d0d]/40 text-center uppercase tracking-wider leading-snug">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
