'use client'

import { ArrowLeft, Zap, Target, Flame, ChevronRight, Trophy } from 'lucide-react'
import { useApp } from '@/hooks/use-app'
import { PageContainer } from '@/components/layout/page-container'
import { TopBar } from '@/components/layout/top-bar'
import {
  buildQuiz,
  difficultyCount,
  difficultyLabels,
  difficultyDescriptions,
  difficultyOrder,
  type Difficulty,
} from '@/lib/quiz'

const icons: Record<Difficulty, typeof Zap> = {
  facil: Zap,
  medio: Target,
  dificil: Flame,
}

export function QuizSelectScreen() {
  const { navigate, startQuiz, progress, t } = useApp()

  const handleStart = (difficulty: Difficulty) => {
    startQuiz(difficulty, buildQuiz(difficulty))
  }

  return (
    <PageContainer>
      <TopBar
        title={t('quizSelect.title')}
        leadingAction={{
          icon: ArrowLeft,
          label: t('nav.back'),
          onClick: () => navigate(progress.unlocked ? 'menu' : 'content'),
        }}
      />
      <main className="flex-1 px-4 pb-12 pt-4">
        <p className="animate-fade-in mb-5 text-pretty text-muted-foreground">
          {t('quizSelect.subtitle')}
        </p>

        <div className="flex flex-col gap-3">
          {difficultyOrder.map((difficulty) => {
            const Icon = icons[difficulty]
            const best = progress.stats.best[difficulty]
            return (
              <button
                key={difficulty}
                type="button"
                onClick={() => handleStart(difficulty)}
                className="animate-fade-in-up group flex items-center gap-4 rounded-2xl bg-card p-4 text-left ring-1 ring-foreground/10 transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="font-heading text-lg font-bold text-foreground">
                      {difficultyLabels[difficulty]}
                    </span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                      {difficultyCount[difficulty]} {t('quizSelect.questions')}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-pretty text-sm text-muted-foreground">
                    {difficultyDescriptions[difficulty]}
                  </span>
                  {best ? (
                    <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-accent">
                      <Trophy className="size-3.5" aria-hidden="true" />
                      {best.bestCorrect}/{best.bestTotal} ({best.bestPercent}%)
                    </span>
                  ) : null}
                </span>
                <ChevronRight
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-active:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>
      </main>
    </PageContainer>
  )
}
