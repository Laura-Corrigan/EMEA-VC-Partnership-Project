"use client";

import { motion } from "framer-motion";
import { kpiTargets } from "@/lib/data";
import { SectionWrapper } from "./SectionWrapper";

export function SuccessMetrics() {
  return (
    <SectionWrapper
      id="metrics"
      index="03"
      eyebrow="How I'd measure this"
      title="Numbers I'd hold myself to."
      lede="A first draft — I'd adjust it once I know what's realistic against quota. What matters is committing to numbers, not just activity."
      wide
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {kpiTargets.map((kpi, i) => (
          <motion.div
            key={kpi.code}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col rounded-2xl border border-line bg-surface/40 p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-mist-dim">
              {kpi.milestone}
            </p>
            <p className="font-display mt-3 text-2xl text-paper md:text-3xl">
              {kpi.metric}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mist">{kpi.detail}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
