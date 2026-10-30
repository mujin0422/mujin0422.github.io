import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { MyProfile } from '../features/my-profile'
import { useI18n } from '../i18n/I18nProvider'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  const { messages } = useI18n()

  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <section className="reset-stage">
          <div className="reset-grid" aria-hidden="true" />
          <div className="reset-kicker"><span /> PORTFOLIO / 2026</div>
          <div className="reset-title-wrap">
            <p>CREATIVE DEVELOPER</p>
            <h1>MUJIN<span>.</span></h1>
          </div>
          <div className="reset-bottom">
            <p>{messages.hero.description}</p>
            <div className="reset-status"><i /> REBUILDING THE EXPERIENCE</div>
          </div>
        </section>
        <MyProfile />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  )
}
