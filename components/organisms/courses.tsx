"use client"

import { ArrowRight, Check, Zap, MessageSquare, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { COURSES } from "@/lib/data"

function CourseCard({ course, onConsult }: { course: (typeof COURSES)[number]; onConsult: () => void }) {
  const isPrimary = course.ctaVariant === "primary"

  return (
    <div className={`relative rounded-2xl border p-6 md:p-8 flex flex-col gap-5 ${
      isPrimary
        ? "border-emerald/20 bg-emerald/[0.03] shadow-lg shadow-emerald/5"
        : "border-border/50 bg-card/40"
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-primary italic">{course.subtitle}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{course.title}</h3>
        </div>
        {course.badge && (
          <span className={`shrink-0 inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold border ${
            course.badge === "NEW"
              ? "bg-violet/15 text-violet border-violet/25"
              : "bg-emerald/15 text-emerald border-emerald/25"
          }`}>
            {course.badge === "NEW" ? (
              <>
                <Zap className="h-3 w-3 mr-0.5" />
                NEW
              </>
            ) : (
              <>
                <span className="mr-0.5">★</span> 推荐
              </>
            )}
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-extrabold text-foreground tabular-nums">{course.price}</span>
        {course.originalPrice && (
          <span className="text-sm text-muted-foreground line-through tabular-nums">{course.originalPrice}</span>
        )}
        {course.priceLabel && (
          <span className={`text-xs font-semibold ${isPrimary ? "text-emerald" : "text-violet"}`}>
            {course.priceLabel}
          </span>
        )}
      </div>

      {course.highlights && (
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
          <p className="text-sm text-muted-foreground leading-relaxed">{course.highlights[0]}</p>
        </div>
      )}

      {course.features && course.features.length > 0 && (
        <div className={`grid gap-2.5 ${isPrimary ? "grid-cols-2" : ""}`}>
          {course.features.map((f, i) => (
            <div key={i} className="flex items-start gap-2.5">
              {f.checked !== undefined && (
                <Check className={`h-4 w-4 mt-0.5 shrink-0 ${f.checked ? "text-emerald" : "text-violet"}`} />
              )}
              {!f.checked && f.checked !== false && (
                <Zap className="h-4 w-4 mt-0.5 shrink-0 text-violet" />
              )}
              <span className="text-[13px] text-foreground/80 leading-relaxed">{f.text}</span>
            </div>
          ))}
        </div>
      )}

      {course.highlights && course.highlights[1] && (
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
          <p className="text-sm text-muted-foreground leading-relaxed">{course.highlights[1]}</p>
        </div>
      )}

      <Button
        variant={isPrimary ? "primary" : "outline"}
        size="lg"
        className={`w-full font-semibold ${
          isPrimary
            ? "bg-emerald hover:bg-emerald/90 text-black border-0"
            : "border-violet/30 text-violet hover:bg-violet/10"
        }`}
        onClick={onConsult}
      >
        {isPrimary && <MessageSquare className="h-4 w-4 mr-2" />}
        {course.ctaText || "了解详情"}
        {!isPrimary && <ArrowRight className="h-4 w-4 ml-1.5" />}
      </Button>

      {course.footerNote && (
        <p className="text-center text-[11px] text-muted-foreground/60">{course.footerNote}</p>
      )}

      <div className="pt-3 border-t border-border/30 text-center">
        <p className="text-[11px] text-muted-foreground/50 flex items-center justify-center gap-1.5">
          <Download className="h-3 w-3" />
          查看完整课程大纲 & 真实案例
        </p>
        <p className="text-[10px] text-muted-foreground/35 mt-1">完成可抵扣开课学费</p>
      </div>
    </div>
  )
}

function Courses({ onConsult }: { onConsult: () => void }) {

  return (
    <SectionWrapper id="courses" title="选择适合你的路径" subtitle={
      <>
        无论你是想先试水副业赚美金外快，还是直接 All in 全职远程转型，
        <br className="hidden sm:block" />我们都有经过验证的方案。
      </>
    }>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {COURSES.map((course) => (
          <CourseCard key={course.id} course={course} onConsult={onConsult} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export { Courses }
