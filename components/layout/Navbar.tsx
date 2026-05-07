import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  ChevronDown, HardHat, Building2, Server, Sun, Briefcase, Phone,
  Users, GraduationCap, BookOpen, Newspaper, LifeBuoy, Globe,
  HelpCircle, Info,
} from 'lucide-react'
import logo from '../../assets/images/moftechlogo.svg'
import './Navbar.css'

const servicesMega = [
  {
    heading: 'Construction',
    items: [
      { label: 'Civil Engineering',    desc: 'Roads, bridges & drainage',    to: '/services', Icon: HardHat   },
      { label: 'High-Rise Buildings',  desc: 'Commercial & residential',     to: '/services', Icon: Building2 },
      { label: 'Government Contracts', desc: 'Federal & state projects',     to: '/services', Icon: Briefcase },
    ],
  },
  {
    heading: 'Technology',
    items: [
      { label: 'IT Infrastructure',    desc: 'Networks & server deployment', to: '/services', Icon: Server    },
    ],
  },
  {
    heading: 'Energy',
    items: [
      { label: 'Solar Installation',   desc: 'Off-grid, hybrid & grid-tied', to: '/services', Icon: Sun      },
    ],
  },
]

const careersItems = [
  { label: 'Open Positions',    desc: 'Browse current job openings',               to: '/careers',                    Icon: Briefcase,     color: '#e05a2b' },
  { label: 'Internships',       desc: 'Graduate & student programmes',              to: '/careers',                    Icon: GraduationCap, color: '#1b3a6b' },
  { label: 'Staff Development', desc: 'Qualifications, projects & staff profiles',  to: '/services/staff-development', Icon: Users,         color: '#c04a1e' },
  { label: 'Learning & Growth', desc: 'Training programmes & certifications',       to: '/careers',                    Icon: BookOpen,      color: '#0f2347' },
]

const aboutItems = [
  { label: 'Our Story',        desc: 'Two decades of building Nigeria',           to: '/about',   Icon: Info,       color: '#e05a2b' },
  { label: 'Blog & Insights',  desc: 'Engineering thinking from our team',        to: '/blog',    Icon: Newspaper,  color: '#1b3a6b' },
  { label: 'Support Centre',   desc: 'Help, enquiries & project questions',       to: '/contact', Icon: LifeBuoy,   color: '#c04a1e' },
  { label: 'Press & Media',    desc: 'Company news, announcements & media kit',   to: '/about',   Icon: Globe,      color: '#0f2347' },
  { label: 'FAQs',             desc: 'Common questions about working with Moftech', to: '/contact', Icon: HelpCircle, color: '#e8662e' },
]

export default function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [scrolled,     setScrolled]     = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [careersOpen,  setCareersOpen]  = useState(false)
  const [aboutOpen,    setAboutOpen]    = useState(false)

  const servicesRef     = useRef<HTMLLIElement>(null)
  const megaRef         = useRef<HTMLDivElement>(null)
  const closeTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null)

  const careersRef      = useRef<HTMLLIElement>(null)
  const careersDropRef  = useRef<HTMLDivElement>(null)
  const careersTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const aboutRef        = useRef<HTMLLIElement>(null)
  const aboutDropRef    = useRef<HTMLDivElement>(null)
  const aboutTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as Node
      if (!servicesRef.current?.contains(t) && !megaRef.current?.contains(t))       setServicesOpen(false)
      if (!careersRef.current?.contains(t)  && !careersDropRef.current?.contains(t)) setCareersOpen(false)
      if (!aboutRef.current?.contains(t)    && !aboutDropRef.current?.contains(t))   setAboutOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => () => {
    if (closeTimerRef.current)   clearTimeout(closeTimerRef.current)
    if (careersTimerRef.current) clearTimeout(careersTimerRef.current)
    if (aboutTimerRef.current)   clearTimeout(aboutTimerRef.current)
  }, [])

  const openServices  = () => { if (closeTimerRef.current)   clearTimeout(closeTimerRef.current);   setServicesOpen(true) }
  const closeServices = () => { closeTimerRef.current   = setTimeout(() => setServicesOpen(false), 160) }

  const openCareers   = () => { if (careersTimerRef.current) clearTimeout(careersTimerRef.current);  setCareersOpen(true) }
  const closeCareers  = () => { careersTimerRef.current  = setTimeout(() => setCareersOpen(false),  160) }

  const openAbout     = () => { if (aboutTimerRef.current)   clearTimeout(aboutTimerRef.current);    setAboutOpen(true) }
  const closeAbout    = () => { aboutTimerRef.current    = setTimeout(() => setAboutOpen(false),    160) }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Moftech logo" className="navbar__logo-mark" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">
              <span className="navbar__brand-moftech">Moftech</span>
              <span className="navbar__brand-construzion"> Construzion</span>
            </span>
            <span className="navbar__brand-sub">Limited</span>
          </div>
        </Link>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          {/* About dropdown */}
          <li
            ref={aboutRef}
            className={`navbar__dropdown-wrap${aboutOpen ? ' navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={openAbout}
            onMouseLeave={closeAbout}
          >
            <button
              type="button"
              className={`navbar__link navbar__link--trigger navbar__services-desktop${aboutOpen ? ' navbar__link--active' : ''}`}
              onClick={() => setAboutOpen(v => !v)}
              aria-expanded={aboutOpen}
            >
              About
              <ChevronDown size={13} className="navbar__chevron" strokeWidth={2.5} />
            </button>
            <NavLink
              to="/about"
              className={({ isActive }) => `navbar__link navbar__services-mobile${isActive ? ' navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            {aboutOpen && (
              <div
                className="navbar__about-panel"
                ref={aboutDropRef}
                onMouseEnter={openAbout}
                onMouseLeave={closeAbout}
              >
                {/* Left — featured card */}
                <Link
                  to="/about"
                  className="navbar__about-feat"
                  onClick={() => setAboutOpen(false)}
                >
                  <div>
                    <div className="navbar__feat-eyebrow">Company</div>
                    <p className="navbar__feat-title">20 years of <span className="navbar__feat-hl">building</span> Nigeria's infrastructure</p>
                  </div>
                  <span className="navbar__careers-feat__arrow">↗</span>
                </Link>

                {/* Right — items list */}
                <div className="navbar__about-items">
                  {aboutItems.map(({ label, desc, to, Icon, color }) => (
                    <Link
                      key={label}
                      to={to}
                      className="navbar__mega__item"
                      onClick={() => { setAboutOpen(false); setMenuOpen(false) }}
                    >
                      <span className="navbar__mega__item-icon" style={{ '--icon-color': color } as React.CSSProperties}>
                        <Icon size={20} strokeWidth={1.5} />
                      </span>
                      <span className="navbar__mega__item-text">
                        <span className="navbar__mega__item-label">{label}</span>
                        <span className="navbar__mega__item-desc">{desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Services mega */}
          <li
            ref={servicesRef}
            className={`navbar__dropdown-wrap${servicesOpen ? ' navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              type="button"
              className={`navbar__link navbar__link--trigger navbar__services-desktop${servicesOpen ? ' navbar__link--active' : ''}`}
              onClick={() => setServicesOpen(v => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={13} className="navbar__chevron" strokeWidth={2.5} />
            </button>
            <NavLink
              to="/services"
              className={({ isActive }) => `navbar__link navbar__services-mobile${isActive ? ' navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>

            {servicesOpen && (
              <div className="navbar__mega" ref={megaRef} onMouseEnter={openServices} onMouseLeave={closeServices}>
                <div className="navbar__mega__inner">
                  <div className="navbar__mega__cols">
                    {servicesMega.map(({ heading, items }) => (
                      <div key={heading} className="navbar__mega__col">
                        <span className="navbar__mega__col-head">{heading}</span>
                        {items.map(({ label, desc, to, Icon }) => (
                          <Link key={label} to={to} className="navbar__mega__item" onClick={() => { setServicesOpen(false); setMenuOpen(false) }}>
                            <span className="navbar__mega__item-icon"><Icon size={20} strokeWidth={1.5} /></span>
                            <span className="navbar__mega__item-text">
                              <span className="navbar__mega__item-label">{label}</span>
                              <span className="navbar__mega__item-desc">{desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="navbar__mega__cta">
                    <span className="navbar__mega__cta-eyebrow">Ready to start?</span>
                    <p className="navbar__mega__cta-title">Let's discuss your project</p>
                    <p className="navbar__mega__cta-sub">From civil works to solar farms — get expert advice at no cost.</p>
                    <Link to="/services" className="navbar__mega__cta-learn" onClick={() => setServicesOpen(false)}>Learn More →</Link>
                    <Link to="/quote" className="navbar__mega__cta-quote" onClick={() => setServicesOpen(false)}>Get a Free Quote</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/portfolio" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>
              Portfolio
            </NavLink>
          </li>

          {/* Careers dropdown */}
          <li
            ref={careersRef}
            className={`navbar__dropdown-wrap${careersOpen ? ' navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={openCareers}
            onMouseLeave={closeCareers}
          >
            <button
              type="button"
              className={`navbar__link navbar__link--trigger navbar__services-desktop${careersOpen ? ' navbar__link--active' : ''}`}
              onClick={() => setCareersOpen(v => !v)}
              aria-expanded={careersOpen}
            >
              Careers
              <ChevronDown size={13} className="navbar__chevron" strokeWidth={2.5} />
            </button>
            <NavLink
              to="/careers"
              className={({ isActive }) => `navbar__link navbar__services-mobile${isActive ? ' navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </NavLink>

            {careersOpen && (
              <div className="navbar__careers-panel" ref={careersDropRef} onMouseEnter={openCareers} onMouseLeave={closeCareers}>

                <Link to="/careers" className="navbar__careers-feat" onClick={() => setCareersOpen(false)}>
                  <div>
                    <div className="navbar__feat-eyebrow">Careers</div>
                    <p className="navbar__feat-title">Join the <span className="navbar__feat-hl">team</span> building Nigeria's infrastructure</p>
                  </div>
                  <span className="navbar__careers-feat__arrow">↗</span>
                </Link>

                <div className="navbar__careers-items">
                  {careersItems.map(({ label, desc, to, Icon, color }) => (
                    <Link key={label} to={to} className="navbar__mega__item" onClick={() => { setCareersOpen(false); setMenuOpen(false) }}>
                      <span className="navbar__mega__item-icon" style={{ '--icon-color': color } as React.CSSProperties}>
                        <Icon size={20} strokeWidth={1.5} />
                      </span>
                      <span className="navbar__mega__item-text">
                        <span className="navbar__mega__item-label">{label}</span>
                        <span className="navbar__mega__item-desc">{desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>

              </div>
            )}
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => `navbar__link navbar__link--contact${isActive ? ' navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>
              <Phone size={13} strokeWidth={2} />
              Contact
            </NavLink>
          </li>
          <li className="navbar__cta-mobile">
            <Link to="/quote" className="btn btn--primary" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
          </li>
        </ul>

        <Link to="/quote" className="btn btn--primary navbar__cta-desktop">Get a Quote</Link>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
