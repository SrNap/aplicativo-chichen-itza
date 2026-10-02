'use client'

import { ArrowLeft, HelpCircle, BarChart3, Check, ChevronRight } from 'lucide-react'
import { useApp } from '@/hooks/use-app'
import { PageContainer } from '@/components/layout/page-container'
import { TopBar } from '@/components/layout/top-bar'
import { sections } from '@/lib/content'
import { getContentIcon } from '@/lib/icons'

export function MenuScreen() {
  const { navigate, goToSection, progress, t } = useApp()

  return (
    <PageContainer>
      <TopBar
        title={t('menu.title')}
        subtitle={t('menu.subtitle')}
        leadingAction={{
          icon: ArrowLeft,
          label: t('nav.back'),
          onClick: () => navigate('home'),
        }}
      />
      <main className="flex-1 px-4 pb-12 pt-4">
        {/* Atalhos para quiz e estatísticas */}
        <div className="animate-fade-in mb-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => navigate('quiz-select')}
            className="flex items-center gap-3 rounded-2xl bg-accent p-4 text-left text-accent-foreground shadow-sm transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <HelpCircle className="size-6 shrink-0" aria-hidden="true" />
            <span className="font-heading text-sm font-bold leading-tight">
              {t('menu.quiz')}
            </span>
          </button>
          <button
            type="button"
            onClick={() => navigate('statistics')}
            className="flex items-center gap-3 rounded-2xl bg-card p-4 text-left ring-1 ring-foreground/10 transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <BarChart3
              className="size-6 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="font-heading text-sm font-bold leading-tight text-foreground">
              {t('menu.stats')}
            </span>
          </button>
        </div>

        {/* Lista de seções */}
        <ul className="animate-fade-in flex flex-col gap-2">
          {sections.map((section, index) => {
            const Icon = getContentIcon(section.cards[0]?.icon)
            const visited = progress.visitedSections.includes(section.id)
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => goToSection(index)}
                  className="flex w-full items-center gap-3 rounded-2xl bg-card p-3.5 text-left ring-1 ring-foreground/10 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-heading text-sm font-semibold text-foreground">
                      {index + 1}. {section.label}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {section.subtitle}
                    </span>
                  </span>
                  {visited ? (
                    <span
                      className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      aria-label="Lida"
                    >
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                  ) : (
                    <ChevronRight
                      className="size-5 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </main>
    </PageContainer>
  )
}
