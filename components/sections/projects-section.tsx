"use client"

import { CheckCircle, Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
import Link from "next/link"

export function ProjectsSection() {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: "ecommerce",
      title: t("ecommerceTitle"),
      description: t("ecommerceDesc"),
      technologies: ["Node.js", "Laravel", "React", "MySQL", "Stripe API"],
      status: "completed",
      features: [t("ecommerceFeature")],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "cms",
      title: t("cmsTitle"),
      description: t("cmsDesc"),
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "JWT"],
      status: "completed",
      features: [t("cmsFeature")],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "chat",
      title: t("chatTitle"),
      description: t("chatDesc"),
      technologies: ["Node.js", "Socket.io", "React", "Redis", "Docker"],
      status: "development",
      features: [t("chatFeature")],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "task-manager",
      title: t("taskTitle"),
      description: t("taskDesc"),
      technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
      status: "completed",
      features: [t("taskFeature")],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  return (
    <Section id="projects" className="bg-gray-50 dark:bg-slate-800/50 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-60 h-60 bg-purple-400/3 rounded-full blur-3xl animate-background-float" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/3 rounded-full blur-3xl animate-background-float delay-500" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0-animate"}`}>
          <SectionHeader id="projects" title={t("projectsTitle")} description={t("projectsDescription")} />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`hover-lift ${
                isVisible ? `animate-fade-in-up delay-${(index + 2) * 150}` : "opacity-0-animate"
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl transition-smooth hover:text-blue-600">{project.title}</CardTitle>
                    <CardDescription className="mt-2 transition-smooth hover:text-gray-700 dark:hover:text-gray-200">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge
                    className={`${
                      project.status === "completed"
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    } animate-badge-hover`}
                  >
                    {project.status === "completed" ? t("completed") : t("inDevelopment")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="animate-badge-hover">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{project.features[0]}</span>
                </div>
                <div className="flex space-x-2">
                  {/* <Button size="sm" variant="outline" asChild className="hover-lift bg-transparent">
                    <Link href={project.githubUrl}>
                      <Github className="h-4 w-4 mr-2" />
                      {t("viewCode")}
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="hover-lift">
                    <Link href={project.liveUrl}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("liveDemo")}
                    </Link>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
