import { useEffect, useState } from 'react'

interface UseLocalTimeOptions {
  locale: string
  timeZone: string
  refreshInterval?: number
}

export function useLocalTime({
  locale,
  timeZone,
  refreshInterval = 30_000,
}: UseLocalTimeOptions): string {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat(locale, {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date()))

    update()
    const timer = window.setInterval(update, refreshInterval)
    return () => window.clearInterval(timer)
  }, [locale, refreshInterval, timeZone])

  return time
}
