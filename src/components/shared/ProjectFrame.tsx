import { Fragment, useState, type ReactNode } from 'react'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { PortfolioProject } from '@/types/portfolio'

/**
 * Reusable project presentation. Each my-project feature supplies its own
 * project fields, translated section labels, and visual illustration.
 */
export interface ProjectFrameProps extends PortfolioProject {
  visual: ReactNode
  highlightsLabel: string
  stackLabel: string
  sourceLabel: string
}

export default function ProjectFrame({
  id,
  name,
  category,
  status,
  description,
  highlights,
  tags,
  links,
  visual,
  highlightsLabel,
  stackLabel,
  sourceLabel,
}: ProjectFrameProps) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  return (
    <Card className="project-frame" role="article" aria-labelledby={`project-${id}`}>
      {visual}
      <div className="project-frame__body">
        <CardHeader className="project-frame__header">
          <div className="project-frame__meta">
            <span className="project-frame__number">/ {id}</span>
            <span className="project-frame__category">{category}</span>
          </div>
          <div className="project-frame__intro">
            <Badge variant="outline" className="project-frame__status">
              <span className="project-frame__status-dot" aria-hidden="true" />
              {status}
            </Badge>
            <CardTitle className="project-frame__title">
              <h2 id={`project-${id}`} aria-label={name}>
                {name.split(' ').map((word, index, words) => (
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
              <p>{description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="project-frame__content">
          <Separator className="project-frame__separator" />
          <section className="project-frame__details" aria-labelledby={`project-${id}-highlights`}>
            <h3 id={`project-${id}-highlights`}>{highlightsLabel}</h3>
            <ul className="project-frame__highlights">
              {highlights.map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
          <Separator className="project-frame__separator" />
          <section className="project-frame__details" aria-labelledby={`project-${id}-stack`}>
            <h3 id={`project-${id}-stack`}>{stackLabel}</h3>
            <ul className="project-frame__stack" aria-label={stackLabel}>
              {tags.map(tag => (
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
            {links.map(link => (
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
                  aria-label={`${name} — ${link.label} (GitHub)`}
                >
                  <GitBranch size={16} aria-hidden="true" />
                  {link.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
