import type { PortfolioMessages } from '@/types/portfolio'

const en: PortfolioMessages = {
  meta: {
    locale: 'en-US',
    title: 'Mujin — Creative Developer',
    description: 'Mujin’s portfolio — a frontend developer creating clear, beautiful and useful digital experiences.',
  },
  nav: {
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    menu: 'Open menu',
    home: 'Back to top',
    language: 'Switch to Vietnamese',
  },
  hero: {
    kicker: 'Frontend developer × Creative thinker',
    title: 'Creating digital experiences',
    emphasis: 'worth remembering',
    description: 'I turn ideas into digital products that feel clear, beautiful and genuinely useful — from first strategy to final line of code.',
    explore: 'Explore selected work',
    scroll: 'SCROLL TO EXPLORE',
  },
  profile: {
    eyebrow: '01 / PROJECT IN DEVELOPMENT',
    title: 'Multi-AI Agent for',
    emphasis: 'automated network configuration.',
    summary: 'A multi-agent AI system that turns operational requests into structured configuration plans, coordinating cross-checks before proposing changes to network infrastructure.',
    statusLabel: 'Status',
    status: 'In development',
    problemLabel: 'The problem',
    problem: 'Manual network configuration is time-consuming, difficult to synchronize across devices and prone to drift as requirements keep changing.',
    solutionLabel: 'The approach',
    solution: 'Split the workflow among specialized AI agents that interpret intent, plan changes, generate configuration and validate risk through observable steps.',
    flowLabel: 'Agent workflow',
    agents: [
      { code: '01', name: 'Intent Agent', description: 'Turns natural-language requests into normalized network goals and constraints.' },
      { code: '02', name: 'Planner Agent', description: 'Analyzes topology and prepares an ordered, safety-aware change plan.' },
      { code: '03', name: 'Config Agent', description: 'Generates configuration for the selected devices, vendors and policies.' },
      { code: '04', name: 'Validator Agent', description: 'Checks syntax, consistency and potential conflicts before deployment.' },
    ],
    roleLabel: 'My role',
    roles: ['Multi-agent architecture', 'Orchestration workflow', 'Monitoring dashboard', 'Configuration validation layer'],
    stackLabel: 'Technology direction',
    stack: ['Python', 'LLM Orchestration', 'Network Automation', 'React', 'TypeScript'],
  },
  work: {
    eyebrow: '01 / SELECTED WORK',
    title: 'A few ideas',
    emphasis: 'brought to life.',
    intro: 'Three concepts that show how I approach products: start with the story, find the right system, then care for every interaction.',
    note: '* These are illustrative concepts ready to be replaced with your real case studies.',
    projects: [
      {
        id: '01', name: 'Kinu', type: 'E-commerce concept', year: '2026',
        description: 'A quiet furniture shopping experience where products are told through material, space and just enough movement.',
        tags: ['React', 'Motion', 'UX'], color: '#496aff', visual: 'kinu',
      },
      {
        id: '02', name: 'Nami', type: 'Travel dashboard concept', year: '2026',
        description: 'A travel dashboard bringing itinerary, weather and notes into one clear rhythm across every device.',
        tags: ['Product design', 'React', 'API'], color: '#ff6b3d', visual: 'nami',
      },
      {
        id: '03', name: 'Sora', type: 'Editorial concept', year: '2025',
        description: 'A typography-led reading space that makes long-form stories feel approachable and easy to explore.',
        tags: ['Art direction', 'Frontend'], color: '#bed64a', visual: 'sora',
      },
    ],
  },
  about: {
    eyebrow: '02 / ABOUT ME',
    title: 'Good code solves a problem.',
    emphasis: 'Great code',
    titleEnd: 'creates a feeling, too.',
    paragraphs: [
      'I’m Mujin — a frontend developer drawn to interfaces with rhythm, products with logic and details that make people smile.',
      'I work where design meets engineering, close enough to both to keep an idea’s spirit intact as it becomes real.',
    ],
    locationLabel: 'Based in',
    location: 'Vietnam',
    orbit: 'CRAFT • CURIOSITY • CLARITY • ',
    quote: 'I believe good design does not need to shout — it only needs to say the right thing at the right time.',
  },
  services: {
    eyebrow: '03 / HOW I CAN HELP',
    title: 'From first idea',
    emphasis: 'to real product.',
    items: [
      { number: '01', title: 'Web interfaces', description: 'Responsive, systematic React interfaces that remain easy to extend.' },
      { number: '02', title: 'Product experience', description: 'Turning complex user flows into experiences that feel clear, natural and consistent.' },
      { number: '03', title: 'Creative development', description: 'Purposeful movement and interaction that gives a product its own character.' },
    ],
  },
  contact: {
    eyebrow: '04 / LET’S MAKE SOMETHING GOOD',
    title: 'Have an idea?',
    emphasis: 'Let’s bring it to life.',
    email: 'YOUR@EMAIL.COM',
    copied: 'COPIED!',
    localTime: 'LOCAL TIME',
    findMe: 'FIND ME ON',
  },
  footer: {
    crafted: 'DESIGNED WITH INTENT • BUILT WITH REACT',
    top: 'BACK TO TOP ↑',
  },
}

export default en
