import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ChevronDown, HardHat, Building2, Server, Sun, Briefcase, Phone, Users } from 'lucide-react'
import logo from '../../assets/images/nalotlogo.jpg'
import './Navbar.css'

const servicesMega = [
  {
    heading: 'Construction',
    items: [
      { label: 'Civil Engineering',    desc: 'Roads, bridges & drainage',    to: '/services', Icon: HardHat  },
      { label: 'High-Rise Buildings',  desc: 'Commercial & residential',     to: '/services', Icon: Building2 },
      { label: 'Government Contracts', desc: 'Federal & state projects',     to: '/services', Icon: Briefcase },
    ],
  },
  {
    heading: 'Technology',
    items: [
      { label: 'IT Infrastructure',    desc: 'Networks & server deployment', to: '/services', Icon: Server   },
    ],
  },
  {
    heading: 'Energy',
    items: [
      { label: 'Solar Installation',   desc: 'Off-grid, hybrid & grid-tied', to: '/services', Icon: Sun     },
    ],
  },
  {
    heading: 'Our Team',
    items: [
      { label: 'Staff Development', desc: 'Qualifications, projects & profiles', to: '/services/staff-development', Icon: Users },
    ],
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const servicesRef = useRef<HTMLLIElement>(null)
  const megaRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      if (!servicesRef.current?.contains(target) && !megaRef.current?.contains(target)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    return () => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current) }
  }, [])

  const openServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 160)
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Nalot logo" className="navbar__logo-mark" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Nalot Multisystems</span>
            <span className="navbar__brand-sub">Limited</span>
          </div>
        </Link>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>

          {/* Services — desktop mega / mobile direct link */}
          <li
            ref={servicesRef}
            className={`navbar__dropdown-wrap${servicesOpen ? ' navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
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
              <div
                className="navbar__mega"
                ref={megaRef}
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <div className="navbar__mega__inner">
                  <div className="navbar__mega__cols">
                    {servicesMega.map(({ heading, items }) => (
                      <div key={heading} className="navbar__mega__col">
                        <span className="navbar__mega__col-head">{heading}</span>
                        {items.map(({ label, desc, to, Icon }) => (
                          <Link
                            key={label}
                            to={to}
                            className="navbar__mega__item"
                            onClick={() => { setServicesOpen(false); setMenuOpen(false) }}
                          >
                            <span className="navbar__mega__item-icon">
                              <Icon size={16} strokeWidth={1.75} />
                            </span>
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
                    <p className="navbar__mega__cta-sub">
                      From civil works to solar farms — get expert advice at no cost.
                    </p>
                    <Link
                      to="/services"
                      className="navbar__mega__cta-learn"
                      onClick={() => setServicesOpen(false)}
                    >
                      Learn More →
                    </Link>
                    <Link
                      to="/quote"
                      className="navbar__mega__cta-quote"
                      onClick={() => setServicesOpen(false)}
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `navbar__link navbar__link--contact${isActive ? ' navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={13} strokeWidth={2} />
              Contact
            </NavLink>
          </li>
          <li className="navbar__cta-mobile">
            <Link to="/quote" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </li>
        </ul>

        <Link to="/quote" className="btn btn--primary navbar__cta-desktop">
          Get a Quote
        </Link>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
