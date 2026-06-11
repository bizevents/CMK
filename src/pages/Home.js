import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero">
        {/* Animated background shapes */}
        <div className="hero__shapes" aria-hidden="true">
          <div className="shape shape--circle shape--1" />
          <div className="shape shape--blob shape--2" />
          <div className="shape shape--ring shape--3" />
          <div className="shape shape--circle shape--4" />
          <div className="shape shape--squiggle shape--5">
            <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30 Q40 5 70 30 Q100 55 130 30 Q160 5 190 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <div className="shape shape--star shape--6">✦</div>
          <div className="shape shape--dot-grid shape--7" />
        </div>

        <div className="hero__inner">
          {/* Left: text */}
          <div className="hero__text">
            <div className="hero__badge">
              <span className="badge__dot" />
              Media Executive · 25+ years
            </div>
            <h1 className="hero__headline">
              Caroline<br />
              <span className="hero__name-accent">Mbindyo</span><br />
              Koroso
            </h1>
            <p className="hero__body">
  Head of Kenya & Nigeria at TransPerfect Media. Founder and director of Biz Baz Events and the Bizarre Bazaar Festival. Building the infrastructure where African stories, creators, and audiences connect at scale, and making African storytelling land beautifully, loudly, in every language.
</p>
            <div className="hero__actions">
              <Link to="/about" className="btn-primary">Meet Caroline</Link>
              <Link to="/experience" className="btn-ghost">25 years of work →</Link>
            </div>
            <div className="hero__tags">
              {['Localization', 'Film', 'Nairobi',  'Storytelling','Curation','Events','Biz Baz Events', 'Bizarre Bazaar Festival'].map(t => (
                <span key={t} className="hero__tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: portrait placeholder */}
          <div className="hero__portrait">
            <div className="portrait__frame">
              <div className="portrait__img">
                <img src='images/1729248813709.jpg'/>
              </div>
              <div className="portrait__deco portrait__deco--1" />
              <div className="portrait__deco portrait__deco--2" />
            </div>
            <div className="portrait__stat portrait__stat--1">
              <span className="pstat__num">25+</span>
              <span className="pstat__label">Years in media</span>
            </div>
            <div className="portrait__stat portrait__stat--2">
              <span className="pstat__num">2</span>
              <span className="pstat__label">Markets led</span>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="hero__marquee">
          <div className="marquee__track">
            {Array(3).fill(['LOCALIZATION', '✦', 'NAIROBI', '✦','EVENTS', '✦','CURATION', '✦','BIZARRE BAZAAR', '✦','FILM FESTIVAL', '✦', 'NOLLYWOOD', '✦', 'DUBBING', '✦', 'EAST AFRICA', '✦', 'STORYTELLING', '✦', 'PRODUCTION', '✦']).flat().map((w, i) => (
              <span key={i} className="marquee__item">{w}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="what">
        <div className="what__inner">
          <div className="what__label-row">
            <span className="eyebrow">What I do</span>
            <div className="eyebrow__line" />
          </div>
          <h2 className="what__title">
            Where culture meets<br /><em>craft.</em>
          </h2>
          <div className="what__grid">
            {[
              { icon: '🎬', color: '#FF5733', title: 'Localization', body: 'Dubbing, subtitling, cultural adaptation — turning global content into something Africa actually recognises as its own.' },
              { icon: '🌍', color: '#00D4A0', title: 'Market Leadership', body: 'Running Kenya and Nigeria media markets for TransPerfect Media, while building event and cultural platforms that connect creators, brands, and audiences across Africa with BizBaz Events.' },
              { icon: '🎞', color: '#FFE566', title: 'Production Strategy', body: 'From pre-production to broadcast, building the infrastructure African stories deserve.' },
              { icon: '🤝', color: '#E8D5FF', title: 'Industry Building', body: 'Training the next generation, brokering partnerships, and building ecosystems like Biz Baz Events and the Bizarre Bazaar Festival that turn African creative energy into structured, global-facing platforms.' },
            ].map(({ icon, color, title, body }) => (
              <div key={title} className="what-card" style={{ '--card-accent': color }}>
                <div className="what-card__icon">{icon}</div>
                <h3 className="what-card__title">{title}</h3>
                <p className="what-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="quote-section">
        <div className="quote-section__deco" aria-hidden="true">✦</div>
        <div className="quote-section__inner">
          <p className="big-quote">
          "The Kenyan industry doesn't lack talent. It never has. What it lacked was organisation — systems and platforms like festivals, events, and networks that turn individual brilliance into something the world can't ignore."
          </p>
          <span className="big-quote__attr">— Caroline Mbindyo-Koroso</span>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="moments">
        <div className="moments__inner">
          <span className="eyebrow">Recent moments</span>
          <div className="moments__list">
            {[
                { year: '2010 - present', label: 'Director — Bizarre Bazaar Festival' },
                { year: '2019 - present', label: 'Head — Hiventy Kenya & Nigeria, TransPerfect Media' },
                { year: '2010', label: 'Founder — Biz Baz Events' },
                { year: '2023', label: 'Reel Reflections Film Festival — Nairobi National Museum' },
                { year: '2023', label: 'Nigerian International Film Summit, Lagos' },
                { year: '2023', label: 'MIP Africa · FAME Week Representative' },
                { year: '2023', label: 'Talanta Institute Training Initiative Lead' },
              ].map(({ year, label }) => (
              <div key={label} className="moment-row">
                <span className="moment-year">{year}</span>
                <span className="moment-dash">—</span>
                <span className="moment-label">{label}</span>
              </div>
            ))}
          </div>
          <Link to="/experience" className="moments__cta">See full experience →</Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="home-cta__blob" aria-hidden="true" />
        <div className="home-cta__blob2" aria-hidden="true" />
        <div className="home-cta__inner">
          <span className="eyebrow eyebrow--light">Let's connect</span>
          <h2 className="home-cta__title">Got a story<br />worth telling?</h2>
          <a href="mailto:cazznairobi@gmail.com" className="btn-cta">
            Start a conversation ✦
          </a>
        </div>
      </section>

      <style>{`
        /* ── Shapes ── */
        .hero { position: relative; overflow: hidden; background: var(--cream); min-height: 100vh; display: flex; flex-direction: column; }
        .hero__shapes { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .shape { position: absolute; }
        .shape--1 {
          width: 420px; height: 420px; border-radius: 50%;
          background: var(--coral); opacity: 0.09;
          top: -120px; right: -80px;
          animation: floatA 9s ease-in-out infinite;
        }
        .shape--2 {
          width: 280px; height: 320px;
          border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
          background: var(--mint); opacity: 0.12;
          bottom: 60px; left: -60px;
          animation: morphBlob 12s ease-in-out infinite;
        }
        .shape--3 {
          width: 180px; height: 180px; border-radius: 50%;
          border: 3px solid var(--tangerine); opacity: 0.25;
          top: 180px; left: 10%;
          animation: floatB 7s ease-in-out infinite;
        }
        .shape--4 {
          width: 80px; height: 80px; border-radius: 50%;
          background: var(--yellow); opacity: 0.55;
          bottom: 140px; right: 12%;
          animation: floatA 6s ease-in-out infinite reverse;
        }
        .shape--5 {
          width: 200px; color: var(--coral); opacity: 0.3;
          top: 40%; left: 5%;
          animation: floatB 10s ease-in-out infinite;
        }
        .shape--6 {
          font-size: 3rem; color: var(--tangerine); opacity: 0.35;
          top: 30%; right: 8%;
          animation: spin 20s linear infinite;
        }
        .shape--7 {
          width: 120px; height: 120px; opacity: 0.18;
          bottom: 20%; left: 60%;
          background-image: radial-gradient(circle, var(--ink) 1.5px, transparent 1.5px);
          background-size: 12px 12px;
          animation: floatA 8s ease-in-out infinite;
        }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-15px) rotate(6deg)} }
        @keyframes morphBlob {
          0%,100%{border-radius:60% 40% 70% 30% / 50% 60% 40% 50%}
          33%{border-radius:40% 60% 30% 70% / 60% 40% 60% 40%}
          66%{border-radius:70% 30% 50% 50% / 30% 70% 50% 50%}
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Hero inner ── */
        .hero__inner {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 4rem;
          padding: 9rem 4rem 4rem;
          flex: 1;
          max-width: 1200px; margin: 0 auto; width: 100%;
        }
        .hero__badge {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: var(--ink); color: var(--cream);
          padding: 0.45rem 1rem; border-radius: 100px;
          font-family: var(--font-display);
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 1.75rem;
        }
        .badge__dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--mint); flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:0.6} }
        .hero__headline {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 800; line-height: 0.95;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
        }
        .hero__name-accent { color: var(--coral); }
        .hero__body {
          font-size: 1.05rem; line-height: 1.75;
          color: var(--mid); max-width: 420px;
          margin-bottom: 2rem;
        }
        .hero__actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .btn-primary {
          display: inline-block;
          background: var(--coral); color: white;
          font-family: var(--font-display); font-size: 0.85rem; font-weight: 700;
          letter-spacing: 0.04em; padding: 0.85rem 1.75rem;
          border-radius: 100px;
          transition: transform 0.2s, background 0.2s;
        }
        .btn-primary:hover { background: var(--ink); transform: scale(1.04); }
        .btn-ghost {
          display: inline-block;
          color: var(--ink);
          font-family: var(--font-display); font-size: 0.85rem; font-weight: 700;
          letter-spacing: 0.04em; padding: 0.85rem 0;
          border-bottom: 2px solid var(--ink);
          transition: color 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover { color: var(--coral); border-color: var(--coral); }
        .hero__tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .hero__tag {
          font-family: var(--font-display); font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          border: 1.5px solid rgba(26,26,46,0.2); padding: 0.3rem 0.75rem;
          border-radius: 100px; color: var(--mid);
        }

        /* ── Portrait ── */
        .hero__portrait { position: relative; display: flex; justify-content: center; }
        .portrait__frame { position: relative; width: 340px; height: 420px; }
        .portrait__img {
              width: 100%;
              height: 100%;
              border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
              overflow: hidden;
              position: relative;
          }

          /* IMPORTANT: style the actual img */
          .portrait__img img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              display: block;
          }
        .portrait__initials {
          font-family: var(--font-display);
          font-size: 4rem; font-weight: 800;
          color: rgba(26,26,46,0.18); letter-spacing: -0.02em;
        }
        .portrait__deco {
          position: absolute; border-radius: 50%;
        }
        .portrait__deco--1 {
          width: 80px; height: 80px;
          background: var(--coral);
          bottom: -20px; left: -20px;
          animation: floatA 5s ease-in-out infinite;
        }
        .portrait__deco--2 {
          width: 50px; height: 50px;
          background: var(--mint);
          top: 20px; right: -16px;
          animation: floatB 7s ease-in-out infinite;
        }
        .portrait__stat {
          position: absolute;
          background: var(--ink); color: var(--cream);
          padding: 0.75rem 1.1rem;
          border-radius: 12px;
        }
        .portrait__stat--1 { bottom: 60px; left: -50px; }
        .portrait__stat--2 { top: 60px; right: -40px; }
        .pstat__num {
          display: block;
          font-family: var(--font-display); font-size: 1.6rem; font-weight: 800;
          letter-spacing: -0.03em; line-height: 1;
        }
        .pstat__label {
          font-size: 0.7rem; color: rgba(255,248,240,0.6);
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        /* ── Marquee ── */
        .hero__marquee {
          position: relative; z-index: 1;
          background: var(--ink); overflow: hidden;
          padding: 0.9rem 0; margin-top: auto;
        }
        .marquee__track {
          display: flex; gap: 2.5rem; width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee__item {
          font-family: var(--font-display); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.16em; color: var(--cream); white-space: nowrap; opacity: 0.7;
        }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* ── Eyebrow ── */
        .eyebrow {
          font-family: var(--font-display); font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase; color: var(--coral);
        }
        .eyebrow--light { color: var(--mint); }
        .eyebrow__line { flex: 1; height: 1px; background: var(--light); }
        .eyebrow-row { display: flex; align-items: center; gap: 1.25rem; }

        /* ── What I Do ── */
        .what { padding: 7rem 4rem; background: var(--warm-white); }
        .what__inner { max-width: 1100px; margin: 0 auto; }
        .what__label-row { display: flex; align-items: center; gap: 1.25rem; margin-bottom: 2rem; }
        .what__title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800; letter-spacing: -0.03em;
          line-height: 1.05; margin-bottom: 3.5rem;
        }
        .what__title em { font-style: italic; color: var(--coral); }
        .what__grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .what-card {
          background: var(--cream);
          padding: 2rem;
          border-radius: 20px;
          border-top: 4px solid var(--card-accent);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .what-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(26,26,46,0.08); }
        .what-card__icon { font-size: 2rem; margin-bottom: 1rem; }
        .what-card__title {
          font-family: var(--font-display); font-size: 1.15rem; font-weight: 800;
          letter-spacing: -0.01em; margin-bottom: 0.65rem;
        }
        .what-card__body { font-size: 0.92rem; line-height: 1.72; color: var(--mid); }

        /* ── Quote ── */
        .quote-section {
          background: var(--coral); color: white;
          padding: 7rem 4rem; text-align: center;
          position: relative; overflow: hidden;
        }
        .quote-section__deco {
          position: absolute; top: 2rem; left: 3rem;
          font-size: 6rem; opacity: 0.12; line-height: 1;
          animation: spin 30s linear infinite;
        }
        .quote-section__inner { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
        .big-quote {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.5vw, 2rem);
          font-weight: 600; line-height: 1.55;
          letter-spacing: -0.01em; margin-bottom: 1.5rem;
        }
        .big-quote__attr {
          font-size: 0.8rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.75;
        }

        /* ── Moments ── */
        .moments { padding: 7rem 4rem; background: var(--warm-white); }
        .moments__inner { max-width: 800px; margin: 0 auto; }
        .moments__list { margin: 2.5rem 0 2rem; display: flex; flex-direction: column; }
        .moment-row {
          display: grid; grid-template-columns: 52px 20px 1fr;
          align-items: baseline; gap: 0.75rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--light);
          transition: padding-left 0.2s;
        }
        .moment-row:hover { padding-left: 0.5rem; }
        .moment-year { font-family: var(--font-display); font-size: 0.8rem; font-weight: 700; color: var(--coral); }
        .moment-dash { color: var(--light); font-weight: 300; }
        .moment-label { font-size: 0.95rem; color: var(--ink); }
        .moments__cta {
          display: inline-block;
          font-family: var(--font-display); font-size: 0.85rem; font-weight: 700;
          color: var(--coral);
          border-bottom: 2px solid var(--coral); padding-bottom: 2px;
          transition: opacity 0.2s;
        }
        .moments__cta:hover { opacity: 0.65; }

        /* ── Home CTA ── */
        .home-cta {
          background: var(--ink); color: var(--cream);
          padding: 8rem 4rem; text-align: center;
          position: relative; overflow: hidden;
        }
        .home-cta__blob {
          position: absolute; top: -100px; left: -100px;
          width: 350px; height: 350px; border-radius: 50%;
          background: var(--coral); opacity: 0.12;
          animation: floatA 10s ease-in-out infinite;
        }
        .home-cta__blob2 {
          position: absolute; bottom: -80px; right: -80px;
          width: 280px; height: 280px; border-radius: 50%;
          background: var(--mint); opacity: 0.1;
          animation: floatB 12s ease-in-out infinite;
        }
        .home-cta__inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .home-cta__title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800; letter-spacing: -0.03em;
          line-height: 1.05; margin: 1rem 0 2.5rem;
        }
        .btn-cta {
          display: inline-block;
          background: var(--coral); color: white;
          font-family: var(--font-display); font-size: 1rem; font-weight: 800;
          letter-spacing: 0.02em; padding: 1rem 2.5rem;
          border-radius: 100px;
          transition: transform 0.2s, background 0.2s;
        }
        .btn-cta:hover { background: var(--mint); color: var(--ink); transform: scale(1.05); }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .hero__inner { grid-template-columns: 1fr; padding: 7rem 2rem 3rem; gap: 3rem; }
          .hero__portrait { order: -1; }
          .portrait__frame { width: 260px; height: 320px; }
          .portrait__stat--1 { left: -10px; bottom: -10px; }
          .portrait__stat--2 { right: -10px; top: 30px; }
          .what { padding: 5rem 1.5rem; }
          .quote-section { padding: 5rem 1.5rem; }
          .moments { padding: 5rem 1.5rem; }
          .home-cta { padding: 5rem 1.5rem; }
          .shape--1 { width: 250px; height: 250px; top: -60px; right: -40px; }
        }
        @media (max-width: 600px) {
          .hero__portrait { display: none; }
          .hero__inner { padding: 7rem 1.5rem 2rem; }
        }
      `}</style>
    </main>
  );
}
