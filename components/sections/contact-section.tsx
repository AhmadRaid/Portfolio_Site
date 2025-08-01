"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Section, SectionHeader } from "@/components/ui/section"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
import Link from "next/link"

export function ContactSection() {
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = {
    email: "eng.ahmadraid@gmail.com",
    phone: "+972592640032",
    location: isRTL ? "فلسطين، غزة" : "Palestine, Gaza",
  }

  const contactMethods = [
    {
      icon: Mail,
      title: t("email"),
      info: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: isRTL ? "راسلني مباشرة" : "Email me directly",
      color: "blue",
    },
    {
      icon: Phone,
      title: t("phone"),
      info: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      description: isRTL ? "اتصل بي مباشرة" : "Call me directly",
      color: "green",
    },
    {
      icon: MapPin,
      title: t("location"),
      info: contactInfo.location,
      href: "#",
      description: isRTL ? "موقعي الحالي" : "My current location",
      color: "red",
    },
  ]

  const responseTime = isRTL ? "عادة خلال 24 ساعة" : "Usually within 24 hours"

  return (
    <Section
      id="contact"
      className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-background-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-background-float delay-500" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/2 rounded-full blur-3xl animate-background-float delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0-animate"}`}>
          <SectionHeader
            id="contact"
            title={t("contactTitle")}
            description={
              isRTL
                ? "هل لديك مشروع أو فكرة؟ دعنا نتحدث حول كيف يمكنني مساعدتك في تحقيق أهدافك التقنية"
                : "Have a project or idea? Let's discuss how I can help you achieve your technical goals"
            }
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card
              className={`hover-lift shadow-xl border-0 bg-white/80 backdrop-blur-sm ${
                isVisible ? "animate-fade-in-up delay-200" : "opacity-0-animate"
              }`}
            >
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  {isRTL ? "أرسل رسالة" : "Send a Message"}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {isRTL
                    ? "املأ النموذج أدناه وسأتواصل معك في أقرب وقت ممكن"
                    : "Fill out the form below and I'll get back to you as soon as possible"}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {isRTL ? "الاسم الكامل" : "Full Name"} *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                          placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {isRTL ? "البريد الإلكتروني" : "Email Address"} *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                          placeholder={isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email address"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {isRTL ? "الموضوع" : "Subject"} *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      placeholder={isRTL ? "ما هو موضوع رسالتك؟" : "What's the subject of your message?"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {isRTL ? "الرسالة" : "Message"} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                      placeholder={isRTL ? "اكتب رسالتك هنا..." : "Write your message here..."}
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>{isRTL ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"}</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                      <span>{isRTL ? "حدث خطأ، يرجى المحاولة مرة أخرى" : "An error occurred, please try again"}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-semibold shadow-lg hover-lift disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{isRTL ? "جاري الإرسال..." : "Sending..."}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        <span>{isRTL ? "إرسال الرسالة" : "Send Message"}</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((contact, index) => (
                <Card
                  key={index}
                  className={`hover-lift bg-white/90 backdrop-blur-sm border-0 shadow-lg ${
                    isVisible ? `animate-fade-in-up delay-${300 + index * 100}` : "opacity-0-animate"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 animate-icon-hover`}
                      >
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 dark:text-white">{contact.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{contact.description}</p>
                        <p
                          className="text-gray-700 dark:text-gray-300 font-medium break-all"
                          dir={contact.title === t("phone") ? "ltr" : undefined}
                        >
                          {contact.info}
                        </p>
                        {contact.href !== "#" && (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="mt-3 hover-lift border-gray-200 hover:border-blue-500 hover:text-blue-600 bg-transparent"
                          >
                            <Link href={contact.href}>
                              {contact.title === t("email")
                                ? isRTL
                                  ? "إرسال إيميل"
                                  : "Send Email"
                                : isRTL
                                  ? "اتصال"
                                  : "Call Now"}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Response Time Info */}
            <Card
              className={`hover-lift bg-white/90 backdrop-blur-sm border-0 shadow-lg ${
                isVisible ? "animate-fade-in-up delay-600" : "opacity-0-animate"
              }`}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {isRTL ? "وقت الاستجابة" : "Response Time"}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{responseTime}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card
              className={`hover-lift bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-lg ${
                isVisible ? "animate-fade-in-up delay-700" : "opacity-0-animate"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">{isRTL ? "إحصائيات سريعة" : "Quick Stats"}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm opacity-90">{isRTL ? "سنوات خبرة" : "Years Experience"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-90">{isRTL ? "مشروع مكتمل" : "Projects Done"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">{isRTL ? "رضا العملاء" : "Client Satisfaction"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">{isRTL ? "دعم فني" : "Support"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}
