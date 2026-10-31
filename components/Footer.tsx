"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { socials } from "@/components/SocialLinks";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Footer() {
  // Compute the year after mount — reading `new Date()` at prerender time
  // is rejected by Next.js cacheComponents, so we keep it client-only.
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="relative border-t border-slate-900">
      {/* CTA */}
      <div className="mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
            Have a project in mind?{" "}
            <span className="bg-gradient-to-r from-accent-bright to-accent-neon bg-clip-text text-transparent">
              Let&apos;s work together.
            </span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-6 max-w-lg text-lg text-slate-400"
        >
          Brands, products, or experiments — if it lives on a canvas, I&apos;d
          love to hear about it.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10"
        >
          <a
            href="mailto:farhanrathore707@gmail.com"
            className="group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-to-r from-accent to-accent-neon px-10 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_50px_-8px_rgba(129,140,248,0.7)] focus-visible:outline-2 focus-visible:outline-accent-bright"
          >
            <Mail size={18} className="transition-transform duration-300 group-hover:-rotate-12" />
            Say Hello
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent-bright hover:shadow-[0_0_25px_-5px_rgba(129,140,248,0.5)] focus-visible:outline-2 focus-visible:outline-accent-bright"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year ?? ""} Farhan. All rights reserved.
          </p>
          <p>
            Designed &amp; built with <span className="text-accent-bright">Farhan.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
