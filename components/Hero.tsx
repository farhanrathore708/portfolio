"use client";

import { motion } from "framer-motion";
import { socials } from "@/components/SocialLinks";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-20 text-center sm:px-6 sm:pt-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex max-w-3xl flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="mb-6 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1.5 text-xs font-medium tracking-widest text-slate-400 uppercase backdrop-blur-sm"
        >
          Graphic Designer · Portfolio
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Crafting Visual Stories.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-xl"
        >
          Hi, I&apos;m Farhan Rathore. A Graphic Designer specializing in{" "}
          <span className="text-accent-bright">Thumbnails</span>,{" "}
          <span className="text-accent-bright">Social Media Posts</span> and{" "}
          <span className="text-accent-bright">Posters &amp; Banners</span> that
          help brands stand out.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row sm:gap-4"
        >
          <a
            href="#work"
            className="group inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-neon px-8 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_40px_-5px_rgba(129,140,248,0.6)] focus-visible:outline-2 focus-visible:outline-accent-bright"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-slate-700 px-8 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:border-accent-bright hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-accent-bright"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeUp} className="mt-12 flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-accent/60 hover:text-accent-bright hover:shadow-[0_0_25px_-5px_rgba(129,140,248,0.5)] focus-visible:outline-2 focus-visible:outline-accent-bright"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10"
      >
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
}
