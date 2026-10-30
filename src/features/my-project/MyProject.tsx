import ProjectFrame from '@/components/shared/ProjectFrame'
import { useI18n } from '@/i18n/I18nProvider'

export default function MyProject() {
  const { messages } = useI18n()
  const { work } = messages

  return (
    <section className="projects-section" id="projects" aria-label={messages.nav.work}>
      <div className="projects-list">
        {work.projects.map((project) => (
          <ProjectFrame
            key={project.id}
            project={project}
            highlightsLabel={work.highlightsLabel}
            stackLabel={work.stackLabel}
            sourceLabel={work.sourceLabel}
          />
        ))}
      </div>
    </section>
  )
}
