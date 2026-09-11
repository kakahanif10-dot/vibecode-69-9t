import { cn } from '@/lib/utils'

export function VibecodeMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center rounded-[28%] border border-border bg-transparent',
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[58%] w-[58%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Code brackets: </> */}
        <path
          d="M8.5 7 4 12l4.5 5"
          stroke="var(--foreground)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 7 20 12l-4.5 5"
          stroke="var(--foreground)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 5.5 10.5 18.5"
          stroke="var(--foreground)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

export function VibecodeLogo({
  className,
  markClassName,
  wordmark = true,
}: {
  className?: string
  markClassName?: string
  wordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <VibecodeMark className={cn('h-8 w-8', markClassName)} />
      {wordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Vibecode
          <span className="text-muted-foreground"> Inc.</span>
        </span>
      )}
    </span>
  )
}
