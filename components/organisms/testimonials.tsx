"use client"

import Image from "next/image"
import { GraduationCap, MessageSquare, Search, ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { TESTIMONIALS } from "@/lib/data"

function StudentCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  const initial = t.name.charAt(0)
  const avatarColors = ["bg-violet/15 text-violet border-violet/20", "bg-emerald/15 text-emerald border-emerald/20", "bg-cyan/15 text-cyan border-cyan/20"]
  const colorClass = avatarColors[Number(t.id) % avatarColors.length]

  return (
    <div className="rounded-xl border border-border/40 bg-card/30 p-5 md:p-6 flex flex-col md:flex-row gap-5 md:gap-6">
      <div className="flex-1 flex flex-col gap-4 min-w-0">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-full ${colorClass} border flex items-center justify-center text-sm font-bold`}>
            {initial}
          </div>
          <div>
            <h4 className="text-base font-semibold text-foreground">{t.name}
              <span className="ml-1.5 text-xs font-normal text-muted-foreground">({t.techTo?.includes("后端") || t.techTo?.includes("合约") ? "40+" : ""})</span>
            </h4>
            <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
              <GraduationCap className="h-3 w-3" />
              {t.education}
            </p>
          </div>
        </div>

        {t.techFrom && t.techTo && (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-[13px] text-foreground/80 w-fit">
            {t.techFrom}
            <ArrowRight className="h-3 w-3 text-primary" />
            <span className={`font-semibold ${t.id === "1" ? "text-emerald" : "text-violet"}`}>{t.techTo}</span>
          </span>
        )}

        <div className="grid grid-cols-2 gap-2 w-fit">
          <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] px-3 py-2">
            <p className="text-[10px] text-muted-foreground mb-0.5">周期</p>
            <p className="text-sm font-bold text-foreground tabular-nums">{t.duration}</p>
          </div>
          <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] px-3 py-2">
            <p className="text-[10px] text-muted-foreground mb-0.5">远程薪资</p>
            <p className="text-sm font-bold text-emerald tabular-nums">{t.salary}</p>
          </div>
        </div>

        {t.joinDate && t.landDate && (
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground/60">
            <GraduationCap className="h-3 w-3" />
            <span>加入 {t.joinDate} → 上岸 {t.landDate}</span>
          </div>
        )}

        <div className="rounded-lg bg-white/[0.02] border-l-2 border-primary/40 px-3 py-2.5">
          <p className="text-[13px] text-foreground/75 leading-relaxed italic">{t.quote}</p>
        </div>
      </div>

      <div className="md:w-[280px] lg:w-[320px] shrink-0 flex flex-col gap-1.5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
            <MessageSquare className="h-3 w-3" /> 学习过程实录
          </span>
          <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-0.5">
            <Search className="h-2.5 w-2.5" /> 点击放大
          </button>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[9/16] rounded-md bg-white/[0.04] border border-white/[0.06] overflow-hidden relative group cursor-pointer">
              <Image
                src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chat%20messaging%20app%20screenshot%20with%20code%20snippets%20and%20messages%2C%20dark%20theme%2C%20${i}%2F4%20progress&image_size=portrait_4_3`}
                alt={`学习记录 ${i}/4`}
                fill
                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute top-1 right-1 bg-black/50 rounded px-1 py-px text-[9px] text-white/80 z-10">
                {i}/4
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <SectionWrapper id="testimonials" title={
      <>
        他们已经从内卷里 <span className="bg-gradient-to-r from-emerald via-cyan to-primary bg-clip-text text-transparent">跑了出来</span>
      </>
    } subtitle={
      <>
        以下是部分社区上岸的真实学员案例，背景、周期、薪资、群聊截图均未经美化。
        <br className="hidden sm:block" />我们尊重每一段焦虑的过往，更相信每一行写过的代码都不会白费。
      </>
    }>
      <div className="max-w-4xl mx-auto space-y-6">
        {TESTIMONIALS.map((t) => (
          <StudentCard key={t.id} t={t} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export { Testimonials }
