import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import en from './locales/en'
import vi from './locales/vi'
import type { Language, PortfolioMessages } from '@/types/portfolio'

const dictionaries: Record<Language, PortfolioMessages> = { vi, en }

interface I18nContextValue {
  language: Language
  locale: string
  messages: PortfolioMessages
  setLanguage: (language: Language) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

function isLanguage(value: string | null): value is Language {
  return value === 'vi' || value === 'en'
}

function getInitialLanguage(): Language {
  const saved = window.localStorage.getItem('portfolio-language')
  if (isLanguage(saved)) return saved
  return window.navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en'
}

export function I18nProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState(getInitialLanguage)
  const messages = dictionaries[language]

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
    document.title = messages.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', messages.meta.description)
  }, [language, messages])

  const value = useMemo<I18nContextValue>(() => ({
    language,
    locale: messages.meta.locale,
    messages,
    setLanguage,
  }), [language, messages])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}
