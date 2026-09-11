import { cn } from '@/lib/utils'

export function VibecodeMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center rounded-[10px] bg-primary',
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[62%] w-[62%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized code-pulse: chevrons wrapping a spark */}
        <path
          d="M8.5 6.5 4 12l4.5 5.5"
          stroke="var(--primary-foreground)"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 6.5 20 12l-4.5 5.5"
          stroke="var(--primary-foreground)"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.2 4.5 10.8 19.5"
          stroke="var(--primary-foreground)"
          strokeWidth="2.1"
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
