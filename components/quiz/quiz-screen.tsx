'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ChevronLeft, ChevronRight, Check, Flag } from 'lucide-react'
import { useApp, type AnswerDetail } from '@/hooks/use-app'
import { PageContainer } from '@/components/layout/page-container'
import { ConfirmDialog } from '@/components/ui/confirm-dialog'
import { cn } from '@/lib/utils'

export function QuizScreen() {
  const { activeQuiz, difficulty, finishQuiz, cancelQuiz, t } = useApp()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    activeQuiz ? activeQuiz.map(() => null) : [],
  )
  const [leaveOpen, setLeaveOpen] = useState(false)
  const startRef = useRef<number>(Date.now())

  // Intercepta o botão "voltar" do Android/navegador e a saída do app
  useEffect(() => {
    window.history.pushState({ quiz: true }, '')
    const onPop = () => {
      setLeaveOpen(true)
      window.history.pushState({ quiz: true }, '')
    }
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('popstate', onPop)
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('beforeunload', onBeforeUnload)
    }
  }, [])

  const confirmLeave = useCallback(() => {
    setLeaveOpen(false)
    cancelQuiz()
  }, [cancelQuiz])

  if (!activeQuiz || !difficulty) return null

  const total = activeQuiz.length
  const question = activeQuiz[current]
  const isLast = current === total - 1
  const answeredCount = answers.filter((a) => a !== null).length

  const select = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[current] = optionIndex
      return next
    })
  }

  const handleFinish = () => {
    const details: AnswerDetail[] = activeQuiz.map((q, i) => ({
      questionId: q.id,
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      selectedIndex: answers[i] ?? -1,
    }))
    const correct = details.filter(
      (d) => d.selectedIndex === d.correctIndex,
    ).length
    const wrong = total - correct
    const percent = Math.round((correct / total) * 100)
    finishQuiz({
      difficulty,
      total,
      correct,
      wrong,
      percent,
      timeMs: Date.now() - startRef.current,
      answers: details,
    })
  }

  return (
    <PageContainer>
      {/* Cabeçalho com progresso */}
      <header className="safe-top sticky top-0 z-20 border-b border-border/60 bg-background/90 px-2 py-2 backdrop-blur-md">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLeaveOpen(true)}
            aria-label={t('quiz.leaveTitle')}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <div className="min-w-0 flex-1 px-1">
            <p className="text-sm font-semibold text-foreground">
              {t('quiz.questionOf', { current: current + 1, total })}
            </p>
          </div>
          <span className="shrink-0 px-2 text-xs font-medium tabular-nums text-muted-foreground">
            {answeredCount}/{total} {t('quiz.answered')}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </header>

      <main key={question.id} className="animate-fade-in flex-1 px-4 pb-8 pt-6">
        <h1 className="text-balance font-heading text-xl font-bold leading-snug text-foreground">
          {question.question}
        </h1>

        <div
          role="radiogroup"
          aria-label={question.question}
          className="mt-6 flex flex-col gap-3"
        >
          {question.options.map((option, index) => {
            const selected = answers[current] === index
            const letter = String.fromCharCode(65 + index)
            return (
              <button
                key={index}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => select(index)}
                className={cn(
                  'flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  selected
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:bg-muted',
                )}
              >
                <span
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors',
                    selected
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground',
                  )}
                  aria-hidden="true"
                >
                  {selected ? <Check className="size-4" /> : letter}
                </span>
                <span className="flex-1 text-pretty font-medium leading-relaxed text-foreground">
                  {option}
                </span>
              </button>
            )
          })}
        </div>
      </main>

      {/* Navegação inferior */}
      <nav className="safe-bottom sticky bottom-0 z-20 border-t border-border/60 bg-background/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full text-sm font-semibold text-foreground ring-1 ring-foreground/15 transition-colors hover:bg-muted disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
            {t('quiz.previous')}
          </button>

          {isLast ? (
            <button
              type="button"
              onClick={handleFinish}
              className="flex h-12 flex-[1.4] items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Flag className="size-5" aria-hidden="true" />
              {t('quiz.finish')}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
              className="flex h-12 flex-[1.4] items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t('quiz.next')}
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          )}
        </div>
      </nav>

      <ConfirmDialog
        open={leaveOpen}
        title={t('quiz.leaveTitle')}
        message={t('quiz.leaveMessage')}
        cancelLabel={t('quiz.leaveCancel')}
        confirmLabel={t('quiz.leaveConfirm')}
        destructive
        onCancel={() => setLeaveOpen(false)}
        onConfirm={confirmLeave}
      />
    </PageContainer>
  )
}
