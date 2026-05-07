import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin, Calendar, X, Building2, CheckCircle,
  Clock, ChevronLeft, ChevronRight, Images,
} from 'lucide-react'
import './portfolio/Portfolio.css'

/* ─── Hero Gallery Data ─────────────────────────────────────── */
const HERO_SLIDES = [
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85", quote: "Every road we build connects a community to opportunity." },
  { url: "https://images.unsplash.com/photo-1621955511293-5e3dc7b97b07?auto=format&fit=crop&w=700&q=85", quote: "Infrastructure is the foundation on which prosperity is built." },
  { url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=85", quote: "Powering Nigeria, one solar installation at a time." },
  { url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85", quote: "We don’t just build structures — we build the future." },
  { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85", quote: "Precision engineering, from concept to completion." },
  { url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=85", quote: "Building Nigeria’s future, one project at a time." },
  { url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=85", quote: "Where engineering meets excellence." },
  { url: "https://images.unsplash.com/photo-1580893206515-bac0ef2a7eae?auto=format&fit=crop&w=700&q=85", quote: "Delivering quality across every sector." },
]

/* ─── Hero Visual (right column) ───────────────────────────── */
const GRID_SIZE = 4
const TOTAL     = HERO_SLIDES.length

function HeroVisual() {
  const [offset, setOffset] = useState(0)
  const [fade,   setFade]   = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setOffset(o => (o + GRID_SIZE) % TOTAL)
        setFade(true)
      }, 380)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const visible = Array.from({ length: GRID_SIZE }, (_, i) => HERO_SLIDES[(offset + i) % TOTAL])
  const quoteIdx = offset % TOTAL

  return (
    <div className="pf-hero-visual">
      <div className={`pf-hero-grid${fade ? ' pf-hero-grid--visible' : ''}`}>
        {visible.map((slide, i) => (
          <div
            key={`${offset}-${i}`}
            className="pf-hero-grid__cell"
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            <div className="pf-hero-grid__cell-overlay" />
          </div>
        ))}
      </div>
      <div className={`pf-hero-quote${fade ? ' pf-hero-quote--visible' : ''}`}>
        <span className="pf-hero-quote__mark">"</span>
        <p>{HERO_SLIDES[quoteIdx].quote}</p>
      </div>
    </div>
  )
}

const CAT_COLOR: Record<string, string> = {
  'Civil Engineering':     '#2563eb',
  'Building Construction': '#7c3aed',
  'IT Infrastructure':     '#0891b2',
  'Renewable Energy':      '#059669',
}

const projects = [
  {
    id: 1,
    title: 'Abuja Ring Road Phase 2 Rehabilitation',
    category: 'Civil Engineering',
    agency: 'Federal Ministry of Works & Housing',
    location: 'Abuja, FCT',
    start: 'Jan 2022',
    end: 'Nov 2023',
    status: 'Completed' as const,
    desc: 'Full rehabilitation of 38 km of arterial road connecting key federal districts. Works included base course restoration, asphalt overlay, drainage channels, signage, and three bridge deck repairs delivered under the Federal Ministry of Works & Housing.',
    images: [
      'https://images.unsplash.com/photo-1621955511293-5e3dc7b97b07?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1574182245530-967d9b3831af?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Sterling Financial Group HQ Data Centre',
    category: 'IT Infrastructure',
    agency: 'Sterling Financial Group',
    location: 'Ikoyi, Lagos State',
    start: 'Mar 2023',
    end: 'Dec 2023',
    status: 'Completed' as const,
    desc: 'Tier II data centre design-and-build including structured cabling, precision air-conditioning, modular UPS, and comprehensive physical security. Delivered within a 9-month programme in an occupied Grade-A office building.',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 3,
    title: 'Kano State Solar Microgrid Initiative',
    category: 'Renewable Energy',
    agency: 'Kano State Govt / World Bank',
    location: 'Kano State',
    start: 'Jun 2023',
    end: 'Apr 2024',
    status: 'Completed' as const,
    desc: 'Distributed solar microgrid electrifying 12 rural communities across three LGAs. Each site includes PV generation, battery storage, metering, and a local distribution network serving approximately 800 households.',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1466611653911-68686d9f9de5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 4,
    title: 'Federal Ministry of Works Office Complex',
    category: 'Building Construction',
    agency: 'Federal Ministry of Works',
    location: 'Abuja, FCT',
    start: 'Apr 2023',
    end: 'Feb 2024',
    status: 'Completed' as const,
    desc: 'Grade-A government office complex across three floors with M&E, structural works, curtain-wall glazing, and fully integrated IT infrastructure. Delivered entirely in-house by Moftech civil and IT divisions.',
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 5,
    title: 'Kano–Kaduna Highway Corridor Upgrade',
    category: 'Civil Engineering',
    agency: 'Federal Road Maintenance Agency',
    location: 'Kano–Kaduna Corridor',
    start: 'Feb 2021',
    end: 'Aug 2023',
    status: 'Completed' as const,
    desc: 'Road rehabilitation spanning 64 km of the federal trunk route including culvert repairs, shoulder restoration, asphalt overlay, road marking, and emergency drainage works at 14 flood-prone locations.',
    images: [
      'https://images.unsplash.com/photo-1492546643178-2eb5f30c2b6e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1621955511293-5e3dc7b97b07?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1574182245530-967d9b3831af?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1580893206515-bac0ef2a7eae?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 6,
    title: 'FCT Rural Solar Electrification Programme',
    category: 'Renewable Energy',
    agency: 'Rural Electrification Agency (REA)',
    location: 'FCT Satellite Towns',
    start: 'Oct 2022',
    end: 'Jun 2023',
    status: 'Completed' as const,
    desc: 'Off-grid solar home systems and mini-grids deployed to 8 underserved communities around Abuja. Programme delivered 450 kW of combined generation capacity with a 5-year maintenance contract.',
    images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1466611653911-68686d9f9de5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 7,
    title: 'Niger State Urban Drainage Network',
    category: 'Civil Engineering',
    agency: 'Niger State Ministry of Works',
    location: 'Minna, Niger State',
    start: 'Jul 2023',
    end: 'Jan 2024',
    status: 'Completed' as const,
    desc: 'Storm drainage channels, box culverts, and retention structures across three urban wards in Minna. The project reduced annual flood incidents by an estimated 70% within the covered zone.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1621955511293-5e3dc7b97b07?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 8,
    title: 'NNPC Abuja Campus Network Upgrade',
    category: 'IT Infrastructure',
    agency: 'NNPC Limited',
    location: 'Abuja, FCT',
    start: 'Jan 2022',
    end: 'Sep 2022',
    status: 'Completed' as const,
    desc: 'Enterprise-grade network infrastructure upgrade across the 14-building campus. Scope included a new fibre backbone, replacement of all access layer switches, structured cabling to 1,200 workstations, and CCTV integration.',
    images: [
      'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 9,
    title: 'Kaduna State Commercial & Residential Tower',
    category: 'Building Construction',
    agency: 'Kaduna State Infrastructure Corp',
    location: 'Kaduna, Kaduna State',
    start: 'Mar 2023',
    end: 'Dec 2024',
    status: 'Ongoing' as const,
    desc: 'Mixed-use 14-floor tower comprising retail on floors 1–3, open-plan offices on floors 4–10, and luxury apartments on 11–14. Moftech leads all structural, MEP, and IT infrastructure works across a phased programme.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: true,
  },
  {
    id: 10,
    title: 'Federal Polytechnic Campus ICT Build-Out',
    category: 'IT Infrastructure',
    agency: 'National Board for Technical Education',
    location: 'Nasarawa State',
    start: 'Sep 2023',
    end: 'Mar 2024',
    status: 'Completed' as const,
    desc: 'Campus-wide fibre backbone, six fully equipped computer labs (60 seats each), a new server room, and digital learning systems across all faculty buildings at Federal Polytechnic Nasarawa.',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 11,
    title: 'Lagos Industrial Solar Farm — Ikorodu',
    category: 'Renewable Energy',
    agency: 'Lagos State Energy Board',
    location: 'Ikorodu, Lagos State',
    start: 'Jan 2024',
    end: 'Dec 2024',
    status: 'Ongoing' as const,
    desc: '5 MW grid-tied industrial solar installation serving the Ikorodu light manufacturing zone. Includes a 2 MWh BESS, grid-synchronisation equipment, SCADA monitoring, and a 10-year operations contract.',
    images: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1466611653911-68686d9f9de5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 12,
    title: 'Sokoto Urban Roads Upgrade — Phase 1',
    category: 'Civil Engineering',
    agency: 'Sokoto State Ministry of Works',
    location: 'Sokoto, Sokoto State',
    start: 'Apr 2022',
    end: 'Oct 2023',
    status: 'Completed' as const,
    desc: 'Reconstruction of 22 km of primary urban roads including sub-base preparation, base course, asphalt surfacing, kerbing, and pedestrian walkways across six major corridors in Sokoto city.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1621955511293-5e3dc7b97b07?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1492546643178-2eb5f30c2b6e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1574182245530-967d9b3831af?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 13,
    title: 'FCTA Staff Housing Estate — Phase 3',
    category: 'Building Construction',
    agency: 'FCT Administration',
    location: 'Lugbe, Abuja FCT',
    start: 'Jun 2021',
    end: 'Feb 2023',
    status: 'Completed' as const,
    desc: '120-unit residential estate for FCTA civil servants. Scope covers structural works, MEP, internal roads, perimeter wall, solar-powered street lighting, and full utility connections.',
    images: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 14,
    title: 'Cross River Smart Roads Corridor',
    category: 'Civil Engineering',
    agency: 'Cross River State Government',
    location: 'Calabar, Cross River State',
    start: 'Aug 2021',
    end: 'May 2023',
    status: 'Completed' as const,
    desc: 'Dual-carriageway upgrade with smart LED street lighting, road markings, and integrated CCTV infrastructure across an 18 km corridor. Delivered jointly by Moftech Civil Engineering and IT divisions.',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1492546643178-2eb5f30c2b6e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1621955511293-5e3dc7b97b07?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1580893206515-bac0ef2a7eae?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 15,
    title: 'Central Bank of Nigeria Data Centre Upgrade',
    category: 'IT Infrastructure',
    agency: 'Central Bank of Nigeria',
    location: 'Abuja, FCT',
    start: 'May 2024',
    end: 'Dec 2024',
    status: 'Ongoing' as const,
    desc: 'Tier III-ready data centre upgrade covering modular UPS replacement, in-row precision cooling, containment retrofit, enhanced physical access control, and full DCIM monitoring across two raised-floor halls.',
    images: [
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: false,
  },
  {
    id: 16,
    title: 'Abuja Smart City Infrastructure — Phase 1',
    category: 'Building Construction',
    agency: 'FCT Authority / FCDA',
    location: 'Abuja, FCT',
    start: 'Mar 2024',
    end: 'Mar 2025',
    status: 'Ongoing' as const,
    desc: 'Multi-sector Phase 1 covering smart street lighting on four arterial routes, an ICT backbone serving three government facilities, and civil works for a new public plaza adjacent to the Moftech-delivered Ministry Complex.',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
    ],
    featured: true,
  },
]

const CATS = ['All', 'Civil Engineering', 'Building Construction', 'IT Infrastructure', 'Renewable Energy']

const heroStats = [
  { value: '16', label: 'Projects Delivered' },
  { value: '12+', label: 'Client Agencies' },
  { value: '18', label: 'States Active' },
  { value: '2004', label: 'Year Founded' },
]

type Project = typeof projects[0]

/* ─── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ p, onClose }: { p: Project; onClose: () => void }) {
  const [idx, setIdx] = useState(0)
  const total = p.images.length

  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIdx(i => (i + 1) % total), [total])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  const color = CAT_COLOR[p.category] ?? '#057a55'

  return (
    <div className="pf-lb" role="dialog" aria-modal="true" aria-label={p.title}>

      {/* ── Top bar ── */}
      <div className="pf-lb__topbar">
        <div className="pf-lb__topbar-left">
          <span
            className="pf-cat-badge pf-cat-badge--lb"
            style={{ '--cat': color } as React.CSSProperties}
          >
            {p.category}
          </span>
          <h2 className="pf-lb__heading">{p.title}</h2>
        </div>
        <div className="pf-lb__topbar-right">
          <span className="pf-lb__counter">{idx + 1} / {total}</span>
          <button
            className="pf-lb__close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* ── Main body: stage + sidebar ── */}
      <div className="pf-lb__body">

        {/* Image stage */}
        <div className="pf-lb__stage">
          <div
            key={idx}
            className="pf-lb__stage-img"
            style={{ backgroundImage: `url(${p.images[idx]})` }}
            aria-label={`Image ${idx + 1} of ${total}`}
          />

          {/* Nav arrows */}
          {total > 1 && (
            <>
              <button
                className="pf-lb__nav pf-lb__nav--prev"
                onClick={prev}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} strokeWidth={2} />
              </button>
              <button
                className="pf-lb__nav pf-lb__nav--next"
                onClick={next}
                aria-label="Next image"
              >
                <ChevronRight size={22} strokeWidth={2} />
              </button>
            </>
          )}
        </div>

        {/* Info sidebar */}
        <aside className="pf-lb__sidebar">
          <span
            className={`pf-status pf-status--${p.status === 'Ongoing' ? 'ongoing' : 'done'}`}
          >
            {p.status === 'Ongoing'
              ? <span className="pf-status__dot" />
              : <CheckCircle size={11} strokeWidth={2.5} />
            }
            {p.status}
          </span>

          <p className="pf-lb__desc">{p.desc}</p>

          <div className="pf-lb__meta">
            <div className="pf-lb__meta-row">
              <Building2 size={13} className="pf-lb__meta-icon" />
              <div>
                <span className="pf-lb__meta-lbl">Client Agency</span>
                <span className="pf-lb__meta-val">{p.agency}</span>
              </div>
            </div>
            <div className="pf-lb__meta-row">
              <MapPin size={13} className="pf-lb__meta-icon" />
              <div>
                <span className="pf-lb__meta-lbl">Location</span>
                <span className="pf-lb__meta-val">{p.location}</span>
              </div>
            </div>
            <div className="pf-lb__meta-row">
              <Calendar size={13} className="pf-lb__meta-icon" />
              <div>
                <span className="pf-lb__meta-lbl">Timeframe</span>
                <span className="pf-lb__meta-val">{p.start} — {p.end}</span>
              </div>
            </div>
            {p.status === 'Ongoing' && (
              <div className="pf-lb__meta-row">
                <Clock size={13} className="pf-lb__meta-icon" />
                <div>
                  <span className="pf-lb__meta-lbl">Est. Completion</span>
                  <span className="pf-lb__meta-val">{p.end}</span>
                </div>
              </div>
            )}
          </div>

          {/* Thumbnail strip */}
          <div className="pf-lb__thumbs">
            {p.images.map((src, i) => (
              <button
                key={i}
                className={`pf-lb__thumb${i === idx ? ' pf-lb__thumb--active' : ''}`}
                style={{ backgroundImage: `url(${src})` }}
                onClick={() => setIdx(i)}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </aside>
      </div>

      {/* Click backdrop to close */}
      <div className="pf-lb__backdrop" onClick={onClose} />
    </div>
  )
}

/* ─── Project Card ─────────────────────────────────────────── */
function ProjectCard({
  p,
  isFeatured,
  onClick,
}: {
  p: Project
  isFeatured: boolean
  onClick: () => void
}) {
  const color = CAT_COLOR[p.category] ?? '#057a55'

  return (
    <article
      className={`pf-card${isFeatured ? ' pf-card--featured' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      aria-label={`Open gallery for ${p.title}`}
    >
      <div
        className="pf-card__img"
        style={{ backgroundImage: `url(${p.images[0]})` }}
      >
        <div className="pf-card__overlay" />

        {/* Top badges */}
        <div className="pf-card__badges">
          <span
            className="pf-cat-badge"
            style={{ '--cat': color } as React.CSSProperties}
          >
            {p.category}
          </span>
          <div className="pf-card__badges-right">
            <span className="pf-img-count">
              <Images size={10} strokeWidth={2} />
              {p.images.length}
            </span>
            <span className={`pf-status pf-status--${p.status === 'Ongoing' ? 'ongoing' : 'done'}`}>
              {p.status === 'Ongoing'
                ? <span className="pf-status__dot" />
                : <CheckCircle size={10} strokeWidth={2.5} />
              }
              {p.status}
            </span>
          </div>
        </div>

        {/* Bottom info */}
        <div className="pf-card__info">
          <div className="pf-card__agency">{p.agency}</div>
          <h3 className="pf-card__title">{p.title}</h3>
          <div className="pf-card__meta">
            <span className="pf-card__meta-item">
              <MapPin size={10} />{p.location}
            </span>
            <span className="pf-card__meta-sep">·</span>
            <span className="pf-card__meta-item">
              <Calendar size={10} />{p.start} – {p.end}
            </span>
          </div>
        </div>

        {/* Hover panel */}
        <div className="pf-card__hover">
          <p className="pf-card__hover-desc">{p.desc}</p>
          <span className="pf-card__hover-cta">
            <Images size={13} />
            View {p.images.length} Photos →
          </span>
        </div>
      </div>
    </article>
  )
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const [activeCat, setActiveCat] = useState('All')
  const [selected,  setSelected]  = useState<Project | null>(null)

  const filtered  = activeCat === 'All'
    ? projects
    : projects.filter(p => p.category === activeCat)

  const completed = projects.filter(p => p.status === 'Completed').length
  const ongoing   = projects.filter(p => p.status === 'Ongoing').length

  /* Prevent body scroll when lightbox is open */
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <div className="pf-page">

      {/* ── Hero ── */}
      <section className="pf-hero">
        <div className="pf-container pf-hero__grid">
          {/* Left column */}
          <div className="pf-hero__left">
            <span className="pf-eyebrow">Our Portfolio</span>
            <h1 className="pf-hero__title">Work that <span className="pf-hero__title-hl">speaks</span><br />for itself</h1>
            <p className="pf-hero__sub">
              {projects.length} projects across civil engineering, building construction,
              IT infrastructure, and renewable energy — delivered for federal agencies,
              state governments, and private sector clients across 18 Nigerian states.
            </p>
            <div className="pf-hero__stats">
              {heroStats.map(({ value, label }) => (
                <div key={label} className="pf-hero__stat">
                  <span className="pf-hero__stat-num">{value}</span>
                  <span className="pf-hero__stat-lbl">{label}</span>
                </div>
              ))}
            </div>
            <div className="pf-hero__status-bar">
              <span className="pf-status pf-status--done">
                <CheckCircle size={11} strokeWidth={2.5} />{completed} Completed
              </span>
              <span className="pf-status pf-status--ongoing">
                <span className="pf-status__dot" />{ongoing} Ongoing
              </span>
            </div>
          </div>

          {/* Right column */}
          <HeroVisual />
        </div>
      </section>

      {/* ── Sticky filter ── */}
      <div className="pf-filter">
        <div className="pf-container">
          <div className="pf-filter__tabs">
            {CATS.map(cat => (
              <button
                key={cat}
                type="button"
                className={`pf-filter__tab${activeCat === cat ? ' pf-filter__tab--active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="pf-filter__count">
                    {projects.filter(p => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project grid ── */}
      <section className="pf-grid-section">
        <div className="pf-container">
          <div className="pf-grid">
            {filtered.map(p => (
              <ProjectCard
                key={p.id}
                p={p}
                isFeatured={p.featured && activeCat === 'All'}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pf-cta">
        <div className="pf-container">
          <div className="pf-cta__inner">
            <div>
              <h2 className="pf-cta__title">Have a project in mind?</h2>
              <p className="pf-cta__sub">
                Tell us what you're building — we'll tell you how Moftech can deliver it.
              </p>
            </div>
            <div className="pf-cta__btns">
              <Link to="/quote" className="pf-btn pf-btn--primary">Get a Free Quote</Link>
              <Link to="/contact" className="pf-btn pf-btn--outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {selected && <Lightbox p={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
