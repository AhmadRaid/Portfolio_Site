import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: keyof JSX.IntrinsicElements
}

export function Section({ children, className, id, as: Component = "section" }: SectionProps) {
  return (
    <Component id={id} className={cn("py-20", className)} aria-labelledby={id ? `${id}-heading` : undefined}>
      {children}
    </Component>
  )
}

interface SectionHeaderProps {
  title: string
  description?: string
  id?: string
}

export function SectionHeader({ title, description, id }: SectionHeaderProps) {
  return (
    <div className="text-center space-y-4 mb-16">
      <h2 id={id ? `${id}-heading` : undefined} className="text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && <p className="max-w-[900px] mx-auto text-gray-600 dark:text-gray-300 text-lg">{description}</p>}
    </div>
  )
}
