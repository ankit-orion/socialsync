import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-100 dark:border-zinc-800/50 bg-transparent transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-zinc-500">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex gap-[3px]">
            <div className="w-3 h-3 rounded-[3px] bg-zinc-900 dark:bg-white" />
            <div className="w-3 h-3 rounded-[3px] bg-zinc-400 dark:bg-zinc-500" />
          </div>
          <span className="font-semibold text-zinc-900 dark:text-white text-[13px]">SocialSync</span>
        </Link>

        <span className="text-center sm:text-right">
          Social media strategy · Built for growth
        </span>
      </div>
    </footer>
  );
}
