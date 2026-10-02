'use client'

import {
  Trophy,
  Check,
  X,
  Clock,
  Target,
  Percent,
  RotateCcw,
  Home,
} from 'lucide-react'
import { useApp } from '@/hooks/use-app'
import { PageContainer } from '@/components/layout/page-container'
import { formatTime } from '@/lib/format'
import { cn } from '@/lib/utils'
import { difficultyLabels } from '@/lib/quiz'

export function ResultsScreen() {
  const { lastResult, navigate, t } = useApp()

  if (!lastResult) return null

  const {
    difficulty,
    total,
    correct,
    wrong,
    percent,
    timeMs,
    isNewRecord,
    answers,
  } = lastResult

  const diffLabel = difficultyLabels[difficulty]

  const metrics = [
    {
      icon: Target,
      label: t('results.score'),
      value: `${correct}/${total}`,
    },
    { icon: Percent, label: t('results.percentage'), value: `${percent}%` },
    { icon: Check, label: t('results.correct'), value: String(correct) },
    { icon: X, label: t('results.wrong'), value: String(wrong) },
    { icon: Clock, label: t('results.time'), value: formatTime(timeMs) },
    { icon: Trophy, label: t('results.difficulty'), value: diffLabel },
  ]

  return (
    <PageContainer>
      <main className="animate-fade-in flex-1 px-4 pb-28 pt-8">
        {/* Cabeçalho de resultado */}
        <div className="flex flex-col items-center text-center">
          <div
            className={cn(
              'flex size-20 items-center justify-center rounded-full',
              percent >= 70
                ? 'bg-primary/15 text-primary'
                : percent >= 40
                  ? 'bg-secondary/20 text-secondary-foreground'
                  : 'bg-destructive/10 text-destructive',
            )}
          >
            <span className="font-heading text-2xl font-bold tabular-nums">
              {percent}%
            </span>
          </div>
          <h1 className="mt-4 text-balance font-heading text-2xl font-bold text-foreground">
            {t('results.title')}
          </h1>
          <p className="mt-1 text-pretty text-muted-foreground">
            {t('results.correct')}: {correct}/{total}
          </p>

          {isNewRecord && (
            <div className="animate-scale-in mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-sm">
              <Trophy className="size-4" aria-hidden="true" />
              {t('results.newRecord')}
            </div>
          )}
        </div>

        {/* Métricas */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          {metrics.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <Icon className="size-3.5" aria-hidden="true" />
                {label}
              </span>
              <span className="font-heading text-lg font-bold text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Revisão das respostas */}
        <h2 className="mt-8 font-heading text-lg font-bold text-foreground">
          {t('results.review')}
        </h2>
        <ol className="mt-3 flex flex-col gap-3">
          {answers.map((answer, index) => {
            const isCorrect = answer.selectedIndex === answer.correctIndex
            const selectedText =
              answer.selectedIndex >= 0
                ? answer.options[answer.selectedIndex]
                : '—'
            return (
              <li
                key={answer.questionId}
                className={cn(
                  'rounded-2xl border-l-4 border border-border bg-card p-4',
                  isCorrect ? 'border-l-primary' : 'border-l-destructive',
                )}
              >
                <div className="flex items-start gap-2">
                  <span
                    className={cn(
                      'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full',
                      isCorrect
                        ? 'bg-primary/15 text-primary'
                        : 'bg-destructive/10 text-destructive',
                    )}
                    aria-hidden="true"
                  >
                    {isCorrect ? (
                      <Check className="size-4" />
                    ) : (
                      <X className="size-4" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-pretty font-semibold leading-snug text-foreground">
                      <span className="text-muted-foreground">{index + 1}. </span>
                      {answer.question}
                    </p>

                    {isCorrect ? (
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        <span className="font-medium text-primary">
                          {t('results.correctAnswer')}:{' '}
                        </span>
                        {answer.options[answer.correctIndex]}
                      </p>
                    ) : (
                      <div className="mt-2 flex flex-col gap-1 text-sm leading-relaxed">
                        <p className="text-foreground">
                          <span className="font-medium text-destructive">
                            {t('results.yourAnswer')}:{' '}
                          </span>
                          {selectedText}
                        </p>
                        <p className="text-foreground">
                          <span className="font-medium text-primary">
                            {t('results.correctAnswer')}:{' '}
                          </span>
                          {answer.options[answer.correctIndex]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </main>

      {/* Ações fixas */}
      <nav className="safe-bottom sticky bottom-0 z-20 border-t border-border/60 bg-background/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate('quiz-select')}
            className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <RotateCcw className="size-5" aria-hidden="true" />
            {t('results.restart')}
          </button>
          <button
            type="button"
            onClick={() => navigate('home')}
            className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full text-sm font-semibold text-foreground ring-1 ring-foreground/15 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Home className="size-5" aria-hidden="true" />
            {t('results.home')}
          </button>
        </div>
      </nav>
    </PageContainer>
  )
}
