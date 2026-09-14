export interface ProjectStat {
  value: string
  label: string
}

export interface ProjectShapeItem {
  label: string
  variant?: 'highlight' | 'redacted'
}

export interface Project {
  number: string
  category: string
  name: string
  tech: string[]
  accent: string
  live: boolean
  nda: boolean
  role: string
  problem: string
  achievements: string[]
  stats: ProjectStat[]
  systemShape: ProjectShapeItem[][]
  boot: string[]
}

const placeholder = (n: number): Project => ({
  number: String(n).padStart(2, '0'),
  category: 'Project category',
  name: `Untitled Project ${n}`,
  tech: ['Go', 'PostgreSQL'],
  accent: '#8A8377',
  live: false,
  nda: true,
  role: 'Role — TBD',
  problem: 'Add a short problem statement for this project.',
  achievements: [
    'Add achievement one',
    'Add achievement two',
    'Add achievement three',
  ],
  stats: [
    { value: '—', label: 'metric one' },
    { value: '—', label: 'metric two' },
    { value: '—', label: 'metric three' },
  ],
  systemShape: [[{ label: 'Add a system layer' }]],
  boot: ['$ go run ./cmd/api', '> serving :8080'],
})

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Tourism & Guide Registry',
    name: 'E-Service Platform',
    tech: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'Docker'],
    accent: '#00ADD8',
    live: true,
    nda: true,
    role: 'Backend Lead',
    problem:
      'Licensing for tour operators ran on paper across regional offices — no single source of truth, and no way to track a file once it left the counter.',
    achievements: [
      'Modelled the licensing domain, split it into Go services with explicit API contracts',
      'Built the multi-step review workflow engine with a full audit trail',
      'Shipped the internal admin console officers use daily',
    ],
    stats: [
      { value: '40k', label: 'requests / day' },
      { value: 'Days', label: 'approval, was weeks' },
      { value: '6', label: 'services in prod' },
    ],
    systemShape: [
      [{ label: 'Public portal · Next.js' }],
      [{ label: 'API gateway + auth' }],
      [
        { label: 'Registry svc · Go', variant: 'highlight' },
        { label: 'Workflow svc · Go', variant: 'highlight' },
      ],
      [{ label: 'PostgreSQL · audit log' }],
      [{ label: '2 gov integrations · under NDA', variant: 'redacted' }],
    ],
    boot: [
      '$ go run ./cmd/api',
      '> migrations ok',
      '> registry ready',
      '> workflow ready',
      '> audit log ready',
      '> serving :8080',
    ],
  },
  {
    number: '02',
    category: 'Government Platform',
    name: 'Controlled Energy Production System',
    tech: ['Go', 'PostgreSQL', 'REST API'],
    accent: '#F59E0B',
    live: false,
    nda: true,
    role: 'Role — TBD',
    problem: 'Add a short problem statement for this project.',
    achievements: [
      'Add achievement one',
      'Add achievement two',
      'Add achievement three',
    ],
    stats: [
      { value: '—', label: 'metric one' },
      { value: '—', label: 'metric two' },
      { value: '—', label: 'metric three' },
    ],
    systemShape: [[{ label: 'Add a system layer' }]],
    boot: ['$ go run ./cmd/api', '> serving :8080'],
  },
  {
    number: '03',
    category: 'Government Platform',
    name: 'Forestry Digital Platform',
    tech: ['Go', 'PostgreSQL', 'REST API'],
    accent: '#22C55E',
    live: false,
    nda: true,
    role: 'Role — TBD',
    problem: 'Add a short problem statement for this project.',
    achievements: [
      'Add achievement one',
      'Add achievement two',
      'Add achievement three',
    ],
    stats: [
      { value: '—', label: 'metric one' },
      { value: '—', label: 'metric two' },
      { value: '—', label: 'metric three' },
    ],
    systemShape: [[{ label: 'Add a system layer' }]],
    boot: ['$ go run ./cmd/api', '> serving :8080'],
  },
  placeholder(4),
  placeholder(5),
  placeholder(6),
  placeholder(7),
  placeholder(8),
]
