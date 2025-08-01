"use client"

import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      id: "senior-fullstack",
      title: t("seniorFullStackTitle"),
      company: t("seniorFullStackCompany"),
      period: t("seniorFullStackPeriod"),
      achievements: [
        t("seniorFullStackAch1"),
        t("seniorFullStackAch2"),
        t("seniorFullStackAch3"),
        t("seniorFullStackAch4"),
      ],
    },
    {
      id: "fullstack-dev",
      title: t("fullStackDevTitle"),
      company: t("fullStackDevCompany"),
      period: t("fullStackDevPeriod"),
      achievements: [t("fullStackDevAch1"), t("fullStackDevAch2"), t("fullStackDevAch3"), t("fullStackDevAch4")],
    },
    {
      id: "junior-dev",
      title: t("juniorDevTitle"),
      company: t("juniorDevCompany"),
      period: t("juniorDevPeriod"),
      achievements: [t("juniorDevAch1"), t("juniorDevAch2"), t("juniorDevAch3"), t("juniorDevAch4")],
    },
  ]

  return (
    <Section id="experience">
      <div className="container mx-auto px-4">
        <SectionHeader id="experience" title={t("experienceTitle")} description={t("experienceDescription")} />
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-blue-600">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit bg-blue-50 text-blue-700 border-blue-200">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
