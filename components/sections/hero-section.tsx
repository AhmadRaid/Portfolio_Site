"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink, Download, Github, Linkedin, Star, MapPin, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"

interface HeroSectionProps {
  onContactClick: () => void
  onProjectsClick: () => void
}

export function HeroSection({ onContactClick, onProjectsClick }: HeroSectionProps) {
  const { t, isRTL } = useLanguage()

  return (
    <Section id="home" className="py-20 md:py-32 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className={`flex flex-col justify-center space-y-8 ${isRTL ? "lg:order-1" : "lg:order-1"}`}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <Star className="w-4 h-4 mr-1" aria-hidden="true" />
                  {t("fullStackDeveloper")}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <Code2 className="w-4 h-4 mr-1" aria-hidden="true" />
                  {t("backendSpecialist")}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-medium shadow-sm animate-pulse"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping" />
                  {t("availableForWork")}
                </Badge>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200">
                    {t("name")}
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold leading-relaxed">
                  {t("title")}
                </h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t("description")}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={onContactClick}
              >
                {t("contactMe")}
                <Mail className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"}`} aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onProjectsClick}
                className="border-2 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent"
              >
                {t("viewProjects")}
                <ExternalLink className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"}`} aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 hover:bg-green-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent"
              >
                <Link href="/resume.pdf" download>
                  {t("downloadCV")}
                  <Download className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"}`} aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Link
                href="http://github.com/ahmadraid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 dark:text-gray-400"
                aria-label="GitHub Profile"
              >
                <Github className="h-7 w-7" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 dark:text-gray-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-7 w-7" />
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 dark:bg-slate-800 px-3 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                <span>{t("availableForNewProjects")}</span>
              </div>
            </div>
          </div>

          <div className={`flex items-center justify-center ${isRTL ? "lg:order-2" : "lg:order-2"}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                  <Image
                    src="/images/ahmad-raid-profile.jpg"
                    alt={`${t("name")} - ${t("fullStackDeveloper")}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  5+ {t("yearsExperience")}
                </div>
                <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-red-500" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce delay-500" />
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 animate-pulse delay-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
