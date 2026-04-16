export type Party = {
  slug: string;
  name: string;
  shortName?: string;
  colour: string; // tailwind class for left border
  hex: string;
  seats2022: number;
  localLead: string;
  mayoralCandidate?: string;
  summary: string;
  platform: string[];
  strengths: string[];
  concerns: string[];
  sources: { label: string; url: string }[];
};

export const parties: Party[] = [
  {
    slug: "aspire",
    name: "Aspire",
    colour: "border-l-emerald-600",
    hex: "#059669",
    seats2022: 24,
    localLead: "Lutfur Rahman (Mayor)",
    mayoralCandidate: "Lutfur Rahman",
    summary:
      "Locally-rooted party built around Mayor Lutfur Rahman and the former Tower Hamlets Independent Group. Governed the borough since winning a majority in 2022. Not affiliated with any national party.",
    platform: [
      "Build 4,000 social rent homes over four years, with focus on 3–4 bedroom family homes",
      "Maintain universal free school meals for all primary and secondary pupils",
      "Add 1,000 parking spaces and review car-free zones",
      "After-school booster classes; push for more Oxbridge/Russell Group admissions",
      "Continue large-scale housing pipeline (Billingsgate, South Poplar, council-owned sites)",
    ],
    strengths: [
      "Delivered universal free school meals to all primary and secondary pupils — first in England",
      "Housing delivery: more homes built than any other London borough since 2013",
      "Froze council tax for four years (2022–2026)",
      "Strong grassroots campaign machine and deep community roots",
    ],
    concerns: [
      "Government appointed ministerial envoys in Nov 2024 after a Best Value Inspection found 'significant' governance failings, a 'culture of patronage,' and weak leadership",
      "Intervention escalated in Jan 2026: envoys given reserve powers over finance, governance and recruitment; 'deep dives' ordered into planning, licensing, grants, housing allocations, and the mayor's office",
      "2026-27 budget approved a 5% council tax rise — breaking the four-year freeze pledge",
      "~£450,000 spent refurbishing the mayor's office, including ~£50,000 on a meeting table and chairs",
      "Best Value Inspection flagged slow handling of Gaza-related community tensions and concerns from the Jewish community",
    ],
    sources: [
      {
        label: "Aspire manifesto",
        url: "https://aspireparty.uk/manifesto/",
      },
      {
        label: "Gov.uk — Best Value Inspection of Tower Hamlets",
        url: "https://www.gov.uk/government/collections/best-value-inspection-of-the-london-borough-of-tower-hamlets-2024",
      },
      {
        label: "Local Government Lawyer — intervention expanded",
        url: "https://www.localgovernmentlawyer.co.uk/governance/396-governance-news/99488-tower-hamlets-intervention-set-to-be-expanded-as-government-backs-investigative-deep-dives",
      },
    ],
  },
  {
    slug: "labour",
    name: "Labour Party",
    shortName: "Labour",
    colour: "border-l-red-600",
    hex: "#dc2626",
    seats2022: 19,
    localLead: "Sirajul Islam (Labour Group Leader)",
    mayoralCandidate: "Sirajul Islam",
    summary:
      "Main opposition on the council. Pitching itself as the 'stability candidate' after a difficult 2022 in which it returned its lowest-ever seat count in the borough.",
    platform: [
      "Freeze council tax at the Adult Social Care precept level only",
      "Build more genuinely affordable, council-owned homes; reduce reliance on private landlords",
      "Restore transparency and accountability; tackle 'patronage' flagged by inspectors",
      "Youth-crime reduction programmes",
      "Child-poverty reduction as a cross-cutting priority",
    ],
    strengths: [
      "Deep bench of experienced councillors; Sirajul Islam has 24+ years representing Bethnal Green",
      "Aligned with the national party of government, giving access to ministers and policy levers",
      "Budget amendments have consistently pushed for lower council tax for residents",
    ],
    concerns: [
      "Worst Tower Hamlets result in party history in 2022 (19 of 45 seats)",
      "Divided internally over the national Labour government's policy on Gaza — a major issue in a borough where 39% of residents are Muslim",
      "National Labour polling below 20% as of early 2026; some left-leaning voters shifting to Greens",
    ],
    sources: [
      {
        label: "Tower Hamlets Labour",
        url: "https://www.thlabour.org/",
      },
      {
        label: "Labour 2026 budget amendment",
        url: "https://www.thlabour.org/2026/02/24/tower-hamlets-labour-budget-amendment-freeze-council-tax-rents-2026-27/",
      },
    ],
  },
  {
    slug: "green",
    name: "Green Party",
    shortName: "Greens",
    colour: "border-l-green-500",
    hex: "#22c55e",
    seats2022: 1,
    localLead: "Hirra Khan Adeogun (Mayoral candidate)",
    mayoralCandidate: "Hirra Khan Adeogun",
    summary:
      "Small but growing presence, pitching a progressive alternative to Labour — especially to voters unhappy with the national Labour party's Gaza position.",
    platform: [
      "£15m day-one investment to retrofit 2,000 homes (insulation, heat pumps, solar)",
      "50% affordable housing minimum on private developments, prioritising social rent",
      "Extend free school meals to breakfast clubs",
      "Divest council pension fund from fossil fuels and companies tied to illegal settlements",
      "Biodiversity plan: hedgerows, canal habitats, wildlife corridors between Victoria Park, Mile End Park and Regent's Canal",
    ],
    strengths: [
      "Coherent climate and housing platform; credible local activist candidates",
      "Attracting voters disillusioned with both Aspire governance and Labour's national direction",
    ],
    concerns: [
      "Only 1 councillor going into the election — limited track record in office",
      "Original mayoral candidate Nathalie Bienfait had to withdraw after a 36% rent rise pushed her out of the borough — a stark illustration of the crisis, but also a disruption to the campaign",
    ],
    sources: [
      {
        label: "Tower Hamlets Green Party",
        url: "https://towerhamlets.greenparty.org.uk/election-2026/",
      },
      {
        label: "Green full manifesto 2026",
        url: "https://towerhamlets.greenparty.org.uk/manifesto-2026/full-manifesto-2026/",
      },
    ],
  },
  {
    slug: "liberal-democrats",
    name: "Liberal Democrats",
    shortName: "Lib Dems",
    colour: "border-l-amber-500",
    hex: "#f59e0b",
    seats2022: 0,
    localLead: "Mohammed Abdul Hannan (Mayoral candidate)",
    mayoralCandidate: "Mohammed Abdul Hannan",
    summary:
      "Historically very weak in Tower Hamlets. Campaigning on a smaller scale, focused on a handful of wards where they believe they can compete.",
    platform: [
      "Sustainable local government funding",
      "Stronger scrutiny and checks on the mayor's office",
      "Investment in community services and mental health",
    ],
    strengths: [
      "National party recovering in local elections across England",
      "Non-partisan image for voters tired of Labour vs Aspire battles",
    ],
    concerns: [
      "Held 0 of 45 council seats going into 2026 — minimal local infrastructure",
      "Mayoral bid is largely symbolic rather than competitive",
    ],
    sources: [
      {
        label: "Tower Hamlets Liberal Democrats",
        url: "https://www.towerhamletslibdems.org.uk/",
      },
    ],
  },
  {
    slug: "conservative",
    name: "Conservative & Unionist Party",
    shortName: "Conservatives",
    colour: "border-l-sky-700",
    hex: "#0369a1",
    seats2022: 1,
    localLead: "Dominic Aidan Nolan (Mayoral candidate)",
    mayoralCandidate: "Dominic Aidan Nolan",
    summary:
      "Right-of-centre voice in a borough that has never been a Conservative stronghold. Focused on scrutiny and fiscal restraint rather than winning outright.",
    platform: [
      "Scrutiny and fiscal restraint at the Town Hall",
      "Support for small business and Canary Wharf as an economic engine",
      "Ground-level resident casework",
    ],
    strengths: [
      "Holds council to account from the right; can force difficult questions in chamber",
    ],
    concerns: [
      "Only 1 of 45 council seats in 2022; 2022 mayoral candidate won ~5%",
      "National Conservative party in opposition and polling poorly — limited organisational pull",
      "Voted with Aspire against Labour's 2026 council-tax-freeze amendment, a position that may be unpopular with residents",
    ],
    sources: [
      {
        label: "Tower Hamlets Slice — Dominic Nolan interview",
        url: "https://towerhamletsslice.co.uk/borough/dominic-nolan-conservative-party-mayoral-interview/",
      },
    ],
  },
  {
    slug: "reform-uk",
    name: "Reform UK",
    colour: "border-l-cyan-500",
    hex: "#06b6d4",
    seats2022: 0,
    localLead: "John Bullard (Mayoral candidate)",
    mayoralCandidate: "John Bullard",
    summary:
      "Populist right party riding a national polling surge. Targeting urban seats where it believes Labour support among Muslim voters has weakened — though Tower Hamlets remains very tough terrain for them.",
    platform: [
      "Lower council tax and leaner council spending",
      "Tougher stance on immigration and asylum",
      "Critical of local devolution and the mayoral model",
    ],
    strengths: [
      "National poll surge drawing media attention; potentially picks up protest votes",
    ],
    concerns: [
      "No councillors or meaningful local infrastructure",
      "Party's rhetoric on immigration and Islam often sits uneasily in a borough where nearly 4 in 10 residents are Muslim",
      "Some Reform candidates nationally have been deselected over past social-media posts; local vetting is lighter than the main parties",
    ],
    sources: [
      {
        label: "Tower Hamlets Slice — 2026 mayoral candidates",
        url: "https://towerhamletsslice.co.uk/borough/2026-tower-hamlets-mayoral-election-candidates/",
      },
    ],
  },
  {
    slug: "tower-hamlets-independents",
    name: "Tower Hamlets Independents",
    shortName: "THI",
    colour: "border-l-purple-600",
    hex: "#9333ea",
    seats2022: 0,
    localLead: "Zami Ali (Mayoral candidate)",
    mayoralCandidate: "Zami Ali",
    summary:
      "A new local party, distinct from Aspire, positioning itself as an alternative for voters who want independence from national parties but are uncomfortable with Aspire's record.",
    platform: [
      "Collective leadership model rather than a strong-mayor style",
      "Prioritise council-owned social housing",
      "More CCTV and youth engagement to address crime",
      "Increase transparency of council decision-making",
    ],
    strengths: [
      "Credible mayoral candidate (practising barrister) with a professional profile",
      "Fills a political gap for independents critical of Rahman",
    ],
    concerns: [
      "Brand-new party with no council base; limited organisation",
      "Easily confused with Aspire (historically the 'Tower Hamlets First' / independent strand)",
    ],
    sources: [
      {
        label: "Tower Hamlets Slice — Zami Ali interview",
        url: "https://towerhamletsslice.co.uk/borough/zami-ali-independents-party-mayoral-candidate-interview/",
      },
    ],
  },
  {
    slug: "tusc",
    name: "Trade Unionist & Socialist Coalition",
    shortName: "TUSC",
    colour: "border-l-rose-700",
    hex: "#be123c",
    seats2022: 0,
    localLead: "Hugo Pierre (Mayoral candidate)",
    mayoralCandidate: "Hugo Pierre",
    summary:
      "Socialist coalition of trade unionists and campaigners standing against 'Labour acting like the Tories.' Same candidate who stood for mayor in 2022.",
    platform: [
      "No cuts, no privatisation, no closures of council services",
      "Reverse council tax rises; tax wealth instead",
      "Council housing at council rents; rent controls",
      "Oppose arms trade; divest council funds",
    ],
    strengths: [
      "Clear, consistent anti-austerity message",
      "Active campaigning presence even when out of office",
    ],
    concerns: [
      "Zero councillors; no realistic path to office",
      "Primarily a vehicle for protest votes rather than governance",
    ],
    sources: [
      {
        label: "TUSC — 7 May 2026 slate",
        url: "https://www.tusc.org.uk/22344/11-04-2026/trade-unionists-and-socialists-will-be-the-sixth-biggest-bloc-of-candidates-on-may-7/",
      },
    ],
  },
  {
    slug: "independent",
    name: "Independent candidates",
    colour: "border-l-slate-500",
    hex: "#64748b",
    seats2022: 0,
    localLead: "Various",
    summary:
      "Candidates standing without a party affiliation. Terrence McGrenera is standing for Mayor as an independent, with additional independent candidates in various wards.",
    platform: [
      "Platforms vary by candidate — typically focused on a specific local issue (housing, a particular neighbourhood, a community)",
    ],
    strengths: [
      "Direct accountability to residents rather than a party whip",
      "Often deep expertise in a specific policy area",
    ],
    concerns: [
      "Limited ability to hold a governing coalition together in a 45-seat council",
      "Without a party apparatus, resourcing and delivery capacity is thinner",
    ],
    sources: [
      {
        label: "Tower Hamlets Slice — 2026 mayoral candidates",
        url: "https://towerhamletsslice.co.uk/borough/2026-tower-hamlets-mayoral-election-candidates/",
      },
    ],
  },
];

export const getParty = (slug: string) => parties.find((p) => p.slug === slug);
