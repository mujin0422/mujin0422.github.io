import { ArrowRightIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/i18n/I18nProvider'

export default function MyProfile() {
  const { messages } = useI18n()
  const { profile } = messages

  return (
    <section className="profile-section" id="profile" aria-labelledby="profile-title">
      <div className="profile-heading">
        <div>
          <h2 id="profile-title">{profile.title}<br /><em>{profile.emphasis}</em></h2>
          <p className="profile-summary">{profile.summary}</p>
        </div>
      </div>

      <Separator className="profile-separator" />

      <div className="profile-overview">
        <Card className="profile-card">
          <CardContent>
            <span className="profile-card-label">{profile.problemLabel}</span>
            <p>{profile.problem}</p>
          </CardContent>
        </Card>
        <Card className="profile-card profile-card-accent">
          <CardContent>
            <span className="profile-card-label">{profile.solutionLabel}</span>
            <p>{profile.solution}</p>
          </CardContent>
        </Card>
      </div>

      <div className="profile-flow">
        <div className="profile-subheading">
          <span>{profile.flowLabel}</span>
          <Badge variant="outline">{profile.statusLabel}: {profile.status}</Badge>
        </div>
        <div className="agent-grid">
          {profile.agents.map((agent, index) => (
            <div className="agent-step" key={agent.code}>
              <div className="agent-code">{agent.code}</div>
              <h3>{agent.name}</h3>
              <p>{agent.description}</p>
              {index < profile.agents.length - 1 && <ArrowRightIcon className="agent-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>

      <div className="profile-details">
        <div>
          <span className="profile-card-label">{profile.roleLabel}</span>
          <ul>{profile.roles.map((role) => <li key={role}>{role}</li>)}</ul>
        </div>
        <div>
          <span className="profile-card-label">{profile.stackLabel}</span>
          <div className="profile-stack">
            {profile.stack.map((technology) => <Badge variant="outline" key={technology}>{technology}</Badge>)}
          </div>
        </div>
      </div>
    </section>
  )
}
