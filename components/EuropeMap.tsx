"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { europeRegions, europeanNetwork, type EuropeRegion } from "@/lib/data";
import { SectionWrapper } from "./SectionWrapper";

export function EuropeMap() {
  const [activeId, setActiveId] = useState<string>(europeRegions[0].id);
  const active: EuropeRegion = europeRegions.find((r) => r.id === activeId) ?? europeRegions[0];

  return (
    <SectionWrapper
      id="europe"
      index="—"
      eyebrow="Appendix"
      title="The wider map"
      lede="Not every event earns a slot — only the ones where the funds on the target list are actually in the room."
      wide
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="relative aspect-[3/4] w-full rounded-2xl border border-line bg-surface/40 p-4">
            <svg viewBox="0 0 400 340" className="h-full w-full" aria-hidden="true">
              <defs>
                <radialGradient id="euroMapGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#ac55ff" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="#ac55ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="400" height="340" fill="url(#euroMapGlow)" />
              {europeRegions.map((r, i) =>
                europeRegions.slice(i + 1).map((r2) => (
                  <line
                    key={`${r.id}-${r2.id}`}
                    x1={r.cx}
                    y1={r.cy}
                    x2={r2.cx}
                    y2={r2.cy}
                    stroke="rgba(248,244,243,0.06)"
                    strokeWidth="1"
                  />
                ))
              )}
              {europeRegions.map((r) => {
                const isActive = r.id === activeId;
                return (
                  <g
                    key={r.id}
                    onMouseEnter={() => setActiveId(r.id)}
                    onClick={() => setActiveId(r.id)}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveId(r.id)}
                  >
                    {isActive && (
                      <circle cx={r.cx} cy={r.cy} r="20" fill="#ac55ff" opacity="0.14">
                        <animate attributeName="r" values="16;24;16" dur="2.6s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      cx={r.cx}
                      cy={r.cy}
                      r={isActive ? 8 : 6}
                      fill={isActive ? "#ac55ff" : "#1c1030"}
                      stroke={isActive ? "#ac55ff" : "rgba(248,244,243,0.3)"}
                      strokeWidth="1.5"
                      className="transition-all duration-300"
                    />
                    <text
                      x={r.cx}
                      y={r.cy - 14}
                      textAnchor="middle"
                      fill={isActive ? "#f8f4f3" : "#a89cb8"}
                      fontSize="11"
                      fontFamily="var(--font-mono)"
                      className="select-none"
                    >
                      {r.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="mt-3 font-mono text-[11px] text-mist-dim">
            Hover or tap a region.
          </p>
        </div>

        <div className="md:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-line bg-surface/40 p-6 md:p-8"
            >
              <h3 className="font-display text-2xl text-paper md:text-3xl">{active.name}</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <RegionList label="Accelerators" items={active.accelerators} />
                <RegionList label="VCs" items={active.vcs} />
                <RegionList label="Events" items={active.events} />
              </div>
              {active.note && (
                <div className="mt-6 rounded-xl border border-accent/30 bg-accent-soft px-4 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                    Already there
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-paper md:text-base">
                    {active.note}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-accent/30 bg-accent-soft px-5 py-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
          Across all of it
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-paper md:text-base">
          {europeanNetwork}
        </p>
      </div>
    </SectionWrapper>
  );
}

function RegionList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-mist-dim">{label}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-paper">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
