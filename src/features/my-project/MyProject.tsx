import ProjectFrame from '@/components/shared/ProjectFrame'
import { useI18n } from '@/i18n/I18nProvider'

export default function MyProject() {
  const { messages } = useI18n()
  const { work } = messages

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading">
        <div className="projects-heading__label">
          <span aria-hidden="true">✳</span>
          {work.eyebrow}
        </div>
        <div>
          <h2 id="projects-title">{work.title}<br /><em>{work.emphasis}</em></h2>
          <p>{work.intro}</p>
        </div>
      </div>

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
