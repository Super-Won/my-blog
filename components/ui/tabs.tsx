"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TabItem {
  value: string
  label: string
}

interface TabsProps {
  items: TabItem[]
  defaultValue?: string
  children: (activeValue: string) => React.ReactNode
  className?: string
}

function Tabs({ items, defaultValue, children, className }: TabsProps) {
  const [active, setActive] = useState(defaultValue || items[0]?.value || "")

  return (
    <div className={className}>
      <div
        className="inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground"
        role="tablist"
      >
        {items.map((item) => (
          <button
            key={item.value}
            role="tab"
            aria-selected={active === item.value}
            onClick={() => setActive(item.value)}
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active === item.value
                ? "bg-background text-foreground shadow-sm"
                : "hover:text-foreground/80"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-4" role="tabpanel">
        {children(active)}
      </div>
    </div>
  )
}

export { Tabs }
