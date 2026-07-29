# EMEA Venture Partnerships — 60-Day Plan

A single-page interactive tool built around exactly three things: a 60-day plan,
the working process behind it, and five targeted ideas grounded in specific,
real funds and accelerators. Built for a Strategic Venture Capital Partnerships
Manager (EMEA) application at Vanta, and shaped directly around what the hiring
manager said she's looking for: relationship-first (not salesy), comfortable
with ambiguity (not a playbook role), quantitative, and someone who earns
internal trust with Sales.

**Illustrative only.** Built from publicly available information and personal
understanding of the role. Not an official Vanta document, and not affiliated
with or endorsed by Vanta.

## What's here

- **The 60-day plan** — two phases (Days 1–30 "Understand", Days 31–60
  "Build"), each an interactive, expandable list of what actually gets done.
- **The process** — a 4-stage stepper showing how a relationship actually
  becomes a customer: what I do, what I deliberately don't do, and how I'd know
  it's working at each stage. This is the direct answer to "not salesy" and
  "not a playbook."
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

All copy — the plan, the process stages, and the five ideas — lives in
`lib/data.ts`. Edit that file to change any wording without touching component
code.

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
  Timeline.tsx               interactive 60-day plan (phase tabs + accordion)
  ProcessTool.tsx             the 4-stage relationship-first process stepper
  FiveIdeas.tsx               the five targeted ideas + one bonus idea
  SectionWrapper.tsx          shared numbering / eyebrow / scroll-reveal shell
  ConstellationBackground     canvas trust-graph animation
  SideRail / MobileProgress   chapter navigation (desktop / mobile)
lib/data.ts           All copy for the plan, process and ideas — edit here
```
