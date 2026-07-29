"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { SectionWrapper } from "./SectionWrapper";
import { Plus } from "lucide-react";

export function Timeline() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(0);
  const phase = timeline[phaseIndex];

  return (
    <SectionWrapper
      id="plan"
      index="01"
      eyebrow="The first 60 days"
      title="Understand first. Build second."
      lede="Nothing in the second phase gets shipped until the first phase is genuinely understood — the target list and first proof point in Days 31–60 depend on it. The order carries the strategy."
      wide
    >
      <div className="flex flex-col gap-10 md:flex-row md:gap-14">
        {/* Phase selector */}
        <div className="flex shrink-0 gap-2 md:w-56 md:flex-col md:gap-1">
          {timeline.map((p, i) => (
            <button
              key={p.code}
              onClick={() => {
                setPhaseIndex(i);
                setOpenItem(0);
              }}
              className={`group flex flex-1 items-center gap-3 rounded-lg border px-4 py-3.5 text-left transition-all md:flex-none ${
                i === phaseIndex
                  ? "border-accent/50 bg-accent-soft"
                  : "border-line bg-surface/40 hover:border-line-strong"
              }`}
            >
              <span
                className={`font-mono text-xs ${
                  i === phaseIndex ? "text-accent" : "text-mist-dim"
                }`}
              >
                {p.code}
              </span>
              <span className="flex flex-col">
                <span
                  className={`font-display text-base leading-tight ${
                    i === phaseIndex ? "text-paper" : "text-mist"
                  }`}
                >
                  {p.verb}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-mist-dim">
                  {p.range}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Phase content */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={phase.code}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-mist md:text-base">
                {phase.summary}
              </p>
              <div className="divide-y divide-line rounded-xl border border-line bg-surface/40">
                {phase.items.map((item, i) => {
                  const isOpen = openItem === i;
                  return (
                    <div key={item.title}>
                      <button
                        onClick={() => setOpenItem(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-base text-paper md:text-lg">
                          {item.title}
                        </span>
                        <Plus
                          className={`h-4 w-4 shrink-0 text-accent transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm leading-relaxed text-mist md:text-base">
                              {item.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
