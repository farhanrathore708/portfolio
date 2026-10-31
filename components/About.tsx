"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skills = [
  "Brand Identity",
  "Logo Design",
  "UI/UX Design",
  "Digital Illustration",
  "Typography",
  "Packaging Design",
  "Motion Graphics",
  "Social Media Design",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Profile picture placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative"
        >
          {/* Accent glow frame */}
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-neon/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-800">
            <Image
              src="https://picsum.photos/seed/farhan-portrait/900/900"
              alt="Portrait of Farhan"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Bio + skills */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-accent-bright uppercase">
              About
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
              Design with intent.{" "}
              <span className="bg-gradient-to-r from-accent-bright to-accent-neon bg-clip-text text-transparent">
                Stories with soul.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15 }}
            className="mt-6 space-y-4 text-base leading-relaxed text-slate-400"
          >
            <p>
              I&apos;m Farhan — a multidisciplinary graphic designer who turns
              complex ideas into clean, memorable visuals. Whether it&apos;s a
              full brand identity, a digital product interface, or a piece of
              digital art, I obsess over the details that make design feel
              effortless.
            </p>
            <p>
              This is placeholder bio copy — swap it out for the real story on
              how Farhan works, who he&apos;s worked with, and what drives the
              process.
            </p>
          </motion.div>

          {/* Skill badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_25px_-5px_rgba(129,140,248,0.5)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-neon" />
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
