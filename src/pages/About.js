import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="about">
      {/* Page header */}
      <section className="page-header">
        <div className="page-header__inner">
          <p className="section-label">About</p>
          <h1 className="page-header__title">
            A career built<br />on <em>bridging worlds.</em>
          </h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="bio">
        <div className="bio__inner">
          <div className="bio__portrait">
            <div className="bio__portrait-box">
              <div className="bio__portrait-placeholder">CMK</div>
            </div>
            <div className="bio__portrait-caption">
              <span>Caroline Mbindyo-Koroso</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
          <div className="bio__text">
            <p className="bio__lead">
              With over 25 years navigating the intersection of media, language, and culture,
              Caroline Mbindyo-Koroso is one of East Africa's foremost voices in
              media localization and production strategy.
            </p>
            <p>
              Currently serving as Head of Kenya and Nigeria at TransPerfect Media
              (Hiventy), Caroline leads the charge in bringing world-class media
              services to two of Africa's most dynamic markets. Her work encompasses
              dubbing, subtitling, cultural adaptation, and production workflow
              development — all with a deep commitment to preserving cultural
              authenticity while serving global audiences.
            </p>
            <p>
              A graduate of the Catholic University of Eastern Africa in Nairobi,
              Caroline has built her career across multiple disciplines — from
              events and production at Biz Baz Events and Freestyle Media & Events,
              to her current executive role shaping the future of African content
              on the world stage.
            </p>
            <p>
              She is a regular voice at international media events including
              MIP Africa and FAME Week, and has played a key role in nurturing
              Kenya's emerging film industry through partnerships with the National
              Museum of Kenya, Kenya Film Commission, and Talanta Institute.
            </p>
            <div className="bio__links">
              <a href="https://www.linkedin.com/in/caroline-mbindyo-koroso/" target="_blank" rel="noreferrer" className="text-link">
                LinkedIn Profile ↗
              </a>
              <Link to="/experience" className="text-link">View full experience →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="values__inner">
          <p className="section-label">What Drives the Work</p>
          <div className="values__grid">
            {[
              { title: 'Cultural Authenticity', body: 'Every story carries the fingerprint of where it was born. Localization done well doesn\'t translate — it transforms.' },
              { title: 'Industry Building', body: 'Great industries are made of great people. Mentoring the next generation of African filmmakers is not charity — it\'s investment.' },
              { title: 'Strategic Partnerships', body: 'The most powerful media companies don\'t work alone. They build ecosystems that lift every participant.' },
              { title: 'Continent-First Thinking', body: 'Africa\'s stories deserve African infrastructure, African distribution, and African pride on the global stage.' },
            ].map(({ title, body }) => (
              <div key={title} className="value-item">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education">
        <div className="education__inner">
          <p className="section-label">Education</p>
          <div className="edu-row">
            <div className="edu-institution">Catholic University of Eastern Africa</div>
            <div className="edu-detail">Nairobi, Kenya</div>
          </div>
        </div>
      </section>

      <style>{`
        .about { padding-top: 80px; }

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

        /* Bio */
        .bio { padding: 7rem 3rem; background: var(--off-white); }
        .bio__inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 300px 1fr;
          gap: 6rem; align-items: start;
        }
        .bio__portrait-box {
          aspect-ratio: 3/4;
          background: var(--parchment);
          display: flex; align-items: center; justify-content: center;
          border-bottom: 3px solid var(--sienna);
        }
        .bio__portrait-placeholder {
          font-family: var(--font-display);
          font-size: 3rem; font-weight: 700;
          color: var(--light-gray);
          letter-spacing: 0.1em;
        }
        .bio__portrait-caption {
          display: flex; flex-direction: column;
          gap: 0.25rem; padding-top: 1rem;
          font-size: 0.78rem; color: var(--mid-gray);
          letter-spacing: 0.06em;
        }
        .bio__portrait-caption span:first-child { font-weight: 600; color: var(--ink); }

        .bio__text { display: flex; flex-direction: column; gap: 1.4rem; }
        .bio__lead {
          font-family: var(--font-display);
          font-size: 1.3rem; font-weight: 400; font-style: italic;
          line-height: 1.55; color: var(--ink);
        }
        .bio__text p {
          font-size: 1rem; line-height: 1.8; color: #444;
        }
        .bio__links {
          display: flex; gap: 2rem; margin-top: 0.5rem; flex-wrap: wrap;
        }
        .text-link {
          font-size: 0.85rem; font-weight: 600;
          letter-spacing: 0.06em; color: var(--sienna);
          border-bottom: 1px solid var(--sienna);
          padding-bottom: 2px;
          transition: opacity 0.2s;
        }
        .text-link:hover { opacity: 0.7; }

        /* Values */
        .values { padding: 7rem 3rem; background: var(--parchment); }
        .values__inner { max-width: 1100px; margin: 0 auto; }
        .values__grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 3rem; margin-top: 3rem;
        }
        .value-item h3 {
          font-family: var(--font-display);
          font-size: 1.15rem; font-weight: 600;
          margin-bottom: 0.75rem; line-height: 1.3;
        }
        .value-item p {
          font-size: 0.9rem; line-height: 1.75; color: var(--mid-gray);
        }

        /* Education */
        .education { padding: 4rem 3rem; border-top: 1px solid var(--light-gray); }
        .education__inner { max-width: 900px; margin: 0 auto; }
        .edu-row {
          display: flex; justify-content: space-between; align-items: baseline;
          gap: 2rem; padding: 1.5rem 0;
          border-bottom: 1px solid var(--light-gray);
          margin-top: 1.5rem;
        }
        .edu-institution {
          font-family: var(--font-display);
          font-size: 1.15rem; font-weight: 600;
        }
        .edu-detail {
          font-size: 0.82rem; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--mid-gray);
        }

        @media (max-width: 900px) {
          .bio__inner { grid-template-columns: 1fr; gap: 3rem; }
          .bio__portrait-box { max-width: 280px; aspect-ratio: 1/1; }
        }
        @media (max-width: 600px) {
          .about { }
          .page-header { padding: 5rem 1.5rem 3.5rem; }
          .bio { padding: 4rem 1.5rem; }
          .values { padding: 4rem 1.5rem; }
          .education { padding: 3rem 1.5rem; }
          .edu-row { flex-direction: column; gap: 0.25rem; }
        }
      `}</style>
    </main>
  );
}
