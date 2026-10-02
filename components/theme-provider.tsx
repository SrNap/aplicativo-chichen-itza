'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'amoled' | 'system'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  /** Tema realmente aplicado (resolve "system") */
  resolvedTheme: 'light' | 'dark' | 'amoled'
}

const STORAGE_KEY = 'cix-theme'

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.remove('dark', 'amoled')

  let resolved: 'light' | 'dark' | 'amoled' = 'light'
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    resolved = prefersDark ? 'dark' : 'light'
  } else {
    resolved = theme
  }

  if (resolved === 'dark') {
    root.classList.add('dark')
  } else if (resolved === 'amoled') {
    root.classList.add('dark', 'amoled')
  }
  return resolved
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark' | 'amoled'>('light')

  // Carrega tema salvo
  useEffect(() => {
    let stored: Theme = 'system'
    try {
      const raw = localStorage.getItem(STORAGE_KEY) as Theme | null
      if (raw) stored = raw
    } catch {
      /* ignore */
    }
    setThemeState(stored)
    const resolved = applyTheme(stored)
    if (resolved) setResolvedTheme(resolved)
  }, [])

  // Reage a mudanças do sistema quando em modo "system"
  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const resolved = applyTheme('system')
      if (resolved) setResolvedTheme(resolved)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    const resolved = applyTheme(next)
    if (resolved) setResolvedTheme(resolved)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme deve ser usado dentro de ThemeProvider')
  return ctx
}
