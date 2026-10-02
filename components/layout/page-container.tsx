import { cn } from '@/lib/utils'

/**
 * Coluna central responsiva usada por todas as telas.
 * Limita a largura em tablets/desktop mantendo o visual mobile-first.
 */
export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="flex min-h-dvh w-full justify-center bg-background">
      <div
        className={cn(
          'relative flex min-h-dvh w-full max-w-2xl flex-col',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
