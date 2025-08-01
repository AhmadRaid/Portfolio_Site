"use client"

import { Users, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <Section id="about" className="bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <SectionHeader id="about" title={t("aboutTitle")} description={t("aboutDescription")} />
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">{t("teamwork")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 dark:text-gray-300">{t("teamworkDesc")}</p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">{t("performance")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 dark:text-gray-300">{t("performanceDesc")}</p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">{t("security")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 dark:text-gray-300">{t("securityDesc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
