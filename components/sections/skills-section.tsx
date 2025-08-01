"use client"

import { Server, Database, Cloud, Code, Monitor } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"

export function SkillsSection() {
  const { t } = useLanguage()

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
      skills: ["React",  "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
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
    <Section id="skills">
      <div className="container mx-auto px-4">
        <SectionHeader id="skills" title={t("skillsTitle")} description={t("skillsDescription")} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Object.entries(skillsData).map(([key, skill]) => {
            const IconComponent = skill.icon
            return (
              <Card key={key} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className={`h-6 w-6 text-${skill.color}-600`} />
                    </div>
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((skillName) => (
                      <Badge
                        key={skillName}
                        variant="secondary"
                        className={`bg-${skill.color}-50 text-${skill.color}-700 hover:bg-${skill.color}-100`}
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
