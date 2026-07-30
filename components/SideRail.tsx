"use client";

import { useEffect, useRef, useState } from "react";

export const CHAPTERS = [
  { id: "hero", label: "Intro" },
  { id: "europe", label: "Network" },
  { id: "objective", label: "Objective" },
  { id: "metrics", label: "The numbers" },
  { id: "plan", label: "The plan" },
  { id: "ideas", label: "Five ideas" },
];

export function SideRail() {
  const [active, setActive] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = CHAPTERS.map((chapter) =>
      document.getElementById(chapter.id)
    ).filter((element): element is HTMLElement => Boolean(element));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              firstEntry.boundingClientRect.top -
              secondEntry.boundingClientRect.top
          );

        if (visibleEntries.length > 0) {
          setActive(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const activeIndex = CHAPTERS.findIndex(
    (chapter) => chapter.id === active
  );

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ol className="relative flex flex-col gap-0">
        <div
          className="absolute bottom-2 left-[5px] top-2 w-px bg-line"
          aria-hidden="true"
        />

        <div
          className="absolute left-[5px] top-2 w-px bg-accent transition-all duration-500 ease-out"
          style={{
            height:
              activeIndex <= 0
                ? "0%"
                : `${(activeIndex / (CHAPTERS.length - 1)) * 100}%`,
          }}
          aria-hidden="true"
        />

        {CHAPTERS.map((chapter, index) => {
          const isActive = chapter.id === active;
          const isPast = index < activeIndex;

          return (
            <li
              key={chapter.id}
              className="relative py-2.5 pl-5"
            >
              <a
                href={`#${chapter.id}`}
                className="group flex items-center gap-3"
                aria-current={isActive ? "page" : undefined}
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
                  className={`whitespace-nowrap font-mono text-[11px] uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 text-paper opacity-100"
                      : "-translate-x-1 text-mist-dim opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                  }`}
                >
                  {String(index).padStart(2, "0")} — {chapter.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
