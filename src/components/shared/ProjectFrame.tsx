import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface ProjectFrameProps {
  titleId: string
  visual: ReactNode
  children: ReactNode
}

/** Reusable frame only: the owning feature supplies its artwork and content. */
export default function ProjectFrame({ titleId, visual, children }: ProjectFrameProps) {
  return (
    <Card className="project-frame" role="article" aria-labelledby={titleId}>
      {visual}
      <CardContent className="project-frame__body">
        {children}
      </CardContent>
    </Card>
  )
}
