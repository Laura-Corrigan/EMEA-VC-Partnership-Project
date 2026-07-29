"use client";

import { motion } from "framer-motion";
import { ConstellationBackground } from "./ConstellationBackground";
import { flywheel } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" data-chapter="hero" className="relative overflow-hidden px-6 pt-40 pb-28 md:px-14 md:pt-48 md:pb-36">
      <div className="absolute inset-0">
        <ConstellationBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-slow" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
            EMEA Venture Partnerships · First 60 Days
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-4xl text-[2.6rem] leading-[1.05] font-medium text-balance text-paper md:text-7xl md:leading-[1.02]"
        >
          Building trusted venture partnerships that compound into{" "}
          <span className="italic text-accent">long-term customer growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-mist md:text-xl"
        >
          Three things below: a 60-day plan, the process behind it — trust before
          access, always — and five specific ways to start, grounded in the funds
          and accelerators already shaping this ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center gap-3 md:gap-4"
        >
          {flywheel.map((step, i) => (
            <div key={step} className="flex items-center gap-3 md:gap-4">
              <span className="rounded-full border border-line-strong bg-surface px-4 py-2 font-mono text-xs md:text-sm text-paper">
                {step}
              </span>
              {i < flywheel.length - 1 && (
                <span className="text-accent/70 select-none">→</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#plan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-mist-dim transition-colors hover:text-paper"
        >
          Scroll to begin <ArrowDown className="h-3.5 w-3.5" />
        </motion.a>
      </div>

      <p className="relative mx-auto mt-24 max-w-5xl border-t border-line pt-6 font-mono text-[11px] leading-relaxed text-mist-dim">
        Illustrative strategy created using publicly available information and my
        understanding of the role. Not an official Vanta document.
      </p>
    </section>
  );
}
