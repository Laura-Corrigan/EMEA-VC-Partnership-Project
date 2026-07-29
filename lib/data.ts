// Illustrative content only — built from public information and role understanding.

export const flywheel = ["VCs", "Founders", "Qualified Opportunities", "Customers", "Expansion"];

export type TimelineItem = {
  title: string;
  detail: string;
};

export type TimelinePhase = {
  code: string;
  range: string;
  verb: string;
  summary: string;
  items: TimelineItem[];
};

export const timeline: TimelinePhase[] = [
  {
    code: "01",
    range: "Days 1–30",
    verb: "Understand",
    summary:
      "Sit inside the machine before touching it. Learn how Vanta actually sells, ships and supports before proposing how VCs should plug in.",
    items: [
      {
        title: "Product & platform",
        detail:
          "Work through the frameworks (SOC 2, ISO 27001, GDPR, HIPAA) and the AI Agent workflow well enough to explain them to a platform team unprompted.",
      },
      {
        title: "Sales motion",
        detail:
          "Shadow AEs on enterprise and mid-market calls to see where compliance readiness accelerates or stalls a deal.",
      },
      {
        title: "Marketing calendar",
        detail:
          "Map existing content, VantaCon and regional events already in flight so new programmes extend rather than collide.",
      },
      {
        title: "Customer Success handoffs",
        detail:
          "Understand how expansion and renewal signals are currently tracked, to design partner-sourced accounts into the same system.",
      },
      {
        title: "Existing partner network",
        detail:
          "Audit every live VC, accelerator and platform relationship in EMEA — what's active, what's dormant, what's undocumented.",
      },
      {
        title: "Current pipeline",
        detail:
          "Pull every deal in the last two quarters with a fund or accelerator in its history to find the real (not assumed) influence pattern.",
      },
      {
        title: "Regional ecosystem",
        detail:
          "Build a first map of the UK, France, DACH, Nordics, Benelux and Southern Europe venture landscape from public sources and internal knowledge.",
      },
    ],
  },
  {
    code: "02",
    range: "Days 31–60",
    verb: "Build",
    summary:
      "Turn the map into a working system: a short, ranked target list, a first proof point with a real fund, and a way to show it's working.",
    items: [
      {
        title: "Tier-one target map",
        detail:
          "Ship the ranked list of 20–30 priority funds with a named warm path into each one — see idea 01 below.",
      },
      {
        title: "First proof point",
        detail:
          "Run one dinner or office-hours session with a single flagship fund, end to end, before scaling the format anywhere else.",
      },
      {
        title: "Champion referral loop",
        detail:
          "Identify the first 5–10 VC-backed customers worth asking for a warm introduction, and make the first asks.",
      },
      {
        title: "Reporting baseline",
        detail:
          "Stand up a simple weekly tracker for intros, meetings and pipeline touched — so the next 30 days are measurable from day one.",
      },
      {
        title: "Internal socialisation",
        detail:
          "Walk Sales, Marketing and Customer Success through the plan and the target list so handoffs are defined before volume arrives.",
      },
    ],
  },
];

export type ProcessStage = {
  code: string;
  name: string;
  behavior: string;
  avoid: string;
  signal: string;
};

export const processStages: ProcessStage[] = [
  {
    code: "01",
    name: "Earn the right in",
    behavior:
      "Learn a fund's portfolio, thesis and where compliance is a genuine unlock before ever reaching out — arrive with a specific, researched reason to talk.",
    avoid: "Open with a pitch for \"Vanta's VC partner programme.\"",
    signal: "The platform lead replies to the second email, not just the first.",
  },
  {
    code: "02",
    name: "Build the relationship, not the pipeline",
    behavior:
      "Stay useful on a cadence with no ask attached — market intel, a genuinely relevant introduction, a straight answer to a hard question.",
    avoid: "Log every interaction as a stage toward a close.",
    signal: "They start looping me into things I wasn't invited to.",
  },
  {
    code: "03",
    name: "Recognise the real moment",
    behavior:
      "Notice, alongside the fund, when a specific founder is actually approaching an enterprise deal or first audit — then make the introduction because it helps the founder, not because it hits a number.",
    avoid: "Force an introduction before the need is real.",
    signal: "The founder thanks the fund for the intro, not me.",
  },
  {
    code: "04",
    name: "Bring Sales in as a peer",
    behavior:
      "Hand context to the right AE personally, before the founder ever fills out a form, so the account starts warm.",
    avoid: "Drop a lead record over the wall and move on.",
    signal: "Sales starts asking what's in the pipeline before I've told them.",
  },
];

export type TargetedIdea = {
  code: string;
  name: string;
  pitch: string;
  target: string;
  approach: string;
  outcome: string;
  featured?: boolean;
};

export const targetedIdeas: TargetedIdea[] = [
  {
    code: "01",
    name: "Tier-one target map",
    pitch:
      "A ranked list of 20–30 EMEA funds most likely to produce enterprise-ready founders — starting with names like Seedcamp, Cherry Ventures and EQT Ventures, each mapped to its warmest path in before any outreach starts.",
    target: "Priority-tier VC platform teams across the UK, DACH and the Nordics",
    approach:
      "Account-based mapping, not a newsletter blast. Every fund gets a specific, researched reason for the conversation — existing customer overlap, portfolio stage, or a live deal already in motion.",
    outcome:
      "The foundation everything else runs on: no dinner, office hour or intro request happens without a fund's place on this list first.",
    featured: true,
  },
  {
    code: "02",
    name: "Champion-led referral loop",
    pitch:
      "Ask existing VC-backed customers — the ones already getting real value from Vanta — for a warm introduction to their own investor's platform team.",
    target: "VC-backed customers who are strong references",
    approach:
      "Turns Customer Success into a partner-sourcing motion, one relationship at a time, instead of a cold platform-team contact.",
    outcome: "Every introduction arrives pre-vouched for, and converts to a first meeting far faster than outbound.",
  },
  {
    code: "03",
    name: "Curated founder dinners",
    pitch:
      "Small, invite-only dinners — 8 to 10 founders — piloted with a single portfolio (Cherry Ventures in Berlin, or LocalGlobe in London) before extending anywhere else, themed around one real compliance moment.",
    target: "Series A–B founders inside 3–5 flagship fund relationships",
    approach: "Depth over breadth: one fund, one dinner, one clear follow-up ask — not a broad networking event.",
    outcome: "A small number of high-trust introductions, not a long list of low-intent contacts.",
  },
  {
    code: "04",
    name: "Platform playbook",
    pitch:
      "A short, co-branded \"get your portfolio audit-ready\" playbook, built with 2–3 platform leads at firms such as Balderton, Index Ventures or Point Nine, that they can hand to every founder they back.",
    target: "Platform team leads at 5–8 top-tier funds",
    approach: "One build, distributed by the fund itself — reach compounds inside their own portfolio without repeated outreach.",
    outcome: "Vanta becomes the default answer before a founder even starts searching.",
  },
  {
    code: "05",
    name: "Compliance fast-track hours",
    pitch:
      "Monthly, invite-only office hours for founders sourced through accelerator portfolios like Entrepreneur First and Station F, approaching their first enterprise deal or first audit.",
    target: "Founders 3–6 months from needing SOC 2 or ISO 27001",
    approach: "Timed to the moment it actually matters, not run as a generic ongoing series open to anyone.",
    outcome: "Converts real, present urgency into qualified pipeline — measurable in weeks, not quarters.",
  },
];

export const bonusIdea: TargetedIdea = {
  code: "06",
  name: "Sponsor Scaling Europe",
  pitch:
    "Sponsor Seb Johnson's Scaling Europe — the newsletter, podcast and live shows read by tens of thousands of European founders and investors every week — if paid sponsorship budget allows.",
  target: "European founders and investors already following Scaling Europe",
  approach:
    "Follows a precedent the show has already set with Deel, Mishcon, Chargebee, SurrealDB and Airwallex — a visible, recurring placement in front of exactly the audience the five ideas above are reaching one relationship at a time.",
  outcome:
    "Broader brand permission sitting behind the targeted plays — pursued only once sponsorship budget is confirmed, not funded out of the core relationship-building budget.",
};
