import { Fragment, useState } from 'react'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { PortfolioMessages, PortfolioProject } from '@/types/portfolio'

export type ProjectLabels = Pick<PortfolioMessages['work'], 'highlightsLabel' | 'stackLabel' | 'sourceLabel'>

interface ProjectDetailsProps {
  project: PortfolioProject
  labels: ProjectLabels
}

/** Shared project content; keeps ProjectFrame focused on layout alone. */
export default function ProjectDetails({ project, labels }: ProjectDetailsProps) {
  const { highlightsLabel, stackLabel, sourceLabel } = labels
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  return (
    <>
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
              <li key={tag}>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="project-frame__tag"
                  aria-pressed={selectedTech === tag}
                  onClick={() => setSelectedTech(current => current === tag ? null : tag)}
                >
                  {tag}
                </Button>
              </li>
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
                  <GitBranch size={16} aria-hidden="true" />
                  {link.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
        </div>
    </>
  )
}
