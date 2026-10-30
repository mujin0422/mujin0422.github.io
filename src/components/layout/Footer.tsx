import { useI18n } from '../../i18n/I18nProvider'

export default function Footer() {
  const { messages } = useI18n()

  return (
    <footer>
      <span>© 2026 MUJIN</span>
      <span>{messages.footer.crafted}</span>
      <a href="#top">{messages.footer.top}</a>
    </footer>
  )
}
