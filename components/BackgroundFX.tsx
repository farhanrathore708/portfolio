"use client";

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Electric blue blob — top left */}
      <motion.div
        className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-indigo-600/25 blur-3xl"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 40, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Neon purple blob — right side */}
      <motion.div
        className="absolute top-1/4 -right-40 h-[30rem] w-[30rem] rounded-full bg-purple-600/20 blur-3xl"
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Deep violet blob — behind the work section */}
      <motion.div
        className="absolute top-[120%] left-1/3 h-[36rem] w-[36rem] rounded-full bg-indigo-500/15 blur-3xl"
        animate={{
          x: [0, -70, 30, 0],
          y: [0, -50, 60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Fine grid texture for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}
