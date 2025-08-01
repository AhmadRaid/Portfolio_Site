"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink, Download, Github, Linkedin, Star, MapPin, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  onContactClick: () => void
  onProjectsClick: () => void
}

export function HeroSection({ onContactClick, onProjectsClick }: HeroSectionProps) {
  const { t, isRTL } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Section id="home" className="py-20 md:py-32 overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-background-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-background-float delay-500" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-400/3 rounded-full blur-2xl animate-background-float delay-1000" />
      </div>

      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`flex flex-col justify-center space-y-8 ${isRTL ? "lg:order-1" : "lg:order-1"}`}>
            <div className={`space-y-6 ${isLoaded ? "animate-fade-in-up" : "opacity-0-animate"}`}>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600 px-4 py-2 text-sm font-semibold shadow-lg hover-scale"
                >
                  <Star className="w-4 h-4 mr-1" aria-hidden="true" />
                  {t("fullStackDeveloper")}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-purple-600 px-4 py-2 text-sm font-semibold shadow-lg hover-scale"
                >
                  <Code2 className="w-4 h-4 mr-1" aria-hidden="true" />
                  {t("backendSpecialist")}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white border-green-600 px-4 py-2 text-sm font-semibold shadow-lg hover-scale"
                >
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-gentle-pulse" />
                  {t("availableForWork")}
                </Badge>
              </div>

              <div className="space-y-6">
                <h1
                  className={`hero-title text-5xl md:text-6xl xl:text-7xl tracking-tight leading-tight text-slate-700 dark:text-slate-200 ${isLoaded ? "animate-fade-in-up delay-200" : "opacity-0-animate"}`}
                >
                  <span className="bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 dark:from-slate-200 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent animate-gradient-shift">
                    {t("name")}
                  </span>
                </h1>
                <h2
                  className={`hero-subtitle text-xl md:text-2xl xl:text-3xl text-blue-600 dark:text-blue-400 leading-relaxed ${isLoaded ? "animate-fade-in-up delay-300" : "opacity-0-animate"}`}
                >
                  {t("title")}
                </h2>
                <p
                  className={`hero-description max-w-[600px] text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed ${isLoaded ? "animate-fade-in-up delay-400" : "opacity-0-animate"}`}
                >
                  {t("description")}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? "animate-fade-in-up delay-500" : "opacity-0-animate"}`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 shadow-xl text-white font-semibold hover-lift"
                onClick={onContactClick}
              >
                <span>{t("contactMe")}</span>
                <Mail className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onProjectsClick}
                className="border-2 border-slate-3靗0 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800 bg-white/80 backdrop-blur-sm shadow-lg font-semibold text-slate-700 dark:text-slate-200 hover-lift"
              >
                {t("viewProjects")}
                <ExternalLink className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-green-300 hover:bg-green-50 dark:border-green-600 dark:hover:bg-slate-800 bg-white/80 backdrop-blur-sm shadow-lg font-semibold text-slate-700 dark:text-slate-200 hover-lift"
              >
                {/* <Link href="/resume.pdf" download>
                  {t("downloadCV")}
                  <Download className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} aria-hidden="true" />
                </Link> */}
              </Button>
            </div>

            <div
              className={`flex items-center gap-6 pt-4 ${isLoaded ? "animate-fade-in-up delay-600" : "opacity-0-animate"}`}
            >
              <Link
                href="http://github.com/ahmadraid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 animate-icon-hover dark:text-slate-400"
                aria-label="GitHub Profile"
              >
                <Github className="h-8 w-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahmad-raid-33043a20a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 animate-icon-hover dark:text-slate-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-8 w-8" />
              </Link>
              <div className="text-xs text-gray-500 dark:text-gray-300 bg-gradient-to-r from-white/90 to-slate-50/90 dark:from-slate-800/90 dark:to-slate-700/90 px-4 py-3 rounded-full shadow-lg backdrop-blur-sm border border-slate-200 dark:border-slate-700 font-semibold hover-lift">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-gentle-pulse" aria-hidden="true" />
                <span>{t("availableForNewProjects")}</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className={`flex items-center justify-center ${isRTL ? "lg:order-2" : "lg:order-2"}`}>
            <div className={`relative ${isLoaded ? "animate-fade-in-right delay-700" : "opacity-0-animate"}`}>
              <div className="relative animate-gentle-float">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl hover-scale">
                  <Image
                    src="/images/ahmad-raid-profile.jpg"
                    alt={`${t("name")} - ${t("fullStackDeveloper")}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center transition-smooth hover:scale-110"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl hover-scale">
                  <span className="flex items-center gap-2">5+ {t("yearsExperience")}</span>
                </div>
                <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl hover-scale">
                  <MapPin className="h-5 w-5 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
