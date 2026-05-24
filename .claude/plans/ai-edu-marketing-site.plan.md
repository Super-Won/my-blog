# Plan: AI 技术教育营销网站

**Complexity**: 大型（11 个主要区块，全新 Next.js 项目）
**参考技能**: moai-domain-uiux（原子设计、shadcn/ui 模式、WCAG 2.2、主题系统）

## 摘要

使用 Next.js 14+ App Router、Tailwind CSS 和 Framer Motion 构建面向 AI 技术教育领域的高转化率深色主题营销网站。采用 Atomic Design 组件架构、shadcn/ui 原语、class-variance-authority 变体系统、HSL CSS 变量主题令牌、Lucide 图标库，确保 WCAG 2.2 AA 级无障碍合规。所有 UI 文案与代码注释使用中文。

## 架构总览

```
app/
├── layout.tsx                    # 根布局：字体、元数据、ThemeProvider
├── page.tsx                      # 落地页：组装所有区块
├── globals.css                   # HSL CSS 自定义属性（设计令牌）
├── favicon.ico
components/
├── ui/                           # 原子组件（shadcn/ui 风格）
│   ├── button.tsx                # CVA 变体按钮（primary/outline/ghost/glow）
│   ├── badge.tsx                 # 分类/难度徽章
│   ├── card.tsx                  # 基础卡片容器
│   ├── input.tsx                 # 输入框（企业咨询表单）
│   ├── sheet.tsx                 # 侧边抽屉（移动端导航）
│   ├── tabs.tsx                  # 标签切换（代码对比块）
│   ├── separator.tsx             # 分隔线
│   └── section-wrapper.tsx       # 区块统一外框（间距 + 标题）
├── organisms/                    # 复合区块组件
│   ├── header.tsx                # 粘性导航 + 移动端抽屉（客户端）
│   ├── footer.tsx                # 页脚站点地图 + 法律信息（服务端）
│   ├── hero.tsx                  # 渐变标题 + CTA（客户端：动画）
│   ├── job-carousel.tsx          # 无限滚动岗位轮播（客户端）
│   ├── stats.tsx                 # 动画计数器 + 粒子背景（客户端）
│   ├── about.tsx                 # 使命陈述 + 代码对比（客户端）
│   ├── testimonials.tsx          # 学员成功案例（服务端 + 客户端）
│   ├── courses.tsx               # 3D 倾斜产品卡片（客户端）
│   ├── community.tsx             # 社区资源网格（服务端）
│   └── enterprise.tsx            # 企业咨询 CTA（服务端 + 客户端）
├── providers/
│   └── theme-provider.tsx        # 主题提供者（dark/light/system）
hooks/
├── use-in-view.ts                # Intersection Observer 钩子
├── use-reduced-motion.ts         # prefers-reduced-motion 钩子
├── use-count-up.ts               # 计数动画钩子（rAF 驱动）
└── use-mouse-position.ts         # 鼠标位置追踪（3D 倾斜）
lib/
├── utils.ts                      # cn() 工具函数（clsx + twMerge）
├── constants.ts                  # 导航项、页脚链接
├── data.ts                       # 模拟数据（岗位、统计、课程、学员案例）
└── motion.ts                     # Framer Motion 动画预设
types/
└── index.ts                      # 共享 TypeScript 接口
public/
├── images/                       # 优化后的静态资源
└── icons/                        # 品牌图标
```

## 设计令牌系统（HSL CSS 变量，shadcn/ui 格式）

遵循 moai-domain-uiux 的 theming-system 模式，使用 HSL 值（不含 `hsl()` 包裹），
由 Tailwind 的 `hsl(var(--xxx))` 完成拼接。暗色为默认模式，同时支持亮色切换。

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --primary: 262 83% 58%;           /* 品牌紫 #8b5cf6 */
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 262 83% 58%;
    --radius: 0.75rem;

    /* 品牌扩展令牌 */
    --cyan: 188 94% 53%;              /* #22d3ee */
    --violet: 262 83% 58%;            /* #8b5cf6 */
    --amber: 38 92% 50%;              /* #f59e0b */
    --emerald: 160 84% 39%;           /* #10b981 */
    --rose: 350 89% 60%;              /* #f43f5e */
  }

  .dark {
    --background: 240 6% 4%;          /* #0a0a0f 近似 */
    --foreground: 240 5% 96%;         /* #f0f0f5 近似 */
    --card: 240 5% 9%;                /* #16161f 近似 */
    --card-foreground: 240 5% 96%;
    --popover: 240 5% 9%;
    --popover-foreground: 240 5% 96%;
    --primary: 262 83% 58%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4% 16%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 4% 16%;
    --muted-foreground: 240 5% 65%;
    --accent: 240 4% 16%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 4% 16%;
    --input: 240 4% 16%;
    --ring: 262 83% 58%;
  }
}
```

### 排版比例

```
text-hero:    clamp(3rem, 1rem + 7vw, 7rem)   -- 渐变标题
text-h2:      clamp(2rem, 0.5rem + 3.5vw, 3.5rem)
text-h3:      clamp(1.25rem, 0.3rem + 1.5vw, 1.75rem)
text-body:    clamp(1rem, 0.9rem + 0.4vw, 1.125rem)
text-small:   0.875rem
font-mono:    JetBrains Mono   -- 代码块专用
font-sans:    Inter            -- 全局正文字体
```

### 断点

标准 Tailwind: sm(640), md(768), lg(1024), xl(1280), 2xl(1536)

## 模式对标（moai-domain-uiux）

| 类别 | 模式来源 | 采用方式 |
|------|---------|---------|
| 组件结构 | component-architecture.md | Atomic Design: ui/(atoms) → organisms/ |
| 变体系统 | examples.md Button | CVA + VariantProps，替代硬编码 className |
| 主题系统 | theming-system.md | ThemeProvider + HSL CSS 变量 + dark 类切换 |
| 无障碍 | accessibility-wcag.md | jest-axe 测试、键盘导航、focus trap、ARIA |
| 图标 | icon-libraries.md | Lucide React，按需单独引入 |
| Token 格式 | design-system-tokens.md | HSL 值（shadcn 格式），语义命名 |

## 任务列表

### 任务 1：项目脚手架
- **操作**: 使用 `npx create-next-app@latest` 初始化 Next.js 14+ TypeScript 项目，安装核心依赖，配置 `tailwind.config.ts` 扩展主题，创建目录结构
- **核心依赖**: next, react, react-dom, framer-motion, lucide-react, class-variance-authority, clsx, tailwind-merge, tailwindcss-animate, @tailwindcss/typography
- **验证**: `npm run build` 成功，`npm run dev` 无报错启动

### 任务 2：设计令牌系统与全局样式
- **操作**: 创建 `app/globals.css`，按 shadcn/ui HSL 格式定义所有 CSS 变量（含 `.dark` 类），配置 `tailwind.config.ts` 引用变量、扩展颜色/动画/字体，添加自定义 `@keyframes`（gradient-shift、float、pulse-glow、marquee），定义 Inter + JetBrains Mono 字体
- **验证**: DevTools 中令牌正确解析，自定义动画正常播放，`.dark` 类切换生效

### 任务 3：工具层与基础 UI 原子组件
- **操作**: 创建 `lib/utils.ts`（cn 工具）、`types/index.ts`（Job、Course、Testimonial、Stat 接口）、自定义钩子（use-in-view、use-reduced-motion、use-count-up、use-mouse-position）、shadcn/ui 风格原子组件（button 用 CVA 变体、badge、card、section-wrapper）
- **验证**: TypeScript 编译通过，组件无报错渲染

### 任务 4：主题提供者与布局外壳
- **操作**: 实现 `ThemeProvider`（moai-domain-uiux theming-system 模式，支持 dark/light/system），构建 Header（粘性导航 + lucide-react 图标 + Sheet 抽屉式移动端菜单 + focus trap），构建 Footer（站点地图列、法律链接、社交图标）。Header 为客户端组件，Footer 为服务端组件
- **验证**: 主题可切换，Header 在移动端折叠为抽屉，Footer 所有列正确显示

### 任务 5：Hero 区块
- **操作**: 渐变动态标题（`bg-gradient-to-r from-[hsl(var(--cyan))] via-[hsl(var(--violet))] to-[hsl(var(--amber))] bg-clip-text text-transparent` + `animate-gradient-shift` 关键帧），副标题文案，双 CTA 按钮（CVA glow 变体 + outline 变体），浮动光晕背景。客户端组件，Framer Motion 入场动画，reduced-motion 静态渐变降级
- **验证**: 渐变平滑循环，按钮悬停光晕效果，reduced-motion 下显示静态渐变

### 任务 6：岗位轮播
- **操作**: 无限循环 marquee 容器（内容双份渲染无缝衔接），每个岗位卡片包含公司图标（lucide-react Building2）、职位名称、薪资范围、地点标签。自动播放 + 悬停暂停 + 键盘可访问。`aria-live="off"` + 静态列表降级。服务端组件预渲染内容，客户端组件接管滚动交互
- **验证**: 无缝循环，悬停暂停，reduced-motion 显示静态列表，键盘可达

### 任务 7：数据统计动画
- **操作**: 4 列统计卡片网格，每张卡片使用 useCountUp 钩子（rAF 驱动 + easeOutExpo 缓动）+ useInView 触发。统计项：学员人数、课程数、就业率、平均薪资涨幅。`font-variant-numeric: tabular-nums`。可选 canvas 粒子连线背景（懒加载）
- **验证**: 滚动进入视口时数字从 0 动画增长至目标值，canvas 粒子正常渲染

### 任务 8：关于区域 + 代码对比
- **操作**: 左右分栏——左侧：使命文案 + 高亮关键词；右侧：代码对比块。代码块使用 Tabs 组件（moai-domain-uiux 模式）切换"优化前/优化后"，左侧暗红边框语义（destructive），右侧翠绿边框语义（emerald），语言切换器 + 复制按钮（lucide-react Copy/Check 图标）。行号可点击标记断点
- **验证**: 标签切换正常，复制功能工作，行号标记切换，移动端代码可读

### 任务 9：学员案例展示
- **操作**: 卡片网格，每张卡片包含学员头像（placeholder）、姓名、职位、评价引言、星级评分（lucide-react Star 图标）、课程标签。悬停时卡片上浮 + 阴影过渡。服务端渲染 + 客户端悬停效果。响应式：3 列 → 2 列 → 1 列
- **验证**: 所有断点卡片正确显示，悬停动画流畅

### 任务 10：课程产品卡片
- **操作**: 3D 倾斜效果通过 useMousePosition + `perspective(1000px)` transform 实现。每张卡片：缩略图、学时标签（Badge）、难度指示器、讲师头像阵列、价格、CTA 按钮。光源方向跟随鼠标。reduced-motion 禁用倾斜。Grid: 3 列 → 2 → 1
- **验证**: 倾斜效果跟踪鼠标，移动端卡片堆叠，reduced-motion 禁用倾斜

### 任务 11：社区资源
- **操作**: 资源链接网格（GitHub、Discord、博客、Newsletter、线下活动、文档），每块包含 lucide-react 图标 + 标题 + 描述卡片，悬停微上浮。服务端组件，仅 CSS hover 过渡。键盘可达 + ARIA 标签
- **验证**: 网格响应式，悬停状态正常，链接键盘可访问

### 任务 12：企业咨询 CTA
- **操作**: 全宽渐变背景横幅，标题，价值主张（lucide-react 图标 + 文案），咨询表单（Input + Button 组件）或 CTA 链接。服务端组件 + 客户端表单交互
- **验证**: 表单/按钮可达，响应式布局，渐变正确渲染

### 任务 13：页面组装与响应式打磨
- **操作**: 在 `app/page.tsx` 中组装所有区块，验证全断点响应行为（320、375、768、1024、1440、1920），确保移动端导航抽屉工作，修复溢出问题，验证触控目标 >= 44px，所有交互元素键盘可达
- **验证**: 无水平溢出，所有区块可见，触控友好

### 任务 14：性能与无障碍审计
- **操作**: Lighthouse 审计（LCP < 2.5s / CLS < 0.1），所有图片有明确尺寸，`prefers-reduced-motion` 停止所有动画，jest-axe 无障碍扫描（WCAG 2.2 AA），ARIA 标签完整，语义 HTML 结构（header/main/section/footer/nav），focus indicator 可见
- **验证**: Lighthouse 各维度 > 90 分，零无障碍违规

## 文件清单

| 文件 | 操作 | 用途 |
|------|------|------|
| `package.json` | 创建 | 项目依赖清单 |
| `next.config.ts` | 创建 | Next.js 配置（图片、实验性功能） |
| `tailwind.config.ts` | 创建 | 自定义主题 + HSL 变量引用 + 动画 |
| `tsconfig.json` | 创建 | TypeScript 严格模式 |
| `app/layout.tsx` | 创建 | 根布局（字体 + 元数据 + ThemeProvider） |
| `app/page.tsx` | 创建 | 落地页（组装所有区块） |
| `app/globals.css` | 创建 | HSL CSS 变量 + 动画关键帧 |
| `components/ui/button.tsx` | 创建 | CVA 变体按钮（primary/outline/ghost/glow） |
| `components/ui/badge.tsx` | 创建 | 分类/难度徽章 |
| `components/ui/card.tsx` | 创建 | 基础卡片容器 |
| `components/ui/input.tsx` | 创建 | 输入框（企业表单） |
| `components/ui/sheet.tsx` | 创建 | 侧边抽屉（移动端导航） |
| `components/ui/tabs.tsx` | 创建 | 标签切换（代码对比） |
| `components/ui/separator.tsx` | 创建 | 分隔线 |
| `components/ui/section-wrapper.tsx` | 创建 | 区块统一外框 |
| `components/providers/theme-provider.tsx` | 创建 | 主题提供者 |
| `components/organisms/header.tsx` | 创建 | 粘性导航 + 移动端抽屉 |
| `components/organisms/footer.tsx` | 创建 | 页脚站点地图 + 法律信息 |
| `components/organisms/hero.tsx` | 创建 | 渐变标题 + CTA |
| `components/organisms/job-carousel.tsx` | 创建 | 无限滚动岗位轮播 |
| `components/organisms/stats.tsx` | 创建 | 动画计数器 + 粒子背景 |
| `components/organisms/about.tsx` | 创建 | 使命陈述 + 代码对比 |
| `components/organisms/testimonials.tsx` | 创建 | 学员成功案例 |
| `components/organisms/courses.tsx` | 创建 | 3D 倾斜产品卡片 |
| `components/organisms/community.tsx` | 创建 | 社区资源网格 |
| `components/organisms/enterprise.tsx` | 创建 | 企业咨询 CTA |
| `hooks/use-in-view.ts` | 创建 | Intersection Observer 钩子 |
| `hooks/use-reduced-motion.ts` | 创建 | prefers-reduced-motion 钩子 |
| `hooks/use-count-up.ts` | 创建 | rAF 计数动画逻辑 |
| `hooks/use-mouse-position.ts` | 创建 | 鼠标位置追踪 |
| `lib/utils.ts` | 创建 | cn() 工具函数 |
| `lib/constants.ts` | 创建 | 导航 + 页脚数据 |
| `lib/data.ts` | 创建 | 各区块模拟数据 |
| `lib/motion.ts` | 创建 | Framer Motion 动画预设 |
| `types/index.ts` | 创建 | 共享 TypeScript 接口 |

## 依赖清单

```
next@14                      -- App Router、SSR、Image 优化
react@18                     -- UI 库
react-dom@18                 -- DOM 渲染
framer-motion                -- 动画引擎（仅客户端组件）
lucide-react                 -- 图标库（按需引入）
class-variance-authority     -- CVA 组件变体系统
clsx                         -- 条件类名
tailwind-merge               -- Tailwind 类名冲突解决
tailwindcss-animate          -- Tailwind 动画插件
@tailwindcss/typography      -- Prose 排版（代码块）
```

## 验证命令

```bash
npm run build          # 零错误构建
npm run dev            # 开发服务器无报错
npx tsc --noEmit       # TypeScript 严格模式通过
npx jest --passWithNoTests  # 测试框架就绪
```

## 风险评估

| 风险 | 可能性 | 缓解措施 |
|------|--------|---------|
| Framer Motion 包体积影响 LCP | 中 | 仅客户端组件动态导入 framer-motion，Hero 区 SSR 优先 |
| Canvas 粒子引起布局偏移 | 低 | 设置明确尺寸，Intersection 懒加载 |
| 3D 倾斜卡片低端设备卡顿 | 中 | rAF 节流鼠标事件，reduced-motion 禁用倾斜 |
| Marquee 无障碍风险 | 中 | `aria-live="off"` + 静态列表降级 + 键盘可达 |
| 代码对比块复杂度 | 中 | 先实现简单 Tabs 切换，逐步添加交互 |

## 验收标准

- [ ] 11 个区块在桌面端（1440px）和移动端（375px）正确渲染
- [ ] HSL 设计令牌全局一致应用
- [ ] 所有动画遵守 `prefers-reduced-motion`
- [ ] `npm run build` 零错误通过
- [ ] TypeScript 严格模式启用，零类型错误
- [ ] 无 CSS-in-JS 库，仅 Tailwind
- [ ] 服务端/客户端组件边界清晰分离
- [ ] CVA 变体系统用于所有 UI 原子组件
- [ ] Lucide 图标按需单独引入，无全量导入
- [ ] Lighthouse 性能 > 90，无障碍 > 90
- [ ] WCAG 2.2 AA 级合规（对比度 4.5:1、键盘导航、ARIA）
- [ ] 触控目标 >= 44px（移动端）
- [ ] 所有断点无水平溢出
- [ ] 所有 UI 文案使用中文
