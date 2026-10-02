'use client'

import {
  ArrowLeft,
  Sun,
  Moon,
  MoonStar,
  Monitor,
  Type,
  Info,
  Check,
  Palette,
  Languages,
  BarChart3,
  ChevronRight,
  Smartphone,
} from 'lucide-react'
import { useApp, type FontScale } from '@/hooks/use-app'
import { useTheme, type Theme } from '@/components/theme-provider'
import { PageContainer } from '@/components/layout/page-container'
import { TopBar } from '@/components/layout/top-bar'
import { APP_VERSION } from '@/lib/content'
import { locales, type Locale } from '@/lib/i18n'
import type { StringKey } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const themeOptions: { value: Theme; labelKey: StringKey; icon: typeof Sun }[] = [
  { value: 'system', labelKey: 'settings.themeSystem', icon: Monitor },
  { value: 'light', labelKey: 'settings.themeLight', icon: Sun },
  { value: 'dark', labelKey: 'settings.themeDark', icon: Moon },
  { value: 'amoled', labelKey: 'settings.themeAmoled', icon: MoonStar },
]

const fontOptions: { value: FontScale; labelKey: StringKey; size: string }[] = [
  { value: 'normal', labelKey: 'settings.fontNormal', size: 'size-4' },
  { value: 'grande', labelKey: 'settings.fontLarge', size: 'size-5' },
  { value: 'maior', labelKey: 'settings.fontLarger', size: 'size-6' },
]

export function SettingsScreen() {
  const { navigate, settings, updateSettings, t } = useApp()
  const { theme, setTheme } = useTheme()

  return (
    <PageContainer>
      <TopBar
        title={t('settings.title')}
        leadingAction={{
          icon: ArrowLeft,
          label: t('nav.back'),
          onClick: () => navigate('home'),
        }}
      />
      <main className="flex-1 px-4 pb-12 pt-4">
        <div className="animate-fade-in flex flex-col gap-6">
          {/* Aparência */}
          <section>
            <SectionLabel icon={Palette}>{t('settings.appearance')}</SectionLabel>
            <div className="flex flex-col gap-4 rounded-2xl bg-card p-4 ring-1 ring-foreground/10">
              <div>
                <p className="mb-2 text-sm font-medium text-foreground">
                  {t('settings.theme')}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {themeOptions.map((option) => {
                    const Icon = option.icon
                    const active = theme === option.value
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setTheme(option.value)}
                        aria-pressed={active}
                        className={cn(
                          'flex items-center gap-3 rounded-xl p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          active
                            ? 'bg-primary/10 text-primary ring-1 ring-primary/30'
                            : 'text-foreground hover:bg-muted',
                        )}
                      >
                        <Icon className="size-5 shrink-0" aria-hidden="true" />
                        <span className="flex-1 text-sm font-medium">
                          {t(option.labelKey)}
                        </span>
                        {active ? (
                          <Check className="size-4 shrink-0" aria-hidden="true" />
                        ) : null}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-foreground">
                  {t('settings.fontSize')}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {fontOptions.map((option) => {
                    const active = settings.fontScale === option.value
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          updateSettings({ fontScale: option.value })
                        }
                        aria-pressed={active}
                        className={cn(
                          'flex flex-col items-center gap-1 rounded-xl py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          active
                            ? 'bg-primary/10 text-primary ring-1 ring-primary/30'
                            : 'text-foreground hover:bg-muted',
                        )}
                      >
                        <Type className={option.size} aria-hidden="true" />
                        <span className="text-xs font-medium">
                          {t(option.labelKey)}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Idioma */}
          <section>
            <SectionLabel icon={Languages}>{t('settings.language')}</SectionLabel>
            <p className="mb-2 px-1 text-xs text-muted-foreground">
              {t('settings.languageDesc')}
            </p>
            <div className="grid grid-cols-1 gap-2 rounded-2xl bg-card p-2 ring-1 ring-foreground/10 sm:grid-cols-2">
              {locales.map((loc) => {
                const active = settings.locale === loc.code
                return (
                  <button
                    key={loc.code}
                    type="button"
                    onClick={() =>
                      updateSettings({
                        locale: loc.code as Locale,
                        localeManual: true,
                      })
                    }
                    aria-pressed={active}
                    dir={loc.dir}
                    className={cn(
                      'flex items-center gap-3 rounded-xl p-3 text-start transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      active
                        ? 'bg-primary/10 text-primary ring-1 ring-primary/30'
                        : 'text-foreground hover:bg-muted',
                    )}
                  >
                    <span className="flex-1 text-sm font-medium">
                      {loc.label}
                    </span>
                    {active ? (
                      <Check className="size-4 shrink-0" aria-hidden="true" />
                    ) : null}
                  </button>
                )
              })}
            </div>
          </section>

          {/* Estatísticas */}
          <section>
            <SectionLabel icon={BarChart3}>
              {t('settings.statistics')}
            </SectionLabel>
            <button
              type="button"
              onClick={() => navigate('statistics')}
              className="flex w-full items-center gap-3 rounded-2xl bg-card p-4 text-left ring-1 ring-foreground/10 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <BarChart3 className="size-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-foreground">
                  {t('settings.openStats')}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {t('settings.statisticsDesc')}
                </span>
              </span>
              <ChevronRight
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
            </button>
          </section>

          {/* Sobre / Aplicativo */}
          <section>
            <SectionLabel icon={Info}>{t('settings.about')}</SectionLabel>
            <div className="rounded-2xl bg-card p-4 ring-1 ring-foreground/10">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Smartphone className="size-5" aria-hidden="true" />
                </span>
                <div className="text-sm text-muted-foreground">
                  <p className="font-heading text-base font-bold text-foreground">
                    Explorando Chichén Itzá
                  </p>
                  <p className="mt-1 text-pretty leading-relaxed">
                    {t('home.description')}
                  </p>
                  <p className="mt-3 tabular-nums">
                    {t('settings.version')} {APP_VERSION}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageContainer>
  )
}

function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: typeof Palette
  children: React.ReactNode
}) {
  return (
    <h2 className="mb-2 flex items-center gap-2 px-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      <Icon className="size-4" aria-hidden="true" />
      {children}
    </h2>
  )
}
