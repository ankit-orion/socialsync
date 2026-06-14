const BRANDS = [
  "Khan Academy", "Shopify", "Gymshark", "Duolingo",
  "W3Schools", "Notion", "Linear", "Vercel",
];

export function GlobalReach() {
  return (
    <section className="bg-white/60 dark:bg-zinc-900/40 border-y border-zinc-100 dark:border-zinc-800/50 py-8 md:py-10 transition-colors duration-500 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <p className="text-center text-[10px] md:text-xs text-zinc-700 dark:text-zinc-500 uppercase tracking-widest mb-6 transition-colors font-semibold opacity-80">
          Trusted by 50+ brands worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-10 gap-y-3 md:gap-y-4">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-slate-400 dark:text-zinc-500 font-medium text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
