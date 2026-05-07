import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react'
import './blog/Blog.css'

const CATEGORY_COLORS: Record<string, string> = {
  'Civil Engineering':  '#1a56db',
  'Renewable Energy':   '#057a55',
  'IT Infrastructure':  '#7c3aed',
  'Operations':         '#b45309',
  'Company':            '#374151',
}

const posts = [
  {
    slug: 'nigeria-road-infrastructure-gap',
    category: 'Civil Engineering',
    title: "How Nigeria's road infrastructure gap is driving private-sector investment",
    excerpt: "Federal budget allocations have risen year-on-year, yet the maintenance backlog on national highways continues to grow. We examine why — and what it means for established contractors.",
    date: 'Apr 28, 2025',
    readTime: '6 min',
    author: 'Moftech Editorial',
    img: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    slug: 'solar-microgrids-kano-state',
    category: 'Renewable Energy',
    title: "Solar microgrids: what Kano State's rollout teaches us about deployment at scale",
    excerpt: "Distributed energy infrastructure in rural settings demands a different engineering playbook. Here's what we learned electrifying 12 communities in 14 months.",
    date: 'Mar 14, 2025',
    readTime: '8 min',
    author: 'Energy Division',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'tier-2-data-centre-lagos',
    category: 'IT Infrastructure',
    title: 'Building a Tier II data centre in Lagos: lessons from the field',
    excerpt: "Structured cabling, precision cooling, and power redundancy — inside the 18-month build of a financial institution's primary data facility in Ikoyi.",
    date: 'Feb 6, 2025',
    readTime: '5 min',
    author: 'IT Division',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'government-contract-management-2024',
    category: 'Operations',
    title: "Government contract management in 2024: what's changed — and what hasn't",
    excerpt: "Procurement reform has reshaped how federal contracts are awarded and monitored. We break down what the changes mean for infrastructure firms with active government relationships.",
    date: 'Jan 22, 2025',
    readTime: '7 min',
    author: 'Moftech Editorial',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'staff-development-construction',
    category: 'Company',
    title: 'Why we formalised career progression at Moftech — and what we found',
    excerpt: "Documenting staff development wasn't just about compliance. It changed how we recruit, retain, and promote — and the data surprised us.",
    date: 'Dec 9, 2024',
    readTime: '4 min',
    author: 'HR & Operations',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'coren-requirements-civil-engineers',
    category: 'Civil Engineering',
    title: 'Understanding COREN requirements: a practical guide for Nigerian engineers',
    excerpt: 'From initial registration to full professional status — what the Council for the Regulation of Engineering in Nigeria actually requires and how long each stage takes.',
    date: 'Nov 3, 2024',
    readTime: '6 min',
    author: 'Civil Division',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
]

const CATS = ['All', 'Civil Engineering', 'Renewable Energy', 'IT Infrastructure', 'Operations', 'Company']

const featured = posts.find(p => p.featured)!
const rest     = posts.filter(p => !p.featured)

export default function Blog() {
  const [activeCat, setActiveCat] = useState('All')

  const filtered = activeCat === 'All'
    ? rest
    : rest.filter(p => p.category === activeCat)

  return (
    <div className="blog-page">

      {/* ── Hero ── */}
      <section className="blog-hero">
        <div className="blog-container">
          <span className="blog-eyebrow">Insights &amp; Updates</span>
          <h1 className="blog-hero__title">Industry thinking from the Moftech team</h1>
          <p className="blog-hero__sub">
            Engineering, energy, technology, and the business of building Nigeria —
            written by the people doing the work.
          </p>
        </div>
      </section>

      {/* ── Featured post ── */}
      <section className="blog-featured-wrap">
        <div className="blog-container">
          <Link to={`/blog/${featured.slug}`} className="blog-featured">
            <div
              className="blog-featured__img"
              style={{ backgroundImage: `url(${featured.img})` }}
              aria-hidden="true"
            >
              <div className="blog-featured__img-overlay" />
            </div>
            <div className="blog-featured__body">
              <div className="blog-featured__meta">
                <span
                  className="blog-cat-badge"
                  style={{ '--cat-color': CATEGORY_COLORS[featured.category] } as React.CSSProperties}
                >
                  {featured.category}
                </span>
                <span className="blog-featured__label">Featured</span>
              </div>
              <h2 className="blog-featured__title">{featured.title}</h2>
              <p className="blog-featured__excerpt">{featured.excerpt}</p>
              <div className="blog-featured__footer">
                <div className="blog-post__byline">
                  <span className="blog-post__author">{featured.author}</span>
                  <span className="blog-post__dot" />
                  <Calendar size={12} />
                  <span>{featured.date}</span>
                  <span className="blog-post__dot" />
                  <Clock size={12} />
                  <span>{featured.readTime} read</span>
                </div>
                <span className="blog-featured__cta">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <div className="blog-filter">
        <div className="blog-container">
          <div className="blog-filter__tabs">
            {CATS.map(cat => (
              <button
                key={cat}
                type="button"
                className={`blog-filter__tab${activeCat === cat ? ' blog-filter__tab--active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Post grid ── */}
      <section className="blog-grid-section">
        <div className="blog-container">
          {filtered.length === 0 ? (
            <p className="blog-empty">No posts in this category yet.</p>
          ) : (
            <div className="blog-grid">
              {filtered.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                  <div
                    className="blog-card__img"
                    style={{ backgroundImage: `url(${post.img})` }}
                    aria-hidden="true"
                  >
                    <div className="blog-card__img-overlay" />
                    <span
                      className="blog-cat-badge blog-cat-badge--top"
                      style={{ '--cat-color': CATEGORY_COLORS[post.category] } as React.CSSProperties}
                    >
                      <Tag size={9} />
                      {post.category}
                    </span>
                  </div>
                  <div className="blog-card__body">
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-post__byline blog-post__byline--card">
                      <span className="blog-post__author">{post.author}</span>
                      <span className="blog-post__dot" />
                      <Clock size={11} />
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="blog-cta">
        <div className="blog-container">
          <div className="blog-cta__inner">
            <div className="blog-cta__text">
              <h2 className="blog-cta__title">Stay in the loop</h2>
              <p className="blog-cta__sub">
                New articles on infrastructure, technology, and energy delivery in Nigeria —
                direct to your inbox, no noise.
              </p>
            </div>
            <form className="blog-cta__form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="blog-cta__input"
                required
              />
              <button type="submit" className="blog-cta__submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
