"use client"

import { useState } from "react"
import { Copy, Check, Terminal } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Tabs } from "@/components/ui/tabs"

const CODE_BEFORE = `# 传统方式：硬编码规则
def classify_text(text):
    if "好评" in text:
        return "正面"
    elif "差评" in text:
        return "负面"
    else:
        return "中性"

# 难以扩展，准确率低
result = classify_text("质量还行但物流太慢")`

const CODE_AFTER = `# AI 方式：大模型理解语义
from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(model="gpt-4")

def classify_text(text):
    prompt = f"""分析以下文本的情感：
    {{text}}

    只返回：正面/负面/中性"""
    return llm.predict(prompt)

# 准确率从 62% → 96%
result = classify_text("质量还行但物流太慢")`

function CodeBlock({
  code,
  variant,
}: {
  code: string
  variant: "before" | "after"
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const borderColor =
    variant === "before"
      ? "border-destructive/30 hover:border-destructive/50"
      : "border-emerald/30 hover:border-emerald/50"

  const labelColor =
    variant === "before" ? "text-destructive" : "text-emerald"

  return (
    <div
      className={`relative rounded-xl border ${borderColor} bg-card overflow-hidden transition-colors`}
    >
      {/* 顶部工具栏 */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-muted/30">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
          <span className={`text-xs font-medium ${labelColor}`}>
            {variant === "before" ? "优化前" : "优化后"}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="rounded p-1 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          aria-label="复制代码"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {/* 代码内容 */}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono text-foreground/90">{code}</code>
      </pre>
    </div>
  )
}

function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* 左侧：使命文案 */}
        <div>
          <span className="text-sm font-medium text-primary">关于我们</span>
          <h2 className="mt-3 text-h3 font-bold text-foreground leading-tight">
            让每个人都能{" "}
            <span className="text-primary">掌握 AI</span>
            <br />
            是我们的使命
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            我们相信 AI 技术不应该只是少数人的特权。通过系统化的课程设计、
            真实项目驱动和社区互助，我们让每一位开发者都能在实际工作中应用 AI，
            创造真正的价值。
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "资深讲师" },
              { value: "86", label: "精品课程" },
              { value: "200+", label: "企业合作" },
              { value: "99%", label: "学员好评" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：代码对比块 */}
        <div>
          <Tabs
            items={[
              { value: "python", label: "Python" },
              { value: "typescript", label: "TypeScript" },
            ]}
            defaultValue="python"
            className="w-full"
          >
            {() => (
              <div className="space-y-4">
                <CodeBlock code={CODE_BEFORE} variant="before" />
                <CodeBlock code={CODE_AFTER} variant="after" />
              </div>
            )}
          </Tabs>
        </div>
      </div>
    </SectionWrapper>
  )
}

export { About }
