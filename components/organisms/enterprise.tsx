"use client"

import { Building2, TrendingUp, Shield, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const valueProps = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "定制课程方案",
    description: "根据企业技术栈和业务场景定制专属培训内容",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "实战项目驱动",
    description: "以企业真实项目为练习素材，学完即可产出成果",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "专属讲师团队",
    description: "资深 AI 工程师一对一指导，保障培训质量",
  },
]

function Enterprise() {
  return (
    <section
      id="enterprise"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* 渐变背景 */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-cyan/5"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 border-y border-border" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧：价值主张 */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
              <Building2 className="h-4 w-4" />
              企业合作
            </div>
            <h2 className="text-h3 font-bold text-foreground leading-tight">
              为企业团队提供
              <br />
              <span className="text-primary">定制化 AI 培训</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              已服务 200+ 企业客户，涵盖互联网、金融、医疗、制造业等行业。
              从技术评估到培训实施，提供完整的 AI 人才赋能方案。
            </p>

            {/* 价值点 */}
            <div className="mt-8 space-y-4">
              {valueProps.map((prop) => (
                <div key={prop.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {prop.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：咨询表单 */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-primary/5">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              获取企业培训方案
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              填写信息，我们的企业培训顾问将在 24 小时内联系您
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input label="企业名称" placeholder="请输入企业名称" />
              <Input
                label="联系方式"
                type="email"
                placeholder="请输入工作邮箱"
              />
              <Input
                label="团队规模"
                placeholder="例如：50 人研发团队"
              />
              <Button variant="primary" className="w-full group">
                提交咨询
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground text-center">
              提交即表示您同意我们的隐私政策
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Enterprise }
