export type TimelineItem = {
  title: string;
  detail: string;
  group?: string;
};

export type SpotlightEntry = {
  name: string;
  detail: string;
};

export type TimelinePhase = {
  code: string;
  range: string;
  verb: string;
  summary: string;
  items: TimelineItem[];
  spotlight?: { label: string; entries: SpotlightEntry[] };
  deliverables?: string[];
};

export const timeline: TimelinePhase[] = [
  {
    code: "01",
    range: "Days 1–30",
    verb: "Discovery",
    summary: "Understand the product and the people before proposing anything to anyone external.",
    items: [
      {
        title: "Understand product",
        detail: "Understand product, pain points and bottlenecks.",
      },
      {
        title: "Internal alignment",
        detail: "Meet Sales, Marketing, Product — find out what's already in motion so day-one network activity doesn't collide with it.",
      },
      {
        title: "Map funds",
        detail: "25–30 funds mapped.",
      },
      {
        title: "VC discovery meetings",
        detail: "Begin VC discovery meetings.",
      },
    ],
  },
  {
    code: "02",
    range: "Days 31–60",
    verb: "Pilot",
    summary: "Two programmes, run properly. Starting in London.",
    spotlight: {
      label: "Starting in London",
      entries: [
        {
          name: "Seedcamp",
          detail: "Direct LP relationship, personal contacts with the team.",
        },
        {
          name: "Balderton",
          detail: "Full GTM and platform team supporting their portfolio — heavy on marketing.",
        },
        {
          name: "Backed VC",
          detail:
            "Direct LP relationship, co-invested on deals together. Can start this partnership day one.",
        },
        {
          name: "Cherry Ventures",
          detail:
            "Just opened an office in Fitzrovia. Want to build more of their London presence. Portfolio is AI companies selling to enterprise.",
        },
      ],
    },
    items: [
      {
        title: "Founder Compliance Office Hours",
        detail: "Monthly, invite-only, for founders close to their first audit or enterprise deal.",
      },
      {
        title: "Founder dinner",
        detail: "Invite-only founder dinner with a partner VC.",
      },
      {
        title: "Platform Leader Roundtable",
        detail: "2–3 platform leads, trading notes on getting portfolios audit-ready.",
      },
      {
        title: "Product feedback cadence",
        detail: "Regular cadence for sharing Product feedback from founders and VCs.",
      },
      {
        title: "Partnership reporting",
        detail: "Start reporting on partnership metrics.",
      },
      {
        title: "Show up in market",
        detail: "Attend relevant ecosystem events, represent Vanta in the market.",
      },
    ],
    deliverables: [
      "First partnership playbook",
      "Two live programmes",
      "Sales handoff process",
      "Monthly partnership report",
    ],
  },
  {
    code: "03",
    range: "Days 61–90",
    verb: "Scale",
    summary: "Turn what worked into repeatable programmes. Share what we've learned.",
    items: [
      {
        title: "Review pilot results",
        detail: "Double down on the highest-performing initiatives.",
        group: "Optimise",
      },
      {
        title: "Refine scoring",
        detail: "Refine partner segmentation and scoring.",
        group: "Optimise",
      },
      {
        title: "Regional expansion",
        detail: "Identify opportunities to expand into additional European regions.",
        group: "Optimise",
      },
      {
        title: "Events calendar",
        detail: "Formalise a quarterly events calendar.",
        group: "Scale",
      },
      {
        title: "Repeatable comms",
        detail: "Build repeatable partner communications.",
        group: "Scale",
      },
      {
        title: "Strategic relationships",
        detail: "Strengthen relationships with strategic VC and accelerator partners.",
        group: "Scale",
      },
      {
        title: "Present internally",
        detail: "Present learnings internally.",
        group: "Share insights",
      },
      {
        title: "Product roadmap",
        detail: "Recommend roadmap improvements based on founder feedback.",
        group: "Share insights",
      },
      {
        title: "Next six months",
        detail: "Define success metrics for the next six months.",
        group: "Share insights",
      },
    ],
    deliverables: [
      "Quarterly partnership strategy",
      "Scalable programme playbook",
      "Metrics dashboard showing early impact",
      "Roadmap for the next phase",
    ],
  },
];

export type EuropeRegion = {
  id: string;
  name: string;
  cx: number;
  cy: number;
  accelerators: string[];
  vcs: string[];
  events: string[];
  note?: string;
};

export const europeRegions: EuropeRegion[] = [
  {
    id: "uk",
    name: "UK",
    cx: 168,
    cy: 118,
    accelerators: ["Entrepreneur First", "Founders Factory"],
    vcs: ["LocalGlobe", "Episode 1", "Seedcamp", "Cherry Ventures"],
    events: ["Scaling Europe", "Mountside Ventures"],
  },
  {
    id: "france",
    name: "France",
    cx: 210,
    cy: 200,
    accelerators: ["Station F", "HEC Incubateur"],
    vcs: ["Partech", "Frst", "Elaia"],
    events: ["VivaTech", "UnlockVC"],
    note: "Direct LP relationships with Partech, Frst and Elaia, built over 3 years.",
  },
  {
    id: "dach",
    name: "DACH",
    cx: 290,
    cy: 150,
    accelerators: ["APX", "Münzstraße"],
    vcs: ["HV Capital", "Point Nine", "AtlanticLabs"],
    events: ["Bits & Pretzels"],
    note: "Direct LP relationship with AtlanticLabs, built over 3 years.",
  },
  {
    id: "nordics",
    name: "Nordics",
    cx: 320,
    cy: 60,
    accelerators: ["Antler Nordics", "Startup Sauna"],
    vcs: ["EQT Ventures", "Creandum", "Northzone", "Byfounders"],
    events: ["Slush"],
    note: "Direct LP relationship with Byfounders, built over 3 years.",
  },
];

export type NetworkCredential = {
  name: string;
  detail: string;
};

export const europeanNetworks: NetworkCredential[] = [
  {
    name: "Women in VC (UnlockVC)",
    detail:
      "Active member since the group started — 400+ female GPs, LPs, investors and founders across Europe. Share deal flow and market insight with the group regularly.",
  },
  {
    name: "Common Ventures",
    detail:
      "Founding working group member — 1,500+ state-educated founders, investors and operators.",
  },
  {
    name: "LPAC seats",
    detail:
      "Sit on LPACs across a broad base of European VC funds — quarterly updates, AGM attendance, real governance access, not just a name on the cap table.",
  },
];

export type KpiTarget = {
  code: string;
  milestone: string;
  metric: string;
  detail: string;
};

export const kpiTargets: KpiTarget[] = [
  {
    code: "01",
    milestone: "By day 30",
    metric: "25–30 funds",
    detail: "Target list built and scored — four already live relationships.",
  },
  {
    code: "02",
    milestone: "By day 60",
    metric: "15+ relationships",
    detail: "Funds in regular contact, plus two live programmes run end to end.",
  },
  {
    code: "03",
    milestone: "Ongoing, quarterly",
    metric: "10+ introductions",
    detail: "Founder introductions from live fund relationships.",
  },
  {
    code: "04",
    milestone: "Ongoing, quarterly",
    metric: "4–6 opportunities",
    detail: "Qualified opportunities handed to Sales.",
  },
];

export type TargetedIdea = {
  code: string;
  name: string;
  pitch: string;
  target: string;
  featured?: boolean;
};

export const targetedIdeas: TargetedIdea[] = [
  {
    code: "01",
    name: "Tier-one target map",
    pitch: "25–30 funds, ranked. Starting in London with Seedcamp, Balderton, Backed VC and Cherry Ventures.",
    target: "Priority-tier VC platform teams, London first",
    featured: true,
  },
  {
    code: "02",
    name: "Champion-led referral loop",
    pitch: "Ask existing VC-backed customers for a warm intro to their own investor's platform team.",
    target: "VC-backed customers who'd give a strong reference",
  },
  {
    code: "03",
    name: "Curated founder dinners",
    pitch: "8–10 founders, one dinner, one fund's portfolio — starting with Balderton in London.",
    target: "Series A–B founders inside 3–5 flagship funds",
  },
  {
    code: "04",
    name: "Platform playbook",
    pitch: "A short \"get audit-ready\" playbook, built with 2–3 platform leads — Seedcamp and Balderton first.",
    target: "Platform leads at 5–8 top-tier funds",
  },
  {
    code: "05",
    name: "Compliance fast-track hours",
    pitch: "Monthly office hours for founders close to their first audit or enterprise deal — starting with Cherry Ventures' AI portfolio, already selling into enterprise.",
    target: "Founders 3–6 months out from SOC 2 or ISO 27001",
  },
];

export const bonusIdea: TargetedIdea = {
  code: "06",
  name: "Partner with Scaling Europe",
  pitch: "Newsletter and podcast reaching tens of thousands of European founders and investors every week — partner on an episode or one of his live shows, if budget allows.",
  target: "European founders and investors already listening to Scaling Europe",
};
