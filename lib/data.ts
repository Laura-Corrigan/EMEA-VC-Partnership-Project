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
    verb: "Discovery",
    summary:
      "Build a deep understanding of the product, internal priorities and where existing relationships can create the fastest route to qualified founder pipeline.",
    items: [
      {
        title: "Understand product",
        detail:
          "Build a detailed understanding of Vanta's product, customer pain points, sales process and the common barriers faced by seed-stage founders.",
      },
      {
        title: "Internal alignment",
        detail:
          "Meet Sales, Marketing and Product to understand what is already in motion, define the ideal partner profile and ensure day-one network activity supports existing priorities.",
      },
      {
        title: "Prioritise warm VC leads",
        detail:
          "Identify and prioritise the warm relationships within my existing network that have the strongest potential to generate qualified founder referrals.",
      },
      {
        title: "Activate existing relationships",
        detail:
          "Leverage existing relationships to begin VC discovery meetings from day one, understand what each fund and its portfolio need, and identify the strongest early partnership opportunities.",
      },
    ],
  },
  {
    code: "02",
    range: "Days 31–60",
    verb: "Pilot",
    summary:
      "Turn early discovery into two focused partnership programmes, starting with the relationships most likely to deliver value quickly.",
    spotlight: {
      label: "Starting in London",
      entries: [
        {
          name: "Seedcamp",
          detail:
            "Direct LP relationship and established personal relationships with members of the team.",
        },
        {
          name: "Balderton",
          detail:
            "Established relationships across the fund, including its platform and go-to-market network supporting portfolio companies.",
        },
        {
          name: "Backed VC",
          detail:
            "Direct LP relationship and experience co-investing alongside the team, with an established route into its founder and portfolio community.",
        },
        {
          name: "Cherry Ventures",
          detail:
            "Existing relationship with the fund as it builds its London presence, with strong relevance across AI and enterprise software companies.",
        },
      ],
    },
    items: [
      {
        title: "Founder Compliance Office Hours",
        detail:
          "Pilot monthly, invite-only office hours for founders approaching their first audit, enterprise customer or formal security review.",
      },
      {
        title: "Founder dinner",
        detail:
          "Run an invite-only founder dinner with a priority VC partner, focused on practical security and compliance challenges.",
      },
      {
        title: "Platform Leader Roundtable",
        detail:
          "Bring together a small group of platform leaders to exchange insight on helping portfolio companies become security and audit-ready.",
      },
      {
        title: "Product feedback cadence",
        detail:
          "Establish a regular cadence for sharing structured product feedback gathered from founders, investors and platform teams.",
      },
      {
        title: "Partnership reporting",
        detail:
          "Begin reporting on partner engagement, founder introductions, qualified opportunities and early programme performance.",
      },
      {
        title: "Show up in market",
        detail:
          "Represent Vanta at the ecosystem events where priority funds, platform teams and founders are already gathering.",
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
    summary:
      "Use the evidence from the first two months to refine what works, scale the strongest programmes and build a repeatable EMEA partnership engine.",
    items: [
      {
        title: "Review pilot results",
        detail:
          "Assess which partners, initiatives and referral routes are producing the strongest engagement and qualified opportunities.",
        group: "Optimise",
      },
      {
        title: "Refine scoring",
        detail:
          "Refine partner segmentation and scoring using relationship strength, portfolio relevance, founder reach and pipeline potential.",
        group: "Optimise",
      },
      {
        title: "Regional expansion",
        detail:
          "Identify the next European regions where existing relationships and market demand create the clearest expansion opportunity.",
        group: "Optimise",
      },
      {
        title: "Events calendar",
        detail:
          "Formalise a focused quarterly events calendar centred on the gatherings most likely to reach priority funds and relevant founders.",
        group: "Scale",
      },
      {
        title: "Repeatable communications",
        detail:
          "Build repeatable partner communications that provide useful content, portfolio support and clear opportunities for collaboration.",
        group: "Scale",
      },
      {
        title: "Strategic relationships",
        detail:
          "Deepen relationships with the VC and accelerator partners demonstrating the strongest engagement and founder referral potential.",
        group: "Scale",
      },
      {
        title: "Present internally",
        detail:
          "Present early results, market insight and recommendations to the wider Vanta team.",
        group: "Share insights",
      },
      {
        title: "Product roadmap",
        detail:
          "Share recurring founder and investor feedback that could inform product, positioning and educational content.",
        group: "Share insights",
      },
      {
        title: "Next six months",
        detail:
          "Define the next phase of the EMEA partnership strategy, including priorities, programmes, targets and success metrics.",
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
      "Prioritise 25–30 high-potential VC relationships, starting in London with Seedcamp, Balderton, Backed VC and Cherry Ventures.",
    target:
      "Priority VC and platform relationships with strong founder referral potential",
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
