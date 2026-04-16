export const election = {
  name: "Tower Hamlets Council & Executive Mayor Elections 2026",
  date: "Thursday 7 May 2026",
  pollingHours: "7:00am – 10:00pm",
  system: {
    mayor:
      "First-Past-The-Post (FPTP). Voters mark ONE X for their preferred candidate. This is a change from 2022, when a Supplementary Vote system allowed second preferences.",
    councillors:
      "First-Past-The-Post in each of the 20 wards. Wards elect 1–3 councillors depending on population; you get as many votes as there are seats in your ward.",
  },
  seats: {
    mayor: 1,
    councillors: 45,
    wards: 20,
  },
  electionDay: "2026-05-07",
  keyDates: [
    {
      label: "Voter registration deadline",
      date: "Midnight, Monday 20 April 2026",
      iso: "2026-04-20T23:59:00+01:00",
      note: "Register at gov.uk/register-to-vote — takes about 5 minutes.",
    },
    {
      label: "Postal vote application deadline",
      date: "5:00pm, Tuesday 21 April 2026",
      iso: "2026-04-21T17:00:00+01:00",
      note: "Apply online if you can't get to a polling station on the day.",
    },
    {
      label: "Proxy vote application deadline",
      date: "5:00pm, Tuesday 28 April 2026",
      iso: "2026-04-28T17:00:00+01:00",
      note: "Standard applications — someone you trust votes on your behalf.",
    },
    {
      label: "Polling day",
      date: "Thursday 7 May 2026, 7am–10pm",
      iso: "2026-05-07T07:00:00+01:00",
      note: "Bring photo ID. Polls open 7am to 10pm.",
    },
  ],
  voterId: {
    required: true,
    summary:
      "Photo ID is mandatory to vote in person. Photocopies and digital versions are not accepted.",
    accepted: [
      "UK, EEA or Commonwealth passport",
      "UK, EEA or Commonwealth photo driving licence (full or provisional)",
      "Blue badge",
      "Older Person's bus pass",
      "Disabled Person's bus pass",
      "Oyster 60+ card",
      "Freedom Pass",
      "PASS-accredited proof-of-age card",
      "Biometric residence permit",
      "Voter Authority Certificate (free, apply via gov.uk)",
    ],
  },
  sources: [
    {
      label: "Tower Hamlets Council — Elections 2026",
      url: "https://www.towerhamlets.gov.uk/lgnl/council_and_democracy/elections__voting/Election-2026/Tower-Hamlets-Council-and-Executive-Mayor-Elections-Thursday-7-May-2026.aspx",
    },
    {
      label: "Electoral Commission — Voter ID",
      url: "https://www.electoralcommission.org.uk/voting-and-elections/voter-id",
    },
    {
      label: "Who Can I Vote For? — Tower Hamlets",
      url: "https://whocanivotefor.co.uk/elections/mayor.tower-hamlets.2026-05-07/mayor-of-tower-hamlets/",
    },
  ],
};
