import { Button } from '@/components/ui/button'
import { MyProject } from '@/features/my-project'
import { useI18n } from '@/i18n/I18nProvider'

export default function MainContent() {
  const { messages } = useI18n()

  return (
    <main id="top">
      <section className="reset-stage" aria-labelledby="portfolio-title">
        <div className="reset-grid" aria-hidden="true" />
        <div className="reset-title-wrap">
          <h1 id="portfolio-title" className="hero-glitch" data-text="MUJIN" aria-label="MUJIN">MUJIN<span>.</span></h1>
        </div>
        <div className="reset-bottom">
          <Button variant="link" asChild className="reset-explore">
            <a href="#projects">
              {messages.hero.explore} <span aria-hidden="true">↗</span>
            </a>
          </Button>
        </div>
      </section>
      <MyProject />
    </main>
  )
}
