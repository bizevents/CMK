import { useEffect } from 'react';

const EXPERIENCE = [
  {
    company: 'TransPerfect Media (Hiventy)',
    role: 'Head — Kenya & Nigeria',
    period: '2022 – Present',
    location: 'Nairobi, Kenya',
    type: 'Current',
    highlights: [
      'Leading TransPerfect Media\'s operations across Kenya and Nigeria — two of Africa\'s most critical media markets',
      'Overseeing dubbing, subtitling, and media localization services for international and African content',
      'Building strategic partnerships with broadcasters, OTT platforms, and production companies',
      'Developing production workflow training programmes with institutions like Talanta Institute',
      'Representing the organization at international forums including MIP Africa and FAME Week',
    ],
  },
  {
    company: 'Kamsa Africa Ltd',
    role: 'Director / Senior Role',
    period: 'Earlier',
    location: 'Nairobi, Kenya',
    type: 'Previous',
    highlights: [
      'Developed media production and content distribution strategies across the East African market',
      'Built operational frameworks for media content management and localization',
    ],
  },
  {
    company: 'Nairobi Community Media House Ltd',
    role: 'Senior Executive',
    period: 'Earlier',
    location: 'Nairobi, Kenya',
    type: 'Previous',
    highlights: [
      'Developed community media programming and distribution channels',
      'Built editorial strategies serving Nairobi\'s diverse communities',
    ],
  },
  {
    company: 'Freestyle Media & Events',
    role: 'Media & Events Lead',
    period: 'Earlier career',
    location: 'Nairobi, Kenya',
    type: 'Previous',
    highlights: [
      'Managed full-cycle media and events production for corporate and cultural clients',
      'Developed creative briefs and oversaw execution from concept to delivery',
    ],
  },
  {
    company: 'Biz Baz Events Limited',
    role: 'Events & Production',
    period: 'Earlier career',
    location: 'Nairobi, Kenya',
    type: 'Previous',
    highlights: [
      'Early-career foundation in event production and media coordination across Kenya',
    ],
  },
];

const SPEAKING = [
  { event: 'Reel Reflections Film Festival', role: 'Panel Speaker', year: '2023', topic: 'Building collaborations and partnerships between filmmakers and international markets' },
  { event: 'MIP Africa — FAME Week', role: 'Industry Representative', year: '2023', topic: 'African content in the global marketplace' },
  { event: 'Nigerian International Film Summit (NIFS)', role: 'Attendee & Contributor', year: '2023', topic: 'Nollywood and the globalization of African content', location: 'Lagos' },
];

export default function Experience() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="experience">
      <section className="page-header">
        <div className="page-header__inner">
          <p className="section-label">Experience</p>
          <h1 className="page-header__title">
            Two and a half<br />decades of <em>craft.</em>
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="timeline__inner">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className={`job ${job.type === 'Current' ? 'job--current' : ''}`}>
              <div className="job__meta">
                <span className="job__period">{job.period}</span>
                <span className="job__location">{job.location}</span>
                {job.type === 'Current' && <span className="job__badge">Now</span>}
              </div>
              <div className="job__content">
                <div className="job__header">
                  <h3 className="job__role">{job.role}</h3>
                  <span className="job__company">{job.company}</span>
                </div>
                <ul className="job__highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking */}
      <section className="speaking">
        <div className="speaking__inner">
          <p className="section-label">Speaking & Industry Events</p>
          <div className="speaking__grid">
            {SPEAKING.map(({ event, role, year, topic, location }) => (
              <div key={event} className="speak-card">
                <div className="speak-card__top">
                  <span className="speak-card__year">{year}</span>
                  <span className="speak-card__role">{role}</span>
                </div>
                <h3 className="speak-card__event">{event}</h3>
                {location && <span className="speak-card__loc">{location}</span>}
                <p className="speak-card__topic">"{topic}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills strip */}
      <section className="skills-strip">
        <div className="skills-strip__inner">
          <p className="section-label">Areas of Expertise</p>
          <div className="skills-list">
            {[
              'Media Localization', 'Dubbing & Subtitling', 'Production Strategy',
              'Business Development', 'Industry Partnerships', 'Team Leadership',
              'Content Distribution', 'Film Festival Strategy', 'Talent Development',
              'East African Media', 'Nigerian Media Market', 'Cultural Adaptation',
            ].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .experience { padding-top: 80px; }

        .page-header {
          background: var(--ink); color: var(--off-white);
          padding: 6rem 3rem 5rem;
        }
        .page-header__inner { max-width: 900px; margin: 0 auto; }
        .page-header__title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 700; line-height: 1.1;
          margin-top: 1rem;
        }
        .page-header__title em { font-style: italic; color: var(--sienna); }
        .section-label {
          font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--sienna); font-weight: 600;
        }

        /* Timeline */
        .timeline { padding: 7rem 3rem; background: var(--off-white); }
        .timeline__inner { max-width: 900px; margin: 0 auto; }

        .job {
          display: grid; grid-template-columns: 180px 1fr;
          gap: 3rem; padding: 3rem 0;
          border-top: 1px solid var(--light-gray);
        }
        .job--current { border-top-color: var(--sienna); }
        .job__meta {
          display: flex; flex-direction: column; gap: 0.4rem;
          padding-top: 0.25rem;
        }
        .job__period {
          font-size: 0.8rem; font-weight: 600;
          letter-spacing: 0.06em; color: var(--ink);
        }
        .job__location {
          font-size: 0.75rem; letter-spacing: 0.04em;
          color: var(--mid-gray);
        }
        .job__badge {
          display: inline-block; width: fit-content;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          background: var(--sienna); color: white;
          padding: 0.2rem 0.5rem;
          margin-top: 0.25rem;
        }

        .job__header { margin-bottom: 1.25rem; }
        .job__role {
          font-family: var(--font-display);
          font-size: 1.4rem; font-weight: 700;
          line-height: 1.2; margin-bottom: 0.35rem;
        }
        .job__company {
          font-size: 0.82rem; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--mid-gray);
        }
        .job__highlights {
          list-style: none; display: flex; flex-direction: column; gap: 0.6rem;
        }
        .job__highlights li {
          font-size: 0.92rem; line-height: 1.7; color: #4a4a4a;
          padding-left: 1.25rem; position: relative;
        }
        .job__highlights li::before {
          content: '—'; position: absolute; left: 0;
          color: var(--sienna); font-weight: 700;
        }

        /* Speaking */
        .speaking { padding: 7rem 3rem; background: var(--parchment); }
        .speaking__inner { max-width: 900px; margin: 0 auto; }
        .speaking__grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem; margin-top: 3rem;
        }
        .speak-card {
          background: var(--off-white);
          padding: 2rem; 
          border-top: 2px solid var(--sienna);
        }
        .speak-card__top {
          display: flex; justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .speak-card__year {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em;
          color: var(--mid-gray);
        }
        .speak-card__role {
          font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--sienna);
        }
        .speak-card__event {
          font-family: var(--font-display);
          font-size: 1.1rem; font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .speak-card__loc {
          font-size: 0.75rem; color: var(--mid-gray);
          display: block; margin-bottom: 0.75rem;
        }
        .speak-card__topic {
          font-size: 0.85rem; font-style: italic;
          line-height: 1.6; color: var(--mid-gray);
        }

        /* Skills */
        .skills-strip { padding: 5rem 3rem; background: var(--off-white); }
        .skills-strip__inner { max-width: 900px; margin: 0 auto; }
        .skills-list {
          display: flex; flex-wrap: wrap; gap: 0.75rem;
          margin-top: 2rem;
        }
        .skill-tag {
          font-size: 0.78rem; letter-spacing: 0.06em;
          border: 1px solid var(--light-gray);
          padding: 0.45rem 1rem;
          color: var(--mid-gray);
          transition: all 0.2s;
        }
        .skill-tag:hover {
          border-color: var(--sienna);
          color: var(--sienna);
        }

        @media (max-width: 768px) {
          .page-header { padding: 5rem 1.5rem 3.5rem; }
          .timeline { padding: 4rem 1.5rem; }
          .job { grid-template-columns: 1fr; gap: 1rem; padding: 2rem 0; }
          .job__meta { flex-direction: row; flex-wrap: wrap; align-items: center; gap: 0.75rem; }
          .speaking { padding: 4rem 1.5rem; }
          .skills-strip { padding: 3.5rem 1.5rem; }
        }
      `}</style>
    </main>
  );
}
