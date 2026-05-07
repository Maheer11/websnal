import { Link } from 'react-router-dom'
import logo from '../../assets/images/moftechlogo.svg'
import './Footer.css'

const services = ['IT Infrastructure', 'Road Construction', 'High-Rise Buildings', 'Solar Installation', 'Government Contracts']
const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__inner">

          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="Moftech logo" className="footer__logo-mark" />
              <div>
                <div className="footer__brand-name">Moftech Construzion</div>
                <div className="footer__brand-sub">Limited</div>
              </div>
            </div>
            <p className="footer__tagline">Building the Future.</p>
            <p className="footer__desc">
              Architects, builders, engineers & surveyors — delivering construction
              excellence across Nigeria from our base in Abuja.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn" className="footer__social-link">in</a>
              <a href="#" aria-label="Twitter" className="footer__social-link">𝕏</a>
              <a href="#" aria-label="Facebook" className="footer__social-link">f</a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Our Services</h4>
            <ul className="footer__list">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="footer__link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>Block 5 Flat 2, Kagoro Close, Area 2 Garki, Abuja</span>
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                <span>08099249693 / 08052628492</span>
              </li>
              <li>
                <span className="footer__contact-icon">✉️</span>
                <span>info@moftechconstruzion.com</span>
              </li>
            </ul>
            <Link to="/quote" className="btn btn--primary footer__quote-btn">
              Request a Quote
            </Link>
          </div>

        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>© {new Date().getFullYear()} Moftech Construzion Ltd. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
