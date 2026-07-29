"use client";

import { useEffect, useRef, useState } from "react";

export const CHAPTERS = [
  { id: "hero", label: "Intro" },
  { id: "plan", label: "60-day plan" },
  { id: "process", label: "The process" },
  { id: "ideas", label: "Five ideas" },
];

export function SideRail() {
  const [active, setActive] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => !!el
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const activeIndex = CHAPTERS.findIndex((c) => c.id === active);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ol className="relative flex flex-col gap-0">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
        <div
          className="absolute left-[5px] top-2 w-px bg-accent transition-all duration-500 ease-out"
          style={{
            height:
              activeIndex <= 0
                ? "0px"
                : `${(activeIndex / (CHAPTERS.length - 1)) * 100}%`,
          }}
          aria-hidden="true"
        />
        {CHAPTERS.map((c, i) => {
          const isActive = c.id === active;
          const isPast = i < activeIndex;
          return (
            <li key={c.id} className="relative py-2.5 pl-5">
              <a
                href={`#${c.id}`}
                className="group flex items-center gap-3"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`relative z-10 block h-[11px] w-[11px] shrink-0 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-accent bg-accent shadow-[0_0_0_4px_var(--accent-soft)]"
                      : isPast
                      ? "border-accent bg-accent/40"
                      : "border-line-strong bg-ink"
                  }`}
                />
                <span
                  className={`font-mono text-[11px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "text-paper opacity-100 translate-x-0"
                      : "text-mist-dim opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0"
                  }`}
                >
                  {String(i).padStart(2, "0")} — {c.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
