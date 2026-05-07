import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Zap, Users, MapPin, ArrowRight, Award, TrendingUp } from 'lucide-react'
import './about/About.css'

const stats = [
  { value: '2004', label: 'Year Founded' },
  { value: '300+', label: 'Staff Members' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '18',   label: 'Nigerian States' },
]

const milestones = [
  { year: '2004', event: 'Moftech Construzion incorporated in Abuja, FCT' },
  { year: '2008', event: 'First federal government road contract awarded' },
  { year: '2013', event: 'IT Infrastructure division launched' },
  { year: '2018', event: 'Renewable Energy division established' },
  { year: '2022', event: 'Surpassed 300 staff members nationwide' },
  { year: '2024', event: 'Delivered 3 concurrent federal government projects' },
]

const projects = [
  {
    name: 'Abuja Ring Road Phase 2 Rehabilitation',
    type: 'Federal Road Infrastructure',
    year: '2023',
    location: 'Abuja, FCT',
    desc: 'Full rehabilitation of 38 km of arterial road connecting key federal districts, delivered under the Federal Ministry of Works & Housing.',
    featured: true,
  },
  {
    name: 'Kano State Solar Microgrid Initiative',
    type: 'Renewable Energy',
    year: '2024',
    location: 'Kano State',
    desc: 'Distributed solar microgrid serving 12 rural communities across Kano State, jointly funded by the state government and World Bank.',
    featured: false,
  },
  {
    name: 'Federal Ministry of Works Office Complex',
    type: 'Government Construction',
    year: '2024',
    location: 'Abuja, FCT',
    desc: 'Grade-A office complex with structural, M&E, and full IT infrastructure delivered entirely in-house by Moftech teams.',
    featured: false,
  },
  {
    name: 'Corporate HQ Data Centre — Ikoyi',
    type: 'IT Infrastructure',
    year: '2023',
    location: 'Lagos, Lagos State',
    desc: 'Tier II data centre design and build for a leading Nigerian financial institution, including structured cabling and cooling systems.',
    featured: false,
  },
]

const values = [
  { Icon: Shield,     title: 'Integrity',      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80', desc: 'Every contract we sign is a commitment. We deliver what we promise — on time, on spec, and within budget.' },
  { Icon: Zap,        title: 'Excellence',     img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', desc: 'From site safety to final finishes, we hold our work to international standards adapted for the Nigerian environment.' },
  { Icon: Users,      title: 'People First',   img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', desc: 'Our 300+ professionals are our greatest asset. We invest in their growth the same way we invest in our projects.' },
  { Icon: Award,      title: 'Accountability', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80', desc: 'Government contracts demand transparency. Every naira is tracked, every milestone reported, every project documented.' },
  { Icon: TrendingUp, title: 'Ambition',       img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80', desc: 'We are not content to repeat yesterday. Every project teaches us something that makes the next one sharper.' },
]

const VAL_GAP      = 12
const VAL_PEEK     = 40
const VAL_MAX_SLIDE = values.length - 3

export default function About() {
  const [valSlide,  setValSlide] = useState(0)
  const [valCardW,  setValCardW] = useState(0)
  const valViewportRef           = useRef<HTMLDivElement>(null)
  const valStep                  = valCardW + VAL_GAP

  useEffect(() => {
    const measure = () => {
      const w = valViewportRef.current?.clientWidth ?? 0
      setValCardW((w - VAL_PEEK - VAL_GAP * 2) / 3)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-container">
          <span className="about-eyebrow">Est. 2004 · Abuja, Nigeria</span>
          <h1 className="about-hero__headline">
            Two decades of <strong>building</strong> Nigeria
          </h1>
          <p className="about-hero__sub">
            Moftech Construzion Ltd. is a multi-sector infrastructure and technology company
            delivering civil engineering, IT infrastructure, and renewable energy projects for
            federal and state governments across Nigeria.
          </p>
          <div className="about-hero__ctas">
            <Link to="/portfolio" className="btn btn--primary btn--lg">View Our Projects</Link>
            <Link to="/contact" className="btn btn--outline-green btn--lg">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="about-stats">
        <div className="about-container about-stats__inner">
          {stats.map(({ value, label }) => (
            <div key={label} className="about-stat">
              <span className="about-stat__value">{value}</span>
              <span className="about-stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Story ── */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-story__grid">
            <div className="about-story__imgs" aria-hidden="true">
              <div className="about-story__img-main" />
              <div className="about-story__img-accent" />
            </div>
            <div className="about-story__text">
              <div className="about-eyebrow">Our Story</div>
              <h2 className="about-section-title">From a single contract to a national footprint</h2>
              <p className="about-story__p">
                Moftech Construzion Ltd. was founded in 2004 by a team of engineers who believed
                Nigeria's infrastructure challenges demanded a different kind of company — one with
                the technical range to tackle roads, buildings, digital systems, and energy grids
                under a single management structure.
              </p>
              <p className="about-story__p">
                What began as a civil engineering firm working on state-level road contracts in the
                North has grown into a multi-disciplinary organisation with active projects across
                18 Nigerian states. Today, Moftech is a trusted contractor to federal and state
                government ministries, development agencies, and leading private-sector clients.
              </p>
              <p className="about-story__p">
                Our growth has always been anchored in one principle: technical excellence and
                honest delivery are the only sustainable competitive advantages in our industry.
              </p>
              <Link to="/services" className="about-story__cta">
                Explore our services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="about-milestones">
        <div className="about-container">
          <div className="about-eyebrow">Timeline</div>
          <h2 className="about-section-title about-section-title">20 years in the making</h2>
          <div className="about-milestones__track">
            {milestones.map(({ year, event }, i) => (
              <div key={i} className="about-milestone">
                <div className="about-milestone__year">{year}</div>
                <div className="about-milestone__dot" />
                <div className="about-milestone__event">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Government Projects ── */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-eyebrow">Landmark Work</div>
          <h2 className="about-section-title">Projects that shaped Nigeria</h2>
          <p className="about-section-sub">
            Selected federal and state government contracts delivered by Moftech across
            civil engineering, technology, and renewable energy.
          </p>
          <div className="about-projects__grid">
            {projects.map((p, i) => (
              <div key={i} className={`about-pcard${p.featured ? ' about-pcard--featured' : ''}`}>
                <div className="about-pcard__img" />
                <div className="about-pcard__body">
                  <div className="about-pcard__top">
                    <span className="about-pcard__type">{p.type}</span>
                    <span className="about-pcard__year">{p.year}</span>
                  </div>
                  <h3 className="about-pcard__name">{p.name}</h3>
                  <p className="about-pcard__desc">{p.desc}</p>
                  <div className="about-pcard__loc">
                    <MapPin size={11} />
                    {p.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Use Cases / Values slider ── */}
      <section className="about-usecases">
        <div className="about-container">
          <div className="about-eyebrow">What drives us</div>
          <h2 className="about-section-title">Built on principle</h2>
        </div>

        <div className="about-container">
          <div className="about-usecases__viewport" ref={valViewportRef}>
            <div
              className="about-usecases__track"
              style={{
                transform: `translateX(-${valSlide * valStep}px)`,
                '--val-card-w': `${valCardW}px`,
              } as React.CSSProperties}
            >
              {values.map(({ Icon, title, desc, img }) => (
                <div
                  key={title}
                  className="about-uc-card about-uc-card--value"
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div className="about-uc-card__overlay" />
                  <div className="about-uc-card__val-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="about-uc-card__body">
                    <h3 className="about-uc-card__title">{title}</h3>
                    <p className="about-uc-card__desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-values__nav">
            <div className="about-values__dots">
              {Array.from({ length: VAL_MAX_SLIDE + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`about-values__dot${valSlide === i ? ' about-values__dot--active' : ''}`}
                  onClick={() => setValSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="about-values__btn"
              disabled={valSlide === 0}
              onClick={() => setValSlide(s => s - 1)}
              aria-label="Previous"
            >←</button>
            <button
              type="button"
              className="about-values__btn"
              disabled={valSlide === VAL_MAX_SLIDE}
              onClick={() => setValSlide(s => s + 1)}
              aria-label="Next"
            >→</button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-container">
          <div className="about-cta__inner">
            <h2 className="about-cta__title">Ready to build something that lasts?</h2>
            <p className="about-cta__sub">
              From feasibility to final handover — Moftech brings 20 years of delivery experience
              to every project we take on.
            </p>
            <div className="about-cta__btns">
              <Link to="/quote" className="btn btn--primary btn--lg">Get a Free Quote</Link>
              <Link to="/portfolio" className="btn btn--outline-green btn--lg">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
