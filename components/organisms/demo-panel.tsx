"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Zap,
  Users,
  Briefcase,
  TrendingUp,
  CircleDot,
} from "lucide-react";
import { JOBS } from "@/lib/data";

const SCROLL_JOBS = [...JOBS, ...JOBS];

function JobRow({ job }: { job: (typeof JOBS)[0] }) {
  const roleLetter = job.company.charAt(0).toUpperCase();

  return (
    <div className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer shrink-0">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-xs font-bold text-muted-foreground border border-white/[0.08]">
        {roleLetter}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-foreground/90 truncate">
            {job.title}
          </span>
          {job.id === "1" && (
            <span className="shrink-0 inline-flex items-center rounded px-1 py-[1px] text-[9px] font-semibold bg-emerald/15 text-emerald border border-emerald/20">
              HOT
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[11px] text-muted-foreground">
            {job.company}
          </span>
          <span className="text-[10px] text-muted-foreground/60 border border-border/40 rounded px-1 py-px">
            {job.type}
          </span>
          <span className="text-[10px] text-muted-foreground/60 border border-border/40 rounded px-1 py-px">
            {job.location}
          </span>
        </div>
      </div>
      <div className="shrink-0 text-right">
        <div className="text-[12px] font-semibold text-emerald tabular-nums">
          {job.salary}
        </div>
        <div className="text-[10px] text-muted-foreground/60">/ mo</div>
      </div>
      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
    </div>
  );
}

export function DemoPanel() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto md:max-w-none">
      <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0c]/60 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/50" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-1.5">
            <Zap className="h-3 w-3 text-emerald" />
            <span className="text-[11px] font-medium text-muted-foreground">
              热门 AI 招聘平台
            </span>
            <CircleDot className="h-2.5 w-2.5 text-emerald animate-pulse" />
          </div>
          <ChevronDown className="h-3 w-3 text-muted-foreground/40" />
        </div>

        <div className="p-3">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5 text-primary" />
              <span className="text-[12px] font-semibold text-foreground/80">
                热门岗位
              </span>
            </div>
            <span className="text-[10px] text-emerald/80 flex items-center gap-0.5">
              <TrendingUp className="h-2.5 w-2.5" /> LIVE 实时更新
            </span>
          </div>

          <div
            className="max-h-[280px] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={`
                flex flex-col gap-0.5
                ${paused ? "" : "animate-job-scroll"}
              `}
            >
              {SCROLL_JOBS.map((job, i) => (
                <JobRow key={`${job.id}-${job.company}-${i}`} job={job} />
              ))}
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/[0.06] px-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{JOBS.length * 100}+ 岗位</span>
                </div>
                <div className="text-[10px] text-emerald/70 font-medium">
                  ↑ 18% 本周
                </div>
              </div>
              <button className="text-[10px] text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-0.5">
                查看全部岗位
                <ArrowUpRight className="h-2.5 w-2.5" />
              </button>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-1.5 px-1">
            <CircleDot className="h-2 w-2 text-emerald" />
            <span className="text-[10px] text-muted-foreground/50">
              已连接 AI 主流招聘网络，数据每分钟自动同步
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes job-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-job-scroll {
          animation: job-scroll 16s linear infinite;
        }
      `}</style>

      <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-cyan/8 blur-xl opacity-60" />
    </div>
  );
}
