import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '2rem', textAlign: 'center',
      paddingTop: '80px',
    }}>
      <div>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '6rem', fontWeight: 700, lineHeight: 1, color: 'var(--light-gray)' }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, margin: '1rem 0' }}>Page not found</h1>
        <p style={{ color: 'var(--mid-gray)', marginBottom: '2rem' }}>This story hasn't been written yet.</p>
        <Link to="/" style={{ background: 'var(--sienna)', color: 'white', padding: '0.9rem 2rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Go Home
        </Link>
      </div>
    </main>
  );
}
