'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Diálogo de confirmação acessível, no estilo Material Design 3.
 * Fecha ao pressionar Esc ou clicar fora, e prende o foco no botão principal.
 */
export function ConfirmDialog({
  open,
  title,
  message,
  cancelLabel,
  confirmLabel,
  destructive = false,
  onCancel,
  onConfirm,
}: {
  open: boolean
  title: string
  message: string
  cancelLabel: string
  confirmLabel: string
  destructive?: boolean
  onCancel: () => void
  onConfirm: () => void
}) {
  const confirmRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    confirmRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onCancel])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      <button
        type="button"
        aria-label={cancelLabel}
        onClick={onCancel}
        className="animate-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      <div className="animate-scale-in relative w-full max-w-sm rounded-3xl bg-card p-6 shadow-xl ring-1 ring-foreground/10">
        <h2
          id="confirm-title"
          className="font-heading text-xl font-bold text-foreground"
        >
          {title}
        </h2>
        <p className="mt-2 whitespace-pre-line text-pretty leading-relaxed text-muted-foreground">
          {message}
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
          <button
            ref={confirmRef}
            type="button"
            onClick={onConfirm}
            className={cn(
              'h-12 flex-1 rounded-full px-5 text-base font-semibold transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card',
              destructive
                ? 'bg-destructive text-destructive-foreground'
                : 'bg-primary text-primary-foreground',
            )}
          >
            {confirmLabel}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="h-12 flex-1 rounded-full px-5 text-base font-semibold text-foreground ring-1 ring-foreground/15 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
