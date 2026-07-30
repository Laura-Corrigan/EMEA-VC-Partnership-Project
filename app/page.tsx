import { Hero } from "@/components/Hero";
import { EuropeMap } from "@/components/EuropeMap";
import { ExecSummary } from "@/components/ExecSummary";
import { SuccessMetrics } from "@/components/SuccessMetrics";
import { Timeline } from "@/components/Timeline";
import { FiveIdeas } from "@/components/FiveIdeas";
import { SideRail } from "@/components/SideRail";
import { MobileProgress } from "@/components/MobileProgress";

export default function Home() {
  return (
    <main className="relative">
      <MobileProgress />
      <SideRail />

      <Hero />
      <EuropeMap />
      <ExecSummary />
      <SuccessMetrics />
      <Timeline />
      <FiveIdeas />

      <div className="border-t border-line px-6 py-20 md:px-14">
        <p className="mx-auto max-w-2xl text-center font-display text-xl leading-relaxed text-paper md:text-2xl">
          Six years watching this market. Three years working inside it.{" "}
          <span className="italic text-accent">
            This is the plan for pointing all of it at Vanta.
          </span>
        </p>
      </div>

      <footer className="border-t border-line px-6 py-10 md:px-14">
        <div className="mx-auto flex max-w-4xl justify-center">
          <a
            href="#hero"
            className="font-mono text-[11px] uppercase tracking-wider text-mist-dim transition-colors hover:text-paper"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
