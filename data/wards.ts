export type Ward = {
  slug: string;
  name: string;
  seats: number;
  notes?: string;
  knownCandidates?: { name: string; party: string }[];
  lookupUrl: string;
};

// Tower Hamlets has 20 wards electing 45 councillors in total under boundaries
// introduced for the 2022 election. The seats-per-ward numbers below reflect
// the 2022 allocation. Complete candidate lists should be checked on
// whocanivotefor.co.uk once nominations are fully published.
export const wards: Ward[] = [
  {
    slug: "bethnal-green-east",
    name: "Bethnal Green East",
    seats: 3,
    notes:
      "Renamed from 'Bethnal Green' in 2022; large, dense inner-London ward.",
    knownCandidates: [
      { name: "Rebaka Sultana", party: "Labour" },
      { name: "Maium Talukdar", party: "Labour" },
      { name: "Syed Tareq Abdullah", party: "Aspire" },
    ],
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.bethnal-green-east.2026-05-07/bethnal-green-east/",
  },
  {
    slug: "bethnal-green-west",
    name: "Bethnal Green West",
    seats: 3,
    notes: "Renamed from 'St Peter's' in 2022 (boundaries unchanged).",
    knownCandidates: [
      { name: "Amin Rahman", party: "Labour" },
      { name: "Abu Talha Chowdhury", party: "Aspire" },
      { name: "Musthak Ahmed", party: "Aspire" },
    ],
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.bethnal-green-west.2026-05-07/bethnal-green-west/",
  },
  {
    slug: "blackwall-cubitt-town",
    name: "Blackwall & Cubitt Town",
    seats: 3,
    notes: "Includes parts of the Isle of Dogs and East India Dock area.",
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.blackwall-and-cubitt-town.2026-05-07/blackwall-and-cubitt-town/",
  },
  {
    slug: "bow-east",
    name: "Bow East",
    seats: 2,
    knownCandidates: [
      { name: "Abdi Mohamed", party: "Labour" },
      { name: "Mads Churchhouse", party: "Green" },
      { name: "Jonathan Purcell", party: "Green" },
      { name: "Ottilie Swinyard", party: "Green" },
    ],
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.bow-east.2026-05-07/bow-east/",
  },
  {
    slug: "bow-west",
    name: "Bow West",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.bow-west.2026-05-07/bow-west/",
  },
  {
    slug: "bromley-north",
    name: "Bromley North",
    seats: 3,
    knownCandidates: [
      {
        name: "Hirra Khan Adeogun",
        party: "Green (also mayoral candidate)",
      },
    ],
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.bromley-north.2026-05-07/bromley-north/",
  },
  {
    slug: "bromley-south",
    name: "Bromley South",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.bromley-south.2026-05-07/bromley-south/",
  },
  {
    slug: "canary-wharf",
    name: "Canary Wharf",
    seats: 3,
    notes:
      "Growing residential ward around the financial district; typically less safe for any one party.",
    knownCandidates: [
      { name: "Mo Aboshanab", party: "Tower Hamlets Independents" },
      { name: "Saied Ahmed", party: "Aspire" },
      { name: "Jon Bidwell", party: "Reform UK" },
    ],
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.canary-wharf.2026-05-07/canary-wharf/",
  },
  {
    slug: "island-gardens",
    name: "Island Gardens",
    seats: 2,
    notes: "Southern tip of the Isle of Dogs.",
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.island-gardens.2026-05-07/island-gardens/",
  },
  {
    slug: "lansbury",
    name: "Lansbury",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.lansbury.2026-05-07/lansbury/",
  },
  {
    slug: "limehouse",
    name: "Limehouse",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.limehouse.2026-05-07/limehouse/",
  },
  {
    slug: "mile-end",
    name: "Mile End",
    seats: 3,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.mile-end.2026-05-07/mile-end/",
  },
  {
    slug: "poplar",
    name: "Poplar",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.poplar.2026-05-07/poplar/",
  },
  {
    slug: "shadwell",
    name: "Shadwell",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.shadwell.2026-05-07/shadwell/",
  },
  {
    slug: "spitalfields-banglatown",
    name: "Spitalfields & Banglatown",
    seats: 2,
    notes: "Includes Brick Lane, Fournier Street and the City fringe.",
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.spitalfields-and-banglatown.2026-05-07/spitalfields-and-banglatown/",
  },
  {
    slug: "st-dunstans",
    name: "St Dunstan's",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.st-dunstans.2026-05-07/st-dunstans/",
  },
  {
    slug: "st-katharines-wapping",
    name: "St Katharine's & Wapping",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.st-katharines-and-wapping.2026-05-07/st-katharines-and-wapping/",
  },
  {
    slug: "stepney-green",
    name: "Stepney Green",
    seats: 2,
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.stepney-green.2026-05-07/stepney-green/",
  },
  {
    slug: "weavers",
    name: "Weavers",
    seats: 2,
    notes: "Historic East End ward on the Hackney boundary.",
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.weavers.2026-05-07/weavers/",
  },
  {
    slug: "whitechapel",
    name: "Whitechapel",
    seats: 3,
    notes:
      "Home of the Town Hall and a politically central ward in every election.",
    lookupUrl:
      "https://whocanivotefor.co.uk/elections/local.tower-hamlets.whitechapel.2026-05-07/whitechapel/",
  },
];

export const getWard = (slug: string) => wards.find((w) => w.slug === slug);
