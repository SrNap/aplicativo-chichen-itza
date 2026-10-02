'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { sections } from '@/lib/content'
import type { Difficulty, PreparedQuestion } from '@/lib/quiz'
import {
  DEFAULT_LOCALE,
  detectLocale,
  translate,
  type Locale,
  type StringKey,
} from '@/lib/i18n'

export type View =
  | 'splash'
  | 'home'
  | 'menu'
  | 'content'
  | 'quiz-select'
  | 'quiz'
  | 'results'
  | 'settings'
  | 'statistics'

export type FontScale = 'normal' | 'grande' | 'maior'

/** Detalhe de cada resposta, usado na revisão do resultado */
export type AnswerDetail = {
  questionId: string
  question: string
  options: string[]
  correctIndex: number
  selectedIndex: number
}

export type QuizResult = {
  difficulty: Difficulty
  total: number
  correct: number
  wrong: number
  percent: number
  timeMs: number
  isNewRecord: boolean
  answers: AnswerDetail[]
}

export type DifficultyBest = {
  bestCorrect: number
  bestTotal: number
  bestPercent: number
}

export type Stats = {
  totalQuizzes: number
  totalQuestions: number
  totalCorrect: number
  totalWrong: number
  totalTimeMs: number
  best: Record<Difficulty, DifficultyBest | null>
}

type Settings = {
  fontScale: FontScale
  locale: Locale
  /** true quando o usuário escolheu o idioma manualmente */
  localeManual: boolean
}

type Progress = {
  /** Navegação completa desbloqueada após concluir um quiz */
  unlocked: boolean
  visitedSections: string[]
  stats: Stats
}

const defaultStats: Stats = {
  totalQuizzes: 0,
  totalQuestions: 0,
  totalCorrect: 0,
  totalWrong: 0,
  totalTimeMs: 0,
  best: { facil: null, medio: null, dificil: null },
}

const defaultProgress: Progress = {
  unlocked: false,
  visitedSections: [],
  stats: defaultStats,
}

const defaultSettings: Settings = {
  fontScale: 'normal',
  locale: DEFAULT_LOCALE,
  localeManual: false,
}

const PROGRESS_KEY = 'cix-progress'
const SETTINGS_KEY = 'cix-settings'

type AppContextValue = {
  view: View
  sectionIndex: number
  difficulty: Difficulty | null
  activeQuiz: PreparedQuestion[] | null
  lastResult: QuizResult | null
  settings: Settings
  progress: Progress
  totalSections: number
  ready: boolean
  t: (key: StringKey, vars?: Record<string, string | number>) => string
  navigate: (view: View) => void
  goToSection: (index: number) => void
  nextSection: () => void
  prevSection: () => void
  startQuiz: (difficulty: Difficulty, questions: PreparedQuestion[]) => void
  finishQuiz: (result: Omit<QuizResult, 'isNewRecord'>) => void
  cancelQuiz: () => void
  updateSettings: (partial: Partial<Settings>) => void
  clearStats: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<View>('splash')
  const [sectionIndex, setSectionIndex] = useState(0)
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const [activeQuiz, setActiveQuiz] = useState<PreparedQuestion[] | null>(null)
  const [lastResult, setLastResult] = useState<QuizResult | null>(null)
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [progress, setProgress] = useState<Progress>(defaultProgress)
  const [ready, setReady] = useState(false)

  // Carrega dados salvos
  useEffect(() => {
    try {
      const rawProgress = localStorage.getItem(PROGRESS_KEY)
      if (rawProgress) {
        const parsed = JSON.parse(rawProgress) as Partial<Progress>
        setProgress({
          ...defaultProgress,
          ...parsed,
          stats: {
            ...defaultStats,
            ...(parsed.stats ?? {}),
            best: { ...defaultStats.best, ...(parsed.stats?.best ?? {}) },
          },
        })
      }
      const rawSettings = localStorage.getItem(SETTINGS_KEY)
      if (rawSettings) {
        const parsed = JSON.parse(rawSettings) as Partial<Settings>
        setSettings({ ...defaultSettings, ...parsed })
      } else {
        // Primeira execução: detecta idioma do dispositivo
        setSettings((prev) => ({ ...prev, locale: detectLocale() }))
      }
    } catch {
      /* ignore */
    }
    setReady(true)
  }, [])

  // Aplica a escala de fonte globalmente (rem)
  useEffect(() => {
    if (typeof document === 'undefined') return
    const scale =
      settings.fontScale === 'maior'
        ? '112.5%'
        : settings.fontScale === 'grande'
          ? '106.25%'
          : '100%'
    document.documentElement.style.fontSize = scale
  }, [settings.fontScale])

  // Aplica idioma e direção do texto
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.lang = settings.locale
    document.documentElement.dir = settings.locale === 'ar' ? 'rtl' : 'ltr'
  }, [settings.locale])

  const persistProgress = useCallback((next: Progress) => {
    setProgress(next)
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
    } catch {
      /* ignore */
    }
  }, [])

  const persistSettings = useCallback((next: Settings) => {
    setSettings(next)
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(next))
    } catch {
      /* ignore */
    }
  }, [])

  const t = useCallback(
    (key: StringKey, vars?: Record<string, string | number>) =>
      translate(settings.locale, key, vars),
    [settings.locale],
  )

  const navigate = useCallback((next: View) => {
    setView(next)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  const markVisited = useCallback((index: number) => {
    const id = sections[index]?.id
    if (!id) return
    setProgress((prev) => {
      if (prev.visitedSections.includes(id)) return prev
      const next = {
        ...prev,
        visitedSections: [...prev.visitedSections, id],
      }
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const goToSection = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, sections.length - 1))
      setSectionIndex(clamped)
      markVisited(clamped)
      navigate('content')
    },
    [markVisited, navigate],
  )

  const nextSection = useCallback(() => {
    setSectionIndex((prev) => {
      const next = Math.min(prev + 1, sections.length - 1)
      markVisited(next)
      if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
      return next
    })
  }, [markVisited])

  const prevSection = useCallback(() => {
    setSectionIndex((prev) => {
      const next = Math.max(prev - 1, 0)
      markVisited(next)
      if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
      return next
    })
  }, [markVisited])

  const startQuiz = useCallback(
    (diff: Difficulty, questions: PreparedQuestion[]) => {
      setDifficulty(diff)
      setActiveQuiz(questions)
      navigate('quiz')
    },
    [navigate],
  )

  const cancelQuiz = useCallback(() => {
    setActiveQuiz(null)
    setDifficulty(null)
    navigate(progress.unlocked ? 'menu' : 'content')
  }, [navigate, progress.unlocked])

  const finishQuiz = useCallback(
    (result: Omit<QuizResult, 'isNewRecord'>) => {
      const previousBest = progress.stats.best[result.difficulty]
      const isNewRecord =
        !previousBest || result.percent > previousBest.bestPercent

      const fullResult: QuizResult = { ...result, isNewRecord }
      setLastResult(fullResult)

      const stats = progress.stats
      const nextBest: DifficultyBest = isNewRecord
        ? {
            bestCorrect: result.correct,
            bestTotal: result.total,
            bestPercent: result.percent,
          }
        : (previousBest as DifficultyBest)

      const nextProgress: Progress = {
        ...progress,
        unlocked: true,
        stats: {
          totalQuizzes: stats.totalQuizzes + 1,
          totalQuestions: stats.totalQuestions + result.total,
          totalCorrect: stats.totalCorrect + result.correct,
          totalWrong: stats.totalWrong + result.wrong,
          totalTimeMs: stats.totalTimeMs + result.timeMs,
          best: { ...stats.best, [result.difficulty]: nextBest },
        },
      }
      persistProgress(nextProgress)
      setActiveQuiz(null)
      navigate('results')
    },
    [navigate, persistProgress, progress],
  )

  const updateSettings = useCallback(
    (partial: Partial<Settings>) => {
      persistSettings({ ...settings, ...partial })
    },
    [persistSettings, settings],
  )

  const clearStats = useCallback(() => {
    persistProgress({ ...progress, stats: defaultStats })
    setLastResult(null)
  }, [persistProgress, progress])

  const value = useMemo<AppContextValue>(
    () => ({
      view,
      sectionIndex,
      difficulty,
      activeQuiz,
      lastResult,
      settings,
      progress,
      totalSections: sections.length,
      ready,
      t,
      navigate,
      goToSection,
      nextSection,
      prevSection,
      startQuiz,
      finishQuiz,
      cancelQuiz,
      updateSettings,
      clearStats,
    }),
    [
      view,
      sectionIndex,
      difficulty,
      activeQuiz,
      lastResult,
      settings,
      progress,
      ready,
      t,
      navigate,
      goToSection,
      nextSection,
      prevSection,
      startQuiz,
      finishQuiz,
      cancelQuiz,
      updateSettings,
      clearStats,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp deve ser usado dentro de AppProvider')
  return ctx
}
