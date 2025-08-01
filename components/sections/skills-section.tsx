"use client"

import { Server, Database, Cloud, Code, Monitor, Zap, Shield, Globe } from "lucide-react"
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
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      darkBgGradient: "from-emerald-900/20 to-teal-900/20",
      skills: [
        { name: "Node.js", level: 95, color: "bg-emerald-500" },
        { name: "Laravel", level: 95, color: "bg-red-500" },
        { name: "Nest.js", level: 93, color: "bg-gray-600" },
        { name: "Express.js", level: 92, color: "bg-gray-600" },
        { name: "PHP", level: 88, color: "bg-indigo-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "JavaScript", level: 93, color: "bg-yellow-500" },
      ],
    },
    frontend: {
      title: t("frontendTech"),
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "from-blue-900/20 to-cyan-900/20",
      skills: [
        { name: "React", level: 90, color: "bg-cyan-500" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
        { name: "Next.js", level: 90, color: "bg-gray-800" },
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 92, color: "bg-blue-500" },
        { name: "Tailwind CSS", level: 95, color: "bg-teal-500" },
      ],
    },
    database: {
      title: t("databases"),
      icon: Database,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "from-purple-900/20 to-pink-900/20",
      skills: [
        { name: "MongoDB", level: 88, color: "bg-green-600" },
        { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
        { name: "MySQL", level: 90, color: "bg-orange-600" },
        { name: "Redis", level: 82, color: "bg-red-600" },
      ],
    },
    cloud: {
      title: t("cloudServices"),
      icon: Cloud,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20",
      skills: [
        { name: "AWS", level: 85, color: "bg-orange-500" },
        { name: "Docker", level: 88, color: "bg-blue-600" },
        { name: "Kubernetes", level: 50, color: "bg-blue-700" },
        { name: "CI/CD", level: 80, color: "bg-green-600" },
        { name: "Microservices", level: 82, color: "bg-purple-600" },
      ],
    },
    tools: {
      title: t("devTools"),
      icon: Code,
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      darkBgGradient: "from-indigo-900/20 to-purple-900/20",
      skills: [
        { name: "Git", level: 95, color: "bg-orange-600" },
        { name: "Jest", level: 85, color: "bg-red-600" },
        { name: "Postman", level: 90, color: "bg-orange-500" },
        { name: "Swagger", level: 88, color: "bg-green-600" },
        { name: "GraphQL", level: 80, color: "bg-pink-600" },
      ],
    },
  }

  return (
    <Section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-background-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-background-float delay-700" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-orange-400/8 to-red-400/8 rounded-full blur-3xl animate-background-float delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0-animate"}`}>
          <SectionHeader id="skills" title={t("skillsTitle")} description={t("skillsDescription")} />
        </div>

        {/* Skills Grid - تحسين التخطيط */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
          {Object.entries(skillsData).map(([key, skill], index) => {
            const IconComponent = skill.icon
            return (
              <Card
                key={key}
                className={`group hover-lift bg-gradient-to-br ${skill.bgGradient} dark:${skill.darkBgGradient} border-0 shadow-xl backdrop-blur-sm overflow-hidden relative h-full flex flex-col ${
                  isVisible ? `animate-fade-in-up delay-${(index + 2) * 150}` : "opacity-0-animate"
                }`}
              >
                {/* Card Header with Icon */}
                <CardHeader className="pb-4 relative flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-800 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300 truncate">
                          {skill.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {skill.skills.length}{" "}
                          {t("skillsDescription").includes("Technologies") ? "Technologies" : "تقنيات"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div
                    className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${skill.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  {/* Skills with Progress Bars */}
                  <div className="space-y-4 flex-1">
                    {skill.skills.map((skillItem, skillIndex) => (
                      <div
                        key={skillItem.name}
                        className={`group/skill ${
                          isVisible
                            ? `animate-fade-in-left delay-${(index + 2) * 150 + skillIndex * 100}`
                            : "opacity-0-animate"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors truncate flex-1 mr-2">
                            {skillItem.name}
                          </span>
                          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded-full flex-shrink-0">
                            {skillItem.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-white/60 dark:bg-gray-700/60 rounded-full overflow-hidden shadow-inner">
                          <div
                            className={`absolute top-0 left-0 h-full ${skillItem.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                            style={{
                              width: isVisible ? `${skillItem.level}%` : "0%",
                              transitionDelay: `${(index + 2) * 150 + skillIndex * 100 + 200}ms`,
                            }}
                          >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Overall Proficiency Badge */}
                  <div className="pt-4 border-t border-white/30 dark:border-gray-700/30 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 truncate flex-1 mr-2">
                        {t("overallProficiency")}
                      </span>
                      <Badge
                        className={`bg-gradient-to-r ${skill.gradient} text-white border-0 shadow-lg hover-scale font-bold flex-shrink-0`}
                      >
                        {Math.round(skill.skills.reduce((acc, s) => acc + s.level, 0) / skill.skills.length)}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-lg`}
                />
              </Card>
            )
          })}
        </div>

        {/* Skills Summary Stats */}
        <div className={`mt-16 ${isVisible ? "animate-fade-in-up delay-1000" : "opacity-0-animate"}`}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              {
                number: "25+",
                label: t("technologiesMastered"),
                icon: Zap,
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                number: "5+",
                label: t("yearsExperience"),
                icon: Shield,
                gradient: "from-green-500 to-emerald-500",
              },
              {
                number: "50+",
                label: t("projectsCompleted"),
                icon: Code,
                gradient: "from-blue-500 to-purple-500",
              },
              {
                number: "100%",
                label: t("qualityCommitment"),
                icon: Globe,
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="hover-lift bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg text-center group h-full"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg group-hover:scale-110 transition-all duration-300 mb-4 flex-shrink-0`}
                  >
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-800 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center leading-tight">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
