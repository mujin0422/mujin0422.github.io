import ProjectFrame from '@/components/shared/ProjectFrame'
import ProjectDetails, { type ProjectLabels } from '../components/ProjectDetails'
import EvidenceVisual from '../visuals/EvidenceVisual'
import type { PortfolioProject } from '@/types/portfolio'

interface EvidenceNoteBoardProjectProps {
  project: PortfolioProject
  labels: ProjectLabels
}

export default function EvidenceNoteBoardProject({ project, labels }: EvidenceNoteBoardProjectProps) {
  return (
    <ProjectFrame titleId={`project-${project.id}`} visual={<EvidenceVisual />}>
      <ProjectDetails project={project} labels={labels} />
    </ProjectFrame>
  )
}
