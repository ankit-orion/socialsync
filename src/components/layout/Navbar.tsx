import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

const NAV_LINKS = [
  { label: "Services",     href: "#services"     },
  { label: "How we work",  href: "#process"      },
  { label: "Results",      href: "#results"      },
  { label: "Work",         href: "/work"         },
  { label: "Careers",      href: "/careers"      },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleHashNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
        <nav
          className={[
            "w-full max-w-5xl h-14",
            "flex items-center justify-between px-3 sm:px-5",
            "rounded-2xl border transition-all duration-300",
            scrolled
              ? "bg-white/95 dark:bg-zinc-950/95 border-zinc-200 dark:border-zinc-700/70 shadow-xl shadow-zinc-900/10 backdrop-blur-2xl"
              : "bg-white/75 dark:bg-zinc-950/75 border-zinc-900/[0.07] dark:border-white/[0.07] shadow-sm backdrop-blur-xl",
          ].join(" ")}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex gap-[3px]">
              <div className="w-3.5 h-3.5 rounded-[4px] bg-zinc-900 dark:bg-white" />
              <div className="w-3.5 h-3.5 rounded-[4px] bg-zinc-400 dark:bg-zinc-500" />
            </div>
            <span className="font-semibold text-[15px] text-zinc-900 dark:text-white tracking-tight">
              SocialSync
            </span>
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) =>
              href.startsWith("#") ? (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleHashNav(e, href)}
                  className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 px-3.5 py-1.5 rounded-lg hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-all duration-150"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={href}
                  className={`text-[13px] font-medium px-3.5 py-1.5 rounded-lg transition-all duration-150 ${
                    location.pathname === href
                      ? "text-zinc-900 dark:text-white bg-zinc-100/70 dark:bg-zinc-800/60"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60"
                  }`}
                >
                  {label}
                </Link>
              )
            )}
          </div>

          {/* Right */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ModeToggle />
            <span className="hidden sm:block w-px h-4 bg-zinc-200 dark:bg-zinc-700 mx-1" />
            <Link
              to="/book"
              className="hidden sm:inline-flex items-center gap-1.5 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-[13px] font-semibold px-4 py-[7px] rounded-xl transition-colors duration-150 select-none"
            >
              Book a Call
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/60 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/70 dark:hover:bg-zinc-700/60 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5h12M2 8h12M2 11h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 dark:bg-zinc-950/98 backdrop-blur-2xl flex flex-col px-6 pt-24 pb-10">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) =>
              href.startsWith("#") ? (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleHashNav(e, href)}
                  className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 py-3 border-b border-zinc-100 dark:border-zinc-800"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 py-3 border-b border-zinc-100 dark:border-zinc-800"
                >
                  {label}
                </Link>
              )
            )}
          </div>
          <div className="mt-8">
            <Link
              to="/book"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-base py-4 rounded-2xl shadow-lg shadow-zinc-900/10 transition-colors"
            >
              Book a Call →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
