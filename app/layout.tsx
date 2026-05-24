import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Footer } from "@/components/organisms/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AI学院 — 掌握 AI 技术，开启未来职业",
  description:
    "面向未来的 AI 技术教育平台。系统化课程体系、真实项目驱动、12,800+ 学员成功转型。涵盖大模型微调、RAG 应用开发、Prompt 工程等前沿技术。",
  keywords: [
    "AI 教育",
    "人工智能课程",
    "大模型培训",
    "RAG 开发",
    "LangChain",
    "AI 转型",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
