import { useCallback } from 'react'

interface UseCopyToClipboardOptions {
  onSuccess?: () => void
  onError?: (error: unknown) => void
}

export function useCopyToClipboard({
  onSuccess,
  onError,
}: UseCopyToClipboardOptions = {}): (value: string) => Promise<void> {
  return useCallback(async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      onSuccess?.()
    } catch (error: unknown) {
      onError?.(error)
    }
  }, [onError, onSuccess])
}
