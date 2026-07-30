"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  europeRegions,
  europeanNetworks,
  type EuropeRegion,
} from "@/lib/data";
import { SectionWrapper } from "./SectionWrapper";

export function EuropeMap() {
  const [activeId, setActiveId] = useState<string>(europeRegions[0].id);

  const active: EuropeRegion =
    europeRegions.find((region) => region.id === activeId) ??
    europeRegions[0];

  return (
    <SectionWrapper
      id="europe"
      index="01"
      eyebrow="European VC network"
      title="A network I can activate from day one"
      lede="Six years working across the European venture ecosystem has given me direct relationships with fund managers, platform teams, accelerators and investor communities across the region. This map shows examples of where I already have a route in, not a cold target list."
      wide
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="relative min-h-[520px] w-full rounded-2xl border border-line bg-surface/40 p-4 md:min-h-[650px]">
            <svg
              viewBox="0 0 400 340"
              className="h-full min-h-[480px] w-full md:min-h-[610px]"
              aria-label="Interactive map of Laura Corrigan's European venture capital network"
              role="img"
            >
              <defs>
                <radialGradient
                  id="euroMapGlow"
                  cx="50%"
                  cy="50%"
                  r="60%"
                >
                  <stop
                    offset="0%"
                    stopColor="#ac55ff"
                    stopOpacity="0.10"
                  />
                  <stop
                    offset="100%"
                    stopColor="#ac55ff"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>

              <rect
                x="0"
                y="0"
                width="400"
                height="340"
                fill="url(#euroMapGlow)"
              />

              {europeRegions.map((region, index) =>
                europeRegions.slice(index + 1).map((secondRegion) => (
                  <line
                    key={`${region.id}-${secondRegion.id}`}
                    x1={region.cx}
                    y1={region.cy}
                    x2={secondRegion.cx}
                    y2={secondRegion.cy}
                    stroke="rgba(248,244,243,0.06)"
                    strokeWidth="1"
                  />
                ))
              )}

              {europeRegions.map((region) => {
                const isActive = region.id === activeId;

                return (
                  <g
                    key={region.id}
                    onMouseEnter={() => setActiveId(region.id)}
                    onClick={() => setActiveId(region.id)}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`View network details for ${region.name}`}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveId(region.id);
                      }
                    }}
                  >
                    {isActive && (
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r="20"
                        fill="#ac55ff"
                        opacity="0.14"
                      >
                        <animate
                          attributeName="r"
                          values="16;24;16"
                          dur="2.6s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    <circle
                      cx={region.cx}
                      cy={region.cy}
                      r={isActive ? 8 : 6}
                      fill={isActive ? "#ac55ff" : "#1c1030"}
                      stroke={
                        isActive
                          ? "#ac55ff"
                          : "rgba(248,244,243,0.3)"
                      }
                      strokeWidth="1.5"
                      className="transition-all duration-300"
                    />

                    <text
                      x={region.cx}
                      y={region.cy - 14}
                      textAnchor="middle"
                      fill={isActive ? "#f8f4f3" : "#a89cb8"}
                      fontSize="11"
                      fontFamily="var(--font-mono)"
                      className="select-none"
                    >
                      {region.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <p className="mt-3 font-mono text-[11px] text-mist-dim">
            Hover or tap a region to explore the network.
          </p>
        </div>

        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-line bg-surface/40 p-6 md:p-8"
            >
              <h3 className="font-display text-2xl text-paper md:text-3xl">
                {active.name}
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-6">
                <RegionList
                  label="Accelerators"
                  items={active.accelerators}
                />

                <RegionList label="VCs" items={active.vcs} />

                <RegionList label="Events" items={active.events} />
              </div>

              {active.note && (
                <div className="mt-6 rounded-xl border border-accent/30 bg-accent-soft px-4 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                    Existing relationship
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

      <div className="mt-8 rounded-xl border border-accent/30 bg-accent-soft px-5 py-5">
        <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
          Pan-European relationships
        </p>

        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
          {europeanNetworks.map((network) => (
            <div key={network.name}>
              <p className="font-display text-base text-paper">
                {network.name}
              </p>

              <p className="mt-1 text-sm leading-relaxed text-mist">
                {network.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function RegionList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-mist-dim">
        {label}
      </p>

      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-paper">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
