import Header from '@/components/layout/Header'
import MainContent from '@/components/layout/MainContent'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <MainContent />
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  )
}
