"use client"

import { X, Download } from "lucide-react"

export function ConsultModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="咨询弹窗"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-sm rounded-2xl border border-border/40 bg-card/95 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-white/[0.06] text-muted-foreground hover:text-foreground hover:bg-white/[0.1] transition-colors"
          aria-label="关闭"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center px-8 py-10 text-center gap-5">
          <div className="h-14 w-14 rounded-2xl bg-emerald/10 border border-emerald/20 flex items-center justify-center">
            <Download className="h-6 w-6 text-emerald" />
          </div>

          <h3 className="text-xl font-bold text-foreground">了解学习规划，解锁更多资源</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            扫码添加我的企业微信，我会根据你的背景，规划专属学习方向。
          </p>

          <div className="rounded-xl border border-border/40 bg-white p-3">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=QR%20code%20with%20WeChat%20logo%20in%20center%2C%20minimalist%20black%20and%20white%20style%2C%20clean%20square%20format%2C%20high%20contrast&image_size=square_hd"
              alt="企业微信二维码"
              width={180}
              height={180}
              className="w-[180px] h-[180px]"
            />
          </div>

          <p className="text-xs text-muted-foreground/50">Seven x MetaNode Official</p>
        </div>
      </div>
    </div>
  )
}
