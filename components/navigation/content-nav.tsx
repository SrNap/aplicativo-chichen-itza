'use client'

import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react'
import { useApp } from '@/hooks/use-app'

/**
 * Barra de navegação inferior das páginas educacionais.
 * Antes de concluir um quiz, oferece apenas: Voltar, Ir para o Quiz e Próximo.
 * O botão central leva sempre à seleção de dificuldade do quiz.
 */
export function ContentNav() {
  const { sectionIndex, totalSections, prevSection, nextSection, navigate, t } =
    useApp()

  const isFirst = sectionIndex === 0
  const isLast = sectionIndex === totalSections - 1

  return (
    <nav className="safe-bottom sticky bottom-0 z-20 border-t border-border/60 bg-background/90 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={prevSection}
          disabled={isFirst}
          className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full text-sm font-semibold text-foreground ring-1 ring-foreground/15 transition-colors hover:bg-muted disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
          {t('nav.back')}
        </button>

        <button
          type="button"
          onClick={() => navigate('quiz-select')}
          className="flex h-12 shrink-0 items-center justify-center gap-1.5 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <HelpCircle className="size-5" aria-hidden="true" />
          {t('nav.goToQuiz')}
        </button>

        <button
          type="button"
          onClick={nextSection}
          disabled={isLast}
          className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full text-sm font-semibold text-foreground ring-1 ring-foreground/15 transition-colors hover:bg-muted disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {t('nav.next')}
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}
