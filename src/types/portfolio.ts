export type Language = 'vi' | 'en'

export type ProjectVisual = 'evidence' | 'network'

export interface PortfolioProject {
  id: string
  name: string
  category: string
  status: string
  description: string
  highlights: string[]
  tags: string[]
  visual: ProjectVisual
  links: Array<{ label: string; href: string }>
}

export interface PortfolioService {
  number: string
  title: string
  description: string
}

export interface ProfileAgent {
  code: string
  name: string
  description: string
}

export interface PortfolioMessages {
  meta: {
    locale: string
    title: string
    description: string
  }
  nav: {
    work: string
    about: string
    contact: string
    menu: string
    home: string
    language: string
  }
  hero: {
    kicker: string
    title: string
    emphasis: string
    description: string
    explore: string
    scroll: string
  }
  profile: {
    title: string
    emphasis: string
    summary: string
    statusLabel: string
    status: string
    problemLabel: string
    problem: string
    solutionLabel: string
    solution: string
    flowLabel: string
    agents: ProfileAgent[]
    roleLabel: string
    roles: string[]
    stackLabel: string
    stack: string[]
  }
  work: {
    highlightsLabel: string
    stackLabel: string
    sourceLabel: string
    projects: PortfolioProject[]
  }
  about: {
    eyebrow: string
    title: string
    emphasis: string
    titleEnd: string
    paragraphs: string[]
    locationLabel: string
    location: string
    orbit: string
    quote: string
  }
  services: {
    eyebrow: string
    title: string
    emphasis: string
    items: PortfolioService[]
  }
  contact: {
    eyebrow: string
    title: string
    emphasis: string
    email: string
    copied: string
    localTime: string
    findMe: string
  }
  footer: {
    crafted: string
    top: string
  }
}
