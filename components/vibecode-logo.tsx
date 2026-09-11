import { cn } from '@/lib/utils'

export function VibecodeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="Vibecode"
      className={cn('inline-block', className)}
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="11"
        className="fill-transparent stroke-border"
        strokeWidth="1.5"
      />
      <path
        d="M16.5 15 12 20l4.5 5M23.5 15 28 20l-4.5 5M21.5 13.5l-3 13"
        className="stroke-foreground"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
