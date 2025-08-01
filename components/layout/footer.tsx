"use client"

import { Code, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                © 2024 {t("name")}. {t("rightsReserved")}
              </p>
              <p className="text-xs text-gray-500">{t("fullStackSpecialist")}</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="http://github.com/ahmadraid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <div className="text-xs text-gray-500">{t("builtWith")}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
