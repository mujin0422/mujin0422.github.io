import ProjectFrame from '@/components/shared/ProjectFrame'
import ProjectDetails, { type ProjectLabels } from '../components/ProjectDetails'
import NetworkVisual from '../visuals/NetworkVisual'
import type { PortfolioProject } from '@/types/portfolio'

interface NetworkMultiAgentProjectProps {
  project: PortfolioProject
  labels: ProjectLabels
}

export default function NetworkMultiAgentProject({ project, labels }: NetworkMultiAgentProjectProps) {
  return (
    <ProjectFrame titleId={`project-${project.id}`} visual={<NetworkVisual />}>
      <ProjectDetails project={project} labels={labels} />
    </ProjectFrame>
  )
}
