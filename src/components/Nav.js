import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--open' : ''}`}>
      <NavLink to="/" className="nav__logo">CMK<span className="nav__dot">.</span></NavLink>

      <button className={`nav__burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {[['/', 'Home'], ['/about', 'About'], ['/experience', 'Work'], ['/blog', 'Journal']].map(([to, label]) => (
          <li key={to}>
            <NavLink to={to} end className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
          </li>
        ))}
        <li><a href="mailto:caroline@transperfect.com" className="nav__cta">Say hello ✦</a></li>
      </ul>

      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.5rem 2.5rem;
          transition: all 0.35s ease;
        }
        .nav--scrolled {
          background: rgba(255,252,247,0.92);
          backdrop-filter: blur(16px);
          padding: 1rem 2.5rem;
          border-bottom: 1.5px solid var(--light);
        }
        .nav__logo {
          font-family: var(--font-display);
          font-size: 1.5rem; font-weight: 800;
          color: var(--ink); letter-spacing: -0.02em;
        }
        .nav__dot { color: var(--coral); }
        .nav__links { display: flex; align-items: center; gap: 2rem; list-style: none; }
        .nav__links a {
          font-family: var(--font-display);
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--ink); transition: color 0.2s;
          position: relative;
        }
        .nav__links a.active { color: var(--coral); }
        .nav__links a:hover { color: var(--coral); }
        .nav__cta {
          background: var(--coral); color: white !important;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          font-size: 0.8rem !important;
          transition: transform 0.2s, background 0.2s !important;
        }
        .nav__cta:hover { background: var(--ink) !important; transform: scale(1.04); }
        .nav__burger { display: none; flex-direction: column; gap: 5px; z-index: 200; }
        .nav__burger span { display: block; width: 24px; height: 2px; background: var(--ink); border-radius: 2px; transition: all 0.3s; }
        .nav__burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav__burger.open span:nth-child(2) { opacity: 0; }
        .nav__burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        @media (max-width: 768px) {
          .nav { padding: 1.25rem 1.5rem; }
          .nav--scrolled { padding: 0.875rem 1.5rem; }
          .nav__burger { display: flex; }
          .nav__links {
            position: fixed; inset: 0;
            background: var(--ink);
            flex-direction: column; justify-content: center; gap: 2.5rem;
            opacity: 0; pointer-events: none; transition: opacity 0.3s;
          }
          .nav__links--open { opacity: 1; pointer-events: all; }
          .nav__links a { color: var(--cream) !important; font-size: 1.4rem !important; }
          .nav__cta { background: var(--coral) !important; }
          .nav__burger.open span { background: white; }
        }
      `}</style>
    </nav>
  );
}