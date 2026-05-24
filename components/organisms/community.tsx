import Link from "next/link"
import {
  Globe,
  MessageCircle,
  BookOpen,
  Mail,
  Users,
  FileText,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { COMMUNITY_RESOURCES } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  github: <Globe className="h-6 w-6" />,
  discord: <MessageCircle className="h-6 w-6" />,
  blog: <BookOpen className="h-6 w-6" />,
  newsletter: <Mail className="h-6 w-6" />,
  meetup: <Users className="h-6 w-6" />,
  docs: <FileText className="h-6 w-6" />,
}

function Community() {
  return (
    <SectionWrapper
      id="community"
      title="开发者社区"
      subtitle="加入 12,000+ 开发者的技术社区，共同成长"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMMUNITY_RESOURCES.map((resource) => (
          <Link
            key={resource.id}
            href={resource.href}
            target={resource.href.startsWith("http") ? "_blank" : undefined}
            rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group block"
          >
            <Card className="h-full hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {iconMap[resource.icon] || <FileText className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { Community }
