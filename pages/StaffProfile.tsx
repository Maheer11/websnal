import { useParams, Link, Navigate } from 'react-router-dom'
import { MapPin, Briefcase, Mail, Phone, ExternalLink } from 'lucide-react'
import { staff, ACTIVITY_LABELS, deptSlug } from '../data/staff'
import './staff/Staff.css'

const initials = (name: string) =>
  name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })

const fmtDateTime = (iso: string) => {
  const d = new Date(iso)
  return `${d.toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })} · ${d.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })}`
}

const ROLE_TYPE_LABELS: Record<string, string> = {
  lead:       'Lead Engineer',
  support:    'Support Engineer',
  reviewer:   'Reviewer',
  specialist: 'Specialist',
}

const AWARD_TYPE_LABELS: Record<string, string> = {
  'employee-of-year':  'Employee of the Year',
  'employee-of-month': 'Employee of the Month',
  commendation:        'Commendation',
  external:            'External Recognition',
  milestone:           'Career Milestone',
}

export default function StaffProfile() {
  const { id } = useParams<{ id: string }>()
  const member = staff.find(s => s.id === id)

  if (!member) return <Navigate to="/services/staff-development" replace />

  const sortedActivity = [...member.activity].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const slug = deptSlug(member.department)

  return (
    <div className="sd-page">

      {/* ── Profile header ── */}
      <div className={`spp-header dept-header--${slug}`}>
        <div className="sd-container">
          <Link to="/services/staff-development" className="sp-back">
            ← Staff Development
          </Link>

          <div className="spp-header__inner">
            {/* Avatar */}
            <div className={`spp-avatar sdc-avatar--${slug}`}>
              {member.photo
                ? <img src={member.photo} alt={member.name} className="spp-avatar__img" />
                : initials(member.name)
              }
            </div>

            {/* Core identity */}
            <div className="spp-header__info">
              <div className="spp-header__badges">
                <span className={`sdc-dept-badge dept-badge--${slug}`}>{member.department}</span>
                <span className="spp-level-badge">Level {member.level}</span>
              </div>
              <h1 className="spp-header__name">{member.name}</h1>
              <div className="spp-header__title">{member.title}</div>
              <p className="spp-header__bio">{member.bio}</p>

              {/* Contact links */}
              <div className="spp-header__contact">
                {member.email && (
                  <a href={`mailto:${member.email}`} className="spp-contact-link">
                    <Mail size={13} strokeWidth={2} />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a href={`tel:${member.phone}`} className="spp-contact-link">
                    <Phone size={13} strokeWidth={2} />
                    {member.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="spp-stats-bar">
        <div className="sd-container spp-stats-bar__inner">
          <div className="spp-stat-cell">
            <span className="spp-stat-cell__num">{member.yearsExperience}</span>
            <span className="spp-stat-cell__lbl">Years Experience</span>
          </div>
          <div className="spp-stat-cell">
            <span className="spp-stat-cell__num">{member.yearsWithCompany}</span>
            <span className="spp-stat-cell__lbl">Years at Nalot</span>
          </div>
          <div className="spp-stat-cell">
            <span className="spp-stat-cell__num">{member.qualifications.length}</span>
            <span className="spp-stat-cell__lbl">Qualifications</span>
          </div>
          <div className="spp-stat-cell">
            <span className="spp-stat-cell__num">{member.specialisations.length}</span>
            <span className="spp-stat-cell__lbl">Specialisations</span>
          </div>
          <div className="spp-stat-cell">
            <span className="spp-stat-cell__num">{member.projects.length}</span>
            <span className="spp-stat-cell__lbl">Projects</span>
          </div>
        </div>
      </div>

      {/* ── Profile body ── */}
      <div className="sp-body">
        <div className="sd-container">
          <div className="sp-body__grid">

            {/* ── Main column ── */}
            <div>

              {/* ── MODULE 1: Qualifications & Certifications ── */}
              <div className="sp-section">
                <div className="sp-section__label">Qualifications & Certifications</div>
                {member.qualifications.length > 0 ? (
                  <div className="spp-quals-grid">
                    {member.qualifications.map((q, i) => (
                      <div key={i} className="spp-qual-card">
                        <div className="spp-qual-card__abbr">{q.abbr}</div>
                        <div className="spp-qual-card__info">
                          <div className="spp-qual-card__name">{q.name}</div>
                          <div className="spp-qual-card__issuer">
                            {q.issuer}
                            {q.year && <span className="spp-qual-card__year"> · {q.year}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="sp-empty">No qualifications listed yet.</p>
                )}
              </div>

              {/* ── MODULE 1: Specialisation Areas ── */}
              <div className="sp-section">
                <div className="sp-section__label">Specialisation Areas</div>
                {member.specialisations.length > 0 ? (
                  <div className="spp-spec-pills">
                    {member.specialisations.map((spec, i) => (
                      <span key={i} className="spp-spec-pill">{spec}</span>
                    ))}
                  </div>
                ) : (
                  <p className="sp-empty">No specialisations listed yet.</p>
                )}
              </div>

              {/* ── MODULE 1: Contact & Directory ── */}
              <div className="sp-section">
                <div className="sp-section__label">Contact & Directory</div>
                <div className="spp-contact-grid">
                  {member.email && (
                    <div className="spp-contact-row">
                      <div className="spp-contact-row__icon"><Mail size={15} strokeWidth={1.75} /></div>
                      <div>
                        <div className="spp-contact-row__label">Email</div>
                        <a href={`mailto:${member.email}`} className="spp-contact-row__value">
                          {member.email}
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  )}
                  {member.phone && (
                    <div className="spp-contact-row">
                      <div className="spp-contact-row__icon"><Phone size={15} strokeWidth={1.75} /></div>
                      <div>
                        <div className="spp-contact-row__label">Phone / Internal</div>
                        <a href={`tel:${member.phone}`} className="spp-contact-row__value">
                          {member.phone}
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="spp-contact-row">
                    <div className="spp-contact-row__icon"><Briefcase size={15} strokeWidth={1.75} /></div>
                    <div>
                      <div className="spp-contact-row__label">Department</div>
                      <div className="spp-contact-row__value spp-contact-row__value--plain">
                        {member.department}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── MODULE 2: Project History ── */}
              {member.projects.length > 0 && (
                <div className="sp-section">
                  <div className="sp-section__label">Project History</div>
                  <div className="spp-timeline">
                    {[...member.projects]
                      .sort((a, b) => Number(b.year) - Number(a.year))
                      .map((p, i) => (
                      <div key={i} className="spp-timeline__entry">
                        <div className="spp-timeline__year-col">
                          <span className="spp-timeline__year">{p.year}</span>
                          {i < member.projects.length - 1 && <div className="spp-timeline__spine" />}
                        </div>
                        <div className="spp-timeline__body">
                          <div className="spp-timeline__meta">
                            <span className="spp-timeline__location">
                              <MapPin size={11} strokeWidth={2} />{p.location}
                            </span>
                            {p.roleType && (
                              <span className="spp-timeline__role-tag">
                                {ROLE_TYPE_LABELS[p.roleType]}
                              </span>
                            )}
                            {p.deliveredOnTime === true && (
                              <span className="spp-timeline__ontime">Delivered on time</span>
                            )}
                          </div>
                          <div className="spp-timeline__name">{p.name}</div>
                          <div className="spp-timeline__role">{p.role}</div>
                          {p.description && (
                            <p className="spp-timeline__desc">{p.description}</p>
                          )}
                          {p.outcome && (
                            <div className="spp-timeline__outcome">
                              <span className="spp-timeline__outcome-label">Outcome</span>
                              {p.outcome}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── MODULE 2: Performance Highlights ── */}
              {member.performanceReviews.length > 0 && (
                <div className="sp-section">
                  <div className="sp-section__label">Performance Highlights</div>
                  <div className="spp-reviews">
                    {member.performanceReviews.map((rev, i) => (
                      <div key={i} className="spp-review">
                        <div className="spp-review__header">
                          <span className="spp-review__period">{rev.period}</span>
                          <span className={`spp-review__rating spp-review__rating--${rev.overallRating.toLowerCase().replace(/\s+/g, '-')}`}>
                            {rev.overallRating}
                          </span>
                        </div>

                        <blockquote className="spp-review__quote">
                          <p className="spp-review__quote-text">"{rev.managerComment}"</p>
                          {rev.managedBy && (
                            <footer className="spp-review__quote-attr">
                              — {rev.managedBy}
                            </footer>
                          )}
                        </blockquote>

                        {rev.strengths.length > 0 && (
                          <div className="spp-review__strengths">
                            <span className="spp-review__strengths-label">Key strengths this cycle:</span>
                            {' '}{rev.strengths.join(' · ')}
                          </div>
                        )}

                        {rev.staffResponse && (
                          <div className="spp-review__response">
                            <span className="spp-review__response-label">Staff response:</span>
                            {' '}{rev.staffResponse}
                          </div>
                        )}

                        {rev.developmentGoals && rev.developmentGoals.length > 0 && (
                          <div className="spp-review__goals">
                            <div className="spp-review__goals-label">Development goals</div>
                            <ul className="spp-review__goals-list">
                              {rev.developmentGoals.map((g, gi) => (
                                <li key={gi}>{g}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── MODULE 2: Awards & Recognition ── */}
              {member.awards.length > 0 && (
                <div className="sp-section">
                  <div className="sp-section__label">Awards & Recognition</div>
                  <div className="spp-awards">
                    {member.awards.map((award, i) => (
                      <div key={i} className="spp-award">
                        <div className="spp-award__type">{AWARD_TYPE_LABELS[award.type]}</div>
                        <div className="spp-award__title">{award.title}</div>
                        <p className="spp-award__desc">{award.description}</p>
                        <div className="spp-award__footer">
                          {award.grantedBy && (
                            <span className="spp-award__by">{award.grantedBy}</span>
                          )}
                          <span className="spp-award__date">{fmtDate(award.date)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Articles ── */}
              {member.articles.length > 0 && (
                <div className="sp-section">
                  <div className="sp-section__label">Published Articles</div>
                  <div className="sp-articles">
                    {member.articles.map((article, i) => (
                      <div key={i} className="sp-article">
                        <a
                          href={article.url ?? '#'}
                          className="sp-article__title"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {article.title}
                        </a>
                        <p className="sp-article__excerpt">{article.excerpt}</p>
                        <span className="sp-article__date">{fmtDate(article.date)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Videos ── */}
              {member.videos.length > 0 && (
                <div className="sp-section">
                  <div className="sp-section__label">Videos</div>
                  <div className="sp-videos">
                    {member.videos.map((v, i) => (
                      <div key={i}>
                        <div className="sp-video__title">{v.title}</div>
                        <div className="sp-video__embed">
                          <iframe
                            src={v.embedUrl}
                            title={v.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar: Activity Log ── */}
            <div className="sp-sidebar">
              <div className="sp-section">
                <div className="sp-section__label">Activity Log</div>
                {sortedActivity.length > 0 ? (
                  <div className="sp-activity">
                    {sortedActivity.map((entry, i) => (
                      <div key={i} className="sp-activity__item">
                        <div className="sp-activity__dot" />
                        <div>
                          <div className="sp-activity__text">{entry.text}</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                            <span className="sp-activity__badge">{ACTIVITY_LABELS[entry.type]}</span>
                            <span className="sp-activity__time">{fmtDateTime(entry.date)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="sp-empty">No activity yet.</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
