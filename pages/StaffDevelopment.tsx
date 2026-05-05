import { Link } from 'react-router-dom'
import { staff, TIER_LABELS, ACTIVITY_LABELS, deptSlug, type StaffMember } from '../data/staff'
import './staff/Staff.css'

const initials = (name: string) =>
  name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

const fmtDateTime = (iso: string) => {
  const d = new Date(iso)
  return `${d.toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })} · ${d.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })}`
}

const allActivity = staff
  .flatMap(s => s.activity.map(a => ({ ...a, staffName: s.name, staffId: s.id })))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 8)

const tiers = [1, 2, 3, 4] as const
const byLevel = (level: number): StaffMember[] =>
  staff.filter(s => s.level === level).sort((a, b) => a.name.localeCompare(b.name))

export default function StaffDevelopment() {
  return (
    <div className="sd-page">

      {/* ── Header ── */}
      <div className="sd-header">
        <div className="sd-container">
          <div className="sd-header__breadcrumb">
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>Staff Development</span>
          </div>
          <h1 className="sd-header__title">Staff Development</h1>
          <p className="sd-header__sub">
            Meet the professionals behind every Nalot project. Browse qualifications,
            specialisations, and project histories — organised by seniority and department.
          </p>

          {/* Summary stats */}
          <div className="sd-header__stats">
            <div className="sd-hstat">
              <span className="sd-hstat__num">{staff.length}</span>
              <span className="sd-hstat__lbl">Professionals</span>
            </div>
            <div className="sd-hstat">
              <span className="sd-hstat__num">
                {staff.reduce((s, m) => s + m.qualifications.length, 0)}
              </span>
              <span className="sd-hstat__lbl">Qualifications</span>
            </div>
            <div className="sd-hstat">
              <span className="sd-hstat__num">
                {Math.round(staff.reduce((s, m) => s + m.yearsExperience, 0) / staff.length)}
              </span>
              <span className="sd-hstat__lbl">Avg. Yrs Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Activity feed ── */}
      <div className="sd-feed">
        <div className="sd-container">
          <div className="sd-feed__label">Recent Activity</div>
          <div className="sd-feed__list">
            {allActivity.map((entry, i) => (
              <div key={i} className="sd-feed__item">
                <div className="sd-feed__dot-wrap">
                  <div className="sd-feed__dot" />
                  {i < allActivity.length - 1 && <div className="sd-feed__line" />}
                </div>
                <div className="sd-feed__body">
                  <span className="sd-feed__name">
                    <Link to={`/services/staff-development/${entry.staffId}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {entry.staffName}
                    </Link>
                  </span>
                  {' '}
                  <span className="sd-feed__text">— {entry.text}</span>
                  <div className="sd-feed__meta">
                    <span className="sd-feed__type">{ACTIVITY_LABELS[entry.type]}</span>
                    <span className="sd-feed__date">{fmtDateTime(entry.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hierarchy ── */}
      <div className="sd-hierarchy">
        <div className="sd-container">
          {tiers.map(level => {
            const members = byLevel(level)
            if (members.length === 0) return null
            return (
              <div key={level} className={`sd-tier sd-tier--${level}`}>
                <div className="sd-tier__head">
                  <span className="sd-tier__label">{TIER_LABELS[level]}</span>
                  <div className="sd-tier__rule" />
                  <span className="sd-tier__count">{members.length}</span>
                </div>
                <div className="sd-grid">
                  {members.map(s => (
                    <Link
                      key={s.id}
                      to={`/services/staff-development/${s.id}`}
                      className={`sdc-card dept--${deptSlug(s.department)}`}
                    >
                      {/* Avatar + name */}
                      <div className="sdc-card__head">
                        <div className={`sdc-avatar sdc-avatar--${deptSlug(s.department)}`}>
                          {s.photo
                            ? <img src={s.photo} alt={s.name} />
                            : initials(s.name)
                          }
                        </div>
                        <div className="sdc-card__identity">
                          <div className="sdc-card__name">{s.name}</div>
                          <div className="sdc-card__title">{s.title}</div>
                        </div>
                      </div>

                      {/* Dept + level */}
                      <div className="sdc-card__badges">
                        <span className={`sdc-dept-badge dept-badge--${deptSlug(s.department)}`}>
                          {s.department}
                        </span>
                      </div>

                      {/* Experience stats */}
                      <div className="sdc-card__stats">
                        <div className="sdc-stat">
                          <span className="sdc-stat__num">{s.yearsExperience}</span>
                          <span className="sdc-stat__lbl">yrs exp</span>
                        </div>
                        <div className="sdc-stat__sep" />
                        <div className="sdc-stat">
                          <span className="sdc-stat__num">{s.yearsWithCompany}</span>
                          <span className="sdc-stat__lbl">yrs at Nalot</span>
                        </div>
                        <div className="sdc-stat__sep" />
                        <div className="sdc-stat">
                          <span className="sdc-stat__num">{s.qualifications.length}</span>
                          <span className="sdc-stat__lbl">quals</span>
                        </div>
                      </div>

                      {/* Qualification abbreviation badges */}
                      <div className="sdc-card__quals">
                        {s.qualifications.slice(0, 4).map(q => (
                          <span key={q.abbr} className="sdc-qual-badge">{q.abbr}</span>
                        ))}
                        {s.qualifications.length > 4 && (
                          <span className="sdc-qual-badge sdc-qual-badge--more">
                            +{s.qualifications.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Specialisations */}
                      <div className="sdc-card__specs">
                        {s.specialisations.slice(0, 2).map(spec => (
                          <span key={spec} className="sdc-spec-tag">{spec}</span>
                        ))}
                        {s.specialisations.length > 2 && (
                          <span className="sdc-spec-tag sdc-spec-tag--more">
                            +{s.specialisations.length - 2} more
                          </span>
                        )}
                      </div>

                      <div className="sdc-card__cta">View Profile <span>→</span></div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
