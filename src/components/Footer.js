import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__blob" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__left">
          <p className="footer__logo">CMK<span>.</span></p>
          <p className="footer__sub">Nairobi · Kenya · Lagos · The World</p>
        </div>
        <nav className="footer__nav">
          {[['/', 'Home'], ['/about', 'About'], ['/experience', 'Work'], ['/blog', 'Journal']].map(([to, l]) => (
            <NavLink key={to} to={to} end>{l}</NavLink>
          ))}
        </nav>
        <div>
          <a href="https://www.linkedin.com/in/caroline-mbindyo-koroso/" target="_blank" rel="noreferrer" className="footer__linkedin">
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="footer__bar">
        <span>© {new Date().getFullYear()} Caroline Mbindyo-Koroso</span>
        <span>25+ years shaping African media</span>
      </div>
      <style>{`
        .footer {
          background: var(--ink); color: var(--cream);
          padding: 5rem 2.5rem 2rem;
          position: relative; overflow: hidden;
        }
        .footer__blob {
          position: absolute; top: -80px; right: -60px;
          width: 300px; height: 300px; border-radius: 50%;
          background: var(--coral); opacity: 0.08;
          pointer-events: none;
        }
        .footer__inner {
          position: relative; z-index: 1;
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 3rem; flex-wrap: wrap;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,248,240,0.1);
        }
        .footer__logo {
          font-family: var(--font-display);
          font-size: 2.5rem; font-weight: 800;
          letter-spacing: -0.03em; margin-bottom: 0.5rem;
        }
        .footer__logo span { color: var(--coral); }
        .footer__sub { font-size: 0.8rem; color: rgba(255,248,240,0.45); letter-spacing: 0.06em; }
        .footer__nav { display: flex; flex-direction: column; gap: 0.6rem; }
        .footer__nav a {
          font-family: var(--font-display); font-size: 0.8rem;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,248,240,0.55); transition: color 0.2s;
        }
        .footer__nav a:hover { color: var(--mint); }
        .footer__linkedin {
          font-family: var(--font-display); font-size: 0.85rem; font-weight: 700;
          color: var(--mint); letter-spacing: 0.04em;
          transition: opacity 0.2s;
        }
        .footer__linkedin:hover { opacity: 0.7; }
        .footer__bar {
          position: relative; z-index: 1;
          display: flex; justify-content: space-between;
          padding-top: 2rem; font-size: 0.75rem;
          color: rgba(255,248,240,0.3);
        }
        @media (max-width: 600px) {
          .footer { padding: 3.5rem 1.5rem 1.5rem; }
          .footer__inner { flex-direction: column; gap: 2rem; }
          .footer__bar { flex-direction: column; gap: 0.4rem; }
        }
      `}</style>
    </footer>
  );
}