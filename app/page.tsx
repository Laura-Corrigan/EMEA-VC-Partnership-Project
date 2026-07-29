import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { ProcessTool } from "@/components/ProcessTool";
import { FiveIdeas } from "@/components/FiveIdeas";
import { SideRail } from "@/components/SideRail";
import { MobileProgress } from "@/components/MobileProgress";

export default function Home() {
  return (
    <main className="relative">
      <MobileProgress />
      <SideRail />
      <Hero />
      <Timeline />
      <ProcessTool />
      <FiveIdeas />
      <footer className="border-t border-line px-6 py-10 md:px-14">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] leading-relaxed text-mist-dim">
            Illustrative strategy created using publicly available information and my
            understanding of the role. Not an official Vanta document.
          </p>
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
