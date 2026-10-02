'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useApp } from '@/hooks/use-app'
import { APP_VERSION } from '@/lib/content'

export function SplashScreen() {
  const { navigate, ready } = useApp()
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!ready) return
    const fadeTimer = setTimeout(() => setLeaving(true), 1900)
    const navTimer = setTimeout(() => navigate('home'), 2300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(navTimer)
    }
  }, [ready, navigate])

  return (
    <div
      className={`flex min-h-dvh flex-col items-center justify-center bg-primary px-6 text-center transition-opacity duration-500 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="animate-scale-in flex flex-col items-center">
        <div className="flex size-32 items-center justify-center rounded-[2rem] bg-primary-foreground/10 p-4 ring-1 ring-primary-foreground/20">
          <Image
            src="/images/logo.png"
            alt="Logotipo do aplicativo Explorando Chichén Itzá"
            width={128}
            height={128}
            className="size-full object-contain drop-shadow-lg"
            priority
          />
        </div>
        <h1 className="mt-8 text-balance font-heading text-3xl font-extrabold tracking-tight text-primary-foreground">
          Explorando
          <br />
          Chichén Itzá
        </h1>
        <p className="mt-3 text-sm font-medium text-primary-foreground/70">
          Descubra a civilização Maia
        </p>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 animate-pulse rounded-full bg-primary-foreground/60 [animation-delay:0ms]" />
          <span className="size-2 animate-pulse rounded-full bg-primary-foreground/60 [animation-delay:150ms]" />
          <span className="size-2 animate-pulse rounded-full bg-primary-foreground/60 [animation-delay:300ms]" />
        </div>
        <p className="text-xs text-primary-foreground/60">Versão {APP_VERSION}</p>
      </div>
    </div>
  )
}
