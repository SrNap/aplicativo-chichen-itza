'use client'

import { useApp } from '@/hooks/use-app'
import { SplashScreen } from '@/components/screens/splash-screen'
import { HomeScreen } from '@/components/screens/home-screen'
import { SettingsScreen } from '@/components/settings/settings-screen'
import { ContentScreen } from '@/components/screens/content-screen'
import { MenuScreen } from '@/components/navigation/menu-screen'
import { QuizSelectScreen } from '@/components/quiz/quiz-select-screen'
import { QuizScreen } from '@/components/quiz/quiz-screen'
import { ResultsScreen } from '@/components/quiz/results-screen'
import { StatisticsScreen } from '@/components/statistics/statistics-screen'

export default function Page() {
  const { view } = useApp()

  switch (view) {
    case 'splash':
      return <SplashScreen />
    case 'home':
      return <HomeScreen />
    case 'settings':
      return <SettingsScreen />
    case 'content':
      return <ContentScreen />
    case 'menu':
      return <MenuScreen />
    case 'quiz-select':
      return <QuizSelectScreen />
    case 'quiz':
      return <QuizScreen />
    case 'results':
      return <ResultsScreen />
    case 'statistics':
      return <StatisticsScreen />
    default:
      return <HomeScreen />
  }
}
