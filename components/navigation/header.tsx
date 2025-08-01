"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { Code, Menu, X } from "lucide-react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { useLanguage } from "@/hooks/use-language"

const navigationItems = [
  { id: "home", labelKey: "home" as const },
  { id: "about", labelKey: "about" as const },
  { id: "skills", labelKey: "skills" as const },
  { id: "projects", labelKey: "projects" as const },
  { id: "experience", labelKey: "experience" as const },
  { id: "contact", labelKey: "contact" as const },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useScrollSpy(navigationItems.map((item) => item.id))
  const { t, isRTL } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:bg-slate-900/95 shadow-sm">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label={t("home")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Code className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t("name")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 px-4 py-2 rounded-lg ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50 dark:bg-slate-800 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {t(item.labelKey)}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? (isRTL ? "إغلاق القائمة" : "Close menu") : isRTL ? "فتح القائمة" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t bg-white/98 backdrop-blur-md dark:bg-slate-900/98 shadow-lg -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16"
          >
            <nav
              className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 space-y-1"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full justify-start py-3 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50 dark:bg-slate-800 dark:text-blue-400"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-slate-800"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {t(item.labelKey)}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
