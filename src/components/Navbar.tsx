"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/travel", label: "Travel" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight gradient-text hover:opacity-80 transition-opacity"
        >
          DB.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] rounded-xl hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          {/* Resume Download */}
          <a
            href="/Dhyey Bhansali Resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors text-[var(--muted)] hover:text-[var(--foreground)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[var(--card-border)]"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] rounded-xl hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Resume Download */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
              >
                <a
                  href="/Dhyey Bhansali Resume.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-indigo-500 rounded-xl hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-all"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
