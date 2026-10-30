import { MyProfile } from '@/features/my-profile'
import { MyProject } from '@/features/my-project'
import { useI18n } from '@/i18n/I18nProvider'

export default function MainContent() {
  const { messages } = useI18n()

  return (
    <main id="top">
      <section className="reset-stage" aria-labelledby="portfolio-title">
        <div className="reset-grid" aria-hidden="true" />
        <div className="reset-kicker"><span /> PORTFOLIO / 2026</div>
        <div className="reset-title-wrap">
          <p>CREATIVE DEVELOPER</p>
          <h1 id="portfolio-title">MUJIN<span>.</span></h1>
        </div>
        <div className="reset-bottom">
          <p>{messages.hero.description}</p>
          <a className="reset-explore" href="#projects">
            {messages.hero.explore} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <MyProfile />
      <MyProject />
    </main>
  )
}
