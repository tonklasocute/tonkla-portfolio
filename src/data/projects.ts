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
    category: 'Government Energy Agency',
    name: 'Government Energy Management Platform',
    tech: ['Go', 'Next.js', 'REST API', 'PostgreSQL', 'TypeScript'],
    accent: '#F59E0B',
    live: true,
    nda: true,
    role: 'Full-Stack Developer',
    problem:
      'A government energy agency needed one system covering both backend and frontend for its internal operations — from API design to the UI staff use.',
    achievements: [
      'Designed and developed backend services using Go',
      'Built web applications and internal management interfaces with Next.js',
      'Designed REST APIs and database-driven business workflows',
    ],
    stats: [
      { value: 'Go', label: 'backend language' },
      { value: 'Next.js', label: 'frontend framework' },
      { value: 'REST', label: 'api style' },
    ],
    systemShape: [
      [{ label: 'Next.js web app' }],
      [{ label: 'Go REST API', variant: 'highlight' }],
      [{ label: 'PostgreSQL' }],
    ],
    boot: [
      '$ go run ./cmd/api',
      '> config loaded',
      '> db connected',
      '> serving :8080',
    ],
  },
  {
    number: '03',
    category: 'Government Maritime Agency',
    name: 'Marine Vessel Inspection System',
    tech: ['PHP', 'NestJS', 'REST API', 'Database', 'JavaScript/TypeScript'],
    accent: '#3B82F6',
    live: true,
    nda: true,
    role: 'Backend / Full-Stack Developer',
    problem:
      'A government maritime agency needed a system to inspect and manage vessel data and operational records.',
    achievements: [
      'Developed backend services using PHP and NestJS',
      'Designed and implemented REST APIs',
      'Built business logic and workflow-related features',
    ],
    stats: [
      { value: 'PHP', label: 'backend language' },
      { value: 'NestJS', label: 'service framework' },
      { value: 'REST', label: 'api style' },
    ],
    systemShape: [
      [{ label: 'Frontend / API consumers' }],
      [{ label: 'NestJS + PHP services', variant: 'highlight' }],
      [{ label: 'Database layer' }],
    ],
    boot: [
      '$ php artisan serve & nest start',
      '> api ready',
      '> db connected',
      '> serving :8000',
    ],
  },
  {
    number: '04',
    category: 'Government Forestry Agency',
    name: 'Forestry Digital Platform',
    tech: ['Go', 'PostgreSQL', 'REST API'],
    accent: '#22C55E',
    live: true,
    nda: true,
    role: 'Backend Developer',
    problem:
      'Forest-land permits and logging inspections were tracked on paper across district offices — no shared record of what was approved, or where.',
    achievements: [
      'Designed REST APIs for forest-permit and land-use record management',
      'Built PostgreSQL-backed services for tracking logging permits and site inspections',
      'Implemented audit trails to support compliance reporting',
    ],
    stats: [
      { value: 'Go', label: 'backend language' },
      { value: 'REST', label: 'api style' },
      { value: 'PostgreSQL', label: 'database' },
    ],
    systemShape: [
      [{ label: 'REST API · Go', variant: 'highlight' }],
      [{ label: 'Permit & land-use records' }],
      [{ label: 'PostgreSQL · audit log' }],
    ],
    boot: [
      '$ go run ./cmd/api',
      '> db connected',
      '> permits ready',
      '> serving :8080',
    ],
  },
  {
    number: '05',
    category: 'Tourism Platform',
    name: 'Intelligent Travel Guide (ITG)',
    tech: ['Go', 'Next.js', 'REST API', 'PostgreSQL', 'TypeScript'],
    accent: '#A855F7',
    live: false,
    nda: false,
    role: 'Full-Stack Developer',
    problem:
      'A platform to manage and deliver tourism information and services through an Intelligent Travel Guide.',
    achievements: [
      'Developed backend services using Go',
      'Built web interfaces using Next.js',
      'Designed REST APIs and backend business logic',
    ],
    stats: [
      { value: 'Go', label: 'backend language' },
      { value: 'Next.js', label: 'frontend framework' },
      { value: 'REST', label: 'api style' },
    ],
    systemShape: [
      [{ label: 'Next.js web app' }],
      [{ label: 'Go REST API', variant: 'highlight' }],
      [{ label: 'PostgreSQL' }],
    ],
    boot: [
      '$ go run ./cmd/api',
      '> catalog ready',
      '> db connected',
      '> serving :8080',
    ],
  },
  {
    number: '06',
    category: 'Microservices Architecture',
    name: 'E-Exam Platform',
    tech: ['Go', 'Microservices', 'REST API', 'PostgreSQL', 'Docker'],
    accent: '#EF4444',
    live: false,
    nda: false,
    role: 'Backend Developer',
    problem:
      'An online exam platform designed around a microservices architecture, with each business domain as an independent service.',
    achievements: [
      'Designed and implemented backend services using Go',
      'Developed independent microservices for different business domains',
      'Designed REST APIs and service-to-service communication',
    ],
    stats: [
      { value: 'Go', label: 'language' },
      { value: 'REST', label: 'api style' },
      { value: 'Docker', label: 'deployment' },
    ],
    systemShape: [
      [{ label: 'Go microservices', variant: 'highlight' }],
      [{ label: 'REST + service-to-service comms' }],
      [{ label: 'PostgreSQL' }],
    ],
    boot: [
      '$ docker compose up',
      '> auth svc ready',
      '> exam svc ready',
      '> gateway :8080',
    ],
  },
  {
    number: '07',
    category: 'Backend / System Design',
    name: 'Distributed Web Crawler',
    tech: ['Go', 'Gin', 'Redis', 'PostgreSQL', 'WebSocket'],
    accent: '#14B8A6',
    live: false,
    nda: false,
    role: 'Backend / System Design',
    problem:
      'A distributed web crawler designed to handle large volumes of concurrent crawl jobs.',
    achievements: [
      'Designed a distributed worker architecture using a Redis queue with fan-out / fan-in processing',
      'Built priority queues, a dead-letter queue, and URL/content dedup with Redis sets',
      'Implemented WebSocket-based real-time job monitoring, scaling horizontally by adding workers',
    ],
    stats: [
      { value: 'Go', label: 'language' },
      { value: 'Redis', label: 'queue' },
      { value: 'WS', label: 'realtime' },
    ],
    systemShape: [
      [{ label: 'HTTP API · Gin' }],
      [{ label: 'Crawl Service' }],
      [{ label: 'Redis Queue', variant: 'highlight' }],
      [
        { label: 'Worker A', variant: 'highlight' },
        { label: 'Worker B', variant: 'highlight' },
        { label: 'Worker N', variant: 'highlight' },
      ],
      [{ label: 'PostgreSQL + Redis' }],
    ],
    boot: [
      '$ go run ./cmd/api',
      '> redis connected',
      '> workers: 3 ready',
      '> ws :8080',
    ],
  },
  {
    number: '08',
    category: 'Frontend Project',
    name: 'Photo Booth Web Application',
    tech: [
      'Next.js 15',
      'App Router',
      'TypeScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'shadcn/ui',
      'Lucide',
    ],
    accent: '#EC4899',
    live: false,
    nda: false,
    role: 'Frontend Developer',
    problem:
      'A modern photo booth web application focused on UX and an interactive, animated UI.',
    achievements: [
      'Built the application using Next.js 15 App Router',
      'Designed responsive interfaces for desktop and mobile',
      'Implemented animations and interactive experiences with Framer Motion',
    ],
    stats: [
      { value: 'Next 15', label: 'framework' },
      { value: 'App Router', label: 'architecture' },
      { value: 'Framer', label: 'motion' },
    ],
    systemShape: [
      [{ label: 'Next.js App Router', variant: 'highlight' }],
      [{ label: 'Reusable UI components' }],
      [{ label: 'Framer Motion + shadcn/ui' }],
    ],
    boot: ['$ next dev', '> compiled ok', '> ready on :3000'],
  },
  {
    number: '09',
    category: 'Full-Stack / Backend',
    name: 'Real-Time Stock Platform',
    tech: ['Go', 'Next.js', 'TypeScript', 'REST API', 'PostgreSQL', 'Real-Time Data'],
    accent: '#FACC15',
    live: false,
    nda: false,
    role: 'Full-Stack / Backend',
    problem:
      'A platform for tracking stock and portfolio data in real time, from market feeds to transaction-based P&L.',
    achievements: [
      'Designed backend services and APIs for market data and portfolio management',
      'Implemented real-time data updates and a Next.js web interface',
      'Designed data models for holdings, transactions and P&L',
    ],
    stats: [
      { value: 'Go', label: 'backend' },
      { value: 'Next.js', label: 'frontend' },
      { value: 'Real-time', label: 'data updates' },
    ],
    systemShape: [
      [{ label: 'Next.js web app' }],
      [{ label: 'Go REST + real-time API', variant: 'highlight' }],
      [{ label: 'PostgreSQL' }],
    ],
    boot: [
      '$ go run ./cmd/api',
      '> market feed ready',
      '> ws stream ready',
      '> serving :8080',
    ],
  },
]
