import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Ahmad Raid - Backend Engineer | Node.js Developer | أحمد رائد",
  description:
    "Software engineer specialized in backend development using Node.js with 4+ years of experience | مهندس برمجيات متخصص في تطوير الأنظمة الخلفية",
  keywords: "Node.js, Backend Engineer, JavaScript, TypeScript, MongoDB, PostgreSQL, AWS, Ahmad Raid, أحمد رائد",
  authors: [{ name: "Ahmad Raid" }],
  openGraph: {
    title: "Ahmad Raid - Backend Engineer",
    description: "Node.js Developer specialized in building scalable backend systems",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_PS",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${cairo.variable}`} lang="en" dir="ltr">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
