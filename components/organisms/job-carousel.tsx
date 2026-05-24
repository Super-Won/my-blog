"use client"

import { Building2, MapPin, Banknote, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { JOBS } from "@/lib/data"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

function JobCarousel() {
  const reducedMotion = useReducedMotion()
  const doubledJobs = [...JOBS, ...JOBS]

  return (
    <section className="relative py-12 border-y border-border/50 bg-card/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              热门 AI 岗位
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              实时追踪行业需求，把握职业方向
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald" />
            </span>
            <span className="text-sm text-muted-foreground">实时更新</span>
          </div>
        </div>
      </div>

      {/* Marquee 容器 */}
      <div
        className="relative group"
        aria-label="AI 岗位轮播"
        role="marquee"
      >
        {/* 渐变遮罩 */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className={`flex gap-4 ${
            reducedMotion ? "" : "animate-marquee group-hover:[animation-play-state:paused]"
          }`}
          style={reducedMotion ? undefined : { width: "max-content" }}
        >
          {doubledJobs.map((job, index) => (
            <div
              key={`${job.id}-${index}`}
              className="flex-shrink-0 group/card rounded-xl border border-border bg-card p-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer w-72"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {job.company}
                  </span>
                </div>
                <Badge variant="emerald">{job.type}</Badge>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover/card:text-primary transition-colors">
                {job.title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Banknote className="h-3.5 w-3.5" />
                  {job.salary}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location}
                </span>
              </div>
              {/* 悬停浮层 */}
              <div className="mt-3 flex items-center gap-1 text-sm text-primary opacity-0 group-hover/card:opacity-100 transition-opacity">
                立即查看
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { JobCarousel }
