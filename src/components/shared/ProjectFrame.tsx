import { Fragment } from 'react'
import { ArrowUpRight, GitBranch, Network } from 'lucide-react'
import type { PortfolioProject } from '@/types/portfolio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface ProjectFrameProps {
  project: PortfolioProject
  stackLabel: string
  highlightsLabel: string
  sourceLabel: string
}

function EvidenceVisual() {
  return (
    <div className="project-visual project-visual--evidence" aria-hidden="true">
      <div className="project-visual__caption">
        <span>DESKTOP / GNOME</span>
        <span>01 — EVIDENCE</span>
      </div>
      <div className="evidence-scene">
        <svg className="evidence-scene__strings" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 29 29 L 70 42 L 47 76 L 29 29" />
          <path d="M 70 42 L 79 78" />
        </svg>
        <div className="evidence-scene__paper evidence-scene__paper--first">
          <span className="evidence-scene__pin" />
          <span className="evidence-scene__index">NOTE / 001</span>
          <span className="evidence-scene__rule" />
          <span className="evidence-scene__line" />
          <span className="evidence-scene__line evidence-scene__line--short" />
        </div>
        <div className="evidence-scene__photo">
          <span className="evidence-scene__pin" />
          <span className="evidence-scene__photo-image">
            <span className="evidence-scene__photo-horizon" />
          </span>
          <span className="evidence-scene__photo-caption">OBSERVATION — 02</span>
        </div>
        <div className="evidence-scene__paper evidence-scene__paper--second">
          <span className="evidence-scene__pin" />
          <span className="evidence-scene__index">CONNECTION / 03</span>
          <span className="evidence-scene__rule" />
          <span className="evidence-scene__line evidence-scene__line--short" />
        </div>
      </div>
      <span className="project-visual__foot">LOCAL FIRST <span>•</span> OFFLINE READY</span>
    </div>
  )
}

function NetworkVisual() {
  return (
    <div className="project-visual project-visual--network" aria-hidden="true">
      <div className="project-visual__caption">
        <span>AI / NETWORK SYSTEMS</span>
        <span>02 — MULTI-AGENT</span>
      </div>
      <div className="network-scene">
        <svg className="network-scene__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 50 50 L 21 24 M 50 50 L 79 24 M 50 50 L 21 77 M 50 50 L 79 77" />
        </svg>
        <div className="network-scene__core">
          <Network size={26} strokeWidth={1.4} />
          <span>AGENT</span>
          <strong>CORE</strong>
        </div>
        <span className="network-scene__node network-scene__node--one">LLM</span>
        <span className="network-scene__node network-scene__node--two">API</span>
        <span className="network-scene__node network-scene__node--three">GNS3</span>
        <span className="network-scene__node network-scene__node--four">DEVICES</span>
      </div>
      <span className="project-visual__foot">ORCHESTRATION <span>•</span> NETWORK AUTOMATION</span>
    </div>
  )
}

/** Shared editorial card; feature modules own project data and translations. */
export default function ProjectFrame({
  project,
  stackLabel,
  highlightsLabel,
  sourceLabel,
}: ProjectFrameProps) {
  return (
    <Card className="project-frame" role="article" aria-labelledby={'project-' + project.id}>
      {project.visual === 'evidence' ? <EvidenceVisual /> : <NetworkVisual />}
      <CardContent className="project-frame__body">
        <div className="project-frame__meta">
          <span className="project-frame__number">/ {project.id}</span>
          <span className="project-frame__category">{project.category}</span>
        </div>
        <div className="project-frame__intro">
          <Badge variant="outline" className="project-frame__status"><span className="project-frame__status-dot" aria-hidden="true" />{project.status}</Badge>
          <h2 id={'project-' + project.id} aria-label={project.name}>
            {project.name.split(' ').map((word, index, words) => (
              <Fragment key={index}>
                <span className="hero-glitch project-name-glitch" data-text={word} aria-hidden="true">{word}</span>
                {index < words.length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </h2>
          <p>{project.description}</p>
        </div>
        <Separator className="project-frame__separator" />
        <div className="project-frame__details">
          <h3>{highlightsLabel}</h3>
          <ul className="project-frame__highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <Separator className="project-frame__separator" />
        <div className="project-frame__details">
          <h3>{stackLabel}</h3>
          <ul className="project-frame__stack" aria-label={stackLabel}>
            {project.tags.map((tag) => (
              <li key={tag}><Badge variant="outline" className="project-frame__tag">{tag}</Badge></li>
            ))}
          </ul>
        </div>
        <Separator className="project-frame__separator" />
        <div className="project-frame__links" aria-label={sourceLabel}>
          <span>{sourceLabel}</span>
          <div>
            {project.links.map((link) => (
              <Button key={link.href} variant="outline" size="sm" asChild className="project-frame__link">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.name + ' — ' + link.label + ' (GitHub)'}
                >
                  <GitBranch size={15} aria-hidden="true" />
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
