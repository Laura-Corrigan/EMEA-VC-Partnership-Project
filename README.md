# EMEA Venture Partnerships — First 90 Days

A single-page interactive tool built around four things: a 30/60/90 plan, the
numbers proposed for the role, a map of the wider ecosystem, and five
targeted ideas grounded in specific, real funds and accelerators. Built for a
Strategic Venture Capital Partnerships Manager (EMEA) application at Vanta,
shaped around what the hiring manager said she's looking for: relationship-first
(not salesy), comfortable with ambiguity (not a playbook role), quantitative,
and someone who earns internal trust with Sales.

**Illustrative only.** Built from publicly available information and personal
understanding of the role. Not an official Vanta document, and not affiliated
with or endorsed by Vanta. No employer or third-party proprietary data is used
anywhere on this site — the KPI targets are self-proposed, forward-looking
numbers for this role, not historical figures from any past employer.

## What's here

- **The plan** — three phases (Days 1–30 "Discovery", Days 31–60 "Pilot",
  Days 61–90 "Scale"), each an interactive, expandable breakdown of what
  actually gets done, including a London-first target list for the pilot phase
  and named deliverables per phase.
- **The wider map** — a hoverable map of six European regions, each showing
  its accelerators, VCs and the events worth being at. London gets depth in
  the plan above; this shows the breadth beyond it.
- **The numbers** — four forward-looking KPI targets tied to the plan's own
  milestones (day 30, day 60, then an ongoing quarterly cadence), proposed as
  a first draft to be refined once inside the building.
- **Five targeted ideas** — one foundational idea (the target list) and four
  execution ideas that depend on it, each naming the specific funds and
  accelerators it starts with (Seedcamp, Cherry Ventures, Balderton, Entrepreneur
  First, and others), plus one clearly-flagged budget-dependent bonus idea.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first `@theme` token system)
- Framer Motion for scroll reveals and the accordion/stepper interactions
- Self-hosted variable fonts via `@fontsource-variable` (Fraunces, Inter,
  JetBrains Mono) — no runtime call to Google Fonts, so it builds identically
  anywhere

## Design system

Palette and type are grounded in Vanta's own brand marks — Vanta Purple
`#AC55FF` and Vanta Dark Purple `#240642` — set inside a near-black canvas,
paired with Fraunces as a display serif and Inter/JetBrains Mono for body copy
and data. The signature motif is an animated node-and-line "trust graph"
(`components/ConstellationBackground.tsx`) behind the hero, echoed as the
connecting line in the left-hand chapter rail.

All copy — the plan, the map, the KPI targets, and the five ideas —
lives in `lib/data.ts`. Edit that file to change any wording without touching
component code.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects as Next.js — no extra config needed.
4. Deploy.

No environment variables, database, or external API keys are required.

## Project structure

```
app/                 Root layout (fonts, metadata) + the single page
components/
  Hero.tsx                  intro + signature trust-graph animation
  Timeline.tsx               interactive 30/60/90 plan (phase tabs + accordion)
  EuropeMap.tsx               hoverable map of accelerators/VCs/events by region
  SuccessMetrics.tsx          the four forward-looking KPI targets
  FiveIdeas.tsx               the five targeted ideas + one bonus idea
  SectionWrapper.tsx          shared numbering / eyebrow / scroll-reveal shell
  ConstellationBackground     canvas trust-graph animation
  SideRail / MobileProgress   chapter navigation (desktop / mobile)
lib/data.ts           All copy for the plan, map, KPIs and ideas — edit here
```
