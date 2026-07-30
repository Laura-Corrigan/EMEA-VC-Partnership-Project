"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { processStages } from "@/lib/data";
import { SectionWrapper } from "./SectionWrapper";
import { Check, X, Radar } from "lucide-react";

export function ProcessTool() {
  const [active, setActive] = useState(0);
  const stage = processStages[active];

  return (
    <SectionWrapper
      id="process"
      index="04"
      eyebrow="How this actually works"
      title="A process, not a playbook."
      lede="The specifics change fund to fund. What doesn't: trust before access, and access before Vanta ever comes up."
      wide
    >
      <div className="flex flex-col gap-10 md:flex-row md:gap-14">
        {/* Stage stepper */}
        <div className="relative flex shrink-0 gap-2 overflow-x-auto pb-2 md:w-64 md:flex-col md:gap-1 md:overflow-visible md:pb-0">
          <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-line md:block" />
          {processStages.map((s, i) => (
            <button
              key={s.code}
              onClick={() => setActive(i)}
              className={`group relative flex flex-1 shrink-0 items-center gap-3 rounded-lg border px-4 py-3.5 text-left transition-all md:flex-none ${
                i === active
                  ? "border-accent/50 bg-accent-soft"
                  : "border-line bg-surface/40 hover:border-line-strong"
              }`}
            >
              <span
                className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] ${
                  i === active
                    ? "border-accent bg-ink text-accent"
                    : "border-line-strong bg-ink text-mist-dim"
                }`}
              >
                {s.code}
              </span>
              <span
                className={`font-display text-sm leading-tight md:text-base ${
                  i === active ? "text-paper" : "text-mist"
                }`}
              >
                {s.name}
              </span>
            </button>
          ))}
        </div>

        {/* Stage detail */}
        <div className="min-w-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.code}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="rounded-2xl border border-line bg-surface/40 p-6 md:p-7">
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-mint" />
                  <p className="font-mono text-[10px] uppercase tracking-wider text-mist-dim">
                    What I do
                  </p>
                </div>
                <p className="mt-2.5 text-base leading-relaxed text-paper md:text-lg">
                  {stage.behavior}
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-surface/20 p-6 md:p-7">
                <div className="flex items-center gap-2.5">
                  <X className="h-4 w-4 text-mist-dim" />
                  <p className="font-mono text-[10px] uppercase tracking-wider text-mist-dim">
                    What I deliberately don&apos;t do
                  </p>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-mist md:text-base">
                  {stage.avoid}
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent-soft px-6 py-5">
                <Radar className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                    How I know it&apos;s working
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-paper md:text-base">
                    {stage.signal}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
