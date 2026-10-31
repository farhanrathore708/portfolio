"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/**
 * Behance, Instagram and LinkedIn brand marks.
 * Lucide has removed brand icons from the set, so these are inline SVGs
 * drawn in Lucide's 24x24 rhythm to blend in with the rest of the UI.
 */
function BehanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M8.84 10.83c.75-.38 1.28-1.1 1.28-2.1 0-2.19-1.62-2.73-3.55-2.73H1.5v11.94h5.22c2.14 0 4.15-1 4.15-3.42 0-1.46-.7-2.51-2.03-3.69ZM4.08 8.07h2.3c.92 0 1.62.28 1.62 1.24 0 .9-.63 1.28-1.5 1.28h-2.4V8.07Zm2.52 7.8H4.08v-3h2.58c1.05 0 1.72.47 1.72 1.55 0 1.1-.83 1.45-1.78 1.45Zm12.34-8.02h-5.66v1.53h5.66V7.85ZM17.5 8.8c-3 0-4.9 2.08-4.9 5 0 3.04 1.85 5 4.9 5 2.28 0 3.93-1.16 4.53-3.4h-2.3c-.2.75-1 1.3-2.1 1.3-1.58 0-2.28-.93-2.28-2.4h6.76c.17-3.14-1.53-5.5-4.61-5.5Zm-2.1 4.1c.02-1.13.87-2 2.03-2 1.23 0 1.87.75 2 2h-4.03Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { label: "Behance", href: "https://behance.net", Icon: BehanceIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
];

export default function Footer({ year }: { year: number }) {
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
            href="mailto:hello@farhan.design"
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent-bright hover:shadow-[0_0_25px_-5px_rgba(129,140,248,0.5)] focus-visible:outline-2 focus-visible:outline-accent-bright"
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
            © {year} Farhan. All rights reserved.
          </p>
          <p>
            Designed &amp; built with <span className="text-accent-bright">Farhan.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
