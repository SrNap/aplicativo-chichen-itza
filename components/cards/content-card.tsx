import { getContentIcon } from '@/lib/icons'
import type { ContentCard as ContentCardType } from '@/lib/content'

/**
 * Card de informação usado nas páginas educacionais.
 * Divide o conteúdo em blocos curtos e fáceis de ler.
 */
export function ContentCard({
  card,
  index,
}: {
  card: ContentCardType
  index: number
}) {
  const Icon = getContentIcon(card.icon)
  return (
    <article
      className="animate-fade-in-up flex gap-4 rounded-2xl bg-card p-4 ring-1 ring-foreground/10"
      style={{ animationDelay: `${Math.min(index * 60, 300)}ms` }}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-heading text-base font-bold text-foreground">
          {card.title}
        </h3>
        <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
          {card.text}
        </p>
      </div>
    </article>
  )
}
