"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionWrapper({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
  wide = false,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      data-chapter={id}
      className="relative border-t border-line px-6 py-24 md:px-14 md:py-32 scroll-mt-10"
    >
      <div className={`mx-auto ${wide ? "max-w-6xl" : "max-w-4xl"}`}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex items-start gap-5 md:gap-8"
        >
          <span className="font-mono text-sm text-accent pt-2 shrink-0">{index}</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-mist-dim mb-4">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.08] text-balance text-paper">
              {title}
            </h2>
            {lede && (
              <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-mist">
                {lede}
              </p>
            )}
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
