import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  HardHat, Building2, Server, Sun, Briefcase,
  CheckCircle, Layers, Shield, Users,
} from 'lucide-react'
import accredNia    from '../assets/images/accred-nia.svg'
import accredQsrbn  from '../assets/images/accred-qsrbn.svg'
import accredCorbon from '../assets/images/accred-corbon.svg'
import accredCoren  from '../assets/images/accred-coren.svg'
import accredNiob   from '../assets/images/accred-niob.svg'
import accredRuscon from '../assets/images/accred-ruscon.svg'
import site1 from '../assets/images/siteimage1.jpg'
import site2 from '../assets/images/siteimage2.jpg'
import site3 from '../assets/images/siteimage3.jpg'
import site4 from '../assets/images/siteimage4.jpg'
import site5 from '../assets/images/siteimage5.jpg'
import './home/Home.css'

const slideImages = [
  { src: site1, label: 'Civil Engineering' },
  { src: site2, label: 'High-Rise Construction' },
  { src: site3, label: 'Interior Works' },
  { src: site4, label: 'Site Operations' },
  { src: site5, label: 'Large-Scale Development' },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Experience' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5', label: 'Sectors Served' },
]

const services = [
  {
    Icon: HardHat,
    title: 'Civil Engineering',
    desc: 'Roads, bridges, drainage systems, and structural works built to the highest standards.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85',
    tag: 'Roads · Bridges · Drainage',
  },
  {
    Icon: Building2,
    title: 'High-Rise Buildings',
    desc: 'Commercial and residential construction with precision engineering and quality materials.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=85',
    tag: 'Commercial · Residential',
  },
  {
    Icon: Server,
    title: 'IT Infrastructure',
    desc: 'Network design, server deployment, structured cabling, and IT consulting services.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85',
    tag: 'Networks · Data Centres',
  },
  {
    Icon: Sun,
    title: 'Solar Installation',
    desc: 'Renewable energy solutions — off-grid, hybrid, and grid-tied solar systems for homes and businesses.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=85',
    tag: 'Off-grid · Hybrid · Grid-tied',
  },
  {
    Icon: Briefcase,
    title: 'Government Contracts',
    desc: 'Experienced in executing federal and state government projects with full compliance and transparency.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85',
    tag: 'Federal · State · Agencies',
  },
]

const reasons = [
  { Icon: CheckCircle, title: 'Proven Track Record', desc: 'Over a decade of delivering projects on time and within budget across Nigeria.' },
  { Icon: Layers, title: 'Multi-Sector Expertise', desc: 'Rare combination of civil, IT, and energy capabilities under one roof.' },
  { Icon: Shield, title: 'Quality Assurance', desc: 'Strict QA processes and certified professionals on every project.' },
  { Icon: Users, title: 'Client-First Approach', desc: 'We listen, plan, and deliver exactly what our clients envision.' },
]


const projects = [
  { title: 'Abuja Road Rehabilitation', category: 'Civil Engineering', year: '2023',
    img: 'https://images.unsplash.com/photo-1621955511293-5e3dc7b97b07?auto=format&fit=crop&w=800&q=80' },
  { title: 'Corporate HQ Data Centre', category: 'IT Infrastructure', year: '2023',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80' },
  { title: 'Solar Microgrid – Kano', category: 'Renewable Energy', year: '2024',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80' },
  { title: 'Federal Ministry Office Block', category: 'Building Construction', year: '2024',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80' },
]

const testimonials = [
  {
    quote: "Moftech delivered our federal road contract three weeks ahead of schedule. That is unprecedented in our experience with contractors.",
    name: "Engr. Bello Musa",
    role: "Director, Federal Ministry of Works",
    avatar: "B",
  },
  {
    quote: "From structured cabling to the full data centre build — the IT team at Moftech exceeded every specification we gave them.",
    name: "Adaeze Okonkwo",
    role: "CTO, Sterling Financial Group",
    avatar: "A",
  },
  {
    quote: "The solar microgrid project was complex. Moftech brought the expertise and the manpower to execute it seamlessly across 12 sites.",
    name: "Alhaji S. Danbatta",
    role: "Commissioner, Kano State Energy Office",
    avatar: "S",
  },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i: number) => (i + 1) % slideImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero__visual">
      <div className="hero__img-wrap">
        {slideImages.map(({ src, label }, i) => (
          <img
            key={i}
            src={src}
            alt={label}
            className={`hero__slide${i === current ? ' hero__slide--active' : ''}`}
          />
        ))}
        <div className="hero__img-gradient" />
      </div>

      <div className="hero__slide-label">
        <span className="hero__slide-label__dot" />
        {slideImages[current].label}
      </div>

      <div className="hero__float-card">
        <div className="hero__float-card__row">
          <span className="hero__float-card__dot" />
          <span className="hero__float-card__label">Active Projects</span>
        </div>
        <div className="hero__float-card__stat">12</div>
        <div className="hero__float-card__meta">
          <span className="hero__float-card__tag">Civil</span>
          <span className="hero__float-card__tag">IT</span>
          <span className="hero__float-card__tag">Energy</span>
        </div>
      </div>

      <div className="hero__slide-bar">
        <div className="hero__slider-dots">
          {slideImages.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <Link to="/portfolio" className="hero__slide-cta">
          View Portfolio →
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__cta">
          {/* Animated rings — sit behind all content via z-index */}
          <div className="hero__rings" aria-hidden="true">
            <div className="hero__ring hero__ring--1" />
            <div className="hero__ring hero__ring--2" />
            <div className="hero__ring hero__ring--3" />
            <div className="hero__ring hero__ring--4" />
          </div>

          <span className="hero__eyebrow">Nigeria's Multi-Sector Company</span>
          <h1 className="hero__headline">
            <span className="hero__hl-label">We deliver</span>
            <span className="hero__hl-pair">
              <span className="hero__hl-soft">Strong</span>
              <span className="hero__hl-core hero__hl-core--green">Foundations.</span>
            </span>
            <span className="hero__hl-divider" />
            <span className="hero__hl-pair">
              <span className="hero__hl-soft">Smarter</span>
              <span className="hero__hl-core hero__hl-core--blue">Solutions.</span>
            </span>
          </h1>
          <p className="hero__sub">
            Moftech Construzion Ltd. delivers civil engineering, IT infrastructure,
            and renewable energy across Nigeria — one company, every solution, zero compromise.
          </p>
          <div className="hero__actions">
            <Link to="/quote" className="btn btn--primary btn--lg">Get a Free Quote</Link>
            <Link to="/services" className="btn btn--outline-dark btn--lg">Our Services</Link>
          </div>
          <div className="hero__quick-links">
            <Link to="/about" className="hero__quick-link">About Us →</Link>
            <Link to="/careers" className="hero__quick-link">Join Our Team →</Link>
            <Link to="/contact" className="hero__quick-link">Contact Us →</Link>
          </div>
          <div className="hero__proof">
            <div className="hero__avatars">
              <span className="hero__avatar">A</span>
              <span className="hero__avatar">B</span>
              <span className="hero__avatar">C</span>
              <span className="hero__avatar">D</span>
            </div>
            <p className="hero__proof-text">
              Trusted by <strong>30+ clients</strong> across Nigeria
            </p>
          </div>
        </div>
        <HeroSlider />

        {/* ── Accreditations strip — spans both columns ── */}
        <div className="hero__accreds">
          <div className="hero__accreds__inner">
            <div className="hero__accreds__prefix">
              <span className="hero__accreds__build">BUILD</span>
              <span className="hero__accreds__with">WITH OUR</span>
            </div>
            <div className="hero__accreds__divider-v" />
            <div className="hero__accreds__body">
              <div className="hero__accreds__disciplines">
                {['Architects', 'Cost Consultants', 'Builders', 'Engineers', 'Surveyors'].map((d, i, arr) => (
                  <Fragment key={d}>
                    <span className="hero__accreds__discipline">{d}</span>
                    {i < arr.length - 1 && <span className="hero__accreds__pipe">|</span>}
                  </Fragment>
                ))}
              </div>
              <div className="hero__accreds__logos">
                <img src={accredNia}    alt="NIA"    className="hero__accreds__logo hero__accreds__logo--circle" />
                <img src={accredQsrbn}  alt="ACON"   className="hero__accreds__logo hero__accreds__logo--circle" />
                <img src={accredCorbon} alt="CORBON" className="hero__accreds__logo hero__accreds__logo--coat" />
                <img src={accredCoren}  alt="COREN"  className="hero__accreds__logo hero__accreds__logo--rect" />
                <img src={accredNiob}   alt="NIOB"   className="hero__accreds__logo hero__accreds__logo--circle" />
                <img src={accredRuscon} alt="SURCON" className="hero__accreds__logo hero__accreds__logo--circle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-bar">
        <div className="stats-bar__inner">
          {stats.map(({ value, label }) => (
            <div key={label} className="stats-bar__item">
              <span className="stats-bar__value">{value}</span>
              <span className="stats-bar__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Five Sectors. One Partner.</h2>
            <p className="section-sub">
              From roads and high-rises to server rooms and solar panels — Moftech Construzion is the only partner you need.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ Icon, title, desc, img, tag }) => (
              <div key={title} className="service-card">
                <div
                  className="service-card__img"
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div className="service-card__img-overlay" />
                  <span className="service-card__img-tag">{tag}</span>
                  <div className="service-card__img-icon">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{title}</h3>
                  <p className="service-card__desc">{desc}</p>
                  <Link to="/services" className="service-card__link">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section why-section">
        <div className="container why-section__inner">
          <div className="why-section__text">
            <span className="section-eyebrow">Why Moftech</span>
            <h2 className="section-title">One Company. Every Capability.</h2>
            <p className="section-sub">
              No contractor juggling, no coordination gaps — Moftech brings civil, digital and energy expertise under one roof, so your project moves faster and costs less.
            </p>
            <Link to="/about" className="btn btn--primary" style={{ marginTop: '24px' }}>
              About Us
            </Link>
          </div>
          <div className="why-section__grid">
            {reasons.map(({ Icon, title, desc }) => (
              <div key={title} className="reason-card">
                <span className="reason-card__icon">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h4 className="reason-card__title">{title}</h4>
                  <p className="reason-card__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Client Voices</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Trusted by Government &amp; Industry</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>
              What our clients say after we deliver.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(({ quote, name, role, avatar }) => (
              <div key={name} className="testimonial-card">
                <div className="testimonial-card__quote-mark">"</div>
                <p className="testimonial-card__quote">{quote}</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__avatar">{avatar}</span>
                  <div>
                    <strong className="testimonial-card__name">{name}</strong>
                    <span className="testimonial-card__role">{role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Teaser ── */}
      <section className="section portfolio-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Work</span>
            <h2 className="section-title">Built by Moftech</h2>
            <p className="section-sub">From federal contracts to private developments — here's a snapshot of our most recent deliveries.</p>
          </div>
          <div className="projects-grid">
            {projects.map(({ title, category, year, img }) => (
              <div key={title} className="project-card">
                <div className="project-card__img" style={{ backgroundImage: `url(${img})` }} />
                <div className="project-card__body">
                  <span className="project-card__cat">{category}</span>
                  <h3 className="project-card__title">{title}</h3>
                  <span className="project-card__year">{year}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-section__cta">
            <Link to="/portfolio" className="btn btn--outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          <h2 className="cta-banner__title">Let's build something<br />that lasts.</h2>
          <p className="cta-banner__sub">
            Whether it's a road, a data centre, or a solar farm — tell us your vision and Moftech will deliver it.
          </p>
          <div className="cta-banner__actions">
            <Link to="/quote" className="btn btn--primary btn--lg">Get a Free Quote</Link>
            <Link to="/contact" className="btn btn--ghost btn--lg">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
