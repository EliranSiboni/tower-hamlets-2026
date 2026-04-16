import { election } from "@/data/election";
import { SourceList } from "@/components/SourceList";

export const metadata = { title: "How to vote — Tower Hamlets 2026" };

export default function VotingPage() {
  return (
    <article className="prose-custom">
      <div className="mb-2 text-sm uppercase tracking-widest text-accent">
        How to vote
      </div>
      <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight">
        Everything you need to vote on 7 May 2026.
      </h1>
      <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
        Three things to know before polling day: you have to be{" "}
        <strong>registered</strong>, you need <strong>photo ID</strong>, and
        polling stations are open <strong>{election.pollingHours}</strong>.
      </p>

      <section>
        <h2>Key dates</h2>
        <ul>
          {election.keyDates.map((d) => (
            <li key={d.label}>
              <strong>{d.label}:</strong> {d.date}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Voter ID — you need photo ID to vote in person</h2>
        <p>{election.voterId.summary}</p>
        <p>Accepted forms of photo ID include:</p>
        <ul>
          {election.voterId.accepted.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p>
          If you do not have any accepted ID, you can apply for a free{" "}
          <a
            className="text-accent underline"
            href="https://www.gov.uk/apply-for-photo-id-voter-authority-certificate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voter Authority Certificate
          </a>{" "}
          from the government. The deadline to apply for this election is{" "}
          <strong>5pm on Wednesday 29 April 2026</strong>.
        </p>
      </section>

      <section>
        <h2>How the ballots work</h2>
        <h3>For Mayor</h3>
        <p>{election.system.mayor}</p>
        <h3>For councillors</h3>
        <p>{election.system.councillors}</p>
      </section>

      <section>
        <h2>Voting in person, by post, or by proxy</h2>
        <p>
          <strong>In person:</strong> your polling-card tells you where your
          polling station is. Bring photo ID. Staff will tick you off the list
          and give you your ballot papers.
        </p>
        <p>
          <strong>By post:</strong> you must apply by the deadline above. Your
          ballot papers will be posted to you and you return them by post or
          hand them in (following strict rules on how many you can hand in at
          once).
        </p>
        <p>
          <strong>By proxy:</strong> if you can't get to the polling station
          yourself, someone you trust can vote on your behalf. You have to
          apply by the deadline above and give a reason.
        </p>
      </section>

      <section>
        <h2>If something goes wrong</h2>
        <ul>
          <li>
            Lost your polling card? Not needed — just bring ID. If you're
            unsure which station is yours, call the council's elections team.
          </li>
          <li>
            Turned away for ID? You can come back with valid ID before 10pm
            and still vote.
          </li>
          <li>
            Not on the register? Unfortunately, if you missed the{" "}
            {election.keyDates[0].date.toLowerCase()} deadline you cannot vote
            this year — but you can register now for next time.
          </li>
          <li>
            Suspect election fraud or intimidation? Report to the Electoral
            Commission or the police.
          </li>
        </ul>
      </section>

      <SourceList sources={election.sources} />
    </article>
  );
}
