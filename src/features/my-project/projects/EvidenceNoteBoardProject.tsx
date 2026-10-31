import ProjectFrame from '@/components/shared/ProjectFrame'
import EvidenceVisual from '../visuals/EvidenceVisual'
import type { PortfolioMessages, PortfolioProject } from '@/types/portfolio'

interface EvidenceNoteBoardProjectProps {
  project: PortfolioProject
  labels: Pick<PortfolioMessages['work'], 'highlightsLabel' | 'stackLabel' | 'sourceLabel'>
}

export default function EvidenceNoteBoardProject({ project, labels }: EvidenceNoteBoardProjectProps) {
  return (
    <ProjectFrame
      id={project.id}
      name={project.name}
      category={project.category}
      status={project.status}
      description={project.description}
      highlights={project.highlights}
      tags={project.tags}
      links={project.links}
      visual={<EvidenceVisual />}
      highlightsLabel={labels.highlightsLabel}
      stackLabel={labels.stackLabel}
      sourceLabel={labels.sourceLabel}
    />
  )
}
