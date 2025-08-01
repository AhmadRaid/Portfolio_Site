"use client"

import { CheckCircle, Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

export function ProjectsSection() {
  const { t } = useLanguage()

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
      technologies: ["Laravel", "PostgreSQL", "JWT"],
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
      technologies: ["Laravel",  "MySQL", "AWS"],
      status: "completed",
      features: [t("taskFeature")],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  return (
    <Section id="projects" className="bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <SectionHeader id="projects" title={t("projectsTitle")} description={t("projectsDescription")} />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </div>
                  <Badge
                    className={
                      project.status === "completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }
                  >
                    {project.status === "completed" ? t("completed") : t("inDevelopment")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{project.features[0]}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl}>
                      <Github className="h-4 w-4 mr-2" />
                      {t("viewCode")}
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("liveDemo")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
