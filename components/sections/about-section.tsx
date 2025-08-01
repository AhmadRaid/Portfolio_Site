"use client"

import { Users, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

export function AboutSection() {
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

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    { icon: Users, title: t("teamwork"), desc: t("teamworkDesc"), color: "blue" },
    { icon: Zap, title: t("performance"), desc: t("performanceDesc"), color: "yellow" },
    { icon: Shield, title: t("security"), desc: t("securityDesc"), color: "green" },
  ]

  return (
    <Section id="about" className="bg-gray-50 dark:bg-slate-800/50 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-48 h-48 bg-blue-400/3 rounded-full blur-3xl animate-background-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-400/3 rounded-full blur-3xl animate-background-float delay-500" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0-animate"}`}>
          <SectionHeader id="about" title={t("aboutTitle")} description={t("aboutDescription")} />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`hover-lift ${
                isVisible ? `animate-fade-in-up delay-${(index + 2) * 100}` : "opacity-0-animate"
              }`}
            >
              <CardHeader className="text-center">
                <div
                  className={`mx-auto w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-full flex items-center justify-center transition-smooth animate-icon-hover`}
                >
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <CardTitle className="text-xl transition-smooth hover:text-blue-600">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 transition-smooth hover:text-gray-700 dark:hover:text-gray-200">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
