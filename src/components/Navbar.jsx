import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/portfolioData";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#education", label: "Formation" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100 bg-white/80 backdrop-blur-md dark:border-ink-800 dark:bg-ink-950/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="font-display text-lg font-bold text-ink-900 dark:text-white"
        >
          <span className="text-accent-500">&lt;</span>
          {profile.firstName}
          <span className="text-accent-500">/&gt;</span>
        </a>

        {/* Navigation desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-300 dark:hover:text-accent-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="rounded-full p-2 text-ink-600 transition-colors hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            className="rounded-full p-2 text-ink-600 transition-colors hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 md:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Navigation mobile */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-100 bg-white px-6 dark:border-ink-800 dark:bg-ink-950 md:hidden"
          >
            {links.map((link) => (
              <li key={link.href} className="border-b border-ink-50 dark:border-ink-900">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-body text-sm font-medium text-ink-700 dark:text-ink-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
