"use client";

import { motion } from "framer-motion";
import { targetedIdeas, bonusIdea, type TargetedIdea } from "@/lib/data";
import { SectionWrapper } from "./SectionWrapper";

export function FiveIdeas() {
  const featured = targetedIdeas.find((i) => i.featured)!;
  const rest = targetedIdeas.filter((i) => !i.featured);

  return (
    <SectionWrapper
      id="ideas"
      index="04"
      eyebrow="Five ways in, not fifty"
      title="Targeted, not broad."
      lede="VCs trust their network — for intros, for diligence, for everything. Having one is one thing; being one is another. First 30 days: find which channel actually creates pipeline — a dinner, an event, a free compliance session — then test it, then scale it."
      wide
    >
      <div className="flex flex-col gap-5">
        <IdeaCard idea={featured} large />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {rest.map((idea, i) => (
            <IdeaCard key={idea.code} idea={idea} delay={i * 0.08} />
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-mist-dim">
            One more, budget allowing
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <IdeaCard idea={bonusIdea} conditional />
      </div>
    </SectionWrapper>
  );
}

function IdeaCard({
  idea,
  large = false,
  conditional = false,
  delay = 0,
}: {
  idea: TargetedIdea;
  large?: boolean;
  conditional?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border p-6 transition-colors md:p-7 ${
        large
          ? "border-accent/40 bg-accent-soft"
          : conditional
          ? "border-dashed border-amber/40 bg-surface/30"
          : "border-line bg-surface/40 hover:border-line-strong"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`font-mono text-xs ${
            large ? "text-accent" : conditional ? "text-amber" : "text-mist-dim"
          }`}
        >
          {idea.code}
        </span>
        {large && (
          <span className="rounded-full border border-accent/50 bg-ink/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
            Foundational
          </span>
        )}
        {conditional && (
          <span className="rounded-full border border-amber/50 bg-ink/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-amber">
            Budget dependent
          </span>
        )}
      </div>

      <h3 className={`font-display mt-3 leading-tight text-paper ${large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
        {idea.name}
      </h3>

      <p className={`mt-3 leading-relaxed text-mist ${large ? "max-w-2xl text-base md:text-lg" : "text-sm md:text-base"}`}>
        {idea.pitch}
      </p>

      <div className="mt-6">
        <Field label="Targeted at" value={idea.target} />
      </div>
    </motion.div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-mist-dim">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-paper">{value}</p>
    </div>
  );
}
