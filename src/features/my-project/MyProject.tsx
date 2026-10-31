import { useI18n } from '@/i18n/I18nProvider'
import EvidenceNoteBoardProject from './projects/EvidenceNoteBoardProject'
import NetworkMultiAgentProject from './projects/NetworkMultiAgentProject'

export default function MyProject() {
  const { messages } = useI18n()
  const { work } = messages

  return (
    <section className="projects-section" id="projects" aria-label={messages.nav.work}>
      <div className="projects-list">
        <EvidenceNoteBoardProject project={work.projects.evidence} labels={work} />
        <NetworkMultiAgentProject project={work.projects.network} labels={work} />
      </div>
    </section>
  )
}
