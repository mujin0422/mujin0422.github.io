import { useI18n } from '../../i18n/I18nProvider'
import {
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from '@/components/ui/combobox'
import type { Language } from '@/types/portfolio'

export default function Header() {
  const { language, messages, setLanguage } = useI18n()
  const { nav } = messages

  const handleLanguageChange = (value: Language | null) => {
    if (value) setLanguage(value)
  }

  return (
    <header className="nav-wrap">
      <a className="logo" href="#top" aria-label={nav.home}><span>M</span> MUJIN®</a>
      <div className="nav-actions">
        <Combobox value={language} onValueChange={handleLanguageChange}>
          <ComboboxTrigger className="language-combobox" aria-label={nav.language}>
            <ComboboxValue>{(value: Language) => value.toUpperCase()}</ComboboxValue>
          </ComboboxTrigger>
          <ComboboxContent className="language-combobox-content" align="end">
            <ComboboxList>
              <ComboboxItem className="language-combobox-item" value="vi">VI · Tiếng Việt</ComboboxItem>
              <ComboboxItem className="language-combobox-item" value="en">EN · English</ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </header>
  )
}
