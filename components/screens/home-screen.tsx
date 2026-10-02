'use client'

import Image from 'next/image'
import {
  Compass,
  Settings,
  HelpCircle,
  BarChart3,
  LayoutGrid,
  Award,
  ChevronRight,
} from 'lucide-react'
import { useApp } from '@/hooks/use-app'
import { PageContainer } from '@/components/layout/page-container'
import { APP_VERSION, sections } from '@/lib/content'

export function HomeScreen() {
  const { navigate, goToSection, progress, t } = useApp()
  const hasPlayed = progress.stats.totalQuizzes > 0

  return (
    <PageContainer>
      <main className="flex flex-1 flex-col px-4 pb-10 pt-6">
        {/* Hero */}
        <section className="animate-fade-in-up overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-foreground/10">
          <div className="relative aspect-[16/11] w-full">
            <Image
              src="/images/kukulcan-hero.png"
              alt="Pirâmide de Kukulcán em Chichén Itzá ao entardecer"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                <Award className="size-3.5" aria-hidden="true" />
                Chichén Itzá
              </span>
              <h1 className="mt-3 text-balance font-heading text-3xl font-extrabold leading-tight text-white">
                Explorando Chichén Itzá
              </h1>
            </div>
          </div>
          <div className="p-5">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {t('home.description')}
            </p>
          </div>
        </section>

        {/* Ações principais */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => (hasPlayed ? navigate('menu') : goToSection(0))}
            className="flex items-center gap-4 rounded-2xl bg-primary p-4 text-left text-primary-foreground shadow-sm transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
              <Compass className="size-6" aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="block font-heading text-lg font-bold">
                {t('home.explore')}
              </span>
              <span className="block text-sm text-primary-foreground/75">
                {t('menu.subtitle')}
              </span>
            </span>
            <ChevronRight className="size-5 opacity-70" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => navigate('quiz-select')}
            className="flex items-center gap-4 rounded-2xl bg-card p-4 text-left ring-1 ring-foreground/10 transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <HelpCircle className="size-6" aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="block font-heading text-lg font-bold text-foreground">
                {t('menu.quiz')}
              </span>
              <span className="block text-sm text-muted-foreground">
                {hasPlayed ? t('quizSelect.subtitle') : t('menu.locked')}
              </span>
            </span>
            <ChevronRight
              className="size-5 text-muted-foreground"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Ações secundárias */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          {progress.unlocked ? (
            <SecondaryButton
              icon={LayoutGrid}
              label={t('menu.title')}
              onClick={() => navigate('menu')}
            />
          ) : (
            <SecondaryButton
              icon={BarChart3}
              label={t('menu.stats')}
              onClick={() => navigate('statistics')}
            />
          )}
          <SecondaryButton
            icon={Settings}
            label={t('home.settings')}
            onClick={() => navigate('settings')}
          />
        </div>

        {/* Progresso de leitura */}
        <div className="mt-6 rounded-2xl bg-muted/60 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">
              {t('content.section')}
            </span>
            <span className="tabular-nums text-muted-foreground">
              {progress.visitedSections.length}/{sections.length}
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{
                width: `${(progress.visitedSections.length / sections.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <p className="mt-auto pt-8 text-center text-xs text-muted-foreground">
          Explorando Chichén Itzá · {t('home.version')} {APP_VERSION}
        </p>
      </main>
    </PageContainer>
  )
}

function SecondaryButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: typeof Settings
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 rounded-2xl bg-card p-4 text-left ring-1 ring-foreground/10 transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground/80">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="font-heading text-sm font-semibold text-foreground">
        {label}
      </span>
    </button>
  )
}
