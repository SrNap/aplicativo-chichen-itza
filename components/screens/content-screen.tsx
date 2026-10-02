'use client'

import Image from 'next/image'
import { ArrowLeft, LayoutGrid, Home } from 'lucide-react'
import { useApp } from '@/hooks/use-app'
import { PageContainer } from '@/components/layout/page-container'
import { ContentCard } from '@/components/cards/content-card'
import { ContentNav } from '@/components/navigation/content-nav'
import { sections } from '@/lib/content'

export function ContentScreen() {
  const { sectionIndex, totalSections, navigate, progress, t } = useApp()
  const section = sections[sectionIndex]

  if (!section) return null

  return (
    <PageContainer>
      {/* Barra superior com ações contextuais */}
      <header className="safe-top sticky top-0 z-20 flex items-center gap-1 border-b border-border/60 bg-background/85 px-2 py-2 backdrop-blur-md">
        <button
          type="button"
          onClick={() => navigate(progress.unlocked ? 'menu' : 'home')}
          aria-label={t('nav.back')}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
        </button>
        <div className="min-w-0 flex-1 px-1 text-center">
          <p className="text-xs font-medium text-muted-foreground">
            {t('content.section')} {sectionIndex + 1}/{totalSections}
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate(progress.unlocked ? 'menu' : 'home')}
          aria-label={progress.unlocked ? t('menu.title') : t('nav.home')}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {progress.unlocked ? (
            <LayoutGrid className="size-5" aria-hidden="true" />
          ) : (
            <Home className="size-5" aria-hidden="true" />
          )}
        </button>
      </header>

      {/* Barra de progresso da leitura */}
      <div className="h-1 w-full bg-border">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${((sectionIndex + 1) / totalSections) * 100}%` }}
        />
      </div>

      <main key={section.id} className="animate-fade-in flex-1 px-4 pb-8 pt-5">
        <header className="mb-5">
          <h1 className="text-balance font-heading text-2xl font-extrabold leading-tight text-foreground">
            {section.title}
          </h1>
          <p className="mt-1 text-pretty text-muted-foreground">
            {section.subtitle}
          </p>
        </header>

        {section.image ? (
          <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <Image
              src={section.image || '/placeholder.svg'}
              alt={section.imageAlt ?? section.title}
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
              loading="lazy"
            />
          </div>
        ) : null}

        <p className="mb-5 text-pretty text-lg leading-relaxed text-foreground/90">
          {section.intro}
        </p>

        <div className="flex flex-col gap-3">
          {section.cards.map((card, i) => (
            <ContentCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </main>

      <ContentNav />
    </PageContainer>
  )
}
