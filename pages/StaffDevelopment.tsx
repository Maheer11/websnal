import { Link } from 'react-router-dom'
import {
  TrendingUp, ClipboardCheck, Star, BookOpen,
  Wrench, ShieldCheck, Users, Laptop, HardHat,
  CheckCircle, BarChart2, Award, ArrowRight,
  ChevronRight,
} from 'lucide-react'
import './staff/StaffDev.css'

const pillars = [
  {
    Icon: TrendingUp,
    title: 'Skill Development',
    desc: 'Structured programmes that build technical depth and cross-functional capability across every division.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Performance Tracking',
    desc: 'Objective, milestone-based reviews that give every staff member a clear picture of where they stand.',
  },
  {
    Icon: Star,
    title: 'Promotion Readiness',
    desc: 'Transparent eligibility criteria and documented pathways so progression is earned, visible, and fair.',
  },
  {
    Icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Regular training cycles, certifications, and knowledge-sharing sessions embedded in the working week.',
  },
]

const programs = [
  {
    Icon: Wrench,
    title: 'Technical Training',
    desc: 'Hands-on programmes covering construction methods, materials testing, and engineering software.',
    color: '#1a56db',
  },
  {
    Icon: ShieldCheck,
    title: 'Safety & Compliance',
    desc: 'Mandatory HSE certification, site safety drills, and regulatory compliance workshops run quarterly.',
    color: '#057a55',
  },
  {
    Icon: Users,
    title: 'Leadership Development',
    desc: 'Supervisory skills, stakeholder communication, and project management for mid-to-senior staff.',
    color: '#7c3aed',
  },
  {
    Icon: Laptop,
    title: 'Digital Skills',
    desc: 'AutoCAD, project management platforms, data reporting, and IT infrastructure fundamentals.',
    color: '#b45309',
  },
  {
    Icon: HardHat,
    title: 'Site Management',
    desc: 'On-site supervision, subcontractor coordination, and quality-assurance protocols for field leads.',
    color: '#0e7490',
  },
  {
    Icon: BarChart2,
    title: 'Performance Reporting',
    desc: 'How to read, document, and act on individual KPIs, project dashboards, and evaluation results.',
    color: '#be185d',
  },
]

const levels = [
  { level: '01', title: 'Junior', desc: 'Entry-level professionals building core competencies under senior supervision.' },
  { level: '02', title: 'Mid-Level', desc: 'Independent contributors managing tasks and mentoring junior team members.' },
  { level: '03', title: 'Senior', desc: 'Technical leads responsible for delivery quality and cross-team coordination.' },
  { level: '04', title: 'Supervisor', desc: 'Site or division supervisors overseeing teams, budgets, and project milestones.' },
  { level: '05', title: 'Director', desc: 'Strategic leaders driving divisional performance and long-term capacity planning.' },
]

const trackingFeatures = [
  {
    Icon: ClipboardCheck,
    title: 'Task Completion Tracking',
    desc: 'Every assignment is logged, timestamped, and linked to the staff member\'s performance record for end-of-cycle reviews.',
  },
  {
    Icon: CheckCircle,
    title: 'Document Verification',
    desc: 'Critical deliverables pass through a structured approval chain — reviewed by department heads and cleared at CEO level where required.',
  },
  {
    Icon: Award,
    title: 'Promotion Eligibility Checks',
    desc: 'The system automatically flags staff who meet time-in-grade, KPI, and certification thresholds, triggering a formal review process.',
  },
]

const useCases = [
  {
    audience: 'Staff',
    headline: 'Own your growth',
    points: [
      'View your current performance score and pending tasks',
      'Track progress toward the next career level',
      'Access assigned training modules and certification deadlines',
      'See completed milestones and documented achievements',
    ],
  },
  {
    audience: 'Management',
    headline: 'Evaluate with confidence',
    points: [
      'Real-time dashboard of team-wide KPI compliance',
      'Flag underperformance early with structured evidence',
      'Approve or escalate promotion recommendations',
      'Generate quarterly review reports for HR records',
    ],
  },
  {
    audience: 'Company',
    headline: 'Maintain standards at scale',
    points: [
      'Consistent evaluation criteria across all 18 state offices',
      'Audit-ready documentation for government and regulatory bodies',
      'Identify skills gaps and plan targeted training budgets',
      'Build a high-performance culture grounded in transparency',
    ],
  },
]

export default function StaffDevelopment() {
  return (
    <div className="sdp-page">

      {/* ── Hero ── */}
      <section className="sdp-hero">
        <div className="sdp-hero__container">
          <div className="sdp-hero__text">
            <span className="sdp-eyebrow">People · Growth · Performance</span>
            <h1 className="sdp-hero__title">Staff Development</h1>
            <p className="sdp-hero__sub">
              At Moftech Construzion, we treat staff development as a strategic
              function — not an afterthought. Every professional on our team
              has a defined path, measurable milestones, and the support to reach them.
            </p>
            <div className="sdp-hero__ctas">
              <a href="#career-path" className="sdp-btn sdp-btn--primary">
                View Career Path <ChevronRight size={16} />
              </a>
              <a href="#performance" className="sdp-btn sdp-btn--ghost">
                How We Track Progress
              </a>
            </div>
          </div>

          <div className="sdp-hero__stats">
            <div className="sdp-hero__stat">
              <span className="sdp-hero__stat-num">300<sup>+</sup></span>
              <span className="sdp-hero__stat-lbl">Professionals</span>
            </div>
            <div className="sdp-hero__stat">
              <span className="sdp-hero__stat-num">5</span>
              <span className="sdp-hero__stat-lbl">Career Levels</span>
            </div>
            <div className="sdp-hero__stat">
              <span className="sdp-hero__stat-num">6</span>
              <span className="sdp-hero__stat-lbl">Training Programmes</span>
            </div>
            <div className="sdp-hero__stat">
              <span className="sdp-hero__stat-num">18</span>
              <span className="sdp-hero__stat-lbl">States Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview / Pillars ── */}
      <section className="sdp-section sdp-section--light">
        <div className="sdp-container">
          <div className="sdp-section-header">
            <span className="sdp-eyebrow sdp-eyebrow--dark">Our Approach</span>
            <h2 className="sdp-section-title">Four pillars of professional growth</h2>
            <p className="sdp-section-sub">
              Every Moftech staff development initiative is built on these foundational principles —
              applied consistently from entry-level hires to senior leadership.
            </p>
          </div>
          <div className="sdp-pillars">
            {pillars.map(({ Icon, title, desc }) => (
              <div key={title} className="sdp-pillar-card">
                <div className="sdp-pillar-card__icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="sdp-pillar-card__title">{title}</h3>
                <p className="sdp-pillar-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training Programmes ── */}
      <section className="sdp-section">
        <div className="sdp-container">
          <div className="sdp-section-header">
            <span className="sdp-eyebrow sdp-eyebrow--dark">Training</span>
            <h2 className="sdp-section-title">Programmes built for the field</h2>
            <p className="sdp-section-sub">
              Structured learning cycles across six domains — tailored to the realities
              of infrastructure, technology, and energy project delivery in Nigeria.
            </p>
          </div>
          <div className="sdp-programs">
            {programs.map(({ Icon, title, desc, color }) => (
              <div key={title} className="sdp-prog-card">
                <div className="sdp-prog-card__icon" style={{ '--prog-color': color } as React.CSSProperties}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="sdp-prog-card__title">{title}</h3>
                <p className="sdp-prog-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career Path ── */}
      <section className="sdp-section sdp-section--dark" id="career-path">
        <div className="sdp-container">
          <div className="sdp-section-header sdp-section-header--light">
            <span className="sdp-eyebrow">Progression</span>
            <h2 className="sdp-section-title sdp-section-title--white">Five levels, one clear path</h2>
            <p className="sdp-section-sub sdp-section-sub--muted">
              Each level has defined competency requirements, time-in-grade criteria,
              and KPI thresholds. Advancement is documented and reviewed formally.
            </p>
          </div>
          <div className="sdp-path">
            {levels.map(({ level, title, desc }, i) => (
              <div key={level} className="sdp-path__step">
                <div className="sdp-path__level">{level}</div>
                <div className="sdp-path__connector" aria-hidden="true" />
                <h3 className="sdp-path__title">{title}</h3>
                <p className="sdp-path__desc">{desc}</p>
                {i < levels.length - 1 && (
                  <ArrowRight size={14} className="sdp-path__arrow" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Performance Tracking ── */}
      <section className="sdp-section sdp-section--light" id="performance">
        <div className="sdp-container">
          <div className="sdp-tracking">
            <div className="sdp-tracking__text">
              <span className="sdp-eyebrow sdp-eyebrow--dark">Performance</span>
              <h2 className="sdp-section-title">How we monitor and measure progress</h2>
              <p className="sdp-tracking__body">
                Moftech operates a structured performance monitoring system that covers
                every aspect of a staff member's contribution — from daily task completion
                to end-of-cycle promotion decisions. The system is designed to be objective,
                transparent, and scalable across all 18 state offices.
              </p>
              <p className="sdp-tracking__body">
                Department heads conduct monthly check-ins against documented KPIs. Quarterly
                formal reviews are signed off at director level and feed directly into
                promotion eligibility assessments.
              </p>
              <Link to="/contact" className="sdp-link">
                Learn about our internal systems <ArrowRight size={14} />
              </Link>
            </div>
            <div className="sdp-tracking__features">
              {trackingFeatures.map(({ Icon, title, desc }) => (
                <div key={title} className="sdp-track-card">
                  <div className="sdp-track-card__icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="sdp-track-card__title">{title}</h3>
                    <p className="sdp-track-card__desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="sdp-section sdp-section--primary">
        <div className="sdp-container">
          <div className="sdp-section-header sdp-section-header--light">
            <span className="sdp-eyebrow">Who benefits</span>
            <h2 className="sdp-section-title sdp-section-title--white">Real value at every level</h2>
            <p className="sdp-section-sub sdp-section-sub--muted">
              The Moftech staff development framework is built to serve three audiences simultaneously —
              each with distinct but complementary needs.
            </p>
          </div>
          <div className="sdp-usecases">
            {useCases.map(({ audience, headline, points }) => (
              <div key={audience} className="sdp-uc-card">
                <div className="sdp-uc-card__tag">{audience}</div>
                <h3 className="sdp-uc-card__headline">{headline}</h3>
                <ul className="sdp-uc-card__list">
                  {points.map(pt => (
                    <li key={pt} className="sdp-uc-card__item">
                      <CheckCircle size={14} className="sdp-uc-card__check" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sdp-cta">
        <div className="sdp-container">
          <div className="sdp-cta__inner">
            <div className="sdp-cta__text">
              <h2 className="sdp-cta__title">Start your development journey</h2>
              <p className="sdp-cta__sub">
                Whether you're a new hire or a department head — there's a path, a programme,
                and a plan with your name on it at Moftech Construzion.
              </p>
            </div>
            <div className="sdp-cta__btns">
              <Link to="/careers" className="sdp-btn sdp-btn--white">
                View Open Roles <ChevronRight size={16} />
              </Link>
              <Link to="/contact" className="sdp-btn sdp-btn--outline-white">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
