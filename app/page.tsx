import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { EuropeMap } from "@/components/EuropeMap";
import { SuccessMetrics } from "@/components/SuccessMetrics";
import { FiveIdeas } from "@/components/FiveIdeas";
import { SideRail } from "@/components/SideRail";
import { MobileProgress } from "@/components/MobileProgress";
import { postscript } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative">
      <MobileProgress />
      <SideRail />
      <Hero />
      <Timeline />
      <EuropeMap />
      <SuccessMetrics />
      <FiveIdeas />

      <div className="border-t border-line px-6 py-14 md:px-14">
        <p className="mx-auto max-w-xl text-center font-mono text-sm text-mist">
          P.S. — {postscript}
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
