import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
  id?: string
  children?: React.ReactNode
}

function SectionWrapper({
  title,
  subtitle,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn("py-20 md:py-28 lg:py-32", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center">
            {title && (
              <h2 className="text-h2 font-bold tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export { SectionWrapper }
