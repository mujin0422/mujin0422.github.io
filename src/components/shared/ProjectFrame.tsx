import type { ReactNode } from 'react'
import { Card } from '@/components/ui/card'

interface ProjectFrameProps {
  titleId: string
  visual: ReactNode
  children: ReactNode
}

/** Only the outer frame: project-specific visuals and details come from feature slots. */
export default function ProjectFrame({ titleId, visual, children }: ProjectFrameProps) {
  return (
    <Card className="project-frame" role="article" aria-labelledby={titleId}>
      {visual}
      <div className="project-frame__body">{children}</div>
    </Card>
  )
}
