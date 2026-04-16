export type CredibilityRating =
  | "Strong"
  | "Mixed"
  | "Weak"
  | "Limited"
  | "Untested";

export type CredibilityDimension = {
  label: string;
  rating: CredibilityRating;
  evidence: string;
};

export type MayoralCandidate = {
  slug: string;
  name: string;
  partySlug: string;
  partyName: string;
  incumbent?: boolean;
  headline: string;
  background: string[];
  platform: string[];
  strengths: string[];
  concerns: string[];
  /**
   * Evidence-based ratings across four dimensions. Each rating is justified
   * by a one-line citation drawn from the same public sources listed below
   * (`sources`). Designed to surface the gap between rhetoric and record
   * without editorialising — every assessment is anchored to documented
   * facts.
   */
  credibility: CredibilityDimension[];
  quotes?: { text: string; source: string; url: string }[];
  sources: { label: string; url: string }[];
};

export const mayoralCandidates: MayoralCandidate[] = [
  {
    slug: "lutfur-rahman",
    name: "Lutfur Rahman",
    partySlug: "aspire",
    partyName: "Aspire",
    incumbent: true,
    headline:
      "The incumbent, running on a record of council-tax freezes, universal free school meals and large housing delivery — but with a long history of controversy and a sitting government intervention.",
    background: [
      "Qualified solicitor, long-standing Tower Hamlets resident and politician",
      "Served as the borough's first directly elected Mayor from 2010 to 2015",
      "In April 2015 an Election Court voided his 2014 re-election and he was found personally guilty of corrupt and illegal practices — barred from public office for five years",
      "Returned to politics after the ban lapsed; founded Aspire and won the 2022 mayoral election with 54.9% on the Supplementary Vote system",
    ],
    platform: [
      "Deliver a minimum of 4,000 social rent homes over four years, focused on larger family homes",
      "Keep universal free school meals for all primary and secondary pupils",
      "Review controversial car-free zones and deliver 1,000 new parking spaces",
      "Booster classes after school and push for more Russell Group / Oxbridge places",
      "'Mayor's Cup' borough-wide sports tournament; expand women's and girls' programmes",
    ],
    strengths: [
      "First local authority in England to roll out universal free school meals to all primary AND secondary pupils (funded at ~£3.7m/year; ~1 million extra secondary meals served)",
      "Borough built more homes than any other London borough since 2013 — 38,000+ since 2011",
      "Froze council tax for four years (2022–2026)",
      "High personal profile, strong ground game and deep roots across communities",
    ],
    concerns: [
      "In April 2015 the Election Court (Erlam v Rahman) found him personally guilty of corrupt and illegal practices — including making false statements about opponents, and using council grants as electoral bribery ('spiritual intimidation'). His agents were also found guilty of personation and postal-vote fraud. He was barred from office for 5 years.",
      "Best Value Inspection (2024) found 'significant' governance failings and a 'culture of patronage'; in November 2024 the government sent in three ministerial envoys",
      "January 2026: intervention escalated. Envoys given reserve powers over finance, governance and recruitment; 'deep dives' ordered into planning, licensing, grants, housing allocations and the mayor's office structure",
      "2026-27 budget approved a 5% council tax rise — breaking the four-year freeze pledge he was elected on",
      "Approximately £450,000 spent refurbishing the mayor's office, including around £50,000 on a meeting table and chairs — criticised during a cost-of-living crisis",
      "Best Value report flagged the council was not 'effectively' managing community tensions around Gaza, and was slow to respond to concerns raised by the Jewish community",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Strong",
        evidence:
          "Universal free school meals delivered for all primary AND secondary pupils — first in England. 38,000+ homes built since 2011, the highest of any London borough.",
      },
      {
        label: "Transparency / governance",
        rating: "Weak",
        evidence:
          "Government Best Value intervention escalated Jan 2026 with reserve powers and 'deep dives' into planning, grants and the mayor's office. 2015 Election Court (Erlam v Rahman) found him personally guilty of corrupt and illegal practices.",
      },
      {
        label: "Local infrastructure",
        rating: "Strong",
        evidence:
          "Won 2022 mayoralty with 54.9%; Aspire holds 24 of 45 council seats and runs a deep grassroots ground game.",
      },
      {
        label: "Pledge feasibility",
        rating: "Mixed",
        evidence:
          "Broke flagship four-year council-tax-freeze pledge in the 2026-27 budget with a 5% rise. Housing and free-school-meal pledges are demonstrably costed and delivered.",
      },
    ],
    sources: [
      {
        label: "Erlam v Rahman (Election Court, 2015)",
        url: "https://en.wikipedia.org/wiki/Erlam_v_Rahman",
      },
      {
        label: "Aspire 2026 manifesto",
        url: "https://aspireparty.uk/manifesto/",
      },
      {
        label: "Gov.uk — Best Value Inspection collection",
        url: "https://www.gov.uk/government/collections/best-value-inspection-of-the-london-borough-of-tower-hamlets-2024",
      },
      {
        label: "Local Government Lawyer — intervention expanded",
        url: "https://www.localgovernmentlawyer.co.uk/governance/396-governance-news/99488-tower-hamlets-intervention-set-to-be-expanded-as-government-backs-investigative-deep-dives",
      },
      {
        label: "East London Times — 2026 mayoral powers",
        url: "https://eastlondontimes.co.uk/local/tower-hamlets/tower-hamlets-mayor-lutfur-rahman-2026-election-powers/",
      },
    ],
  },
  {
    slug: "sirajul-islam",
    name: "Sirajul Islam",
    partySlug: "labour",
    partyName: "Labour",
    headline:
      "Labour Group Leader and long-serving Bethnal Green councillor pitching himself as the 'stability candidate' against Aspire's turbulence.",
    background: [
      "Councillor for Bethnal Green since 2001 (24+ years)",
      "Resident of Bethnal Green East for nearly 40 years",
      "Previously Statutory Deputy Mayor under the Labour administration",
      "Former NHS worker; Community Development qualification from the University of Westminster",
    ],
    platform: [
      "Council tax freeze; emphasis on cost-of-living support for residents",
      "Build more genuinely affordable, council-owned homes and reduce reliance on private landlords",
      "Restore transparency and end 'patronage' flagged by government inspectors",
      "Youth crime reduction and investment in youth services",
      "Tackle child poverty as a cross-cutting priority",
    ],
    strengths: [
      "Experienced councillor with a long local track record and established community relationships",
      "Backed by a Labour group that has consistently pushed budget amendments for lower council tax",
      "Ex-Aspire councillors and officials have defected to Labour ahead of 2026",
    ],
    concerns: [
      "Leads a group that took its worst-ever Tower Hamlets result in 2022 — 19 of 45 seats",
      "The national Labour government's position on Gaza is deeply unpopular with many Tower Hamlets voters, complicating his pitch in a borough where 39% of residents are Muslim",
      "Some left-leaning voters are drifting to the Greens rather than returning to Labour",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Mixed",
        evidence:
          "24+ years of casework as a Bethnal Green councillor and time as Statutory Deputy Mayor — but no executive delivery as Mayor; record is one of opposition rather than implementation.",
      },
      {
        label: "Transparency / governance",
        rating: "Strong",
        evidence:
          "Has consistently used the Labour group's scrutiny role to push budget amendments and challenge the 'patronage' findings flagged by government inspectors.",
      },
      {
        label: "Local infrastructure",
        rating: "Strong",
        evidence:
          "Labour holds 19 of 45 seats — the official opposition — with established ward organisations and recent ex-Aspire defections strengthening the bench.",
      },
      {
        label: "Pledge feasibility",
        rating: "Mixed",
        evidence:
          "Council-tax-freeze pledge depends on a tight settlement with a national Labour government whose Gaza position is unpopular locally; some pledges hinge on Westminster, not the Town Hall.",
      },
    ],
    sources: [
      {
        label: "Tower Hamlets Labour — Sirajul Islam announcement",
        url: "https://www.thlabour.org/2025/07/29/sirajul-islam-mayoral-candidate-2026/",
      },
      {
        label: "Tower Hamlets Labour — child poverty",
        url: "https://www.thlabour.org/2026/01/09/ending-child-poverty-tower-hamlets-sirajul-islam/",
      },
    ],
  },
  {
    slug: "hirra-khan-adeogun",
    name: "Hirra Khan Adeogun",
    partySlug: "green",
    partyName: "Green Party",
    headline:
      "Climate campaigner and community organiser pitching the most ambitious retrofit and housing programme of any candidate — and picking up votes disillusioned with Labour.",
    background: [
      "Born in Lahore, brought to London as a baby; 10 years as a Tower Hamlets resident",
      "Co-directs environmental charity Possible, which campaigns for practical climate action",
      "Trustee of the Women's Environmental Network",
      "Co-founder of the Brambley & Northmeade Residents' Association; also standing as a councillor candidate in Bromley North",
    ],
    platform: [
      "£15m day-one retrofit programme for 2,000 homes (insulation, heat pumps, solar)",
      "50% affordable housing minimum on private developments, prioritising social rent",
      "Extend free school meals to breakfast clubs",
      "Divest council pension fund from fossil fuels and companies operating in illegal settlements",
      "Biodiversity plan linking Victoria Park, Mile End Park and Regent's Canal",
    ],
    strengths: [
      "Clearest platform on climate and retrofit — a major issue for a borough of older housing stock",
      "Credible community organising background",
      "Well placed to absorb disaffected Labour voters on the left",
    ],
    concerns: [
      "The Greens had only 1 councillor going into the election — a jump to the mayoralty would be unprecedented",
      "Party's original mayoral candidate Nathalie Bienfait had to withdraw after a 36% rent rise forced her out of the borough — highlighting the housing crisis but also a mid-campaign disruption",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Limited",
        evidence:
          "Strong track record running climate charity Possible, but no record of delivering policy from inside a council executive.",
      },
      {
        label: "Transparency / governance",
        rating: "Untested",
        evidence:
          "No record in office to scrutinise; campaigning platform is unambiguous on divestment and disclosure.",
      },
      {
        label: "Local infrastructure",
        rating: "Weak",
        evidence:
          "Greens hold 1 of 45 council seats; mid-campaign disruption when the original candidate had to withdraw after a 36% rent rise.",
      },
      {
        label: "Pledge feasibility",
        rating: "Mixed",
        evidence:
          "£15m day-one retrofit of 2,000 homes is itemised but ambitious for a party with one councillor; would require coalition support to pass a budget.",
      },
    ],
    sources: [
      {
        label: "Tower Hamlets Green Party — Hirra Khan Adeogun",
        url: "https://towerhamlets.greenparty.org.uk/2026/02/10/meet-hirra-khan-adeogun-the-tower-hamlets-green-party-mayoral-candidate/",
      },
    ],
  },
  {
    slug: "zami-ali",
    name: "Zami Ali",
    partySlug: "tower-hamlets-independents",
    partyName: "Tower Hamlets Independents",
    headline:
      "Practising barrister running on a 'collective leadership' platform for voters uncomfortable with both Aspire and the national parties.",
    background: [
      "Called to the Bar in 2011; specialises in serious and organised crime and regulatory trials",
      "Served as special prosecutorial adviser to the Chief Prosecutor of the International Crimes Tribunal of Bangladesh in 2025",
      "New to electoral politics; leads the recently-formed Tower Hamlets Independents party",
    ],
    platform: [
      "Shift from 'strong mayor' to collective leadership and cabinet decision-making",
      "Prioritise council-owned social housing",
      "Increase CCTV and fund youth engagement to reduce crime",
      "Transparency and published decision-making logs",
    ],
    strengths: [
      "Professional profile credible to a wider cross-section of voters than typical protest candidates",
      "Offers an independent alternative for anti-Aspire voters who do not want to back a national party",
    ],
    concerns: [
      "Party is brand-new with no existing council base or campaign infrastructure",
      "Name 'Tower Hamlets Independents' is easy to confuse with other locally-rooted parties (Aspire, and the former 'Tower Hamlets First')",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Untested",
        evidence:
          "New to electoral politics; barrister career gives professional credibility but no public-policy delivery record.",
      },
      {
        label: "Transparency / governance",
        rating: "Untested",
        evidence:
          "Platform centres on collective leadership and published decision logs, but there is no record in office to test the claim.",
      },
      {
        label: "Local infrastructure",
        rating: "Weak",
        evidence:
          "Brand-new party with no existing councillors and no campaign infrastructure to inherit.",
      },
      {
        label: "Pledge feasibility",
        rating: "Untested",
        evidence:
          "Platform is high-level (collective leadership, more CCTV, transparency) without published costings.",
      },
    ],
    sources: [
      {
        label: "Tower Hamlets Slice — Zami Ali interview",
        url: "https://towerhamletsslice.co.uk/borough/zami-ali-independents-party-mayoral-candidate-interview/",
      },
    ],
  },
  {
    slug: "mohammed-abdul-hannan",
    name: "Mohammed Abdul Hannan",
    partySlug: "liberal-democrats",
    partyName: "Liberal Democrats",
    headline:
      "Lib Dem standard-bearer in a borough where the party has never broken through — running a modest campaign focused on scrutiny.",
    background: [
      "Selected as the Liberal Democrat mayoral candidate for 2026",
      "Public profile is limited; detailed career background has not been widely reported",
    ],
    platform: [
      "Stronger scrutiny of the mayor's office and council spending",
      "Investment in community services, mental health and GP access",
      "Protect environment and local green space",
    ],
    strengths: [
      "Non-partisan image for voters tired of Aspire-vs-Labour polarisation",
      "National Lib Dems have been gaining ground in local elections across England",
    ],
    concerns: [
      "Held 0 of 45 council seats in 2022 — almost no local organisation to draw on",
      "Bid is widely seen as symbolic rather than competitive",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Limited",
        evidence:
          "Public profile is limited; no widely reported track record of policy delivery in Tower Hamlets.",
      },
      {
        label: "Transparency / governance",
        rating: "Untested",
        evidence:
          "No record in office to evaluate.",
      },
      {
        label: "Local infrastructure",
        rating: "Weak",
        evidence:
          "Lib Dems hold 0 of 45 council seats — almost no local organisation to draw on.",
      },
      {
        label: "Pledge feasibility",
        rating: "Untested",
        evidence:
          "Platform is high-level (scrutiny, mental health investment) without detailed costings or a clear delivery vehicle.",
      },
    ],
    sources: [
      {
        label: "Who Can I Vote For — Mayor of Tower Hamlets",
        url: "https://whocanivotefor.co.uk/elections/mayor.tower-hamlets.2026-05-07/mayor-of-tower-hamlets/",
      },
    ],
  },
  {
    slug: "dominic-aidan-nolan",
    name: "Dominic Aidan Nolan",
    partySlug: "conservative",
    partyName: "Conservative & Unionist Party",
    headline:
      "Actuary and local Conservative chair offering a right-of-centre scrutiny voice in a borough the party has never won.",
    background: [
      "Chair of Poplar & Limehouse Conservative Association",
      "Moved to Tower Hamlets in 2021 for an actuarial career",
      "Previously served as a councillor in St Andrews, Scotland",
      "Stood unsuccessfully as a Poplar councillor candidate in 2022",
    ],
    platform: [
      "Scrutiny of council spending and fiscal restraint",
      "Support for Canary Wharf as a borough economic asset",
      "Ground-level casework on resident issues",
    ],
    strengths: [
      "Provides right-of-centre accountability in chamber debates",
      "Professional background in finance gives weight to scrutiny of council budgets",
    ],
    concerns: [
      "Party holds only 1 of 45 council seats; 2022 mayoral candidate polled around 5%",
      "Voted with Aspire against Labour's 2026 council-tax-freeze amendment — a position that may not land well with cost-of-living-squeezed residents",
      "National Conservative party in opposition and polling poorly, which hurts local fundraising and volunteer recruitment",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Limited",
        evidence:
          "Previously served as a councillor in St Andrews, Scotland; lost his 2022 Poplar council bid. No executive delivery in Tower Hamlets.",
      },
      {
        label: "Transparency / governance",
        rating: "Untested",
        evidence:
          "Local chair role is partisan organisational work; no record of holding executive office locally.",
      },
      {
        label: "Local infrastructure",
        rating: "Weak",
        evidence:
          "Conservatives hold 1 of 45 council seats; the party's 2022 mayoral candidate polled around 5%.",
      },
      {
        label: "Pledge feasibility",
        rating: "Mixed",
        evidence:
          "Voted with Aspire against Labour's 2026 council-tax-freeze amendment — a position that may sit uneasily with the 'fiscal restraint for residents' pitch.",
      },
    ],
    sources: [
      {
        label: "Tower Hamlets Slice — Dominic Nolan interview",
        url: "https://towerhamletsslice.co.uk/borough/dominic-nolan-conservative-party-mayoral-interview/",
      },
    ],
  },
  {
    slug: "john-bullard",
    name: "John Bullard",
    partySlug: "reform-uk",
    partyName: "Reform UK",
    headline:
      "Reform UK's candidate in an urban, majority-minority borough where the party's national rhetoric sits uneasily — but protest votes may still move.",
    background: [
      "Selected as Reform UK's first mayoral candidate for Tower Hamlets",
      "Detailed personal biography has not been widely reported in the local press",
    ],
    platform: [
      "Lower council tax and leaner council spending",
      "Critical stance on immigration and asylum policy",
      "Scepticism of the directly-elected mayor model",
    ],
    strengths: [
      "National Reform polling surge generates media attention",
      "Attracts protest votes from the right that might otherwise not turn out",
    ],
    concerns: [
      "No councillors and no meaningful local infrastructure in Tower Hamlets",
      "Reform's national rhetoric on Islam and immigration sits poorly in a borough where ~39% of residents are Muslim — the highest Muslim population of any UK local authority",
      "Reform UK has had multiple candidates nationally deselected over past social-media posts; local vetting is lighter than the main parties",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Untested",
        evidence:
          "Detailed personal biography has not been widely reported in the local press; no record of policy delivery.",
      },
      {
        label: "Transparency / governance",
        rating: "Untested",
        evidence:
          "No local record. Reform UK has had multiple national candidate vetting failures, which is an organisational rather than personal concern.",
      },
      {
        label: "Local infrastructure",
        rating: "Weak",
        evidence:
          "Reform UK has 0 councillors and no meaningful local infrastructure in Tower Hamlets.",
      },
      {
        label: "Pledge feasibility",
        rating: "Limited",
        evidence:
          "Platform leans on national rhetoric (immigration, asylum) that a Tower Hamlets mayor has no power to set, while concrete local pledges are sparse.",
      },
    ],
    sources: [
      {
        label: "Tower Hamlets Slice — new mayoral rules",
        url: "https://towerhamletsslice.co.uk/bethnalgreen/2026-tower-hamlets-mayoral-election-new-rules/",
      },
    ],
  },
  {
    slug: "hugo-pierre",
    name: "Hugo Pierre",
    partySlug: "tusc",
    partyName: "Trade Unionist & Socialist Coalition",
    headline:
      "Socialist and trade-union candidate running again after 2022, pitching an anti-cuts, anti-privatisation platform.",
    background: [
      "Stood as TUSC's mayoral candidate in the 2022 Tower Hamlets election",
      "Active trade unionist; TUSC coordinating campaigner",
    ],
    platform: [
      "No cuts, no closures, no privatisation of council services",
      "Reverse council tax rises; tax wealth instead",
      "Council housing at council rents; rent controls for private tenants",
      "Oppose arms trade; divest council funds",
    ],
    strengths: [
      "Clear, consistent anti-austerity message",
      "Presence on the ballot keeps left-wing issues in the public conversation",
    ],
    concerns: [
      "No councillors and no realistic path to office",
      "Primarily a vehicle for protest votes rather than governance",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Limited",
        evidence:
          "Stood as TUSC mayoral candidate in 2022; consistent campaigning presence but no record of delivering policy from inside a council.",
      },
      {
        label: "Transparency / governance",
        rating: "Untested",
        evidence:
          "No record in office to scrutinise.",
      },
      {
        label: "Local infrastructure",
        rating: "Weak",
        evidence:
          "TUSC has 0 councillors and operates as a coalition of trade unionists rather than a conventional party machine.",
      },
      {
        label: "Pledge feasibility",
        rating: "Weak",
        evidence:
          "'No cuts, no closures, no privatisation' is a values statement — costings rely on 'tax wealth instead', which a borough mayor has no power to do.",
      },
    ],
    sources: [
      {
        label: "TUSC — 7 May 2026 slate",
        url: "https://www.tusc.org.uk/22344/11-04-2026/trade-unionists-and-socialists-will-be-the-sixth-biggest-bloc-of-candidates-on-may-7/",
      },
    ],
  },
  {
    slug: "terrence-mcgrenera",
    name: "Terrence McGrenera",
    partySlug: "independent",
    partyName: "Independent",
    headline:
      "Long-term council tenant and housing activist running on a single-issue housing platform.",
    background: [
      "Tower Hamlets resident for more than 40 years",
      "Council tenant and housing campaigner",
      "Publishes 'The Housing Times' blog on Tumblr, covering council-housing issues",
    ],
    platform: [
      "Council housing at genuinely affordable rents",
      "Stronger tenant rights and repairs standards",
      "Scrutiny of private management companies and regeneration schemes",
    ],
    strengths: [
      "Authentic lived-experience platform on a central issue for the borough",
      "Unaligned with any party — truly independent",
    ],
    concerns: [
      "A single-issue platform has limited reach as a programme for running a whole council",
      "No team, no party machine, and a very narrow name recognition base",
    ],
    credibility: [
      {
        label: "Delivery on past pledges",
        rating: "Limited",
        evidence:
          "Long-standing housing campaigner with lived experience as a council tenant; no executive delivery record.",
      },
      {
        label: "Transparency / governance",
        rating: "Untested",
        evidence:
          "No record in office.",
      },
      {
        label: "Local infrastructure",
        rating: "Weak",
        evidence:
          "Standing as a true independent — no party, no team, no campaign machinery.",
      },
      {
        label: "Pledge feasibility",
        rating: "Limited",
        evidence:
          "Single-issue housing platform is coherent but doesn't address the full range of council services a mayor must run.",
      },
    ],
    sources: [
      {
        label: "Tower Hamlets Slice — 2026 mayoral candidates",
        url: "https://towerhamletsslice.co.uk/borough/2026-tower-hamlets-mayoral-election-candidates/",
      },
    ],
  },
];

export const getMayoralCandidate = (slug: string) =>
  mayoralCandidates.find((c) => c.slug === slug);
