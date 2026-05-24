export interface Job {
  id: string
  company: string
  title: string
  salary: string
  location: string
  type: string
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix: string
}

export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  duration: string
  difficulty: "入门" | "进阶" | "专家"
  price: string
  originalPrice?: string
  priceLabel?: string
  badge?: "NEW" | "推荐"
  instructor?: string
  tags?: string[]
  image?: string
  highlights?: string[]
  features?: { text: string; checked?: boolean }[]
  ctaText?: string
  ctaVariant?: "primary" | "outline"
  footerNote?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
  course: string
  education?: string
  techFrom?: string
  techTo?: string
  duration?: string
  salary?: string
  joinDate?: string
  landDate?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface CommunityResource {
  id: string
  title: string
  description: string
  href: string
  icon: string
}

export interface NavConfig {
  main: NavLink[]
  footer: {
    产品: NavLink[]
    资源: NavLink[]
    公司: NavLink[]
  }
  social: { icon: string; href: string; label: string }[]
}
