export type ActivityType = 'article' | 'project' | 'video' | 'achievement' | 'image'

export interface Activity {
  type: ActivityType
  text: string
  date: string
}

export interface Article {
  title: string
  excerpt: string
  date: string
  url?: string
}

export interface Project {
  name: string
  location: string
  role: string
  roleType?: 'lead' | 'support' | 'reviewer' | 'specialist'
  year: string
  status?: 'completed' | 'in-progress'
  deliveredOnTime?: boolean
  description?: string   // prose summary of the project
  outcome?: string       // one-sentence outcome statement
}

export type ReviewRating =
  | 'Exceptional'
  | 'Exceeds Expectations'
  | 'Meets Expectations'
  | 'Needs Improvement'

export interface ReviewPeriod {
  period: string             // "Annual Review — 2024"
  type: 'quarterly' | 'annual'
  overallRating: ReviewRating
  strengths: string[]        // key strength areas for this cycle
  managerComment: string     // featured pull-quote from manager
  managedBy?: string         // "Director of Operations, Nalot"
  staffResponse?: string     // optional staff acknowledgement
  developmentGoals?: string[]
}

export interface Award {
  type: 'employee-of-year' | 'employee-of-month' | 'commendation' | 'external' | 'milestone'
  title: string
  description: string
  date: string               // ISO — year extracted for display
  grantedBy?: string
}

export interface Video {
  title: string
  embedUrl: string
}

export interface Qualification {
  name: string     // Full name: "Certified Project Management Professional"
  abbr: string     // Short form: "PMP"
  issuer: string   // Awarding body
  year?: number    // Year obtained
}

export interface StaffMember {
  id: string
  name: string
  title: string
  department: string
  level: 1 | 2 | 3 | 4
  email?: string
  phone?: string
  photo?: string            // URL when available; falls back to initials avatar
  bio: string
  yearsExperience: number
  yearsWithCompany: number
  qualifications: Qualification[]
  specialisations: string[]
  achievements: string[]    // legacy — kept for activity feed
  articles: Article[]
  projects: Project[]
  performanceReviews: ReviewPeriod[]
  awards: Award[]
  videos: Video[]
  activity: Activity[]
}

export const TIER_LABELS: Record<number, string> = {
  1: 'Executive Leadership',
  2: 'Department Heads',
  3: 'Senior Professionals',
  4: 'Professional Staff',
}

export const ACTIVITY_LABELS: Record<ActivityType, string> = {
  article:     'Published an article',
  project:     'Completed a project',
  video:       'Added a video',
  achievement: 'Earned a certification',
  image:       'Added project images',
}

/* Dept slug → consistent CSS class key */
export const deptSlug = (dept: string): string =>
  dept.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')

export const staff: StaffMember[] = [

  // ── Level 1 — Executive ────────────────────────────────────────────
  {
    id: 'ibrahim-adeyemi',
    name: 'Ibrahim Adeyemi',
    title: 'Managing Director',
    department: 'Executive',
    level: 1,
    email: 'i.adeyemi@nalot.com.ng',
    phone: '+234 802 000 0001',
    bio: 'Over 22 years of experience leading multi-sector infrastructure and technology projects across Nigeria. Founding director of Nalot Multisystems Limited with a track record of delivering federal and state government contracts on schedule.',
    yearsExperience: 22,
    yearsWithCompany: 22,
    qualifications: [
      { name: 'Certified Project Management Professional', abbr: 'PMP',    issuer: 'Project Management Institute (PMI)', year: 2010 },
      { name: 'Fellow, Nigerian Society of Engineers',     abbr: 'FNSE',   issuer: 'Nigerian Society of Engineers (NSE)' },
      { name: 'COREN Registered Engineer',                abbr: 'R.Eng',  issuer: 'Council for the Regulation of Engineering in Nigeria (COREN)', year: 2006 },
      { name: 'Master of Business Administration',        abbr: 'MBA',    issuer: 'University of Lagos', year: 2005 },
    ],
    specialisations: [
      'Multi-sector Infrastructure Development',
      'Federal Government Contracts',
      'Renewable Energy Programme Management',
      'Strategic Project Management',
      'Business Strategy & Growth',
    ],
    achievements: [
      'Excellence in Infrastructure Award — NCCN, 2022',
      'Top 50 Engineering Leaders in Nigeria — BusinessDay, 2021',
    ],
    articles: [
      {
        title: "Bridging Nigeria's Infrastructure Gap: A Multi-Sector Approach",
        excerpt: "Nigeria's infrastructure deficit is not a single-sector problem. Addressing it requires companies capable of operating across civil, digital, and energy domains simultaneously.",
        date: '2026-01-15',
        url: '#',
      },
      {
        title: "Why Renewable Energy Must Lead Nigeria's Development Agenda",
        excerpt: 'Grid reliability remains one of the greatest constraints on Nigerian productivity. Solar microgrids offer a path forward that doesn\'t wait for the national grid to catch up.',
        date: '2025-09-08',
        url: '#',
      },
    ],
    projects: [
      {
        name: 'Abuja Ring Road Phase 2 Rehabilitation',
        location: 'Abuja, FCT', role: 'Project Director', roleType: 'lead', year: '2023',
        status: 'completed', deliveredOnTime: true,
        description: 'Oversaw the full rehabilitation of 38 km of arterial road connecting key federal districts in the FCT, coordinating a multi-disciplinary site team of over 80 professionals across civil, drainage, and signage works.',
        outcome: 'Delivered three weeks ahead of schedule, rated Exceptional by the Federal Ministry of Works & Housing.',
      },
      {
        name: 'Federal Ministry of Works Office Complex',
        location: 'Abuja, FCT', role: 'Executive Sponsor', roleType: 'lead', year: '2024',
        status: 'completed', deliveredOnTime: true,
        description: 'Executive sponsor for the design and construction of a Grade-A federal office complex, integrating structural, mechanical & electrical, and full IT infrastructure under a single Nalot delivery team.',
        outcome: 'Handed over on schedule and within the approved contract sum. Commended directly by the Honourable Minister.',
      },
      {
        name: 'Kano State Solar Microgrid Initiative',
        location: 'Kano, Kano State', role: 'Programme Director', roleType: 'lead', year: '2024',
        status: 'completed', deliveredOnTime: true,
        description: 'Programme director for a distributed solar microgrid covering 12 rural communities across Kano State, jointly funded by the state government and World Bank. Managed contractor coordination, procurement, and government reporting.',
        outcome: 'All 12 community grids commissioned on schedule. Programme held as a model for World Bank rural electrification reporting in Nigeria.',
      },
    ],
    performanceReviews: [
      {
        period: 'Annual Review — 2024', type: 'annual',
        overallRating: 'Exceptional',
        strengths: ['Strategic Leadership', 'Multi-stakeholder Management', 'Programme Delivery', 'Client & Government Relations'],
        managerComment: 'Ibrahim has delivered three of the most complex federal contracts in Nalot\'s history simultaneously in 2024 — each on time, each to standard. His ability to hold the confidence of both our government clients and our internal teams under that pressure is genuinely rare.',
        managedBy: 'Board of Directors, Nalot Multisystems',
        developmentGoals: ['Formalise succession planning for key programme director roles', 'Expand Nalot\'s southern Nigeria regional presence by Q3 2025'],
      },
      {
        period: 'Annual Review — 2023', type: 'annual',
        overallRating: 'Exceeds Expectations',
        strengths: ['Project Governance', 'Business Development', 'Technical Oversight'],
        managerComment: 'A strong year defined by the successful delivery of the Abuja Ring Road contract and the launch of our renewable energy division at scale. Ibrahim continues to set the bar for what client-focused delivery looks like at Nalot.',
        managedBy: 'Board of Directors, Nalot Multisystems',
      },
    ],
    awards: [
      {
        type: 'employee-of-year',
        title: 'Employee of the Year — 2024',
        description: 'Awarded in recognition of outstanding leadership on three concurrent federal government projects, delivering a combined contract value of ₦3.2 billion on schedule and within scope.',
        date: '2025-01-15',
        grantedBy: 'Nalot Board of Directors',
      },
      {
        type: 'external',
        title: 'Excellence in Infrastructure Award',
        description: 'Recognised by the Nigerian Council for Construction and Engineering (NCCN) for sustained contribution to federal infrastructure delivery across the North-Central region.',
        date: '2022-11-08',
        grantedBy: 'Nigerian Council for Construction & Engineering (NCCN)',
      },
      {
        type: 'external',
        title: 'Top 50 Engineering Leaders in Nigeria',
        description: 'Named among BusinessDay\'s annual list of Nigeria\'s most influential engineering and infrastructure leaders.',
        date: '2021-06-20',
        grantedBy: 'BusinessDay Media',
      },
    ],
    videos: [
      { title: 'Nalot at Work — Site Overview, Abuja Ring Road', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    activity: [
      { type: 'article',  text: "Published \"Bridging Nigeria's Infrastructure Gap\"",           date: '2026-01-15T09:00:00' },
      { type: 'project',  text: 'Delivered Federal Ministry Office Complex',                     date: '2024-11-30T14:00:00' },
      { type: 'article',  text: "Published \"Why Renewable Energy Must Lead Nigeria's Agenda\"", date: '2025-09-08T10:30:00' },
      { type: 'project',  text: 'Completed Kano Solar Microgrid as Programme Director',          date: '2024-07-20T09:00:00' },
    ],
  },

  // ── Level 2 — Department Heads ─────────────────────────────────────
  {
    id: 'fatima-usman',
    name: 'Fatima Usman',
    title: 'Head of Civil Engineering',
    department: 'Civil Engineering',
    level: 2,
    email: 'f.usman@nalot.com.ng',
    phone: '+234 803 000 0002',
    bio: 'Structural and civil engineering specialist with 14 years of field experience across roads, bridges, and large-scale commercial construction in northern Nigeria. Leads a team of 6 engineers at Nalot.',
    yearsExperience: 14,
    yearsWithCompany: 11,
    qualifications: [
      { name: 'COREN Registered Engineer',                            abbr: 'R.Eng', issuer: 'Council for the Regulation of Engineering in Nigeria (COREN)', year: 2015 },
      { name: 'Bachelor of Engineering, Civil Engineering (1st Class)', abbr: 'B.Eng', issuer: 'Ahmadu Bello University', year: 2012 },
      { name: 'Master of Science, Structural Engineering',            abbr: 'M.Sc',  issuer: 'University of Birmingham, UK', year: 2014 },
      { name: 'Certified Construction Manager',                       abbr: 'CCM',   issuer: 'Chartered Institute of Project Management Nigeria (CIPM)' },
    ],
    specialisations: [
      'Structural Engineering',
      'Road & Bridge Construction',
      'High-Rise Building Foundations',
      'Load-Bearing Design',
      'Geotechnical Assessment',
    ],
    achievements: [
      'Best Paper — Nigerian Society of Engineers Annual Conference, 2023',
      'Promoted to Head of Civil Engineering — 2021',
    ],
    articles: [
      {
        title: 'Load-Bearing Design in High-Rise Construction: The Nigerian Context',
        excerpt: "Soil conditions across Nigeria's major cities present unique challenges for high-rise foundations. This piece examines the Abuja case study and what it taught our team about adaptive engineering.",
        date: '2025-11-20',
        url: '#',
      },
    ],
    projects: [
      {
        name: 'Kaduna Bridge Reconstruction',
        location: 'Kaduna, Kaduna State', role: 'Lead Structural Engineer', roleType: 'lead', year: '2022',
        status: 'completed', deliveredOnTime: true,
        description: 'Led structural assessment, design, and full reconstruction of a critically degraded bridge on a key arterial route in Kaduna. The project required adaptive foundation engineering due to difficult riverside soil conditions.',
        outcome: 'Bridge reopened to traffic on schedule. Structural approach subsequently referenced in a Nalot internal best-practice guide for riverbank foundations.',
      },
      {
        name: 'Abuja Ring Road Phase 2 Rehabilitation',
        location: 'Abuja, FCT', role: 'Civil Engineering Lead', roleType: 'lead', year: '2023',
        status: 'completed', deliveredOnTime: true,
        description: 'Directed all civil and structural works across the 38 km rehabilitation contract, managing a site team of 12 civil engineers and overseeing quality control for sub-base, base course, and wearing course layers.',
        outcome: 'Passed independent Ministry of Works quality inspection with zero corrective orders — the first Nalot road contract to achieve this.',
      },
      {
        name: 'Commercial Tower — Maitama District',
        location: 'Abuja, FCT', role: 'Head Structural Engineer', roleType: 'lead', year: '2024',
        status: 'completed', deliveredOnTime: true,
        description: 'Structural lead for a 14-storey mixed-use commercial tower in Maitama. Responsible for foundation design, column and slab specifications, and coordination with MEP and curtain wall contractors.',
        outcome: 'Structural works completed within programme. Load-bearing system design cited by the client as a key factor in the building\'s early occupancy permit approval.',
      },
    ],
    performanceReviews: [
      {
        period: 'Annual Review — 2024', type: 'annual',
        overallRating: 'Exceptional',
        strengths: ['Structural Design & Analysis', 'Site Team Leadership', 'Quality Assurance', 'Client Technical Communication'],
        managerComment: 'Fatima has raised the standard of structural delivery at Nalot in a way that is visible to our clients. The Maitama tower was the most technically complex structural project we\'ve taken on, and her work on it was exemplary. She leads by example on every site she touches.',
        managedBy: 'Managing Director, Nalot Multisystems',
        developmentGoals: ['Lead Nalot\'s internal structural engineering knowledge-sharing programme', 'Pursue Fellow status with the Nigerian Society of Engineers by 2026'],
      },
      {
        period: 'Annual Review — 2023', type: 'annual',
        overallRating: 'Exceeds Expectations',
        strengths: ['Technical Leadership', 'Quality Control Systems', 'Project Delivery'],
        managerComment: 'The Ring Road project\'s clean quality inspection result speaks for itself. Fatima\'s discipline around QA processes is something the whole civil team benefits from.',
        managedBy: 'Managing Director, Nalot Multisystems',
      },
    ],
    awards: [
      {
        type: 'commendation',
        title: 'Best Paper — NSE Annual Conference 2023',
        description: 'Recognised by the Nigerian Society of Engineers for her paper on adaptive foundation engineering in Abuja\'s laterite soil conditions — drawn directly from the Ring Road project experience.',
        date: '2023-10-15',
        grantedBy: 'Nigerian Society of Engineers (NSE)',
      },
      {
        type: 'milestone',
        title: 'Promotion to Head of Civil Engineering — 2021',
        description: 'Appointed Head of Civil Engineering following five years of consistently exceptional delivery, becoming the first woman to lead a technical department at Nalot Multisystems.',
        date: '2021-04-01',
        grantedBy: 'Nalot Multisystems Board',
      },
    ],
    videos: [],
    activity: [
      { type: 'article',     text: 'Published "Load-Bearing Design in High-Rise Construction"', date: '2025-11-20T11:00:00' },
      { type: 'project',     text: 'Delivered Kaduna Bridge Reconstruction on schedule',         date: '2022-08-15T09:00:00' },
      { type: 'achievement', text: 'Promoted to Head of Civil Engineering',                      date: '2021-04-01T08:00:00' },
    ],
  },
  {
    id: 'chukwuemeka-obi',
    name: 'Chukwuemeka Obi',
    title: 'Head of IT Infrastructure',
    department: 'IT Infrastructure',
    level: 2,
    email: 'c.obi@nalot.com.ng',
    phone: '+234 804 000 0003',
    bio: "Network architect and IT infrastructure specialist with 12 years of enterprise experience. Led deployment of Nalot's largest data centre and structured cabling projects across federal government facilities.",
    yearsExperience: 12,
    yearsWithCompany: 9,
    qualifications: [
      { name: 'Cisco Certified Network Professional',            abbr: 'CCNP',       issuer: 'Cisco Systems', year: 2018 },
      { name: 'CompTIA Network+',                                abbr: 'Network+',   issuer: 'CompTIA', year: 2016 },
      { name: 'CompTIA Security+',                               abbr: 'Security+',  issuer: 'CompTIA', year: 2019 },
      { name: 'Microsoft Azure Solutions Architect Expert',      abbr: 'Azure SA',   issuer: 'Microsoft', year: 2021 },
      { name: 'Bachelor of Science, Computer Science',           abbr: 'B.Sc',       issuer: 'University of Nigeria, Nsukka', year: 2013 },
    ],
    specialisations: [
      'Network Architecture & Design',
      'Data Centre Build & Management',
      'Structured Cabling Systems',
      'Cloud Infrastructure (Azure)',
      'IT Security & Compliance',
    ],
    achievements: [
      'Nalot IT Infrastructure Project of the Year — 2024',
    ],
    articles: [
      {
        title: 'Structured Cabling Best Practices for Nigerian Commercial Builds',
        excerpt: "Retrofitting IT infrastructure into buildings not originally designed for it is one of the most common challenges on Nigerian commercial projects. Here's how we solve it systematically.",
        date: '2025-08-12',
        url: '#',
      },
    ],
    projects: [
      {
        name: 'Corporate HQ Data Centre — Ikoyi',
        location: 'Lagos, Lagos State', role: 'Lead Network Architect', roleType: 'lead', year: '2023',
        status: 'completed', deliveredOnTime: true,
        description: 'Designed and oversaw the build of a Tier II data centre for a leading Nigerian financial institution, covering active network infrastructure, structured cabling, UPS, precision cooling, and physical security systems.',
        outcome: 'Handed over ahead of schedule. The client reported zero network downtime in the first six months post-handover.',
      },
      {
        name: 'Federal Ministry IT Infrastructure Overhaul',
        location: 'Abuja, FCT', role: 'IT Project Manager', roleType: 'lead', year: '2024',
        status: 'completed', deliveredOnTime: true,
        description: 'Managed the full overhaul of IT infrastructure across five federal ministry buildings, including structured cabling, LAN/WAN redesign, server room upgrades, and migration to Microsoft Azure for core workloads.',
        outcome: 'All five buildings delivered within the 14-month programme window. Azure migration completed with zero data loss across 1,200 user accounts.',
      },
    ],
    performanceReviews: [
      {
        period: 'Annual Review — 2024', type: 'annual',
        overallRating: 'Exceeds Expectations',
        strengths: ['Technical Architecture', 'Project Management', 'Cloud Infrastructure', 'Federal Client Engagement'],
        managerComment: 'The federal ministry overhaul was the largest IT infrastructure contract Nalot has ever managed. Chukwuemeka ran it with precision — budget, scope, timeline. His technical depth and his ability to translate complex requirements for non-technical government stakeholders is a genuine competitive asset for this company.',
        managedBy: 'Managing Director, Nalot Multisystems',
        developmentGoals: ['Develop IT infrastructure delivery methodology for future federal contracts', 'Pursue AWS Solutions Architect certification by Q2 2025'],
      },
    ],
    awards: [
      {
        type: 'commendation',
        title: 'IT Infrastructure Project of the Year — 2024',
        description: 'Recognised internally for delivering the Federal Ministry IT Infrastructure Overhaul — Nalot\'s largest technology contract — on time and within budget.',
        date: '2025-01-15',
        grantedBy: 'Nalot Multisystems Management',
      },
    ],
    videos: [
      { title: 'Data Centre Build — Ikoyi, Lagos (Timelapse)', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    activity: [
      { type: 'video',   text: 'Added Data Centre build timelapse',                         date: '2024-03-10T15:30:00' },
      { type: 'article', text: 'Published "Structured Cabling Best Practices"',             date: '2025-08-12T10:00:00' },
      { type: 'project', text: 'Completed Federal Ministry IT Infrastructure Overhaul',     date: '2024-12-01T09:00:00' },
    ],
  },

  // ── Level 3 — Senior Professionals ────────────────────────────────
  {
    id: 'aisha-mahmud',
    name: 'Aisha Mahmud',
    title: 'Senior Civil Engineer',
    department: 'Civil Engineering',
    level: 3,
    email: 'a.mahmud@nalot.com.ng',
    phone: '+234 805 000 0004',
    bio: 'Drainage systems and roads specialist with 8 years in field delivery across northern Nigeria. Known for precision QA processes on government-contracted infrastructure projects.',
    yearsExperience: 8,
    yearsWithCompany: 8,
    qualifications: [
      { name: 'COREN Registered Engineer',                    abbr: 'R.Eng', issuer: 'Council for the Regulation of Engineering in Nigeria (COREN)', year: 2022 },
      { name: 'Bachelor of Engineering, Civil Engineering',   abbr: 'B.Eng', issuer: 'Bayero University Kano', year: 2016 },
      { name: 'Certificate in Construction Quality Management', abbr: 'CQM', issuer: 'Nigerian Institute of Management (NIM)', year: 2020 },
    ],
    specialisations: [
      'Urban Drainage Systems',
      'Road Engineering',
      'Construction Quality Assurance',
      'Site Engineering',
      'Northern Nigeria Infrastructure',
    ],
    achievements: [],
    articles: [],
    projects: [
      {
        name: 'Kano Urban Drainage Improvement',
        location: 'Kano, Kano State', role: 'Site Engineer', roleType: 'specialist', year: '2022',
        status: 'completed', deliveredOnTime: true,
        description: 'Site engineer responsible for the construction and inspection of 14 km of primary drainage channels across three urban districts in Kano. Managed daily site supervision, material testing, and coordination with local contractors.',
        outcome: 'All drainage channels passed hydraulic capacity testing. Flooding incidents in the target districts reduced by an estimated 60% in the following wet season.',
      },
      {
        name: 'Abuja Ring Road Phase 2 Rehabilitation',
        location: 'Abuja, FCT', role: 'QA Engineer', roleType: 'reviewer', year: '2023',
        status: 'completed', deliveredOnTime: true,
        description: 'Quality assurance engineer for the full 38 km road rehabilitation, responsible for materials testing, layer thickness verification, and sign-off documentation for each construction zone.',
        outcome: 'Zero corrective orders issued by the Ministry inspection team — a first for a Nalot road contract. QA framework developed on this project adopted as the company standard.',
      },
    ],
    performanceReviews: [
      {
        period: 'Annual Review — 2024', type: 'annual',
        overallRating: 'Meets Expectations',
        strengths: ['Site QA Discipline', 'Documentation Accuracy', 'Field Engineering'],
        managerComment: 'Aisha\'s QA work on the Ring Road project set a standard that the whole civil team now follows. She is methodical, precise, and reliable under field pressure. The next step is to bring that same rigour into a more senior delivery role.',
        managedBy: 'Head of Civil Engineering, Nalot Multisystems',
        developmentGoals: ['Take lead engineer responsibility on a drainage or road project by H2 2025', 'Complete the NSE Continuing Professional Development programme'],
      },
    ],
    awards: [],
    videos: [],
    activity: [
      { type: 'project',     text: 'Completed QA sign-off on Abuja Ring Road Phase 2',  date: '2023-10-20T08:00:00' },
      { type: 'achievement', text: 'Obtained COREN Engineer registration',               date: '2022-03-01T00:00:00' },
    ],
  },
  {
    id: 'tunde-olawale',
    name: 'Tunde Olawale',
    title: 'Senior Solar Energy Engineer',
    department: 'Renewable Energy',
    level: 3,
    email: 't.olawale@nalot.com.ng',
    phone: '+234 806 000 0005',
    bio: 'Solar systems designer and field engineer with 7 years of experience in off-grid, hybrid, and grid-tied solar installations across 5 Nigerian states.',
    yearsExperience: 7,
    yearsWithCompany: 7,
    qualifications: [
      { name: 'Certified Renewable Energy Professional', abbr: 'CREP',    issuer: 'Nigerian Association of Energy Economics (NAEE)', year: 2021 },
      { name: 'SMA Certified Solar Installer',           abbr: 'SMA CSI', issuer: 'SMA Solar Technology AG', year: 2020 },
      { name: 'Bachelor of Engineering, Electrical Engineering', abbr: 'B.Eng', issuer: 'Obafemi Awolowo University', year: 2017 },
    ],
    specialisations: [
      'Solar System Design & Sizing',
      'Off-grid & Hybrid Installations',
      'Battery Storage Systems',
      'Rural Electrification',
      'Grid-tied Solar Systems',
    ],
    achievements: [],
    articles: [
      {
        title: 'Sizing Solar for Nigerian Businesses: A Practical Framework',
        excerpt: 'Load analysis and battery sizing for Nigerian commercial customers requires accounting for grid unreliability as a baseline, not an exception. This framework has been tested across 40+ installations.',
        date: '2025-10-05',
        url: '#',
      },
    ],
    projects: [
      {
        name: 'Kano State Solar Microgrid Initiative',
        location: 'Kano, Kano State', role: 'Lead Solar Engineer', roleType: 'lead', year: '2024',
        status: 'completed', deliveredOnTime: true,
        description: 'Lead solar systems engineer across 12 community microgrid installations covering a combined capacity of 840 kWp. Responsible for system sizing, inverter selection, battery bank configuration, and commissioning across all sites.',
        outcome: 'All 12 grids commissioned on schedule. Average daily uptime across sites exceeded 18 hours — significantly above the 14-hour programme target.',
      },
      {
        name: 'Rural Electrification — Kwara State',
        location: 'Ilorin, Kwara State', role: 'Systems Designer', roleType: 'specialist', year: '2023',
        status: 'completed', deliveredOnTime: true,
        description: 'Designed off-grid hybrid solar systems for 8 rural health centres and 3 primary schools across Kwara State as part of a state government energy access initiative. Each site required individual load profiling and site assessments.',
        outcome: 'All 11 facilities energised within the 9-month programme window. Health centre solar reliability enabled extended clinic hours at 6 of the 8 sites.',
      },
      {
        name: 'NASENI Research Facility Solar Upgrade',
        location: 'Abuja, FCT', role: 'Senior Solar Engineer', roleType: 'specialist', year: '2022',
        status: 'completed', deliveredOnTime: true,
        description: 'Upgraded an existing grid-tied rooftop solar system at a federal research facility from 45 kWp to 180 kWp, incorporating battery storage to provide critical-load backup during grid outages. Coordinated closely with the facility\'s engineering team on load scheduling.',
        outcome: 'System passed federal procurement inspection on first assessment. Facility energy costs reduced by an estimated 42% in the year following commissioning.',
      },
    ],
    performanceReviews: [
      {
        period: 'Annual Review — 2024', type: 'annual',
        overallRating: 'Exceeds Expectations',
        strengths: ['Solar System Design', 'Field Commissioning', 'Rural Electrification', 'Multi-site Programme Delivery'],
        managerComment: 'Tunde carried the Kano microgrid from design through commissioning across all 12 sites — often working simultaneously on multiple installations. His technical judgement in the field, particularly around battery configuration in the more remote sites, made a real difference to the programme\'s success. A strong year.',
        managedBy: 'Managing Director, Nalot Multisystems',
        developmentGoals: ['Lead the solar engineering scope on Nalot\'s next large-scale government energy contract', 'Pursue COREN registration by Q3 2025'],
      },
      {
        period: 'Annual Review — 2023', type: 'annual',
        overallRating: 'Meets Expectations',
        strengths: ['System Design Accuracy', 'Site Assessment', 'Technical Documentation'],
        managerComment: 'Tunde delivered a clean set of off-grid designs for the Kwara State health and education programme. His documentation and load profiling reports were among the most thorough we\'ve submitted to a state client. The next step is to move him into a lead role where he is managing the full engineering team on site, not just design.',
        managedBy: 'Managing Director, Nalot Multisystems',
      },
    ],
    awards: [
      {
        type: 'commendation',
        title: 'Renewable Energy Engineer of the Year — 2024',
        description: 'Awarded internally in recognition of exceptional field delivery across the Kano Solar Microgrid Initiative — Nalot\'s largest renewable energy programme to date.',
        date: '2025-01-15',
        grantedBy: 'Nalot Multisystems Management',
      },
    ],
    videos: [
      { title: 'Solar Panel Installation — Kano Microgrid Site', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    activity: [
      { type: 'project', text: 'Commissioned Kano Solar Microgrid Phase 1',           date: '2024-06-14T10:00:00' },
      { type: 'article', text: 'Published "Sizing Solar for Nigerian Businesses"',    date: '2025-10-05T09:30:00' },
      { type: 'video',   text: 'Added Kano Microgrid installation walkthrough video', date: '2024-07-01T11:00:00' },
    ],
  },
]
