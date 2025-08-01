"use client"

import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

export function ExperienceSection() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

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
    <Section id="experience" className="relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-52 h-52 bg-blue-400/3 rounded-full blur-3xl animate-background-float" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/3 rounded-full blur-3xl animate-background-float delay-700" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0-animate"}`}>
          <SectionHeader id="experience" title={t("experienceTitle")} description={t("experienceDescription")} />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className={`hover-lift ${
                isVisible ? `animate-fade-in-up delay-${(index + 2) * 200}` : "opacity-0-animate"
              }`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-blue-600 transition-smooth hover:text-blue-700">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-smooth hover:scale-105"
                  >
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className={`flex items-start space-x-2 transition-smooth hover:text-gray-700 dark:hover:text-gray-200 ${
                        isVisible
                          ? `animate-fade-in-left delay-${(index + 2) * 200 + achIndex * 100}`
                          : "opacity-0-animate"
                      }`}
                    >
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
