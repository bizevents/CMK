import { useEffect } from 'react';

/**
 * Blog / Journal page
 *
 * Supabase integration notes:
 * ──────────────────────────────────────────────────────
 * Expected table schema (posts):
 *   id          uuid primary key
 *   title       text
 *   slug        text unique
 *   excerpt     text
 *   body        text (markdown or HTML)
 *   cover_url   text
 *   category    text
 *   published_at timestamptz
 *   published   boolean
 *
 * To wire up:
 *   1. npm install @supabase/supabase-js
 *   2. Create src/lib/supabase.js:
 *      import { createClient } from '@supabase/supabase-js'
 *      export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
 *   3. Replace the empty-state render below with a useEffect that fetches:
 *      const { data } = await supabase.from('posts')
 *        .select('*').eq('published', true).order('published_at', { ascending: false })
 *   4. Map data into <PostCard /> components
 * ──────────────────────────────────────────────────────
 */

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="6" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="16" x2="34" y2="16" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="28" x2="26" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <h2 className="empty-state__heading">Coming soon.</h2>
      <p className="empty-state__body">
        Caroline's journal — thoughts on media, Africa's creative economy,
        localization, and the stories worth telling — is on its way.
      </p>
    </div>
  );
}

// ─── Swap this with real posts from Supabase ───────────────────────────────
const POSTS = []; // Replace with fetched data

function PostCard({ post }) {
  return (
    <article className="post-card">
      {post.cover_url && (
        <div className="post-card__cover">
          <img src={post.cover_url} alt={post.title} />
        </div>
      )}
      <div className="post-card__body">
        {post.category && <span className="post-card__cat">{post.category}</span>}
        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <div className="post-card__footer">
          <span className="post-card__date">
            {new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <a href={`/blog/${post.slug}`} className="post-card__link">Read →</a>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="blog">
      <section className="page-header">
        <div className="page-header__inner">
          <p className="section-label">Journal</p>
          <h1 className="page-header__title">
            Perspectives on<br /><em>African media.</em>
          </h1>
          {POSTS.length > 0 && (
            <p className="page-header__sub">
              Thoughts on localization, film, and the business of storytelling.
            </p>
          )}
        </div>
      </section>

      <section className="blog__content">
        <div className="blog__inner">
          {POSTS.length === 0
            ? <EmptyState />
            : (
              <div className="posts-grid">
                {POSTS.map(post => <PostCard key={post.id} post={post} />)}
              </div>
            )
          }
        </div>
      </section>

      <style>{`
        .blog { padding-top: 80px; min-height: 100vh; }

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
        .page-header__sub {
          margin-top: 1.25rem;
          font-size: 1rem; color: rgba(240,235,225,0.65);
          max-width: 480px; line-height: 1.7;
        }
        .section-label {
          font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--sienna); font-weight: 600;
        }

        .blog__content {
          padding: 7rem 3rem;
          background: var(--off-white);
          min-height: 50vh;
        }
        .blog__inner { max-width: 1100px; margin: 0 auto; }

        /* Empty state */
        .empty-state {
          max-width: 440px; margin: 0 auto;
          text-align: center; padding: 4rem 0;
        }
        .empty-state__icon { color: var(--light-gray); margin-bottom: 1.5rem; }
        .empty-state__heading {
          font-family: var(--font-display);
          font-size: 2rem; font-weight: 700;
          margin-bottom: 1rem;
        }
        .empty-state__body {
          font-size: 1rem; line-height: 1.75;
          color: var(--mid-gray);
        }

        /* Posts grid */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        .post-card {
          border: 1px solid var(--light-gray);
          overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .post-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .post-card__cover { overflow: hidden; aspect-ratio: 16/9; }
        .post-card__cover img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .post-card:hover .post-card__cover img { transform: scale(1.04); }
        .post-card__body { padding: 1.75rem; }
        .post-card__cat {
          font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--sienna); font-weight: 600;
          display: block; margin-bottom: 0.6rem;
        }
        .post-card__title {
          font-family: var(--font-display);
          font-size: 1.25rem; font-weight: 700;
          line-height: 1.3; margin-bottom: 0.75rem;
        }
        .post-card__excerpt {
          font-size: 0.9rem; line-height: 1.7; color: var(--mid-gray);
          margin-bottom: 1.25rem;
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .post-card__footer {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.78rem;
        }
        .post-card__date { color: var(--mid-gray); }
        .post-card__link {
          color: var(--sienna); font-weight: 600;
          transition: gap 0.2s;
        }
        .post-card__link:hover { text-decoration: underline; }

        @media (max-width: 600px) {
          .page-header { padding: 5rem 1.5rem 3.5rem; }
          .blog__content { padding: 4rem 1.5rem; }
        }
      `}</style>
    </main>
  );
}
