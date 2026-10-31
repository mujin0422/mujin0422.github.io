import { Fragment, useState } from 'react'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { PortfolioMessages, PortfolioProject } from '@/types/portfolio'

export type ProjectLabels = Pick<PortfolioMessages['work'], 'highlightsLabel' | 'stackLabel' | 'sourceLabel'>

interface ProjectDetailsProps {
  project: PortfolioProject
  labels: ProjectLabels
}

/** The owning feature supplies content; shadcn Card slots provide its structure. */
export default function ProjectDetails({ project, labels }: ProjectDetailsProps) {
  const { highlightsLabel, stackLabel, sourceLabel } = labels
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  return (
    <>
      <CardHeader className="project-frame__header">
        <div className="project-frame__meta">
          <span className="project-frame__number">/ {project.id}</span>
          <span className="project-frame__category">{project.category}</span>
        </div>
        <div className="project-frame__intro">
          <Badge variant="outline" className="project-frame__status">
            <span className="project-frame__status-dot" aria-hidden="true" />
            {project.status}
          </Badge>
          <CardTitle className="project-frame__title">
            <h2 id={`project-${project.id}`} aria-label={project.name}>
              {project.name.split(' ').map((word, index, words) => (
                <Fragment key={index}>
                  <span className="hero-glitch project-name-glitch" data-text={word} aria-hidden="true">
                    {word}
                  </span>
                  {index < words.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </h2>
          </CardTitle>
          <CardDescription className="project-frame__description">
            <p>{project.description}</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="project-frame__content">
        <Separator className="project-frame__separator" />
        <section className="project-frame__details" aria-labelledby={`project-${project.id}-highlights`}>
          <h3 id={`project-${project.id}-highlights`}>{highlightsLabel}</h3>
          <ul className="project-frame__highlights">
            {project.highlights.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
        <Separator className="project-frame__separator" />
        <section className="project-frame__details" aria-labelledby={`project-${project.id}-stack`}>
          <h3 id={`project-${project.id}-stack`}>{stackLabel}</h3>
          <ul className="project-frame__stack" aria-label={stackLabel}>
            {project.tags.map(tag => (
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
        </section>
        <Separator className="project-frame__separator" />
      </CardContent>
      <CardFooter className="project-frame__links" aria-label={sourceLabel}>
        <span>{sourceLabel}</span>
        <div>
          {project.links.map(link => (
            <Button
              key={link.href}
              variant="outline"
              size="sm"
              asChild
              className="project-frame__link"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} — ${link.label} (GitHub)`}
              >
                <GitBranch size={16} aria-hidden="true" />
                {link.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Button>
          ))}
        </div>
      </CardFooter>
    </>
  )
}
