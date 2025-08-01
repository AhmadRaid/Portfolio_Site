"use client"

import { Server, Database, Cloud, Code, Monitor } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

export function SkillsSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillsData = {
    backend: {
      title: t("backendTech"),
      icon: Server,
      color: "green",
      skills: ["Node.js", "Laravel", "Express.js", "PHP", "TypeScript", "JavaScript"],
    },
    frontend: {
      title: t("frontendTech"),
      icon: Monitor,
      color: "blue",
      skills: ["React", "Vue.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    database: {
      title: t("databases"),
      icon: Database,
      color: "purple",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
    },
    cloud: {
      title: t("cloudServices"),
      icon: Cloud,
      color: "orange",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Microservices"],
    },
    tools: {
      title: t("devTools"),
      icon: Code,
      color: "red",
      skills: ["Git", "Jest", "Postman", "Swagger", "GraphQL"],
    },
  }

  return (
    <Section id="skills" className="relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-400/3 rounded-full blur-3xl animate-background-float" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-blue-400/3 rounded-full blur-3xl animate-background-float delay-700" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0-animate"}`}>
          <SectionHeader id="skills" title={t("skillsTitle")} description={t("skillsDescription")} />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Object.entries(skillsData).map(([key, skill], index) => {
            const IconComponent = skill.icon
            return (
              <Card
                key={key}
                className={`hover-lift ${
                  isVisible ? `animate-fade-in-up delay-${(index + 2) * 100}` : "opacity-0-animate"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-lg flex items-center justify-center transition-smooth animate-icon-hover`}
                    >
                      <IconComponent className={`h-6 w-6 text-${skill.color}-600`} />
                    </div>
                    <CardTitle className="text-lg transition-smooth hover:text-blue-600">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((skillName) => (
                      <Badge
                        key={skillName}
                        variant="secondary"
                        className={`bg-${skill.color}-50 text-${skill.color}-700 hover:bg-${skill.color}-100 animate-badge-hover`}
                      >
                        {skillName}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
