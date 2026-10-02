'use client'

import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

type Action = {
  icon: LucideIcon
  label: string
  onClick: () => void
}

/**
 * Barra superior no estilo Material Design 3.
 */
export function TopBar({
  title,
  subtitle,
  leadingAction,
  actions = [],
}: {
  title: string
  subtitle?: string
  leadingAction?: Action
  actions?: Action[]
}) {
  return (
    <header className="safe-top sticky top-0 z-20 border-b border-border/60 bg-background/85 px-2 pb-3 backdrop-blur-md">
      <div className="flex items-center gap-1">
        {leadingAction ? (
          <IconButton action={leadingAction} />
        ) : (
          <span className="w-2" />
        )}
        <div className="min-w-0 flex-1 px-1">
          <h1 className="truncate font-heading text-lg font-bold text-foreground">
            {title}
          </h1>
          {subtitle ? (
            <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-1">
          {actions.map((action) => (
            <IconButton key={action.label} action={action} />
          ))}
        </div>
      </div>
    </header>
  )
}

function IconButton({ action }: { action: Action }) {
  const Icon = action.icon
  return (
    <button
      type="button"
      onClick={action.onClick}
      aria-label={action.label}
      className={cn(
        'inline-flex size-11 shrink-0 items-center justify-center rounded-full text-foreground/80 transition-colors',
        'hover:bg-muted active:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      )}
    >
      <Icon className="size-5" aria-hidden="true" />
    </button>
  )
}
