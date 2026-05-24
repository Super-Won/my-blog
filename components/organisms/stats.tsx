"use client"

import { useInView } from "@/hooks/use-in-view"
import { useCountUp } from "@/hooks/use-count-up"
import { STATS } from "@/lib/data"

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const [ref, isInView] = useInView()
  const count = useCountUp(value, 2000, isInView)

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums tracking-tight">
        <span className="text-foreground">{count.toLocaleString()}</span>
        <span className="text-primary ml-0.5">{suffix}</span>
      </div>
      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground/70 font-medium">{label}</p>
    </div>
  )
}

function Stats() {
  return (
    <section className="border-y border-border/40 bg-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <StatItem
              key={stat.id}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Stats }
