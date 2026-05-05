import { Link } from 'react-router-dom'
import logo from '../../assets/images/nalotlogo.jpg'
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
              <img src={logo} alt="Nalot logo" className="footer__logo-mark" />
              <div>
                <div className="footer__brand-name">Nalot Multisystems</div>
                <div className="footer__brand-sub">Limited</div>
              </div>
            </div>
            <p className="footer__tagline">
              Strong Foundations. Smarter Solutions.
            </p>
            <p className="footer__desc">
              A multi-sector company delivering excellence in civil engineering,
              IT infrastructure, and renewable energy across Nigeria.
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
                <span>Abuja, Nigeria</span>
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                <span>+234 800 000 0000</span>
              </li>
              <li>
                <span className="footer__contact-icon">✉️</span>
                <span>info@nalotmultisystems.com</span>
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
          <p>© {new Date().getFullYear()} Nalot Multisystems Limited. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
