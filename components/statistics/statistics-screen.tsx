'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  Zap,
  Target,
  Flame,
  ListChecks,
  CheckCircle2,
  XCircle,
  Percent,
  Clock,
  Trash2,
  Trophy,
} from 'lucide-react'
import { useApp } from '@/hooks/use-app'
import { PageContainer } from '@/components/layout/page-container'
import { TopBar } from '@/components/layout/top-bar'
import { ConfirmDialog } from '@/components/ui/confirm-dialog'
import { formatTime } from '@/lib/format'
import { difficultyOrder, difficultyLabels, type Difficulty } from '@/lib/quiz'

const diffIcons: Record<Difficulty, typeof Zap> = {
  facil: Zap,
  medio: Target,
  dificil: Flame,
}

export function StatisticsScreen() {
  const { navigate, progress, clearStats, t } = useApp()
  const [clearOpen, setClearOpen] = useState(false)
  const { stats } = progress

  const accuracy =
    stats.totalQuestions > 0
      ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
      : 0

  const hasData = stats.totalQuizzes > 0

  const totals = [
    { icon: ListChecks, label: t('stats.totalQuizzes'), value: String(stats.totalQuizzes) },
    { icon: Target, label: t('stats.totalQuestions'), value: String(stats.totalQuestions) },
    { icon: CheckCircle2, label: t('stats.correct'), value: String(stats.totalCorrect) },
    { icon: XCircle, label: t('stats.wrong'), value: String(stats.totalWrong) },
    { icon: Percent, label: t('stats.accuracy'), value: `${accuracy}%` },
    { icon: Clock, label: t('stats.timePlayed'), value: formatTime(stats.totalTimeMs) },
  ]

  return (
    <PageContainer>
      <TopBar
        title={t('stats.title')}
        leadingAction={{
          icon: ArrowLeft,
          label: t('nav.back'),
          onClick: () => navigate(progress.unlocked ? 'menu' : 'home'),
        }}
      />
      <main className="flex-1 px-4 pb-12 pt-4">
        <p className="animate-fade-in mb-5 text-pretty text-sm text-muted-foreground">
          {t('stats.subtitle')}
        </p>

        {!hasData ? (
          <div className="animate-fade-in flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-12 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Trophy className="size-8" aria-hidden="true" />
            </span>
            <p className="text-pretty text-muted-foreground">{t('stats.empty')}</p>
            <button
              type="button"
              onClick={() => navigate('quiz-select')}
              className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t('quizSelect.title')}
            </button>
          </div>
        ) : (
          <>
            {/* Melhores pontuações */}
            <h2 className="mb-2 font-heading text-base font-bold text-foreground">
              {t('stats.bestScores')}
            </h2>
            <div className="mb-6 flex flex-col gap-3">
              {difficultyOrder.map((difficulty) => {
                const Icon = diffIcons[difficulty]
                const best = stats.best[difficulty]
                return (
                  <div
                    key={difficulty}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 font-heading font-semibold text-foreground">
                      {difficultyLabels[difficulty]}
                    </span>
                    <span className="shrink-0 text-right">
                      {best ? (
                        <>
                          <span className="block font-heading text-lg font-bold text-foreground tabular-nums">
                            {best.bestPercent}%
                          </span>
                          <span className="block text-xs text-muted-foreground tabular-nums">
                            {best.bestCorrect}/{best.bestTotal}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-muted-foreground">—</span>
                      )}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Números gerais */}
            <h2 className="mb-2 font-heading text-base font-bold text-foreground">
              {t('stats.totals')}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {totals.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <Icon className="size-3.5" aria-hidden="true" />
                    {label}
                  </span>
                  <span className="font-heading text-lg font-bold text-foreground tabular-nums">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setClearOpen(true)}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold text-destructive ring-1 ring-destructive/30 transition-colors hover:bg-destructive/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive"
            >
              <Trash2 className="size-5" aria-hidden="true" />
              {t('stats.clear')}
            </button>
          </>
        )}
      </main>

      <ConfirmDialog
        open={clearOpen}
        title={t('stats.clearTitle')}
        message={t('stats.clearMessage')}
        cancelLabel={t('quiz.leaveCancel')}
        confirmLabel={t('stats.clear')}
        destructive
        onCancel={() => setClearOpen(false)}
        onConfirm={() => {
          clearStats()
          setClearOpen(false)
        }}
      />
    </PageContainer>
  )
}
