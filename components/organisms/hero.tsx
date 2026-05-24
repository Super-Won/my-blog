"use client";

import { ArrowRight, Download, Shield, Network, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoPanel } from "@/components/organisms/demo-panel";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px] ${
            reducedMotion ? "" : "animate-pulse-glow"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan/[0.05] blur-[100px] ${
            reducedMotion ? "" : "animate-pulse-glow"
          }`}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 左侧文案区 */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-6">
            {/* 标签组 */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/25 bg-emerald/10 px-3.5 py-1.5 text-xs font-medium text-emerald">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald" />
                </span>
                全栈 AI 开发与实战工作台
              </span>
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 text-xs font-medium text-primary">
                AI + CODE 双螺旋驱动
              </span>
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.08]">
              <span className="text-foreground">让你的代码</span>
              <br />
              <span
                className={`bg-gradient-to-r from-emerald via-cyan to-primary bg-clip-text text-transparent ${
                  reducedMotion ? "" : "animate-gradient-shift"
                }`}
                style={
                  reducedMotion ? undefined : { backgroundSize: "200% auto" }
                }
              >
                重获自由与价值
              </span>
            </h1>

            {/* 副标题 */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              这里有你没听过的课。只有我们从传统大厂「绑架」了。 AI
              工作流实战，黑客松获奖攻略，以及企业级项目经验。
            </p>

            {/* CTA 按钮组 */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button variant="glow" size="lg" className="group font-semibold">
                <Shield className="h-4 w-4" />
                免费版预评估
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group font-semibold border-border/50 hover:border-primary/30"
              >
                <Download className="h-4 w-4" />
                获取完整手册
              </Button>
            </div>

            {/* 信任指标 */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                <div className="h-7 w-7 rounded-md bg-violet/15 flex items-center justify-center">
                  <Shield className="h-3.5 w-3.5 text-violet" />
                </div>
                <span className="text-xs font-medium text-foreground/80">
                  新的大厂专家
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                <div className="h-7 w-7 rounded-md bg-cyan/15 flex items-center justify-center">
                  <Network className="h-3.5 w-3.5 text-cyan" />
                </div>
                <span className="text-xs font-medium text-foreground/80">
                  头部AI网络
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                <div className="h-7 w-7 rounded-md bg-amber/15 flex items-center justify-center">
                  <Trophy className="h-3.5 w-3.5 text-amber" />
                </div>
                <span className="text-xs font-medium text-foreground/80">
                  10次黑客松Winner
                </span>
              </div>
            </div>
          </div>

          {/* 右侧 Demo 面板 */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end">
            <div
              className={`w-full max-w-lg xl:max-w-xl ${
                reducedMotion ? "" : "animate-fade-in-up"
              }`}
              style={
                reducedMotion
                  ? undefined
                  : { animationDelay: "0.2s", animationFillMode: "both" }
              }
            >
              <DemoPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
