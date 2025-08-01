"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

export function ContactSection() {
  const { t, isRTL } = useLanguage()

  const contactInfo = {
    email: "eng.ahmadraid@gmail.com",
    phone: "+972592640032",
    location: isRTL ? "فلسطين، غزة" : "Palestine, Gaza",
  }

  return (
    <Section
      id="contact"
      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader id="contact" title={t("contactTitle")} description={t("contactDescription")} />

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="h-9 w-9 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mt-4">{t("email")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">{contactInfo.email}</p>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href={`mailto:${contactInfo.email}`}>{t("sendMessage")}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="h-9 w-9 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mt-4">{t("phone")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-300 font-medium text-lg" dir="ltr">
                {contactInfo.phone}
              </p>
              <Button
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href={`tel:${contactInfo.phone}`}>{t("callDirect")}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-9 w-9 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mt-4">{t("location")}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">{contactInfo.location}</p>
              <Button
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                variant="outline"
              >
                {t("viewOnMap")}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
          {[
            { number: "5+", label: t("statsYears"), color: "from-blue-600 to-blue-700" },
            { number: "50+", label: t("statsProjects"), color: "from-green-600 to-green-700" },
            { number: "100K+", label: t("statsUsers"), color: "from-purple-600 to-purple-700" },
            { number: "24/7", label: t("statsSupport"), color: "from-orange-600 to-orange-700" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 mb-4`}
              >
                <span className="text-2xl font-bold">{stat.number}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
