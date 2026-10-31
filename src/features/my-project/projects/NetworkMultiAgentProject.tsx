import ProjectFrame from '@/components/shared/ProjectFrame'
import NetworkVisual from '../visuals/NetworkVisual'
import type { PortfolioMessages, PortfolioProject } from '@/types/portfolio'

interface NetworkMultiAgentProjectProps {
  project: PortfolioProject
  labels: Pick<PortfolioMessages['work'], 'highlightsLabel' | 'stackLabel' | 'sourceLabel'>
}

export default function NetworkMultiAgentProject({ project, labels }: NetworkMultiAgentProjectProps) {
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
      visual={<NetworkVisual />}
      highlightsLabel={labels.highlightsLabel}
      stackLabel={labels.stackLabel}
      sourceLabel={labels.sourceLabel}
    />
  )
}
