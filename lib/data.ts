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
  spotlight?: {
    label: string;
    entries: SpotlightEntry[];
  };
  deliverables?: string[];
};

export const timeline: TimelinePhase[] = [
  {
    code: "01",
    range: "Days 1–30",
    verb: "Build",
    summary:
      "Get close to the product and founder journey while immediately activating my network and building the systems Vanta needs to scale partnerships across EMEA.",
    items: [
      {
        title: "Launch a VC listening tour",
        detail:
          "Use my existing relationships to begin discovery meetings from day one. Meet 20+ investors and platform leaders to understand how they support founders through security, procurement and enterprise readiness.",
      },
      {
        title: "Build the EMEA Partnership CRM",
        detail:
          "Create a live relationship dashboard categorising priority VC partners by geography, sector, relationship strength, founder fit, referral potential and next actions. Turn relationships into an active partnership pipeline.",
      },
      {
        title: "Activate five London VC relationships",
        detail:
          "Launch with five London-based VC funds where I already have established relationships, using those trusted connections to generate founder introductions and partnership momentum immediately.",
      },
      {
        title: "Map the founder journey",
        detail:
          "Shadow sales calls, onboarding and customer conversations to understand where compliance becomes a blocker and identify opportunities where VC partners can add value.",
      },
      {
        title: "Market insight",
        detail:
          "Publish an internal report summarising investor conversations, founder pain points and recommendations for Product, Sales and Marketing.",
      },
    ],
    deliverables: [
      "20+ VC discovery meetings",
      "EMEA Partnership CRM",
      "Five activated VC relationships",
      "First founder introductions",
      "Market insight report",
    ],
  },
  {
    code: "02",
    range: "Days 31–60",
    verb: "Launch",
    summary:
      "Turn early conversations into repeatable partnership programmes that create value for founders and measurable pipeline for Vanta.",
    spotlight: {
      label: "Potential launch partners",
      entries: [
        {
          name: "Seedcamp",
          detail:
            "Launch the first founder programme with an existing relationship.",
        },
        {
          name: "Balderton",
          detail:
            "Work closely with the platform team to support portfolio founders.",
        },
        {
          name: "Backed VC",
          detail:
            "Build on an existing LP relationship and previous co-investment experience.",
        },
        {
          name: "Cherry Ventures",
          detail:
            "Support founders across AI and enterprise software through existing relationships.",
        },
      ],
    },
    items: [
      {
        title: "Launch Founder Compliance Office Hours",
        detail:
          "Pilot monthly office hours with one or two VC partners for founders preparing for enterprise customers or their first audit.",
      },
      {
        title: "Host the first founder dinner",
        detail:
          "Bring together founders from one priority fund to discuss enterprise readiness, security and scaling challenges.",
      },
      {
        title: "Build the VC Partner Toolkit",
        detail:
          "Create practical resources platform teams can immediately share with founders, including compliance checklists, procurement guidance and educational content.",
      },
      {
        title: "Build the referral engine",
        detail:
          "Create a simple referral process with Sales so every founder introduction is tracked, measured and fed back to partners.",
      },
      {
        title: "Launch Partner Insights",
        detail:
          "Start a monthly update for VC partners containing founder resources, product updates and security trends.",
      },
      {
        title: "Build the feedback loop",
        detail:
          "Create a repeatable process for sharing investor and founder insight with Product, Marketing and Sales.",
      },
    ],
    deliverables: [
      "Founder Office Hours",
      "Founder Dinner",
      "VC Partner Toolkit",
      "Referral workflow",
      "Monthly Partner Insights",
    ],
  },
  {
    code: "03",
    range: "Days 61–90",
    verb: "Scale",
    summary:
      "Scale what is working and build repeatable systems that make the EMEA partnerships function more valuable over time.",
    items: [
      {
        title: "Build the Partnership Dashboard",
        detail:
          "Create a live dashboard tracking partner engagement, founder introductions, qualified opportunities and programme performance.",
        group: "Build",
      },
      {
        title: "Publish the first Partnership Report",
        detail:
          "Share results, market insight and recommendations across the wider Vanta team.",
        group: "Build",
      },
      {
        title: "Turn pilots into playbooks",
        detail:
          "Document successful programmes so they can be repeated consistently across funds and regions.",
        group: "Build",
      },
      {
        title: "Launch Platform Leader Roundtable",
        detail:
          "Bring together a small group of VC platform leaders each quarter to exchange best practice supporting portfolio companies.",
        group: "Community",
      },
      {
        title: "Expand beyond London",
        detail:
          "Roll out the strongest programmes into France, DACH and the Nordics, leveraging relationships already established across Europe.",
        group: "Scale",
      },
      {
        title: "Present the six-month roadmap",
        detail:
          "Use the first 90 days of relationship and pipeline data to define the next phase of Vanta's EMEA partnership strategy.",
        group: "Scale",
      },
    ],
    deliverables: [
      "Live Partnership Dashboard",
      "Quarterly Partnership Report",
      "Repeatable playbooks",
      "Platform Leader Roundtable",
      "Six-month strategy",
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
    note:
      "Direct LP relationship with Seedcamp, Cherry Ventures and Entrepreneur First.",
  },
  {
    id: "france",
    name: "France",
    cx: 210,
    cy: 200,
    accelerators: ["Station F", "HEC Incubateur"],
    vcs: ["Partech", "Frst", "Elaia"],
    events: ["VivaTech", "UnlockVC"],
    note:
      "Direct LP relationships with Partech, Frst and Elaia, built over three years.",
  },
  {
    id: "dach",
    name: "DACH",
    cx: 290,
    cy: 150,
    accelerators: ["APX", "Münzstraße"],
    vcs: ["HV Capital", "Point Nine", "AtlanticLabs"],
    events: ["Bits & Pretzels"],
    note:
      "Direct LP relationship with AtlanticLabs, built over three years.",
  },
  {
    id: "nordics",
    name: "Nordics",
    cx: 320,
    cy: 60,
    accelerators: ["Antler Nordics", "Startup Sauna"],
    vcs: ["EQT Ventures", "Creandum", "Northzone", "Byfounders"],
    events: ["Slush"],
    note:
      "Direct LP relationship with Byfounders, built over three years.",
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
      "Active member since the group started — 400+ female GPs, LPs, investors and founders across Europe. I regularly share deal flow and market insight with the group.",
  },
  {
    name: "Common Ventures",
    detail:
      "Founding working group member — a community of 1,500+ state-educated founders, investors and operators.",
  },
  {
    name: "LPAC seats",
    detail:
      "I sit on LPACs across a broad base of European VC funds, providing regular access through quarterly updates, AGMs and fund governance.",
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
    metric: "25–30 priority funds",
    detail:
      "Warm and strategic VC leads prioritised by relationship strength, portfolio relevance and founder referral potential.",
  },
  {
    code: "02",
    milestone: "By day 60",
    metric: "15+ active relationships",
    detail:
      "Priority funds in active dialogue, with two partnership programmes run end to end.",
  },
  {
    code: "03",
    milestone: "Ongoing, quarterly",
    metric: "10+ introductions",
    detail:
      "Qualified founder introductions generated through active VC partnerships.",
  },
  {
    code: "04",
    milestone: "Ongoing, quarterly",
    metric: "4–6 opportunities",
    detail:
      "Qualified opportunities generated through partnerships and handed to Sales.",
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
    name: "Warm relationship activation",
    pitch:
      "Launch with five London-based VC funds where I already have established relationships, using those trusted connections to create early founder referrals and build partnership momentum from day one.",
    target:
      "Priority VC and platform teams with the strongest potential to generate qualified founder introductions.",
    featured: true,
  },
  {
    code: "02",
    name: "Champion-led referral loop",
    pitch:
      "Ask existing VC-backed customers for a warm introduction to their investor's platform or portfolio team.",
    target: "VC-backed customers able to provide a strong reference",
  },
  {
    code: "03",
    name: "Curated founder dinners",
    pitch:
      "Bring together 8–10 relevant founders from one fund's portfolio for a focused, practical dinner, starting with a London partner.",
    target: "Seed to Series B founders inside priority VC portfolios",
  },
  {
    code: "04",
    name: "Platform playbook",
    pitch:
      "Build a practical guide with two or three platform leaders to help seed-stage companies become security and audit-ready.",
    target: "Platform leaders at five to eight priority funds",
  },
  {
    code: "05",
    name: "Compliance fast-track hours",
    pitch:
      "Run monthly office hours for founders approaching their first audit or enterprise deal, beginning with a relevant AI and enterprise software portfolio.",
    target: "Founders three to six months from SOC 2 or ISO 27001",
  },
];

export const bonusIdea: TargetedIdea = {
  code: "06",
  name: "Partner with Scaling Europe",
  pitch:
    "Partner on an episode or live event reaching European founders and investors, subject to budget and audience fit.",
  target: "European founders and investors already following Scaling Europe",
};
