"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="text-xl font-bold tracking-tight text-slate-100 transition-colors hover:text-accent-bright"
        >
          Farhan<span className="text-accent">.</span>
        </a>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
              >
                {link.label}
                {/* Accent underline on hover */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-accent to-accent-neon transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
